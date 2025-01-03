import { useQuery } from '@tanstack/react-query';
import { createContext, type PropsWithChildren } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useTenant } from '@/company/hooks';
import { subscriptions } from '@/hooks/useRealtime';
import {
  type GetRequestParams,
  requestQueries,
  useRequestRealtime,
  useRequestsCreate,
  useRequestsDelete,
  useRequestsUpdate,
} from '@/queries/requests';
import { type RequestResponse } from '@/queries/requests/types';
import { SafeObject } from '@/utils/safeObject';
import { supabase } from '@/utils/supabase/client';

const defaultFilter = {
  is_new: false,
  status: [],
  title: '',
  type: [],
  created_at: '',
  end_at: '',
  jobs: [],
  applications: [],
  assigneeList: [],
  assignerList: [],
};

const defaultSections: { [_id in keyof RequestResponse]?: boolean } = {
  urgent_request: false,
  schedule_request: false,
  reschedule_request: false,
  decline_request: false,
  cancel_schedule_request: false,
  completed_request: false,
};

const useRequestsContext = () => {
  const { recruiter_user } = useTenant();

  const assigner_id = recruiter_user?.user_id;

  const [filters, setFilters] = useState<GetRequestParams['filters']>(
    structuredClone(defaultFilter),
  );

  const [sort, setSort] = useState<GetRequestParams['sort']>({
    order: 'desc',
    type: 'updated_at',
  });

  const [sections, setSections] = useState(defaultSections);

  const requests = useQuery(
    requestQueries.requests({
      payload: { assigner_id: assigner_id ?? '' },
      filters,
      sort,
    }),
  );

  const { mutate: handleCreateRequests, mutateAsync: asyncCreateRequests } =
    useRequestsCreate();
  const handleAsyncCreateRequests = useCallback(
    async (payload: Parameters<typeof asyncCreateRequests>[0]) => {
      try {
        await asyncCreateRequests(payload);
      } catch {
        //
      }
    },
    [],
  );

  const {
    mutate: handleUpdateRequest,
    mutateAsync: asyncUpdateRequest,
    mutationState: updateMutationState,
  } = useRequestsUpdate();
  const handleAsyncUpdateRequest = useCallback(
    async (payload: Parameters<typeof asyncUpdateRequest>[0]) => {
      try {
        await asyncUpdateRequest(payload);
      } catch {
        //
      }
    },
    [],
  );

  const {
    mutate: handleDeleteRequest,
    mutateAsync: asyncDeleteRequest,
    mutationState: deleteMutationState,
  } = useRequestsDelete();
  const handleAsyncDeleteRequest = useCallback(
    async (payload: Parameters<typeof asyncDeleteRequest>[0]) => {
      try {
        await asyncDeleteRequest(payload);
      } catch {
        //
      }
    },
    [],
  );

  const mutationQueue = useMemo(
    () => [
      ...updateMutationState
        .filter((payload) => payload?.loading !== false)
        .map(({ payload: { requestId } }) => requestId),
      ...deleteMutationState
        .filter((payload) => payload?.loading !== false)
        .map(({ payload: { requestId } }) => requestId),
    ],
    [updateMutationState, deleteMutationState],
  );

  const initialFilter = useMemo(() => defaultFilter, []);
  const initialSections = useMemo(() => defaultSections, []);

  const requestIds = useMemo(
    () =>
      (SafeObject.values(requests?.data ?? []) ?? [])
        .flatMap((request) => request)
        .map(({ id }) => id)
        .toSorted((a, z) => (a > z ? 1 : z > a ? -1 : 0))
        .join(','),
    [requests.data],
  );

  const {
    insertRequest,
    updateRequest,
    deleteRequest,
    insertRequestProgress,
    updateRequestProgress,
    deleteRequestProgress,
  } = useRequestRealtime();

  useEffect(() => {
    const connection = subscriptions(supabase.channel('db-changes'), [
      {
        event: 'INSERT',
        table: 'request',
        filter: `assigner_id=eq.${assigner_id}`,
        callback: insertRequest,
      },
      {
        event: 'INSERT',
        table: 'request',
        filter: `assignee_id=eq.${assigner_id}`,
        callback: insertRequest,
      },
      {
        event: 'UPDATE',
        table: 'request',
        filter: `assigner_id=eq.${assigner_id}`,
        callback: updateRequest,
      },
      {
        event: 'UPDATE',
        table: 'request',
        filter: `assignee_id=eq.${assigner_id}`,
        callback: updateRequest,
      },
      {
        event: 'DELETE',
        table: 'request',
        callback: deleteRequest,
      },
      {
        event: 'INSERT',
        table: 'request_progress',
        filter: `request_id=in.(${requestIds})`,
        callback: insertRequestProgress,
      },
      {
        event: 'UPDATE',
        table: 'request_progress',
        filter: `request_id=in.(${requestIds})`,
        callback: updateRequestProgress,
      },
      {
        event: 'DELETE',
        table: 'request_progress',
        callback: deleteRequestProgress,
      },
    ]).subscribe();
    return () => {
      connection.unsubscribe();
    };
  }, [
    assigner_id,
    requestIds,
    insertRequest,
    updateRequest,
    deleteRequest,
    insertRequestProgress,
    updateRequestProgress,
    deleteRequestProgress,
  ]);

  return {
    requests: {
      ...requests,
      data: (requests.data ?? []) as typeof requests.data,
    },
    handleCreateRequests,
    handleAsyncCreateRequests,
    handleUpdateRequest,
    handleAsyncUpdateRequest,
    handleDeleteRequest,
    handleAsyncDeleteRequest,
    mutationQueue,
    filters,
    setFilters,
    sort,
    setSort,
    initialFilter,
    initialSections,
    sections,
    setSections,
  };
};

export const RequestsContext = createContext<
  ReturnType<typeof useRequestsContext> | undefined
>(undefined);

export const RequestsProvider = (props: PropsWithChildren) => {
  const value = useRequestsContext();
  return (
    <RequestsContext.Provider value={value}>
      {props.children}
    </RequestsContext.Provider>
  );
};
