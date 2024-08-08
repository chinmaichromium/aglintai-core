import { DatabaseEnums, DatabaseTable } from '@aglint/shared-types';
import {
  ApiError,
  candidate_new_schedule_schema,
  supabaseWrap,
} from '@aglint/shared-utils';
import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';
import { NextApiRequest, NextApiResponse } from 'next';
import * as v from 'valibot';

import { candidateAvailRequest } from '@/src/services/api-schedulings/candidateAvailRequest';
import { candidateSelfSchedule } from '@/src/services/api-schedulings/candidateSelfSchedule';
import { findPlanCombs } from '@/src/services/api-schedulings/findPlanCombs';
import { selfScheduleAgent } from '@/src/services/api-schedulings/selfScheduleAgent';
import {
  createRequestProgressLogger,
  executeWorkflowAction,
  ProgressLoggerType,
} from '@/src/services/api-schedulings/utils';
import { getOrganizerId } from '@/src/utils/scheduling/getOrganizerId';
import { supabaseAdmin } from '@/src/utils/supabase/supabaseAdmin';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let reqProgressLogger: ProgressLoggerType = createRequestProgressLogger(
    req.body.request_id,
    req.body.event_run_id,
  );

  try {
    const {
      api_options,
      application_id,
      session_ids,
      target_api,
      recruiter_id,
      request_id,
    } = v.parse(candidate_new_schedule_schema, req.body);
    let date_range = {
      start_date_str: dayjsLocal().format('DD/MM/YYYY'),
      end_date_str: dayjsLocal().add(7, 'day').format('DD/MM/YYYY'),
    };
    const api_target = target_api as DatabaseEnums['email_slack_types'];
    const organizer_id = await getOrganizerId(application_id, supabaseAdmin);
    const meeting_details = supabaseWrap(
      await supabaseAdmin
        .from('meeting_details')
        .select()
        .in('session_id', session_ids),
    );
    let schedule_id = meeting_details[0].interview_schedule_id;
    if (meeting_details.length === 0) {
      throw new ApiError('SERVER_ERROR', 'invalid session id');
    }
    const plans = await executeWorkflowAction(
      findPlanCombs,
      {
        api_options,
        date_range: date_range,
        recruiter_id,
        session_ids,
        reqProgressLogger,
      },
      reqProgressLogger,
      {
        event_type: 'FIND_CURR_AVAIL_SLOTS',
      },
    );

    let meeting_flow: DatabaseTable['interview_meeting']['meeting_flow'] =
      'self_scheduling';

    // fix lint
    if (api_target === 'onSelfScheduleReqAgent_EmailLink_SelfSchedule') {
      meeting_flow = 'self_scheduling';
      await executeWorkflowAction(
        candidateSelfSchedule,
        {
          cloned_sessn_ids: session_ids,
          schedule_id: schedule_id,
          start_date_str: date_range.start_date_str,
          end_date_str: date_range.end_date_str,
          organizer_id,
          plans,
          request_id,
        },
        reqProgressLogger,
        { event_type: null }, //TODO: mention
      );
    } else if (
      api_target === 'onSelfScheduleReqAgent_PhoneAgent_SelfSchedule'
    ) {
      await executeWorkflowAction(
        selfScheduleAgent,
        {
          req_body: req.body,
          agent_assigned_user_id: organizer_id,
          agent_type: 'phone',
          cloned_sessn_ids: session_ids,
          schedule_id: schedule_id,
          start_date_str: date_range.start_date_str,
          end_date_str: date_range.end_date_str,
        },
        reqProgressLogger,
        { event_type: null }, //TODO: mention
      );
    } else if (
      api_target === 'onSelfScheduleReqAgent_EmailAgent_SelfSchedule'
    ) {
      await executeWorkflowAction(
        selfScheduleAgent,
        {
          req_body: req.body,
          agent_assigned_user_id: organizer_id,
          agent_type: 'email',
          cloned_sessn_ids: session_ids,
          schedule_id: schedule_id,
          start_date_str: date_range.start_date_str,
          end_date_str: date_range.end_date_str,
        },
        reqProgressLogger,
        { event_type: null }, //TODO: mention
      );
    } else if (
      api_target === 'onAvailReqAgent_emailLink_getCandidateAvailability'
    ) {
      await executeWorkflowAction(
        candidateAvailRequest,
        {
          req_body: req.body,
          cloned_sessn_ids: session_ids,
          start_date_str: date_range.start_date_str,
          end_date_str: date_range.end_date_str,
          organizer_id: organizer_id,
          request_id: request_id,
        },
        reqProgressLogger,
        {
          event_type: 'REQ_CAND_AVAIL_EMAIL_LINK',
        },
      );
    } else {
      throw new ApiError('SERVER_ERROR', 'new-schedule not found');
    }

    supabaseWrap(
      await supabaseAdmin
        .from('interview_meeting')
        .update({
          meeting_flow,
          status: 'waiting',
          organizer_id,
          request_id: request_id,
        })
        .in(
          'id',
          meeting_details.map((m) => m.id),
        ),
    );

    return res.status(200).send('OK');
  } catch (err: any) {
    if (err instanceof ApiError) {
      return res.status(500).json({
        type: err.type,
        message: err.message,
      });
    } else {
      console.error(err);
    }
    return res.status(500).json({
      type: err.name,
      message: err.message,
    });
  }
};

export default handler;
