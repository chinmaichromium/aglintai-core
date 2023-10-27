/* eslint-disable security/detect-object-injection */
import { useAuthDetails } from '@context/AuthContext/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useReducer, useRef, useState } from 'react';

import { ApiLogState } from '@/src/components/JobApplicationsDashboard/utils';
import { ReadJobApplicationApi } from '@/src/pages/api/JobApplicationsApi/read';
import toast from '@/src/utils/toast';

import {
  InputData,
  JobApplication,
  JobApplicationContext,
  JobApplicationsData,
  JobApplicationSections,
} from './types';
import {
  bulkUpdateJobApplicationDbAction,
  deleteJobApplicationDbAction,
  getUpdatedJobStatus,
  // readJobApplicationDbAction,
  updateJobApplicationDbAction,
} from './utils';
import { useJobs } from '../JobsContext';
// eslint-disable-next-line no-unused-vars
enum ActionType {
  // eslint-disable-next-line no-unused-vars
  CREATE,
  // eslint-disable-next-line no-unused-vars
  BULK_CREATE,
  // eslint-disable-next-line no-unused-vars
  READ,
  // eslint-disable-next-line no-unused-vars
  INSERT,
  // eslint-disable-next-line no-unused-vars
  UPDATE,
  // eslint-disable-next-line no-unused-vars
  BULK_UPDATE,
  // eslint-disable-next-line no-unused-vars
  DELETE,
}

type Action =
  | {
      type: ActionType.READ;
      payload: {
        applicationData: JobApplicationsData;
      };
    }
  | {
      type: ActionType.INSERT;
      payload: {
        applicationData: JobApplicationsData;
        applicationStatus: JobApplicationSections;
      };
    }
  | {
      type: ActionType.UPDATE;
      payload: {
        applicationData: JobApplication;
      };
    }
  | {
      type: ActionType.DELETE;
      payload: {
        applicationId: string;
        applicationStatus: JobApplicationSections;
      };
    };

