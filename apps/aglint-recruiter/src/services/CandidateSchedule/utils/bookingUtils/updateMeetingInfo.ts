import { type CalendarEvent } from '@aglint/shared-types';
import { supabaseWrap } from '@aglint/shared-utils';
import dayjs from 'dayjs';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

import { type BookedMeetingDetails } from './types';

export const updateMeetingEventDetails = async (
  booked_meeting_details: BookedMeetingDetails,
  candidate_tz: string,
  request_id: string,
) => {
  const updateMeetingEvent = async ({
    cal_event,
    meeting_id,
  }: {
    meeting_id: string;
    cal_event: CalendarEvent;
  }) => {
    const supabaseAdmin = getSupabaseServer();

    let meeting_link = '';

    if (
      cal_event.conferenceData &&
      cal_event.conferenceData.conferenceSolution &&
      cal_event.conferenceData.conferenceSolution.name === 'zoom'
    ) {
      meeting_link = cal_event.conferenceData.entryPoints[0].uri;
    } else {
      meeting_link = cal_event.hangoutLink;
    }
    return supabaseWrap(
      await supabaseAdmin
        .from('interview_meeting')
        .update({
          end_time: cal_event.end.dateTime,
          start_time: cal_event.start.dateTime,
          meeting_json: cal_event,
          cal_event_id: cal_event.id,
          meeting_link: meeting_link,
          status: 'confirmed',
          confirmed_date: dayjs().toISOString(),
          confirmed_candidate_tz: candidate_tz,
          schedule_request_id: request_id,
        })
        .eq('id', meeting_id)
        .select(),
    );
  };
  const meetdb_promises = booked_meeting_details.map(
    async (m) =>
      await updateMeetingEvent({
        cal_event: m.booked_meeting.cal_event,
        meeting_id: m.booked_meeting.meeting_id,
      }),
  );
  return await Promise.all(meetdb_promises);
};
