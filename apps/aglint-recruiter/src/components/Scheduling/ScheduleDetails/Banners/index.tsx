import { DatabaseTable } from '@aglint/shared-types';
import { Stack } from '@mui/material';
import React, { useState } from 'react';

import { ButtonSoft } from '@/devlink/ButtonSoft';
import { ButtonSolid } from '@/devlink/ButtonSolid';
import { GlobalBanner } from '@/devlink2/GlobalBanner';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { getFullName } from '@/src/utils/jsonResume';
import toast from '@/src/utils/toast';

import { onClickResendInvite } from '../../CandidateDetails/utils';
import { useScheduleDetails } from '../hooks';
import { ScheduleMeeting } from '../types';
import { fetchFilterJson, onClickAccept, onClickCopyLink } from '../utils';
import CancelBannersScheduleDetails from './Cancel';

interface CancelReasonCardsProps {
  cancelReasons: ReturnType<typeof useScheduleDetails>['data']['cancel_data'];
  schedule: ScheduleMeeting;
  setCancelUserId: React.Dispatch<React.SetStateAction<string>>;
  cancelUserId: string;
  setIsChangeInterviewerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterJson: Awaited<ReturnType<typeof fetchFilterJson>>;
  requestAvailibility: DatabaseTable['candidate_request_availability'];
  refetch: () => void;
  sessionRelation: DatabaseTable['interview_session_relation'];
  setIsDeclineOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRequestRescheduleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Banners({
  cancelReasons,
  schedule,
  setCancelUserId,
  cancelUserId,
  setIsChangeInterviewerOpen,
  filterJson,
  requestAvailibility,
  refetch,
  sessionRelation,
  setIsDeclineOpen,
  setIsRequestRescheduleOpen,
}: CancelReasonCardsProps) {
  const { recruiterUser } = useAuthDetails();

  const [copied, setCopied] = useState(false);

  const meetingFlow = schedule.interview_meeting.meeting_flow;

  const isUnconfirmedBannerVisible =
    schedule.interview_meeting.status === 'waiting' &&
    schedule.interview_meeting.meeting_flow !== 'debrief' &&
    (meetingFlow === 'self_scheduling' || meetingFlow === 'candidate_request');

  const isAcceptVisible =
    sessionRelation?.accepted_status === 'waiting' &&
    schedule.interview_meeting.status === 'confirmed' &&
    sessionRelation?.training_type === 'qualified';

  const isDeclineVisible =
    sessionRelation?.accepted_status !== 'declined' &&
    sessionRelation?.accepted_status !== 'request_reschedule' &&
    schedule.interview_meeting.status === 'confirmed' &&
    sessionRelation?.training_type === 'qualified';

  const isConfirmed = schedule.interview_meeting.status === 'confirmed';

  // if logged in user is an interviewer in this session
  const isRequestRescheduleButtonVisible =
    schedule?.users?.find(
      (user) =>
        user.interview_session_relation.is_confirmed &&
        user.email === recruiterUser.email &&
        user.interview_session_relation.training_type === 'qualified',
    ) &&
    !cancelReasons?.some(
      (item) =>
        item.recruiter_user.id === recruiterUser.user_id &&
        !item.interview_session_cancel.is_resolved,
    ) &&
    schedule?.interview_meeting?.status === 'confirmed';

  return (
    <Stack spacing={'var(--space-4)'}>
      {isConfirmed && (isDeclineVisible || isAcceptVisible) && (
        <GlobalBanner
          color={'info'}
          textTitle={'You are invited for this interview'}
          isDescriptionVisible={false}
          isAdditionalNotes={false}
          iconName={'archive'}
          slotButtons={
            <>
              {isDeclineVisible && (
                <ButtonSoft
                  size={'1'}
                  textButton={'Decline'}
                  color={'neutral'}
                  onClickButton={{
                    onClick: () => {
                      setIsDeclineOpen(true);
                    },
                  }}
                />
              )}
              {isRequestRescheduleButtonVisible && (
                <ButtonSoft
                  color={'accent'}
                  size={1}
                  textButton={'Request Reschedule'}
                  onClickButton={{
                    onClick: () => {
                      setIsRequestRescheduleOpen(true);
                    },
                  }}
                />
              )}
              {isAcceptVisible && (
                <ButtonSolid
                  size={'1'}
                  textButton={'Accept'}
                  onClickButton={{
                    onClick: async () => {
                      await onClickAccept(sessionRelation.id);
                      refetch();
                    },
                  }}
                />
              )}
            </>
          }
        />
      )}

      {isUnconfirmedBannerVisible && (
        <GlobalBanner
          color={'warning'}
          textTitle={
            meetingFlow === 'self_scheduling'
              ? 'Candidate received a self scheduling link'
              : meetingFlow === 'candidate_request'
                ? 'Candidate received a request availibility link'
                : ''
          }
          textDescription={
            meetingFlow === 'self_scheduling'
              ? 'The interview will be confirmed once the candidate picks the suitable option'
              : meetingFlow === 'candidate_request'
                ? 'The interview will be confirmed once the candidate picks the suitable option and you confirm it'
                : ''
          }
          slotButtons={
            <>
              <ButtonSoft
                size={'1'}
                textButton={copied ? 'Copied' : 'Copy link'}
                onClickButton={{
                  onClick: () => {
                    if (!copied) {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 2000);
                      onClickCopyLink({
                        schedule_id: schedule.schedule.id,
                        filter_id: filterJson?.id,
                        request_id: requestAvailibility?.id,
                        task_id: filterJson?.new_tasks[0]?.id,
                      });
                    }
                  },
                }}
              />
              <ButtonSolid
                size={'1'}
                textButton={'Resend'}
                onClickButton={{
                  onClick: () => {
                    if (
                      schedule.interview_meeting.status === 'waiting' ||
                      schedule.interview_meeting.status === 'confirmed'
                    ) {
                      onClickResendInvite({
                        session_name: schedule.interview_session.name,
                        application_id: schedule.schedule.application_id,
                        candidate_name: getFullName(
                          schedule.candidates.first_name,
                          schedule.candidates.last_name,
                        ),
                        rec_user_id: recruiterUser.user_id,
                        filter_id: filterJson?.id,
                        request_id: requestAvailibility?.id,
                        task_id: filterJson?.new_tasks[0].id,
                      });
                    } else {
                      toast.warning(
                        'Email will be sent only if meeting status is waiting or confirmed',
                      );
                    }
                  },
                }}
              />
            </>
          }
        />
      )}
      <CancelBannersScheduleDetails
        cancelReasons={cancelReasons}
        schedule={schedule}
        cancelUserId={cancelUserId}
        setCancelUserId={setCancelUserId}
        setIsChangeInterviewerOpen={setIsChangeInterviewerOpen}
      />
    </Stack>
  );
}

export default Banners;
