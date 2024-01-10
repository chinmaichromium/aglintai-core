import { JobTypeDB, StatusJobs } from '@/src/types/data.types';

import { JobApplicationSections } from '../JobApplicationsContext/types';

export type JobsData = {
  jobs: JobTypeDashboard[] | undefined;
  applications: ApplicationData[] | undefined;
};

export type ApplicationData = {
  job_id: string;
  status: string;
  email: string;
};

export type InputData = Partial<
  Omit<JobTypeDashboard, 'created_at' | 'recruiter_id'>
>;

export type JobContext = {
  jobsData: JobsData;
  handleJobRead: () => Promise<JobTypeDashboard[] | undefined>;
  handleJobUpdate: (
    // eslint-disable-next-line no-unused-vars
    jobId: string,
    // eslint-disable-next-line no-unused-vars
    inputData: Partial<JobTypeDashboard>,
  ) => Promise<boolean>;
  // eslint-disable-next-line no-unused-vars
  handleUIJobReplace: (newJob: JobTypeDashboard) => boolean;
  // eslint-disable-next-line no-unused-vars
  handleUIJobUpdate: (
    // eslint-disable-next-line no-unused-vars
    jobId: string,
    // eslint-disable-next-line no-unused-vars
    newJob?: JobTypeDashboard,
    // eslint-disable-next-line no-unused-vars
    count?: CountJobs,
  ) => boolean;
  // eslint-disable-next-line no-unused-vars
  handleJobDelete: (jobId: string) => Promise<boolean>;
  // eslint-disable-next-line no-unused-vars
  handleJobError: (error: any) => void;
  // eslint-disable-next-line no-unused-vars
  handleGetJob: (jobId: string) => JobTypeDashboard;
  // eslint-disable-next-line no-unused-vars
  handleUpdateJobCount: (jobIds: string[]) => Promise<boolean>;
  initialLoad: boolean;
};

export type JobTypeDashboard = Omit<JobTypeDB, 'active_status'> & {
  active_status: StatusJobs | null;
  count: CountJobs;
};

// eslint-disable-next-line no-unused-vars
export type CountJobs = { [key in JobApplicationSections]?: number };
