import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Skeleton } from '@components/ui/skeleton';
import React from 'react';

import { useInterviewStatistics } from '../../hooks/useInterviewStatics';

function InterviewStatistics({ module_id }: { module_id: string }) {
  const { data, isFetched } = useInterviewStatistics(module_id);
  return (
    <Card className='border border-border bg-muted shadow-sm'>
      <CardHeader>
        <CardTitle className='text-lg font-medium'>
          Interview Statistics
        </CardTitle>
      </CardHeader>
      <CardContent className=''>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Total Interviews</span>
            <span className='font-bold text-muted-foreground'>
              {isFetched ? data.total : <Skeleton className='h-6 w-10' />}
            </span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Completion Rate</span>
            <span className='font-bold text-primary'>
              {isFetched ? (
                `${Math.round((data.completed / data.total) * 10000) / 100 || 0} %`
              ) : (
                <Skeleton className='h-6 w-10' />
              )}
            </span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Avg. Duration</span>
            <span className='font-bold text-muted-foreground'>
              {isFetched ? (
                `${data.duration} min`
              ) : (
                <Skeleton className='h-6 w-10' />
              )}
            </span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Avg. Time to Schedule</span>
            <span className='font-bold text-muted-foreground'>
              {isFetched ? data.interval : <Skeleton className='h-6 w-10' />}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default InterviewStatistics;
