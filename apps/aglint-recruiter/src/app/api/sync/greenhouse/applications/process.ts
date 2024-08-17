import { DatabaseTableInsert } from '@aglint/shared-types';

import { supabaseAdmin } from '@/src/utils/supabase/supabaseAdmin';

import { GreenhouseJobStagesAPI } from '../types';
import { getGreenhouseCandidates, getGreenhouseJobPlan } from '../util';

const MAX_EMAILS_PER_BATCH = 100;

export async function syncGreenhouseApplication(
  key: string,
  job_id: string,
  remote_id: number,
  recruiter_id: string,
  last_sync?: string,
) {
  return syncJobApplications(
    { job_id, remote_id, recruiter_id, last_sync },
    key,
  );
}

export async function syncJobApplications(
  post: {
    job_id: string;
    remote_id: number;
    recruiter_id: string;
    last_sync?: string;
  },
  apiKey: string,
) {
  const refCandidates = await fetchAllCandidates(post, apiKey);

  const emails = [
    ...new Set(
      refCandidates.map((candidate) => {
        return candidate.email;
      }),
    ),
  ];
  const checkCandidates = await processEmailsInBatches(
    emails,
    post.recruiter_id,
  );

  //new candidates insert flow
  const uniqueRefCandidates = refCandidates.filter((candidate) => {
    return !checkCandidates.some((checkCand) => {
      return checkCand.email === candidate.email;
    });
  });

  //email which are not their in candidates table we are inserting them
  const insertableCandidates = uniqueRefCandidates.map((candidate) => {
    return {
      first_name: candidate.first_name,
      last_name: candidate.last_name,
      email: candidate.email,
      linkedin: candidate.linkedin,
      phone: candidate.phone,
      id: crypto.randomUUID(),
      recruiter_id: post.recruiter_id,
    };
  });

  //in that check duplicate email are their or not
  const dbCandidates = insertableCandidates.filter((candidate, index, self) => {
    // Use the Array.findIndex() method to check if the current email address
    // exists in the array at a previous index.
    const isUnique =
      candidate.email &&
      self.findIndex((c) => c.email === candidate.email) === index;

    // Return true if the email is unique and not null, otherwise false.
    return isUnique;
  });

  const { data: newCandidates, error: errorCandidates } = await supabaseAdmin
    .from('candidates')
    .insert(dbCandidates)
    .select();

  if (!errorCandidates) {
    const allCandidates = [...newCandidates, ...checkCandidates];

    const dbApplications = refCandidates
      .map((ref) => {
        const matchingCandidate = allCandidates.find(
          (candidate) => candidate.email === ref.email,
        );

        if (matchingCandidate && matchingCandidate.id) {
          return {
            applied_at: ref.created_at,
            candidate_id: matchingCandidate.id,
            job_id: post.job_id,
            id: ref.application_id,
            is_resume_fetching: true,
            source: 'greenhouse',
            remote_id: ref.id, //greenhouse candidate id
            remote_data: ref,
          } as DatabaseTableInsert['applications'];
        } else {
          return null;
        }
      })
      .filter(Boolean);

    await supabaseAdmin
      .from('applications')
      .upsert(dbApplications, { onConflict: 'remote_id' })
      .throwOnError();
  }
  //new candidates insert flow
}

async function fetchAllCandidates(
  post: {
    job_id: string;
    remote_id: number;
    recruiter_id: string;
    last_sync?: string;
  },
  apiKey: string,
) {
  let allCandidates = [];
  let hasMore = true;
  let page = 1;
  while (hasMore) {
    try {
      const response = await getGreenhouseCandidates(apiKey, {
        ats_job_id: post.remote_id,
        page: page,
        last_sync: post.last_sync,
      });
      if (response) {
        allCandidates = allCandidates.concat(response);
        if (response.length > 0) {
          hasMore = true;
          page = page + 1;
        } else {
          hasMore = false;
        }
      } else {
        hasMore = false; // Exit the loop if there are no more records
      }
    } catch (error) {
      hasMore = false; // Exit the loop in case of an error
    }
  }

  return allCandidates
    .map((candidate) => {
      if (candidate.email_addresses[0]?.value) {
        return {
          created_at: candidate.created_at,
          first_name: candidate.first_name,
          last_name: candidate.last_name,
          email: candidate.email_addresses[0]?.value,
          job_title: candidate.title,
          company: candidate.company,
          profile_image: candidate.photo_url,
          linkedin: extractLinkedInURLGreenhouse(
            candidate.website_addresses[0]?.value || '',
          ),
          phone: candidate.phone_numbers[0]?.value,
          resume:
            candidate.attachments?.filter((res) => res.type == 'resume')
              ?.length != 0
              ? candidate.attachments.filter((res) => res.type == 'resume')[0]
                  ?.url
              : candidate.attachments[0]?.url,
          job_id: post.job_id,
          application_id: crypto.randomUUID(), //our job application id
          id: candidate.id, //greenhouse candidate id
        };
      } else {
        return null;
      }
    })
    .filter(Boolean);
}

export function extractLinkedInURLGreenhouse(item: string): string {
  if (
    item.startsWith('http://linkedin.com') ||
    item.startsWith('https://linkedin.com')
  ) {
    return item; // Return the LinkedIn URL
  } else {
    return '';
  }
}

async function processEmailsInBatches(emails: string[], recruiter_id: string) {
  let allCandidates = [];
  for (let i = 0; i < emails.length; i += MAX_EMAILS_PER_BATCH) {
    const emailBatch = emails.slice(i, i + MAX_EMAILS_PER_BATCH);
    const candidate = await processBatch(emailBatch, recruiter_id);
    allCandidates = [...allCandidates, ...candidate];
  }
  return allCandidates;
}

async function processBatch(emailBatch: string[], recruiter_id: string) {
  const { data: checkCandidates, error: errorCheck } = await supabaseAdmin
    .from('candidates')
    .select()
    .in('email', emailBatch)
    .eq('recruiter_id', recruiter_id);

  if (!errorCheck) {
    return checkCandidates;
  } else {
    return [];
  }
}

export async function syncGreenhouseJobPlan(
  prop: {
    recruiter_id: string;
    ats_job_id: number;
    public_job_id: string;
  },
  key?: string,
) {
  const plans = await getGreenhouseJobPlan(key, prop.ats_job_id);
  return mapSaveInterviewPlans(plans, prop.public_job_id);
}

// eslint-disable-next-line no-unused-vars

async function mapSaveInterviewPlans(
  data: GreenhouseJobStagesAPI,
  job_id: string,
) {
  const temp_plans: DatabaseTableInsert['interview_plan'][] = data.map(
    (item, index) => {
      return {
        name: item.name,
        job_id: job_id,
        order: index + 1,
      };
    },
  );
  const plans = (
    await supabaseAdmin
      .from('interview_plan')
      .insert(temp_plans)
      .select('id, order')
      .throwOnError()
  ).data;
  const temp_sessions: DatabaseTableInsert['interview_session'][] = plans
    .map((plan) => {
      return data[plan.order - 1]?.interviews.map((session, index) => {
        return {
          name: session.name,
          interview_plan_id: plan.id,
          session_duration: session.estimated_minutes,
          session_order: index,
          session_type: 'panel',
        } as DatabaseTableInsert['interview_session'];
      });
    })
    .flat();
  await supabaseAdmin
    .from('interview_session')
    .insert(temp_sessions)
    .throwOnError();
  return true;
}
