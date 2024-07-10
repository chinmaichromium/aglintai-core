import { CalendarEvent } from '@aglint/shared-types';
import { supabaseWrap } from '@aglint/shared-utils';
import { NextApiRequest, NextApiResponse } from 'next';

import { GoogleCalender } from '@/src/services/GoogleCalender/google-calender';
import { CalEventAttendeesAuthDetails } from '@/src/utils/event_book/book_session';
import { decrypt_string } from '@/src/utils/integrations/crypt-funcs';
import { supabaseAdmin } from '@/src/utils/supabase/supabaseAdmin';

type BodyParams = {
  calender_event: CalendarEvent;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let { calender_event } = req.body as BodyParams;
  if (!calender_event) return res.status(400).send('missing Fields');
  try {
    const { comp_cred, recruiter } = await getRecruiterCredentials({
      email: calender_event.organizer.email,
    });

    const google_cal = new GoogleCalender({
      company_cred: comp_cred,
      recruiter,
    });

    await google_cal.authorizeUser();
    await google_cal.updateEventStatus(calender_event.id, 'cancelled');

    return res.status(200).send('ok');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default handler;

const getRecruiterCredentials = async ({ email }) => {
  const [rec_user] = supabaseWrap(
    await supabaseAdmin.from('recruiter_user').select().eq('email', email),
  );
  const user_id = rec_user.user_id;
  const [rec] = supabaseWrap(
    await supabaseAdmin
      .from('recruiter_relation')
      .select('recruiter(service_json),recruiter_user(schedule_auth)')
      .eq('user_id', user_id),
  );

  const r: CalEventAttendeesAuthDetails = {
    email,
    schedule_auth: user_schedule_auth as any,
    user_id,
  };
  return { comp_cred, recruiter: r };
};
