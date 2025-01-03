import { NewMyScheduleCard } from '@interviews/components/ui/NewMyScheduleCard';
import dayjs from 'dayjs';
import { CalendarClock } from 'lucide-react';
import {
  type SchedulesSupabase,
  transformDataSchedules,
} from 'src/app/_common/utils/schedules-query';

import ScheduleMeetingCard from './ScheduleMeetingCard';

function ScheduleMeetingList({
  filterSchedules,
}: {
  filterSchedules: SchedulesSupabase;
}) {
  return (
    <div className='space-y-4'>
      {transformDataSchedules(filterSchedules).map((sch, ind) => {
        const date = Object.keys(sch)[0];
        const schedules = sch[String(date)];
        return (
          <NewMyScheduleCard
            key={ind}
            textDate={date != 'undefined' ? dayjs(date).format('DD') : ''}
            textDay={date != 'undefined' ? dayjs(date).format('ddd') : ''}
            textMonth={
              date != 'undefined' ? (
                dayjs(date).format('MMM')
              ) : (
                <CalendarClock size={5} />
              )
            }
            slotMyScheduleSubCard={schedules.map((meetingDetails, ind) => {
              return (
                <ScheduleMeetingCard
                  key={meetingDetails.id + ind}
                  meetingDetails={meetingDetails}
                />
              );
            })}
          />
        );
      })}
    </div>
  );
}

export default ScheduleMeetingList;
