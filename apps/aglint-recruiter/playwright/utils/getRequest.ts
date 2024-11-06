import { ScheduleUtils, supabaseWrap } from '@aglint/shared-utils';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

import { getCompanyDetails } from './dbfetch';

export const getRequestForAvailabilityE2e = async () => {
  const { recruiter_user } = await getCompanyDetails();
  const supabaseAdmin = await getSupabaseServer();
  const scheduleRequests = supabaseWrap(
    await supabaseAdmin
      .from('request')
      .select('*, request_relation!inner(*, interview_session!inner(*))')
      .eq('type', 'schedule_request')
      .eq('status', 'to_do')
      .eq('assigner_id', recruiter_user.user_id),
    false,
  );
  if (scheduleRequests.length === 0) {
    throw new Error('No schedule requests found');
  }

  const singleDayRequests = scheduleRequests.filter((req) => {
    const reqSessDetails = req.request_relation.map(
      (reln) => reln.interview_session,
    );
    const SessionRounds = ScheduleUtils.getSessionRounds(reqSessDetails);
    return SessionRounds.length === 1;
  });
  const multiDayRequests = scheduleRequests.filter((req) => {
    const reqSessDetails = req.request_relation.map(
      (reln) => reln.interview_session,
    );
    const SessionRounds = ScheduleUtils.getSessionRounds(reqSessDetails);
    return SessionRounds.length > 1;
  });

  console.log('singleDayRequests', singleDayRequests.length);
  console.log('multiDayRequests', multiDayRequests.length);
  return { singleDayRequests, multiDayRequests };
};
