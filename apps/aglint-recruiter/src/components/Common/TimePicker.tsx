'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select';
import { cn } from '@lib/utils';

interface TimePickerProps {
  value: Date;
  // eslint-disable-next-line no-unused-vars
  onChange: (date: Date) => void;
  minuteRange?: number;
  showAMPM?: boolean;
}

function TimePicker({
  value,
  onChange,
  minuteRange = 1,
  showAMPM = true,
}: TimePickerProps) {
  const hours = Array.from({ length: showAMPM ? 11 : 23 }, (_, i) =>
    (i + 1).toString().padStart(2, '0'),
  );
  const minutes = Array.from({ length: 60 / minuteRange }, (_, i) =>
    (i * minuteRange).toString().padStart(2, '0'),
  );

  const updateTime = (hour: string, minute: string, period?: string) => {
    const newDate = new Date(value);
    let hours = parseInt(hour, 10);

    if (showAMPM) {
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
    }

    newDate.setHours(hours, parseInt(minute, 10));
    onChange(newDate);
  };

  //   const formatTime = (date: Date) => {
  //     return date.toLocaleTimeString('en-US', {
  //       hour: '2-digit',
  //       minute: '2-digit',
  //       hour12: showAMPM,
  //     });
  //   };

  const currentHour = value.getHours();
  const displayHour = showAMPM
    ? (((currentHour + 11) % 12) + 1).toString().padStart(2, '0')
    : currentHour.toString().padStart(2, '0');
  const displayMinute = value.getMinutes().toString().padStart(2, '0');
  const displayPeriod = showAMPM && currentHour >= 12 ? 'PM' : 'AM';

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <div
          id='time-picker'
          className='flex items-center space-x-2 rounded-md border bg-background p-2'
        >
          <Select
            value={displayHour}
            onValueChange={(newHour) =>
              updateTime(newHour, displayMinute, displayPeriod)
            }
          >
            <SelectTrigger className='w-[70px] border-none'>
              <SelectValue placeholder='Hour' />
            </SelectTrigger>
            <SelectContent>
              {hours.map((h) => (
                <SelectItem key={h} value={h}>
                  {h}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className='text-lg font-semibold'>:</span>
          <Select
            value={displayMinute}
            onValueChange={(newMinute) =>
              updateTime(displayHour, newMinute, displayPeriod)
            }
          >
            <SelectTrigger className='w-[70px] border-none'>
              <SelectValue placeholder='Minute' />
            </SelectTrigger>
            <SelectContent>
              {minutes.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showAMPM && (
            <div className='flex rounded-md border p-1'>
              {['AM', 'PM'].map((option) => (
                <button
                  key={option}
                  onClick={() => updateTime(displayHour, displayMinute, option)}
                  className={cn(
                    'rounded-md px-2 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    displayPeriod === option
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-foreground hover:bg-muted',
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default TimePicker;
