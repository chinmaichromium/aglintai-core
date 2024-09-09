import { type DatabaseEnums } from '@aglint/shared-types';
import {
  type ProgressLoggerType,
  createRequestProgressLogger,
  executeWorkflowAction,
} from '@aglint/shared-utils';
import { type NextApiRequest, type NextApiResponse } from 'next';

<<<<<<< HEAD
=======
import { apiTargetToEvents } from '@/components/Requests/_common/components/RequestCard/RequestDetails/RequestProgress/utils/progressMaps';
>>>>>>> 29d7036c5711e9ba1a63bd406d7115ad181c6c96
import { changeInterviewer } from '@/services/api-schedulings/interviewer-decline/change-interviewer';
import { supabaseAdmin } from '@/utils/supabase/supabaseAdmin';
import { apiTargetToEvents } from '@/components/Requests/_common/Components/RequestProgress/utils/progressMaps';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const target_api = req.body.target_api as DatabaseEnums['email_slack_types'];

  const reqProgressLogger: ProgressLoggerType = createRequestProgressLogger({
    request_id: req.body.request_id,
    supabaseAdmin: supabaseAdmin,
    event_run_id: req.body.event_run_id,
    event_type: apiTargetToEvents[target_api],
  });

  const {
    request_id,
    session_ids,
  }: {
    request_id: string;
    session_ids: string[];
  } = req.body;

  try {
    await reqProgressLogger.resetEventProgress();

    if (target_api === 'onRequestInterviewerDecline_agent_changeInterviewer') {
      await executeWorkflowAction(
        changeInterviewer,
        {
          request_id,
          session_id: session_ids[0],
          reqProgressLogger,
        },
        reqProgressLogger,
      );
    }
    return res.status(200).send('ok');
  } catch (error) {
    console.error(error);
    return res.status(400).send(error.message);
  }
};

export default handler;
