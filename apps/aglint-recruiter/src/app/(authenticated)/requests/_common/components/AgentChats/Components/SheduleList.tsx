import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export type ScheduleListProps = {
  time: string;
  date: string;
  title: string;
  link: string;
};

const ScheduleList = ({ schedules }: { schedules: ScheduleListProps[] }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className='space-y-1'>
      <div className='text-muted-foreground'>
        <p className='text-base font-normal text-muted-foreground'>Schedules</p>
      </div>
      {schedules.map((schedule) => (
        <Link
          target='_blank'
          href={schedule.link}
          passHref
          key={schedule.link}
          onMouseEnter={() => setHovered(schedule.link)}
          onMouseLeave={() => setHovered(null)}
          className='block text-inherit no-underline'
        >
          <div className='relative flex flex-row items-start space-x-3'>
            <div className='w-36'>
              <div className='text-muted-foreground'>
                <p className='text-base font-medium text-muted-foreground'>
                  {schedule.time}
                </p>
                <p className='text-sm text-muted-foreground'>{schedule.date}</p>
              </div>
            </div>
            <div className='flex-1'>
              <div className='text-muted-foreground'>
                <p
                  className='text-base font-normal text-muted-foreground'
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {schedule.title}
                </p>
              </div>
            </div>

            {hovered === schedule.link && (
              <div className='absolute bottom-0 right-0 top-0 flex items-center'>
                <button className='flex items-center rounded border border-neutral-300 px-3 py-1 text-muted-foreground'>
                  View Details
                  <SquareArrowOutUpRight />
                </button>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ScheduleList;
