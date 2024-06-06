/* eslint-disable security/detect-object-injection */
import { DatabaseTable, DatabaseView } from '@aglint/shared-types';
import { infiniteQueryOptions, keepPreviousData } from '@tanstack/react-query';

import { ApplicationsStore } from '@/src/context/ApplicationsContext/store';
import { supabase } from '@/src/utils/supabase/client';

import { jobQueryKeys } from '../job/keys';

const ROWS = 30;

export const applicationsQueries = {
  all: ({ job_id }: ApplicationsAllQueryPrerequistes) => ({
    queryKey: [...jobQueryKeys.job({ id: job_id }).queryKey, 'applications'],
  }),
  applications: ({ job_id, count, ...filters }: Params) =>
    infiniteQueryOptions({
      queryKey: [...applicationsQueries.all({ job_id }).queryKey, filters],
      initialPageParam: { index: 0, job_id, ...filters },
      enabled: !!job_id && !!count,
      refetchOnWindowFocus: false,
      maxPages: Math.trunc(count / ROWS) + (count % ROWS ? 1 : 0) + 1,
      placeholderData: keepPreviousData,
      getPreviousPageParam: (firstPage) =>
        firstPage?.[0]
          ? {
              index: firstPage[0].index,
              job_id,
              ...filters,
            }
          : undefined,
      getNextPageParam: (lastPage) => {
        const len = lastPage?.length ?? 0;
        if (!len) return undefined;
        const index = lastPage[len - 1].index + 1;
        if (!count || index >= count) return undefined;
        return {
          index,
          job_id,
          ...filters,
        };
      },
      queryFn: getApplications,
    }),
};

type ApplicationsAllQueryPrerequistes = {
  job_id: DatabaseTable['public_jobs']['id'];
  count?: number;
};

type Params = ApplicationsAllQueryPrerequistes & {
  filters: ApplicationsStore['filters'];
  sort: ApplicationsStore['sort'];
  status: DatabaseView['application_view']['status'];
};

const getApplications = async ({
  pageParam: { job_id, index, status, filters, sort },
}: {
  pageParam: Params & { index: number };
}) => {
  const query = supabase
    .from('application_view')
    .select()
    .range(index, index + ROWS - 1)
    .eq('job_id', job_id)
    .eq('status', status);

  if (filters?.search?.length) {
    query.ilike('name', `%${filters.search}%`);
  }

  if (filters?.resume_score?.length) {
    query.or(
      filters.resume_score
        .map((score) => {
          const { max, min } = resumeScoreRange(score);
          return `and(resume_score.gte.${min},resume_score.lte.${max})`;
        })
        .join(','),
    );
  }

  if (filters?.badges?.length) {
    query.or(
      filters.badges
        .map((badge) => `badges->${badge}.gt.${BADGE_CONSTANTS[badge]}`)
        .join(','),
    );
  }

  if (sort) {
    query.order(sort.type, { ascending: sort.order === 'asc' });
  }

  const applications = (await query.throwOnError()).data.map(
    (application, i) => ({ ...application, index: index + i }),
  );
  return applications;
};

const resumeScoreRange = (
  match: ApplicationsStore['filters']['resume_score'][number],
) => {
  switch (match) {
    case 'Top match':
      return { max: 100, min: 80 };
    case 'Good match':
      return { max: 79, min: 60 };
    case 'Average match':
      return { max: 59, min: 40 };
    case 'Poor match':
      return { max: 39, min: 20 };
    case 'Not a match':
      return { max: 19, min: 0 };
  }
};

const BADGE_CONSTANTS: {
  // eslint-disable-next-line no-unused-vars
  [id in ApplicationsStore['filters']['badges'][number]]: number;
} = {
  careerGrowth: 89,
  jobStability: 89,
  leadership: 69,
  jobHopping: 0,
  positions: 0,
  schools: 0,
  skills: 0,
};
