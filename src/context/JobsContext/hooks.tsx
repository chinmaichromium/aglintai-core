import { useAuthDetails } from '@context/AuthContext/AuthContext';
import toast from '@utils/toast';
import { get } from 'lodash';
import { useEffect, useReducer } from 'react';

import { JobApplcationDB, JobType, StatusJobs } from '@/src/types/data.types';

import { JobsData } from './types';
import {
  deleteJobDbAction,
  initialJobContext,
  readJobApplicationsAction,
  readJobDbAction,
} from './utils';

// eslint-disable-next-line no-unused-vars
enum ActionType {
  // eslint-disable-next-line no-unused-vars
  CREATE,
  // eslint-disable-next-line no-unused-vars
  READ,
  // eslint-disable-next-line no-unused-vars
  READAPPLICATION,
  // eslint-disable-next-line no-unused-vars
  UPDATE,
  // eslint-disable-next-line no-unused-vars
  DELETE,
}

type Action =
  | {
      type: ActionType.CREATE;
      payload: {
        jobData: JobType;
      };
    }
  | {
      type: ActionType.READ;
      payload: {
        jobsData: JobType[];
      };
    }
  | {
      type: ActionType.UPDATE;
      payload: {
        newJob: JobType;
      };
    }
  | {
      type: ActionType.DELETE;
      payload: { jobId: string };
    }
  | {
      type: ActionType.READAPPLICATION;
      payload: { applicationData: JobApplcationDB[] };
    };

const reducer = (state: JobsData, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE: {
      const newState: JobsData = {
        ...state,
        jobs: [...state.jobs, action.payload.jobData],
      };
      return newState;
    }

    case ActionType.READ: {
      const newState: JobsData = {
        ...state,
        jobs: [...action.payload.jobsData],
      };
      return newState;
    }

    case ActionType.UPDATE: {
      const { newJob } = action.payload;
      const newState: JobsData = {
        ...state,
        jobs: [
          newJob,
          ...get(state, 'jobs', []).filter((j) => j.id !== newJob.id),
        ],
      };
      return newState;
    }

    case ActionType.DELETE: {
      const newJobs: JobType[] = state.jobs.filter(
        (job) => job.id !== action.payload.jobId,
      );
      const newState: JobsData = {
        ...state,
        jobs: newJobs,
      };
      return newState;
    }

    case ActionType.READAPPLICATION: {
      const newState: JobsData = {
        ...state,
        applications: action.payload.applicationData,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

const useJobActions = () => {
  const { recruiter } = useAuthDetails();

  const [jobsData, dispatch] = useReducer(reducer, initialJobContext.jobsData);
  const initialLoad =
    recruiter?.id && jobsData.jobs && jobsData.applications ? true : false;

  const handleJobRead = async () => {
    if (recruiter) {
      const { data, error } = await readJobDbAction(recruiter.id);
      if (data) {
        const fechedJobs = data.map((job) => {
          return {
            ...job,
            active_status: job.active_status as unknown as StatusJobs,
          };
        });

        const action: Action = {
          type: ActionType.READ,
          payload: { jobsData: fechedJobs },
        };
        dispatch(action);
        return fechedJobs;
      }
      handleJobError(error);
      return [];
    }
  };

  const handleApplicationsRead = async (jobIds: string[]) => {
    if (recruiter) {
      const { data, error } = await readJobApplicationsAction(jobIds);
      if (data) {
        const action: Action = {
          type: ActionType.READAPPLICATION,
          payload: { applicationData: data },
        };
        dispatch(action);
        return true;
      }
      handleJobError(error);
      return false;
    }
  };

  const handleJobUpdate = async (newJob: JobType) => {
    if (recruiter) {
      if (newJob) {
        const action: Action = {
          type: ActionType.UPDATE,
          payload: {
            newJob: newJob,
          },
        };
        dispatch(action);
        return true;
      }
      // handleJobError(error);
      return undefined;
    }
  };

  const handleJobDelete = async (jobId: string) => {
    if (recruiter) {
      const { data, error } = await deleteJobDbAction(jobId);
      if (data) {
        const action: Action = {
          type: ActionType.DELETE,
          payload: {
            jobId,
          },
        };
        dispatch(action);
        return true;
      }
      handleJobError(error);
      return false;
    }
  };

  const handleJobError = (error) => {
    toast.error(`Oops! Something went wrong.\n ${error?.message}`);
  };
  useEffect(() => {
    (async () => {
      const data = await handleJobRead();
      if (data) {
        const jobIds = data.map((job) => {
          return job.id;
        });
        handleApplicationsRead(jobIds);
      }
    })();
  }, [recruiter?.id]);

  const value = {
    jobsData,
    handleJobRead,
    handleJobUpdate,
    handleJobDelete,
    handleJobError,
    initialLoad,
  };

  return value;
};

export default useJobActions;
