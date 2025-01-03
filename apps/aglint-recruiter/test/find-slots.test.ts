// quote.service.mock.test.ts
import { v4 } from 'uuid';
import { beforeEach, describe, it, vi } from 'vitest';

import { CandidatesScheduling } from '@/services/CandidateSchedule/CandidatesScheduling';
import { fetchAndVerifyDb } from '@/services/CandidateSchedule/utils/dataFetch/fetchAndVerifyDb';
import { getIntCalEvents } from '@/services/CandidateSchedule/utils/dataFetch/getIntCalEvents';

import {
  intervier_scheduling_settings,
  test_company_schedule_setting,
  test_interviewer,
  test_sessions,
} from './constant/companyScheduleSettings';

vi.mock('@/services/CandidateSchedule/utils/dataFetch/fetchAndVerifyDb');
vi.mock('@/services/CandidateSchedule/utils/dataFetch/getIntCalEvents');

beforeEach(() => {
  const singleSesnSingInt: Awaited<ReturnType<typeof fetchAndVerifyDb>> = {
    comp_schedule_setting: test_company_schedule_setting.default,
    int_meetings: [],
    int_modules_data: [[test_sessions[0].module]],
    interview_sessions: [test_sessions[0].session],
    inter_data: [
      [
        {
          ...test_interviewer.dileep.details,
          scheduling_settings: intervier_scheduling_settings.asia,
          interview_module_relation_id: v4(), // doesn'matter
          session_id: test_sessions[0].session.id,
          pause_json: null,
          schedule_auth: null,
        },
      ],
    ],
    company_cred_hash_str: '',
  };
  vi.mocked(fetchAndVerifyDb).mockResolvedValue(singleSesnSingInt);
  vi.mocked(getIntCalEvents).mockResolvedValue([]);
});

describe('Test the single interviewer single session cases', () => {
  const cand_schedule = new CandidatesScheduling({});
  beforeEach(async () => {
    await cand_schedule.fetchDetails({
      params: {
        company_id: '1a12a488-c3f3-462b-8b3b-ea429e4f7fdc',
        start_date_str: '15/10/2024',
        end_date_str: '16/10/2024',
        req_user_tz: 'Asia/Colombo',
        session_ids: [test_sessions[0].session.id],
      },
      include_all_module_ints: false,
      is_fetch_meeting_data: false,
    });
  });
  describe('on a working day', () => {
    it('total slots should be', () => {
      //
    });
    it('calender events cross check with slots', () => {
      //
    });
    it('interviewer is paused', () => {
      //
    });
    it('when time zone is different', () => {
      //
    });
    it('when calender is not connected', () => {
      //
    });
    it('optional trainee', () => {
      //
    });
  });
  describe('on holiday', () => {
    it('all slots should of conflict type holiday', () => {
      //
    });
  });

  describe('on dayoff', () => {
    it('all slots should of conflict type dayoff', () => {
      //
    });
  });

  describe('interviewer is in holiday candidate is not', () => {
    //
  });

  describe('interviewer is in dayoff candidate is not', () => {
    //
  });
});

describe('multi session and multi interviewer cases', () => {
  it('verify total slots', () => {
    //
  });
  it('break duration is correct', () => {
    //
  });
  it('whether all interviewers are included', () => {
    //
  });
  it('optional trainee', () => {
    //
  });
});
