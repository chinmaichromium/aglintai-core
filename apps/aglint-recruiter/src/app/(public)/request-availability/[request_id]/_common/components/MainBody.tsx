'use client';
import { ScrollArea } from '@components/ui/scroll-area';
import { cn } from '@lib/utils';
import dayjs from 'dayjs';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { useMemo } from 'react';
import { ConfirmedInvitePage } from 'src/app/_common/components/CandidateConfirm/_common/components';
import { type CandidateInviteType } from 'src/app/(public)/self-scheduling/[filter]/_common/store';

import { UIButton } from '@/common/UIButton';
import { Loader } from '@/components/Common/Loader';
import timeZones from '@/utils/timeZone';

import { useRequestAvailabilityContext } from '../contexts/RequestAvailabilityContext';
import {
  useCandidateAvailabilityData,
  useCandidateAvailabilityMeetings,
} from '../hooks/useRequestAvailability';
import MultiDaySessions from './MultiDaySessions';
import SlotsPicker from './SlotsPicker';

function CandidateAvailability() {
  const { multiDaySessions, meetingsAndRounds } =
    useRequestAvailabilityContext();
  const { isFetched: isMeetingFetched } = useCandidateAvailabilityMeetings();

  const { data: candidateRequestAvailability, isFetched } =
    useCandidateAvailabilityData();

  const initialTimezone = useMemo(() => {
    const tz = dayjs.tz.guess();
    return timeZones.find(
      ({ tzCode }) => tzCode === tz,
    ) as CandidateInviteType['timezone'];
  }, []);

  if (
    candidateRequestAvailability &&
    candidateRequestAvailability?.booking_confirmed === true &&
    meetingsAndRounds?.meetings
  ) {
    return (
      <ConfirmedInvitePage
        avail_request_id={candidateRequestAvailability.id}
        candidate={candidateRequestAvailability.applications.candidates}
        meetings={meetingsAndRounds.meetings}
        rounds={meetingsAndRounds.rounds}
        recruiter={{
          name: candidateRequestAvailability?.recruiter.name,
          logo: candidateRequestAvailability?.recruiter.logo,
        }}
        timezone={initialTimezone}
        application_id={candidateRequestAvailability.application_id}
      />
    );
  }
  if (!isFetched || !isMeetingFetched) {
    return (
      <div className='flex h-[200px] w-full items-center justify-center'>
        <Loader />
      </div>
    );
  }

  if (!candidateRequestAvailability) {
    return (
      <div className='flex w-full items-center justify-center'>
        <div className='text-center'>
          <AlertTriangle
            className='mx-auto h-12 w-12 text-red-500'
            strokeWidth={1}
          />
          <p className='mt-4 text-muted-foreground'>
            We couldn&apos;t load your availability link.
          </p>
          <p className='mt-2 text-sm text-muted-foreground'>
            Contact the recruiter or try again.
          </p>
          <UIButton
            variant='outline'
            className='mt-4'
            onClick={() => window.location.reload()}
          >
            <RefreshCcw className='mr-2 h-4 w-4' />
            Try Again
          </UIButton>
        </div>
      </div>
    );
  }
  return (
    <div className='flex flex-row'>
      {!candidateRequestAvailability?.slots && (
        <>
          <div className='w-8/12 p-4'>
            <SlotsPicker singleDay={multiDaySessions.length === 1} />
          </div>
        </>
      )}
      <div
        className={cn('w-4/12', {
          '': !candidateRequestAvailability?.slots,
        })}
      >
        <ScrollArea className='h-[calc(100vh-260px)] border-l border-border p-4'>
          <MultiDaySessions />
        </ScrollArea>
      </div>
    </div>
  );
}

export default CandidateAvailability;
