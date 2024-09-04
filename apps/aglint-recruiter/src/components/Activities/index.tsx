import { EmptyState } from '@devlink2/EmptyState';
import { Skeleton } from '@devlink2/Skeleton';
import { Activities } from '@devlink3/Activities';
import { ActivitiesCard } from '@devlink3/ActivitiesCard';
import { SkeletonActivitiesCard } from '@devlink3/SkeletonActivitiesCard';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import { ActivityIcon, FileText } from 'lucide-react';
import { useRouter } from 'next/router';

import { type useAllActivities } from '@/queries/activities';

import SlotContent from './SlotWidgets';

function RightPanel({
  allActivities,
}: {
  allActivities: ReturnType<typeof useAllActivities>;
}) {
  const router = useRouter();
  const { data: activities, isLoading, isFetched } = allActivities;

  return (
    <>
      <Activities
        slotActivitiesCard={
          <>
            {isFetched && !isLoading && activities.length === 0 && (
              <EmptyState
                slotIcons={<ActivityIcon size={50} />}
                textDescription={'No activities found.'}
              />
            )}
            {!isFetched || isLoading ? (
              <Stack height={'calc(100vh - 60px)'}>
                <SkeletonActivitiesCard slotSkeleton={<Skeleton />} />
                <SkeletonActivitiesCard slotSkeleton={<Skeleton />} />
                <SkeletonActivitiesCard slotSkeleton={<Skeleton />} />
                <SkeletonActivitiesCard slotSkeleton={<Skeleton />} />
                <SkeletonActivitiesCard slotSkeleton={<Skeleton />} />
              </Stack>
            ) : (
              activities?.map((act, ind) => {
                return (
                  <ActivitiesCard
                    key={act.id}
                    textTitle={act.title || ''}
                    textTime={dayjs(act.created_at).fromNow()}
                    isLineVisible={!(ind == activities.length - 1)}
                    isViewTaskVisible={Boolean(act.task_id)}
                    textDesc={
                      act?.metadata?.type ===
                      'candidate_response_self_schedule' ? (
                        <>
                          {act.metadata.response_type === 'reschedule'
                            ? 'Requested a reschedule'
                            : 'Cancelled this schedule'}
                        </>
                      ) : (
                        act.description
                      )
                    }
                    onClickViewTask={{
                      onClick: () => {
                        router.push(`/tasks?task_id=${act.task_id}`);
                      },
                    }}
                    isActionVisible={false}
                    isContentVisible={Boolean(act.metadata)}
                    slotContent={<SlotContent act={act} />}
                    slotImage={<FileText size={24} />}
                  />
                );
              })
            )}
          </>
        }
      />
    </>
  );
}

export default RightPanel;
