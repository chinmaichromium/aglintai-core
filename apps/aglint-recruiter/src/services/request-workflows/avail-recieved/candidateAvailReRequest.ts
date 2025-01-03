/* eslint-disable security/detect-object-injection */
import { type TargetApiPayloadType } from '@aglint/shared-types';
import { CApiError, supabaseWrap } from '@aglint/shared-utils';
import { candidate_avail_request_schema } from '@aglint/shared-utils/src/scheduling/apiSchemas';

import { mailSender } from '@/utils/mailSender';
import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

export const candidateAvailReRequest = async ({
  end_date_str,
  organizer_id,
  req_body,
  request_id,
  start_date_str,
  cloned_sessn_ids,
}: {
  req_body: any;
  organizer_id: string;
  cloned_sessn_ids: string[];
  start_date_str: string;
  end_date_str: string;
  request_id: string;
}) => {
  const { application_id, number_of_days, number_of_slots, recruiter_id } =
    candidate_avail_request_schema.parse(req_body);
  const supabaseAdmin = getSupabaseServer();

  const cand_avail = (
    await supabaseAdmin
      .from('candidate_request_availability')
      .insert({
        application_id,
        recruiter_id,
        number_of_days,
        number_of_slots,
        date_range: [start_date_str, end_date_str],
        request_id: request_id,
        visited: false,
        slots: null,
        availability: {
          day_offs: false,
          outside_work_hours: true,
          free_keywords: true,
          recruiting_block_keywords: true,
        },
      })
      .select()
      .single()
      .throwOnError()
  ).data;
  if (!cand_avail) {
    throw new CApiError('CLIENT', 'No candidate availability found');
  }
  supabaseWrap(
    await supabaseAdmin.from('request_session_relation').insert(
      cloned_sessn_ids.map((s) => ({
        session_id: s,
        request_availability_id: cand_avail.id,
      })),
    ),
  );

  const payload: TargetApiPayloadType<'availabilityReqResend_email_candidate'> =
    {
      recruiter_user_id: organizer_id,
      avail_req_id: cand_avail.id,
      is_preview: false,
      overridedMailSubBody: null,
    };

  await mailSender({
    target_api: 'availabilityReqResend_email_candidate',
    payload: {
      ...payload,
    },
  });
};
