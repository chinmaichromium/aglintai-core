'use client';
import {
  Briefcase,
  LinkedinIcon,
  Mail,
  MapPin,
  Smartphone,
  SquareUser,
} from 'lucide-react';

export function ApplicantInfoBox({
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
  return (
    <dl className={`flex flex-row gap-x-8 gap-y-2 text-sm`}>
      {/* Work Information */}
      {isDepartmentVisible && (
        <div className='flex items-center'>
          <Briefcase className='mr-2 h-4 w-4 flex-shrink-0 text-neutral-600' />
          <div>
            <dt className='sr-only'>Department</dt>
            <dd className='truncate'>{textDepartment}</dd>
          </div>
        </div>
      )}
      {isRoleVisible && (
        <div className='flex items-center'>
          <SquareUser className='mr-2 h-4 w-4 flex-shrink-0 text-neutral-600' />
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
          <LinkedinIcon className='mr-2 h-4 w-4 flex-shrink-0 text-neutral-600' />
          <div>
            <dt className='sr-only'>LinkedIn</dt>
            <dd className='truncate'>View Profile</dd>
          </div>
        </div>
      )}

      {/* Location Information */}
      <div className='flex items-center'>
        <MapPin className='mr-2 h-4 w-4 flex-shrink-0 text-neutral-600' />
        <div>
          <dt className='sr-only'>Location</dt>
          <dd className='truncate'>{textLocation}</dd>
        </div>
      </div>

      {/* Contact Information */}
      <div className='flex items-center'>
        <Mail className='mr-2 h-4 w-4 flex-shrink-0 text-neutral-600' />
        <div>
          <dt className='sr-only'>Email</dt>
          <dd className='truncate'>{textEmail}</dd>
        </div>
      </div>
      <div className='flex items-center'>
        <Smartphone className='mr-2 h-4 w-4 flex-shrink-0 text-neutral-600' />
        <div>
          <dt className='sr-only'>Phone</dt>
          <dd className='truncate'>{textPhone}</dd>
        </div>
      </div>
    </dl>
  );
}