export const PATHS = [
  '/404',
  '/500',
  '/api/agent-workflow/cancel-schedule',
  '/api/agent-workflow/cand-avail-recieved',
  '/api/agent-workflow/interviewer-decline',
  '/api/agent-workflow/new-schedule',
  '/api/ashby/batchsave',
  '/api/ashby/createapplication',
  '/api/ashby/cron',
  '/api/ashby/getCandidates',
  '/api/ashby/getPostings',
  '/api/ashby/readme.md',
  '/api/ashby/saveApiKey',
  '/api/ashby/syncapplications',
  '/api/db-events',
  '/api/decryptApiKey',
  '/api/encryptData',
  '/api/fetchCompanyDetails',
  '/api/getLinkedin',
  '/api/getRoleAndPermissions',
  '/api/getUserDetails',
  '/api/getUserLocation',
  '/api/get_interview_feedback_details',
  '/api/get_member',
  '/api/get_scheduling_reason',
  '/api/google/overview-handler',
  '/api/google/overview',
  '/api/google-calender/resync',
  '/api/google-calender/stop-channel',
  '/api/google-calender/watch-changes',
  '/api/google-calender/webhook',
  '/api/greenhouse/batchsave',
  '/api/greenhouse/getCandidates',
  '/api/greenhouse/getPostings',
  '/api/greenhouse/saveApiKey',
  '/api/greenhouse/saveResume',
  '/api/interviewChatOpenAi',
  '/api/interview_feedback',
  '/api/interviewers/getAllInterviewers',
  '/api/interviewers',
  '/api/invite_user',
  '/api/invite_user/resend',
  '/api/job/candidateUpload/csvUpload',
  '/api/job/candidateUpload/manualUpload',
  '/api/job/candidateUpload/resumeReupload',
  '/api/job/candidateUpload/resumeUpload',
  '/api/job/profileScore',
  '/api/jobpost/company',
  '/api/jobpost',
  '/api/jobpost/read',
  '/api/jobpost/write',
  '/api/lever/candidateSync',
  '/api/lever/createjob',
  '/api/lever/getCandidates',
  '/api/lever/getPostings',
  '/api/lever/saveApiKey',
  '/api/lever/saveResume',
  '/api/pre-seed',
  '/api/request/candidate-request',
  '/api/request/execute-workflow',
  '/api/request/interviewer-request',
  '/api/request/schedule-request',
  '/api/request_feedback',
  '/api/reset_password',
  '/api/resumecron/batchscore',
  '/api/roleAndPermission',
  '/api/save_interview_feedback',
  '/api/scheduling/application/cancelschedule',
  '/api/scheduling/application/debrief-add-users',
  '/api/scheduling/application/fetchInterviewSessionByRequest',
  '/api/scheduling/application/fetchfeedbackdetails',
  '/api/scheduling/application/fetchinterviewstages',
  '/api/scheduling/application/mailthankyou',
  '/api/scheduling/application/openselfscheduling',
  '/api/scheduling/application/schedulewithagent',
  '/api/scheduling/application/schedulewithagentwithouttaskid',
  '/api/scheduling/application/sendselfschedule',
  '/api/scheduling/auth/outlook-req-tokens',
  '/api/scheduling/auth/outlook',
  '/api/scheduling/calendar_check_recruiter',
  '/api/scheduling/debrief/auto-debrief.md',
  '/api/scheduling/debrief/schedule_individual',
  '/api/scheduling/fetchUserDetails',
  '/api/scheduling/fetch_activities',
  '/api/scheduling/get-accesstoken',
  '/api/scheduling/get_interview_modules',
  '/api/scheduling/get_interview_plans',
  '/api/scheduling/get_interviewer_and_modules',
  '/api/scheduling/google-consent',
  '/api/scheduling/invite',
  '/api/scheduling/mail-agent/email-webhook',
  '/api/scheduling/mail-agent/init-agent',
  '/api/scheduling/refresh-tokens',
  '/api/scheduling/request_availability/candidateAvailability/getMeetings',
  '/api/scheduling/request_availability/candidateAvailability/getScheduleMeetings',
  '/api/scheduling/request_availability/getCandidateRequestData',
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
  '/api/scheduling/v1/find_availability',
  '/api/scheduling/v1/find_interview_slots',
  '/api/scheduling/v1/find_slots_date_range',
  '/api/scheduling/v1/get-candidate-selected-slots',
  '/api/scheduling/v1/update-calender-event-status',
  '/api/scheduling/v1/update-meeting-interviewers',
  '/api/scheduling/v1/verify-recruiter-selected-slots',
  '/api/seed_calender',
  '/api/setMembersWithRole',
  '/api/setRoleAndPermission',
  '/api/signup',
  '/api/workflow-cron/execute',
  '/api/workflow-cron',
  '/auth-cal/google',
  '/auth-email/google',
  '/supervisor',
  '/auth/callback',
  '/auth/redirect',
  '/company',
  '/integrations/[platform]',
  '/integrations',
  '/interview-pool/[pool]',
  '/interview-pool',
  '/interviewers',
  '/interviews/all',
  '/interviews',
  '/interviews/view',
  '/jobs/[job]/[application]',
  '/jobs/[job]/candidate-plan',
  '/jobs/[job]/email-templates',
  '/jobs/[job]/hiring-team',
  '/jobs/[job]/interview-plan',
  '/jobs/[job]/job-details',
  '/jobs/[job]/metrics',
  '/jobs/[job]',
  '/jobs/[job]/profile-score',
  '/jobs/[job]/workflows',
  '/jobs/create',
  '/jobs',
  '/reports',
  '/requests/[request]',
  '/requests/history',
  '/requests',
  '/user/[user]',
  '/workflows/[workflow]',
  '/workflows',
  '/candidate/[application_id]/home',
  '/candidate/[application_id]/interviews',
  '/candidate/[application_id]/messages',
  '/candidate/[application_id]/profile',
  '/candidate/[application_id]/login',
  '/company-postings/[id]',
  '/dashboards/interviewer',
  '/dashboards',
  '/forgot-password',
  '/job-post/[id]',
  '/login',
  '/portal',
  '/reset-password',
  '/scheduling/invite/[id]',
  '/scheduling/request-availability/[request_id]',
  '/signup',
  '/api/auth/send-reset-email',
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
  '/api/candidate_portal/get_email',
  '/api/candidate_portal/get_interviews',
  '/api/candidate_portal/get_message',
  '/api/candidate_portal/get_navbar',
  '/api/candidate_portal/get_profile',
  '/api/candidate_portal/home_page',
  '/api/candidate_portal/update_profile',
  '/api/integrations/greenhouse',
  '/api/sync/greenhouse/applications',
  '/api/sync/greenhouse/departments',
  '/api/sync/greenhouse/full_db',
  '/api/sync/greenhouse/full_sync',
  '/api/sync/greenhouse/jobs',
  '/api/sync/greenhouse/office_locations',
  '/api/sync/greenhouse/user',
  '/api/trpc/[trpc]',
  '/api/emails/mail/InterviewCancelReq_email_recruiter',
  '/api/emails/mail/agent_email_candidate',
  '/api/emails/mail/applicantReject_email_applicant',
  '/api/emails/mail/applicationRecieved_email_applicant',
  '/api/emails/mail/availabilityReqResend_email_candidate',
  '/api/emails/mail/confInterview_email_organizer',
  '/api/emails/mail/confirmInterview_email_applicant',
  '/api/emails/mail/debrief_email_interviewer',
  '/api/emails/mail/interReschedReq_email_recruiter',
  '/api/emails/mail/interviewCancel_email_applicant',
  '/api/emails/mail/interviewEnd_email_interviewerForFeedback',
  '/api/emails/mail/interviewEnd_email_organizerForMeetingStatus',
  '/api/emails/mail/interviewEnd_email_rShadowTraineeForMeetingAttendence',
  '/api/emails/mail/interviewEnd_email_shadowTraineeForMeetingAttendence',
  '/api/emails/mail/interviewStart_email_applicant',
  '/api/emails/mail/interviewStart_email_interviewers',
  '/api/emails/mail/interviewStart_email_organizer',
  '/api/emails/mail/interviewerResumed_email_admin',
  '/api/emails/mail/meetingAccepted_email_organizer',
  '/api/emails/mail/meetingDeclined_email_organizer',
  '/api/emails/mail/onQualified_email_trainee',
  '/api/emails/mail/onSignup_email_admin',
  '/api/emails/mail/onTrainingComplete_email_approverForTraineeMeetingQualification',
  '/api/emails/mail/rescheduleSelfSchedule_email_applicant',
  '/api/emails/mail',
  '/api/emails/mail/selfScheduleReminder_email_applicant',
  '/api/emails/mail/sendAvailReqReminder_email_applicant',
  '/api/emails/mail/sendAvailabilityRequest_email_applicant',
  '/api/emails/mail/sendSelfScheduleRequest_email_applicant',
  '/api/emails/preview',
  '/api/emails/slack/candidateBook_slack_interviewerForConfirmation',
  '/api/emails/slack/interactions',
  '/api/emails/slack/interviewEnd_slack_interviewerForFeedback',
  '/api/emails/slack/interviewEnd_slack_organizerForMeetingStatus',
  '/api/emails/slack/interviewEnd_slack_rShadowTraineeForMeetingAttendence',
  '/api/emails/slack/interviewEnd_slack_shadowTraineeForMeetingAttendence',
  '/api/emails/slack/interviewStart_slack_interviewers',
  '/api/emails/slack/onQualified_slack_trainee',
  '/api/emails/slack/onRequestCancel_slack_interviewersOrganizer',
  '/api/emails/slack/onTrainingComplete_slack_approverForTraineeMeetingQualification',
] as const;
