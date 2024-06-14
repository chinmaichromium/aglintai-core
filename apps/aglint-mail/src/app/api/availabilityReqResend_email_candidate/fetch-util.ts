import type { EmailTemplateAPi } from '@aglint/shared-types';
import { supabaseAdmin, supabaseWrap } from '../../../supabase/supabaseAdmin';
import { fetchCompEmailTemp } from '../../../utils/apiUtils/fetchCompEmailTemp';
import { getFullName } from '@aglint/shared-utils';
import { fillCompEmailTemplate } from '../../../utils/apiUtils/fillCompEmailTemplate';

export async function dbUtil(
  req_body: EmailTemplateAPi<'availabilityReqResend_email_candidate'>['api_payload'],
) {
  const [avail_req_data] = supabaseWrap(
    await supabaseAdmin
      .from('candidate_request_availability')
      .select(
        'id,applications(id, candidates(first_name,email,recruiter_id,recruiter(logo)),public_jobs( company))',
      )
      .eq('id', req_body.avail_req_id),
  );

  const [recruiter_user] = supabaseWrap(
    await supabaseAdmin
      .from('recruiter_user')
      .select('first_name,last_name')
      .eq('user_id', req_body.recruiter_user_id),
  );

  const {
    candidates: {
      email: cand_email,
      recruiter_id,
      first_name,
      recruiter: { logo },
    },
    public_jobs: { company },
  } = avail_req_data.applications;

  const candidate_link = `${process.env.NEXT_PUBLIC_APP_URL}/scheduling/request-availability/${req_body.avail_req_id}`;
  const comp_email_temp = await fetchCompEmailTemp(
    recruiter_id,
    'availabilityReqResend_email_candidate',
  );
  const comp_email_placeholder: EmailTemplateAPi<'availabilityReqResend_email_candidate'>['comp_email_placeholders'] =
    {
      '{{ candidateFirstName }}': first_name,
      '{{ companyName }}': company,
      '{{ availabilityReqLink }}': `<a href="${candidate_link}">here</a>`,
      '{{ recruiterFullName }}': getFullName(
        recruiter_user.first_name,
        recruiter_user.last_name,
      ),
    };

  const filled_comp_template = fillCompEmailTemplate(
    comp_email_placeholder,
    comp_email_temp,
  );

  const react_email_placeholders: EmailTemplateAPi<'availabilityReqResend_email_candidate'>['react_email_placeholders'] =
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
