import { cronPaths } from './cron';

export const allowedPaths = new Set([
  '/login',
  '/signup',
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
  '/api/scheduling/v1/confirm_interview_slot',
  '/api/invite_user',
  '/api/scheduling/mail-agent/email-webhook',
  '/api/scheduling/v1/find_interview_slots',
  '/api/scheduling/v1/find_slots_date_range',
  '/api/scheduling/v1/cancel_calender_event',
  '/api/scheduling/v1/cancel_interview_scheduling',
  '/api/scheduling/v1/assign-interviewer-training-type',
  '/api/scheduling/v1/save_meeting_to_task',
  '/api/scheduling/v1/cand_req_available_slots',
  '/api/scheduling/debrief/auto_debrief_handler',
  '/api/scheduling/debrief/task_create',
  '/api/scheduling/debrief/schedule_individual',
  '/api/scheduling/mail-agent/init-agent',
  '/api/scheduling/application/schedulewithagent',
  '/api/scheduling/application/mailthankyou',
  '/api/scheduling/application/debrief-add-users',
  '/api/scheduling/cron/trigger',
  '/api/getUserLocation',
  'https://aglint-phone-ngrok-app.ngrok.io/api/create-phone-call',
  ...cronPaths,
]);
