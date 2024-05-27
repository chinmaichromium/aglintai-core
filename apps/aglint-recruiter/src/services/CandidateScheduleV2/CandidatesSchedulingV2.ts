/* eslint-disable security/detect-object-injection */
import {
  APIFindAvailability,
  APIOptions,
  CalendarEvent,
  ConflictReason,
  holidayType,
  InterDetailsType,
  InterviewSessionApiRespType,
  PauseJson,
  PlanCombinationRespType,
  schedulingSettingType,
  SessionCombinationRespType,
  SessionInterviewerApiRespType,
  TimeDurationType,
} from '@aglint/shared-types';
import { SINGLE_DAY_TIME } from '@aglint/shared-utils';
import { Dayjs } from 'dayjs';
import { nanoid } from 'nanoid';
import { z } from 'zod';

import { schema_find_availability_payload } from '@/src/types/scheduling/schema_find_availability_payload';

import { findCommonTimeRangeUtil } from './commonTimeRanges';
import { findEachInterviewerFreeTimes } from './findEachInterFreeTime';
import { calcInterversCombsForSesson } from './interviewersCombsForSession';
import { ScheduleUtils } from './ScheduleUtils';
import {
  DBDetailsType,
  FuncParams,
  IntervsWorkHrsEventMapType,
  IntervsWorkHrsEventType,
} from './types';
import { fetch_details_from_db } from './utils/fetch_details_from_db';
import { fetchIntsCalEventsDetails } from './utils/fetchIntsCalEventsDetails';
import {
  isTimeChunksEnclosed,
  isTimeChunksOverLapps,
} from './utils/time_range_utils';
import { userTzDayjs } from './utils/userTzDayjs';

export class CandidatesSchedulingV2 {
  public db_details: DBDetailsType;
  private api_options: APIOptions;
  private api_payload: Omit<APIFindAvailability, 'options'>;
  public intervs_details_map: IntervsWorkHrsEventMapType;
  private schedule_dates: {
    user_start_date_js: Dayjs;
    user_end_date_js: Dayjs;
  };

  constructor(
    _api_payload: Omit<APIFindAvailability, 'options'>,
    _api_options: z.infer<typeof schema_find_availability_payload>['options'],
  ) {
    this.api_payload = {
      candidate_tz: _api_payload.candidate_tz,
      end_date_str: _api_payload.end_date_str,
      recruiter_id: _api_payload.recruiter_id,
      session_ids: _api_payload.session_ids,
      start_date_str: _api_payload.start_date_str,
    };
    this.schedule_dates = {
      user_start_date_js: ScheduleUtils.convertDateFormatToDayjs(
        _api_payload.start_date_str,
        _api_payload.candidate_tz,
        true,
      ),
      user_end_date_js: ScheduleUtils.convertDateFormatToDayjs(
        _api_payload.end_date_str,
        _api_payload.candidate_tz,
        false,
      ),
    };
    this.api_options = {
      check_next_minutes: _api_options.check_next_minutes,
      include_free_time: _api_options.include_free_time,
      make_training_optional: _api_options.make_training_optional,
      use_recruiting_blocks: _api_options.use_recruiting_blocks,
      include_conflicting_slots: {
        calender_not_connected:
          _api_options.include_conflicting_slots.calender_not_connected,
        day_off: _api_options.include_conflicting_slots.day_off,
        holiday: _api_options.include_conflicting_slots.holiday,
        interviewer_pause:
          _api_options.include_conflicting_slots.interviewer_pause,
        interviewers_load:
          _api_options.include_conflicting_slots.interviewers_load,
        out_of_office: _api_options.include_conflicting_slots.out_of_office,
        override_working_hours: {
          start:
            _api_options.include_conflicting_slots.override_working_hours.start,
          end: _api_options.include_conflicting_slots.override_working_hours
            .end,
        },
        show_conflicts_events:
          _api_options.include_conflicting_slots.show_conflicts_events,
        show_soft_conflicts:
          _api_options.include_conflicting_slots.show_soft_conflicts,
      },
    };
    this.intervs_details_map = new Map();
  }

  // getters and setters
  public setSchedulingDates(_start_date_js: Dayjs, _end_date_js: Dayjs) {
    this.schedule_dates = {
      user_start_date_js: _start_date_js.tz(),
      user_end_date_js: _end_date_js,
    };
  }

