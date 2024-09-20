import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import axios from '@/client/axios';
import { type ApiInterviewSessionRequest } from '@/pages/api/scheduling/application/fetchInterviewSessionByRequest';

export const useMeetingList = () => {
  const params = useParams();
  const requestId = params?.request as string;
  const queryClient = useQueryClient();
  const request_id = requestId;
  const query = useQuery({
    queryKey: ['get_meeting_list', request_id],
    refetchInterval: 30000,
    refetchOnMount: true,
    queryFn: () => getMeetingsList({ request_id }),
    gcTime: 20000,
    enabled: !!request_id,
  });

  const refetch = () =>
    queryClient.invalidateQueries({
      queryKey: ['get_meeting_list', request_id],
    });
  return { ...query, refetch };
};

export async function getMeetingsList({ request_id }: { request_id: string }) {
  const res = await axios.call<ApiInterviewSessionRequest>(
    'POST',
    '/api/scheduling/application/fetchInterviewSessionByRequest',
    {
      request_id,
    },
  );
  return res.sessions;
}
