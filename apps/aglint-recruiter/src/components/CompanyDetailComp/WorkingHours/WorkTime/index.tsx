/* eslint-disable no-unused-vars */
import { Button } from '@components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Label } from '@components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { capitalize } from 'lodash';
import { Calendar, Edit, Loader2 } from 'lucide-react';
import {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  useRef,
  useEffect,
} from 'react';

import dayjs from '@/utils/dayjs';

import DayWithTime from './DayWithTime';

// Define types for the component props
interface TimeRange {
  startTime: string;
  endTime: string;
}

interface WorkingHour {
  day: string;
  isWorkDay: boolean;
  timeRange: TimeRange;
}

interface WorkTimeProps {
  workingHours: WorkingHour[];
  setWorkingHours: Dispatch<SetStateAction<WorkingHour[]>>;
  handleUpdate: (data: { workingHours: WorkingHour[] }) => Promise<void>;
  isUpdating: boolean;
}

const WorkTime: FC<WorkTimeProps> = ({
  workingHours,
  setWorkingHours,
  handleUpdate,
  isUpdating,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleUpdateAndClose = async () => {
    await handleUpdate({ workingHours });
    setIsOpen(false);
  };

  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Card>
      <CardHeader className='relative'>
        <CardTitle className='text-lg font-semibold'>Working Hours</CardTitle>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              size='sm'
              className='absolute top-2 right-2 transition-opacity duration-200 opacity-0 group-hover:opacity-100'
              onClick={handleTogglePopover}
            >
              <Edit className='h-3 w-3' />
              <span className='sr-only'>Edit Working Hours</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-full' side='left' align='start'>
            <div className='flex flex-col gap-4'>
              <Label>Edit Working Hours</Label>
              {workingHours.map((day, i) => {
                const startTime = dayjs()
                  .set(
                    'hour',
                    parseInt(day.timeRange.startTime?.split(':')[0] || '0'),
                  )
                  .set(
                    'minute',
                    parseInt(day.timeRange.startTime?.split(':')[1] || '0'),
                  )
                  .toISOString();

                const endTime = dayjs()
                  .set(
                    'hour',
                    parseInt(day.timeRange.endTime?.split(':')[0] || '0'),
                  )
                  .set(
                    'minute',
                    parseInt(day.timeRange.endTime?.split(':')[1] || '0'),
                  )
                  .toISOString();

                return (
                  <DayWithTime
                    key={i}
                    day={day}
                    i={i}
                    startTime={startTime}
                    endTime={endTime}
                    selectStartTime={(value, i) => {
                      setWorkingHours((pre) => {
                        const data = [...pre];
                        data[i].timeRange.startTime =
                          dayjs(value).format('HH:mm');
                        return data;
                      });
                    }}
                    selectEndTime={(value, i) => {
                      setWorkingHours((pre) => {
                        const data = [...pre];
                        data[i].timeRange.endTime =
                          dayjs(value).format('HH:mm');
                        return data;
                      });
                    }}
                    setWorkingHours={setWorkingHours}
                  />
                );
              })}
              <Button onClick={handleUpdateAndClose} disabled={isUpdating}>
                {isUpdating && (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                )}
                Update
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent>
        <div
          className='relative  rounded-lg py-4 group'
          onMouseLeave={handleMouseLeave}
        >
          <div className='flex items-center space-x-2 mb-4'>
            <Calendar className='h-4 w-4 text-muted-foreground' />
            <p className='text-sm font-medium'>Weekly Schedule</p>
          </div>
          <div className='border rounded-lg'>
            <Table>
              <TableHeader className='bg-gray-100'>
                <TableRow>
                  <TableHead>Day</TableHead>
                  <TableHead>Hours</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workingHours
                  .filter((day) => day.isWorkDay)
                  .map((day, i) => (
                    <TableRow key={i} className='hover:bg-transparent'>
                      <TableCell className='font-medium'>
                        {capitalize(day.day)}
                      </TableCell>
                      <TableCell>
                        {dayjs()
                          .set(
                            'hour',
                            parseInt(day?.timeRange.startTime?.split(':')[0]),
                          )
                          .set(
                            'minute',
                            parseInt(day?.timeRange.startTime?.split(':')[1]),
                          )
                          .format('hh:mm A')}
                        {' - '}
                        {dayjs()
                          .set(
                            'hour',
                            parseInt(day?.timeRange.endTime?.split(':')[0]),
                          )
                          .set(
                            'minute',
                            parseInt(day?.timeRange.endTime?.split(':')[1]),
                          )
                          .format('hh:mm A')}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkTime;
