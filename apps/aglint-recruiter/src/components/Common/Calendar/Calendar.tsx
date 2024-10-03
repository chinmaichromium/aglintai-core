import './fullcalendar-theme.css';

import { type DatabaseTable } from '@aglint/shared-types';
import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';
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
import UISectionCard from '../UISectionCard';
import UITypography from '../UITypography';
import CalendarHeader from './CalendarHeader';
import {
  type EventFullCalender,
  type Modes,
  type Types,
} from './calendarTypes';
import CalendarFilter from './Filter';

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
    const event: EventFullCalender[] = allSchedules.map((sch) => ({
      title: sch.session_name ?? '',
      start: sch.start_time ?? '',
      end: sch.end_time ?? '',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      extendedProps: {
        data: sch,
        color: colorPick(sch.status),
      },
    }));
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
    <div className='space-y-2 p-2'>
      {isLoading ? (
        <div className='flex w-[900px] items-center justify-center'>
          <Loader />
        </div>
      ) : (
        <UISectionCard
          type='compact'
          title='Schedule Calendar'
          isHoverEffect={false}
          action={<CalendarFilter filter={filter} setFilter={setFilter} />}
        >
          <CalendarHeader
            calendarApi={calendarApi}
            currentDate={currentDate}
            handleMode={handleMode}
            handleType={handleType}
            mode={viewMode}
            type={viewType}
          />
          <div className='mt-4'>
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
              views={{
                dayGridMonth: {
                  dayMaxEventRows: 2,
                },
              }}
            />
          </div>
        </UISectionCard>
      )}
    </div>
  );
}

export default CalendarComp;

function onEventContent() {
  return (
    <div className='flex flex-col items-center gap-3'>
      <Calendar size={30} className='text-gray-400' />
      <UITypography type='small' variant='p' className='text-muted-foreground'>
        No events
      </UITypography>
    </div>
  );
}

function renderEventContent(eventInfo: EventContentArg) {
  const { data, color } = eventInfo.event.extendedProps;
  return (
    <div
      className={`w-full cursor-pointer rounded-md p-[5px_10px] ${color.bg} border-l-[3px] ${color.pri}`}
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
      return { bg: 'bg-blue-200', pri: 'border-blue-700' };
    case 'completed':
      return { bg: 'bg-green-200', pri: 'border-green-700' };
    case 'cancelled':
      return { bg: 'bg-red-200', pri: 'border-red-700' };
    default:
      return { bg: 'bg-grey-200', pri: 'border-grey-700' };
  }
};

// const TooltipComp = ({ data }) => {
//   const router = useRouter();
//   return (
//     <div className='space-y-4'>
//       <Card className='w-[350px]'>
//         <CardHeader>
//           <CardTitle>{data?.session_name}</CardTitle>
//           <CardDescription>
//             {`${data?.session_duration} minutes`} •{' '}
//             {capitalizeAll(data?.schedule_type)}
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className='space-y-2'>
//             <p className='text-sm'>
//               {dayjsLocal(data.start_time).format('ddd, MMM DD, YYYY hh:mm A')}{' '}
//               - {dayjsLocal(data.end_time).format('hh:mm A')}
//             </p>
//             {/* <UIBadge
//               variant={
//                 data?.status === 'completed'
//                   ? 'success'
//                   : data?.status === 'canceled'
//                     ? 'destructive'
//                     : data?.status === 'confirmed'
//                       ? 'default'
//                       : 'secondary'
//               }
//             >
//               {capitalizeAll(data?.status)}
//             </UIBadge> */}
//           </div>
//         </CardContent>
//       </Card>
//       <div className='space-y-1 px-4 pb-4'>
//         <p>
//           Candidate:{' '}
//           {getFullName(
//             data.applications.candidates.first_name,
//             data.applications.candidates.last_name,
//           )}
//         </p>
//         <Button
//           color={'neutral'}
//           size={'sm'}
//           onClick={() =>
//             router.push(
//               `/interviews/view?meeting_id=${data.meeting_interviewers[0].meeting_id}&tab=candidate_details`,
//             )
//           }
//         >
//           View Details
//         </Button>
//       </div>
//     </div>
//   );
// };
