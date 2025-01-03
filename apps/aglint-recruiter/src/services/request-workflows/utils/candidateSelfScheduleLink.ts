import {
  type ActionPayloadType,
  type PlanCombinationRespType,
} from '@aglint/shared-types';
import {
  type candidate_new_schedule_schema,
  DAYJS_FORMATS,
  dayjsLocal,
  type ProgressLoggerType,
  supabaseWrap,
} from '@aglint/shared-utils';
import { type z } from 'zod';

import { mailSender } from '@/utils/mailSender';
import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

export const candidateSelfScheduleLink = async ({
  parsed_body,
  date_range,
  reqProgressLogger,
  job_payload,
  req_assignee_tz,
  organizer_id,
  selected_slots_from_instruction,
}: {
  parsed_body: z.infer<typeof candidate_new_schedule_schema>;
  date_range: {
    start_date_str: string;
    end_date_str: string;
  };
  reqProgressLogger: ProgressLoggerType;
  job_payload: ActionPayloadType['agent_instruction'];
  req_assignee_tz: string;
  organizer_id: string;
  selected_slots_from_instruction: PlanCombinationRespType[];
}) => {
  const supabaseAdmin = getSupabaseServer();
  const filter_json = supabaseWrap(
    await supabaseAdmin
      .from('interview_filter_json')
      .insert({
        session_ids: parsed_body.session_ids,
        filter_json: {
          start_date: date_range.start_date_str,
          end_date: date_range.end_date_str,
        },
        selected_options: selected_slots_from_instruction,
        request_id: parsed_body.request_id,
        application_id: parsed_body.application_id,
      })
      .select()
      .single(),
  );

  await mailSender({
    target_api: 'sendSelfScheduleRequest_email_applicant',
    payload: {
      application_id: parsed_body.application_id,
      is_preview: false,
      organizer_id: organizer_id,
      overridedMailSubBody: job_payload.email,
      request_id: parsed_body.request_id,
    },
  });

  const slots: Record<string, number> = {};
  selected_slots_from_instruction.forEach((plan) => {
    const starting_sesn = plan.sessions[0].start_time;
    if (!slots[starting_sesn]) {
      slots[starting_sesn] = 1;
    }
  });
  const total_slots = Object.values(slots).reduce((acc, val) => acc + val, 0);
  let prog_log = '';
  const cand_avail_date = {
    startDate: selected_slots_from_instruction[0].sessions[0].start_time,
    endDate:
      selected_slots_from_instruction[
        selected_slots_from_instruction.length - 1
      ].sessions[0].start_time,
  };

  if (cand_avail_date.startDate !== cand_avail_date.endDate) {
    prog_log = `Sent total ${total_slots} slots to the candidate from ${dayjsLocal(cand_avail_date.startDate).tz(req_assignee_tz).format(DAYJS_FORMATS.DATE_FORMAT)} - ${dayjsLocal(cand_avail_date.endDate).tz(req_assignee_tz).format(DAYJS_FORMATS.DATE_FORMATZ)}`;
  } else {
    prog_log = `Sent total ${total_slots} slots to the candidate on ${dayjsLocal(cand_avail_date.startDate).tz(req_assignee_tz).format(DAYJS_FORMATS.DATE_FORMATZ)}`;
  }

  await reqProgressLogger({
    log: prog_log,
    status: 'completed',
    is_progress_step: true,
  });
  await reqProgressLogger({
    is_progress_step: true,
    status: 'completed',
    meta: {
      filter_json_id: filter_json.id,
    },
  });
};
