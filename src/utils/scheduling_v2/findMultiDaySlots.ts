/* eslint-disable security/detect-object-injection */
import { Dayjs } from 'dayjs';
import { cloneDeep } from 'lodash';

import { schedulingSettingType } from '@/src/components/Scheduling/Settings/types';

import { SINGLE_DAY_TIME } from '../integrations/constants';
import {
  InterviewSessionApiType,
  PlanCombinationType,
  SessionsCombType,
} from '../scheduling_v1/types';
import { findEachInterviewerFreeTimes } from './findEachInterviewerFreeTimes';
import { findFixedTimeCombs } from './findPlanCombinations';
import { InterDetailsType } from './types';
import {
  combineSlots,
  convertDayjsToUserTimeZoneDate,
  getNextWorkingDay,
} from './utils';

// candidate side slots fetch api
export const findMultiDaySlots = (
  interview_sessions: InterviewSessionApiType[],
  intervs_details_with_events: InterDetailsType[],
  user_tz: string,
  comp_schedule_setting: schedulingSettingType,
) => {
  let session_rounds: InterviewSessionApiType[][] = [[]];
  let curr_round = 0;
  for (let sess of interview_sessions) {
    session_rounds[curr_round].push({ ...sess });
    if (sess.break_duration >= SINGLE_DAY_TIME) {
      session_rounds.push([]);
      curr_round++;
    }
  }
  session_rounds = session_rounds.filter((round) => round.length > 0);
  const findMultiDaySlotsUtil = (
    final_combs: PlanCombinationType[][],
    curr_date: Dayjs,
    curr_day_idx: number,
  ): PlanCombinationType[][] => {
    if (curr_day_idx === session_rounds.length) {
      return final_combs;
    }

    // if (dayjs(curr_date).isAfter(dayjs_end_date, 'date')) {
    //   return [];
    // }

    const curr_day_start_time = convertDayjsToUserTimeZoneDate(
      curr_date,
      user_tz,
      true,
    );

    const curr_day_end_time = convertDayjsToUserTimeZoneDate(
      curr_date,
      user_tz,
      false,
    );

    const interv_curr_day_free_time = findEachInterviewerFreeTimes(
      intervs_details_with_events,
      curr_day_start_time,
      curr_day_end_time,
    );

    const combs = findFixedTimeCombs(
      cloneDeep(session_rounds[curr_day_idx]),
      interv_curr_day_free_time,
    );

    if (combs.length === 0) {
      return [];
    }

    final_combs.push([...cloneDeep(combs)]);

    const days_gap = Math.floor(
      session_rounds[curr_day_idx][session_rounds[curr_day_idx].length - 1]
        .break_duration / SINGLE_DAY_TIME,
    );

    const next_day = getNextWorkingDay(
      comp_schedule_setting,
      curr_date,
      days_gap,
    );
    return findMultiDaySlotsUtil(final_combs, next_day, ++curr_day_idx);
  };

  const findCurrentDayPlan = (current_day: Dayjs) => {
    const plan_combs = findMultiDaySlotsUtil([], current_day, 0);

    return plan_combs;
  };

  const findAllDayPlans = (dayjs_start_date: Dayjs, dayjs_end_date: Dayjs) => {
    let curr_date = dayjs_start_date;
    let all_combs: SessionsCombType[][][] = [];
    while (curr_date.isSameOrBefore(dayjs_end_date)) {
      const plan_combs = findMultiDaySlotsUtil([], curr_date, 0);
      const session_combs = combineSlots(plan_combs);
      all_combs = [...all_combs, session_combs];
      curr_date = getNextWorkingDay(comp_schedule_setting, curr_date);
    }
    return all_combs;
  };

  return { findCurrentDayPlan, findAllDayPlans };
};
