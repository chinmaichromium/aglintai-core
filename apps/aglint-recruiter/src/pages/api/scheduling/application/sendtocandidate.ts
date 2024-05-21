/* eslint-disable security/detect-object-injection */
/* eslint-disable no-console */
import { RecruiterUserType } from '@aglint/shared-types';
import { DB } from '@aglint/shared-types';
import { CookieOptions, createServerClient, serialize } from '@supabase/ssr';
import { NextApiRequest, NextApiResponse } from 'next';

import { SchedulingApplication } from '@/src/components/Scheduling/CandidateDetails/store';
import { sendToCandidate } from '@/src/components/Scheduling/CandidateDetails/utils';

export interface ApiBodyParamsSendToCandidate {
  is_mail: boolean;
  is_debrief?: boolean;
  selected_comb_id: string;
  selectedApplication: SchedulingApplication['selectedApplication'];
  initialSessions: SchedulingApplication['initialSessions'];
  selectedSessionIds: SchedulingApplication['selectedSessionIds'];
  selCoordinator: SchedulingApplication['selCoordinator'];
  recruiter_id: string;
  dateRange: {
    start_date: string;
    end_date: string;
  };
  schedulingOptions: SchedulingApplication['schedulingOptions'];
  recruiterUser: RecruiterUserType;
  user_tz: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const supabase = createServerClient<DB>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return req.cookies[name];
          },
          set(name: string, value: string, options: CookieOptions) {
            res.setHeader('Set-Cookie', serialize(name, value, options));
          },
          remove(name: string, options: CookieOptions) {
            res.setHeader('Set-Cookie', serialize(name, '', options));
          },
        },
      },
    );

    const resSendToCandidate = await sendToCandidate({ ...req.body, supabase });

    if (resSendToCandidate) {
      res.status(200).send(true);
    } else {
      res.status(400).send(false);
    }
  } catch (error) {
    // console.log('error', error);
    res.status(400).send(error.message);
  }
};

export default handler;
