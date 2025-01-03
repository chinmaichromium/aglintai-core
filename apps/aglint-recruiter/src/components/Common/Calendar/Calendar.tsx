import './fullcalendar-theme.css';

import { type DatabaseTable } from '@aglint/shared-types';
import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';
import { EmptyState } from '@components/empty-state';
import { type DatesSetArg, type EventContentArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Calendar } from 'lucide-react';
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Loader } from '@/components/Common/Loader';

import { type SchedulesSupabase } from '../../../app/_common/utils/schedules-query';
import CalendarHeader from './CalendarHeader';
import {
  type EventFullCalender,
  type Modes,
  type Types,
} from './calendarTypes';

function CalendarComp({
  allSchedules,
  isLoading,
  filter,
  setFilter,
}: {
  allSchedules: SchedulesSupabase;
  isLoading: boolean;
  filter: DatabaseTable['interview_meeting']['status'][];
  setFilter: Dispatch<
    SetStateAction<DatabaseTable['interview_meeting']['status'][]>
  >;
}) {
  const [currentDate, setCurrentDate] = useState<DatesSetArg | null>(null);
  const [viewMode, setViewMode] = useState<Modes>('calendar');
  const [viewType, setViewType] = useState<Types>('month');
  const [events, setEvents] = useState<EventFullCalender[]>([]);

  const calendarRef = useRef(null);

  useEffect(() => {
    const event: EventFullCalender[] = allSchedules
      .map((sch) => ({
        title: sch.session_name ?? '',
        start: sch.start_time ?? '',
        end: sch.end_time ?? '',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        status: sch.status,
        extendedProps: {
          data: sch,
          color: colorPick(sch.status),
        },
      }))
      .sort((a, b) => {
        const order = {
          confirmed: 1,
          completed: 2,
          waiting: 3,
          cancelled: 4,
          reschedule: 5,
          not_scheduled: 6,
        };

        return order[a.status] - order[b.status];
      });
    setEvents(event);
  }, [allSchedules]);

  //@ts-ignore
  const calendarApi = calendarRef.current?.getApi();

  const handleDatesSet = (date: DatesSetArg) => {
    setCurrentDate(date);
  };

  const view = {
    list: {
      day: 'listDay',
      week: 'listWeek',
      month: 'listMonth',
    },
    calendar: {
      day: 'timeGridDay',
      week: 'timeGridWeek',
      month: 'dayGridMonth',
    },
  };
  const handleMode = (value: Modes) => {
    setViewMode(value);
    // eslint-disable-next-line security/detect-object-injection
    const newView = view[value][viewType];
    calendarApi?.changeView(newView);
  };
  const handleType = (value: Types) => {
    setViewType(value);
    // eslint-disable-next-line security/detect-object-injection
    const newView = view[viewMode][value];
    calendarApi?.changeView(newView);
  };

  return (
    <div>
      {isLoading ? (
        <div className='flex min-h-[700px] w-full items-center justify-center'>
          <Loader />
        </div>
      ) : (
        <>
          <div className='flex flex-col gap-4'>
            <div className='rounded-t-lg'>
              <CalendarHeader
                filter={filter}
                setFilter={setFilter}
                calendarApi={calendarApi}
                currentDate={currentDate}
                handleMode={handleMode}
                handleType={handleType}
                mode={viewMode}
                type={viewType}
              />
            </div>
            {(allSchedules || []).length === 0 ? (
              <div className='flex min-h-[500px] w-full items-center justify-center'>
                <EmptyState
                  icon={Calendar}
                  header={'No schedules'}
                  description='There are no schedules available at the moment.'
                />
              </div>
            ) : (
              <FullCalendar
                key={events?.length}
                ref={calendarRef}
                plugins={[
                  resourceTimelinePlugin,
                  dayGridPlugin,
                  listPlugin,
                  timeGridPlugin,
                ]}
                // eslint-disable-next-line security/detect-object-injection
                initialView={view[viewMode][viewType]}
                initialEvents={events}
                eventContent={renderEventContent}
                noEventsContent={onEventContent}
                nowIndicator={true}
                editable={true}
                selectable={false}
                aspectRatio={1.0}
                selectMirror={true}
                allDaySlot={false}
                resources={events}
                datesSet={handleDatesSet}
                height='auto'
                dayMaxEvents={2}
                views={{
                  dayGridMonth: {
                    dayMaxEventRows: 2,
                  },
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CalendarComp;

function onEventContent() {
  return (
    <EmptyState
      variant='inline'
      icon={Calendar}
      description='No interviews found.'
    />
  );
}

function renderEventContent(eventInfo: EventContentArg) {
  const { data, color } = eventInfo.event.extendedProps;
  return (
    <div
      className={`text-${color.pri} w-full cursor-pointer rounded-md p-[5px_10px] ${color.bg} border-l-[3px] hover:${color.hoverBg} border-${color.pri}`}
      onClick={() => {
        // Create a custom tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.innerHTML = `
          <h3>${eventInfo.event.title}</h3>
          <p>${dayjsLocal(data.start_time).format('hh:mm A')} - ${dayjsLocal(data.end_time).format('hh:mm A')}</p>
          <p>Status: ${data.status}</p>
        `;

        //@ts-ignore
        const rect = eventInfo.el.getBoundingClientRect();
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;

        // Add the tooltip to the body
        document.body.appendChild(tooltip);

        // Remove the tooltip when clicking outside
        const removeTooltip = (e: any) => {
          //@ts-ignore
          if (!tooltip.contains(e.target) && e.target !== eventInfo.el) {
            document.body.removeChild(tooltip);
            document.removeEventListener('click', removeTooltip);
          }
        };
        document.addEventListener('click', removeTooltip);
      }}
    >
      <p className='font-medium'>{eventInfo.event.title}</p>
      <p className='text-xs'>
        {dayjsLocal(data.start_time).format('hh:mm A')} -
        {dayjsLocal(data.end_time).format('hh:mm A')}
      </p>
    </div>
  );
}

const colorPick = (status: NonNullable<SchedulesSupabase>[0]['status']) => {
  switch (status) {
    case 'confirmed':
      return {
        hoverBg: 'bg-blue-300',
        bg: 'bg-blue-200',
        pri: 'blue-700',
      };
    case 'completed':
      return { hoverBg: 'bg-green-300', bg: 'bg-green-200', pri: 'green-700' };
    case 'cancelled':
      return { hoverBg: 'bg-red-300', bg: 'bg-red-200', pri: 'red-700' };
    default:
      return { hoverBg: 'bg-gray-300', bg: 'bg-gray-200', pri: 'gray-700' };
  }
};
