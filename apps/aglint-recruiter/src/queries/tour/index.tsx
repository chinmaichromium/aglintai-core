import { DatabaseTableInsert } from '@aglint/shared-types';
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { supabase } from '@/src/utils/supabase/client';

import { appKey } from '..';

type TourQuery = {
  recruiter_id?: string;
};

const tourKey = 'tour';

export const tourQuery = {
  all: () => ({
    queryKey: [appKey, tourKey] as const,
  }),
  tours: (recruiter_id?: TourQuery['recruiter_id']) =>
    queryOptions({
      queryKey: [...tourQuery.all().queryKey],
      queryFn: () => getTours({ recruiter_id }),
      enabled: !!recruiter_id,
    }),
};

const getTours = async ({ recruiter_id }: TourQuery) =>
  (
    (
      await supabase
        .from('tour')
        .select('type')
        .eq('recruiter_id', recruiter_id)
        .throwOnError()
    ).data ?? []
  ).map(({ type }) => type);

export const useCreateTourLog = () => {
  const queryClient = useQueryClient();
  const { queryKey } = tourQuery.tours();
  return useMutation({
    mutationFn: insertNewTourLog,
    onMutate: (variables) => {
      const oldTours = queryClient.getQueryData(queryKey);
      const newTours = [...oldTours, variables.type];
      queryClient.setQueryData(queryKey, newTours);
    },
  });
};

const insertNewTourLog = async (payload: DatabaseTableInsert['tour']) =>
  await supabase.from('tour').insert(payload).throwOnError();
