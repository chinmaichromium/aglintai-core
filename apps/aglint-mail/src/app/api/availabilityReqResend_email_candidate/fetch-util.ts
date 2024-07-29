import type { DatabaseEnums, EmailTemplateAPi } from '@aglint/shared-types';
import { fillCompEmailTemplate, getFullName } from '@aglint/shared-utils';
import { supabaseAdmin, supabaseWrap } from '../../../supabase/supabaseAdmin';
import { fetchCompEmailTemp } from '../../../utils/apiUtils/fetchCompEmailTemp';
import type { MailPayloadType } from '../../../types/app.types';

export async function dbUtil(
  req_body: EmailTemplateAPi<'availabilityReqResend_email_candidate'>['api_payload'],
) {
  const api_target: DatabaseEnums['email_slack_types'] =
    'availabilityReqResend_email_candidate';
  const [avail_req_data] = supabaseWrap(
    await supabaseAdmin
      .from('candidate_request_availability')
      .select(
        'id,applications(id, candidates(first_name,last_name,email,recruiter_id,recruiter(logo)),public_jobs( company,job_title))',
      )
      .eq('id', req_body.avail_req_id),
  );

  const [recruiter_user] = supabaseWrap(
    await supabaseAdmin
      .from('recruiter_user')
      .select('first_name,last_name,scheduling_settings')
      .eq('user_id', req_body.recruiter_user_id),
  );
  const recruiter_tz = recruiter_user.scheduling_settings.timeZone.tzCode;
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

  const candidate_link = req_body.avail_req_id
    ? `${process.env.NEXT_PUBLIC_APP_URL}/scheduling/request-availability/${req_body.avail_req_id}`
    : '';

  let mail_payload: MailPayloadType;

  if (req_body.payload) {
    mail_payload = {
      from_name: '',
      ...req_body.payload,
    };
  } else {
    const comp_email_temp = await fetchCompEmailTemp(recruiter_id, api_target);
    mail_payload = {
      ...comp_email_temp,
    };
  }
  const comp_email_placeholder: EmailTemplateAPi<'availabilityReqResend_email_candidate'>['comp_email_placeholders'] =
    {
      candidateFirstName: first_name,
      candidateLastName: last_name,
      candidateName: getFullName(first_name, last_name),
      companyName: company,
      jobRole: job_title,
      organizerFirstName: recruiter_user.first_name,
      organizerLastName: recruiter_user.last_name,
      organizerName: getFullName(
        recruiter_user.first_name,
        recruiter_user.last_name,
      ),
      OrganizerTimeZone: recruiter_tz,
    };

  const filled_comp_template = fillCompEmailTemplate(
    comp_email_placeholder,
    mail_payload,
  );

  const react_email_placeholders: EmailTemplateAPi<'availabilityReqResend_email_candidate'>['react_email_placeholders'] =
    {
      emailBody: filled_comp_template.body,
      companyLogo: logo,
      subject: filled_comp_template.subject,
      availabilityReqLink: candidate_link,
    };

  return {
    filled_comp_template,
    react_email_placeholders,
    recipient_email: cand_email,
  };
}
