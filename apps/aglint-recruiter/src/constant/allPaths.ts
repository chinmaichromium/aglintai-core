export const PATHS = [
'/404',
'/500',
'/agent',
'/agent/jobs',
'/agent/jobs/[id]',
'/agent/scheduler',
'/agent/sourcing',
'/api/ai/create-embeddings',
'/api/ai/gpt3-5-turbo',
'/api/ai/queryToJson',
'/api/ashby/batchsave',
'/api/ashby/createapplication',
'/api/ashby/cron',
'/api/ashby/getCandidates',
'/api/ashby/getPostings',
'/api/ashby/readme.md',
'/api/ashby/saveApiKey',
'/api/ashby/syncapplications',
'/api/assessment/access_applications',
'/api/assessment/access_public_jobs',
'/api/assessment/access_recruiter',
'/api/assessment/insert_assessment_results',
'/api/assessment/update_applications',
'/api/assessment-builder/question',
'/api/assessment-builder/template',
'/api/assessment-result/read',
'/api/assessment-result/result',
'/api/assistant/createAssistant',
'/api/assistant/createMessage',
'/api/assistant/createRun',
'/api/assistant/createThread',
'/api/assistant/getAssistant',
'/api/assistant/getRun',
'/api/assistant/listAssistant',
'/api/assistant/listMessages',
'/api/assistant/listThreads',
'/api/assistant/submitRun',
'/api/assistant/updateAssistant',
'/api/candidate-assessment/assessment-answers',
'/api/candidate-assessment/assessment-details',
'/api/candidate-assessment/assessment-result-create',
'/api/candidate-assessment/assessment-result-details',
'/api/candidate-assessment/assessment-result-update',
'/api/candidatedb/cron-email-sender',
'/api/candidatedb/cron',
'/api/candidatedb/get-company',
'/api/candidatedb/get-email',
'/api/candidatedb/query',
'/api/candidatedb/save-cron',
'/api/candidatedb/save-emails',
'/api/candidatedb/search',
'/api/checkstatus',
'/api/decryptApiKey',
'/api/dns/lookup',
'/api/editjob/publishjob',
'/api/email-outreach/get-accesstoken',
'/api/email-outreach/get-user-email',
'/api/email-outreach/getNewAcessToken',
'/api/email-outreach/google-auth-url',
'/api/email-outreach/send-email',
'/api/emails/components/footer',
'/api/emails/components/header',
'/api/emails/recruiterOnboarding',
'/api/emails/styles',
'/api/emails/utils',
'/api/encryptData',
'/api/fetchCompanyDetails',
'/api/generateVideo',
'/api/getLinkedin',
'/api/getMembersWithRole',
'/api/get_interview_feedback_details',
'/api/get_last_login',
'/api/get_scheduling_reason',
'/api/google/overview-handler',
'/api/google/overview',
'/api/greenhouse/batchsave',
'/api/greenhouse/candidatesync',
'/api/greenhouse/getCandidates',
'/api/greenhouse/getPostings',
'/api/greenhouse/saveApiKey',
'/api/greenhouse/saveResume',
'/api',
'/api/interviewChatOpenAi',
'/api/interview_feedback',
'/api/invite_user',
'/api/invite_user/resend',
'/api/job/candidateUpload/csvUpload',
'/api/job/candidateUpload/manualUpload',
'/api/job/candidateUpload/resumeReupload',
'/api/job/candidateUpload/resumeUpload',
'/api/job/profileScore',
'/api/job-assistant/cluoud-functions/assistant',
'/api/job-assistant/createThread',
'/api/jobpost/company',
'/api/jobpost',
'/api/jobpost/read',
'/api/jobpost/write',
'/api/lever/candidateSync',
'/api/lever/createQueue',
'/api/lever/getCandidates',
'/api/lever/getPostings',
'/api/lever/saveApiKey',
'/api/lever/saveResume',
'/api/phone-screening/get-application-info',
'/api/phone-screening/submit',
'/api/pre-seed',
'/api/request_feedback',
'/api/reset_password',
'/api/resumecron/batchscore',
'/api/save_interview_feedback',
'/api/scheduling/application/cancelschedule',
'/api/scheduling/application/candidatesessioncache',
'/api/scheduling/application/debrief-add-users',
'/api/scheduling/application/fetchfeedbackdetails',
'/api/scheduling/application/mailthankyou',
'/api/scheduling/application/openselfscheduling',
'/api/scheduling/application/reschedulemeeting',
'/api/scheduling/application/schedulewithagent',
'/api/scheduling/application/schedulewithagentwithouttaskid',
'/api/scheduling/application/sendtocandidate',
'/api/scheduling/auth/outlook-req-tokens',
'/api/scheduling/auth/outlook',
'/api/scheduling/cron/trigger',
'/api/scheduling/debrief/auto-debrief.md',
'/api/scheduling/debrief/schedule_individual',
'/api/scheduling/debrief/task_create',
'/api/scheduling/fetchUserDetails',
'/api/scheduling/fetch_activities',
'/api/scheduling/fetch_interview_module_by_id',
'/api/scheduling/fetch_interview_session_task',
'/api/scheduling/get-accesstoken',
'/api/scheduling/get_interviewer_and_modules',
'/api/scheduling/get_interview_modules',
'/api/scheduling/get_interview_plans',
'/api/scheduling/get_interview_training_progress',
'/api/scheduling/google-consent',
'/api/scheduling/invite',
'/api/scheduling/mail-agent/email-webhook',
'/api/scheduling/mail-agent/init-agent',
'/api/scheduling/refresh-tokens',
'/api/scheduling/request_availability/candidateAvailability/getMeetings',
'/api/scheduling/request_availability/candidateAvailability/getScheduleMeetings',
'/api/scheduling/request_availability/getCandidateRequestData',
'/api/scheduling/request_availability/getTaskIdDetailsByRequestId',
'/api/scheduling/request_availability/insertScheduleActivities',
'/api/scheduling/request_availability/insertTaskProgress',
'/api/scheduling/request_availability/updateRequestAvailability',
'/api/scheduling/v1/assign-interviewer-training-type',
'/api/scheduling/v1/booking/candidate-self-schedule',
'/api/scheduling/v1/booking/confirm-recruiter-selected-option',
'/api/scheduling/v1/booking/confirm-slot-no-conflicts',
'/api/scheduling/v1/booking/schedule-debreif',
'/api/scheduling/v1/cancel_calender_event',
'/api/scheduling/v1/cancel_interview_scheduling',
'/api/scheduling/v1/cand_req_available_slots',
'/api/scheduling/v1/event_attendee_status',
'/api/scheduling/v1/find-alternative-time-slots',
'/api/scheduling/v1/find_availability',
'/api/scheduling/v1/find_interview_slots',
'/api/scheduling/v1/find_slots_date_range',
'/api/scheduling/v1/get-candidate-selected-slots',
'/api/scheduling/v1/troubleshoot',
'/api/scheduling/v1/update-calender-event-status',
'/api/scheduling/v1/update_meeting_interviewers',
'/api/scheduling/v1/verify-recruiter-selected-slots',
'/api/seed_calender',
'/api/sendgrid',
'/api/setMembersWithRole',
'/api/signup',
'/api/sitemap.xml',
'/api/supabase/deleteuser',
'/api/supabase/getCandidate-files',
'/api/support/email',
'/api/support/notificationEmail',
'/api/updateUsers',
'/api/webhook',
'/api/workflow-cron',
'/assessment-new',
'/assessment-new/[id]',
'/assessment-thanks',
'/assessment-thanks/[assessment_id]',
'/auth-cal/google',
'/auth-email/google',
'/candidate-assessment/[application_id]',
'/candidate-assessment/[application_id]/[assessment_id]',
'/candidate-phone-screening',
'/candidates/aglintdb',
'/candidates/history',
'/candidates',
'/candidates/search',
'/company',
'/company-postings/JobNotFound',
'/company-postings/[id]',
'/forgot-password',
'/integrations',
'/interview/feedback',
'/job-post/[id]',
'/job-post-assistant/[company_id]',
'/jobs/create',
'/jobs',
'/jobs/[id]/agent',
'/jobs/[id]/assessment',
'/jobs/[id]/candidate-list',
'/jobs/[id]/email-templates',
'/jobs/[id]/hiring-team',
'/jobs/[id]',
'/jobs/[id]/interview-plan',
'/jobs/[id]/job-details',
'/jobs/[id]/profile-score',
'/jobs/[id]/screening',
'/jobs/[id]/workflows',
'/loading',
'/login',
'/mui-styleguide',
'/notifications',
'/preview-assessment/[job_id]',
'/preview-assessment/[job_id]/[assessment_id]',
'/profile',
'/reset-password',
'/scheduling/application/[application_id]',
'/scheduling',
'/scheduling/interviewer/[member_id]',
'/scheduling/invite/[id]',
'/scheduling/module/IProgressDrawer',
'/scheduling/module/members/[module_id]',
'/scheduling/module/[module_id]',
'/scheduling/request-availability/[request_id]',
'/scheduling/view',
'/screening',
'/screening/[id]',
'/screening-dashboard',
'/signup',
'/support/create',
'/support',
'/support/[id]',
'/tasks',
'/thanks-page',
'/workflows',
'/workflows/[id]',
'/_app',
'/_document',
'/api/emails/agent_email_candidate',
'/api/emails/applicantReject_email_applicant',
'/api/emails/applicationRecieved_email_applicant',
'/api/emails/availabilityReqResend_email_candidate',
'/api/emails/confInterview_email_organizer',
'/api/emails/confirmInterview_email_applicant',
'/api/emails/debrief_email_interviewer',
'/api/emails/interReschedReq_email_recruiter',
'/api/emails/InterviewCancelReq_email_recruiter',
'/api/emails/interviewCancel_email_applicant',
'/api/emails/interviewStart_email_applicant',
'/api/emails/interviewStart_email_interviewers',
'/api/emails/interviewStart_email_organizer',
'/api/emails/meetingAccepted_email_organizer',
'/api/emails/meetingDeclined_email_organizer',
'/api/emails/preview',
'/api/emails/rescheduleSelfSchedule_email_applicant',
'/api/emails/selfScheduleReminder_email_applicant',
'/api/emails/sendAvailabilityRequest_email_applicant',
'/api/emails/sendAvailReqReminder_email_applicant',
'/api/emails/sendSelfScheduleRequest_email_applicant'
] as const