import type { EmailTemplateAPi } from '@aglint/shared-types';
import { getFullName, supabaseWrap } from '@aglint/shared-utils';
import type { FetchUtilType } from '../../types/emailfetchUtil';

export const fetchUtil: FetchUtilType<
  'sendAvailReqReminder_email_applicant'
> = async (supabaseAdmin, req_body) => {
  const [avail_req_data] = supabaseWrap(
    await supabaseAdmin
      .from('candidate_request_availability')
      .select(
        '*,request_session_relation( interview_session(interview_meeting(recruiter_user(*),status)) ),applications(id, candidates(first_name,last_name,email,recruiter_id,recruiter(logo,name)),public_jobs(job_title))',
      )
      .eq('id', req_body.avail_req_id),
  );

  if (
    avail_req_data.request_session_relation[0].interview_session
      .interview_meeting.status !== 'waiting'
  ) {
    return null;
  }

  const meeting_organizer =
    avail_req_data.request_session_relation[0].interview_session
      .interview_meeting.recruiter_user;
  const recruiter_tz = meeting_organizer.scheduling_settings.timeZone.tzCode;
  if (!avail_req_data || !meeting_organizer) {
    throw new Error('Record not found');
  }

  const {
    candidates: {
      email: cand_email,
      recruiter_id,
      first_name,
      last_name,
      recruiter: { logo, name: companyName },
    },
    public_jobs: { job_title },
  } = avail_req_data.applications;

  const candidate_link = req_body.avail_req_id
    ? `${process.env.NEXT_PUBLIC_CLIENT_APP_URL}/request-availability/${req_body.avail_req_id}`
    : '';

  const comp_email_placeholder: EmailTemplateAPi<'sendAvailReqReminder_email_applicant'>['comp_email_placeholders'] =
    {
      candidateFirstName: first_name,
      companyName,
      jobRole: job_title,
      organizerName: getFullName(
        meeting_organizer.first_name,
        meeting_organizer.last_name,
      ),
      candidateLastName: last_name,
      candidateName: getFullName(first_name, last_name),
      organizerFirstName: meeting_organizer.first_name,
      organizerLastName: meeting_organizer.last_name,
      OrganizerTimeZone: recruiter_tz,
    };

  const react_email_placeholders: EmailTemplateAPi<'sendAvailReqReminder_email_applicant'>['react_email_placeholders'] =
    {
      companyLogo: logo,
      availabilityReqLink: candidate_link,
    };
  return {
    mail_data: {
      company_id: recruiter_id,
      application_id: avail_req_data.application_id,
      comp_email_placeholder,
      react_email_placeholders,
      recipient_email: cand_email,
    },
    candidate_portal_payload: {
      availability_id: req_body.avail_req_id,
      application_id: avail_req_data.application_id,
      type: 'sendAvailReqReminder_email_applicant',
    },
  };
};
