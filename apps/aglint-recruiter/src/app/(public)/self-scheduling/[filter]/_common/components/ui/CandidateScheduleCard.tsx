import { Card, CardContent } from '@components/ui/card';
import { cn } from '@lib/utils';
import { Clock } from 'lucide-react';

export function CandidateScheduleCard({
  textDay,
  textDuration,
  isTitle = true,
  isSelected = false,
  slotButton,
  slotSessionInfo,
}: {
  textDay?: string;
  textDuration?: string;
  isTitle?: boolean;
  isSelected?: boolean;
  slotButton?: React.ReactNode;
  slotSessionInfo?: React.ReactNode;
}) {
  return (
    <Card
      className={cn('relative overflow-hidden', isSelected && 'bg-gray-100')}
    >
      <CardContent className='space-y-4 p-4'>
        {isTitle && (
          <div className='flex items-center justify-between'>
            <span className='font-medium'>{textDay}</span>
            {slotButton}
          </div>
        )}
        <div className='flex items-center justify-start space-x-4'>
          <span className='text-muted-foreground'>Total Duration</span>
          <div className='flex items-center space-x-2'>
            <Clock className='h-4 w-4 text-muted-foreground' />
            <span>{textDuration}</span>
          </div>
        </div>

        <div className='space-y-2'>{slotSessionInfo}</div>
      </CardContent>
    </Card>
  );
}
