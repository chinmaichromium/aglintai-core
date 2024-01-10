/* eslint-disable no-console */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_SERVICE_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);


export default async function handler(req, res) {
    const job_id = req.body.job_id;
    console.log(job_id);
    try {
        const { data, error } = await supabase
            .from('public_jobs')
            .select()
            .eq('id', job_id);
        if (!error) {
            return res.status(200).send(data[0]);
        } else {
            return [];
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
};


