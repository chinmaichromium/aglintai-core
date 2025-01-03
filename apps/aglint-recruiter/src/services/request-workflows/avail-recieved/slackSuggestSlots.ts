import type {
  DatabaseTable,
  PlanCombinationRespType,
  TargetApiSchema,
} from '@aglint/shared-types';
import { CApiError } from '@aglint/shared-utils';
import axios from 'axios';
import { type z } from 'zod';

export const slackSuggestSlots = async ({
  avail_plans,
  cand_avail_rec,
}: {
  avail_plans: PlanCombinationRespType[];
  cand_avail_rec: DatabaseTable['candidate_request_availability'];
}) => {
  if (!cand_avail_rec.user_timezone) {
    throw new CApiError('CLIENT', 'User timezone is not available');
  }
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
    cand_avail_req_id: cand_avail_rec.id,
  };

  await axios.post(
    `${process.env.NEXT_PUBLIC_MAIL_HOST}/api/slack/onReceivingAvailReq_slack_suggestSlots`,
    payload,
  );
};
