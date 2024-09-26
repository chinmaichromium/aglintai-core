import {
  candidate_new_schedule_schema,
  CApiError,
  createRequestProgressLogger,
  executeWorkflowAction,
  type ProgressLoggerType,
} from '@aglint/shared-utils';
import axios from 'axios';
import { type NextApiRequest, type NextApiResponse } from 'next';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabaseAdmin = getSupabaseServer();

  const reqProgressLogger: ProgressLoggerType = createRequestProgressLogger({
    request_id: req.body.request_id,
    event_run_id: req.body.event_run_id,
    supabaseAdmin: supabaseAdmin,
    event_type: 'CANCEL_INTERVIEW_MEETINGS',
  });
  try {
    await reqProgressLogger.resetEventProgress();

    const { session_ids, target_api } = candidate_new_schedule_schema.parse(
      req.body,
    );

    if (target_api === 'onRequestCancel_agent_cancelEvents') {
      await executeWorkflowAction(
        cancelInterviews,
        { session_ids },
        reqProgressLogger,
      );
    }

    return res.status(200).send('OK');
  } catch (err) {
    console.error(err);
    if (err instanceof CApiError) {
      return res.status(500).json({
        type: err.type,
        message: err.message,
      });
    }
    return res.status(500).json({
      type: err.name,
      message: err.message,
    });
  }
};

export default handler;

const cancelInterviews = async ({ session_ids }: { session_ids: string[] }) => {
  await axios.post(
    `${process.env.NEXT_PUBLIC_HOST_NAME}/api/scheduling/v1/cancel_interview_scheduling`,
    {
      session_ids,
    },
  );
};
