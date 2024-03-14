import { Dayjs } from 'dayjs';

import { schedulingSettingType } from '@/src/components/Scheduling/Settings/types';

import { NewCalenderEvent, ScheduleAuthType } from '../schedule-utils/types';

export type InterDetailsType = {
  tokens: ScheduleAuthType | null;
  interviewer_id: string;
  name: string;
  profile_img: string;
  email: string;
  shedule_settings: schedulingSettingType;
  events: NewCalenderEvent[];
  freeTimes: TimeDurationType[];
  isCalenderConnected: boolean;
};
export type IntervMeta = Pick<
  InterDetailsType,
  | 'email'
  | 'interviewer_id'
  | 'tokens'
  | 'shedule_settings'
  | 'name'
  | 'profile_img'
>;
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
