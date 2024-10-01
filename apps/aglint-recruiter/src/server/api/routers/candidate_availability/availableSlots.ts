import { z } from 'zod';

import { CandidatesSchedulingV2 } from '@/services/CandidateScheduleV2/CandidatesSchedulingV2';
import { fetchCandidateAvailability } from '@/services/CandidateScheduleV2/utils/fetchCandidateAvailability';
import { userTzDayjs } from '@/services/CandidateScheduleV2/utils/userTzDayjs';

import { type PrivateProcedure, privateProcedure } from '../../trpc';

const schema = z.object({
  availability_id: z.string().uuid(),
});

const query = async ({ input }: PrivateProcedure<typeof schema>) => {
  const { availability_id } = input;
  const user_tz = userTzDayjs.tz.guess();
  const {
    api_options,
    session_ids,
    candidate_selected_slots,
    start_date_str,
    end_date_str,
    recruiter_id,
  } = await fetchCandidateAvailability(availability_id);
  const cand_schedule = new CandidatesSchedulingV2(api_options);
  await cand_schedule.fetchDetails({
    params: {
      company_id: recruiter_id,
      session_ids: session_ids,
      req_user_tz: user_tz,
      start_date_str: start_date_str,
      end_date_str: end_date_str,
    },
  });
  const all_combs = cand_schedule.getCandidateSelectedSlots(
    candidate_selected_slots,
  );

  return {
    slots: all_combs,
    availabilities: cand_schedule.calendar_events,
  };
};

export const availableSlots = privateProcedure.input(schema).query(query);