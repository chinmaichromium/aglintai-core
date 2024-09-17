import { type DatabaseTable } from '@aglint/shared-types';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

import CalendarComp from '@/components/Common/Calendar/Calendar';
import { Loader } from '@/components/Common/Loader';

import { usePoolSchedules } from '../../../hooks/useSchedulesPool';

function Schedules() {
  const [filter, setFilter] = useState<
    DatabaseTable['interview_meeting']['status'][]
  >(['completed', 'confirmed', 'cancelled']);

  const { data: allSchedules, isFetching: isLoading } = usePoolSchedules({
    filters: filter,
  });

  return (
    <>
      {isLoading ? (
        <div className='flex w-[820px] items-center justify-center'>
          <Loader />
        </div>
      ) : allSchedules.length === 0 ? (
        <div className='w-[820px]'>
          <div className='flex flex-col items-center justify-center p-8 text-center'>
            <Calendar className='mb-2 h-12 w-12 text-muted-foreground' />
            <h3 className='mb-1 text-lg font-medium text-foreground'>
              No schedule found
            </h3>
            <p className='text-sm text-muted-foreground'>
              There are no schedules available at the moment.
            </p>
          </div>
        </div>
      ) : (
        <>
          <CalendarComp
            allSchedules={allSchedules as any} //TODO:fix
            isLoading={isLoading}
            setFilter={setFilter}
            filter={filter}
          />
        </>
      )}
    </>
  );
}

export default Schedules;
