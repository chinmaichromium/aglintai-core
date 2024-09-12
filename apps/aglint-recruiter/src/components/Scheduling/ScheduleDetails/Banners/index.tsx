import { type DatabaseTable } from '@aglint/shared-types';
import { GlobalBanner } from '@devlink2/GlobalBanner';
import { Stack } from '@mui/material';
import React from 'react';

import { UIButton } from '@/components/Common/UIButton';

import { useScheduleDetails } from '../hooks';
import { onClickAccept } from '../utils';

interface CancelReasonCardsProps {
  refetch: () => void;
  sessionRelation: DatabaseTable['interview_session_relation'];
  setIsDeclineOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Banners({
  refetch,
  sessionRelation,
  setIsDeclineOpen,
}: CancelReasonCardsProps) {
  const { data } = useScheduleDetails();
  const schedule = data?.schedule_data;

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
                <UIButton
                  variant='secondary'
                  size='sm'
                  onClick={() => {
                    setIsDeclineOpen(true);
                  }}
                >
                  Decline
                </UIButton>
              )}

              {isAcceptVisible && (
                <UIButton
                  variant='default'
                  size='sm'
                  onClick={async () => {
                    await onClickAccept(sessionRelation.id);
                    refetch();
                  }}
                >
                  Accept
                </UIButton>
              )}
            </>
          }
        />
      )}
    </Stack>
  );
}

export default Banners;
