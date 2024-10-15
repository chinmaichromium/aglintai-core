import { toast } from '@components/hooks/use-toast';
import { useParams } from 'next/navigation';

import { api } from '@/trpc/client';
import { Update } from '@/routers/candidate_availability/update';

export const useCandidateAvailabilityMeetings = () => {
  const { data: candidateRequestAvailability } = useCandidateAvailabilityData();
  const interview_sessions =
    candidateRequestAvailability?.request_session_relation
      ? candidateRequestAvailability?.request_session_relation.map(
          (ele) => ele.interview_session,
        )
      : [];
  const sessions_ids = interview_sessions.map((ele) => ele?.id ?? '');

  return api.candidate_availability.getMeetings.useQuery({
    sessions_ids: sessions_ids,
  });
};

export const useCandidateAvailabilityData = () => {
  const params = useParams();
  const candidate_request_availability_id = params?.request_id as string;
  return api.candidate_availability.getCandidateAvailabilityData.useSuspenseQuery(
    {
      candidate_request_availability_id: candidate_request_availability_id,
    },
  )[1];
};

export const useUpdateCandidateAvailability = () => {
  const utils = api.useUtils();
  const updateMutation = api.candidate_availability.update.useMutation({
    onSuccess: () => {
      utils.candidate_availability.getCandidateAvailabilityData.invalidate();
    },
    onError: (e) => {
      toast({
        title: e.shape?.message,
      });
    },
  });
  const updateRequestAvailability = async (payload: Update['input']) => {
    return await updateMutation.mutateAsync({
      ...payload,
    });
  };
  return { ...updateMutation, updateRequestAvailability };
};
export const useCandidateAvailabilityScheduleDMeetings = () => {
  const { data: candidateRequestAvailability } = useCandidateAvailabilityData();
  const application_id = candidateRequestAvailability
    ? candidateRequestAvailability.application_id
    : '';
  return api.candidate_availability.getScheduledMeetings.useQuery(
    {
      application_id: application_id,
    },
    {
      enabled: !!application_id,
    },
  );
};
