import { DatabaseEnums } from '@aglint/shared-types';
import { candidate_new_schedule_schema } from '@aglint/shared-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import * as v from 'valibot';

import { filterSchedulingOptionsArray } from '@/src/components/Scheduling/CandidateDetails/SchedulingDrawer/BodyDrawer/StepScheduleFilter/utils';
import { candidateAvailRequest } from '@/src/services/api-schedulings/candidateAvailRequest';
import { candidateSelfSchedule } from '@/src/services/api-schedulings/candidateSelfSchedule';
import { selfScheduleAgent } from '@/src/services/api-schedulings/selfScheduleAgent';
import { CandidatesSchedulingV2 } from '@/src/services/CandidateScheduleV2/CandidatesSchedulingV2';
import { getClonedSessionIds } from '@/src/utils/scheduling/getClonedSessionIds';
import { getOrganizerId } from '@/src/utils/scheduling/getOrganizerId';
import { supabaseAdmin } from '@/src/utils/supabase/supabaseAdmin';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      api_options,
      application_id,
      session_ids,
      target_api,
      recruiter_id,
      date_range,
    } = v.parse(candidate_new_schedule_schema, req.body);
    const api_target = target_api as DatabaseEnums['email_slack_types'];
    const organizer_id = await getOrganizerId(application_id, supabaseAdmin);
    const { cloned_sessn_ids, schedule_id } = await getClonedSessionIds(
      application_id,
      session_ids,
    );
    const cand_schedule = new CandidatesSchedulingV2(api_options);
    await cand_schedule.fetchDetails({
      company_id: recruiter_id,
      start_date_str: date_range.start_date,
      end_date_str: date_range.end_date,
      req_user_tz: 'Asia/Calcutta', //TODO:
      session_ids: cloned_sessn_ids,
    });
    const slots = cand_schedule.findAvailabilitySlotsDateRange();
    const filtered_slot_info = filterSchedulingOptionsArray({
      schedulingOptions: slots,
      filters: {
        isHardConflicts: false,
        isNoConflicts: true,
        isOutSideWorkHours:
          api_options.include_conflicting_slots.out_of_working_hrs,
        isSoftConflicts:
          api_options.include_conflicting_slots.show_soft_conflicts,
        isWorkLoad: true,
        preferredDateRanges: [],
        preferredInterviewers: [],
      },
    });
    const plans = filtered_slot_info.combs.flatMap((c) => c.plans);

    if (api_target === 'onSelfScheduleReqAgent_EmailLink_SelfSchedule') {
      await candidateSelfSchedule(
        req.body,
        cloned_sessn_ids,
        organizer_id,
        schedule_id,
        plans,
      );
    } else if (
      api_target === 'onSelfScheduleReqAgent_PhoneAgent_SelfSchedule'
    ) {
      await selfScheduleAgent({
        req_body: req.body,
        agent_assigned_user_id: organizer_id,
        agent_type: 'phone',
        cloned_sessn_ids: session_ids,
        schedule_id: schedule_id,
      });
    } else if (
      api_target === 'onSelfScheduleReqAgent_EmailAgent_SelfSchedule'
    ) {
      await selfScheduleAgent({
        req_body: req.body,
        agent_assigned_user_id: organizer_id,
        agent_type: 'email',
        cloned_sessn_ids: session_ids,
        schedule_id: schedule_id,
      });
    } else if (
      api_target === 'onAvailReqAgent_emailLink_getCandidateAvailability'
    ) {
      await candidateAvailRequest(req.body, organizer_id, cloned_sessn_ids);
    }
    return res.status(200).send('OK');
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

export default handler;
