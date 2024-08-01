import { PATHS } from '@/src/constant/allPaths';

import { cronPaths } from './cron';
type t = (typeof PATHS)[number];
export const allowedPaths = new Set<t>([
  '/api/testx',
  '/login',
  '/signup',
  '/api/signup',
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
  '/api/scheduling/invite',
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
  '/api/scheduling/request_availability/updateRequestAvailability',
  '/api/scheduling/request_availability/insertScheduleActivities',
  '/api/getUserLocation',
  '/api/emails/sendSelfScheduleRequest_email_applicant',
  '/api/emails/interviewCancel_email_applicant',
  '/api/emails/selfScheduleReminder_email_applicant',
  '/api/scheduling/application/openselfscheduling',
  '/api/scheduling/v1/booking/schedule-debreif',
  '/api/scheduling/candidate/candidate-self-scheduling',
  '/api/scheduling/candidate/candidate-availability-request',
  '/api/agent-scheduling/send-availability-request-link',
  '/api/agent-workflow/new-schedule',
  'https://aglint-phone-ngrok-app.ngrok.io/api/create-phone-call',
  ...cronPaths,
] as t[]);
