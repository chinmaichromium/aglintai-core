import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { initUser } from '@/src/pages/api/interviewers';
import { allInterviewerType } from '@/src/pages/api/interviewers/getAllInterviewers';
import { supabase } from '@/src/utils/supabase/client';

import { LeaderAnalyticsFilterType } from './types';

// -------------------------------------------------------- InterviewerLoad

export function useAllInterviewer({
  start_time_param,
  end_time_param,
  department_ids_params = [],
  office_location_ids_params = [],
  job_ids_params = [],
  module_ids_params = [],
}: {
  start_time_param: string;
  end_time_param: string;
  department_ids_params: number[];
  office_location_ids_params: number[];
  job_ids_params: string[];
  module_ids_params: string[];
}) {
  const {
    recruiter: { id: recruiter_id },
  } = useAuthDetails();
  return useQuery({
    queryKey: [
      'recruiter_id',
      recruiter_id,
      start_time_param,
      end_time_param,
      department_ids_params,
      office_location_ids_params,
      job_ids_params,
      module_ids_params,
    ],
    queryFn: () =>
      fetchAllInterviewer({
        recruiter_id,
        start_time_param,
        end_time_param,
        department_ids_params,
        office_location_ids_params,
        job_ids_params,
        module_ids_params,
      }),
    enabled: Boolean(recruiter_id),
  });
}

const fetchAllInterviewer = async ({
  recruiter_id,
  start_time_param,
  end_time_param,
  department_ids_params = [],
  office_location_ids_params = [],
  job_ids_params = [],
  module_ids_params = [],
}: {
  recruiter_id: string;
  start_time_param: string;
  end_time_param: string;
  department_ids_params: number[];
  office_location_ids_params: number[];
  job_ids_params: string[];
  module_ids_params: string[];
}) => {
  return axios
    .post('/api/interviewers/getAllInterviewers', {
      recruiter_id,
      start_time_param,
      end_time_param,
      department_ids_params,
      office_location_ids_params,
      job_ids_params,
      module_ids_params,
    })
    .then((data) => {
      return data.data.data as allInterviewerType;
    });
};

//------------------------------------------------------------- Availability

export type useAvailabiltyWithCalType = Awaited<
  ReturnType<typeof useAvailabilty>
>;

export const useAvailabilty = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const { recruiter_id } = useAuthDetails();
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ['get_fetchAvailabiltyWithCal', startDate, endDate],
    refetchOnMount: true,
    queryFn: () => fetchAvailabiltyWithCal(recruiter_id, startDate, endDate),
    gcTime: 20000,
    enabled: !!recruiter_id,
  });
  const refetch = () =>
    queryClient.invalidateQueries({
      queryKey: ['get_fetchAvailabiltyWithCal', startDate, endDate],
    });
  return { ...query, refetch };
};

const fetchAvailabiltyWithCal = async (
  recruiter_id: string,
  startDate: string,
  endDate: string,
) => {
  return axios
    .post('/api/interviewers', {
      recruiter_id,
      startDate,
      endDate,
    })
    .then((data) => {
      return data.data.data as initUser[];
    });
};

// -------------------------------------------------------- leader board

export type useLeaderBoardType = Awaited<
  ReturnType<typeof fetchLeaderBoardAnalytics>
>;

export const useLeaderBoard = ({
  type,
  jobs,
  departments,
}: {
  type: LeaderAnalyticsFilterType['type'];
  jobs?: LeaderAnalyticsFilterType['jobs'];
  departments: LeaderAnalyticsFilterType['departments'];
}) => {
  const { recruiter_id } = useAuthDetails();
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ['get_leaderBoard-analytics', type, departments, recruiter_id],
    refetchOnMount: true,
    queryFn: () =>
      fetchLeaderBoardAnalytics({ recruiter_id, type, jobs, departments }),
    gcTime: 20000,
    enabled: !!recruiter_id,
  });
  const refetch = () =>
    queryClient.invalidateQueries({
      queryKey: ['get_leaderBoard-analytics', recruiter_id],
    });
  return { ...query, refetch };
};

const fetchLeaderBoardAnalytics = async ({
  recruiter_id,
  type,
  jobs,
  departments,
}: {
  recruiter_id: string;
  type: LeaderAnalyticsFilterType['type'];
  jobs: LeaderAnalyticsFilterType['jobs'];
  departments: LeaderAnalyticsFilterType['departments'];
}) => {
  return (
    await supabase
      .rpc('scheduling_analytics_leaderboard', {
        recruiter_id,
        type,
        jobs,
        departments,
      })
      .throwOnError()
  ).data;
};

// -------------------------------------------------------- Training

export type useTrainingProgressType = Awaited<
  ReturnType<typeof fetchTrainingProgressAnalytics>
>;

export const useTrainingProgress = ({
  departments,
  jobs,
  locations,
}: {
  departments?: number[];
  jobs?: string[];
  locations?: number[];
}) => {
  const { recruiter_id } = useAuthDetails();
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: [
      'get_scheduling_analytics_training_progress',
      recruiter_id,
      departments,
      jobs,
      locations,
    ],
    refetchOnMount: true,
    queryFn: () =>
      fetchTrainingProgressAnalytics({
        recruiter_id,
        departments,
        jobs,
        locations,
      }),
    gcTime: 20000,
    enabled: !!recruiter_id,
  });
  const refetch = () =>
    queryClient.invalidateQueries({
      queryKey: ['get_scheduling_analytics_training_progress', recruiter_id],
    });
  return { ...query, refetch };
};
// const fetch = async ({ recruiter_id }) => {
//   const { data } = await supabase
//     .from('interview_module_relation')
//     .select('interview_module(*),recruiter_user(*)')
//     .eq('interview_module.recruiter_id', recruiter_id)
//     .eq('training_status', 'training');
// };

const fetchTrainingProgressAnalytics = async ({
  recruiter_id,
  departments,
  jobs,
  locations,
}: {
  recruiter_id: string;
  departments?: number[];
  jobs?: string[];
  locations?: number[];
}) => {
  return (
    await supabase
      .rpc('scheduling_analytics_training_progress', {
        recruiter_id,
        departments,
        jobs,
        locations,
      })
      .throwOnError()
  ).data;
};
// -------------------------------------------------------- Training

export type useMatricsInterviewersType = Awaited<
  ReturnType<typeof fetchMetricsInterviewers>
>;

export const useMatricsInterviewers = ({
  type,
}: {
  type?: 'training' | 'qualified';
}) => {
  const { recruiter_id } = useAuthDetails();
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ['metrics_interviewers', recruiter_id, type],
    refetchOnMount: true,
    queryFn: () =>
      fetchMetricsInterviewers({
        recruiter_id,
        type,
      }),
    gcTime: 20000,
    enabled: !!recruiter_id,
  });
  const refetch = () =>
    queryClient.invalidateQueries({
      queryKey: ['metrics_interviewers', recruiter_id, type],
    });
  return { ...query, refetch };
};

const fetchMetricsInterviewers = async ({
  recruiter_id,
  type,
}: {
  recruiter_id: string;
  type?: 'training' | 'qualified';
}) => {
  return (
    await supabase
      .rpc('scheduling_analytics_interviewers', {
        recruiter_id,
        type,
      })
      .throwOnError()
  ).data;
};
