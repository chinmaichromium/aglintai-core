/**
 * @abstract Most of the types are only internal to the logic
 *@author Dileep BC
 */

import { type Dayjs } from 'dayjs';

import { CalendarEvent, ScheduleAuthType } from './calEvent.types';
import {
  RecruiterUserType,
  InterviewerSessionRelation,
  InterviewSession,
  InterviewModuleType,
  InterviewMeetingTypeDb,
} from '../data.types';
import { SchedulingSettingType } from './scheduleSetting';
import { CalConflictType, ConflictReason } from './apiResp.types';
import { CustomSchedulingSettingsUser } from '../db/tables/recruiter_user.types';

export type PauseJson = {
  start_date: string;
  end_date: string;
  isManual: boolean;
};

export type SessionInterviewerType = {
  first_name: string;
  last_name: string;
  email: string;
  profile_image: string | null;
  schedule_auth: ScheduleAuthType | null;
  scheduling_settings: CustomSchedulingSettingsUser;
  user_id: string;
  position: string;
  training_type: InterviewerSessionRelation['training_type'];
  session_id: string;
  interviewer_type: InterviewerSessionRelation['interviewer_type'];
  interview_module_relation_id: string;
  pause_json: PauseJson | null;
  int_tz: string;
};

export type InterviewSessionApiType = {
  session_id: InterviewSession['id'];
  meeting_id: NonNullable<InterviewSession['meeting_id']>;
  module_id: InterviewSession['module_id'] | null;
  session_name: InterviewSession['name'];
  duration: InterviewSession['session_duration'];
  location: InterviewSession['location'];
  schedule_type: InterviewSession['schedule_type'];
  session_type: InterviewSession['session_type'];
  qualifiedIntervs: SessionInterviewerType[];
  trainingIntervs: SessionInterviewerType[];
  break_duration: NonNullable<InterviewSession['break_duration']>;
  session_order: InterviewSession['session_order'];
  interviewer_cnt: InterviewSession['interviewer_cnt'];
  module_name: InterviewModuleType['name'] | null;
};

export type SessionsCombType = {
  slot_comb_id: string;
  slot_cnt: number;
  sessions: SessionSlotType[];
};

export type SessionSlotType = SessionSlotApiRespType & {
  start_time: string;
  end_time: string;
};

export type SessionSlotApiRespType = Pick<
  InterviewSessionApiType,
  | 'session_id'
  | 'meeting_id'
  | 'session_name'
  | 'duration'
  | 'schedule_type'
  | 'session_type'
  | 'break_duration'
  | 'break_duration'
  | 'session_order'
  | 'interviewer_cnt'
  | 'location'
  | 'module_name'
>;

export type InterviewerMeetingScheduled = {
  meeting_start_time: InterviewMeetingTypeDb['start_time'];
  meeting_id: InterviewMeetingTypeDb['id'];
  int_session_id: InterviewSession['id'];
  meeting_duration: InterviewSession['session_duration'];
  interv_user_id: string;
};
export type MinCalEventDetailTypes = Pick<
  CalendarEvent,
  'id' | 'start' | 'end' | 'summary'
> & {
  cal_type: CalConflictType;
};
export type InterDetailsType = {
  full_name: string;
  tokens: ScheduleAuthType | null;
  interviewer_id: string;
  email: string;
  all_events: (Pick<CalendarEvent, 'end' | 'id' | 'start' | 'summary'> & {
    conferenceData?: CalendarEvent['conferenceData'];
    attendees?: CalendarEvent['attendees'];
  })[];
  cal_date_events: {
    [cal_date_str: string]: MinCalEventDetailTypes[];
  };
  work_hours: InterDayWorkHr;
  isCalenderConnected: boolean;
  int_schedule_setting: CustomSchedulingSettingsUser;
  day_off: InterDayHolidayOff;
  holiday: InterDayHolidayOff;
};

export type InterDayWorkHr = {
  [curr_date: string]: TimeDurationType[];
};

export type InterDayHolidayOff = {
  [date: string]: TimeDurationType[];
};

export type CompServiceKeyCred = {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain: string;
};

export type TimeDurationType = {
  startTime: string;
  endTime: string;
};

export type TimeDurationDayjsType = {
  startTime: Dayjs;
  endTime: Dayjs;
};

export type IntervCntApp = {
  meet_cnt: number;
  dur_cnt: number;
};

export type AllSessionIntDetails = {
  [session_id: string]: SessionIntDetails;
};
export type SessionIntDetails = {
  session_id: InterviewSession['id'];
  meeting_id: InterviewSession['meeting_id'];
  module_id: InterviewSession['module_id'] | null;
  session_name: InterviewSession['name'];
  duration: InterviewSession['session_duration'];
  location: InterviewSession['location'];
  schedule_type: InterviewSession['schedule_type'];
  session_type: InterviewSession['session_type'];
  break_duration: InterviewSession['break_duration'];
  session_order: InterviewSession['session_order'];
  interviewer_cnt: InterviewSession['interviewer_cnt'];
  module_name: InterviewModuleType['name'] | null;
  interviewers: {
    [user_id: string]: SessionInterviewerType;
  };
};
