/* eslint-disable no-unused-vars */
export enum featureFlag {
  isSchedulingDashboardEnabled = 'isSchedulingDashboardEnabled',
}

export const interviewPlanRecruiterUserQuery =
  'user_id, first_name, last_name, email, profile_image, position, department' as const;
