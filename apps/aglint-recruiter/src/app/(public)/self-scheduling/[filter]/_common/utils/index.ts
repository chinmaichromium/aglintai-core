import {
  type APICreateCandidateRequest,
  type DatabaseTable,
} from '@aglint/shared-types';
import { dayjsLocal, SINGLE_DAY_TIME } from '@aglint/shared-utils';
import axios from 'axios';

import timeZones, { type TimezoneObj } from '@/utils/timeZone';

import { type ScheduleCardProps } from '../types/types';

export const getDurationText = (duration: number) => {
  const hours = Math.trunc(duration / 60);
  const minutes = Math.trunc(duration % 60);
  const durationText = `${
    hours ? `${hours} hour${hours === 1 ? '' : 's'}` : ''
  }${hours && minutes ? ' ' : ''}${
    minutes ? `${minutes} minute${minutes === 1 ? '' : 's'}` : ''
  }`;
  return durationText;
};

export const dayJS = (timestamp: string, tz: TimezoneObj['tzCode']) => {
  return dayjsLocal(timestamp).tz(tz);
};

const getLocalIANATimezone = () => {
  const tz = dayjsLocal.tz.guess();
  return (
    timeZones.find((t) => t?.tzCode === tz)?.tzCode ?? 'America/Los_Angeles'
  );
};

export const getCalenderEventUrl = ({
  title,
  description,
  start_time,
  end_time,
  location,
}: {
  start_time: string;
  end_time: string;
  location: string;
  title: string;
  description: string;
}) => {
  const tz = encodeURIComponent(getLocalIANATimezone());

  return `https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&dates=${encodeURIComponent(new Date(start_time).toISOString().replaceAll(/-|:|.ddd/g, ''))}%2F${encodeURIComponent(new Date(end_time).toISOString().replaceAll(/-|:|.ddd/g, ''))}&ctz=${tz}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(String(location))}&text=${encodeURIComponent(title)}`;
};

export const createRequest = async ({
  application_id,
  new_dates,
  session_ids,
  type,
  other_details,
  reason,
}: {
  session_ids: string[];
  application_id: string;
  new_dates: { start_date: string; end_date: string };
  type: DatabaseTable['interview_session_cancel']['type'];
  other_details: DatabaseTable['interview_session_cancel']['other_details'];
  reason: DatabaseTable['interview_session_cancel']['reason'];
}) => {
  const createReqPayload: APICreateCandidateRequest = {
    application_id,
    session_ids,
    type,
    dates: {
      start: new_dates.start_date,
      end: new_dates.end_date,
    },
    other_details,
    reason,
  };
  await axios.post('/api/request/candidate-request', createReqPayload);
};

export const getRounds = (meetings: ScheduleCardProps['round']['sessions']) => {
  const { rounds } = (meetings || []).reduce(
    (acc, curr) => {
      const count = acc.rounds.length;
      if (
        count === 0 ||
        acc.rounds[count - 1].sessions[
          acc.rounds[count - 1].sessions.length - 1
        ].interview_session.break_duration >= SINGLE_DAY_TIME
      )
        acc.rounds.push({
          title: `Day ${acc.rounds.length + 1}`,
          sessions: [curr],
        });
      else acc.rounds[count - 1].sessions.push(curr);
      return acc;
    },
    { rounds: [] as ScheduleCardProps['round'][] },
  );

  return rounds;
};
