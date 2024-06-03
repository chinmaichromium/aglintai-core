import { supabaseAdmin } from '../../../supabase/supabaseAdmin';

export default async function Index(
  session_id: string,
  application_id: string,
) {
  const { data: session } = await supabaseAdmin
    .from('interview_session')
    .select(
      'session_type,session_duration,schedule_type,name,interview_meeting(start_time,end_time)',
    )
    .eq('id', session_id);

  const {
    data: [candidateJob],
  } = await supabaseAdmin
    .from('applications')
    .select(
      'candidates(first_name,email,recruiter_id),public_jobs(logo,job_title,company)',
    )
    .eq('id', application_id);

  const {
    candidates: { email, recruiter_id, first_name },
    public_jobs: { company, job_title, logo },
  } = candidateJob;

  const [{ name }] = session;

  const body = {
    recipient_email: email,
    mail_type: 'candidate_invite_confirmation',
    recruiter_id,
    company_logo: logo,
    payload: {
      '[firstName]': first_name,
      '[sessionName]': name,
      '[companyName]': company,
      '[jobTitle]': job_title,
    },
  };

  return body;
}
