export const PATHS = [
'/404',
'/500',
'/api/agent-workflow/cancel-schedule',
'/api/agent-workflow/cand-avail-recieved',
'/api/agent-workflow/interviewer-decline',
'/api/agent-workflow/new-schedule',
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
'/api/assessment-builder/question',
'/api/assessment-builder/template',
'/api/assessment-result/read',
'/api/assessment-result/result',
'/api/assessment/access_applications',
'/api/assessment/access_public_jobs',
'/api/assessment/access_recruiter',
'/api/assessment/insert_assessment_results',
'/api/assessment/update_applications',
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
'/api/automation/add_users',
'/api/automation/booking_self_schedule',
'/api/automation/cancel_request',
'/api/automation/get_users',
'/api/automation/get_users_not_in_constantEmails',
'/api/automation/reschedule_request',
'/api/automation/schedule_auth_update',
'/api/automation/seed_default_data',
'/api/automation/send_availability_reminder',
'/api/automation/send_selfSchedule_reminder',
'/api/automation/update_availability',
'/api/automation/update_request',
'/api/automation/update_user_to_active',
'/api/automation/update_users_name',
'/api/automation/workflow_connect_to_jobs',
'/api/candidate-assessment/assessment-answers',
'/api/candidate-assessment/assessment-details',
'/api/candidate-assessment/assessment-result-create',
'/api/candidate-assessment/assessment-result-details',
'/api/candidate-assessment/assessment-result-update',
'/api/candidatedb/cron',
'/api/candidatedb/cron-email-sender',
'/api/candidatedb/get-company',
'/api/candidatedb/get-email',
'/api/candidatedb/query',
'/api/candidatedb/save-cron',
'/api/candidatedb/save-emails',
'/api/candidatedb/search',
'/api/checkstatus',
'/api/db-events',
'/api/decryptApiKey',
'/api/dns/lookup',
'/api/email-outreach/get-accesstoken',
'/api/email-outreach/get-user-email',
'/api/email-outreach/getNewAcessToken',
'/api/email-outreach/google-auth-url',
'/api/email-outreach/send-email',
'/api/emails/InterviewCancelReq_email_recruiter',
'/api/emails/agent_email_candidate',
'/api/emails/applicantReject_email_applicant',
'/api/emails/applicationRecieved_email_applicant',
'/api/emails/availabilityReqResend_email_candidate',
'/api/emails/components/footer',
'/api/emails/components/header',
'/api/emails/confInterview_email_organizer',
'/api/emails/confirmInterview_email_applicant',
'/api/emails/debrief_email_interviewer',
'/api/emails/interReschedReq_email_recruiter',
'/api/emails/interviewCancel_email_applicant',
'/api/emails/interviewEnd_email_interviewerForFeedback',
'/api/emails/interviewEnd_email_organizerForMeetingStatus',
'/api/emails/interviewEnd_email_rShadowTraineeForMeetingAttendence',
'/api/emails/interviewEnd_email_shadowTraineeForMeetingAttendence',
'/api/emails/interviewStart_email_applicant',
'/api/emails/interviewStart_email_interviewers',
'/api/emails/interviewStart_email_organizer',
'/api/emails/interviewerResumed_email_admin',
'/api/emails/meetingAccepted_email_organizer',
'/api/emails/meetingDeclined_email_organizer',
'/api/emails/onQualified_email_trainee',
'/api/emails/onSignup_email_admin',
'/api/emails/onTrainingComplete_email_approverForTraineeMeetingQualification',
'/api/emails/preview',
'/api/emails/recruiterOnboarding',
'/api/emails/rescheduleSelfSchedule_email_applicant',
'/api/emails/selfScheduleReminder_email_applicant',
'/api/emails/sendAvailReqReminder_email_applicant',
'/api/emails/sendAvailabilityRequest_email_applicant',
'/api/emails/sendSelfScheduleRequest_email_applicant',
'/api/emails/styles',
'/api/emails/utils',
'/api/encryptData',
'/api/fetchCompanyDetails',
'/api/generateVideo',
'/api/getLinkedin',
'/api/getMembersWithRole',
'/api/getRoleAndPermissions',
'/api/getUserDetails',
'/api/getUserLocation',
'/api/get_interview_feedback_details',
'/api/get_last_login',
'/api/get_member',
'/api/get_scheduling_reason',
'/api/get_users_by_ids',
'/api/google-calender/resync',
'/api/google-calender/stop-channel',
'/api/google-calender/watch-changes',
'/api/google-calender/webhook',
'/api/google/overview',
'/api/google/overview-handler',
'/api/greenhouse/batchsave',
'/api/greenhouse/getCandidates',
'/api/greenhouse/getPostings',
'/api/greenhouse/saveApiKey',
'/api/greenhouse/saveResume',
'/api/integrations/greenhouse',
'/api/interviewChatOpenAi',
'/api/interview_feedback',
'/api/interviewers',
'/api/interviewers/getAllInterviewers',
'/api/invite_user',
'/api/invite_user/resend',
'/api/job-assistant/cluoud-functions/assistant',
'/api/job-assistant/createThread',
'/api/job/candidateUpload/csvUpload',
'/api/job/candidateUpload/manualUpload',
'/api/job/candidateUpload/resumeReupload',
'/api/job/candidateUpload/resumeUpload',
'/api/job/profileScore',
'/api/jobpost',
'/api/jobpost/company',
'/api/jobpost/read',
'/api/jobpost/write',
'/api/lever/candidateSync',
'/api/lever/createjob',
'/api/lever/getCandidates',
'/api/lever/getPostings',
'/api/lever/saveApiKey',
'/api/lever/saveResume',
'/api/phone-screening/get-application-info',
'/api/phone-screening/submit',
'/api/pre-seed',
'/api/request/candidate-request',
'/api/request/interviewer-request',
'/api/request/schedule-request',
'/api/request/workflow-clone',
'/api/request_feedback',
'/api/reset_password',
'/api/resumecron/batchscore',
'/api/roleAndPermission',
'/api/save_interview_feedback',
'/api/scheduling/application/cancelschedule',
'/api/scheduling/application/debrief-add-users',
'/api/scheduling/application/fetchInterviewSessionByRequest',
'/api/scheduling/application/fetchcandidatedetails',
'/api/scheduling/application/fetchfeedbackdetails',
'/api/scheduling/application/fetchinterviewstages',
'/api/scheduling/application/mailthankyou',
'/api/scheduling/application/openselfscheduling',
'/api/scheduling/application/reschedulemeeting',
'/api/scheduling/application/schedulewithagent',
'/api/scheduling/application/schedulewithagentwithouttaskid',
'/api/scheduling/application/sendselfschedule',
'/api/scheduling/application/sendtocandidate',
'/api/scheduling/auth/outlook',
'/api/scheduling/auth/outlook-req-tokens',
'/api/scheduling/calendar_check_recruiter',
'/api/scheduling/candidate/schedule-email-agent',
'/api/scheduling/debrief/auto-debrief.md',
'/api/scheduling/debrief/schedule_individual',
'/api/scheduling/debrief/task_create',
'/api/scheduling/fetchUserDetails',
'/api/scheduling/fetch_activities',
'/api/scheduling/fetch_interview_module_by_id',
'/api/scheduling/fetch_interview_session_task',
'/api/scheduling/get-accesstoken',
'/api/scheduling/get_interview_modules',
'/api/scheduling/get_interview_plans',
'/api/scheduling/get_interview_training_progress',
'/api/scheduling/get_interviewer_and_modules',
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
'/api/scheduling/v1/check_calendar_status',
'/api/scheduling/v1/event_attendee_status',
'/api/scheduling/v1/find-replacement-ints',
'/api/scheduling/v1/find_availability',
'/api/scheduling/v1/find_interview_slots',
'/api/scheduling/v1/find_slots_date_range',
'/api/scheduling/v1/get-candidate-selected-slots',
'/api/scheduling/v1/update-calender-event-status',
'/api/scheduling/v1/update-meeting-interviewers',
'/api/scheduling/v1/verify-recruiter-selected-slots',
'/api/seed_calender',
'/api/sendgrid',
'/api/setMembersWithRole',
'/api/setRoleAndPermission',
'/api/signup',
'/api/sitemap.xml',
'/api/supabase/deleteuser',
'/api/supabase/getCandidate-files',
'/api/support/email',
'/api/support/notificationEmail',
'/api/sync/greenhouse/applications',
'/api/sync/greenhouse/departments',
'/api/sync/greenhouse/full_db',
'/api/sync/greenhouse/full_sync',
'/api/sync/greenhouse/jobs',
'/api/sync/greenhouse/office_locations',
'/api/sync/greenhouse/user',
'/api/trpc/[trpc]',
'/api/updateUsers',
'/api/webhook',
'/api/workflow-cron',
'/api/workflow-cron/execute',
'/assessment-new',
'/assessment-new/[id]',
'/assessment-thanks',
'/assessment-thanks/[assessment_id]',
'/auth-cal/google',
'/auth-email/google',
'/candidate-assessment/[application_id]',
'/candidate-assessment/[application_id]/[assessment_id]',
'/candidate-phone-screening',
'/candidate/home',
'/candidate/interviews',
'/candidate/login',
'/candidate/messages',
'/candidate/profile',
'/candidates',
'/candidates/aglintdb',
'/candidates/history',
'/candidates/search',
'/company',
'/company-postings/[id]',
'/forgot-password',
'/integrations',
'/integrations/[platform]',
'/interview/feedback',
'/interviewers',
'/job-post-assistant/[company_id]',
'/job-post/[id]',
'/jobs',
'/jobs/[id]',
'/jobs/[id]/application/[application_id]',
'/jobs/[id]/assessment',
'/jobs/[id]/email-templates',
'/jobs/[id]/hiring-team',
'/jobs/[id]/interview-plan',
'/jobs/[id]/job-details',
'/jobs/[id]/metrics',
'/jobs/[id]/profile-score',
'/jobs/[id]/screening',
'/jobs/[id]/workflows',
'/jobs/create',
'/kkk',
'/loading',
'/login',
'/mui-styleguide',
'/notifications',
'/portal',
'/preview-assessment/[job_id]',
'/preview-assessment/[job_id]/[assessment_id]',
'/profile',
'/profile-pro',
'/profile/[id]',
'/reports',
'/requests',
'/requests/[id]',
'/reset-password',
'/scheduling',
'/scheduling/application',
'/scheduling/application/[application_id]',
'/scheduling/dashboard',
'/scheduling/interview-types',
'/scheduling/interview-types/[type_id]',
'/scheduling/interviewer',
'/scheduling/interviewer/[member_id]',
'/scheduling/invite-X/[id]',
'/scheduling/invite/[id]',
'/scheduling/module/[module_id]',
'/scheduling/request-availability-X/[request_id]',
'/scheduling/request-availability/[request_id]',
'/scheduling/view',
'/screening',
'/screening-dashboard',
'/screening/[id]',
'/signup',
'/supervisor',
'/support',
'/support/[id]',
'/support/create',
'/tasks',
'/test',
'/thanks-page',
'/user/profile/[user_id]',
'/workflows',
'/workflows/[id]',
'/workflows/real-time-crons'
] as const