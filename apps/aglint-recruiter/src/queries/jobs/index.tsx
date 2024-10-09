import type { DatabaseTableUpdate } from '@aglint/shared-types';
import { useMutation } from '@tanstack/react-query';

import { api } from '@/trpc/client';
import { supabase } from '@/utils/supabase/client';
import toast from '@/utils/toast';

export const useJobsSync = () => {
  return api.ats.sync.jobs.useMutation({
    onSuccess: () => toast.success('Synced successfully'),
    onError: () => toast.error('Synced failed'),
  });
};

export const useJobUpdate = () => {
  const mutation = useMutation({
    mutationFn: (job: Parameters<typeof updateJob>[0]) => updateJob(job),
    onError: () => toast.error('Unable to update job'),
  });
  return mutation;
};

export const useJobDelete = () => {
  const mutation = useMutation({
    mutationFn: (id: string) => deleteJob(id),
    onError: () => toast.error('Unable to delete job'),
    onSuccess: () => toast.success('Job deleted successfully.'),
  });
  return mutation;
};

const updateJob = async (job: DatabaseTableUpdate['public_jobs']) => {
  const { error: e1 } = await supabase
    .from('public_jobs')
    .update(job)
    .eq('id', job.id!);

  if (e1) throw new Error(e1.message);
};

const deleteJob = async (id: string) => {
  const { error } = await supabase.from('public_jobs').delete().eq('id', id!);
  if (error) throw new Error(error.message);
};
