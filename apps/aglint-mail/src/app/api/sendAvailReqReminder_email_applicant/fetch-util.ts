import type { EmailTemplateAPi } from '@aglint/shared-types';
import { fillCompEmailTemplate, getFullName } from '@aglint/shared-utils';
import { supabaseAdmin, supabaseWrap } from '../../../supabase/supabaseAdmin';
import { fetchCompEmailTemp } from '../../../utils/apiUtils/fetchCompEmailTemp';

export async function dbUtil(
  req_body: EmailTemplateAPi<'sendAvailReqReminder_email_applicant'>['api_payload'],
) {
  const [avail_req_data] = supabaseWrap(
    await supabaseAdmin
      .from('candidate_request_availability')
      .select(
        'id,request_session_relation( interview_session(interview_meeting(recruiter_user(*),status)) ),applications(id, candidates(first_name,last_name,email,recruiter_id,recruiter(logo)),public_jobs(job_title, company))',
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
      recruiter: { logo },
    },
    public_jobs: { company, job_title },
  } = avail_req_data.applications;

  const candidate_link = `${process.env.NEXT_PUBLIC_APP_URL}/scheduling/request-availability/${req_body.avail_req_id}`;
  const comp_email_temp = await fetchCompEmailTemp(
    recruiter_id,
    'sendAvailReqReminder_email_applicant',
  );
  const comp_email_placeholder: EmailTemplateAPi<'sendAvailReqReminder_email_applicant'>['comp_email_placeholders'] =
    {
      candidateFirstName: first_name,
      companyName: company,
      jobRole: job_title,
      availabilityReqLink: `<a href="${candidate_link}">here</a>`,
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

  const filled_comp_template = fillCompEmailTemplate(
    comp_email_placeholder,
    comp_email_temp,
  );

  const react_email_placeholders: EmailTemplateAPi<'sendAvailReqReminder_email_applicant'>['react_email_placeholders'] =
    {
      emailBody: filled_comp_template.body,
      companyLogo: logo,
      subject: filled_comp_template.subject,
    };

  return {
    filled_comp_template,
    react_email_placeholders,
    recipient_email: cand_email,
  };
}
