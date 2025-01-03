import { type ApiResponseFindAvailability } from '@requests/types';
import { getStringColor } from 'src/app/_common/utils/getColorForText';

import {
  type EventCalendar,
  type Resource,
} from '@/components/Common/CalendarResourceView/types';

export const transformAvailability = (
  availabilities: ApiResponseFindAvailability['availabilities'],
) => {
  const intArray = availabilities
    ? Object?.entries(availabilities)?.map(([, value]) => ({
        ...value,
      }))
    : [];

  const events: EventCalendar[] = intArray.flatMap((cal) =>
    cal.all_events.flatMap((event) => {
      const data = {
        start: event.start.dateTime,
        end: event.end.dateTime,
        title: event.summary,
        resourceId: cal.interviewer_id,
        id: event.id,
      };
      return {
        ...data,
        extendedProps: {
          conferenceData: event.conferenceData?.conferenceSolution ?? null,
          attendees: event.attendees ?? [],
          color: getStringColor(cal.name.charCodeAt(0)).text,
        },
      };
    }),
  );

  const resources: Resource[] = intArray.map((cal) => ({
    id: cal.interviewer_id,
    title: cal.name,
    extendedProps: {
      data: {
        id: cal.interviewer_id,
        profile_pic: cal.profile_image,
        email: cal.email,
        name: cal.name,
        position: cal.position,
      },
      color: getStringColor(cal.name.charCodeAt(0)).text,
    },
  }));

  return { events, resources };
};
