import { type ApiCancelScheduledInterview } from '@aglint/shared-types';
import { supabaseWrap } from '@aglint/shared-utils';
import axios from 'axios';
import { type NextApiRequest, type NextApiResponse } from 'next';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { session_ids } = req.body as ApiCancelScheduledInterview;
  if (!session_ids) return res.status(400).send('missing fields');
  const supabaseAdmin = getSupabaseServer();

  try {
    const meeting_ids = supabaseWrap(
      await supabaseAdmin
        .from('interview_session')
        .select('meeting_id')
        .in('id', session_ids),
    );
    const meetings = supabaseWrap(
      await supabaseAdmin
        .from('interview_meeting')
        .update({
          status: 'cancelled',
        })
        .in(
          'id',
          meeting_ids.map((i) => i.meeting_id),
        )
        .select(),
    );

    if (meetings.length === 0) return res.status(200).send('no meetings found');
    const promises = meetings.map(async (meeting) => {
      await axios.post(
        `${process.env.NEXT_PUBLIC_HOST_NAME}/api/scheduling/v1/cancel_calender_event`,
        { calender_event: meeting.meeting_json },
      );
    });
    await Promise.all(promises);

    return res.status(200).send('ok');
  } catch (error) {
    console.error(error.message);
    return res.status(500).send(error.message);
  }
};

export default handler;
