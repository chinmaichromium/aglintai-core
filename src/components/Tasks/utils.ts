/* eslint-disable no-unused-vars */
import axios from 'axios';
import dayjs from 'dayjs';

import { ApplicationType } from '@/src/context/CandidateAssessment/types';
import { Supabase } from '@/src/pages/api/job/jobApplications/candidateUpload/types';
import { DatabaseEnums } from '@/src/types/customSchema';
import { CandidateType, RecruiterUserType } from '@/src/types/data.types';
import { supabase } from '@/src/utils/supabase/client';
import { capitalizeAll } from '@/src/utils/text/textUtils';

export const EmailAgentId = '5acd5b49-a53d-4fc6-9365-ed5c7a7c08c1';
export const PhoneAgentId = '241409e5-45c6-451a-b576-c54388924e76';

export type assigneeType = RecruiterUserType & {
  assignee: 'Agents' | 'Interviewers';
};

export type JobCandidatesType = ApplicationType & {
  candidates: CandidateType;
};

export const agentsDetails = [
  {
    id: EmailAgentId,
    label: 'Email',
  },
  {
    id: PhoneAgentId,
    label: 'Phone',
  },
];

export async function extractDataFromText(
  text: string,
  recruiterUserId: string,
) {
  const { data } = await axios.post('/api/ai/queryToJson', {
    // As an AI, your task is to translate recruiters' scheduling requests into the JSON format shown below. When generating schedule times, ensure all appointments are set on business days (Monday through Friday). Here is an example request: "Schedule a first-round interview for John Doe on the next available Friday afternoon." Use this information to create a JSON object that organizes the interview details appropriately, including whether the scheduling should be coordinated via email or phone call.
    prompts: [
      {
        role: 'system',
        content: `
        query is >>> ${text} <<<
        
          set this data to json object
          {
            "name":"extract task name",
            "type":'enum("schedule")',
            "start_date":"'extract the date and time ( MM-DD-YYYY HH:mm:ss )' || 'current date'
            ",
            "end_date":" 'extract the date and time ( MM-DD-YYYY HH:mm:ss )' || 'current date'
            ",
            "assignee":"
            if(query.includes('phone') || query.includes('call'))
            return ${PhoneAgentId}
            else if(query.includes('email')) 
            return ${EmailAgentId}
            else ${recruiterUserId}
            ",
          } 
  
          Reference details:
           today date is ${dayjs().toString()}
          `,
      },
    ],
  });
  return JSON.parse(data);
}

// debounce for task update

export type UpdateFunction = (taskId: string, changeValue: string) => void;

export function taskUpdateDebounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) {
  let timerId: ReturnType<typeof setTimeout> | null;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(this, args);
      timerId = null;
    }, delay) as any;
  };
}
// end
type ProgressType = 'status_update' | 'create_task';
// assignerId,
// assignerName,
// creatorName,
// currentStatus,
// status,
type optionDataType = {
  assignerId?: string;
  assignerName?: string;
  creatorName?: string;
  currentStatus?: DatabaseEnums['task_status'];
  status?: DatabaseEnums['task_status'];
  supabse?: Supabase;
};

export async function createTaskProgress({
  type,
  optionData,
  data,
}: {
  type: ProgressType;
  optionData?: optionDataType;
  data: {
    task_id: string;
    created_by: {
      name: string;
      id: string;
    };
    progress_type: DatabaseEnums['progress_type'];
    jsonb_data?: null;
  };
}) {
  var { assignerId, assignerName, creatorName, currentStatus, status } =
    optionData;

  const progressTitle = (cusType) => {
    switch (cusType) {
      case 'status_update':
        return `Task status moved from <span class="${currentStatus}">${capitalizeAll(currentStatus.split('_').join(' '))}</span> to <span class="${status}">${capitalizeAll(status.split('_').join(' '))}</span>`;
      case 'create_task':
        return `Task assigned to <span ${assignerId === EmailAgentId || assignerId === PhoneAgentId ? 'class="agent_mention"' : 'class="mention"'}>@${capitalizeAll(assignerName)}</span> by <span class="mention">@${creatorName}</span>`;
      default:
        return 'Invalid type';
    }
  };

  const { error, data: progress } = await supabase
    .from('new_tasks_progress')
    .insert({ ...data, title: progressTitle(type) })
    .select();
  if (!error) {
    return progress;
  }
}
