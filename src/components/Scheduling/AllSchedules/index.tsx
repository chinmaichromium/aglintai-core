import { AllInterview } from '@/devlink2';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';

import AllList from './AllList';
import AllFilters from './Filters';
import AddFilterComp from './Filters/FilterMenu';
import { useAllInterviewSchedules } from './queries/hooks';
import SlotPagination from './SlotPagination';
import { useInterviewSchedulingStore } from './store';

function AllSchedules() {
  const { recruiter } = useAuthDetails();
  const filter = useInterviewSchedulingStore((state) => state.filter);
  const pagination = useInterviewSchedulingStore((state) => state.pagination);
  const fetching = useInterviewSchedulingStore((state) => state.fetching);

  const {
    isPending,
    isError,
    data: applicationList,
    isFetching,
  } = useAllInterviewSchedules({
    filter,
    page: pagination.page,
    rec_id: recruiter.id,
  });

  return (
    <>
      <AllInterview
        isSchedulerTable={true}
        slotPagination={
          <SlotPagination
            applicationList={applicationList}
            fetching={fetching}
            isPending={isPending}
          />
        }
        slotAddFilter={<AddFilterComp />}
        slotFilterButton={<AllFilters />}
        slotAllInterviewCard={
          <AllList
            isPending={isPending}
            applicationList={applicationList}
            isError={isError}
            isFetching={isFetching}
          />
        }
      />
    </>
  );
}

export default AllSchedules;
