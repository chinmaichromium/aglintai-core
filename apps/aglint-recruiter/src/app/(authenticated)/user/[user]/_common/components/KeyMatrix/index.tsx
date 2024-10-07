import { dayjsLocal } from '@aglint/shared-utils';
import { EmptyState } from '@components/empty-state';
import { ChartNoAxesColumn } from 'lucide-react';

import UISectionCard from '@/components/Common/UISectionCard';

import { useInterviewer } from '../../hooks/useInterviewer';

export const KeyMatrics = () => {
  const { data } = useInterviewer();

  const {
    meeting_count: { completed_hour, completed, cancelled },
  } = data;

  const completedHour = dayjsLocal
    .duration(+completed_hour, 'minutes')
    .asHours();

  const isEmpty = completedHour == 0 && completed == 0 && cancelled == 0;

  return (
    <>
      <UISectionCard title='Key Metrics' type='compact'>
        {isEmpty ? (
          <EmptyState
            variant='inline'
            icon={ChartNoAxesColumn}
            description='No data available'
          />
        ) : (
          <div className='flex flex-row gap-3'>
            <Card color='green' title='Interview Hours' value={completedHour} />
            <Card
              color='green'
              title='Interviews Completed'
              value={completed}
            />
            <Card color='red' title='Declines' value={cancelled} />
          </div>
        )}
      </UISectionCard>
    </>
  );
};

const Card = ({
  title,
  value,
  color,
}: {
  title: string;
  value: string | number;
  color: 'green' | 'red' | 'blue';
}) => {
  return (
    <div className='flex flex-col gap-1 rounded-md bg-gray-50 p-4 text-left'>
      <p className={`text-2xl font-medium text-${color}-600`}>{value}</p>
      <div className='text-sm text-muted-foreground'>{title}</div>
    </div>
  );
};