  //NOTE: publicly exposed apis
  /**
   * fetches necessay details from supabse db for finding the slots
   */
  public async fetchDetails() {
    const meeting_date = {
      start: null,
      end: null,
    };
    // for per week load balancer
    if (this.schedule_dates) {
      const meet_start_date = this.schedule_dates.user_start_date_js.subtract(
        7,
        'day',
      );
      meeting_date.start = meet_start_date.format();
      const meet_end_date = this.schedule_dates.user_end_date_js.add(7, 'day');
      meeting_date.end = meet_end_date.format();
    }
    const db_data = await fetch_details_from_db(
      this.api_payload.session_ids,
      this.api_payload.recruiter_id,
      {
        start: meeting_date.start,
        end: meeting_date.end,
      },
    );
    this.db_details = {
      all_inters: db_data.all_inters,
      comp_schedule_setting: db_data.comp_schedule_setting,
      company_cred: db_data.company_cred,
      ses_with_ints: db_data.api_sess_ints,
      int_meetings: db_data.int_meetings,
      ints_schd_meetings: db_data.ints_schd_meetings,
      all_session_int_details: db_data.all_session_int_details,
    };
  }

  /**
   * find calender events for each interviewer
   */
  public async fetchIntsEventsFreeTimeWorkHrs() {
    const int_with_events = await fetchIntsCalEventsDetails(
      this.db_details.all_inters,
      this.db_details.company_cred,
      this.schedule_dates.user_start_date_js.format(),
      this.schedule_dates.user_end_date_js.format(),
    );

    const inter_details = findEachInterviewerFreeTimes(
      int_with_events,
      this.api_payload,
      this.db_details,
      this.schedule_dates.user_start_date_js.format(),
      this.schedule_dates.user_end_date_js.format(),
    );

    for (let inter of inter_details) {
      const details: IntervsWorkHrsEventType = {
        email: inter.email,
        events: inter.events,
        freeTimes: inter.freeTimes,
        work_hours: inter.work_hours,
      };
      this.intervs_details_map.set(inter.interviewer_id, details);
    }
  }

  //NOTE: private funcs

  private getSessionRounds() {
    let session_rounds: InterviewSessionApiRespType[][] = [[]];
    let curr_round = 0;
    for (let sess of this.db_details.ses_with_ints) {
      session_rounds[curr_round].push({ ...sess });
      if (sess.break_duration >= SINGLE_DAY_TIME) {
        session_rounds.push([]);
        curr_round++;
      }
    }
    session_rounds = session_rounds.filter((s) => s.length > 0);
    return session_rounds;
  }

