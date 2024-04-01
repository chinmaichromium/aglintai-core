import { create } from 'zustand';

import { ResumeJson } from '@/src/pages/api/resumeScoring/types';
import {
  CandidateType,
  InterviewScheduleTypeDB,
  JobApplcationDB,
} from '@/src/types/data.types';

import { InterviewModuleDbType } from '../../JobInterviewPlan/types';

export interface InterviewSlice {
  filter: {
    status?: ('not scheduled' | 'ongoing' | 'completed')[];
    job_ids?: string[];
    panel_ids?: string[];
    dateRange?: string;
    duration?: number;
    textSearch?: string;
    sortBy?: 'asc' | 'desc';
    coordinator_ids?: string[];
  };
  pagination: {
    page: number;
    total: number;
  };
  fetching: boolean;
  filterVisible: FilterType[];
  isRescheduleOpen: boolean;
  isCancelOpen: boolean;
}

export enum FilterType {
  // eslint-disable-next-line no-unused-vars
  relatedJobs = 'relatedJobs',
  // eslint-disable-next-line no-unused-vars
  interviewPanels = 'interviewPanels',
  // eslint-disable-next-line no-unused-vars
  dateRange = 'dateRange',
  // eslint-disable-next-line no-unused-vars
  scheduleType = 'scheduleType',
  // eslint-disable-next-line no-unused-vars
  status = 'status',
  // eslint-disable-next-line no-unused-vars
  coordinator = 'coordinator',
}

const initialState: InterviewSlice = {
  filter: {
    textSearch: '',
    status: ['not scheduled', 'ongoing', 'completed'],
    sortBy: 'asc',
    job_ids: [],
    panel_ids: [],
    dateRange: null,
    coordinator_ids: [],
  },
  pagination: {
    page: 1,
    total: 0,
  },
  fetching: false,
  filterVisible: [FilterType.status],
  isRescheduleOpen: false,
  isCancelOpen: false,
};

export const useInterviewSchedulingStore = create<InterviewSlice>()(() => ({
  ...initialState,
}));

export const setFilter = (filter: InterviewSlice['filter']) => {
  useInterviewSchedulingStore.setState((state) => ({
    pagination: { ...state.pagination, page: 1 },
    filter: { ...state.filter, ...filter },
  }));
};

export const setIsRescheduleOpen = (isRescheduleOpen: boolean) =>
  useInterviewSchedulingStore.setState({ isRescheduleOpen });

export const setIsCancelOpen = (isCancelOpen: boolean) =>
  useInterviewSchedulingStore.setState({ isCancelOpen });

export const setFilterVisible = (
  filterVisible: InterviewSlice['filterVisible'],
) => useInterviewSchedulingStore.setState({ filterVisible });

export const setPagination = (
  pagination: Partial<InterviewSlice['pagination']>,
) =>
  useInterviewSchedulingStore.setState((state) => ({
    pagination: { ...state.pagination, ...pagination },
  }));

export const setFetching = (fetching: boolean) =>
  useInterviewSchedulingStore.setState({ fetching });

export const resetInterviewState = () =>
  useInterviewSchedulingStore.setState({ ...initialState });

export type ApplicationList = {
  applications: JobApplcationDB;
  candidates: CandidateType;
  schedule: InterviewScheduleTypeDB | null;
  public_jobs: {
    id: string;
    job_title: string;
    interview_plan: {
      plan: InterviewModuleDbType[];
      coordinator: {
        interv_id: string;
      };
    };
    location: string;
    recruiter_id: string;
  };
  file: {
    id: string;
    created_at: string;
    file_url: string;
    candidate_id: string;
    resume_json: ResumeJson;
    type: string;
  };
};
