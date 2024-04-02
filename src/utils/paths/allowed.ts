import { cronPaths } from './cron';

export const allowedPaths = new Set([
  '/login',
  '/signup',
  '/api/jobpost/indexing',
  '/api/sitemap.xml',
  '/api/sendgrid',
  '/api/interview_feedback',
  '/api/webhook',
  '/api/ai/resume-embedding',
  '/api/interview',
  '/api/assistant/listAssistant',
  '/api/assistant/listMessages',
  '/api/assistant/createMessage',
  '/api/assistant/createThread',
  '/api/assistant/createRun',
  '/api/assistant/createAssistant',
  '/api/getLinkedin',
  '/api/trigger',
  '/api/jobpost/read',
  '/api/jobpost/write',
  '/api/jobpost/company',
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
  // remove below 2 after testing done
  '/api/scheduling/fetch-panel-user-availability',
  '/api/scheduling/create-calender-event',
  '/api/scheduling/interviewer-confirm-slots',
  '/api/scheduling/google-consent',
  '/api/scheduling/list-events',
  '/api/scheduling/list-availability',
  '/api/supabase/getCandidate-files',
  '/api/scheduling/invite',
  '/api/scheduling/confirm',
  '/api/scheduling/calendar-event',
  '/api/edge/sample',
  `/api/candidate-assessment/assessment-details`,
  `/api/candidate-assessment/assessment-answers`,
  '/api/candidate-assessment/assessment-result-create',
  '/api/candidate-assessment/assessment-result-details',
  '/api/candidate-assessment/assessment-result-update',
  `/api/assessment-result/result`,
  '/api/scheduling/list-availability-v2',
  '/api/scheduling/ai/find_panel_availabilities',
  '/api/scheduling/ai/save-time-slot-status',
  '/api/scheduling/ai/update-activity-confirmed-slot',
  '/api/scheduling/update-calender-event-status',
  '/api/scheduling/fetch-calender-atendees-status',
  '/api/scheduling/v2/find_availability',
  '/api/scheduling/v1/find_availability',
  '/api/scheduling/v1/find_interview_slots',
  '/api/scheduling/fetchdbusers',
  '/api/scheduling/v2/book_schedule_plan',
  '/api/invite_user',
  '/api/test',
  '/api/scheduling/mail-agent/email-webhook',
  '/api/scheduling/v2/cancel_interview_scheduling',
  '/api/scheduling/v1/find_interview_slots',
  ...cronPaths,
]);
