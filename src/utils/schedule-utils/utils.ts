import { createClient } from '@supabase/supabase-js';
import dayjs, { Dayjs } from 'dayjs';
const { google } = require('googleapis');

import { supabaseWrap } from '@/src/components/JobsDashboard/JobPostCreateUpdate/utils';
import {
  AvalabilitySlotType,
  InterviewerAvailabliity
} from '@/src/components/Scheduling/Availability/availability.types';
import { refreshAccessToken } from '@/src/pages/api/email-outreach/getNewAcessToken';
import { Database } from '@/src/types/schema';

import { listEvents } from './list-events';
import { ScheduleAuthType } from './types';
// Import required modules
const { OAuth2Client } = require('google-auth-library');
export const CAL_SYNC_DAYS = 15;

// Set up OAuth2 client
const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_SCHEDULE_CLIENT_ID,
  process.env.GOOGLE_SCHEDULE_CLIENT_SECRET,
  process.env.GOOGLE_SCHEDULE_REDIRECT_URI
);

const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export const getRecruiterAuthTokens = async (userId: string) => {
  const [user] = supabaseWrap(
    await supabaseAdmin
      .from('recruiter_user')
      .select('schedule_auth')
      .eq('user_id', userId)
  );
  let schedule_auth = user.schedule_auth as ScheduleAuthType;
  if (!schedule_auth) throw new Error('Calender not connected');
  const isDateExpired = user.schedule_auth.expiry_date - Date.now();
  if (isDateExpired) {
    const newAccessToken = await refreshAccessToken(
      schedule_auth.refresh_token,
      process.env.GOOGLE_SCHEDULE_CLIENT_ID,
      process.env.GOOGLE_SCHEDULE_CLIENT_SECRET
    );
    schedule_auth.access_token = newAccessToken;
    supabaseWrap(
      await supabaseAdmin
        .from('recruiter_user')
        .update({ schedule_auth: { ...schedule_auth } })
        .eq('user_id', userId)
    );
  }
  const tokenInfo = {
    expiry_date: schedule_auth.expiry_date,
    email: schedule_auth.email,
    access_token: schedule_auth.access_token,
    refresh_token: schedule_auth.refresh_token
  };

  return tokenInfo;
};

export const getGroupTimeSlots = (availableSlots) => {
  const groupedTimeSlots: InterviewerAvailabliity['availability'] = {};
  let avSlots: AvalabilitySlotType[] = availableSlots.map((slot) => ({
    startTime: new Date(slot.start),
    endTime: new Date(slot.end),
    status: 'available'
  }));
  avSlots.forEach((slot) => {
    // Get the calendar day as a string in the format 'YYYY-MM-DD'
    const dayKey = dayjs(slot.startTime).format('YYYY-MM-DD');
    // If the dayKey doesn't exist in groupedTimeSlots, initialize it with an empty array
    if (!groupedTimeSlots[String(dayKey)]) {
      groupedTimeSlots[String(dayKey)] = [];
    }
    // Add the timeslot to the array corresponding to its calendar day
    groupedTimeSlots[String(dayKey)].push(slot);
  });

  return groupedTimeSlots;
};

export async function getBlockedSlots(
  access_token: string,
  refresh_token: string,
  startDate: string,
  endDate: string
) {
  oAuth2Client.setCredentials({
    access_token: access_token,
    refresh_token: refresh_token
  });
  const events = await listEvents(
    oAuth2Client,
    new Date(startDate),
    new Date(endDate)
  );

  return events;
}

export async function getUserTimeZone(
  access_token: string,
  refresh_token: string
) {
  oAuth2Client.setCredentials({
    access_token: access_token,
    refresh_token: refresh_token
  });
  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
  const res = await calendar.calendars.get({
    calendarId: 'primary'
  });
  return res.data.timeZone;
}

///check if current month availibity is exists? if so return it else return null
export const getCurrentMonthAvailabilities = async (
  timeDuration: number,
  current_date: Dayjs,
  slot_availability: any
) => {
  if (!slot_availability || slot_availability.length === 0) return null;
  let timedur_slots = slot_availability.find(
    (s) => s.timeDuration === timeDuration
  );
  if (!timedur_slots) return null;
  let date = current_date.format('YYYY-MM-DD');
  if (timedur_slots.availability[String(date)]) {
    return timedur_slots.availability;
  }
};

export const saveAvailability = async (
  saved_slot_availability: InterviewerAvailabliity[],
  userId: string,
  timeDuration: number,
  avail: Record<string, AvalabilitySlotType[]>
) => {
  let updated_slot_avails: InterviewerAvailabliity[] = [];

  if (!saved_slot_availability || saved_slot_availability.length === 0) {
    updated_slot_avails = [
      {
        timeDuration: timeDuration,
        availability: avail,
        cntConfirmed: 0,
        cntRequested: 0
      }
    ];
  } else {
    if (saved_slot_availability.find((s) => s.timeDuration === timeDuration)) {
      updated_slot_avails = saved_slot_availability.map((slot) => {
        if (slot.timeDuration === timeDuration) {
          slot.availability = {
            ...slot.availability,
            ...avail
          };
        }
        return slot;
      });
    } else {
      updated_slot_avails = [
        ...saved_slot_availability,
        {
          timeDuration: timeDuration,
          availability: {
            ...avail
          },
          cntConfirmed: 0,
          cntRequested: 0
        }
      ];
    }
  }

  supabaseWrap(
    await supabaseAdmin
      .from('interview_availabilties')
      .update({
        slot_availability: updated_slot_avails as any,
        user_id: userId
      })
      .eq('user_id', userId)
  );
  return updated_slot_avails;
};
