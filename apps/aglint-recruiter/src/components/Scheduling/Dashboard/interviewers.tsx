import { InterviewersCardList } from '@devlink3/InterviewersCardList';
import { InterviewersDash } from '@devlink3/InterviewersDash';
import { InterviewStatsLoader } from '@devlink3/InterviewStatsLoader';
import Stack from '@mui/material/Stack';
import React, { memo } from 'react';

import {
  type SchedulingAnalyticsContextType,
  useSchedulingAnalytics,
} from '@/context/SchedulingAnalytics';
import { capitalizeAll } from '@/utils/text/textUtils';

import { Empty } from './common';
import { Skeleton } from '@components/ui/skeleton';

const LIMIT = 4;

export const Interviewers = memo(() => {
  const { interviewersType, setInterviewersType } = useSchedulingAnalytics();
  return (
    <InterviewersDash
      isQualifiedActive={interviewersType === 'qualified'}
      isTraineeActive={interviewersType === 'training'}
      onClickQualified={{ onClick: () => setInterviewersType('qualified') }}
      onClickTrainee={{ onClick: () => setInterviewersType('training') }}
      slotInterviewersCardList={<Container />}
    />
  );
});
Interviewers.displayName = 'Interviewers';

const Container = memo(() => {
  const {
    interviewers: { data, status },
  } = useSchedulingAnalytics();

  if (status === 'pending') return <Loader />;

  if (status === 'error') return <>Error</>;

  if (data.length === 0)
    return (
      <Stack>
        <Empty />
      </Stack>
    );

  return <List data={data} />;
});
Container.displayName = 'Container';

type Props = Pick<SchedulingAnalyticsContextType['interviewers'], 'data'>;

const List = ({ data }: Props) => {
  return (
    <>
      {(data ?? []).map(({ user_id, name, accepted, declined }) => (
        <Stack
          key={user_id}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'var(--neutral-3)',
            },
          }}
        >
          <InterviewersCardList
            textName={capitalizeAll(name)}
            textCompleted={accepted}
            textDeclined={declined}
            textUpcoming={'--'}
          />
        </Stack>
      ))}
    </>
  );
};

const Loader = memo(() => {
  return [...new Array(Math.trunc(Math.random() * (LIMIT - 1)) + 1)].map(
    (_, i) => (
      <InterviewStatsLoader
        key={i}
        slotSkeleton={<Skeleton className='w-full h-full' />}
      />
    ),
  );
});
Loader.displayName = 'Loader';
