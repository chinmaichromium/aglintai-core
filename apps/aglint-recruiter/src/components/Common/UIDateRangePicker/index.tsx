/* eslint-disable no-unused-vars */
import { Button } from '@components/ui/button';
import { Calendar } from '@components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';
import { cn } from '@lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}
export function UIDateRangePicker({
  className,
  value,
  onAccept,
  customButton,
}: React.HTMLAttributes<HTMLDivElement> & {
  value?: DateRange;
  onAccept: (date: DateRange) => void;
  customButton?: React.ReactNode;
}) {
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          {customButton ?? (
            <Button
              id='date'
              variant={'outline'}
              className={cn(
                'w-[300px] justify-start text-left font-normal',
                !value && 'text-muted-foreground',
              )}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {value?.from ? (
                value.to ? (
                  <>
                    {format(value.from, 'LLL dd, y')} -{' '}
                    {format(value.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(value.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          )}
        </PopoverTrigger>
        <PopoverContent
          side={customButton ? 'left' : 'bottom'}
          className='w-auto p-0'
          align={'start'}
        >
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={value?.from}
            selected={value}
            onSelect={onAccept}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}