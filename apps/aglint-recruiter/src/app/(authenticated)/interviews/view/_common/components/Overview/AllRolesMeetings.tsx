import { getFullName } from '@aglint/shared-utils';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import Link from 'next/link';

import { useScheduleDetails } from '../../hooks/useScheduleDetails';

function AllRolesMeetings() {
  const { data } = useScheduleDetails();
  const schedule = data?.schedule_data;

  const allRoles = [
    {
      type: 'recruiter',
      details: schedule.recruiter,
      label: 'Recruiter',
    },
    {
      type: 'recruiting_coordinator',
      details: schedule.recruiting_coordinator,
      label: 'Recruiting Coordinator',
    },
    {
      type: 'hiring_manager',
      details: schedule.hiring_manager,
      label: 'Hiring Manager',
    },
  ];

  const filteredRoles = allRoles.filter((item) => Boolean(item.details));

  return (
    <div className='flex flex-wrap gap-4'>
      {filteredRoles.map((item) => {
        return (
          <div key={item.type} className='flex items-center space-x-2'>
            <Avatar className='h-12 w-12 rounded-md'>
              <AvatarImage
                src={item?.details?.profile_image ?? 'avatar.png'}
                alt={getFullName(
                  item?.details?.first_name ?? '',
                  item?.details?.last_name ?? '',
                )}
              />
              <AvatarFallback className='h-12 w-12 rounded-md'>
                {getFullName(
                  item?.details?.first_name ?? '',
                  item?.details?.last_name ?? '',
                ).charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <Link
                href={`/user/${item?.details?.user_id}`}
                className='text-md hover:underline'
              >
                {getFullName(
                  item?.details?.first_name ?? '',
                  item?.details?.last_name ?? '',
                )}
              </Link>
              <p className='text-sm text-muted-foreground'>{item.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllRolesMeetings;
