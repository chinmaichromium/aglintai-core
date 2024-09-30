import type {
  DatabaseTable,
  PlanCombinationRespType,
  TargetApiSchema,
} from '@aglint/shared-types';
import { CApiError, type ProgressLoggerType } from '@aglint/shared-utils';
import axios from 'axios';
import { type z } from 'zod';

import type { CandidatesSchedulingV2 } from '../CandidateScheduleV2/CandidatesSchedulingV2';

export const slackSuggestSlots = async ({
  avail_plans,
  request_id,
}: {
  avail_plans: PlanCombinationRespType[];
  cand_avail_rec: DatabaseTable['candidate_request_availability'];
  cand_schedule: CandidatesSchedulingV2;
  reqProgressLogger: ProgressLoggerType;
  request_id: string;
}) => {
  if (avail_plans.every((plan) => plan.no_slot_reasons.length > 0)) {
    const no_slot_reasons = avail_plans
      .map((plan) => plan.no_slot_reasons.map((reason) => reason.reason))
      .flat();

    throw new CApiError(
      'CLIENT',
      'Found following conflicts from candidate availability, ' +
        no_slot_reasons.join(', '),
    );
  }

  const no_conflict_plans = avail_plans.filter(
    (plan) =>
      plan.no_slot_reasons.length === 0 &&
      plan.sessions.every((sesn) => sesn.ints_conflicts.length === 0),
  );

  if (no_conflict_plans.length === 0) {
    throw new CApiError(
      'CLIENT',
      'No plans were found without conflicts from candidate availability',
    );
  }

  const payload: z.infer<
    typeof TargetApiSchema.onReceivingAvailReq_slack_suggestSlots
  > = {
    plans: no_conflict_plans,
    request_id,
  };

  await axios.post(
    `${process.env.NEXT_PUBLIC_MAIL_HOST}/api/onReceivingAvailReq_slack_suggestSlots`,
    payload,
  );

  // const plan = no_conflict_plans[0];

  // const fetched_cand_details = await fetchCandAvailForBooking({
  //   availability_req_id: cand_avail_rec.id,
  //   selectedOption: plan,
  //   user_tz: cand_avail_rec.user_timezone,
  //   request_id,
  // });
  // await bookRecruiterSelectedOption(
  //   {
  //     availability_req_id: cand_avail_rec.id,
  //     selectedOption: plan,
  //     user_tz: cand_avail_rec.user_timezone,
  //     request_id,
  //   },
  //   cand_schedule,
  //   plan,
  //   fetched_cand_details,
  // );

  // await reqProgressLogger({
  //   log: 'Successfully booked slot from candidate availability',
  //   status: 'completed',
  //   is_progress_step: true,
  // });
};
