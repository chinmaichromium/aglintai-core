import { useTenant } from '@/company/hooks';
import { api } from '@/trpc/client';

import { useAnalyticsContext } from '../../context/AnalyticsContext/AnalyticsContextProvider';

export function useInterviewerLeaderboard() {
  const { recruiter } = useTenant();
  const { filters } = useAnalyticsContext();
  const { data, isFetching } = api.analytics.interviewer_leaderboard.useQuery(
    {
      recruiter_id: recruiter.id,
      job_id: filters.job,
      locations: Number.isInteger(filters.location)
        ? [filters.location!]
        : undefined,
      departments: Number.isInteger(filters.department)
        ? [filters.department!]
        : undefined,
      data_range: filters.dateRange,
    },
    {
      enabled: !!recruiter.id,
    },
  );
  return {
    data: (data || [])
      .sort((a, b) => b.total_hours - a.total_hours)
      .map((item, index) => {
        return {
          rank: index + 1,
          ...item,
          interviews: item.accepted + item.rejected,
        };
      }),
    isFetching: isFetching,
  };
}
export function useInterviewer_upcoming() {
  const { recruiter } = useTenant();
  const { filters } = useAnalyticsContext();
  const { data: interviewers, isFetching: iFInterviewers } =
    useInterviewerLeaderboard();
  const { data, isFetching } = api.analytics.interviewer_analytics.useQuery(
    {
      recruiter_id: recruiter.id,
      job_id: filters.job,
      locations: Number.isInteger(filters.location)
        ? [filters.location!]
        : undefined,
      departments: Number.isInteger(filters.department)
        ? [filters.department!]
        : undefined,
      data_range: filters.dateRange,
    },
    {
      enabled: !(!recruiter.id && iFInterviewers),
    },
  );
  const temp = [...(interviewers || []), ...(data || [])].reduce(
    (acc, curr) => {
      const temp = acc[curr.user_id] || ({} as (typeof acc)[string]);
      const base = {
        accepted: 0,
        feedback: 0,
        rejected: 0,
        total_hours: 0,
        qualified: 0,
        training: 0,
        upcoming: 0,
        rank: 0,
        average_weekly_count: 0,
        average_weekly_duration: 0,
        duration: 0,
      };
      acc[curr.user_id] = {
        ...base,
        ...temp,
        ...curr,
      };
      return acc;
    },
    {} as {
      [key: string]: (typeof interviewers)[number] &
        NonNullable<typeof data>[number];
    },
  );
  return {
    data: Object.values(temp),
    partialData: iFInterviewers,
    isFetching: isFetching,
  };
}

export function useInterviewerDeclines() {
  const { recruiter } = useTenant();
  const { filters } = useAnalyticsContext();
  const { data, isFetching, isError } =
    api.analytics.interviewer_rejections.useQuery(
      {
        recruiter_id: recruiter.id,
        job_id: filters.job,
        locations: Number.isInteger(filters.location)
          ? [filters.location!]
          : undefined,
        departments: Number.isInteger(filters.department)
          ? [filters.department!]
          : undefined,
        data_range: filters.dateRange,
      },
      {
        enabled: !!recruiter.id,
      },
    );
  return {
    data,
    isFetching: isFetching,
    isError,
  };
}
