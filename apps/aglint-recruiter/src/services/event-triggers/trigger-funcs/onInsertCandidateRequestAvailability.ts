import { DatabaseEnums, DatabaseTable } from '@aglint/shared-types';
import { supabaseWrap } from '@aglint/shared-utils';
import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';

import { supabaseAdmin } from '@/src/utils/supabase/supabaseAdmin';

import { getWActions } from '../utils/w_actions';

export const onInsertCandidateRequestAvailability = async ({
  new_data,
}: {
  new_data: DatabaseTable['candidate_request_availability'];
}) => {
  const allowed_end_points: DatabaseEnums['email_slack_types'][] = [
    'sendAvailReqReminder_email_applicant',
  ];

  const [application] = supabaseWrap(
    await supabaseAdmin
      .from('applications')
      .select('*,public_jobs(*)')
      .eq('id', new_data.application_id),
  );

  const { request_workflows } = await getWActions({
    company_id: application.public_jobs.recruiter_id,
    request_id: new_data.request_id,
  });

  const promises = [...request_workflows]
    .filter((j_l_a) => allowed_end_points.find((e) => e === j_l_a.target_api))
    .map(async (j_l_a) => {
      supabaseWrap(
        await supabaseAdmin.rpc('create_new_workflow_action_log', {
          triggered_table: 'candidate_request_availability',
          base_time: dayjsLocal().toISOString(),
          workflow_action_id: j_l_a.id,
          workflow_id: j_l_a.workflow_id,
          triggered_table_pkey: new_data.id,
          interval_minutes: j_l_a.workflow.interval,
          meta: {
            target_api: j_l_a.target_api,
            avail_req_id: new_data.id,
            payload: j_l_a.payload,
          },
          phase: j_l_a.workflow.phase,
        }),
      );
    });

  await Promise.allSettled(promises);
};
