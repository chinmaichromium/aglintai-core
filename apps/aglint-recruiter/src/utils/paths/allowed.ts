import { type PATHS } from '@/constant/allPaths';

import { cronPaths } from './cron';
type t = (typeof PATHS)[number];
export const allowedPaths = new Set<t>([
  '/dashboards',
  '/dashboards/interviewer',
  '/forgot-password',
  '/login',
  '/portal',
  '/reset-password',
  '/signup',
  '/api/testx',
  '/login',
  '/theme',
  '/signup',
  '/candidate/login',
  '/candidate/interviews',
  '/candidate/messages',
  '/candidate/profile',
  '/candidate/home',
  '/api/signup',
  '/forgot-password',
  '/api/auth/send-reset-email',
  '/api/pre-seed',
  '/api/unauthorized',
  '/api/jobpost/indexing',
  '/api/sitemap.xml',
  '/api/sendgrid',
  '/api/save_interview_feedback',
  '/api/get_scheduling_reason',
  '/api/interview_feedback',
  '/api/webhook',
  '/api/ai/resume-embedding',
  '/api/interview',
  '/api/get_interview_feedback_details',
  '/api/assistant/listAssistant',
  '/api/assistant/listMessages',
  '/api/assistant/createMessage',
  '/api/assistant/createThread',
  '/api/assistant/createRun',
  '/api/assistant/createAssistant',
  '/api/getLinkedin',
  '/api/jobpost/read',
  '/api/jobpost/write',
  '/api/jobpost/company',
  '/api/fetchCompanyDetails',
  '/api/emails/recruiterOnboarding',
  '/api/phone-screening/submit',
  '/api/phone-screening/get-application-info',
  '/api/assessment/access_applications',
  '/api/assessment/access_public_jobs',
  '/api/assessment/access_recruiter',
  '/api/assessment/insert_assessment_results',
  '/api/assessment/update_applications',
  '/api/job/jobApplications/candidateEmail',
  '/api/job/jobApplications/candidateUpload/csvUpload',
  '/api/job/jobApplications/candidateUpload/manualUpload',
  '/api/job/jobApplications/candidateUpload/resumeUpload',
  '/api/job/jobApplications/read',
  '/api/job-assistant/createThread',
  '/api/job-assistant/cluoud-functions/assistant',
  '/api/scheduling/fetch-panel-user-availability',
  '/api/scheduling/create-calender-event',
  '/api/scheduling/interviewer-confirm-slots',
  '/api/scheduling/google-consent',
  '/api/scheduling/list-events',
  '/api/scheduling/list-availability',
  '/api/supabase/getCandidate-files',
  `/api/candidate-assessment/assessment-details`,
  `/api/candidate-assessment/assessment-answers`,
  '/api/candidate-assessment/assessment-result-create',
  '/api/candidate-assessment/assessment-result-details',
  '/api/candidate-assessment/assessment-result-update',
  `/api/assessment-result/result`,
  '/api/scheduling/ai/find_panel_availabilities',
  '/api/scheduling/ai/save-time-slot-status',
  '/api/scheduling/ai/update-activity-confirmed-slot',
  '/api/scheduling/update-calender-event-status',
  '/api/scheduling/fetch-calender-atendees-status',
  '/api/scheduling/v1/find_availability',
  '/api/scheduling/mail-agent/email-webhook',
  '/api/scheduling/v1/find_interview_slots',
  '/api/scheduling/v1/find_slots_date_range',
  '/api/scheduling/v1/cancel_calender_event',
  '/api/scheduling/v1/cancel_interview_scheduling',
  '/api/scheduling/v1/assign-interviewer-training-type',
  '/api/scheduling/v1/cand_req_available_slots',
  '/api/scheduling/v1/booking/confirm-slot-no-conflicts',
  '/api/scheduling/debrief/auto_debrief_handler',
  '/api/scheduling/debrief/task_create',
  '/api/scheduling/debrief/schedule_individual',
  '/api/scheduling/mail-agent/init-agent',
  '/api/scheduling/application/schedulewithagent',
  '/api/scheduling/application/mailthankyou',
  '/api/scheduling/application/debrief-add-users',
  '/api/scheduling/v1/verify-recruiter-selected-slots',
  '/api/scheduling/v1/booking/candidate-self-schedule',
  '/api/scheduling/cron/trigger',
  '/api/workflow-cron',
  '/api/scheduling/request_availability/getCandidateRequestData',
  '/api/scheduling/request_availability/insertTaskProgress',
  '/api/scheduling/request_availability/getTaskIdDetailsByRequestId',
  '/api/scheduling/request_availability/insertScheduleActivities',
  '/api/scheduling/request_availability/candidateAvailability/getMeetings',
  '/api/scheduling/request_availability/candidateAvailability/getScheduleMeetings',
  '/api/getUserLocation',
  '/api/automation/booking_self_schedule',
  '/api/automation/update_request',
  '/api/automation/update_availability',
  '/api/automation/send_availability_reminder',
  '/api/automation/send_selfSchedule_reminder',
  '/api/automation/reschedule_request',
  '/api/automation/cancel_request',
  '/api/automation/get_users_not_in_constantEmails',
  '/api/automation/schedule_auth_update',
  '/api/automation/seed_default_data',
  '/api/automation/get_users',
  '/api/automation/add_users',
  '/api/automation/update_users_name',
  '/api/automation/update_user_to_active',
  '/api/automation/workflow_connect_to_jobs',
  '/api/emails/sendSelfScheduleRequest_email_applicant',
  '/api/emails/sendAvailabilityRequest_email_applicant',
  '/api/emails/interviewCancel_email_applicant',
  '/api/emails/selfScheduleReminder_email_applicant',
  '/api/scheduling/application/openselfscheduling',
  '/api/scheduling/v1/booking/schedule-debreif',
  '/api/scheduling/candidate/candidate-self-scheduling',
  '/api/scheduling/candidate/candidate-availability-request',
  '/api/sendAvailabilityRequest_email_applicant',
  '/api/agent-workflow/new-schedule',
  '/api/agent-workflow/cancel-schedule',
  '/api/agent-workflow/cand-avail-recieved',
  '/api/request/candidate-request',
  '/api/request/interviewer-request',
  '/api/scheduling/v1/find-alternative-time-slots',
  '/api/scheduling/v1/update-meeting-interviewers',
  '/api/db-events',
  '/api/application/move-to-interview',
  '/api/sync/greenhouse/full_db',
  '/api/sync/greenhouse/applications',
  '/api/sync/greenhouse/departments',
  '/api/sync/greenhouse/office_locations',
  '/api/sync/greenhouse/user',
  '/api/sync/greenhouse/jobs',
  '/api/agent-workflow/interviewer-decline',
  '/api/scheduling/v1/find-replacement-ints',
  '/api/request/workflow-clone',
  '/api/scheduling/v1/event_attendee_status',
  '/api/google-calender/watch-changes',
  '/api/google-calender/webhook',
  '/api/scheduling/v1/event_attendee_status',
  '/api/scheduling/v1/event_attendee_status',
  '/api/scheduling/v1/check_calendar_status',
  '/api/scheduling/calendar_check_recruiter',
  '/api/interviewers',
  '/api/interviewers/getAllInterviewers',
  '/api/scheduling/application/candidatecancelreschedule',
  '/api/google-calender/stop-channel',
  '/api/get_member',
  '/api/google-calender/resync',
  '/api/google-calender/watch-changes',
  '/api/google-calender/webhook',
  '/api/candidate_portal/get_interviews',
  '/api/candidate_portal/get_message',
  '/api/candidate_portal/get_profile',
  '/api/candidate_portal/home_page',
  '/api/candidate_portal/get_navbar',
  '/api/request/execute-workflow',
  '/auth/callback',
  '/auth/redirect',
  '/api/automation/reset-job-workflows',
  '/api/scheduling/v1/booking/confirm-recruiter-selected-option',
  '/api/candidate_portal/candidate_pic_update',
  '/api/dev/report-declines',
  '/api/dev/report-schedules',
  ...cronPaths,
] as t[]);

// Define route prefixes that expect a UUID at the end
const dynamicPublicRoutePrefixes = [
  '/self-scheduling',
  '/request-availability',
  '/company-postings',
  '/job-post',
];

const uuidPattern =
  '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}';

// Build regex patterns dynamically for each route prefix
export const dynamicPublicRoutes = dynamicPublicRoutePrefixes.map(
  // eslint-disable-next-line security/detect-non-literal-regexp
  (prefix) => new RegExp(`^${prefix}/${uuidPattern}$`),
);
