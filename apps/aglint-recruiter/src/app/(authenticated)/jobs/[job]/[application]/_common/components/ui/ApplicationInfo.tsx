'use client';
import InterviewStages from '@components/interview-stage';
import {
  BriefcaseBusiness,
  LinkedinIcon,
  Mail,
  MapPin,
  Smartphone,
  SquareUser,
} from 'lucide-react';

import TabsComp from '../TabPills';

export function ApplicantInfoBox({
  candidateName = '',
  onClickLinkedIn = () => {},
  isLinkedInVisible = true,
  textDepartment = 'Engineering',
  textLocation = 'San Francisco, California',
  textEmail = 'dileep@aglinthq.com',
  textRole = 'Software Engineer',
  textPhone = '+1 123-456-7890',
  isRoleVisible = true,
  isDepartmentVisible = true,
}) {
  const stagesDemo = [
    {
      testName: 'Application',
      description: 'Submit resume and cover letter',
      status: 'completed' as const,
    },
    {
      testName: 'Phone Screen',
      description: 'Initial 30-minute call',
      status: 'completed' as const,
    },
    {
      testName: 'Technical Interview',
      description: 'Coding and system design',
      status: 'in_progress' as const,
    },
    {
      testName: 'On-site Interview',
      description: 'Full day of interviews',
      status: 'not_started' as const,
    },
    {
      testName: 'Offer',
      description: 'Final decision and negotiation',
      status: 'not_started' as const,
    },
  ];
  return (
    <div className='-m-4 flex flex-col gap-y-2 rounded-t-md px-4 pt-4'>
      <h1 className='text-2xl font-semibold'>{candidateName}</h1>
      <dl className={`flex flex-row gap-x-8 gap-y-2 text-sm`}>
        {/* Work Information */}
        {isDepartmentVisible && (
          <div className='flex items-center'>
            <BriefcaseBusiness className='mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground' />
            <div>
              <dt className='sr-only'>Department</dt>
              <dd className='truncate'>{textDepartment}</dd>
            </div>
          </div>
        )}
        {isRoleVisible && (
          <div className='flex items-center'>
            <SquareUser className='mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground' />
            <div>
              <dt className='sr-only'>Current Role</dt>
              <dd className='truncate'>{textRole}</dd>
            </div>
          </div>
        )}
        {isLinkedInVisible && (
          <div
            className='flex cursor-pointer items-center'
            onClick={onClickLinkedIn}
          >
            <LinkedinIcon className='mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground' />
            <div>
              <dt className='sr-only'>LinkedIn</dt>
              <dd className='truncate'>View Profile</dd>
            </div>
          </div>
        )}

        {/* Location Information */}
        <div className='flex items-center'>
          <MapPin className='mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground' />
          <div>
            <dt className='sr-only'>Location</dt>
            <dd className='truncate'>{textLocation}</dd>
          </div>
        </div>

        {/* Contact Information */}
        <div className='flex items-center'>
          <Mail className='mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground' />
          <div>
            <dt className='sr-only'>Email</dt>
            <dd className='truncate'>{textEmail}</dd>
          </div>
        </div>
        <div className='flex items-center'>
          <Smartphone className='mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground' />
          <div>
            <dt className='sr-only'>Phone</dt>
            <dd className='truncate'>{textPhone}</dd>
          </div>
        </div>
      </dl>
      <div className='flex flex-col py-2'>
        <div className='space-y-6 p-4'>
          <h2 className='text-2xl font-bold'>Horizontal Layout</h2>
          <InterviewStages stages={stagesDemo} orientation='horizontal' />

          <h2 className='text-2xl font-bold'>Vertical Layout</h2>
          <InterviewStages
            stages={stagesDemo}
            orientation='vertical'
            className='max-w-md'
          />
        </div>

        <h2 className='text-md font-semibold'>Overview</h2>
        <p className='text-sm text-muted-foreground'>
          Candidate overview impsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos.
        </p>
      </div>
      <TabsComp />
    </div>
  );
}
