/* eslint-disable no-console */
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);

export default async function handler(req, res) {
  const application_id = req.body.application_id;
  const status = req.body.status;
  try {
    const { data, error } = await supabase
      .from('applications')
      .update({
        status,
      })
      .eq('id', application_id)
      .select();
    if (!error) {
      return res.status(200).send(data[0]);
    } else {
      return [];
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
}
