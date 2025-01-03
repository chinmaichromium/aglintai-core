/* eslint-disable no-console */

import { type NextApiRequest, type NextApiResponse } from 'next';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

import { encrypt } from '../encryptData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const apiKey = req.body.apiKey;
  const recruiterId = req.body.recruiterId;
  const supabaseAdmin = getSupabaseServer();

  if (!apiKey) {
    res.status(400).send('apiKey or recruiterId is missing');
  }
  console.log(apiKey);

  const encryptedApiKey = encrypt(apiKey, process.env.ENCRYPTION_KEY);

  const { data, error } = await supabaseAdmin
    .from('integrations')
    .update({ lever_key: encryptedApiKey })
    .eq('recruiter_id', recruiterId)
    .select();

  if (!error) {
    res.status(200).send(data);
  } else {
    res.status(400).send(error);
  }
}
