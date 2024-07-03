import type { DatabaseTable } from '@aglint/shared-types';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import axios from 'axios';

import { GetInterviewPlansType } from '@/src/pages/api/scheduling/get_interview_plans';

import { GC_TIME } from '..';
import { readJob } from '../jobs';
import { jobsQueryKeys } from '../jobs/keys';
import { Job } from '../jobs/types';

const jobQueries = {
  job: ({
    id,
    enabled,
    queryClient,
    initialData,
    refetchOnMount,
  }: Pollers & { initialData?: Job }) =>
    queryOptions({
      queryKey: [...jobsQueryKeys.jobs().queryKey, { id }],
      enabled,
      initialData,
      refetchOnMount,
      queryFn: async () => {
        const job = await readJob(id);
        const { queryKey } = jobsQueryKeys.jobs();
        const jobs = queryClient.getQueryData<Job[]>(queryKey);
        queryClient.setQueryData<Job[]>(
          queryKey,
          jobs.reduce((acc, curr) => {
            if (curr.id === id) acc.push(job);
            else acc.push(curr);
            return acc;
          }, []),
        );
        return job;
      },
    }),
  interview_plans: ({ id }: JobRequisite) =>
    queryOptions({
      queryKey: [...jobQueries.job({ id }).queryKey, 'interview_plans'],
      queryFn: async () =>
        (await axios.get(`/api/scheduling/get_interview_plans?job_id=${id}`))
          .data as GetInterviewPlansType['respone'],
    }),
  polling: ({ id, enabled, queryClient }: Pollers) => {
    return queryOptions({
      enabled,
      gcTime: enabled ? GC_TIME : 0,
      refetchInterval: enabled ? 5000 : false,
      queryKey: ['job_polling', { id }],
      queryFn: async () => {
        const jobQueryKey = jobQueries.job({ id }).queryKey;
        queryClient.invalidateQueries({ queryKey: jobQueryKey });
        return true;
      },
    });
  },
};

type Pollers = JobRequisite &
  Partial<{
    enabled: boolean;
    queryClient: QueryClient;
    refetchOnMount: boolean;
  }>;

export type JobRequisite = Pick<DatabaseTable['public_jobs'], 'id'>;

export { jobQueries };
