import type {
  EmailTemplateAPi,
  SupabaseType,
  TargetApiPayloadType,
} from '@aglint/shared-types';
import { getFullName, supabaseWrap } from '@aglint/shared-utils';
import type { FetchUtilType } from '../../types/emailfetchUtil';

export const fetchUtil: FetchUtilType<
  'applicationRecieved_email_applicant'
> = async (
  supabaseAdmin: SupabaseType,
  req_body: TargetApiPayloadType<'applicationRecieved_email_applicant'>,
) => {
  const [candidateJob] = supabaseWrap(
    await supabaseAdmin
      .from('applications')
      .select(
        'candidates(first_name,last_name,email,recruiter_id,recruiter(logo,id,name)),public_jobs(id,job_title,recruiter_id)',
      )
      .eq('id', req_body.application_id),
  );

  const {
    candidates: {
      email: cand_email,
      first_name,
      last_name,
      recruiter: { logo, name: companyName, id: recruiter_id },
    },
    public_jobs: { job_title },
  } = candidateJob;

  const comp_email_placeholder: EmailTemplateAPi<'applicationRecieved_email_applicant'>['comp_email_placeholders'] =
    {
      candidateFirstName: first_name,
      candidateLastName: last_name,
      jobRole: job_title,
      companyName,
      candidateName: getFullName(first_name, last_name),
    };

  const react_email_placeholders: EmailTemplateAPi<'applicationRecieved_email_applicant'>['react_email_placeholders'] =
    {
      companyLogo: logo,
    };

  return {
    mail_data: {
      company_id: recruiter_id,
      job_id: candidateJob.public_jobs.id,
      comp_email_placeholder,
      react_email_placeholders,
      recipient_email: cand_email,
    },
  };
};
