/* eslint-disable security/detect-object-injection */
import { TimeDurationDayjsType, TimeDurationType } from '@aglint/shared-types';
import { cloneDeep } from 'lodash';

import { DayjsTimeRange, FuncParams } from './types';
import { userTzDayjs } from './utils/userTzDayjs';

export const findCommonTimeRangeUtil = (
  ints_meta: FuncParams,
  cand_tz: string,
): TimeDurationType[] => {
  //TODO: rewrite the merging function for beeter understanding

  const subtractpauseTimeFromFreeTimeRange = (inters: FuncParams) => {
    const updInters = cloneDeep(inters);
    for (const int of updInters) {
      if (!int.interviewer_pause || int.time_ranges.length === 0) continue;
      if (int.interviewer_pause.isManual) {
        int.time_ranges = [];
      } else {
        int.time_ranges = int.time_ranges.filter((t) => {
          const flag =
            userTzDayjs(t.endTime).isBefore(
              int.interviewer_pause.start_date,
              'date',
            ) ||
            userTzDayjs(t.startTime).isAfter(
              int.interviewer_pause.end_date,
              'date',
            );
          return flag;
        });
      }
    }

    return updInters;
  };
  const inters = subtractpauseTimeFromFreeTimeRange(ints_meta);

  if (inters.find((i) => i.time_ranges.length === 0)) return [];
  const int_sorted_range: DayjsTimeRange[] = inters.map((i) => ({
    inter_id: i.inter_id,
    time_ranges: i.time_ranges
      .sort((time1, time2) => {
        return (
          userTzDayjs(time1.startTime).unix() -
          userTzDayjs(time2.startTime).unix()
        );
      })
      .map((t) => ({
        startTime: userTzDayjs(t.startTime),
        endTime: userTzDayjs(t.endTime),
      })),
  }));

  let curr_intersection: TimeDurationDayjsType[] =
    int_sorted_range[0].time_ranges;

  for (let i = 1; i < int_sorted_range.length; ++i) {
    let current_time_ranges = [...int_sorted_range[Number(i)].time_ranges];
    let new_intersection: TimeDurationDayjsType[] = [];
    let j = 0,
      k = 0;
    while (j < curr_intersection.length && k < current_time_ranges.length) {
      if (
        curr_intersection[j].startTime.isSameOrBefore(
          current_time_ranges[k].startTime,
          'minutes',
        ) &&
        curr_intersection[j].endTime.isSameOrAfter(
          current_time_ranges[k].endTime,
          'minutes',
        )
      ) {
        new_intersection.push({
          startTime: current_time_ranges[k].startTime,
          endTime: current_time_ranges[k].endTime,
        });
        k++;
        continue;
      }

      if (
        current_time_ranges[k].startTime.isSameOrBefore(
          curr_intersection[j].startTime,
          'minutes',
        ) &&
        current_time_ranges[k].endTime.isSameOrAfter(
          curr_intersection[j].endTime,
          'minutes',
        )
      ) {
        new_intersection.push({
          startTime: curr_intersection[j].startTime,
          endTime: curr_intersection[j].endTime,
        });
        j++;
        continue;
      }

      if (
        current_time_ranges[k].endTime.isSameOrBefore(
          curr_intersection[j].startTime,
          'minutes',
        )
      ) {
        // disjoint case 1
        k++;
      }
      // disjoint case 2
      else if (
        curr_intersection[j].endTime.isSameOrBefore(
          current_time_ranges[k].startTime,
          'minutes',
        )
      ) {
        j++;
        continue;
      }

      //non disjoint case 1
      else if (
        current_time_ranges[k].endTime.isSameOrBefore(
          curr_intersection[j].endTime,
          'minutes',
        )
      ) {
        new_intersection.push({
          startTime: userTzDayjs(
            Math.max(
              current_time_ranges[k].startTime.unix(),
              curr_intersection[j].startTime.unix(),
            ) * 1000,
          ),
          endTime: current_time_ranges[k].endTime,
        });
        k++;
        continue;
      } else if (
        current_time_ranges[k].startTime.isSameOrBefore(
          curr_intersection[j].endTime,
          'minutes',
        )
      ) {
        new_intersection.push({
          startTime: current_time_ranges[k].startTime,
          endTime: userTzDayjs(
            Math.min(
              current_time_ranges[k].endTime.unix(),
              curr_intersection[j].endTime.unix(),
            ) * 1000,
          ),
        });
        j++;
      } else {
        // console.log('fnkewjjkfewnkj');
      }
    }

    curr_intersection = [...new_intersection];
  }
  return curr_intersection.map((t) => ({
    startTime: userTzDayjs(t.startTime).tz(cand_tz).format(),
    endTime: userTzDayjs(t.endTime).tz(cand_tz).format(),
  }));
};
