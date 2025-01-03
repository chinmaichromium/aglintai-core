import { useTenant } from '@/company/hooks';
import { api } from '@/trpc/client';

import { useCreateRequest } from './useCreateRequest';

export const useCreateRequestAssignees = () => {
  const { recruiter_id } = useTenant();
  const search = useCreateRequest((state) => state.payloads.assignees.search);
  const [, result] = api.requests.create.assignees.useSuspenseInfiniteQuery(
    { recruiter_id, search },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );
  return result;
};
