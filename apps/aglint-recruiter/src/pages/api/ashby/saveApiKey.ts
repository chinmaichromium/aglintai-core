/* eslint-disable no-console */
import { type DB } from '@aglint/shared-types';
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import type { NextRequest } from 'next/server';

import { encrypt } from '../encryptData';

const supabase = createClient<DB>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export default async function handler(req: NextRequest, res: any) {
  const body = req.body as any;
  const apiKey = body.apiKey;
  const recruiterId = body.recruiterId;

  if (!apiKey) {
    res.status(400).send('apiKey or recruiterId is missing');
  }
  console.log(apiKey);

  const encryptedApiKey = encrypt(apiKey, process.env.ENCRYPTION_KEY);

  axios.post(process.env.ASHBY_SYNC_URL, {
    recruiter_id: recruiterId,
    ashby_key: encryptedApiKey,
  });

  console.log(encryptedApiKey);

  const { data, error } = await supabase
    .from('integrations')
    .update({ ashby_key: encryptedApiKey })
    .eq('recruiter_id', recruiterId)
    .select();

  if (!error) {
    res.status(200).send(data);
  } else {
    res.status(400).send(error);
  }
}
