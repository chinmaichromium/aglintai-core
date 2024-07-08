import { DB } from '@aglint/shared-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useJob } from '@/src/context/JobContext';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import { jobQueries } from '../job';
import { interviewSessionMutationKeys } from './keys';
import {
  InterviewPlansType,
  InterviewSessionRelationType,
  InterviewSessionUpdate,
} from './types';

export const useCreateInterviewPlan = () => {
  const queryClient = useQueryClient();
  const { job_id } = useJob();
  const id = job_id;
  const { queryKey } = jobQueries.interview_plans({ id });
  const mutation = useMutation({
    mutationFn: async () => {
      await createInterviewPlan(id);
      await queryClient.invalidateQueries({ queryKey });
    },
    onError: () => {
      toast.error('Unable to create interview plan.');
    },
  });
  return mutation;
};

export const useAddInterviewSession = () => {
  const queryClient = useQueryClient();
  const { job_id } = useJob();
  const id = job_id;
  const { queryKey } = jobQueries.interview_plans({ id });
  const mutation = useMutation({
    mutationFn: async (args: CreateInterviewSession) => {
      await createInterviewSession(args);
      await Promise.allSettled([queryClient.invalidateQueries({ queryKey })]);
    },
    onError: () => {
      toast.error('Unable to create interview session.');
    },
  });
  return mutation;
};

export const useUpdateInterviewSession = () => {
  const queryClient = useQueryClient();
  const { job_id } = useJob();
  const id = job_id;
  const { queryKey } = jobQueries.interview_plans({ id });
  const { mutationKey } = interviewSessionMutationKeys.update();
  const mutation = useMutation({
    mutationKey,
    mutationFn: async (args: UpdateInterviewSession) => {
      await updateInterviewSession(args);
      await queryClient.invalidateQueries({ queryKey });
    },
    onError: () => {
      toast.error('Unable to update interview session.');
    },
  });
  return mutation;
};

export const useDeleteInterviewSession = () => {
  const queryClient = useQueryClient();
  const { job_id } = useJob();
  const id = job_id;
  const { queryKey } = jobQueries.interview_plans({ id });
  const { mutationKey } = interviewSessionMutationKeys.delete();

  const mutation = useMutation({
    mutationKey,
    mutationFn: async (args: DeleteInterviewSession) => {
      await deleteInterviewSession(args);
      await Promise.allSettled([queryClient.invalidateQueries({ queryKey })]);
    },
    onError: () => {
      toast.error('Unable to delete interview session.');
    },
  });
  return mutation;
};

export const useEditInterviewSession = () => {
  const queryClient = useQueryClient();
  const { job_id } = useJob();
  const id = job_id;
  const { queryKey } = jobQueries.interview_plans({ id });
  const { mutationKey } = interviewSessionMutationKeys.update();
  const mutation = useMutation({
    mutationKey,
    mutationFn: async (args: EditInterviewSession) => {
      await editInterviewSession(args);
      await queryClient.invalidateQueries({ queryKey });
    },
    onError: () => {
      toast.error('Unable to update interview session.');
    },
  });
  return mutation;
};

export const useAddDebriefSession = () => {
  const queryClient = useQueryClient();
  const { job_id } = useJob();
  const id = job_id;
  const { queryKey } = jobQueries.interview_plans({ id });

  const mutation = useMutation({
    mutationFn: async (args: CreateDebriefSession) => {
      await createDebriefSession(args);
      await Promise.allSettled([queryClient.invalidateQueries({ queryKey })]);
    },
    onError: () => {
      toast.error('Unable to create debrief session.');
    },
  });
  return mutation;
};

export const useEditDebriefSession = () => {
  const queryClient = useQueryClient();
  const { job_id } = useJob();
  const id = job_id;
  const { queryKey } = jobQueries.interview_plans({ id });
  const { mutationKey } = interviewSessionMutationKeys.update();
  const mutation = useMutation({
    mutationKey,
    mutationFn: async (args: UpdateDebriefSession) => {
      await updateDebriefSession(args);
      await queryClient.invalidateQueries({ queryKey });
    },
    onError: () => {
      toast.error('Unable to update debrief session.');
    },
  });
  return mutation;
};

