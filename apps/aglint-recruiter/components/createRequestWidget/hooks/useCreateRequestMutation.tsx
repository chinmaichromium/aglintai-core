import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { api } from '@/trpc/client';
import toast from '@/utils/toast';

import { useCreateRequest } from './useCreateRequest';
import { useCreateRequestActions } from './useCreateRequestActions';

export const useCreateRequestMutation = () => {
  const {
    recruiterUser: { user_id },
  } = useAuthDetails();
  const note = useCreateRequest((state) => state.note);
  const dates = useCreateRequest((state) => state.dates);
  const selections = useCreateRequest((state) => state.selections);
  const { onOpenChange } = useCreateRequestActions();
  const mutation = api.requests.create.create_request.useMutation({
    onError: () => toast.error('Unable to create request'),
    onSuccess: () => {
      toast.success('Successfully created request');
      onOpenChange(false);
    },
  });

  const application = selections.candidate.id;
  const sessions = selections.schedules.map(({ id }) => id);
  const request = {
    assigner_id: user_id,
    assignee_id: selections.assignees.id,
    note,
    priority: 'standard' as const,
    schedule_end_date: dates.end_date,
    schedule_start_date: dates.start_date,
    type: selections.requestType.id,
  };
  const payload = {
    application,
    sessions,
    request,
  };
  const mutate = () => mutation.mutate(payload);
  const mutateAsync = async () => {
    try {
      await mutation.mutateAsync(payload);
    } catch {
      //
    }
  };
  return { ...mutation, mutate, mutateAsync };
};
