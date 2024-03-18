import { Stack } from '@mui/material';

import { CandidatesListPagination } from '@/devlink2';

import {
  ApplicationList,
  setPagination,
  useInterviewSchedulingStore
} from '../store';

interface SlotPaginationProps {
  isPending: boolean;
  fetching: boolean;
  applicationList: ApplicationList[];
}

function SlotPagination({
  isPending,
  fetching,
  applicationList
}: SlotPaginationProps) {
  const pagination = useInterviewSchedulingStore((state) => state.pagination);
  return (
    <>
      {!isPending && (
        <Stack
          sx={{
            opacity: fetching ? 0.5 : 1,
            pointerEvents: fetching ? 'none' : 'auto',
            zIndex: 3
          }}
        >
          <CandidatesListPagination
            totalCandidatesCount={pagination.total}
            currentCandidatesCount={applicationList.length}
            totalPageCount={Math.ceil(pagination.total / 10)}
            onclickNext={{
              onClick: () => {
                if (pagination.page < Math.ceil(pagination.total / 10))
                  setPagination({ page: pagination.page + 1 });
              }
            }}
            onclickPrevious={{
              onClick: () => {
                if (pagination.page > 1)
                  setPagination({ page: pagination.page - 1 });
              }
            }}
            slotPageNumber={pagination.page}
          />
        </Stack>
      )}
    </>
  );
}

export default SlotPagination;
