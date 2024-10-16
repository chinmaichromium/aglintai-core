import { describe, expect, it } from 'vitest';
import { ScheduleUtils } from './ScheduleUtils';
import { InterviewSessionTypeDB } from '@aglint/shared-types';

describe('Test Schedule Util class convertDateFormatToDayjs function', () => {
  it('should convert DD/MM/YYYY date to dayjs object with correct start date and timezone', () => {
    const time_zones = [
      'Asia/Colombo',
      'America/Los_Angeles',
      'America/New_York',
    ];
    time_zones.forEach((time_zone) => {
      const date = ScheduleUtils.convertDateFormatToDayjs(
        '24/06/2024',
        time_zone,
        true
      );
      expect(date.get('date')).toBe(24);
      expect(date.get('month')).toBe(5);
      expect(date.get('year')).toBe(2024);
      expect(date.get('hour')).toBe(0);
      expect(date.get('minute')).toBe(0);
      expect(date.get('second')).toBe(0);
    });
  });
  it('should convert DD/MM/YYYY date to dayjs object with correct end date and timezone', () => {
    const time_zones = [
      'Asia/Colombo',
      'America/Los_Angeles',
      'America/New_York',
    ];

    time_zones.forEach((time_zone) => {
      const date = ScheduleUtils.convertDateFormatToDayjs(
        '24/06/2024',
        time_zone,
        false
      );
      expect(date.get('date')).toBe(24);
      expect(date.get('month')).toBe(5);
      expect(date.get('year')).toBe(2024);
      expect(date.get('hour')).toBe(23);
      expect(date.get('minute')).toBe(59);
      expect(date.get('second')).toBe(59);
    });
  });
});

describe('Test Schedule Util class getSessionRounds function', () => {
  const sessions: Pick<
    InterviewSessionTypeDB,
    'session_order' | 'break_duration' | 'session_duration'
  >[] = [
    {
      session_order: 0,
      break_duration: 30,
      session_duration: 40,
    },
    {
      session_order: 1,
      break_duration: 24 * 60,
      session_duration: 10,
    },
    {
      session_order: 2,
      break_duration: 24 * 60,
      session_duration: 10,
    },
    {
      session_order: 3,
      break_duration: 60,
      session_duration: 10,
    },
  ];
  const roundedSessions = ScheduleUtils.getSessionRounds(sessions);
  it('should return correct session rounds', () => {
    expect(roundedSessions.length).toBe(3);
    expect(roundedSessions[0].length).toBe(2);
    expect(roundedSessions[1].length).toBe(1);
    expect(roundedSessions[2].length).toBe(1);
  });
});
