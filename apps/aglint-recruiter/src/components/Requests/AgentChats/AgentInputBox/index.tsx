/* eslint-disable security/detect-object-injection */
import { Stack } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { useRequests } from '@/context/RequestsContext';
import { SafeObject } from '@/utils/safeObject';
import { supabase } from '@/utils/supabase/client';
import toast from '@/utils/toast';

import { useAgentIEditor } from '../AgentEditorContext';
import { useUserChat } from '../ChatMessageList/hooks/fetch';
import AgentEditor from './AgentEditor';
import CreateSchedulePopUp from './CreateSchedulePopUp';
import { type selectedItemsType, scheduleTypes } from './utils';

function AgentInputBox() {
  const { recruiter_id } = useAuthDetails();
  const {
    text,
    setText,
    inputRef,
    isResponding,
    setIsResponding,
    setPlanText,
  } = useAgentIEditor();

  const [selectedItems, setSelectedItems] = useState<selectedItemsType>(null);
  // eslint-disable-next-line no-unused-vars

  const { requests } = useRequests();

  const { data: jobsAndApplications, isFetched: isJobFetched } =
    useAllJobsAndApplications({
      recruiter_id,
      schedule_type: selectedItems?.schedule_type[0]?.id,
    });
  const applications = selectedItems?.job_title[0]?.id
    ? jobsAndApplications?.applications.filter(
        (application) => application.job_id === selectedItems?.job_title[0]?.id,
      )
    : jobsAndApplications?.applications;

  const applicant_sessions = selectedItems?.applicant_name[0]?.id
    ? applications.find(
        (ele) => ele.id === selectedItems?.applicant_name[0]?.id,
      )?.applicantSessions
    : [];

  const { handleAgentSubmit } = useUserChat();

  const handleSubmit = async ({ planText }: { planText: string }) => {
    if (!isResponding) {
      try {
        setIsResponding(true);
        if (!planText) return;

        setText('');
        await handleAgentSubmit({ planText, selectedItems });
      } catch (err) {
        toast.error('Failed to process request. Please contact support.');
      } finally {
        setIsResponding(false);
      }
    }
  };

  function handleTextChange({
    newValue,
    newPlainTextValue,
  }: {
    newValue: string;
    newPlainTextValue: string;
  }) {
    setPlanText(newPlainTextValue);
    function extractIdsAndNames(input: string) {
      const regex = /(\w+)\[([^[\]]+)\]:\[([^[\]]+)\]/g;
      let match;
      const result = {
        schedule_type: [],
        job_title: [],
        applicant_name: [],
        interview_name: [],
        request_name: [],
      };

      while ((match = regex.exec(input)) !== null) {
        result[match[1]].push({ id: match[2], name: match[3] });
      }

      return result;
    }

    const items = extractIdsAndNames(newValue);
    if (selectedItems?.applicant_name.length) {
      const id = selectedItems.applicant_name[0].id;
      const selectedApplication = jobsAndApplications.applications.find(
        (application) => application.id === id,
      ) as Awaited<
        ReturnType<typeof getJobsAndApplications>
      >['applications'][number];
      items.job_title = [
        {
          id: selectedApplication.public_jobs.id,
          name: selectedApplication.public_jobs.job_title,
        },
      ];
    }
    setSelectedItems(items);
  }

  return (
    <>
      <Stack position={'relative'} alignItems={'center'}>
        <Stack position={'absolute'} bottom={'95px'} zIndex={1}>
          <CreateSchedulePopUp
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setText={setText}
          />
        </Stack>
        <AgentEditor
          inputRef={inputRef}
          text={text}
          setText={setText}
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
          requestList={
            requests.status === 'success'
              ? (SafeObject.values(requests?.data) ?? [])
                  .flatMap((ele) => ele)
                  .filter((ele) =>
                    selectedItems?.schedule_type[0]?.id === 're_schedule' ||
                    selectedItems?.schedule_type[0]?.id === 'cancel'
                      ? ele.status === 'completed'
                      : ele,
                  )
                  .map((ele) => ({
                    id: ele.id,
                    display: ele.title,
                  }))
              : []
          }
          scheduleTypes={scheduleTypes}
          jobList={
            isJobFetched
              ? jobsAndApplications.jobs.map((job) => ({
                  id: job.id,
                  display: job.job_title,
                }))
              : []
          }
          applicationsList={
            applications
              ? applications.map((application) => ({
                  id: application.id,
                  display:
                    application.candidates.first_name +
                    ' ' +
                    application.candidates.last_name,
                }))
              : []
          }
          sessionList={
            applicant_sessions
              ? applicant_sessions.map((session) => ({
                  id: session.id,
                  display: session.name,
                }))
              : []
          }
        />
      </Stack>
    </>
  );
}

export default AgentInputBox;

export const useAllJobsAndApplications = ({
  recruiter_id,
  schedule_type,
}: {
  recruiter_id: string;
  schedule_type: selectedItemsType['schedule_type'][0]['id'];
}) => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ['get_All_job_List', recruiter_id],

    queryFn: () =>
      getJobsAndApplications({
        recruiter_id,
      }),
    gcTime: 20000,
    enabled: !!recruiter_id,
    refetchInterval: schedule_type ? 5000 : 30000,
  });
  const refetch = () =>
    queryClient.invalidateQueries({ queryKey: ['get_All_job_List'] });
  return { ...query, refetch };
};

async function getJobsAndApplications({
  recruiter_id,
}: {
  recruiter_id: string;
}) {
  const { data: jobs } = await supabase
    .from('public_jobs')
    .select(
      '*, applications(*, candidates(first_name,last_name), public_jobs(id,job_title), request(status,request_relation(session_id)), interview_meeting(status,interview_session(id,name)))',
    )
    .eq('recruiter_id', recruiter_id)
    .eq('status', 'published')
    .eq('applications.status', 'interview')
    .throwOnError();
  const applicationsList = (jobs ?? []).flatMap(
    ({ applications }) => applications,
  );
  const applications = applicationsList.map((ele) => {
    const applicantSessions = ele?.interview_meeting
      ? ele.interview_meeting
          .filter((meeting) => meeting.status !== 'waiting')
          .map((meeting) => meeting.interview_session)
          .flat()
      : [];
    return { ...ele, applicantSessions };
  });
  const jobsWithoutApplicationSessions = jobs
    .filter((ele) =>
      applications
        .filter((ele) => ele.applicantSessions.length === 0)
        .map((ele) => ele.job_id)
        .includes(ele.id),
    )
    .map((ele) => ele.id);
  return {
    jobs: jobs
      .filter((ele) => ele.applications.length)
      .filter((ele) => !jobsWithoutApplicationSessions.includes(ele.id)),
    applications: applications.filter((ele) => ele.applicantSessions.length),
  };
}
