import { getFullName } from '@aglint/shared-utils';
import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

import { initUser } from '@/src/pages/api/interviewers';

import { useAvailabilty } from '../Hook';
import { addPixelPropertiesAndEmptyEvents } from './utils';

const TimeLineCalendar = () => {
  const [dayCount, setDayCount] = useState<number>(6);

  const startDate = dayjsLocal().startOf('day').add(0, 'day');
  const endDate = dayjsLocal().endOf('day').add(dayCount, 'day');
  const { data: allInterviewers, isLoading } = useAvailabilty({
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  });

  if (isLoading) return <>Loading</>;

  return (
    <AvailabilityView allInterviewers={allInterviewers} dayCount={dayCount} />
  );
};

export default TimeLineCalendar;

const AvailabilityView = ({
  allInterviewers,
  dayCount,
}: {
  allInterviewers: initUser[];
  dayCount: number;
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {/* Left Column for Interviewer Names and Timezones */}
      <Box
        sx={{
          minWidth: 120,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {allInterviewers.map((interviewer) => (
          <Box
            key={getFullName(interviewer.first_name, interviewer.last_name)}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: 1,
            }}
          >
            <Typography variant='body1'>
              {getFullName(interviewer.first_name, interviewer.last_name)}
            </Typography>
            <Typography variant='caption'>
              (
              {dayjsLocal()
                .tz(interviewer.scheduling_settings.timeZone.tzCode)
                .format('z')}
              )
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Scrollable View for Time Blocks */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'auto',
          gap: 2,
        }}
      >
        {allInterviewers.map((interviewer, index) => {
          if (!interviewer.isCalenderConnected)
            return (
              <Typography key={index}>Calendar is not connected</Typography>
            );
          const timeZoneOffset = dayjsLocal()
            .tz(interviewer.scheduling_settings.timeZone.tzCode)
            .utcOffset(); // Time zone offset in minutes
          const referenceOffset = dayjsLocal.utc().utcOffset(); // UTC offset in minutes (0 for UTC)
          const totalOffset = timeZoneOffset - referenceOffset; // Difference in minutes

          const timeZoneLeftOffset = (totalOffset / 60) * 8; // Convert offset from minutes to pixels (1 hour = 8px)

          const intervierEvents = interviewer.all_events
            .filter((event) => event.start.dateTime)
            .map((event) => ({
              start: event.start,
              end: event.end,
              type: event.type,
            }));

          const dateGrouped = groupByDate(intervierEvents, dayCount);

          const pixelPropertiesAndEmptyEventsAdded =
            addPixelPropertiesAndEmptyEvents(dateGrouped);

          const interviewerEvent = Object.values(
            pixelPropertiesAndEmptyEventsAdded,
          );

          console.log(interviewerEvent);

          return (
            <TimeLineList
              key={index}
              timeZoneLeftOffset={timeZoneLeftOffset}
              interviewerEvent={interviewerEvent}
            />
          );
        })}
      </Box>
    </Box>
  );
};

const TimeLineList = ({ timeZoneLeftOffset, interviewerEvent }) => {
  return (
    // whole box
    <Box
      sx={{
        display: 'flex',
        padding: 1,
        position: 'relative',
        left: `-${timeZoneLeftOffset}px`,
      }}
    >
      {/* each day */}
      {interviewerEvent.map((events, i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Typography
            variant='body2'
            sx={{
              position: 'absolute',
              top: '-20px',
              fontWeight: 'bold',
            }}
          >
            {dayjsLocal(events[0].start.dateTime).format('DD MMMM')}
          </Typography>
          <Box
            sx={{
              width: 192,
              height: 20,
              borderRadius: 5,
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            {events.map((event, hour) => {
              return (
                <>
                  <Box
                    key={hour}
                    sx={{
                      width:
                        event.type === 'sleep_event_1'
                          ? `calc( 192px - ${event.start.startingPx} )`
                          : `calc( ${event.end.endingPx} - ${event.start.startingPx} )`,
                      height: '100%',
                      backgroundColor:
                        event.type === 'cal_event'
                          ? 'orange'
                          : event.type === 'full_day_event'
                            ? 'var(--success-9)'
                            : event.type === 'gap_event'
                              ? 'yellow'
                              : event.type === 'sleep_event'
                                ? 'blue'
                                : event.type === 'sleep_event_1'
                                  ? 'lightblue'
                                  : 'blue',
                    }}
                  />
                </>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const groupByDate = (events, dayCount) => {
  // Step 1: Create a range of dates from today to three days in the future
  const today = dayjsLocal().startOf('day');
  const dateRange = Array.from({ length: dayCount }, (_, i) =>
    today.add(i, 'day').format('YYYY-MM-DD'),
  );

  // Step 2: Group the events by date
  const groupedEvents = events.reduce((acc, event) => {
    const eventDate = dayjsLocal(event.start.dateTime).format('YYYY-MM-DD');

    if (!acc[eventDate]) {
      acc[eventDate] = [];
    }

    acc[eventDate].push(event);

    return acc;
  }, {});

  // Step 3: Ensure all dates in the range are present, even if they have no events
  return dateRange.reduce((acc, date) => {
    acc[date] = groupedEvents[date] || [];
    return acc;
  }, {});
};