  /**
  @returns combination of slots in a paricular day
  @param interview_sessions - particualar day sessions with fixed breaks
  @param interv_free_time - free time of interviewers of given session in a particalar day
**/
  private findFixedBreakSessionCombs = (
    interview_sessions: InterviewSessionApiRespType[],
    // interv_free_time: InterDetailsType[],
    currDay: Dayjs,
  ) => {
    const cached_free_time = new Map<string, TimeDurationType[]>();
    let all_schedule_combs: PlanCombinationRespType[] = [];

    const interviewrs_sesn_comb =
      calcInterversCombsForSesson(interview_sessions);
    const exploreSessionCombs = (
      current_comb: InterviewSessionApiRespType[],
      session_idx,
    ) => {
      if (session_idx === interviewrs_sesn_comb.length) {
        const combs = calcMeetingCombinsForPlan(current_comb);
        all_schedule_combs = [...all_schedule_combs, ...combs];
        return;
      }
      for (let module_comb of interviewrs_sesn_comb[Number(session_idx)]) {
        current_comb.push(module_comb);
        exploreSessionCombs(current_comb, session_idx + 1);
        current_comb.pop();
      }
    };

    /**
     * @param plan_comb single interview plan with assigned interviewers
     * @returns all possible slots for that day
     */
    const calcMeetingCombinsForPlan = (
      plan_comb: InterviewSessionApiRespType[],
    ) => {
      // main variable
      const schedule_combs: PlanCombinationRespType[] = [];

      /**
       * @param curr_session
       * @returns merges the session interviewers free times
       */
      const getInterviewersCommonTime = (
        curr_session: InterviewSessionApiRespType,
      ) => {
        const all_int_attendees = [
          ...curr_session.qualifiedIntervs,
          ...curr_session.trainingIntervs,
        ];
        let map_key: string[] = [
          curr_session.session_id,
          ...all_int_attendees.map((s) => s.user_id),
        ];
        map_key = map_key.sort();
        if (cached_free_time.has(map_key.join('_'))) {
          return cached_free_time.get(map_key.join('_'));
        }

        const common_time_range = this.findCommonTimeRange(
          all_int_attendees.map((s) => ({
            inter_id: s.user_id,
            time_ranges: [],
            interviewer_pause: this.db_details.all_session_int_details[
              curr_session.session_id
            ].interviewers[s.user_id].pause_json as PauseJson,
          })),
        );
        cached_free_time.set(map_key.join('_'), common_time_range);
        return common_time_range;
      };

      const isAnySessIntsCalDisConnected = () => {
        const all_inters: SessionInterviewerApiRespType[] = plan_comb.reduce(
          (curr_ints, sess) => [
            ...curr_ints,
            ...sess.qualifiedIntervs,
            ...sess.trainingIntervs,
          ],
          [],
        );
        return all_inters.some((int) => {
          return (
            interv_free_time.find((i) => i.interviewer_id === int.user_id)
              .isCalenderConnected === false
          );
        });
      };
      const isAnySessIntsPausedManually = () => {
        for (const sess of plan_comb) {
          const inters = [...sess.qualifiedIntervs, ...sess.trainingIntervs];

          for (const int of inters) {
            const int_pause =
              this.db_details.all_session_int_details[sess.session_id]
                .interviewers[int.user_id].pause_json;
            if (int_pause && int_pause.isManual) {
              return true;
            }
          }
        }
        return false;
      };

      if (
        this.api_options.include_conflicting_slots.calender_not_connected &&
        isAnySessIntsCalDisConnected()
      )
        return [];
      if (
        this.api_options.include_conflicting_slots.interviewer_pause &&
        isAnySessIntsPausedManually()
      ) {
        return [];
      }

      const getOutOfWorkHrsMeetAttendees = (
        curr_sess: InterviewSessionApiRespType,
        slot_start_time: string,
        slot_end_time: string,
      ) => {
        const holidays = this.db_details.comp_schedule_setting.totalDaysOff;
        const all_ints: SessionInterviewerApiRespType[] = [
          ...curr_sess.qualifiedIntervs,
          ...curr_sess.trainingIntervs,
        ];

        const ints: SessionInterviewerApiRespType[] = [];

        for (let int of all_ints) {
          const int_sched_sett =
            this.db_details.all_session_int_details[curr_sess.session_id]
              .interviewers[int.user_id].scheduling_settings;
          const int_tz = int_sched_sett.timeZone.tzCode;
          const curr_day = userTzDayjs(slot_start_time)
            .tz(int_tz)
            .format('dddd');
          const working_hrs = int_sched_sett.workingHours.find(
            (day) => day.day.toLowerCase() === curr_day.toLowerCase(),
          );

          // NOTE: condition for checking whether today is not working day
          if (
            holidays.find((holiday: holidayType) =>
              userTzDayjs(slot_start_time)
                .tz(int_tz)
                .isSame(userTzDayjs(holiday.date, 'DD MMM YYYY'), 'date'),
            ) ||
            !working_hrs.isWorkDay
          ) {
            ints.push({
              ...int,
            });
          }
          if (
            !isTimeChunksOverLapps(
              {
                startTime: ScheduleUtils.setTimeInDay(
                  slot_start_time,
                  working_hrs.timeRange.startTime,
                  int_tz,
                ),
                endTime: ScheduleUtils.setTimeInDay(
                  slot_start_time,
                  working_hrs.timeRange.endTime,
                  int_tz,
                ),
              },
              {
                startTime: userTzDayjs(slot_start_time).tz(int_tz),
                endTime: userTzDayjs(slot_end_time).tz(int_tz),
              },
            )
          ) {
            ints.push({
              ...int,
            });
          }
        }
        return ints;
      };
      const getPausedMeetAttendees = (
        curr_sess: InterviewSessionApiRespType,
        slot_start_time: string,
        slot_end_time: string,
      ) => {
        const attendes = [
          ...curr_sess.qualifiedIntervs,
          ...curr_sess.trainingIntervs,
        ].filter((int) => {
          const pause_json =
            this.db_details.all_session_int_details[curr_sess.session_id]
              .interviewers[int.user_id].pause_json;
          if (pause_json && !pause_json.isManual) {
            return isTimeChunksEnclosed(
              {
                startTime: this.getTimeInCandTimeZone(pause_json.start_date),
                endTime: this.getTimeInCandTimeZone(pause_json.end_date),
              },
              {
                startTime: this.getTimeInCandTimeZone(slot_start_time),
                endTime: this.getTimeInCandTimeZone(slot_end_time),
              },
            );
          }
          return false;
        });
        return attendes;
      };

      /**
       * checking  conflicts
       * soft conflicts with key words,
       * hard conflicts any meeting,
       * out of office,
       * interviewer paused
       * calender disconnected
       * interviewer load  TODO: later
       * @param sess_slot
       * @returns
       */
      const getConflictsInSession = (sess_slot: SessionCombinationRespType) => {
        const upd_sess_slot: SessionCombinationRespType = { ...sess_slot };
        const session_attendees: SessionInterviewerApiRespType[] = [
          ...upd_sess_slot.qualifiedIntervs,
          ...upd_sess_slot.trainingIntervs,
        ];
        const getCalEventType = (
          scheduling_settings: schedulingSettingType,
          cal_event: CalendarEvent,
        ): ConflictReason['conflict_type'] => {
          const soft_conf_key_words =
            scheduling_settings.schedulingKeyWords.SoftConflicts.map((str) =>
              str.toLowerCase(),
            );
          const out_of_office_key_words =
            scheduling_settings.schedulingKeyWords.outOfOffice.map((str) =>
              str.toLowerCase(),
            );

          const is_soft_conflict = soft_conf_key_words.some((key_word) =>
            cal_event.summary.toLowerCase().includes(key_word),
          );
          if (is_soft_conflict) return 'soft';
          const is_ooo_conflict = out_of_office_key_words.some((key_word) =>
            cal_event.summary.toLowerCase().includes(key_word),
          );
          if (is_ooo_conflict) return 'ooo';

          return 'cal_event';
        };
        for (const attendee of session_attendees) {
          const conflict_reasons: ConflictReason[] = [];
          const attendee_pause_info =
            this.db_details.all_session_int_details[sess_slot.session_id]
              .interviewers[attendee.user_id].pause_json;
          if (attendee_pause_info) {
            if (attendee_pause_info.isManual) {
              conflict_reasons.push({
                conflict_event: null,
                conflict_type: 'interviewer_paused',
                end_time: null,
                start_time: null,
              });
            } else {
              if (
                isTimeChunksEnclosed(
                  {
                    startTime: this.getTimeInCandTimeZone(
                      attendee_pause_info.start_date,
                    ),
                    endTime: this.getTimeInCandTimeZone(
                      attendee_pause_info.end_date,
                    ),
                  },
                  {
                    startTime: this.getTimeInCandTimeZone(sess_slot.start_time),
                    endTime: this.getTimeInCandTimeZone(sess_slot.end_time),
                  },
                )
              ) {
                conflict_reasons.push({
                  conflict_type: 'interviewer_paused',
                  conflict_event: null,
                  start_time: attendee_pause_info.start_date,
                  end_time: attendee_pause_info.end_date,
                });
              }
            }
          }

          const int_with_events = this.intervs_details_with_events.find(
            (int) => int.interviewer_id === attendee.user_id,
          );
          if (!int_with_events.isCalenderConnected) {
            conflict_reasons.push({
              conflict_event: '',
              conflict_type: 'calender_diconnected',
              start_time: '',
              end_time: '',
            });
          }
          const conflicting_events = int_with_events.events.filter(
            (cal_event) => {
              return isTimeChunksOverLapps(
                {
                  startTime: this.getTimeInCandTimeZone(
                    cal_event.start.dateTime,
                  ),
                  endTime: this.getTimeInCandTimeZone(cal_event.end.dateTime),
                },
                {
                  startTime: this.getTimeInCandTimeZone(
                    upd_sess_slot.start_time,
                  ),
                  endTime: this.getTimeInCandTimeZone(upd_sess_slot.end_time),
                },
              );
            },
          );
          conflicting_events.forEach((conf_ev) => {
            const ev_type = getCalEventType(
              this.db_details.comp_schedule_setting,
              conf_ev,
            );
            conflict_reasons.push({
              conflict_type: ev_type,
              conflict_event: conf_ev.summary,
              end_time: conf_ev.end.dateTime,
              start_time: conf_ev.start.dateTime,
            });
          });
          if (conflict_reasons.length > 0) {
            upd_sess_slot.ints_conflicts.push({
              interviewer: {
                user_id: attendee.user_id,
              },
              conflict_reasons: conflict_reasons,
            });
          }
        }

        return upd_sess_slot;
      };

      const getSessionsAvailability = (
        session_idx: number,
        session_start_time: string,
      ): SessionCombinationRespType[] => {
        const curr_session = plan_comb[session_idx];
        const curr_sess_start_time =
          this.getTimeInCandTimeZone(session_start_time);

        const curr_sess_end_time = this.getTimeInCandTimeZone(
          session_start_time,
        ).add(curr_session.duration, 'minutes');

        const not_avail_ints = getOutOfWorkHrsMeetAttendees(
          curr_session,
          curr_sess_start_time.format(),
          curr_sess_end_time.format(),
        );

        const paused_inters = getPausedMeetAttendees(
          curr_session,
          session_start_time,
          curr_sess_end_time.format(),
        );
        //TODO: can we include reason ??
        if (not_avail_ints.length > 0) {
          return [];
        }
        if (
          this.api_options.include_conflicting_slots.interviewer_pause &&
          paused_inters.length > 0
        ) {
          return [];
        }

        const common_time = getInterviewersCommonTime(curr_session);
        const is_slot_free = common_time.some((free_time_chunk) => {
          return isTimeChunksEnclosed(
            {
              startTime: userTzDayjs(free_time_chunk.startTime),
              endTime: userTzDayjs(free_time_chunk.endTime),
            },
            {
              startTime: userTzDayjs(curr_sess_start_time),
              endTime: userTzDayjs(curr_sess_end_time),
            },
          );
        });

        let session_slot: SessionCombinationRespType = {
          ...curr_session,
          start_time: curr_sess_start_time.format(),
          end_time: curr_sess_end_time.format(),
          ints_conflicts: [],
          is_conflict: false,
        };

        if (!is_slot_free) {
          session_slot = getConflictsInSession(session_slot);
          session_slot.is_conflict = true;
        }

        if (session_idx + 1 === plan_comb.length) {
          return [session_slot];
        }
        const upcoming_sessn_slots = getSessionsAvailability(
          session_idx + 1,
          curr_sess_end_time.add(curr_session.break_duration).format(),
        );

        return [session_slot, ...upcoming_sessn_slots];
      };

      const day_start = currDay.startOf('day');
      const day_end = currDay.add(1, 'day').startOf('day');
      let curr_time = this.getFlooredNearestCurrentTime(); //NOTE: take current time 60 minutes later
      if (curr_time.isAfter(day_end, 'minutes')) {
        return [];
      }
      if (curr_time.isBefore(day_start, 'seconds')) {
        curr_time = day_start;
      }
      while (curr_time.isBefore(day_end)) {
        const session_comb = getSessionsAvailability(0, curr_time.format());
        if (session_comb.length !== 0) {
          schedule_combs.push({
            plan_comb_id: nanoid(),
            sessions: [...session_comb],
          });
        }
        curr_time = curr_time.add(
          this.api_options.check_next_minutes,
          'minutes',
        );
      }

      return schedule_combs;
    };

    exploreSessionCombs([], 0);

    // sorting slots
    all_schedule_combs = all_schedule_combs.sort((slot1, slot2) => {
      return (
        userTzDayjs(slot1.sessions[0].start_time).unix() -
        userTzDayjs(slot2.sessions[0].start_time).unix()
      );
    });
    return all_schedule_combs;
  };

  /**
   * @param sessions interview session full details
   * @returns all combination of session with all possible interviewers
   */

  private findCommonTimeRange = (
    ints_meta: FuncParams[],
  ): TimeDurationType[] => {
    const common_time_range = findCommonTimeRangeUtil(
      ints_meta,
      this.api_payload.candidate_tz,
    );

    return common_time_range;
  };
  private getTimeInCandTimeZone = (time: string | Dayjs) => {
    return userTzDayjs(time).tz(this.api_payload.candidate_tz);
  };
}
