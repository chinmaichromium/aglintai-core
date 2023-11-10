import { Database } from '@/src/types/schema';
import { supabase } from '@/src/utils/supabaseClient';

import {
  JobApplicationContext,
  JobApplicationsData,
  JobApplicationSections,
  NewJobApplications,
  NewJobApplicationsInsert,
} from './types';

export const initialJobApplicationsContext: JobApplicationContext = {
  applications: undefined,
  applicationDepth: undefined,
  applicationDisable: undefined,
  job: undefined,
  handleJobApplicationCreate: undefined,
  handleJobApplicationBulkCreate: undefined,
  handleJobApplicationRead: undefined,
  handleJobApplicationPaginatedRead: undefined,
  handleJobApplicationPaginatedPolling: undefined,
  handleJobApplicationUpdate: undefined,
  handleJobApplicationUIUpdate: undefined,
  handleJobApplicationDelete: undefined,
  handleJobApplicationError: undefined,
  handleJobApplicationFilter: undefined,
  searchParameters: undefined,
  initialLoad: false,
  circularScoreAnimation: undefined,
  openImportCandidates: false,
  setOpenImportCandidates: undefined,
  openManualImportCandidates: undefined,
  setOpenManualImportCandidates: undefined,
  handleUpdateJobStatus: undefined,
  updateTick: undefined,
};

export const uploadResumeDbAction = async (
  candidateId: string,
  jobId: string,
  file: any,
): Promise<{
  data: string;
  error: any;
}> => {
  const ext = file.name.slice(file.name.lastIndexOf('.'));
  const { data, error } = await supabase.storage
    .from('resume-job-post')
    .upload(`public/${candidateId}/${jobId}${ext ?? '.pdf'}`, file, {
      cacheControl: '3600',
      contentType: file.type,
    });
  if (data)
    return {
      data: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/resume-job-post/${data?.path}`,
      error: null,
    };
  return {
    data: null,
    error: error,
  };
};

export const deleteResumeDbAction = async (
  candidateId: string,
  jobId: string,
  file: any,
) => {
  const { error } = await supabase.storage
    .from('resume-job-post')
    .remove([
      `public/${candidateId}/${jobId}.${
        file.name.split(file.name.lastIndexOf('.'))[1]
      }`,
    ]);
  return { data: error ? false : true, error };
};

export const updateCandidateDbAction = async (
  candidate: Database['public']['Tables']['candidates']['Update'],
  signal?: AbortSignal,
) => {
  const timerSignal = new AbortController();
  const timeout = setTimeout(() => timerSignal.abort(), 60000);
  const { data, error } = await supabase
    .from('candidates')
    .update({ ...candidate })
    .select()
    .abortSignal(signal)
    .abortSignal(timerSignal.signal);
  clearTimeout(timeout);
  return { data, error };
};

export const deleteCandidateDbAction = async (
  candidateId: string,
  signal?: AbortSignal,
) => {
  const timerSignal = new AbortController();
  const timeout = setTimeout(() => timerSignal.abort(), 60000);
  const { error } = await supabase
    .from('candidates')
    .delete()
    .eq('id', candidateId)
    .abortSignal(signal)
    .abortSignal(timerSignal.signal);
  clearTimeout(timeout);
  return { data: error ? false : true, error };
};

export const createJobApplicationDbAction = async (
  job_id: string,
  inputData: NewJobApplications,
  signal?: AbortSignal,
) => {
  const timerSignal = new AbortController();
  const timeout = setTimeout(() => timerSignal.abort(), 60000);
  const { data, error } = await supabase
    .from('job_applications')
    .insert({ ...inputData, job_id })
    .select('*,candidates(*)')
    .abortSignal(timerSignal.signal)
    .abortSignal(signal);
  clearTimeout(timeout);
  return { data, error };
};

export const bulkCreateJobApplicationDbAction = async (
  job_id: string,
  inputData: NewJobApplicationsInsert[],
  signal?: AbortSignal,
) => {
  const timerSignal = new AbortController();
  const timeout = setTimeout(() => timerSignal.abort(), 60000);
  const applications = inputData.map((data) => {
    return { ...data, job_id };
  });
  const { data, error } = await supabase
    .from('job_applications')
    .insert(applications)
    .select()
    .abortSignal(signal);
  clearTimeout(timeout);
  return { data, error };
};

export const readJobApplicationDbAction = async (
  job_id: string,
  signal?: AbortSignal,
) => {
  const timerSignal = new AbortController();
  const timeout = setTimeout(() => timerSignal.abort(), 60000);
  const { data, error } = await supabase
    .from('job_applications')
    .select('*')
    .eq('job_id', job_id)
    .abortSignal(signal);
  clearTimeout(timeout);
  return { data, error };
};

export const updateJobApplicationDbAction = async (
  application_id: string,
  inputData: NewJobApplications,
  signal?: AbortSignal,
) => {
  const timerSignal = new AbortController();
  const timeout = setTimeout(() => timerSignal.abort(), 60000);
  const { data, error } = await supabase
    .from('job_applications')
    .update(inputData)
    .eq('application_id', application_id)
    .select('*,candidates(*)')
    .abortSignal(signal);
  clearTimeout(timeout);
  return { data, error };
};

export const bulkUpdateJobApplicationDbAction = async (
  inputData: NewJobApplications[],
  signal?: AbortSignal,
) => {
  const timerSignal = new AbortController();
  const timeout = setTimeout(() => timerSignal.abort(), 60000);
  const { error } = await supabase
    .from('job_applications')
    .upsert(inputData)
    .abortSignal(signal);

  clearTimeout(timeout);
  return { data: error ? false : true, error };
};

export const deleteJobApplicationDbAction = async (
  application_id: string,
  signal?: AbortSignal,
) => {
  const timerSignal = new AbortController();
  const timeout = setTimeout(() => timerSignal.abort(), 60000);
  const { error } = await supabase
    .from('job_applications')
    .delete()
    .eq('application_id', application_id)
    .abortSignal(signal);
  clearTimeout(timeout);
  return { data: error ? false : true, error };
};

export const getUpdatedJobStatus = (
  applicationIdSet: Set<string>,
  applications: JobApplicationsData,
  sections: {
    source: JobApplicationSections;
    destination: JobApplicationSections;
  },
): NewJobApplications[] => {
  return applications[sections.source].reduce(
    // eslint-disable-next-line no-unused-vars
    (acc: NewJobApplications[], { candidates, ...curr }) => {
      if (applicationIdSet.has(curr.application_id))
        acc.push({ ...curr, status: sections.destination });
      return acc;
    },
    [],
  );
};
