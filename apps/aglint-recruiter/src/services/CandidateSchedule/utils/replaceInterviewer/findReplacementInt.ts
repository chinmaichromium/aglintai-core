'use server';
import {
  type APIRespFindReplaceMentInts,
  type SessionCombinationRespType,
} from '@aglint/shared-types';
import { CApiError, dayjsLocal, supabaseWrap } from '@aglint/shared-utils';
import { type z } from 'zod';

import { type schemaFindAlternativeSlots } from '@/routers/scheduling/v1/findReplacementInts/schema';
import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

import { CandidatesScheduling } from '../../CandidatesScheduling';

// TODO: when added more 20C4 to the it fails
export const findReplacementIntsUtil = async (
  input: z.output<typeof schemaFindAlternativeSlots>,
) => {
  const { meeting_detail, meeting_ints, module_rec, candidate_tz } =
    await fetchDetails(input);
  const current_confirmed_ints = meeting_ints
    .filter((int) => int.is_confirmed)
    .map((int) => int.user_id);
  const declined_int = meeting_ints.find(
    (int) =>
      int.is_confirmed &&
      int.session_relation_id === input.declined_int_sesn_reln_id,
  );
  if (!declined_int) {
    throw new CApiError(
      'SERVER_ERROR',
      `${input.declined_int_sesn_reln_id} is not confirmed interviwer`,
    );
  }
  const cand_schedule = new CandidatesScheduling({
    return_empty_slots_err: true,
    include_conflicting_slots: {
      day_off: true,
      holiday: true,
      interviewer_pause: true,
      interviewers_load: true,
      out_of_office: true,
      out_of_working_hrs: true,
      show_soft_conflicts: true,
      show_conflicts_events: true,
      calender_not_connected: false,
      day_passed: true,
    },
  });

  await cand_schedule.fetchDetails({
    params: {
      company_id: module_rec.recruiter_id,
      session_ids: [input.session_id],
      req_user_tz: candidate_tz,

      end_date_str: dayjsLocal(meeting_detail.start_time)
        .tz(candidate_tz)
        .format('DD/MM/YYYY'),
      start_date_str: dayjsLocal(meeting_detail.start_time)
        .tz(candidate_tz)
        .format('DD/MM/YYYY'),
    },
    include_all_module_ints: true,
  });

  cand_schedule.ignoreTrainee();

  cand_schedule.ignoreInterviewers([
    {
      sesn_id: input.session_id,
      user_id: declined_int.user_id as string,
    },
  ]);

  const [single_day_slots] = cand_schedule.findCandSlotForTheDay();
  if (!single_day_slots) {
    return [] as APIRespFindReplaceMentInts;
  }

  const slot_combs = single_day_slots.plans.map((comb) => comb.sessions[0]);
  const time_filtered_slots = slot_combs.filter((comb) =>
    filter_slots(comb, meeting_detail.start_time as string, candidate_tz),
  );
  //NOTE: explain
  const replacement_ints: APIRespFindReplaceMentInts = time_filtered_slots
    .filter(
      (slot) =>
        slot.qualifiedIntervs.filter(
          (int) => !current_confirmed_ints.includes(int.user_id),
        ).length > 0,
    )
    .map((slot) => {
      const replacement_int = slot.qualifiedIntervs.filter(
        (int) => !current_confirmed_ints.includes(int.user_id),
      )[0];
      const int_conflict = slot.ints_conflicts.find(
        (int) => int.interviewer.user_id === replacement_int.user_id,
      );

      return {
        replacement_int,
        conflicts: int_conflict?.conflict_reasons ?? [],
      };
    });
  return replacement_ints;
};

const filter_slots = (
  sess_comb: SessionCombinationRespType,
  slot_time: string,
  tz: string,
) => {
  const slot_time_user_time = dayjsLocal(slot_time).tz(tz).format();
  return slot_time_user_time === sess_comb.start_time;
};

const fetchDetails = async (
  parsed_body: z.output<typeof schemaFindAlternativeSlots>,
) => {
  const db = getSupabaseServer();
  const meeting_detail = supabaseWrap(
    await db
      .from('meeting_details')
      .select()
      .eq('session_id', parsed_body.session_id)
      .single(),
  );
  if (!meeting_detail.module_id) {
    throw new CApiError('SERVER_ERROR', 'No schedule request found');
  }
  if (!meeting_detail.confirmed_candidate_tz) {
    throw new CApiError('SERVER_ERROR', 'No candidate timezone found');
  }
  if (meeting_detail.start_time === null) {
    throw new CApiError('SERVER_ERROR', 'No start time found');
  }
  const meeting_ints = supabaseWrap(
    await db
      .from('meeting_interviewers')
      .select()
      .eq('session_id', parsed_body.session_id),
  );
  const module_rec = supabaseWrap(
    await db
      .from('interview_module')
      .select()
      .eq('id', meeting_detail.module_id)
      .single(),
  );
  return {
    meeting_detail,
    meeting_ints,
    module_rec,
    candidate_tz: meeting_detail.confirmed_candidate_tz,
  };
};
