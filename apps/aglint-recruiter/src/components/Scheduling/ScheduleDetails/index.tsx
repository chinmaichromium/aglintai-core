// import Feedback from './Feedback';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Breadcrum } from '@/devlink2/Breadcrum';
import { PageLayout } from '@/devlink2/PageLayout';
import { NewTabPill } from '@/devlink3/NewTabPill';
import { ScheduleDetailTabs } from '@/devlink3/ScheduleDetailTabs';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';

import Loader from '../../Common/Loader';
import { ShowCode } from '../../Common/ShowCode';
import CandidateInfo from '../Common/CandidateInfo';
import CancelReasonCards from './CancelReasonCards';
import ChangeInterviewerDialog from './ChangeInterviewerDialog';
import FeedbackWindow from './Feedback';
import { useScheduleDetails } from './hooks';
import Instructions from './Instructions';
import JobDetails from './JobDetails';
import Overview from './Overview';

function SchedulingViewComp() {
  const router = useRouter();
  const { isAllowed } = useAuthDetails();
  const { data, isPending, refetch, isFetched } = useScheduleDetails();
  const [isChangeInterviewerOpen, setIsChangeInterviewerOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [cancelUserId, setCancelUserId] = useState('');

  const schedule = data?.schedule_data;
  const cancelReasons = data?.cancel_data?.filter(
    (item) => !item.interview_session_cancel.cancel_user_id,
  );

  const viewScheduleTabs = [
    { name: 'Candidate Details', tab: 'candidate_details', hide: false },
    { name: 'Job Details', tab: 'job_details', hide: false },
    { name: 'Instructions', tab: 'instructions', hide: false },
    {
      name: 'Feedback',
      tab: 'feedback',
      hide: false,
    },
  ];

  return (
    <ShowCode>
      <ShowCode.When isTrue={isPending || !isFetched}>
        <Loader />
      </ShowCode.When>
      <ShowCode.Else>
        <ChangeInterviewerDialog
          isChangeInterviewerOpen={isChangeInterviewerOpen}
          setIsChangeInterviewerOpen={setIsChangeInterviewerOpen}
          schedule={schedule}
          cancelUserId={cancelUserId}
          setCancelUserId={setCancelUserId}
        />
        <PageLayout
          onClickBack={{
            onClick: () => {
              router.back();
            },
          }}
          isBackButton={true}
          slotTopbarLeft={
            <>
              <Breadcrum textName={schedule?.schedule.schedule_name} />
            </>
          }
          slotBody={
            <ScheduleDetailTabs
              slotScheduleTabOverview={
                <Stack spacing={'var(--space-4)'}>
                  {isAllowed([
                    'admin',
                    'recruiting_coordinator',
                    'hiring_manager',
                    'recruiter',
                  ]) && (
                    <CancelReasonCards
                      cancelReasons={cancelReasons}
                      schedule={schedule}
                      setCancelUserId={setCancelUserId}
                      cancelUserId={cancelUserId}
                      setIsChangeInterviewerOpen={setIsChangeInterviewerOpen}
                    />
                  )}

                  <Overview
                    refetch={refetch}
                    cancelReasons={cancelReasons}
                    schedule={schedule}
                    isCancelOpen={isCancelOpen}
                    setIsCancelOpen={setIsCancelOpen}
                  />
                </Stack>
              }
              slotDarkPills={viewScheduleTabs
                .filter(
                  (item) =>
                    !item.hide &&
                    (item.tab !== 'feedback' ||
                      schedule?.interview_meeting?.status === 'completed'),
                )
                .map((item, i: number) => {
                  return (
                    <NewTabPill
                      textLabel={item.name}
                      key={i}
                      isPillActive={router.query.tab === item.tab}
                      onClickPill={{
                        onClick: () => {
                          router.replace(
                            `/scheduling/view?meeting_id=${router.query.meeting_id}&tab=${item.tab}`,
                          );
                        },
                      }}
                    />
                  );
                })}
              slotTabContent={
                <ShowCode>
                  <ShowCode.When
                    isTrue={
                      router.query.tab === 'candidate_details' ||
                      !router.query.tab
                    }
                  >
                    {schedule && (
                      <CandidateInfo
                        application_id={schedule.schedule.application_id}
                        job_id={schedule.job.id}
                      />
                    )}
                  </ShowCode.When>
                  <ShowCode.When isTrue={router.query.tab === 'instructions'}>
                    <Instructions schedule={schedule} />
                  </ShowCode.When>
                  <ShowCode.When isTrue={router.query.tab === 'feedback'}>
                    <Stack margin={'var(--space-4)'}>
                      <FeedbackWindow
                        interview_sessions={[
                          {
                            id: schedule?.interview_session.id,
                            title: schedule?.interview_session.name,
                            created_at: schedule?.interview_session.created_at,
                            time: {
                              start: schedule?.interview_meeting.start_time,
                              end: schedule?.interview_meeting.end_time,
                            },
                            status: schedule?.interview_meeting.status,
                          },
                        ]}
                        candidate={{
                          email: schedule?.candidates.email,
                          name: `${schedule?.candidates.first_name || ''} ${schedule?.candidates.last_name || ''}`.trim(),
                          job_id: schedule?.job?.id,
                        }}
                      />
                    </Stack>
                  </ShowCode.When>
                  <ShowCode.When isTrue={router.query.tab === 'job_details'}>
                    <JobDetails schedule={schedule} />
                  </ShowCode.When>
                </ShowCode>
              }
            />
          }
        />
      </ShowCode.Else>
    </ShowCode>
  );
}

export default SchedulingViewComp;
