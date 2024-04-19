import dayjs from 'dayjs';
import { capitalize } from 'lodash';
import { useEffect, useState } from 'react';

import {
  AvatarWithName,
  InterviewTaskPill,
  ListCard,
  ViewTaskCard,
} from '@/devlink3';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import { fetchInterviewSessionTask } from '@/src/components/Scheduling/AllSchedules/SchedulingApplication/hooks';
import {
  TasksAgentContextType,
  useTasksContext,
} from '@/src/context/TasksContextProvider/TasksContextProvider';

import AssigneeChip from '../../../Components/AssigneeChip';
import StatusChip from '../../../Components/StatusChip';
import { EmailAgentId, PhoneAgentId } from '../../../utils';
import { CallIcon, EmailIcon } from '../../AddNewTask';
import SelectDueDate from '../../AddNewTask/SelecteDueDate';
import SelectScheduleDate from '../../AddNewTask/SelectScheduleDate';
import SessionList from '../../AddNewTask/SessionList';
import TriggerTime from '../../AddNewTask/TriggerTime';

function TaskCard({ task }: { task: TasksAgentContextType['tasks'][number] }) {
  const { handelUpdateTask } = useTasksContext();
  const [sessionList, setSessionList] = useState<Awaited<
    ReturnType<typeof fetchInterviewSessionTask>
  > | null>([]);
  const [selectedSession, setSelectedSession] = useState([]);

  const [scheduleDate, setScheduleDate] = useState({
    start_date: null,
    end_date: null,
  });

  const [selectedDueDate, setSelectedDueDate] = useState<string>(null);
  const [selectTriggerTime, setSelectTriggerTime] = useState<string>(null);
  async function getSessionList() {
    const data = await fetchInterviewSessionTask({
      application_id: task?.application_id,
      job_id: task.applications?.job_id,
    });
    setSessionList(data);
    return data;
  }
  useEffect(() => {
    if (task) {
      setScheduleDate({ ...task.schedule_date_range });
      setSelectedSession([...task.session_ids]);
      setSelectedDueDate(task.due_date);
      setSelectTriggerTime(task.start_date);
      getSessionList();
    }
  }, []);

  useEffect(() => {
    if (
      selectTriggerTime ||
      selectedDueDate ||
      selectedSession.length ||
      scheduleDate.start_date
    ) {
      handelUpdateTask({
        id: task.id,
        data: {
          due_date: dayjs(selectedDueDate).toString(),
          session_ids: selectedSession,
          start_date: dayjs(selectTriggerTime).toString(),
          schedule_date_range: { ...scheduleDate },
        },
      });
    }
  }, [selectedSession, scheduleDate, selectedDueDate, selectTriggerTime]);

  return (
    <>
      <ViewTaskCard
        slotType={
          <InterviewTaskPill textInterviewName={capitalize(task.type)} />
        }
        slotJob={task?.applications?.public_jobs?.job_title}
        slotCandidate={
          task.application_id && (
            <ListCard
              isAvatarWithNameVisible={true}
              isListVisible={false}
              slotAvatarWithName={
                task.applications?.candidates && (
                  <AvatarWithName
                    slotAvatar={
                      <MuiAvatar
                        height={'25px'}
                        width={'25px'}
                        src={task.applications?.candidates.avatar}
                        variant='circular'
                        fontSize='14px'
                        level={capitalize(
                          task.applications.candidates?.first_name +
                            ' ' +
                            task.applications.candidates?.last_name,
                        )}
                      />
                    }
                    textName={capitalize(
                      task.applications.candidates?.first_name +
                        ' ' +
                        task.applications.candidates?.last_name,
                    )}
                  />
                )
              }
            />
          )
        }
        slotAssignedTo={<AssigneeChip assigneeId={task.assignee[0]} />}
        slotInterviewTaskPill={
          <SessionList
            selectedSession={selectedSession}
            setSelectedSession={setSelectedSession}
            sessionList={sessionList}
            isOptionList={task.status === 'not_started'}
          />
        }
        slotInterviewDate={
          <SelectScheduleDate
            scheduleDate={scheduleDate}
            setScheduleDate={setScheduleDate}
            isOptionList={task.status === 'not_started'}
          />
        }
        slotCreatedBy={
          task.recruiter_user && (
            <ListCard
              isAvatarWithNameVisible={true}
              isListVisible={false}
              slotAvatarWithName={
                task.recruiter_user && (
                  <AvatarWithName
                    slotAvatar={
                      <MuiAvatar
                        height={'25px'}
                        width={'25px'}
                        src={task.recruiter_user.profile_image}
                        variant='circular'
                        fontSize='14px'
                        level={capitalize(
                          task.recruiter_user.first_name +
                            ' ' +
                            task.recruiter_user.last_name,
                        )}
                      />
                    }
                    textName={capitalize(
                      task.recruiter_user.first_name +
                        ' ' +
                        task.recruiter_user.last_name,
                    )}
                  />
                )
              }
            />
          )
        }
        slotDueDate={
          <SelectDueDate
            selectedDueDate={selectedDueDate}
            setSelectedDueDate={setSelectedDueDate}
            isOptionList={task.status === 'not_started'}
          />
        }
        slotWhenToCall={
          <TriggerTime
            selectTriggerTime={selectTriggerTime}
            setSelectTriggerTime={setSelectTriggerTime}
            isOptionList={task.status === 'not_started'}
          />
        }
        slotStatus={<StatusChip status={task.status} />}
        isWhenToCallVisible={
          task?.assignee[0] === EmailAgentId ||
          task?.assignee[0] === PhoneAgentId
        }
        textWhenToCall={
          task?.assignee[0] === EmailAgentId ? 'When to mail' : 'When to call'
        }
        slotWhentoCallIcon={
          task?.assignee[0] === EmailAgentId ? <EmailIcon /> : <CallIcon />
        }
      />
    </>
  );
}

export default TaskCard;
