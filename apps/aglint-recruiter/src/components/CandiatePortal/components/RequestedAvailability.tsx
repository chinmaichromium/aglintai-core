import { dayjsLocal } from '@aglint/shared-utils';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardHeader } from '@components/ui/card';
import { BriefcaseBusinessIcon } from 'lucide-react';
import React from 'react';

import {
  type apiHomepageResponse,
  type availability,
} from '@/app/api/candidate_portal/home_page/route';
import dayjs from '@/utils/dayjs';

function RequestedAvailability({
  availabilityData,
  job,
}: {
  availabilityData: availability;
  job: apiHomepageResponse['job'];
}) {
  const latestavailability = availabilityData.sort((a, b) =>
    dayjsLocal(a.sessions[0].start_time).isAfter(
      dayjsLocal(b.sessions[0].start_time),
    )
      ? 1
      : -1,
  )[0];

  return (
    <div>
      <Card className='bg-background/80 backdrop-blur-sm shadow-sm border border-border'>
        {latestavailability ? (
          <AvailabilityCard latestavailability={latestavailability} job={job} />
        ) : (
          <AvailabilityEmpty />
        )}
      </Card>
    </div>
  );
}

export default RequestedAvailability;

const AvailabilityEmpty = () => {
  return (
    <CardContent className='p-0 pl-4 pb-4'>
      <CardHeader className='p-4 pl-0 text-md font-semibold'>
        Availability Request
      </CardHeader>
      <p className='text-muted-foreground'>No Availability Requests</p>
    </CardContent>
  );
};

const AvailabilityCard = ({
  latestavailability,
  job,
}: {
  latestavailability: availability[number];
  job: apiHomepageResponse['job'];
}) => {
  return (
    <>
      <CardHeader className='p-0 pt-4 pl-4 pb-4'>
        <h2 className='font-semibold'>Availability Requested</h2>
        <div className='flex gap-2 items-center'>
        <BriefcaseBusinessIcon className='w-4 h-4' strokeWidth={1.5} />
          <div className='text-sm '>{job.name}</div>
        </div>

        <p className='text-sm text-gray-600'>
          Requested on{' '}
          {dayjs(latestavailability.created_at).format('MMM DD YYYY, hh:mm A')}
        </p>
        {/* <p className='text-sm text-gray-600'>Requested on Aug 22, 05:00 PM</p> */}
      </CardHeader>
      <CardContent className='p-0 pl-4 pr-4 pb-4'>
        <Button
          className='w-full'
          variant='outline'
          onClick={() => {
            window.open(latestavailability.link, '_blank');
          }}
        >
          Submit availability
        </Button>
      </CardContent>
    </>
  );
};
