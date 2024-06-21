/* eslint-disable security/detect-object-injection */
import {
  CandidateDirectBookingType,
  PlanCombinationRespType,
  SessionCombinationRespType,
} from '@aglint/shared-types';
import { schema_candidate_direct_booking } from '@aglint/shared-types/src/aglintApi/valibotSchema/candidate-self-schedule';
import { ScheduleUtils, scheduling_options_schema } from '@aglint/shared-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import * as v from 'valibot';

import { CandidatesSchedulingV2 } from '@/src/services/CandidateScheduleV2/CandidatesSchedulingV2';
import { bookCandidateSelectedOption } from '@/src/services/CandidateScheduleV2/utils/bookingUtils/bookCandidateSelectedOption';
import { fetchDBScheduleDetails } from '@/src/services/CandidateScheduleV2/utils/bookingUtils/dbFetch/fetchDBScheduleDetails';
import { userTzDayjs } from '@/src/services/CandidateScheduleV2/utils/userTzDayjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const parsed = v.parse(schema_candidate_direct_booking, req.body);
    const schedule_db_details = await fetchDBScheduleDetails(parsed.filter_id);
    const { filter_json_data } = schedule_db_details;
    const interviewer_selected_options =
      filter_json_data.selected_options as PlanCombinationRespType[];

    const cand_filtered_plans: PlanCombinationRespType[] = getCandFilteredSlots(
      interviewer_selected_options,
      parsed,
    );

    const zod_options = v.parse(scheduling_options_schema, {
      include_conflicting_slots: {},
    });

    zod_options.include_conflicting_slots.show_conflicts_events = true;
    zod_options.include_conflicting_slots.show_soft_conflicts = true;

    const cand_schedule = new CandidatesSchedulingV2(
      {
        candidate_tz: parsed.cand_tz,
        start_date_str: filter_json_data.filter_json.start_date,
        end_date_str: filter_json_data.filter_json.end_date,
        recruiter_id: filter_json_data.interview_schedule.recruiter_id,
        session_ids: interviewer_selected_options[0].sessions.map(
          (s) => s.session_id,
        ),
      },
      zod_options,
    );

    await cand_schedule.fetchDetails();

    await cand_schedule.fetchIntsEventsFreeTimeWorkHrs();
    const verified_plans =
      cand_schedule.verifyIntSelectedSlots(cand_filtered_plans);
    if (verified_plans.length === 0) {
      throw new Error('Requested plan does not exist');
    }
    await bookCandidateSelectedOption(
      parsed,
      cand_schedule,
      verified_plans[0],
      schedule_db_details,
    );

    return res.status(200).json('ok');
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
};
export default handler;

const getCandFilteredSlots = (
  interviewer_selected_options: PlanCombinationRespType[],
  parsed_body: CandidateDirectBookingType,
) => {
  const int_rounds_length = ScheduleUtils.getSessionRounds(
    interviewer_selected_options[0].sessions,
  ).length;
  if (parsed_body.selected_plan.length !== int_rounds_length) {
    throw new Error('invalid plan');
  }
  const cand_filtered_plans: PlanCombinationRespType[] = [];

  interviewer_selected_options.forEach((plan) => {
    const session_rounds = ScheduleUtils.getSessionRounds(
      plan.sessions,
    ) as unknown as SessionCombinationRespType[][];
    let is_valid = true;
    for (
      let curr_round_idx = 0;
      curr_round_idx < session_rounds.length;
      ++curr_round_idx
    ) {
      if (
        userTzDayjs(session_rounds[curr_round_idx][0].start_time)
          .tz(parsed_body.cand_tz)
          .format() !== parsed_body.selected_plan[curr_round_idx].start_time &&
        userTzDayjs(
          session_rounds[curr_round_idx][
            session_rounds[curr_round_idx].length - 1
          ].end_time,
        )
          .tz(parsed_body.cand_tz)
          .format() !== parsed_body.selected_plan[curr_round_idx].end_time
      ) {
        is_valid = false;
        break;
      }
    }
    if (is_valid) {
      cand_filtered_plans.push({ ...plan });
    }
  });

  return cand_filtered_plans;
};
