/* eslint-disable security/detect-object-injection */
import { JobApplication } from '@/src/context/JobApplicationsContext/types';
import { getOverallResumeScore } from '@/src/utils/support/supportUtils';

import { ScoreWheelParams } from '../Common/ScoreWheel';

export const capitalize = (str: string) => {
  if (str) {
    const s = str.trim().replaceAll('_', ' ');
    if (s.length !== 0)
      return `${s.charAt(0).toUpperCase()}${s.slice(1, s.length)}`;
  }
  return '';
};

export const formatTimeStamp = (timeStamp: string) => {
  const date = new Date(timeStamp);
  const creationDate = `${date.getDate()} ${date.toLocaleString('default', {
    month: 'short',
  })} ${date.getFullYear()}`;
  const creationHour = date.getHours();
  const finalHour =
    creationHour % 12 === 0
      ? 12
      : creationHour % 12 < 10
      ? `0${creationHour % 12}`
      : creationHour % 12;
  const creationMinutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const creationTime = `${finalHour}:${creationMinutes} ${
    creationHour < 12 ? 'AM' : 'PM'
  }`;
  return `${creationDate}, ${creationTime}`;
};

const getResumeScore = (
  application: JobApplication,
  parameter_weights: ScoreWheelParams,
) => {
  const jdScoreObj = application.jd_score as any;
  const jdScore = jdScoreObj
    ? getOverallResumeScore(application.jd_score, parameter_weights)
    : 0;
  return jdScore;
};

export type FilterParameter = {
  parameter: 'resume_score' | 'interview_score';
  condition: 'eq' | 'neq' | 'lt' | 'lte' | 'gt' | 'gte';
  count: number;
};

export type SortParameter = {
  parameter:
    | 'resume_score'
    | 'interview_score'
    | 'first_name'
    | 'email'
    | 'created_at';
  ascending: boolean;
};

export const getSortedApplications = (
  applications: JobApplication[],
  sortParameters: SortParameter,
  parameter_weights: ScoreWheelParams,
) => {
  switch (sortParameters.parameter) {
    case 'resume_score':
      {
        applications.sort(
          (a, b) =>
            getResumeScore(a, parameter_weights) -
            getResumeScore(b, parameter_weights),
        );
      }
      break;
    case 'interview_score':
      {
        applications.sort(
          (a, b) =>
            getInterviewScore(a.feedback) - getInterviewScore(b.feedback),
        );
      }
      break;
    case 'created_at':
      {
        applications.sort(
          (a, b) =>
            (new Date(a.created_at) as any) - (new Date(b.created_at) as any),
        );
      }
      break;
    case 'email':
      {
        applications.sort((a, b) =>
          a.candidates.email.localeCompare(b.candidates.email),
        );
      }
      break;
    case 'first_name':
      {
        applications.sort((a, b) =>
          `${a.candidates.first_name} ${a.candidates.last_name}`.localeCompare(
            `${b.candidates.first_name} ${b.candidates.last_name}`,
          ),
        );
      }
      break;
  }
  return sortParameters.ascending ? applications : applications.reverse();
};

export const getFilteredApplications = (
  applications: JobApplication[],
  parameter_weights: ScoreWheelParams,
  filterParameters: FilterParameter[],
) => {
  return applications.reduce((acc, curr) => {
    const valid = filterParameters.reduce((validity, filter) => {
      if (validity && handleFilterParameter(filter, curr, parameter_weights))
        return true;
      else return false;
    }, true);
    if (valid) acc.push(curr);
    return acc;
  }, []);
};

// eslint-disable-next-line no-unused-vars
export enum ApiLogState {
  // eslint-disable-next-line no-unused-vars
  FAILED = 'failed',
  // eslint-disable-next-line no-unused-vars
  SUCCESS = 'success',
  // eslint-disable-next-line no-unused-vars
  PROCESSING = 'processing',
}

export const intactConditionFilter = (application: JobApplication) => {
  switch (application.api_status) {
    case 'failed':
      return ApiLogState.FAILED;
    case 'success':
      return ApiLogState.SUCCESS;
    default:
      return ApiLogState.PROCESSING;
  }
};

const handleFilterParameter = (
  filterParameter: FilterParameter,
  application: JobApplication,
  parameter_weights: ScoreWheelParams,
) => {
  switch (filterParameter.parameter) {
    case 'resume_score':
      return handleFilterCondition(
        filterParameter,
        getResumeScore(application, parameter_weights),
      );

    case 'interview_score':
      return handleFilterCondition(
        filterParameter,
        getInterviewScore(application.feedback),
      );
  }
};

const handleFilterCondition = (
  filterParameter: FilterParameter,
  score: number,
) => {
  switch (filterParameter.condition) {
    case 'eq':
      return score === filterParameter.count;
    case 'gte':
      return score >= filterParameter.count;
    case 'gt':
      return score > filterParameter.count;
    case 'lte':
      return score <= filterParameter.count;
    case 'lt':
      return score < filterParameter.count;
    case 'neq':
      return score !== filterParameter.count;
  }
};

export function getInterviewScore(feedback) {
  const overAllScore = feedback
    ? feedback?.length !== 0
      ? Math.floor(
          feedback.reduce(
            (sum, entry) =>
              sum +
              Number(
                String(entry.rating).includes('/')
                  ? entry.rating.split('/')[0]
                  : entry.rating,
              ),
            0,
          ) / feedback.length,
        )
      : 0
    : 0;
  return overAllScore;
}
