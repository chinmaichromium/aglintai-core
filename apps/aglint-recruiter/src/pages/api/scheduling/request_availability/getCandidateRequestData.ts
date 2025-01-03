/* eslint-disable security/detect-object-injection */
import { type DB } from '@aglint/shared-types';
import { createClient } from '@supabase/supabase-js';
import { type NextApiRequest, type NextApiResponse } from 'next';

import type { fetchAllActivities } from '../fetch_activities';

const supabase = createClient<DB>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);
export type ApiResponseActivities =
  | {
      data: Awaited<ReturnType<typeof fetchAllActivities>>;
      error: null;
    }
  | {
      data: null;
      error: string | null;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method === 'POST') {
      const { request_id } = req.body;
      if (request_id) {
        const { data, error } = await supabase
          .from('candidate_request_availability')
          .select(
            '*,request_session_relation( interview_session(*) ), applications ( candidate_id, candidates ( * ,recruiter(id,name,logo)) ),recruiter(logo,name)',
          )
          .eq('id', request_id)
          .single();
        if (error) {
          return res.send({
            data: null,
            error: 'missing required fields',
          } as ApiResponseActivities);
        }
        if (data) return res.send(data);
      } else {
        return res.send({
          data: null,
          error: 'missing required fields',
        } as ApiResponseActivities);
      }
    }
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed!');
  } catch (err) {
    return res.status(500).send({
      data: null,
      error: err,
    } as ApiResponseActivities);
  }
}
