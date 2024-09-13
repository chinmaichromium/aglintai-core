import type { ApiPermissions } from './utils';

export const API_PERMISSIONS: ApiPermissions = {
  scheduling: {
    analytics: ['scheduling_module'],
    v1: ['scheduling_module'],
  },
  textTransform: {
    selfScheduleInstruction: ['job_module'],
  },
  interview_pool: {
    module_and_users: ['view_interview_types'],
    training_progress: ['view_interview_types'],
    candidates: ['view_interview_types'],
    feedbacks: ['view_interview_types'],
    schedules: ['view_interview_types'],
  },
};
