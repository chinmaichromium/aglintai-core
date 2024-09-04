import { Stack } from '@mui/material';
import NoApplicants from '@public/lottie/NoApplicants';
import { memo } from 'react';

import { type ApplicationStore } from '@/context/ApplicationContext/store';

export const EmptyState = memo(({ tab }: { tab: ApplicationStore['tab'] }) => {
  return (
    <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
      <Stack width={'100px'}>
        <NoApplicants />
      </Stack>
      <Stack>No {tab} data found</Stack>
    </Stack>
  );
});
EmptyState.displayName = 'EmptyState';
