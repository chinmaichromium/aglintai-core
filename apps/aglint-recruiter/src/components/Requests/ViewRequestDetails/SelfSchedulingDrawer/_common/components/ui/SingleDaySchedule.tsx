'use client';
import { Calendar, Clock } from 'lucide-react';
import React from 'react';

import UITypography from '@/components/Common/UITypography';

export function SingleDaySchedule({
  as: Component = 'div',
  textTotalTimeRange = '11:30AM - 04:00PM PST',
  slotConflicts,
  slotSessionDetails,
  textDayCount = 'Day 1',
  textDate = 'April 04',
  isMultiDay = false,
  onClickSingleDay,
}: {
  as?: React.ElementType;
  textTotalTimeRange?: string;
  slotConflicts?: React.ReactNode;
  slotSessionDetails?: React.ReactNode;
  textDayCount?: string;
  textDate?: string;
  isMultiDay?: boolean;
  onClickSingleDay?: () => void;
}) {
  return (
    <Component
      className='w-full overflow-hidden bg-white'
      onClick={onClickSingleDay}
    >
      <div className='z-10 flex items-center justify-between p-2'>
        <div className='flex items-center justify-start gap-7'>
          {isMultiDay && (
            <div className='flex flex-row flex-nowrap items-center gap-2'>
              <Calendar className='h-4 w-4 text-gray-600' />
              <UITypography type='small' className='font-semibold'>
                {textDayCount}
              </UITypography>
              <UITypography type='extraSmall' className='text-gray-600'>
                {textDate}
              </UITypography>
            </div>
          )}
          <div className='flex flex-row flex-nowrap items-center gap-2'>
            <Clock className='h-4 w-4 text-gray-600' />
            <UITypography type='extraSmall' className='font-semibold'>
              {textTotalTimeRange}
            </UITypography>
          </div>
        </div>
        <div className='flex items-center justify-start gap-2'>
          <div className='flex h-7 items-center justify-start gap-2'>
            {slotConflicts}
          </div>
        </div>
      </div>
      {slotSessionDetails}
    </Component>
  );
}