const reducer = (state: JobApplicationsData, action: Action) => {
  switch (action.type) {
    case ActionType.READ: {
      const newState: JobApplicationsData = {
        ...action.payload.applicationData,
      };
      return newState;
    }
    case ActionType.INSERT: {
      const newState: JobApplicationsData = {
        ...state,
        [action.payload.applicationStatus]: [
          ...state[action.payload.applicationStatus],
          ...action.payload.applicationData[action.payload.applicationStatus],
        ],
      };
      return newState;
    }
    case ActionType.UPDATE: {
      const newState: JobApplicationsData = {
        ...state,
        [action.payload.applicationData.status]: [
          ...action.payload.applicationData[
            action.payload.applicationData.status
          ],
          action.payload.applicationData,
        ],
      };
      return newState;
    }

    case ActionType.DELETE: {
      const newState: JobApplicationsData = {
        ...state,
        [action.payload.applicationStatus]: state[
          action.payload.applicationStatus
        ].filter(
          (a: JobApplication) =>
            a.application_id !== action.payload.applicationId,
        ),
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

const useProviderJobApplicationActions = (
  job_id: string = undefined,
): JobApplicationContext => {
  const { recruiter } = useAuthDetails();

  const router = useRouter();
  const { jobsData, initialLoad: jobLoad } = useJobs();
  const jobId = job_id ?? (router.query?.id as string);

  const paginationLimit = 16;

  const initialJobApplicationDepth = Object.values(
    JobApplicationSections,
  ).reduce((acc, curr) => {
    return { ...acc, [curr]: paginationLimit };
    // eslint-disable-next-line no-unused-vars
  }, {}) as { [key in JobApplicationSections]: number };

  const [applications, dispatch] = useReducer(reducer, undefined);
  const [applicationDepth, setApplicationDepth] = useState(
    initialJobApplicationDepth,
  );

  const initialJobLoad = recruiter?.id && jobLoad ? true : false;
  const job = initialJobLoad && jobsData.jobs.find((job) => job.id === jobId);
  const initialLoad = initialJobLoad && applications ? true : false;

  const [openImportCandidates, setOpenImportCandidates] = useState(false);
  const [openManualImportCandidates, setOpenManualImportCandidates] =
    useState(false);

  const circularScoreAnimation = useRef(true);
  const updateTick = useRef(false);

  useEffect(() => {
    if (initialLoad && circularScoreAnimation) {
      const timer = setTimeout(() => {
        circularScoreAnimation.current = false;
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [initialLoad]);

  const handleJobApplicationRead = async (
    request: ReadJobApplicationApi['request'],
  ) => {
    if (recruiter) {
      const { data: axiosData } = await axios({
        method: 'post',
        url: '/api/JobApplicationsApi/read',
        data: request,
      });
      const { data, error }: ReadJobApplicationApi['response'] = axiosData;
      if (data) {
        const action: Action = {
          type: ActionType.READ,
          payload: { applicationData: data },
        };
        dispatch(action);
        return true;
      }
      handleJobApplicationError(error);
      return false;
    }
  };

  const handleJobApplicationPaginatedRead = async (
    section: JobApplicationSections,
  ) => {
    if (recruiter) {
      const { data: axiosData } = await axios({
        method: 'post',
        url: '/api/JobApplicationsApi/read',
        data: {
          job_id: jobId,
          status: section,
          apiStatus: ApiLogState.SUCCESS,
          range: {
            start: applicationDepth[section] + 1,
            end: applicationDepth[section] + paginationLimit + 1,
          },
        },
      });
      const { data, error }: ReadJobApplicationApi['response'] = axiosData;
      if (data) {
        const action: Action = {
          type: ActionType.INSERT,
          payload: { applicationData: data, applicationStatus: section },
        };
        dispatch(action);
        setApplicationDepth((prev) => {
          return { ...prev, [section]: prev[section] + paginationLimit };
        });
        updateTick.current = !updateTick.current;
        return true;
      }
      handleJobApplicationError(error);
      return false;
    }
  };

  const handleJobApplicationUpdate = async (
    applicationId: string,
    inputData: InputData,
  ) => {
    if (recruiter) {
      const { data, error } = await updateJobApplicationDbAction(
        applicationId,
        inputData,
      );
      if (data) {
        const action: Action = {
          type: ActionType.UPDATE,
          payload: {
            applicationData: data[0],
          },
        };
        dispatch(action);
        updateTick.current = !updateTick.current;
        return true;
      }
      handleJobApplicationError(error);
      return false;
    }
  };

  const handleJobApplicationUIUpdate = (jobApplication: JobApplication) => {
    if (recruiter) {
      const action: Action = {
        type: ActionType.UPDATE,
        payload: {
          applicationData: jobApplication,
        },
      };
      dispatch(action);
      updateTick.current = !updateTick.current;
      return true;
    }
  };

  const handleJobApplicationBulkUpdate = async (
    updatedApplicationData: JobApplication[],
  ) => {
    const { data: d1, error: e1 } = await bulkUpdateJobApplicationDbAction(
      updatedApplicationData,
    );
    if (d1) {
      const read = await handleJobApplicationRead({
        job_id: jobId,
        range: { start: 0, end: 10 },
      });
      if (read) {
        updateTick.current = !updateTick.current;
        return true;
      } else {
        handleJobApplicationError(null);
        return false;
      }
    } else {
      handleJobApplicationError(e1);
      return false;
    }
  };

  const handleJobApplicationDelete = async (
    applicationId: string,
    applicationStatus: JobApplicationSections,
  ) => {
    if (recruiter) {
      const { data, error } = await deleteJobApplicationDbAction(applicationId);
      if (data) {
        const action: Action = {
          type: ActionType.DELETE,
          payload: { applicationId, applicationStatus },
        };
        dispatch(action);
        updateTick.current = !updateTick.current;
        return true;
      }
      handleJobApplicationError(error);
      return false;
    }
  };

  const handleUpdateJobStatus = async (
    applicationIdSet: Set<string>,
    sections: {
      source: JobApplicationSections;
      destination: JobApplicationSections;
    },
  ) => {
    return await handleJobApplicationBulkUpdate(
      getUpdatedJobStatus(applicationIdSet, applications, sections),
    );
  };

  const handleJobApplicationError = (error) => {
    toast.error(`Oops! Something went wrong.\n (${error?.message})`);
  };

  useEffect(() => {
    if (initialJobLoad)
      handleJobApplicationRead({
        job_id: jobId,
        range: { start: 0, end: paginationLimit },
      });
  }, [initialJobLoad]);

  const value = {
    applications,
    applicationDepth,
    job,
    updateTick: updateTick.current,
    handleJobApplicationRead,
    handleJobApplicationPaginatedRead,
    handleJobApplicationUpdate,
    handleJobApplicationUIUpdate,
    handleJobApplicationBulkUpdate,
    handleJobApplicationDelete,
    handleJobApplicationError,
    handleUpdateJobStatus,
    initialLoad,
    circularScoreAnimation,
    openImportCandidates,
    setOpenImportCandidates,
    openManualImportCandidates,
    setOpenManualImportCandidates,
  };

  return value;
};

export default useProviderJobApplicationActions;
