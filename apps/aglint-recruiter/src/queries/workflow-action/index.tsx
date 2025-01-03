import type {
  DatabaseTableInsert,
  DatabaseTableUpdate,
} from '@aglint/shared-types';
import {
  useMutation,
  useMutationState,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { type WorkflowAction } from '@/types/workflow.types';
import { supabase } from '@/utils/supabase/client';
import toast from '@/utils/toast';

import { GC_TIME } from '..';
import { workflowActionMutationKeys, workflowActionQueryKeys } from './keys';

type ContextAction = 'update' | 'create' | 'delete';

type Context = { action: ContextAction };

export const useWorkflowActions = (args: WorkflowActionKeys) => {
  const { queryKey } = workflowActionQueryKeys.workflowAction(args);
  return useQuery({
    queryKey,
    queryFn: () => getWorkflowActions(args),
    enabled: !!args.workflow_id,
    gcTime: args.workflow_id ? GC_TIME : 0,
  });
};
export type WorkflowActionKeys = {
  workflow_id: string;
};
const getWorkflowActions = async ({ workflow_id }: WorkflowActionKeys) => {
  const { data, error } = await supabase
    .from('workflow_action')
    .select('*')
    .order('order', { ascending: true })
    .eq('workflow_id', workflow_id);
  if (error) throw new Error(error.message);
  return data;
};

export const useWorkflowActionMutations = (args: WorkflowActionKeys) => {
  const { mutationKey } = workflowActionMutationKeys.workflowAction(args);
  return useMutationState({
    filters: {
      mutationKey,
      status: 'pending',
      predicate: (query) => {
        const context = query.state.context as Context;
        return context?.action === 'delete';
      },
    },
    select: (mutation) => mutation.state.variables as Mutations,
  });
};
type Mutations =
  | DeleteWorkflowAction
  | UpdateWorkflowAction
  | InsertWorkflowAction;

export const useWorkflowActionDelete = (args: WorkflowActionKeys) => {
  const { mutationKey } = workflowActionMutationKeys.workflowAction(args);
  const { queryKey } = workflowActionQueryKeys.workflowAction(args);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey,
    mutationFn: deleteWorkflowAction,
    onMutate: () => {
      return { action: 'delete' } as Context;
    },
    onSuccess: (_data, variables) => {
      const prevWorkflowActions =
        queryClient.getQueryData<WorkflowAction[]>(queryKey)!;
      const newWorkflowActions = structuredClone(prevWorkflowActions).reduce(
        (acc, curr) => {
          if (curr.id !== variables.id) acc.push(curr);
          return acc;
        },
        [] as WorkflowAction[],
      );
      queryClient.setQueryData<WorkflowAction[]>(queryKey, newWorkflowActions);
    },
    onError: () => toast.error('Unable to delete workflow'),
  });
};
type DeleteWorkflowAction = {
  id: string;
};
const deleteWorkflowAction = async ({ id }: DeleteWorkflowAction) => {
  const { error } = await supabase
    .from('workflow_action')
    .delete()
    .eq('id', id);
  if (error) throw new Error(error.message);
};

export const useWorkflowActionUpdate = (args: WorkflowActionKeys) => {
  const { mutationKey } = workflowActionMutationKeys.workflowAction(args);
  const { queryKey } = workflowActionQueryKeys.workflowAction(args);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: UpdateWorkflowAction) =>
      updateWorkflowAction(payload),
    mutationKey,
    onMutate: (variables) => {
      const previousWorkflowActions =
        queryClient.getQueryData<WorkflowAction[]>(queryKey)!;
      const newWorkflowActions = structuredClone(
        previousWorkflowActions,
      ).reduce((acc, curr) => {
        if (curr.id === variables.id) {
          const newPayload = structuredClone({
            ...curr,
            ...variables,
          }) as WorkflowAction;
          acc.push(newPayload);
        } else acc.push(curr);
        return acc;
      }, [] as WorkflowAction[]);
      queryClient.setQueryData<WorkflowAction[]>(queryKey, newWorkflowActions);
      return { action: 'update' } as Context;
    },
    onError: (_error, variables) => {
      const previousWorkflowActions =
        queryClient.getQueryData<WorkflowAction[]>(queryKey);
      const newWorkflowActions = structuredClone(
        previousWorkflowActions,
      )!.reduce((acc, curr) => {
        if (curr.id !== variables.id) acc.push(curr);
        return acc;
      }, [] as WorkflowAction[]);
      queryClient.setQueryData<WorkflowAction[]>(queryKey, newWorkflowActions);
      toast.error('Unable to update workflow');
    },
  });
};
type UpdateWorkflowAction = DatabaseTableUpdate['workflow_action'];
const updateWorkflowAction = async (payload: UpdateWorkflowAction) => {
  const { data, error } = await supabase
    .from('workflow_action')
    .update(payload)
    .eq('id', payload.id!)
    .select('*');
  if (error) throw new Error(error.message);
  return data;
};

export const useWorkflowActionCreate = (args: WorkflowActionKeys) => {
  const { mutationKey } = workflowActionMutationKeys.workflowAction(args);
  const { queryKey } = workflowActionQueryKeys.workflowAction(args);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createWorkflowAction,
    mutationKey,
    onMutate: (payload) => {
      const previousWorkflowActions =
        queryClient.getQueryData<WorkflowAction[]>(queryKey);
      const newWorkflowActions = structuredClone(previousWorkflowActions)!;
      newWorkflowActions.push(payload as WorkflowAction);
      queryClient.setQueryData<WorkflowAction[]>(queryKey, newWorkflowActions);
      return { action: 'create' } as Context;
    },
    onError: (_error, variables) => {
      toast.error('Unable to create action');
      const previousWorkflowActions =
        queryClient.getQueryData<WorkflowAction[]>(queryKey)!;
      const newWorkflowActions = structuredClone(
        previousWorkflowActions,
      ).reduce((acc, curr) => {
        if (curr.id !== variables.id) acc.push(curr);
        return acc;
      }, [] as WorkflowAction[]);
      queryClient.setQueryData<WorkflowAction[]>(queryKey, newWorkflowActions);
      toast.error('Unable to create workflow');
    },
    onSuccess: (data, variables) => {
      const previousWorkflowActions =
        queryClient.getQueryData<WorkflowAction[]>(queryKey);
      const newWorkflowActions = structuredClone(
        previousWorkflowActions,
      )!.reduce((acc, curr) => {
        if (curr.id === variables.id) acc.push(data);
        else acc.push(curr);
        return acc;
      }, [] as WorkflowAction[]);
      queryClient.setQueryData<WorkflowAction[]>(queryKey, newWorkflowActions);
    },
  });
};
type InsertWorkflowAction = DatabaseTableInsert['workflow_action'];
const createWorkflowAction = async (payload: InsertWorkflowAction) => {
  const { data, error } = await supabase
    .from('workflow_action')
    .insert(payload)
    .select('*')
    .single();
  if (error) throw new Error(error.message);
  return data;
};
