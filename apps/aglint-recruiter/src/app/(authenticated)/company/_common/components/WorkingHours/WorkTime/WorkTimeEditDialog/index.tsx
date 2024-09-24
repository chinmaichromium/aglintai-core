import { dayjsLocal } from '@aglint/shared-utils';

import { UIButton } from '@/components/Common/UIButton';
import UIDialog from '@/components/Common/UIDialog';

import DayWithTime from './ui/DayWithTime';

export const WorkTimeEditDialog = ({
  isOpen,
  handleUpdateAndClose,
  workingHours,
  setWorkingHours,
  setIsOpen,
}) => {
  return (
    <UIDialog
      open={isOpen}
      size='xl'
      onClose={() => setIsOpen(false)}
      title={'Edit Working Hours'}
      slotButtons={
        <>
          <UIButton
            variant='outline'
            size='sm'
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </UIButton>
          <UIButton size='sm' onClick={handleUpdateAndClose}>
            Update
          </UIButton>
        </>
      }
    >
      <div className='flex flex-col gap-4'>
        {workingHours.map((day, i) => {
          const startTime = dayjsLocal()
            .set(
              'hour',
              parseInt(day.timeRange.startTime?.split(':')[0] || '0'),
            )
            .set(
              'minute',
              parseInt(day.timeRange.startTime?.split(':')[1] || '0'),
            )
            .toISOString();

          const endTime = dayjsLocal()
            .set('hour', parseInt(day.timeRange.endTime?.split(':')[0] || '0'))
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
                    dayjsLocal(value).format('HH:mm');
                  return data;
                });
              }}
              selectEndTime={(value, i) => {
                setWorkingHours((pre) => {
                  const data = [...pre];
                  data[i].timeRange.endTime = dayjsLocal(value).format('HH:mm');
                  return data;
                });
              }}
              setWorkingHours={setWorkingHours}
            />
          );
        })}
      </div>
    </UIDialog>
  );
};