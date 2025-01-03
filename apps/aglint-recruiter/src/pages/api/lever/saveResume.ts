/* eslint-disable no-console */
import axios from 'axios';
import { type NextApiRequest, type NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

import { decrypt } from '../decryptApiKey';

type Payload = {
  application_id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const payload = req.body as Payload;

    if (payload.application_id) {
      // Supabase credentials
      const supabase = getSupabaseServer();
      const application = (
        await supabase
          .from('applications')
          .select(
            '*,public_jobs!inner(recruiter!public_jobs_recruiter_id_fkey!inner(integrations!inner(*)))',
          )
          .eq('id', payload.application_id)
      ).data!;

      const ats_app_id = application[0].remote_id;

      if (!ats_app_id) {
        console.log('No ats application id found');
        await supabase
          .from('applications')
          .update({
            processing_status: 'failed',
            retry: 2,
            is_resume_fetching: false,
          })
          .eq('id', payload.application_id);
        return res.status(400).json('No ats application id found');
      }

      if (!application[0].public_jobs.recruiter.integrations.lever_key) {
        console.log('API Key is missing');
        return res.status(400).json('API Key is missing');
      }

      const apiKey = decrypt(
        application[0].public_jobs.recruiter.integrations.lever_key,
        process.env.ENCRYPTION_KEY,
      );

      if (!apiKey) {
        console.log('API Key is missing');
        return res.status(400).json('API Key is missing');
      }

      const url = `https://api.lever.co/v1/opportunities/${ats_app_id}/resumes`;
      let fileUrl;
      const bucketName = 'resume-job-post';
      const fileId = uuidv4();

      await supabase
        .from('applications')
        .update({
          is_resume_fetching: false,
        })
        .eq('id', payload.application_id);

      try {
        axios
          .get(url, {
            auth: {
              username: apiKey,
              password: '',
            },
          })
          .then(async (response) => {
            fileUrl = response?.data?.data[0]?.file?.downloadUrl;
            //run only if we get resume url
            if (fileUrl) {
              const responseUrl = await axios.get(fileUrl, {
                responseType: 'arraybuffer', // Request binary data
                auth: {
                  username: apiKey,
                  password: '',
                },
              });

              if (responseUrl.status !== 200) {
                throw new Error(
                  `Failed to fetch file from URL: ${responseUrl.statusText}`,
                );
              }

              const extension = responseUrl.headers['content-type'];
              // Upload the file to Supabase Storage

              const { data, error: uploadError } = await supabase.storage
                .from(bucketName)
                .upload(
                  `public/${fileId}${response.data.data[0].file.ext}`,
                  responseUrl.data,
                  {
                    contentType: extension,
                    cacheControl: '3600',
                    upsert: true,
                  },
                );

              if (uploadError) {
                throw uploadError;
              }
              const fileLink = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucketName}/${data.path}`;
              if (!uploadError) {
                // Get the link to the uploaded file
                const { error: errorResume } = await supabase
                  .from('candidate_files')
                  .insert({
                    candidate_id: application[0].candidate_id!,
                    file_url: fileLink,
                    id: fileId,
                    type: 'resume',
                  })
                  .select();

                if (errorResume) {
                  console.log('errorResume', errorResume);
                  throw errorResume;
                }

                const { error: errorApp } = await supabase
                  .from('applications')
                  .update({
                    candidate_file_id: fileId,
                  })
                  .eq('id', payload.application_id);

                if (errorApp) {
                  console.log('errorApp', errorApp);
                  throw errorApp;
                }
                //first we save previous and then go for openai calls. if there are work experience in resume then only generate resume skills overview etc and add to json_resume
              }
              return res.status(200).json({
                resume: fileLink,
              });
            } else {
              await supabase
                .from('applications')
                .update({ processing_status: 'failed', retry: 2 })
                .eq('id', payload.application_id);
              console.log('no resume url from lever');
              return res.status(200).json('Resume URL is missing');
            }
          })
          .catch((error) => {
            console.log(error.message);
            res.status(400).send(error);
          });
        // Fetch the file from the URL
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
      }
    } else {
      console.log('opportunity_id is missing');
      res.status(400).json('opportunity_id or application_id is missing');
    }
  } catch (error) {
    console.log((error as Error).message);
    res.status(400).send(error);
  }
}
