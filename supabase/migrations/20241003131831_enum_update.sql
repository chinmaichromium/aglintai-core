alter type "public"."email_slack_types" rename to "email_slack_types__old_version_to_be_dropped";

create type "public"."email_slack_types" as enum ('interviewEnd_slack_interviewers', 'interviewerConfirmation_slack_interviewers', 'interviewStart_slack_interviewers', 'agent_email_candidate', 'applicantReject_email_applicant', 'applicationRecieved_email_applicant', 'confInterview_email_organizer', 'confirmInterview_email_applicant', 'debrief_email_interviewer', 'interReschedReq_email_recruiter', 'interviewCancel_email_applicant', 'InterviewCancelReq_email_recruiter', 'interviewReschedule_email_applicant', 'interviewStart_email_applicant', 'interviewStart_email_interviewers', 'phoneScreen_email_candidate', 'phoneScreenRemind_email_applicant', 'selfScheduleReminder_email_applicant', 'sendAvailReqReminder_email_applicant', 'sendSelfScheduleRequest_email_applicant', 'sendAvailabilityRequest_email_applicant', 'availabilityReqResend_email_candidate', 'interviewDetails_calender_interviewer', 'rescheduleSelfSchedule_email_applicant', 'interviewStart_email_organizer', 'meetingDeclined_email_organizer', 'meetingAccepted_email_organizer', 'candidateBook_slack_interviewerForFeedback', 'candidateBook_email_interviewerForFeedback', 'interviewEnd_slack_interviewerForFeedback', 'interviewEnd_email_interviewerForFeedback', 'candidateBook_slack_interviewerForConfirmation', 'onSignup_email_admin', 'onInvite_email_user', 'interviewEnd_email_shadowTraineeForMeetingAttendence', 'interviewEnd_email_rShadowTraineeForMeetingAttendence', 'interviewEnd_slack_shadowTraineeForMeetingAttendence', 'interviewEnd_slack_rShadowTraineeForMeetingAttendence', 'onQualified_email_trainee', 'onQualified_email_approved', 'onQualified_slack_trainee', 'onQualified_slack_approved', 'onTrainingComplete_slack_approverForTraineeMeetingQualification', 'onTrainingComplete_email_approverForTraineeMeetingQualification', 'interviewerResumed_email_admin', 'interviewEnd_slack_organizerForMeetingStatus', 'interviewEnd_email_organizerForMeetingStatus', 'onRequestSchedule_emailAgent_getCandidateAvailability', 'onRequestSchedule_emailLink_getCandidateAvailability', 'onReceivingAvailReq_agent_sendSelfScheduleRequest', 'onReceivingAvailReq_agent_suggestSlots', 'onRequestSchedule_emailLink_sendSelfSchedulingLink', 'onRequestSchedule_phoneAgent_selfSchedule', 'onRequestSchedule_emailAgent_selfSchedule', 'onRequestReschedule_emailLink_resendAvailRequest', 'onRequestCancel_agent_cancelEvents', 'onRequestCancel_slack_interviewersOrganizer', 'onRequestInterviewerDecline_agent_changeInterviewer');

alter table "public"."application_email_status" alter column email type "public"."email_slack_types" using email::text::"public"."email_slack_types";

alter table "public"."company_email_template" alter column type type "public"."email_slack_types" using type::text::"public"."email_slack_types";

alter table "public"."job_email_template" alter column type type "public"."email_slack_types" using type::text::"public"."email_slack_types";

alter table "public"."request_progress" alter column target_api type "public"."email_slack_types" using target_api::text::"public"."email_slack_types";

alter table "public"."workflow_action" alter column target_api type "public"."email_slack_types" using target_api::text::"public"."email_slack_types";

drop type "public"."email_slack_types__old_version_to_be_dropped";


