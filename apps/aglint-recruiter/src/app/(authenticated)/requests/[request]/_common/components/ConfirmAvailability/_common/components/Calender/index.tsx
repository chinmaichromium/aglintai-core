import { type CandReqSlotsType } from '@aglint/shared-types';
import { dayjsLocal, getFullName } from '@aglint/shared-utils';
import { useRequestAvailabilityDetails } from '@requests/hooks';
import { type ApiResponseFindAvailability } from '@requests/types';
import { useEffect, useMemo } from 'react';
import { getStringColor } from 'src/app/_common/utils/getColorForText';

import CalendarResourceView from '@/components/Common/CalendarResourceView';
import { type EventCalendar } from '@/components/Common/CalendarResourceView/types';

import { transformAvailability } from '../../../../SelfSchedulingDrawer/_common/utils/transformAvailability';
import {
  setCalendarDate,
  useConfirmAvailabilitySchedulingFlowStore,
} from '../../contexts/AvailabilitySchedulingStore';
import { useAvailabilityContext } from '../../contexts/RequestAvailabilityContext';

function Calendar() {
  const { candidateAvailabilityId, calendarDate } =
    useConfirmAvailabilitySchedulingFlowStore();
  const { selectedDateSlots, selectedDayAvailableBlocks } =
    useAvailabilityContext();
  const { data: availableSlots, isFetched } = useRequestAvailabilityDetails({
    availability_id: candidateAvailabilityId,
    user_tz: dayjsLocal.tz.guess(),
  });

  const availabilities =
    isFetched &&
    availableSlots &&
    (availableSlots.availabilities as ApiResponseFindAvailability['availabilities']);
  const slots =
    isFetched &&
    availableSlots &&
    (availableSlots?.slots as CandReqSlotsType[]);
  useEffect(() => {
    if (selectedDayAvailableBlocks && selectedDayAvailableBlocks[0].curr_date)
      setCalendarDate(selectedDayAvailableBlocks[0].curr_date);
  }, [selectedDayAvailableBlocks]);

  const { events, resources } = transformAvailability(availabilities || {});

  const selectedIds = selectedDateSlots
    .map((ele) => ele.selected_dates)
    .flat()
    .map((ele) => ele.plans)
    .flat()
    .map((ele) => ele.plan_comb_id)
    .flat();

  const memoizedSelectedEvents = useMemo(() => {
    const selectedSessions =
      (slots &&
        slots
          .flatMap((item) => item.selected_dates)
          .flatMap((item) => item.plans)
          .filter((plan) => selectedIds.includes(plan.plan_comb_id))
          .flatMap((plan) => plan.sessions)) ||
      [];

    const convertSelectedSessionsToEvents: EventCalendar[] = selectedSessions
      .map((session) => {
        const ints = [...session.qualifiedIntervs, ...session.trainingIntervs];
        return ints.map(
          (int) =>
            ({
              start: session.start_time,
              end: session.end_time,
              title: session.session_name,
              resourceId: int.user_id,
              id: crypto.randomUUID(),
              extendedProps: {
                conferenceData: null,
                color: getStringColor(
                  getFullName(int.first_name, int.last_name).charCodeAt(0),
                ).text,
                attendees: ints.map((interv) => ({
                  email: interv.email,
                  organizer: false,
                  responseStatus: 'needsAction',
                })),
                isSelected: true,
                session_id:
                  session.session_id + session.qualifiedIntervs[0].user_id,
              },
            }) as EventCalendar,
        );
      })
      .flat();

    return convertSelectedSessionsToEvents;
  }, [selectedIds]);

  let dateRange: {
    start: string;
    end: string;
  } = {
    start: dayjsLocal().toISOString(),
    end: dayjsLocal().add(7, 'day').toISOString(),
  };

  if (selectedDayAvailableBlocks) {
    dateRange = {
      start: selectedDayAvailableBlocks[0]?.curr_date,
      end: selectedDayAvailableBlocks[selectedDayAvailableBlocks.length - 1]
        ?.curr_date,
    };
  }

  return (
    <>
      {availabilities &&
        selectedDayAvailableBlocks &&
        selectedDayAvailableBlocks[0].curr_date && (
          <CalendarResourceView
            events={[...events, ...memoizedSelectedEvents]}
            resources={resources}
            dateRange={dateRange}
            currentDate={calendarDate}
            setCurrentDate={setCalendarDate}
            isLoading={!isFetched}
          />
        )}
    </>
  );
}

export default Calendar;
