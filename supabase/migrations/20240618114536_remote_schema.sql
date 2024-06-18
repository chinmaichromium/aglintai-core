alter table "public"."company_email_template" drop constraint "company_email_template_recruiter_id_fkey";

alter table "public"."new_tasks" alter column "type" drop default;

alter type "public"."task_type_enum" rename to "task_type_enum__old_version_to_be_dropped";

create type "public"."task_type_enum" as enum ('schedule', 'training', 'empty', 'availability', 'self_schedule');

alter table "public"."new_tasks" alter column type type "public"."task_type_enum" using type::text::"public"."task_type_enum";

alter table "public"."new_tasks" alter column "type" set default 'schedule'::task_type_enum;

drop type "public"."task_type_enum__old_version_to_be_dropped";

alter table "public"."integrations" alter column "domain_admin_email" drop not null;

alter table "public"."company_email_template" add constraint "company_email_template_recruiter_id_fkey" FOREIGN KEY (recruiter_id) REFERENCES recruiter(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."company_email_template" validate constraint "company_email_template_recruiter_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.company_email_template_init()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$BEGIN
    insert 
    into  company_email_template 
        (recruiter_id, subject, body, from_name, type)
    values
        ( NEW.id,'We received your application for a position at {{ companyName }}', '<p>Hi {{ candidateFirstName }},</p><p>You have successfully submitted your application for this position:</p><p>{{ jobTitle }}</p><p>We will review your application shortly. If your profile matches our requirements, we will be in touch to schedule the next steps in the process.</p><p>Thank you for your interest in {{ companyName }}.</p><p>If you have any queries about this job, please visit the following link: {{ supportLink }}</p><p>Sincerely,</p><p>{{ companyName }}</p>', '{{ recruiterFullName }}', 'applicationRecieved_email_applicant'),
        ( NEW.id,'Your application at {{ companyName }}', '<p>Hi {{ candidateFirstName }},</p><p>Thank you for your interest in the {{ jobTitle }} position.</p><p>We have reviewed your application and carefully considered your qualifications. Based on your profile and the number of other qualified applications, for the moment, we are not able to move forward in the recruiting process with you.</p><p>Good luck in your search!</p><p>Sincerely,</p><p>{{ companyName }}</p><p></p>', '{{ recruiterFullName }}', 'applicantReject_email_applicant'),
        ( NEW.id,'Interview reminder', 'Interview reminder\n',null,'interviewStart_slack_interviewers'),
        ( NEW.id,'Invitation to a Phone Screening Session for {{firstName}} - {{jobTitle}} Position at {{companyName}}', '<p>Dear {{ candidateFirstName }},</p><p>I hope this message finds you well. We appreciate your interest in the {{ jobTitle }} position at {{ companyName }}, and we are excited to move forward with your application.</p><p>After reviewing your application, we would like to invite you to participate in a phone screening session. This initial conversation will give us the opportunity to learn more about your experiences, skills, and how they align with the requirements of the role.</p><p>Please click on the following link to access the phone screening session: {{ phoneScreeningLink }}</p><p>Best regards,</p><p>{{ companyName }}</p>', '{{ recruiterFullName }}', 'phoneScreen_email_candidate'),
        ( NEW.id,'Slack RSVP Message', 'Coding Interview sheduled with candidate :\nAman Aman - Staff Frontend Engineer\nMeeting Place : google_meet\nMeeting Time : June 10 04:00 AM - 04:30 AM IST\nDuration : 30 Minutes',null,'interviewEnd_slack_interviewers'),
        ( NEW.id,'Confirmation Slack Message To Interviewer', 'Initial Screening sheduled with candidate :\nMuharrem Muharrem - Staff Software Engineer\nMeeting Place : google_meet\nMeeting Time : June 13 04:30 AM - 05:00 AM IST\nDuration : 30 Minutes',null,'interviewerConfirmation_slack_interviewers'),
        ( NEW.id,'Reschedule Request from {{ candidateFirstName }} for {{ jobTitle }} Interview', '<p>Dear {{ recruiterName }},</p><p></p><p>{{ candidateFirstName }} is requesting to reschedule their interview between {{ dateRange }} stating the reason: ""{{ rescheduleReason }}"".</p><p></p><p>Additional notes from {{ candidateFirstName }}: ""{{ additionalRescheduleNotes }}"".</p><p></p><p>Thank you,</p><p>{{ companyName }} Recruitment Team</p>', '{{ recruiterFullName }}', 'interReschedReq_email_recruiter'),
        ( NEW.id,'Interview Details', '<p>Dear {{ recruiterFirstName }},</p><p></p><p>Please find the details for the interview below:</p><p>Candidate name: {{ candidateFirstName }}<br></p><p>Thank you</p><p>Aglint Team</p><p></p><p></p>', '{{ recruiterFullName }}', 'confInterview_email_organizer'),
        ( NEW.id,'Interview Cancellation: {{ jobTitle }} Position', '<p>Dear {{ candidateFirstName }},</p><p></p><p>I regret to inform you that we need to cancel your scheduled interview session at {{ companyName }}.</p><p>We apologize for any inconvenience caused and will be in touch soon to reschedule.</p><p></p><p>Best regards,<br>{{ companyName }}</p>', '{{ recruiterFullName }}', 'interviewCancel_email_applicant'),
        ( NEW.id,'Your Interview with {{ companyName }} – Confirmation and Details', '<p>H {{ candidateFirstName }},</p><p></p><p>We are pleased to confirm your interview for the {{ jobTitle }} position. Please find the details of your interview below.</p><p></p><p>Regards,</p><p>{{ companyName }}  Recruitment Team</p>', '{{ recruiterFullName }}', 'confirmInterview_email_applicant'),
        ( NEW.id,'Cancellation Request from {{ candidateFirstName }} for {{ jobTitle }} Interview', '<p>Dear {{ recruiterName }},</p><p></p><p>{{ candidateFirstName }} is requesting to cancel the interview, stating the reason: ""{{ cancelReason }}"".</p><p>Additional notes from {{ candidateFirstName }}: ""{{ additionalRescheduleNotes }}"".</p><p></p><p>Thank you,</p><p>{{ companyName }} Recruitment Team</p>', '{{ recruiterFullName }}', 'InterviewCancelReq_email_recruiter'),
        ( NEW.id,'Reminder: Schedule Your Interview for {{ jobTitle }} at {{ companyName }}', '<p>Dear {{ candidateFirstName }},</p><p></p><p>This is a friendly reminder about the self-schedule interview request you received for the {{ jobTitle }} position at {{ companyName }}.</p><p></p><p>Please use the following link to schedule your interview: {{ selfScheduleLink }}</p><p>Looking forward to connecting with you!</p><p></p><p>Best regards,</p><p>{{ companyName }} Recruitment Team</p>', '{{ recruiterFullName }}', 'selfScheduleReminder_email_applicant'),
        ( NEW.id,'Interview Reminder: {{ candidateName }} for {{ jobTitle }} Position', '<p>Dear {{ recruiterName }},</p><p></p><p>This is a friendly reminder about the interview with {{ candidateName }}. Please find the details below:</p><ul><li><p><strong>Candidate Name:</strong> {{ candidateName }}</p></li><li><p><strong>Position:</strong> {{ jobTitle }}</p></li><li><p><strong>Date:</strong> {{ date }}</p></li><li><p><strong>Time:</strong> {{ time }}</p></li></ul><p></p><p>Thank you,</p><p>The {{ companyName }} Recruitment Team</p>', '{{ recruiterFullName }}', 'interviewStart_email_interviewers'),
        ( NEW.id,'Interview Reminder: {{ jobTitle }} Position at {{ companyName }}', '<p>Dear {{ candidateName }},</p><p></p><p style=""text-align: start"">This is a friendly reminder of your upcoming interview for the {{ jobTitle }} position at {{ companyName }} scheduled for <strong>{{ date }} at {{ time }}</strong>.</p><p style=""text-align: start""></p><p style=""text-align: start"">We look forward to a successful interview!</p><p style=""text-align: start""></p><p style=""text-align: start"">Warm regards,</p><p style=""text-align: start"">The {{ companyName }} Team</p><p style=""text-align: start""></p>', '{{ recruiterFullName }}   ', 'interviewStart_email_applicant'),
        ( NEW.id,'Interview Reschedule: {{jobTitle}} Position', '<p>Hi {{ candidateFirstName }},</p><p></p><p>I hope this message finds you well.</p><p>Due to unforeseen circumstances, we need to reschedule your interview for the {{ jobRole }} position at {{ companyName }}. We apologize for any inconvenience this may cause and appreciate your understanding.</p><p>To find a new time that works best for you, please use the following link to schedule your interview: {{ selfScheduleLink }}</p><p>If you have any questions or need further assistance, feel free to reach out to us.</p><p>Looking forward to connecting with you!</p><p>Best regards,</p><p>{{ companyName }} Recruitment Team</p><p></p>', '{{ recruiterFullName }}', 'interviewReschedule_email_applicant'),
        ( NEW.id,'Schedule Your Interview for the {{ jobTitle }} Position at {{ companyName }}', '<p>Dear {{ candidateFirstName }},</p><p></p><p>Thank you for applying for the {{ jobTitle }} position at {{ companyName }}. We have reviewed your application and are impressed with your qualifications and experiences. We would like to invite you to participate in an interview to further discuss how your skills and experiences align with our needs.</p><p></p><p>To streamline the scheduling process, please click on the link below to select your availability for an interview:</p><p>{{ availabilityReqLink }}</p><p>Looking forward to your response.</p><p></p><p>Best regards,</p><p>{{ companyName }} Recruitment Team</p>', '{{ recruiterFullName }}', 'sendAvailabilityRequest_email_applicant'),
        ( NEW.id,'Schedule Your Interview with {{ companyName }} - Important Next Step', '<p>Hi {{ candidateFirstName }},</p><p></p><p>Congratulations! You have been selected for an interview at {{ companyName }} for the {{ jobRole }} position. Your qualifications are impressive, and we are excited to meet you and discuss them further.</p><p>Please let me know your availability within the following date range: {{ startDate }} - {{ endDate }} ({{ recruiterTimeZone }}).</p><p></p><p>Also, to make sure we find an interview time that works well for you, could you tell us your general location.</p><p>Or use the following link to schedule your interview: {{ selfScheduleLink }}</p><p></p><p>Looking forward to connecting with you!</p><p></p><p>Best regards,<br>{{ companyName }} Recruitment Team</p>', '{{recruiterFullName}}', 'agent_email_candidate'),
        ( NEW.id,'Availability request resend mail', '<p>Dear {{ candidateFirstName }},</p><p></p><p>I hope this message finds you well.</p><p>I am writing to follow up regarding the availability check for your upcoming interview. It appears that the initial link we sent to confirm your availability might not have been received or may have encountered an issue.</p><p>To ensure we can schedule your interview at a convenient time, please find the link below to select your preferred time slots:</p><p>{{ availabilityReqLink }}</p><p></p><p>We apologize for any inconvenience this may have caused and appreciate your understanding. If you encounter any issues with the link or have any questions, please do not hesitate to reach out.</p><p>Thank you for your cooperation. We look forward to speaking with you soon.<br></p><p>Best regards,</p><p>{{ companyName }} Recruitment Team</p><p></p><p></p>', '{{ recruiterFullName }}', 'availabilityReqResend_email_candidate'),
        ( NEW.id,'Invitation to Debrief Session for {{ candidateFirstName }}''s Interview for {{ jobTitle }}', '<p>Dear {{ interviewerFirstName }},</p><p></p><p>Please join the debrief session to discuss {{ candidateFirstName }}''s interview for {{ jobTitle }}. Your insights are valuable to the selection process.</p><p></p><p>Thanks,</p><p>{{ companyName }} Recruitment Team</p>', '{{recruiterFirstName }}', 'debrief_email_interviewer'),
        ( NEW.id,'Reminder to Applicant', '<p>Dear {{ candidateFirstName }},</p><p></p><p style=""text-align: start"">I hope this message finds you well.</p><p style=""text-align: start"">I am writing to follow up on my previous email regarding the interview for the {{ jobTitle }} position at {{ companyName }}. We are very interested in discussing your application and learning more about your experiences.</p><p style=""text-align: start"">If you could please click on the link below to select your availability for an interview, it would be greatly appreciated:</p><p style=""text-align: start"">{{ availabilityLink }}</p><p style=""text-align: start"">If you have any questions or need further information, please feel free to reach out.</p><p style=""text-align: start"">Thank you, and I look forward to hearing from you soon.</p><p style=""text-align: start""></p><p style=""text-align: start"">Best regards,</p><p>{{ companyName }} Recruitment Team</p>', '{{ recruiterFullName }}', 'sendAvailReqReminder_email_applicant'),
        ( NEW.id,'Scheduling Interview for {{ jobTitle }} Position at {{ companyName }}', '<p>Dear {{ candidateFirstName }},</p><p></p><p style=""text-align: start"">Thank you for submitting your application for the {{ jobTitle }} at {{ companyName }}. We are pleased to announce that you have been selected for an assessment.</p><p style=""text-align: start""></p><p style=""text-align: start"">You are welcome to choose an assessment time that suits your schedule.</p><p style=""text-align: start"">{{ selfScheduleLink}}</p><p style=""text-align: start""></p><p style=""text-align: start"">We wish you the best of luck and are eager to hear your insights!</p><p style=""text-align: start""></p><p style=""text-align: start"">Best regards,</p><p>{{ companyName }} Recruitment Team</p>', '{{ recruiterFullName }}', 'sendSelfScheduleRequest_email_applicant'),
        ( NEW.id,'s', '<p>Dear {{ candidateFirstName }},</p><p>We hope this message finds you well. We wanted to bring to your attention that we have not yet received your screening form submission for the {{ jobTitle }} position at {{ companyName }}. We would not want you to miss out on this exciting opportunity!</p><p>Please click on the link below to initiate the phone screening process:</p><p>{{ phoneScreeningLink }}</p><p>We look forward to hearing from you soon!</p><p>Warm regards,</p><p>{{ companyName }}</p>', '{{ recruiterFullName }}', 'phoneScreenRemind_email_applicant');

    INSERT INTO integrations (recruiter_id) values(NEW.id);  
  
  RETURN NEW;
END;$function$
;


