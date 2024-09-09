import { type PlanCombinationRespType } from '@aglint/shared-types';
import { type ProgressLoggerType, supabaseWrap } from '@aglint/shared-utils';

import { mailSender } from '@/utils/mailSender';
import { supabaseAdmin } from '@/utils/supabase/supabaseAdmin';

export const candidateSelfSchedule = async ({
  cloned_sessn_ids,
  end_date_str,
  organizer_id,
  plans,
  request_id,
  application_id,
  start_date_str,
  reqProgressLogger,
  mail_payload,
}: {
  cloned_sessn_ids: string[];
  organizer_id: string;
  application_id: string;
  plans: PlanCombinationRespType[];
  start_date_str: string;
  end_date_str: string;
  request_id: string;
  reqProgressLogger: ProgressLoggerType;
  mail_payload: any;
}) => {
  const filterdNoSlots = plans.filter(
    (plan) => plan.no_slot_reasons.length === 0,
  );

  const [filter_json] = supabaseWrap(
    await supabaseAdmin
      .from('interview_filter_json')
      .insert({
        session_ids: cloned_sessn_ids,
        filter_json: {
          start_date: start_date_str,
          end_date: end_date_str,
        },
        selected_options: [...filterdNoSlots.slice(0, 15)], //TODO: fix this later
        request_id: request_id,
        application_id,
      })
      .select(),
  );

  await mailSender({
    target_api: 'sendSelfScheduleRequest_email_applicant',
    payload: {
      filter_json_id: filter_json.id,
      organizer_id,
      payload: mail_payload,
    },
  });

  await reqProgressLogger({
    is_progress_step: true,
    status: 'completed',
    meta: {
      filter_json_id: filter_json.id,
    },
  });
};
