'use client';

import {
  createContext,
  memo,
  type PropsWithChildren,
  useCallback,
  useMemo,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useTenant } from '@/company/hooks';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import {
  useWorkflowCreate,
  useWorkflowDelete,
  useWorkflowMutations,
  useWorkflowUpdate,
} from '@/queries/workflow';
import { SafeObject } from '@/utils/safeObject';

import { useWorkflowsJobFilter } from '../hooks/useWorkflowsJobFilter';
import { useWorkflowsRead } from '../hooks/useWorkflowsRead';

const useWorkflowsContext = () => {
  const { recruiter_id } = useTenant();
  const workflows = useWorkflowsRead();
  const { mutate: createWorkflowMutation } = useWorkflowCreate();
  const workflowJobFilter = useWorkflowsJobFilter();
  const { mutate: deleteWorkflowMutation } = useWorkflowDelete();
  const workflowUpdate = useWorkflowUpdate();
  const workflowMutations = useWorkflowMutations();

  const handleCreateWorkflow = useCallback(
    (
      payload: Omit<
        Parameters<typeof createWorkflowMutation>[0]['payload'],
        'recruiter_id'
      >,
    ) => {
      const id = uuidv4();
      createWorkflowMutation({
        id,
        recruiter_id,
        payload,
      });
    },
    [workflows],
  );

  const handleDeleteWorkflow = useCallback(
    (payload: Parameters<typeof deleteWorkflowMutation>[0]) => {
      deleteWorkflowMutation(payload);
    },
    [workflows],
  );

  const { devlinkProps: getDevlinkProps, checkPermissions } =
    useRolesAndPermissions();

  const manageWorkflow = useMemo(
    () => checkPermissions(['manage_workflow']),
    [checkPermissions],
  );

  const devlinkProps = useMemo(
    () => getDevlinkProps(['manage_workflow']),
    [getDevlinkProps],
  );

  const mutations = SafeObject.values(workflowMutations)
    .flatMap((values) => values)
    .map(({ id }) => id);

  return {
    workflows,
    workflowUpdate,
    workflowMutations: mutations,
    workflowJobFilter,
    handleCreateWorkflow,
    handleDeleteWorkflow,
    devlinkProps,
    manageWorkflow,
  };
};

export const WorkflowsContext = createContext<
  ReturnType<typeof useWorkflowsContext> | undefined
>(undefined);

export const WorkflowsProvider = memo((props: PropsWithChildren) => {
  const value = useWorkflowsContext();
  return (
    <WorkflowsContext.Provider value={value}>
      {props.children}
    </WorkflowsContext.Provider>
  );
});
WorkflowsProvider.displayName = 'WorkflowsProvider';
