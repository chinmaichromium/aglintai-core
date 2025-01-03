/* eslint-disable no-console */
import { signupCompanyAdmin } from '@aglint/shared-utils';
import { type NextApiRequest, type NextApiResponse } from 'next';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

export type ApiBodyParamsSignup = {
  email: string;
  user_id: string;
  first_name: string;
  last_name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, user_id, first_name, last_name } =
      req.body as ApiBodyParamsSignup;
    const supabase = getSupabaseServer();
    const { recruiter_user, recruiter } = await signupCompanyAdmin(
      {
        email,
        user_id,
        first_name,
        last_name,
      },
      supabase,
    );

    return res.status(200).json({
      recruiter_user,
      recruiter,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log('error', error.message);
      res.status(400).send(error.message);
    }
  }
};

export default handler;
