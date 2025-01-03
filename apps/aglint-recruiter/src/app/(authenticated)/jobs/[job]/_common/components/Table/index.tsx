/* eslint-disable security/detect-object-injection */
import { memo, useMemo } from 'react';

import { useApplications, useApplicationsStore, useJob } from '@/job/hooks';

import { Loader } from '../../../[application]/_common/components/Scoring/Analysis/Common/Loader';
import { EmptyList } from './Common/EmptyList';
import List from './List';
import { TableHeader } from './TableHeader';

export const Table = memo(() => {
  const { job } = useJob();
  const section_count = job?.section_count;
  const status = useApplicationsStore((state) => state.status);
  const { query } = useApplications();

  if (query.status === 'pending') return <Skeleton />;
  if (query.status === 'error') return <>Error</>;
  if ((section_count?.[status] ?? 0) === 0) return <EmptyList />;

  return <List key={status} loader={<Skeleton />} header={<TableHeader />} />;
});
Table.displayName = 'Table';

const Skeleton = memo(() => {
  const cascadeVisibilites = useApplicationsStore((state) =>
    state.cascadeVisibilites(),
  );
  const skeleton = useMemo(
    () => (
      <div className='flex items-center space-x-4 p-4 pl-[30px]'>
        <div className='h-8 w-8 animate-pulse rounded bg-muted-foreground/40' />
        <div className='flex-1 space-y-2'>
          <div className='h-8 animate-pulse rounded bg-muted-foreground/40' />
        </div>
        {cascadeVisibilites.interview && (
          <div className='h-8 w-20 animate-pulse rounded bg-muted-foreground/40' />
        )}
        {cascadeVisibilites.disqualified && (
          <div className='h-8 w-20 animate-pulse rounded bg-muted-foreground/40' />
        )}
      </div>
    ),
    [cascadeVisibilites],
  );
  return <Loader count={5}>{skeleton}</Loader>;
});
Skeleton.displayName = 'Skeleton';
