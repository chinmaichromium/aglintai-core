/* eslint-disable no-unused-vars */
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import {
  FilterParameter,
  SortParameter,
} from '@/src/components/JobApplicationsDashboard/utils';
import { ReadJobApplicationApi } from '@/src/pages/api/JobApplicationsApi/read';
import { Database } from '@/src/types/schema';

import { Candidate } from '../CandidatesContext/types';
import { JobTypeDashboard } from '../JobsContext/types';

export enum JobApplicationSections {
  NEW = 'new',
  INTERVIEWING = 'interviewing',
  QUALIFIED = 'qualified',
  DISQUALIFIED = 'disqualified',
}

export type JobApplicationsData = ReadJobApplicationApi['response']['data'];

export type NewJobApplications =
  Database['public']['Tables']['job_applications']['Row'];
export type NewJobApplicationsInsert =
  Database['public']['Tables']['job_applications']['Insert'];
export type NewJobApplicationsUpdate =
  Database['public']['Tables']['job_applications']['Update'];

export interface JobApplication extends NewJobApplications {
  candidates: Candidate;
}

export type Parameters = {
  sort?: SortParameter;
  filter?: FilterParameter[];
  search?: string;
};

export type JobApplicationContext = {
  applications: JobApplicationsData;
  paginationLimit: number;
  applicationDisable: boolean;
  job: JobTypeDashboard;
  updateTick: boolean;
  pageNumber: { [key in JobApplicationSections]: number };
  handleJobApplicationCreate: (
    inputData: NewJobApplicationsInsert,
  ) => Promise<boolean>;
  handleJobApplicationBulkCreate: (
    inputData: NewJobApplicationsInsert[],
  ) => Promise<boolean>;
  handleJobApplicationRead: (
    request: ReadJobApplicationApi['request'],
  ) => Promise<boolean>;
  handleJobApplicationRefresh: () => Promise<boolean>;
  handleJobApplicationPaginate: (
    pageNumber: number,
    section: JobApplicationSections,
  ) => Promise<boolean>;
  handleJobApplicationUpdate: (
    applicationId: string,

    inputData: NewJobApplicationsUpdate,
  ) => Promise<boolean>;
  handleJobApplicationUIUpdate: (
    jobApplication: Partial<JobApplication>,
  ) => boolean;
  handleJobApplicationDelete: (
    applicationId: string,
    applicationStatus: JobApplicationSections,
  ) => Promise<boolean>;
  handleJobApplicationError: (error: any) => void;
  handleJobApplicationFilter: (parameters: Parameters) => Promise<void>;
  searchParameters: Parameters;
  initialLoad: boolean;
  openImportCandidates: boolean;
  setOpenImportCandidates: Dispatch<SetStateAction<boolean>>;
  openManualImportCandidates: boolean;
  setOpenManualImportCandidates: Dispatch<SetStateAction<boolean>>;
  handleUpdateJobStatus: (
    applicationIdSet: Set<string>,
    sections: {
      source: JobApplicationSections;
      destination: JobApplicationSections;
    },
  ) => Promise<boolean>;
};
