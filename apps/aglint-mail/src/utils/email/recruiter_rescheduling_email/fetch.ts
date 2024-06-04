import dayjs from 'dayjs';
import { supabaseAdmin } from '../../../supabase/supabaseAdmin';
import {
  DurationCalculator,
  scheduleTypeIcon,
  sessionTypeIcon,
} from '../common/functions';

export default async function RecruiterReschedulingEmail(
  session_ids: string[],
  application_id: string,
  meeting_id: string,
  interview_cancel_id: string,
) {
  const { data: sessions } = await supabaseAdmin
    .from('interview_session')
    .select(
      'session_type,session_duration,schedule_type,name,interview_meeting(start_time,end_time)',
    )
    .in('id', session_ids);
  const {
    data: [candidateJob],
  } = await supabaseAdmin
    .from('applications')
    .select(
      'candidates(first_name,email,recruiter_id,recruiter(name,logo)),public_jobs(job_title,company)',
    )
    .eq('id', application_id);

  const {
    data: [session_cancel],
  } = await supabaseAdmin
    .from('interview_session_cancel')
    .select('other_details,reason')
    .eq('id', interview_cancel_id);
  const { reason } = session_cancel;

  const {
    candidates: {
      email,
      recruiter_id,
      first_name,
      recruiter: { name: recruiterName, logo },
    },
    public_jobs: { company },
  } = candidateJob;
  const Sessions = sessions.map((session) => {
    const {
      interview_meeting: { start_time, end_time },
      name,
      schedule_type,
      session_duration,
      session_type,
    } = session;
    return {
      date: dayjs(start_time).format('ddd MMMM DD, YYYY'),
      time: `${dayjs(start_time).format('hh:mm A')} - ${dayjs(end_time).format('hh:mm A')}`,
      sessionType: name,
      platform: schedule_type,
      duration: DurationCalculator(session_duration),
      sessionTypeIcon: sessionTypeIcon(session_type),
      meetingIcon: scheduleTypeIcon(schedule_type),
    };
  });
  const body = {
    recipient_email: email,
    mail_type: 'recruiter_rescheduling_email', // CHANGED THE MAIL TYPE
    recruiter_id,
    companyLogo: logo,
    payload: {
      //   TODO: "One is missing IN SUBJECT, CHECK SUBJECT"
      '[firstName]': first_name,
      '[recruiterRescheduleReason]': reason,
      '[scheduleName]': recruiterName,
      '[companyName]': company,
      '[pickYourSlotLink]': `${process.env.BASE_URL}/scheduling/view?meeting_id=${meeting_id}&tab=candidate_details`,
      'meetingDetails': [...Sessions],
    },
  };
  return body;
}
