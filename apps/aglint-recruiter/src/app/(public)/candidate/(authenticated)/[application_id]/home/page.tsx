'use client';

import { getFullName } from '@aglint/shared-utils';

import CompanyImage from '@/src/components/CandiatePortal/components/CompanyImage';
import CompanyTabs from '@/src/components/CandiatePortal/components/CompanyTabs';
import GreetingCandidate from '@/src/components/CandiatePortal/components/GreetingCandidate';
import InterviewProgress from '@/src/components/CandiatePortal/components/InterviewProgress';
import RequestedAvailability from '@/src/components/CandiatePortal/components/RequestedAvailability';
import SelfScheduling from '@/src/components/CandiatePortal/components/SelfScheduling';
import UpcomingInterview from '@/src/components/CandiatePortal/components/UpcomingInterview';
import { usePortalHomePage } from '@/src/components/CandiatePortal/hook';
import Loader from '@/src/components/Common/Loader';

export default function Component({ params }) {
  const application_id = params.application_id;
  const { isLoading, data } = usePortalHomePage({ application_id });

  if (isLoading) {
    return <Loader />;
  }

  const {
    availability,
    candidate,
    company,
    interviewPlan,
    job,
    schedule,
    upcoming,
  } = data;

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 mx-auto px-4 py-8'>
        <div className='grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <div className=' rounded-lg overflow-hidden shadow'>
              <CompanyImage imageSrc={candidate.avatar} coverSrc={job.banner} />

              <div className='p-8 pt-20 pb-0'>
                <h1 className='text-2xl font-semibold mb-1 mt-2'>
                  {getFullName(candidate.first_name, candidate.last_name)}
                </h1>
                <p className='text-sm'>
                  for {job.name} at {company.name}
                </p>
                <GreetingCandidate sentence={job.greetings} />
              </div>
              <CompanyTabs
                companyImages={job.images}
                aboutContent={company.company_overview}
                job={job}
              />
            </div>
          </div>
          <div className='space-y-8'>
            {interviewPlan.length > 0 && (
              <InterviewProgress interviews={interviewPlan} />
            )}

            <UpcomingInterview upcomingData={upcoming} />

            <RequestedAvailability availabilityData={availability} job={job} />
            <SelfScheduling scheduleData={schedule} />
          </div>
        </div>
      </main>
    </div>
  );
}
