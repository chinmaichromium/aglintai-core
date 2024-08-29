import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';
import { keyframes } from '@emotion/react';

import { initUser } from '@/src/pages/api/interviewers';

import { CalendarEventWithType, EventType } from '../types';

export const earlyMorningstartTime = [6, 0];
export const afterWorkingEndTime = [20, 0];

export const oneDayPx = 192;

export const color = {
  soft_conflict: 'var(--warning-7)',
  out_standnig: 'var(--info-7)',
  calendar_event: 'var(--error-9)',
  recruiting_block: 'var(--error-7)',
  free_time: 'var(--success-7)',

  working_hour: 'var(--success-6)',
  company_off: 'var(--neutral-5)',
  break_time: 'var(--neutral-4)',

  early_morning: '#efefa8',
  after_work: '#dfcddf',
};

export const timeToPx = (hours, minutes) => {
  const oneMinPx = oneDayPx / 24 / 60;
  return hours * 60 * oneMinPx + minutes * oneMinPx;
};

export const groupByDate = ({
  events,
  dayCount,
}: {
  events: CalendarEventWithType;
  dayCount: number;
}) => {
  // Step 1: Create a range of dates from today to three days in the future
  const today = dayjsLocal().startOf('day');
  const dateRange = Array.from({ length: dayCount }, (_, i) =>
    today.add(i, 'day').format('YYYY-MM-DD'),
  );

  // Step 2: Group the events by date
  const groupedEvents = events.reduce((acc, event) => {
    const eventDate = dayjsLocal(event.start.dateTime).format('YYYY-MM-DD');

    // eslint-disable-next-line security/detect-object-injection
    if (!acc[eventDate]) {
      // eslint-disable-next-line security/detect-object-injection
      acc[eventDate] = [];
    }

    // eslint-disable-next-line security/detect-object-injection
    acc[eventDate].push(event);

    return acc;
  }, {});

  // Step 3: Ensure all dates in the range are present, even if they have no events
  return Object.values(
    dateRange.reduce((acc, date) => {
      // eslint-disable-next-line security/detect-object-injection
      acc[date] = groupedEvents[date] || [];
      return acc;
    }, {}),
  ) as CalendarEventWithType[];
};

export const getLocalSortedInterviewerIds = () => {
  const res = localStorage.getItem('availabilityInterviewerSortList');
  const ids = JSON.parse(res);
  return (ids?.length ? ids : []) as string[];
};

export const setLocalSortedInterviewerIds = (ids: string[]) => {
  localStorage.setItem('availabilityInterviewerSortList', JSON.stringify(ids));
};

export const sortedUserByChecked = (data: initUser[]) => {
  const checkedInterviewers = getLocalSortedInterviewerIds();

  return data.sort((a, b) => {
    const indexA = checkedInterviewers.indexOf(a.user_id);
    const indexB = checkedInterviewers.indexOf(b.user_id);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    } else if (indexA !== -1) {
      return -1;
    } else if (indexB !== -1) {
      return 1;
    } else {
      return a.first_name.localeCompare(b.first_name);
    }
  }) as initUser[];
};

export const splitHourAndMin = ({
  startTime,
  endTime,
}: {
  startTime: string;
  endTime: string;
}) => {
  const start = startTime.split(':').map(Number);
  const end = endTime.split(':').map(Number);

  //[startH,StartM,EndH,EndM]
  return [...start, ...end];
};

export const pulse = keyframes`
0% {
  background-color: #e0e0e0;
}
50% {
  background-color: #c0c0c0;
}
100% {
  background-color: #e0e0e0;
}
`;

export const eventColor = (type: EventType) => {
  const bg = 'var(--neutral-3)';

  const colors = color;
  switch (type) {
    case 'cal_event':
      return colors['calendar_event'];
    case 'soft':
      return colors['soft_conflict'];
    case 'break':
      return colors['break_time'];
    case 'free_time':
      return colors['free_time'];
    case 'ooo':
      return colors['out_standnig'];
    case 'recruiting_blocks':
      return colors['recruiting_block'];
    case 'working_hour':
      return colors['working_hour'];
    case 'bg':
      return bg;
    case 'company_off':
      return colors['company_off'];
    case 'early_morning':
      return colors['early_morning'];
    case 'after_work':
      return colors['after_work'];
    default:
      return 'red';
  }
};

export const eventAbbrivation = (type: EventType) => {
  return type === 'ooo'
    ? 'Out Standing'
    : type === 'recruiting_blocks'
      ? 'Recruiting Block'
      : type === 'soft'
        ? 'Soft Conflict'
        : type === 'cal_event'
          ? 'Calendar Event'
          : '';
};
