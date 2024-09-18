import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { UIButton } from '@/components/Common/UIButton';

import ScheduleMeetingList from '../../Common/ModuleSchedules/ScheduleMeetingList';
import AllInterviewFilters from '../_common/components/Filters/AllInterviewFilters';
import { useScheduleStatesContext } from '../_common/contexts/ScheduleStatesContext';
import { useAllInterviews } from '../_common/hooks/useAllInterviews';

function AllInterviews() {
  const { back } = useRouter();
  const { filterState } = useScheduleStatesContext();
  const { data: schedules, isFetched } = useAllInterviews({
    ...filterState,
  });
  return (
    <div className='container-lg mx-auto w-full px-12'>
      <header>
        <UIButton onClick={() => back()} variant={'ghost'} size='sm'>
          <ArrowLeft className='h-4 w-4' />
          Back
        </UIButton>
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-semibold'>All Interviews</h1>
            <p className='mb-4 text-gray-600'>
              Connect your favorite tools to streamline your recruitment
              process.
            </p>
          </div>
        </div>
      </header>
      <div className='w-7/12 space-y-4'>
        <>
          <AllInterviewFilters />
          {!isFetched && <div>Loading...</div>}
          {isFetched && schedules?.length === 0 && (
            <div className='flex min-h-[calc(100vh-128px)] items-center justify-center rounded-md bg-neutral-100'>
              <div className='w-[300px] max-w-sm p-2'>
                <div className='flex flex-col items-center justify-center p-8 text-center'>
                  <svg
                    className='mb-2 h-12 w-12 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                  <h3 className='mb-1 text-lg font-medium text-gray-900'>
                    No schedule found
                  </h3>
                  <p className='text-sm text-gray-500'>
                    There are no schedules available at the moment.
                  </p>
                </div>
              </div>
            </div>
          )}
          <ScheduleMeetingList filterSchedules={schedules} />
        </>
      </div>
    </div>
  );
}

export default AllInterviews;
