/* eslint-disable no-console */
import {
  type DatabaseTable,
  type DatabaseTableInsert,
} from '@aglint/shared-types';
import axios from 'axios';
import { type NextApiRequest, type NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { type LeverApplication } from '@/jobs/components/AddJobWithIntegrations/LeverModal/types/applications';
import {
  extractLinkedInURL,
  splitFullName,
} from '@/jobs/components/AddJobWithIntegrations/utils';
import { processEmailsInBatches } from '@/utils/processEmailsInBatches';
import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

import { decrypt } from '../decryptApiKey';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const jobId = req.body.job_id;
  let previousApplications: DatabaseTable['applications'][] = [];

  if (!jobId) {
    console.log('No job id found');
    res.status(400).send('No job id found');
    return;
  }
  const supabaseAdmin = getSupabaseServer();

  const job = (
    await supabaseAdmin
      .from('public_jobs')
      .select(
        '*,company:recruiter!public_jobs_recruiter_id_fkey(integrations(*))',
      )
      .eq('id', jobId)
      .single()
      .throwOnError()
  ).data!;

  const ats_job_id = job.remote_id;
  const recruiter_id = job.recruiter_id;

  if (!ats_job_id) {
    console.log('No ats job id found');
    res.status(400).send('No ats job id found');
    return;
  }

  const apiKey = decrypt(
    job?.company?.integrations?.lever_key ?? '',
    process.env.ENCRYPTION_KEY,
  );

  previousApplications = (
    await supabaseAdmin
      .from('applications')
      .select('*')
      .eq('job_id', jobId)
      .throwOnError()
  ).data!;

  const leverApplications = await fetchAllOpporunities(apiKey, ats_job_id);

  const newApplications: LeverApplication[] = [];
  leverApplications.forEach(async (appi) => {
    // Check if app.id does not exist in previousApplications

    const isNew =
      previousApplications?.filter((p) => p.remote_id === appi.id).length === 0;

    if (isNew) {
      // Push the new application to the newApplications array
      newApplications.push(appi);
    }
  });

  if (newApplications.length === 0) {
    console.log('No new applications found');
    return res.status(200).send('No new applications found');
  }

  // for creating lever job reference
  const refCandidates = newApplications.map((cand) => {
    return {
      first_name: splitFullName(cand.name).firstName,
      last_name: splitFullName(cand.name).lastName,
      email: cand.emails[0],
      linkedin: extractLinkedInURL(cand.links || []),
      phone: cand.phones[0]?.value,
      job_id: jobId,
      application_id: uuidv4(), //our job application id
      id: cand.id, //lever opportunity id
      ref: cand,
    };
  });
  // for creating lever job reference

  const emails = [
    ...new Set(
      refCandidates.map((cand) => {
        return cand.email;
      }),
    ),
  ];

  const checkCandidates =
    (await processEmailsInBatches(emails, recruiter_id, supabaseAdmin)) || [];

  //new candidates insert flow
  const uniqueRefCandidates = refCandidates.filter((cand) => {
    return !checkCandidates.some((checkCand) => {
      return checkCand.email === cand.email;
    });
  });

  const insertableCandidates = uniqueRefCandidates.map((cand) => {
    return {
      first_name: cand.first_name,
      last_name: cand.last_name,
      email: cand.email,
      linkedin: cand.linkedin,
      phone: cand.phone,
      id: uuidv4(),
      recruiter_id,
    };
  });

  const dbCandidates = insertableCandidates.filter((cand, index, self) => {
    // Use the Array.findIndex() method to check if the current email address
    // exists in the array at a previous index.
    const isUnique = self.findIndex((c) => c.email === cand.email) === index;
    return isUnique;
  });

  const { data: newCandidates, error: errorCandidates } = await supabaseAdmin
    .from('candidates')
    .insert(dbCandidates)
    .select();

  if (!errorCandidates) {
    const allCandidates = [...newCandidates, ...checkCandidates];
    const dbApplications = refCandidates.map((ref) => {
      return {
        candidate_id: allCandidates.filter(
          (cand) => cand.email === ref.email,
        )[0].id,
        job_id: jobId,
        id: ref.application_id,
        source: 'lever',
        remote_id: ref.id,
        remote_data: ref.ref,
        recruiter_id,
        is_resume_fetching: true,
      } as DatabaseTableInsert['applications'];
    });

    const { error } = await supabaseAdmin
      .from('applications')
      .insert(dbApplications);

    if (!error) {
      return res.status(200).send('success');
    } else {
      console.log('error while inserting into applications');
    }
  }
  //new candidates insert flow
}

const fetchAllOpporunities = async (apiKey: string, postingId: string) => {
  let allApps: LeverApplication[] = [];
  let hasMore = true;
  let next = 0;

  while (hasMore) {
    let url;
    if (next === 0) {
      url = `https://api.lever.co/v1/opportunities?posting_id=${postingId}`;
    } else {
      url = `https://api.lever.co/v1/opportunities?posting_id=${postingId}&offset=${next}`;
    }

    try {
      const response = await axios.get(url, {
        auth: {
          username: apiKey,
          password: '',
        },
      });
      if (response.data && response.data.data) {
        allApps = allApps.concat(response.data.data);
        if (response.data.hasNext) {
          next = response.data.next;
        } else {
          hasMore = false;
        }
      } else {
        hasMore = false;
      }
    } catch (error) {
      hasMore = false; // Exit the loop in case of an error
    }
  }
  return allApps as LeverApplication[];
};
