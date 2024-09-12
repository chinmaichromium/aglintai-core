import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Skeleton } from '@components/ui/skeleton';
import React from 'react';

import { useCandidateExp } from '../../hook/job/jobMatrix';

export default function AverageTenure() {
  const { data, isFetching } = useCandidateExp();
  return (
    <Card className='w-full max-w-sm mx-auto'>
      <CardHeader>
        <CardTitle className='text-md font-semibold'>Average Tenure</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center'>
        <div className='text-6xl font-bold mb-2'>
          {isFetching ? (
            <Skeleton className='h-[60px] w-[100px]' />
          ) : (
            data.avg_tenure
          )}
        </div>
        <div className='text-2xl font-semibold mb-4'>Years</div>
        <p className='text-center text-muted-foreground'>
          Average time before switching companies.
        </p>
      </CardContent>
    </Card>
  );
}
