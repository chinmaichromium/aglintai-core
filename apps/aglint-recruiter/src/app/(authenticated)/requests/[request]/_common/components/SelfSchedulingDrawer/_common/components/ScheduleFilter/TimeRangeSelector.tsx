'use client';
import Typography from '@components/typography';
import React from 'react';

interface TimeRangeSelectorProps {
  as?: React.ElementType;
  textDay?: React.ReactNode;
  isMultiDay?: boolean;
  slotSelectedTime?: React.ReactNode;
  slotTimeinputs?: React.ReactNode;
  slotButton?: React.ReactNode;
}

export function TimeRangeSelector({
  as: Component = 'div',
  textDay = 'Day 1',
  isMultiDay = true,
  slotSelectedTime,
  slotTimeinputs,
  slotButton,
}: TimeRangeSelectorProps) {
  return (
    <Component className='flex flex-col gap-2'>
      {isMultiDay && (
        <div>
          <Typography variant='p' type='small'>
            {textDay}
          </Typography>
        </div>
      )}
      <div className='mb-1'>{slotSelectedTime}</div>
      <div className='flex gap-2'>
        <div className='grid w-full grid-cols-2 gap-2'>{slotTimeinputs}</div>
        <div>{slotButton}</div>
      </div>
    </Component>
  );
}
