import { CalendarEvent } from '@aglint/shared-types';

import { SchedulingAnalyticsProcedureArgs } from '@/src/queries/scheduling-analytics/types';

export type interviewersTab =
  | 'availability'
  | 'interview_load'
  | 'training'
  | 'metrics';

export type CalendarEventWithType = (CalendarEvent & {
  type: string;
})[];

export type LeaderAnalyticsFilterType =
  SchedulingAnalyticsProcedureArgs<'leaderboard'>;

export type TrainingProgressType =
  SchedulingAnalyticsProcedureArgs<'training_progress'>;

export type EventType =
  | 'cal_event'
  | 'soft'
  | 'break'
  | 'free_time'
  | 'ooo'
  | 'recruiting_blocks'
  | 'working_hour'
  | 'bg'
  | 'company_off'
  | 'early_morning'
  | 'after_work';
