import { type SchedulingSettingType } from '@aglint/shared-types';

export const sample_scheduling_setting: SchedulingSettingType = {
  timeZone: {
    utc: '+05:30',
    name: '(GMT+05:30) Mumbai, Delhi, Bengaluru, Kolkata, Chennai',
    label: 'Asia/Calcutta (GMT+05:30)',
    tzCode: 'Asia/Calcutta',
  },
  break_hour: { end_time: '13:00', start_time: '12:00' },
  totalDaysOff: [
    { date: '01 Jan 2024', event_name: 'New Year Day' },
    { date: '16 Jan 2024', event_name: 'Martin Luther King Jr. Day' },
    { date: '19 Feb 2024', event_name: 'Presidents Day' },
    { date: '27 May 2024', event_name: 'Memorial Day' },
    { date: '19 Jun 2024', event_name: 'National Independence Day' },
    { date: '04 Jul 2024', event_name: 'Independence Day' },
    { date: '02 Sep 2024', event_name: 'Labor Day' },
    { date: '14 Oct 2024', event_name: 'Columbus Day' },
    { date: '11 Nov 2024', event_name: 'Veterans Day' },
    { date: '28 Nov 2024', event_name: 'Thanksgiving Day' },
    { date: '25 Dec 2024', event_name: 'Christmas Day' },
  ],
  workingHours: [
    {
      day: 'sunday',
      isWorkDay: false,
      timeRange: { endTime: '17:00', startTime: '09:00' },
    },
    {
      day: 'monday',
      isWorkDay: true,
      timeRange: { endTime: '17:00', startTime: '09:00' },
    },
    {
      day: 'tuesday',
      isWorkDay: true,
      timeRange: { endTime: '17:00', startTime: '09:00' },
    },
    {
      day: 'wednesday',
      isWorkDay: true,
      timeRange: { endTime: '17:00', startTime: '09:00' },
    },
    {
      day: 'thursday',
      isWorkDay: true,
      timeRange: { endTime: '17:00', startTime: '09:00' },
    },
    {
      day: 'friday',
      isWorkDay: true,
      timeRange: { endTime: '17:00', startTime: '09:00' },
    },
    {
      day: 'saturday',
      isWorkDay: false,
      timeRange: { endTime: '17:00', startTime: '09:00' },
    },
  ],
  interviewLoad: {
    dailyLimit: { type: 'Interviews', value: 8 },
    weeklyLimit: { type: 'Interviews', value: 41 },
  },
  debrief_defaults: {
    sourcer: false,
    recruiter: false,
    hiring_manager: true,
    previous_interviewers: false,
    recruiting_coordinator: false,
  },
  schedulingKeyWords: {
    free: [
      'Personal Time',
      'Break',
      'Team Lunch',
      'Networking Event',
      'Office Hours',
      'Casual Meetup',
    ],
    outOfOffice: ['Maternity Leave', 'Vacation', 'PTO', 'Out of Office'],
    SoftConflicts: [
      'Daily Standup',
      'Project Review',
      'Sprint Planning',
      'Strategy Session',
      'Team Briefing',
    ],
    recruitingBlocks: ['Dedicated Recruiting', 'Recruiting Block'],
  },
};