export const useReorderInterviewSessions = () => {
  const queryClient = useQueryClient();
  const { job_id } = useJob();
  const id = job_id;
  const { queryKey } = jobQueries.interview_plans({ id });
  const mutation = useMutation({
    mutationFn: async (args: {
      updatedInterviewSessions: InterviewPlansType['interview_session'];
      interviewPlanId: string;
    }) => {
      const sessions = args.updatedInterviewSessions.map(
        ({ id, session_order }) => ({ id, session_order }),
      );
      await reorderSessions({
        sessions,
        interview_plan_id: args.interviewPlanId,
      });
      await queryClient.invalidateQueries({ queryKey });
    },
    onMutate: async (payload) => {
      await queryClient.cancelQueries({ queryKey });
      const oldInterviewPlan =
        queryClient.getQueryData<InterviewPlansType>(queryKey);
      queryClient.setQueryData<InterviewPlansType>(queryKey, {
        ...oldInterviewPlan,
        interview_session: payload.updatedInterviewSessions,
      });
      return { oldInterviewPlan };
    },
    onError: (error, variables, context) => {
      toast.error('Unable to reorder sessions');
      queryClient.setQueryData<InterviewPlansType>(
        queryKey,
        context.oldInterviewPlan,
      );
    },
  });
  return mutation;
};

export type DeleteInterviewSession = Parameters<
  typeof deleteInterviewSession
>[0];

export const deleteInterviewSession = async ({
  session_id,
  interview_plan_id,
  job_id,
}: {
  session_id: string;
  interview_plan_id: string;
  job_id: string;
}) => {
  const { error } = await supabase.rpc('delete_session', {
    session_id,
    interview_plan_id,
    job_id,
  });
  if (error) throw new Error(error.message);
};

export type UpdateInterviewSession = Parameters<
  typeof updateInterviewSession
>[0];

export const updateInterviewSession = async ({
  session,
  session_id,
}: {
  session_id: string;
  session: InterviewSessionUpdate;
}) => {
  const { error } = await supabase
    .from('interview_session')
    .update(session)
    .eq('id', session_id);
  if (error) throw new Error(error.message);
};

export const createInterviewPlan = async (job_id: string) => {
  const { data, error } = await supabase
    .from('interview_plan')
    .insert({ job_id })
    .select();
  if (error) throw new Error(error.message);
  return data[0];
};

export type CreateInterviewSession = Omit<
  DB['public']['Functions']['insert_interview_session']['Args'],
  'interview_module_relation_entries'
> & {
  interview_module_relation_entries: Pick<
    InterviewSessionRelationType[number],
    'id' | 'interviewer_type' | 'training_type'
  >[];
};
export const createInterviewSession = async (args: CreateInterviewSession) => {
  const { error } = await supabase.rpc('insert_interview_session', args);
  if (error) throw new Error(error.message);
};

export type EditInterviewSession = Omit<
  DB['public']['Functions']['update_interview_session']['Args'],
  'interview_module_relation_entries'
> & {
  interview_module_relation_entries: Pick<
    InterviewSessionRelationType[number],
    'id' | 'interviewer_type' | 'training_type'
  >[];
};
export const editInterviewSession = async (args: EditInterviewSession) => {
  const { error } = await supabase.rpc('update_interview_session', args);
  if (error) throw new Error(error.message);
};

export type CreateDebriefSession =
  DB['public']['Functions']['insert_debrief_session']['Args'];

export const createDebriefSession = async (args: CreateDebriefSession) => {
  const { error } = await supabase.rpc('insert_debrief_session', args);
  if (error) throw new Error(error.message);
};

export type UpdateDebriefSession =
  DB['public']['Functions']['update_debrief_session']['Args'];

export const updateDebriefSession = async (args: UpdateDebriefSession) => {
  const { error } = await supabase.rpc('update_debrief_session', args);
  if (error) throw new Error(error.message);
};

export type ReorderSessions = Omit<
  DB['public']['Functions']['reorder_sessions']['Args'],
  'sessions'
> & {
  sessions: { id: string; session_order: number }[];
};

export const reorderSessions = async (args: ReorderSessions) => {
  const { error } = await supabase.rpc('reorder_sessions', args);
  if (error) throw new Error(error.message);
};
