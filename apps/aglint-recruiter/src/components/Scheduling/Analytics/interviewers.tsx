import Stack from '@mui/material/Stack';
import { memo } from 'react';

import { InterviewModuleStatsCard } from '@/devlink3/InterviewModuleStatsCard';
import {
  type SchedulingAnalyticsContextType,
  useSchedulingAnalytics,
} from '@/src/context/SchedulingAnalytics';

import Loader from '../../Common/Loader';

export const Interviewers = memo(() => {
  const {
    interviewers: { data, status },
  } = useSchedulingAnalytics();
  if (status === 'error') return <>Error</>;
  if (status === 'pending')
    return (
      <Stack style={{ height: '500px', width: '100%' }}>
        <Loader />
      </Stack>
    );
  return (
    <Stack style={{ height: '500px', width: '100%' }}>
      <>
        <>Interviewers</>
        <List data={data} />
      </>
    </Stack>
  );
});
Interviewers.displayName = 'Interviewers';

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
          <InterviewModuleStatsCard
            textInterviewModule={name}
            textQualifiedMember={accepted}
            textTraining={declined}
          />
        </Stack>
      ))}
    </>
  );
};
