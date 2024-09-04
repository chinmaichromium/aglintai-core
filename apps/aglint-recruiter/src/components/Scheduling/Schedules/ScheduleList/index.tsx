import { AllInterviewEmpty } from '@devlink2/AllInterviewEmpty';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';

import Loader from '@/components/Common/Loader';

import ScheduleMeetingList from '../../Common/ModuleSchedules/ScheduleMeetingList';
import { useScheduleStatesContext } from '../ScheduleStatesContext';

function ScheduleList() {
  const { filteredSchedules, loadingSchedules } = useScheduleStatesContext();

  return (
    <Stack padding={'var(--space-4)'}>
      {loadingSchedules && (
        <Stack width={'100%'} height={'calc(100vh - 96px)'}>
          <Loader />
        </Stack>
      )}
      {!loadingSchedules && filteredSchedules.length === 0 && (
        <Box
          sx={{
            display: 'flex',
            borderRadius: 'var(--radius-2)',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 128px)',
            backgroundColor: 'var(--neutral-2)', // replace with your desired background color
          }}
        >
          <Box maxWidth='sm' width='300px' p={2}>
            <AllInterviewEmpty textDynamic='No schedule found' />
          </Box>
        </Box>
      )}
      <ScheduleMeetingList filterSchedules={filteredSchedules} />
    </Stack>
  );
}

export default ScheduleList;
