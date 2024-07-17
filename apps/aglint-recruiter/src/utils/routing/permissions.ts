import { DatabaseTable } from '@aglint/shared-types';

import { PATHS } from '@/src/constant/allPaths';

// import ROUTES from './routes';

export type PermissionEnums = DatabaseTable['permissions']['name'];

type Permissions = {
  // eslint-disable-next-line no-unused-vars
  [id in (typeof PATHS)[number]]: PermissionEnums[];
};

const DEFAULT: Permissions = Object.assign(
  {},
  ...PATHS.map((route) => ({ [route]: null }) as Permissions),
);

const PERMISSIONS: Permissions = {
  ...DEFAULT,
  /** All of the permission are required to access this routes
   * permissions will reduced  using 'and'
   */
  '/tasks': ['task_module'],
  //

  '/api/job/profileScore': ['job_module'],
  '/api/job/candidateUpload/csvUpload': ['job_module'],
  '/api/job/candidateUpload/manualUpload': ['job_module'],
  '/api/job/candidateUpload/resumeReupload': ['job_module'],
  '/api/job/candidateUpload/resumeUpload': ['job_module'],
  '/jobs': ['job_module', 'job_read'],
  '/jobs/create': ['job_module', 'job_read', 'job_create'],
  '/jobs/[id]': ['job_module', 'job_read', 'job_read'],
  '/jobs/[id]/job-details': ['job_module', 'job_read', 'job_update'],
  '/jobs/[id]/profile-score': ['job_module', 'job_read', 'job_update'],
  '/jobs/[id]/interview-plan': ['job_module', 'job_read', 'job_update'],
  '/jobs/[id]/assessment': ['job_module', 'job_read', 'job_update'],
  '/jobs/[id]/screening': ['job_module', 'job_read', 'job_update'],
  '/jobs/[id]/hiring-team': ['job_update'],
  '/jobs/[id]/email-templates': ['job_module', 'job_read', 'job_update'],
  '/workflows': ['workflow_module', 'workflow_read'],
  '/workflows/[id]': ['workflow_module', 'workflow_read'],

  '/scheduling': ['scheduling_module'],
  '/scheduling/module/members/[module_id]': ['scheduling_module'],
  '/scheduling/interviewer/[member_id]': ['scheduling_module'],
  '/scheduling/application/[application_id]': ['scheduling_module'],
  '/company': ['company_settings_module'],

  /** Any one of the permission is required to access this apis
   * permission will reduced  using 'or'
   */
  '/api/getMembersWithRole': ['view_users'],
  '/api/scheduling/get_interview_plans': ['scheduling_module'],
  '/api/greenhouse/getPostings': ['job_module'],
  '/api/greenhouse/saveApiKey': ['manage_company'],
  '/api/lever/getPostings': ['job_module'],
  '/api/lever/saveApiKey': ['manage_company'],
  '/api/ashby/getPostings': ['job_module'],
  '/api/ashby/saveApiKey': ['manage_company'],
  '/api/get_last_login': ['view_users'],
  '/api/setMembersWithRole': ['view_users', 'scheduling_module'],
  '/api/scheduling/fetchUserDetails': ['scheduling_module'],
  '/api/scheduling/fetch_interview_session_task': ['scheduling_module'],
  '/api/scheduling/fetch_activities': ['scheduling_module'],
  '/api/scheduling/get_interview_modules': ['scheduling_module'],
  '/api/scheduling/fetch_interview_module_by_id': ['scheduling_module'],
  // scheduling application apis
  '/api/scheduling/application/sendtocandidate': ['scheduling_module'],
  '/api/scheduling/application/cancelschedule': ['scheduling_module'],
  '/api/scheduling/application/candidatesessioncache': ['scheduling_module'],
  '/api/scheduling/application/schedulewithagentwithouttaskid': [
    'scheduling_module',
  ],
  '/api/scheduling/get-accesstoken': ['scheduling_module'],
  '/api/email-outreach/get-user-email': ['scheduling_module'],
  '/api/scheduling/application/schedulewithagent': ['scheduling_module'],
  //v1 apis
  '/api/scheduling/v1/get-candidate-selected-slots': ['scheduling_module'],
  '/api/scheduling/v1/event_attendee_status': ['scheduling_module'],
  // request availability apis
  '/api/scheduling/request_availability/getCandidateRequestData': [
    'scheduling_module',
  ],
  '/api/scheduling/request_availability/getTaskIdDetailsByRequestId': [
    'scheduling_module',
  ],
  '/api/scheduling/get_interviewer_and_modules': ['scheduling_module'],
  '/api/scheduling/request_availability/insertScheduleActivities': [
    'scheduling_module',
  ],
  '/api/scheduling/request_availability/insertTaskProgress': [
    'scheduling_module',
  ],
  // '/api/scheduling/request_availability/updateRequestAvailability': [
  //   'scheduling_module',
  //   'scheduler_create',
  // ], //
  '/api/scheduling/request_availability/candidateAvailability/getMeetings': [
    'scheduling_module',
  ],
  '/api/scheduling/request_availability/candidateAvailability/getScheduleMeetings':
    ['scheduling_module'],
  '/api/scheduling/get_interview_training_progress': ['scheduling_module'],
  // request availability mail apis
  '/api/emails/sendAvailabilityRequest_email_applicant': ['scheduling_module'],
  // '/api/scheduling/v1/find-alternative-time-slots': ['scheduler_update'], //
  // '/api/scheduling/v1/update_meeting_interviewers': ['scheduler_update'], //
  // '/api/request_feedback': ['scheduler_update'], //
  '/api/scheduling/application/fetchfeedbackdetails': [
    'scheduling_module',
    'task_module',
  ],
  '/api/emails/sendAvailReqReminder_email_applicant': [
    'scheduling_module',
    'task_module',
  ],
  '/api/ai/gpt3-5-turbo': ['company_settings_module'],
  '/api/encryptData': ['integrations_module'],
  '/api/emails/selfScheduleReminder_email_applicant': ['scheduling_module'],
  '/api/emails/availabilityReqResend_email_candidate': ['scheduling_module'],
  '/api/scheduling/v1/booking/confirm-recruiter-selected-option': [
    'scheduling_module',
  ],
  '/api/emails/confirmInterview_email_applicant': ['scheduling_module'],
  '/api/emails/preview': ['scheduling_module'],
  '/api/getRoleAndPermissions': ['view_roles'],
  '/api/setRoleAndPermission': ['manage_roles'],
  '/api/getUserDetails': ['job_module'],
  '/api/invite_user': ['view_users'],
  '/api/invite_user/resend': ['view_users'],
};

export default PERMISSIONS;
