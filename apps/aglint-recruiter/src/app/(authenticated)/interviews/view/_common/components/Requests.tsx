import { getFullName } from '@aglint/shared-utils';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { LayoutList } from 'lucide-react';

import GlobalEmpty from '@/components/Common/GlobalEmpty';
import { Loader } from '@/components/Common/Loader';
import { UIBadge } from '@/components/Common/UIBadge';
import { WithPermission } from '@/components/withPermission';
import { useRouterPro } from '@/hooks/useRouterPro';
import ROUTES from '@/utils/routing/routes';
import { supabase } from '@/utils/supabase/client';
import { capitalizeFirstLetter } from '@/utils/text/textUtils';

import { useScheduleDetails } from '../hooks/useScheduleDetails';

function Component() {
  const router = useRouterPro();
  const { data } = useScheduleDetails();

  const schedule = data?.schedule_data;
  const session_id = schedule?.interview_session?.id;
  const { data: requests, isLoading } = useSessionRequests({ id: session_id });

  return (
    <div className=''>
      <h2 className='mb-2 text-lg font-semibold'>Request History</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='space-y-2'>
          {(requests ?? []).length === 0 && (
            <GlobalEmpty
              header={'No requests found'}
              description='Requests are created when a interview process starts for candidates.'
              icon={
                <LayoutList
                  strokeWidth={2}
                  className='h-6 w-6 text-muted-foreground'
                />
              }
            />
          )}
          {requests?.map((request) => (
            <Card
              key={request.id}
              className='cursor-pointer border-none p-3 shadow-none hover:bg-gray-50'
              onClick={() => {
                router.push(
                  ROUTES['/requests/[request]']({
                    request: request.id,
                  }),
                );
              }}
            >
              <CardHeader className='mb-2 p-0'>
                <CardTitle className='line-clamp-1 text-sm font-medium'>
                  {request.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='p-0'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    <Avatar className='h-6 w-6'>
                      <AvatarImage
                        src={
                          request?.assignee_details?.profile_image ??
                          '/avatar.png'
                        }
                        alt={getFullName(
                          request?.assignee_details?.first_name ?? '',
                          request?.assignee_details?.last_name ?? '',
                        )}
                      />
                      <AvatarFallback className='text-xs'>
                        {getFullName(
                          request?.assignee_details?.first_name ?? '',
                          request?.assignee_details?.last_name ?? '',
                        ).charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className='text-xs text-gray-600'>
                      {getFullName(
                        request?.assignee_details?.first_name ?? '',
                        request?.assignee_details?.last_name ?? '',
                      )}
                    </span>
                  </div>
                  <UIBadge
                    size={'sm'}
                    textBadge={capitalizeFirstLetter(request.status)}
                    color={
                      request.status === 'to_do'
                        ? 'purple'
                        : request.status === 'in_progress'
                          ? 'info'
                          : request.status === 'blocked'
                            ? 'error'
                            : request.status === 'completed'
                              ? 'success'
                              : 'neutral'
                    }
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

const Requests = () => {
  return (
    <WithPermission permission={['scheduling_actions']}>
      <Component />
    </WithPermission>
  );
};

export default Requests;

export function useSessionRequests({ id }: { id: string }) {
  return useQuery({
    queryKey: [id, 'profile'],
    queryFn: () => sessionRequests(id),
    enabled: !!id,
  });
}
async function sessionRequests(id: string) {
  return (
    await supabase
      .from('request')
      .select(
        '*,assignee_details:recruiter_user!request_assignee_id_fkey(first_name, last_name, profile_image),request_relation(*),assigner_details:recruiter_user!request_assigner_id_fkey(first_name, last_name, profile_image)',
      )
      .eq('request_relation.session_id', id)
      .not('request_relation', 'is', null)
      .order('created_at', { ascending: false })
      .throwOnError()
  ).data;
}
