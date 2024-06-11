import { InputAdornment, Stack } from '@mui/material';
import React, { useState } from 'react';

import { GlobalIcon } from '@/devlink/GlobalIcon';
import { AllInterviewEmpty } from '@/devlink2/AllInterviewEmpty';
import { InterviewMemberSide } from '@/devlink2/InterviewMemberSide';
import { ShowCode } from '@/src/components/Common/ShowCode';
import UITextField from '@/src/components/Common/UITextField';

import DynamicLoader from '../../Interviewers/DynamicLoader';
import { ScheduleListType } from './hooks';
import ScheduleMeetingList from './ScheduleMeetingList';

function ModuleSchedules({
  isFetched,
  newScheduleList,
}: {
  isFetched: boolean;
  newScheduleList: ScheduleListType;
}) {
  const [filter, setFilter] = React.useState<
    'all' | 'confirmed' | 'cancelled' | 'completed' | 'waiting'
  >('confirmed');
  const [changeText, setChangeText] = useState('');

  if (!isFetched) {
    return <DynamicLoader />;
  }

  const newFilterSchedules = () => {
    const filSch = newScheduleList;
    switch (filter) {
      case 'all':
        return filSch;
      default:
        return filSch.filter(
          (sch) =>
            sch.interview_meeting.status === filter &&
            sch.interview_meeting.session_name
              .toLowerCase()
              .includes(changeText.toLowerCase()),
        );
    }
  };

  return (
    <InterviewMemberSide
      slotInterview={
        <Stack>
          <UITextField
            height={32}
            width='300px'
            value={changeText}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <GlobalIcon iconName='search' size='5'/>
                </InputAdornment>
              ),
            }}
            placeholder={'Search by session name'}
            onChange={(e) => {
              setChangeText(e.target.value);
            }}
          />
        </Stack>
      }
      isUpcomingActive={filter === 'confirmed'}
      isCancelActive={filter === 'cancelled'}
      isCompletedActive={filter === 'completed'}
      onClickUpcoming={{
        onClick: () => setFilter('confirmed'),
      }}
      onClickCancelled={{
        onClick: () => setFilter('cancelled'),
      }}
      onClickCompleted={{
        onClick: () => setFilter('completed'),
      }}
      slotInterviewCard={
        <ShowCode>
          <ShowCode.When
            isTrue={isFetched && newFilterSchedules()?.length === 0}
          >
            <AllInterviewEmpty textDynamic='No schedule found' />
          </ShowCode.When>
          <ShowCode.When isTrue={isFetched}>
            <ScheduleMeetingList filterSchedules={newFilterSchedules()} />
          </ShowCode.When>
        </ShowCode>
      }
    />
  );
}

export default ModuleSchedules;
