import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

import { Database } from '@/src/types/schema';
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);

export type ReInviteType = {
  email: string;
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { email, id } = req.body as unknown as ReInviteType;
    if (!email && !id) {
      return res
        .status(400)
        .send({ message: 'Invalid request. Required props missing.' });
    }
    const { role, error } = await getRecruiter(id);
    if (!error) {
      if ('admin' === role) {
        const { error: emailError } = await supabase.auth.resetPasswordForEmail(
          email,
          {
            redirectTo: `${process.env.NEXT_PUBLIC_HOST_NAME}/reset-password`,
          },
        );
        if (!emailError) {
          return res.send({ emailSend: true, error: null });
        } else {
          return res.status(200).send({
            userDetails: null,
            error: 'Error in resending the invite to user.',
          });
        }
        // } else if (error.message === 'User already registered') {
        //   const userDetails = await getRecruiterByEmail(user.email);
        //   if (userDetails)
        //     return res.status(200).send({ userDetails, error: error });
      }
      return res
        .status(200)
        .send({ emailSend: false, error: 'Permission denied!' });
    }
    return res
      .status(200)
      .send({ emailSend: false, error: 'error in validations role' });
  }
  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed!');
}

const getRecruiter = async (id: string) => {
  const { data, error } = await supabase
    .from('recruiter_user')
    .select('role')
    .eq('user_id', id);
  if (!error && data.length) {
    return { role: data[0].role, error };
  }
  return { role: null, error };
};
