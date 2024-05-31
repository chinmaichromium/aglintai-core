import { Stack } from '@mui/material';

import MembersAutoComplete from '../../../Common/MembersTextField';
import { setFilters, useSchedulingFlowStore } from '../store';

function PreferedInterviewers() {
  const { schedulingOptions, filters } = useSchedulingFlowStore((state) => ({
    dateRange: state.dateRange,
    schedulingOptions: state.schedulingOptions,
    filters: state.filters,
  }));

  const uniqueInterviewers = [];

  schedulingOptions.forEach((option) => {
    option.sessions.forEach((session) => {
      session.qualifiedIntervs.forEach((interv) => {
        const existingIndex = uniqueInterviewers.findIndex(
          (existingInterv) => existingInterv.user_id === interv.user_id,
        );

        if (existingIndex === -1) {
          // Push the interv object directly if it doesn't already exist in the array
          uniqueInterviewers.push(interv);
        }
      });

      session.trainingIntervs.forEach((interv) => {
        const existingIndex = uniqueInterviewers.findIndex(
          (existingInterv) => existingInterv.user_id === interv.user_id,
        );

        if (existingIndex === -1) {
          // Push the interv object directly if it doesn't already exist in the array
          uniqueInterviewers.push(interv);
        }
      });
    });
  });

  return (
    <Stack width={'100%'}>
      {uniqueInterviewers?.length > 0 && (
        <MembersAutoComplete
          pillColor={'#F5F5F5'}
          renderUsers={uniqueInterviewers}
          selectedUsers={filters.preferredInterviewers}
          maxWidth='100%'
          setSelectedUsers={(users) => {
            setFilters({
              preferredInterviewers: users,
            });
          }}
          disabled={false}
        />
      )}
    </Stack>
  );
}

export default PreferedInterviewers;
