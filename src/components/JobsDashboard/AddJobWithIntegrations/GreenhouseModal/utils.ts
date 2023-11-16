import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { supabase } from '@/src/utils/supabaseClient';
import toast from '@/src/utils/toast';

import { POSTED_BY } from '../utils';

export const createJobApplications = async (selectedLeverPostings, apiKey) => {
  const applications = await Promise.all(
    selectedLeverPostings.map(async (post) => {
      const fetchedCandidates = await fetchAllCandidates(post.job_id, apiKey);

      // for creating lever job reference
      const refCandidates = fetchedCandidates
        .map((cand) => {
          if (cand.email_addresses[0]?.value) {
            return {
              first_name: cand.first_name,
              last_name: cand.last_name,
              email: cand.email_addresses[0]?.value,
              job_title: cand.title,
              company: cand.company,
              profile_image: cand.photo_url,
              linkedin: extractLinkedInURLGreenhouse(
                cand.website_addresses[0]?.value || '',
              ),
              phone: cand.phone_numbers[0]?.value,
              resume: cand.attachments[0]?.url,
              job_id: post.public_job_id,
              application_id: uuidv4(), //our job application id
              id: cand.id, //greenhouse candidate id
            };
          } else {
            return null;
          }
        })
        .filter(Boolean); // Remove null entries;

      // // for creating lever job reference

      const emails = [
        ...new Set(
          refCandidates.map((cand) => {
            return cand.email;
          }),
        ),
      ];

      const checkCandidates = await processEmailsInBatches(emails);

      //new candidates insert flow
      const uniqueRefCandidates = refCandidates.filter((cand) => {
        return !checkCandidates.some((checkCand) => {
          return checkCand.email === cand.email;
        });
      });
      //email which are not their in candidates table we are inserting them
      const insertableCandidates = uniqueRefCandidates.map((cand) => {
        return {
          first_name: cand.first_name,
          last_name: cand.last_name,
          email: cand.email,
          job_title: cand.job_title,
          company: cand.company,
          linkedin: cand.linkedin,
          phone: cand.phone,
          id: uuidv4(),
          recruiter_id: post.recruiter_id,
        };
      });

      //in that check duplicate email are their or not
      const dbCandidates = insertableCandidates.filter((cand, index, self) => {
        // Use the Array.findIndex() method to check if the current email address
        // exists in the array at a previous index.
        const isUnique =
          cand.email && self.findIndex((c) => c.email === cand.email) === index;

        // Return true if the email is unique and not null, otherwise false.
        return isUnique;
      });

      const { data: newCandidates, error: errorCandidates } = await supabase
        .from('candidates')
        .insert(dbCandidates)
        .select();

      if (!errorCandidates) {
        const allCandidates = [...newCandidates, ...checkCandidates];

        const dbApplications = refCandidates.map((ref) => {
          const matchingCandidate = allCandidates.find(
            (cand) => cand.email === ref.email,
          );

          if (matchingCandidate && matchingCandidate.id) {
            return {
              candidate_id: matchingCandidate.id,
              job_id: post.public_job_id,
              application_id: ref.application_id,
            };
          } else {
            return null;
          }
        });

        const { error } = await supabase
          .from('job_applications')
          .insert(dbApplications)
          .select();

        if (!error) {
          const referenceObj = refCandidates.map((ref) => {
            return {
              application_id: ref.application_id,
              posting_id: post.id,
              greenhouse_id: ref.id,
              public_job_id: post.public_job_id,
              resume: ref.resume,
            };
          });
          await createReference(referenceObj);
        } else {
          toast.error(
            'Sorry unable to import. Please try again later or contact support.',
          );
        }
      }
      //new candidates insert flow
    }),
  );
  return applications;
};

const fetchAllCandidates = async (post_id, apiKey) => {
  let allCandidates = [];
  let hasMore = true;
  let page = 1;

  while (hasMore) {
    try {
      const response = await axios.post('/api/greenhouse/getCandidates', {
        job_id: post_id,
        page: page,
        apiKey: apiKey,
      });

      if (response.data && response.data) {
        allCandidates = allCandidates.concat(response.data);
        if (response.data.length > 0) {
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

  return allCandidates;
};

export const fetchAllJobs = async (apiKey) => {
  //pagination need to done
  let allJobs = [];
  let hasMore = true;
  let page = 1;

  while (hasMore) {
    try {
      const response = await axios.post('/api/greenhouse/getPostings', {
        apiKey: apiKey,
        isInitial: false,
        page: page,
      });

      if (response.status == 200 && response.data) {
        allJobs = allJobs.concat(response.data);
        if (response.data.length == 500) {
          hasMore = true;
          page = page + 1;
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

  return allJobs;
};

export const createJobObject = async (selectedLeverPostings, recruiter) => {
  const dbJobs = selectedLeverPostings.map((post) => {
    return {
      location: post.location.name,
      job_title: post.title,
      description: post.content,
      email_template: recruiter.email_template,
      // department: post.categories.department || '',
      recruiter_id: recruiter.id,
      posted_by: POSTED_BY.GREENHOUSE,
      job_type: 'fulltime',
      workplace_type: 'onsite',
      company: recruiter.name,
      skills: [],
      status: 'published',
      parameter_weights: {
        skills: 30,
        project: 10,
        education: 20,
        experience: 30,
        certifications: 10,
      },
    };
  });
  return dbJobs;
};

export function getLeverStatusColor(state) {
  return state == 'published'
    ? '#228F67'
    : state == 'closed'
    ? '#D93F4C'
    : state == 'internal'
    ? '#ED8F1C'
    : '#d93f4c';
}

function extractLinkedInURLGreenhouse(item) {
  // Check if the item starts with "http://linkedin.com" or "https://linkedin.com"
  if (
    item.startsWith('http://linkedin.com') ||
    item.startsWith('https://linkedin.com')
  ) {
    return item; // Return the LinkedIn URL
  } else {
    return '';
  }
}

export const createReference = async (reference) => {
  const { data, error } = await supabase
    .from('greenhouse_reference')
    .insert(reference)
    .select();

  if (error) {
    toast.error(
      'Sorry unable to import. Please try again later or contact support.',
    );
  } else {
    return data;
  }
};

const MAX_EMAILS_PER_BATCH = 100; // adjust this number based on your requirements

const processBatch = async (emailBatch) => {
  const { data: checkCandidates, error: errorCheck } = await supabase
    .from('candidates')
    .select()
    .in('email', emailBatch);

  if (!errorCheck) {
    return checkCandidates;
  }
};

const processEmailsInBatches = async (emails) => {
  let allCandidates = [];
  for (let i = 0; i < emails.length; i += MAX_EMAILS_PER_BATCH) {
    const emailBatch = emails.slice(i, i + MAX_EMAILS_PER_BATCH);
    const cand = await processBatch(emailBatch);
    allCandidates = [...allCandidates, ...cand];
  }
  return allCandidates;
};
