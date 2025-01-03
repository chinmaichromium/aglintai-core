import {
  type DatabaseFunctions,
  type DatabaseTableInsert,
} from '@aglint/shared-types';
import {
  CApiError,
  type createCandidateRequestSchema,
  getFullName,
  supabaseWrap,
} from '@aglint/shared-utils';
import { type z } from 'zod';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

export const createCandidateRequest = async (
  parsed: z.output<typeof createCandidateRequestSchema>,
) => {
  const supabaseAdmin = getSupabaseServer();

  const { candidate_name, schedule_request } = await fetchDetails(parsed);
  const details: DatabaseFunctions['create_session_request']['Args'] = {
    application: parsed.application_id,
    request: {
      assignee_id: schedule_request.assignee_id,
      assigner_id: schedule_request.assigner_id,
      priority: 'urgent',
      schedule_start_date: parsed.dates?.start,
      schedule_end_date: parsed.dates?.end,
      status: 'to_do',
      title: `${candidate_name} Requested for rescheduling Interview`,
      type: 'reschedule_request',
      note: null,
    },
    sessions: parsed.session_ids,
  };

  if (parsed.type === 'candidate_request_decline') {
    details.request = {
      ...details.request,
      title: `${candidate_name} Requested for Cancelling Interview`,
      type: 'cancel_schedule_request',
    };
  }

  const { data } = await supabaseAdmin
    .rpc('create_session_request', details)
    .throwOnError();

  const request_id = data as string;

  const cancels: {
    session_id: string;
    reason: string;
    other_details: DatabaseTableInsert['interview_session_cancel']['other_details'];
    type: DatabaseTableInsert['interview_session_cancel']['type'];
    application_id: string;
    request_id: string;
  }[] = parsed.session_ids.map((session_id) => ({
    session_id,
    reason: parsed.reason,
    other_details: parsed.other_details,
    type: parsed.type,
    application_id: parsed.application_id,
    request_id,
  }));

  await saveCancelReschedule({
    details: cancels,
  });

  return request_id;
};

const fetchDetails = async (
  parsed: z.output<typeof createCandidateRequestSchema>,
) => {
  const supabaseAdmin = getSupabaseServer();

  const [cand_application] = supabaseWrap(
    await supabaseAdmin
      .from('applications')
      .select('*,candidates!inner(*)')
      .eq('id', parsed.application_id),
  );
  const [meeting_details] = supabaseWrap(
    await supabaseAdmin
      .from('meeting_details')
      .select('*')
      .eq('session_id', parsed.session_ids[0]),
  );
  if (!meeting_details.schedule_request_id) {
    throw new CApiError('SERVER_ERROR', 'No schedule request found');
  }
  const [schedule_request] = supabaseWrap(
    await supabaseAdmin
      .from('request')
      .select()
      .eq('id', meeting_details.schedule_request_id),
  );
  const candidate_name = getFullName(
    cand_application.candidates.first_name ?? '',
    cand_application.candidates.last_name ?? '',
  );
  return {
    candidate_name,
    schedule_request,
  };
};

const saveCancelReschedule = async ({
  details,
}: {
  details: DatabaseTableInsert['interview_session_cancel'][];
}) => {
  const supabaseAdmin = getSupabaseServer();

  (
    await supabaseAdmin
      .from('interview_session_cancel')
      .upsert(details)
      .throwOnError()
      .select()
  ).data;
};
