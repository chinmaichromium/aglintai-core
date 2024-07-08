/* eslint-disable security/detect-object-injection */
import {
  APIFindAvailability,
  APIOptions,
  CalConflictType,
  ConflictReason,
  DatabaseTable,
  InterviewSessionApiRespType,
  PauseJson,
  PlanCombinationRespType,
  SessionCombinationRespType,
  SessionInterviewerApiRespType,
  SessionsCombType,
} from '@aglint/shared-types';
import {
  getFullName,
  ScheduleUtils,
  scheduling_options_schema,
  SINGLE_DAY_TIME,
} from '@aglint/shared-utils';
import { Dayjs } from 'dayjs';
import { cloneDeep, isEqual } from 'lodash';
import { nanoid } from 'nanoid';
import * as v from 'valibot';

import {
  DBDetailsType,
  IntervsWorkHrsEventMapType,
  IntervsWorkHrsEventType,
} from './types';
import { fetch_details_from_db } from './utils/fetch_details_from_db';
import { fetchIntsCalEventsDetails } from './utils/fetchIntsCalEventsDetails';
import { findEachInterviewerFreeTimes } from './utils/findEachInterFreeTime';
import { calcIntsCombsForEachSessionRound } from './utils/interviewersCombsForSession';
import { isIntervLoadPassed } from './utils/isInterviewerLoadPassed';
import { planCombineSlots } from './utils/planCombine';
import {
  convertTimeDurStrToDayjsChunk,
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
    _api_options: v.InferInput<typeof scheduling_options_schema>,
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
      cand_start_time: _api_options.cand_start_time,
      cand_end_time: _api_options.cand_end_time,
      return_empty_slots_err: _api_options.return_empty_slots_err,
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
        show_conflicts_events:
          _api_options.include_conflicting_slots.show_conflicts_events,
        show_soft_conflicts:
          _api_options.include_conflicting_slots.show_soft_conflicts,
        out_of_working_hrs:
          _api_options.include_conflicting_slots.out_of_working_hrs,
        day_passed: _api_options.include_conflicting_slots.day_passed,
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
      this.db_details.comp_schedule_setting,
      this.schedule_dates.user_start_date_js.format(),
      this.schedule_dates.user_end_date_js.format(),
      this.api_payload.candidate_tz,
    );

    const inter_details = findEachInterviewerFreeTimes(
      int_with_events,
      this.api_payload,
      this.api_options,
      this.db_details,
      this.schedule_dates.user_start_date_js.format(),
      this.schedule_dates.user_end_date_js.format(),
    );
    for (let inter of inter_details) {
      const details: IntervsWorkHrsEventType = {
        email: inter.email,
        freeTimes: inter.freeTimes,
        work_hours: inter.work_hours,
        day_off: inter.day_off,
        holiday: inter.holiday,
        isCalenderConnected: inter.isCalenderConnected,
        cal_date_events: inter.cal_date_events,
        interviewer_tz: inter.int_schedule_setting.timeZone.tzCode,
        int_schedule_setting: inter.int_schedule_setting,
      };
      this.intervs_details_map.set(inter.interviewer_id, details);
    }
  }

  // find slots for the day
  public findCandSlotForTheDay() {
    const { findCurrentDayPlan } = this.findMultiDaySlots();
    return findCurrentDayPlan();
  }

  public findAvailabilitySlotsDateRange() {
    const { findAvailabilitySlots } = this.findMultiDaySlots();
    return findAvailabilitySlots();
  }

  // find slots for the date range
  public findCandSlotsForDateRange() {
    const { findAllDayPlans } = this.findMultiDaySlots();
    return findAllDayPlans();
  }

  public verifyIntSelectedSlots = (
    selected_slots: PlanCombinationRespType[],
  ) => {
    const verified_slots: PlanCombinationRespType[] = [];
    for (const comb of selected_slots) {
      const session_rounds: SessionCombinationRespType[][] =
        ScheduleUtils.getSessionRounds(
          comb.sessions.map((s) => ({
            ...s,
            break_duration: s.break_duration,
            session_duration: s.duration,
            session_order: s.session_order,
          })),
        ) as unknown as SessionCombinationRespType[][];
      let is_option_verified = true;
      for (const curr_round_sess of session_rounds) {
        const cand_date = userTzDayjs(curr_round_sess[0].start_time)
          .tz(this.api_payload.candidate_tz)
          .startOf('day');
        const { verifyCurrDaySlot } = this.calcMeetingCombinsForPlan(
          cand_date,
          curr_round_sess,
        );
        if (!verifyCurrDaySlot(curr_round_sess)) {
          is_option_verified = false;
          break;
        }
      }
      if (is_option_verified) {
        verified_slots.push(comb);
      }
    }
    return verified_slots;
  };

  public getCandidateSelectedSlots = (
    cand_selected_slots: DatabaseTable['candidate_request_availability']['slots'],
  ) => {
    const session_rounds = this.getSessionRounds();
    let ints_combs_for_each_round = calcIntsCombsForEachSessionRound(
      session_rounds,
      this.api_options.make_training_optional,
    );
    let all_combs: PlanCombinationRespType[][][] = [];
    for (
      let curr_round_idx = 0;
      curr_round_idx < session_rounds.length;
      ++curr_round_idx
    ) {
      const current_round_int_combs = ints_combs_for_each_round[curr_round_idx];
      const current_round_combs: PlanCombinationRespType[][] = [];
      for (let curr_date_slots of cand_selected_slots[curr_round_idx].dates) {
        const cand_date = userTzDayjs(curr_date_slots.curr_day).tz(
          this.api_payload.candidate_tz,
        );

        const curr_day_slots = this.findFixedBreakSessionCombs(
          current_round_int_combs,
          cand_date,
        );
        const curr_day_combs: PlanCombinationRespType[] = [];
        curr_date_slots.slots.forEach((slot_time) => {
          const comb = curr_day_slots.find(
            (c) => c.sessions[0].start_time === slot_time.startTime,
          );
          if (comb) {
            curr_day_combs.push({ ...comb });
          }
        });
        current_round_combs.push([...curr_day_combs]);
      }

      all_combs.push([...current_round_combs]);
    }
    return all_combs;
  };

  public async ignoreTrainee() {
    this.db_details.ses_with_ints = this.db_details.ses_with_ints.map((s) => ({
      ...s,
      trainingIntervs: [],
    }));
    this.db_details.all_inters = this.db_details.all_inters.filter(
      (i) => i.interviewer_type !== 'training',
    );
  }
  public async ignoreInterviewer(inter_id: string) {
    this.db_details.ses_with_ints = this.db_details.ses_with_ints.map((s) => ({
      ...s,
      trainingIntervs: [],
    }));
    this.db_details.all_inters = this.db_details.all_inters.filter(
      (i) => i.user_id !== inter_id,
    );
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
    interviewrs_sesn_comb: InterviewSessionApiRespType[][],
    curr_day: Dayjs, // cand time zone
  ) => {
    let all_schedule_combs: PlanCombinationRespType[] = [];
    const exploreSessionCombs = (
      current_comb: InterviewSessionApiRespType[],
      session_idx,
    ) => {
      if (session_idx === interviewrs_sesn_comb.length) {
        const combs = this.calcMeetingCombinsForPlan(
          curr_day,
          current_comb,
        ).generateSlotsForCurrDay();
        all_schedule_combs = [...all_schedule_combs, ...combs];
        return;
      }
      for (let module_comb of interviewrs_sesn_comb[Number(session_idx)]) {
        current_comb.push(module_comb);
        exploreSessionCombs(current_comb, session_idx + 1);
        current_comb.pop();
      }
    };

    exploreSessionCombs([], 0);

    const curr_day_slots = all_schedule_combs.filter((comb) => {
      return comb.sessions.length > 0;
    });

    // is slots are there along with err reasons only send slots
    if (curr_day_slots.length > 0) {
      // sorting slots
      return curr_day_slots.sort((slot1, slot2) => {
        return (
          userTzDayjs(slot1.sessions[0].start_time).unix() -
          userTzDayjs(slot2.sessions[0].start_time).unix()
        );
      });
    }

    return all_schedule_combs;
  };

  private findMultiDaySlots = () => {
    let session_rounds = this.getSessionRounds();
    let ints_combs_for_each_round = calcIntsCombsForEachSessionRound(
      session_rounds,
      this.api_options.make_training_optional,
    );
    const findMultiDaySlotsUtil = (
      final_combs: PlanCombinationRespType[][],
      curr_date: Dayjs,
      curr_round_idx: number,
    ): PlanCombinationRespType[][] => {
      if (curr_round_idx === session_rounds.length) {
        return final_combs;
      }

      let combs: PlanCombinationRespType[] = [];
      while (
        combs.length === 0 &&
        curr_date.isSameOrBefore(this.schedule_dates.user_end_date_js, 'day')
      ) {
        combs = this.findFixedBreakSessionCombs(
          ints_combs_for_each_round[curr_round_idx],
          curr_date.startOf('day'),
        );
        if (combs.length === 0) {
          if (curr_round_idx === 0) {
            break;
          } else {
            curr_date = curr_date.add(1, 'day');
          }
        }
      }
      if (combs.length === 0) {
        return [];
      }

      final_combs.push([...cloneDeep(combs)]);

      const days_gap = Math.floor(
        session_rounds[curr_round_idx][
          session_rounds[curr_round_idx].length - 1
        ].break_duration / SINGLE_DAY_TIME,
      );

      const next_day = curr_date.add(days_gap, 'day');
      return findMultiDaySlotsUtil(final_combs, next_day, ++curr_round_idx);
    };

    const findCurrentDayPlan = () => {
      let current_day = this.schedule_dates.user_start_date_js;
      const plan_combs = findMultiDaySlotsUtil([], current_day, 0);

      return plan_combs;
    };

    const findAllDayPlans = () => {
      let dayjs_start_date = this.schedule_dates.user_start_date_js;
      let dayjs_end_date = this.schedule_dates.user_end_date_js;

      let curr_date = dayjs_start_date;
      let all_combs: SessionsCombType[][][] = [];
      while (curr_date.isSameOrBefore(dayjs_end_date)) {
        const plan_combs = findMultiDaySlotsUtil([], curr_date, 0);
        if (plan_combs.length > 0) {
          const session_combs = planCombineSlots(plan_combs);
          all_combs = [...all_combs, session_combs];
        }
        curr_date = curr_date.add(1, 'day');
      }
      return all_combs;
    };
    const findAvailabilitySlots = () => {
      let dayjs_start_date = this.schedule_dates.user_start_date_js;
      let dayjs_end_date = this.schedule_dates.user_end_date_js;

      let curr_date = dayjs_start_date;
      let all_combs: PlanCombinationRespType[][][] = [];
      while (curr_date.isSameOrBefore(dayjs_end_date)) {
        const plan_combs = findMultiDaySlotsUtil([], curr_date, 0);
        if (plan_combs.length > 0) {
          const session_combs = plan_combs;
          all_combs = [...all_combs, session_combs];
        }
        curr_date = curr_date.add(1, 'day');
      }
      return all_combs;
    };
    return { findCurrentDayPlan, findAllDayPlans, findAvailabilitySlots };
  };

  private getTimeInCandTimeZone = (time: string | Dayjs) => {
    return userTzDayjs(time).tz(this.api_payload.candidate_tz);
  };
  private getTimeIntTimeZone = (
    time_str: string,
    session_id: string,
    interview_id: string,
  ) => {
    return userTzDayjs(time_str).tz(
      this.db_details.all_session_int_details[session_id].interviewers[
        interview_id
      ].scheduling_settings.timeZone.tzCode,
    );
  };
  private getIntPauseJson(session_id: string, user_id: string) {
    return this.db_details.all_session_int_details[session_id].interviewers[
      user_id
    ].pause_json;
  }
  /**
   * @param plan_comb single interview plan with assigned interviewers
   * @returns all possible slots for that day
   */
  private calcMeetingCombinsForPlan = (
    curr_day_js: Dayjs,
    plan_comb: InterviewSessionApiRespType[],
  ) => {
    let curr_day_str = curr_day_js.startOf('day').format();

    const cacheCurrPlanCalc = () => {
      const indef_paused_inters: {
        session_id: string;
        inters: (Pick<
          SessionInterviewerApiRespType,
          'user_id' | 'first_name' | 'last_name'
        > & {
          pause_json: PauseJson;
        })[];
      }[] = [];
      const curr_day_paused_inters: {
        session_id: string;
        inters: (Pick<
          SessionInterviewerApiRespType,
          'user_id' | 'first_name' | 'last_name'
        > & {
          pause_json: PauseJson;
        })[];
      }[] = [];
      const cal_disc_inters: {
        session_id: string;
        inters: Pick<
          SessionInterviewerApiRespType,
          'user_id' | 'first_name' | 'last_name'
        >[];
      }[] = [];
      const load_reached_ints: {
        session_id: string;
        inters: (Pick<
          SessionInterviewerApiRespType,
          'user_id' | 'first_name' | 'last_name'
        > & {
          type: CalConflictType;
        })[];
      }[] = [];

      let slot_week_load_density = 0;
      let slot_day_load_density = 0;

      for (let sess_idx = 0; sess_idx < plan_comb.length; ++sess_idx) {
        const curr_sess = plan_comb[sess_idx];
        const session_attendees: SessionInterviewerApiRespType[] = [
          ...curr_sess.qualifiedIntervs,
          ...curr_sess.trainingIntervs,
        ];
        indef_paused_inters.push({
          session_id: curr_sess.session_id,
          inters: [],
        });
        curr_day_paused_inters.push({
          session_id: curr_sess.session_id,
          inters: [],
        });
        cal_disc_inters.push({
          session_id: curr_sess.session_id,
          inters: [],
        });
        load_reached_ints.push({
          session_id: curr_sess.session_id,
          inters: [],
        });

        let cnt_qualified_ints = 0;

        session_attendees.forEach((attendee) => {
          const interviewer_pause_json = this.getIntPauseJson(
            curr_sess.session_id,
            attendee.user_id,
          );
          if (
            !this.intervs_details_map.get(attendee.user_id).isCalenderConnected
          ) {
            cal_disc_inters[sess_idx].inters.push({
              user_id: attendee.user_id,
              first_name: attendee.first_name,
              last_name: attendee.last_name,
            });
          }
          if (interviewer_pause_json) {
            if (interviewer_pause_json.isManual) {
              indef_paused_inters[sess_idx].inters.push({
                user_id: attendee.user_id,
                first_name: attendee.first_name,
                last_name: attendee.last_name,
                pause_json: interviewer_pause_json,
              });
            } else {
              const last_paused_date = this.getTimeIntTimeZone(
                interviewer_pause_json.end_date,
                curr_sess.session_id,
                attendee.user_id,
              );
              if (
                isTimeChunksOverLapps(
                  {
                    startTime: last_paused_date
                      .startOf('day')
                      .tz(this.api_payload.candidate_tz),
                    endTime: last_paused_date
                      .endOf('day')
                      .tz(this.api_payload.candidate_tz),
                  },
                  {
                    startTime:
                      this.getTimeInCandTimeZone(curr_day_js).startOf('day'),
                    endTime: this.getTimeInCandTimeZone(
                      curr_day_js.endOf('day'),
                    ),
                  },
                )
              ) {
                curr_day_paused_inters[sess_idx].inters.push({
                  user_id: attendee.user_id,
                  first_name: attendee.first_name,
                  last_name: attendee.last_name,
                  pause_json: interviewer_pause_json,
                });
              }
            }
          }

          if (attendee.training_type === 'qualified') {
            cnt_qualified_ints++;
            const { is_passed, type, day_load_density, week_load_density } =
              isIntervLoadPassed(
                curr_day_js,
                this.db_details,
                attendee.user_id,
                this.intervs_details_map.get(attendee.user_id)
                  .int_schedule_setting,
                plan_comb,
              );

            slot_day_load_density += day_load_density;
            slot_week_load_density += week_load_density;

            if (!is_passed) {
              load_reached_ints[sess_idx].inters.push({
                user_id: attendee.user_id,
                first_name: attendee.first_name,
                last_name: attendee.last_name,
                type,
              });
            }
          }
        });
        slot_day_load_density = slot_day_load_density / cnt_qualified_ints;
        slot_week_load_density = slot_week_load_density / cnt_qualified_ints;
      }
      return {
        indef_paused_inters,
        curr_day_paused_inters,
        cal_disc_inters,
        load_reached_ints,
        slot_day_load_density,
        slot_week_load_density,
      };
    };
    const {
      cal_disc_inters,
      curr_day_paused_inters,
      indef_paused_inters,
      load_reached_ints,
      slot_day_load_density,
      slot_week_load_density,
    } = cacheCurrPlanCalc();

    /**
     * checking  conflicts
     * calender disconnected
     * interviewer load
     * soft conflicts with key words,
     * hard conflicts any meeting,
     * interviewer paused
     * out of office etc..,
     * @param sess_slot
     * @returns null or sesn_slot with conflicts
     */
    const verifyForConflicts = (
      sesn_slot: SessionCombinationRespType,
      sessn_idx: number,
    ) => {
      const upd_sess_slot: SessionCombinationRespType = { ...sesn_slot };
      const curr_sess_cal_dic_ints = cal_disc_inters[sessn_idx].inters;
      const curr_sess_indef_paused_ints = indef_paused_inters[sessn_idx].inters;
      const curr_sess_curr_day_paused_ints =
        curr_day_paused_inters[sessn_idx].inters;
      // const curr_sess_common_time = session_ints_common_time[sessn_idx];
      upd_sess_slot.day_load_den = slot_day_load_density;
      upd_sess_slot.week_load_den = slot_week_load_density;
      const session_attendees: SessionInterviewerApiRespType[] = [
        ...upd_sess_slot.qualifiedIntervs,
        ...upd_sess_slot.trainingIntervs,
      ];

      for (const attendee of session_attendees) {
        const attendee_details = this.intervs_details_map.get(attendee.user_id);
        const int_conflic_reasons: ConflictReason[] = [];
        // cal disconnected conflict
        if (
          curr_sess_cal_dic_ints.find((s) => s.user_id === attendee.user_id)
        ) {
          int_conflic_reasons.push({
            conflict_type: 'calender_diconnected',
            conflict_event: null,
            start_time: null,
            end_time: null,
          });
        }
        const attendee_load = load_reached_ints[sessn_idx].inters.find(
          (s) => s.user_id === attendee.user_id,
        );
        if (attendee_load) {
          int_conflic_reasons.push({
            conflict_type: attendee_load.type,
            conflict_event: null,
            end_time: null,
            start_time: null,
          });
        }

        // indefenetly paused inters
        if (
          curr_sess_indef_paused_ints.some(
            (s) => s.user_id === attendee.user_id,
          )
        ) {
          int_conflic_reasons.push({
            conflict_type: 'interviewer_paused',
            conflict_event: null,
            start_time: null,
            end_time: null,
          });
        }

        //TEST:
        const curr_day_paused_inter = curr_sess_curr_day_paused_ints.find(
          (s) => s.user_id === attendee.user_id,
        );

        //curr_day paused ints
        if (curr_day_paused_inter) {
          const last_paused_date = this.getTimeIntTimeZone(
            curr_day_paused_inter.pause_json.end_date,
            upd_sess_slot.session_id,
            attendee.user_id,
          );
          const is_time_overlapps = isTimeChunksOverLapps(
            {
              startTime: last_paused_date
                .startOf('day')
                .tz(this.api_payload.candidate_tz),
              endTime: last_paused_date
                .endOf('day')
                .tz(this.api_payload.candidate_tz),
            },
            {
              startTime: this.getTimeInCandTimeZone(upd_sess_slot.start_time),
              endTime: this.getTimeInCandTimeZone(upd_sess_slot.start_time),
            },
          );
          if (is_time_overlapps) {
            if (this.api_options.include_conflicting_slots.interviewer_pause) {
              int_conflic_reasons.push({
                conflict_type: 'interviewer_paused',
                conflict_event: null,
                start_time: curr_day_paused_inter.pause_json.start_date,
                end_time: curr_day_paused_inter.pause_json.end_date,
              });
            } else {
              return null;
            }
          }
        }
        let is_slot_day_off = false;
        attendee_details.day_off[curr_day_str].forEach((t) => {
          is_slot_day_off = isTimeChunksOverLapps(
            convertTimeDurStrToDayjsChunk(t, this.api_payload.candidate_tz),
            {
              startTime: userTzDayjs(upd_sess_slot.start_time).tz(
                this.api_payload.candidate_tz,
              ),
              endTime: userTzDayjs(upd_sess_slot.end_time).tz(
                this.api_payload.candidate_tz,
              ),
            },
          );

          if (is_slot_day_off) {
            if (this.api_options.include_conflicting_slots.day_off) {
              int_conflic_reasons.push({
                conflict_type: 'day_off',
                conflict_event: 'Day Off',
                start_time: t.startTime,
                end_time: t.endTime,
              });
            }
          }
        });
        if (
          is_slot_day_off &&
          !this.api_options.include_conflicting_slots.day_off
        ) {
          return null;
        }

        let is_slot_holiday = false;
        attendee_details.holiday[curr_day_str].forEach((t) => {
          let flag = isTimeChunksOverLapps(
            convertTimeDurStrToDayjsChunk(t, this.api_payload.candidate_tz),
            {
              startTime: userTzDayjs(upd_sess_slot.start_time).tz(
                this.api_payload.candidate_tz,
              ),
              endTime: userTzDayjs(upd_sess_slot.end_time).tz(
                this.api_payload.candidate_tz,
              ),
            },
          );
          if (flag) {
            is_slot_holiday = true;
            int_conflic_reasons.push({
              conflict_type: 'holiday',
              conflict_event: 'Holiday',
              start_time: t.startTime,
              end_time: t.endTime,
            });
          }
        });

        if (
          is_slot_holiday &&
          !this.api_options.include_conflicting_slots.holiday
        ) {
          return null;
        }

        let is_slot_out_of_work_hrs = !attendee_details.work_hours[
          curr_day_str
        ].some((t) => {
          return isTimeChunksEnclosed(
            convertTimeDurStrToDayjsChunk(t, this.api_payload.candidate_tz),
            {
              startTime: userTzDayjs(upd_sess_slot.start_time).tz(
                this.api_payload.candidate_tz,
              ),
              endTime: userTzDayjs(upd_sess_slot.end_time).tz(
                this.api_payload.candidate_tz,
              ),
            },
          );
        });
        if (is_slot_out_of_work_hrs) {
          if (this.api_options.include_conflicting_slots.out_of_working_hrs) {
            int_conflic_reasons.push({
              conflict_type: 'out_of_working_hours',
              conflict_event: '',
              end_time: '',
              start_time: '',
            });
          } else {
            return null;
          }
        }

        const conflicting_events = this.intervs_details_map
          .get(attendee.user_id)
          .cal_date_events[curr_day_str].filter((cal_event) => {
            if (
              cal_event.cal_type === 'recruiting_blocks' &&
              this.api_options.use_recruiting_blocks
            ) {
              return false;
            }

            if (
              cal_event.cal_type === 'free_time' &&
              this.api_options.include_free_time
            ) {
              return false;
            }
            return isTimeChunksOverLapps(
              {
                startTime: this.getTimeInCandTimeZone(cal_event.start.dateTime),
                endTime: this.getTimeInCandTimeZone(cal_event.end.dateTime),
              },
              {
                startTime: this.getTimeInCandTimeZone(upd_sess_slot.start_time),
                endTime: this.getTimeInCandTimeZone(upd_sess_slot.end_time),
              },
            );
          });
        //conflicting events
        for (let conf_event of conflicting_events) {
          const ev_type = conf_event.cal_type;
          if (
            ev_type === 'soft' &&
            !this.api_options.include_conflicting_slots.show_soft_conflicts
          ) {
            return null;
          }
          if (
            ev_type === 'cal_event' &&
            !this.api_options.include_conflicting_slots.show_conflicts_events
          ) {
            return null;
          }
          if (
            ev_type === 'ooo' &&
            !this.api_options.include_conflicting_slots.out_of_office
          ) {
            return null;
          }
          int_conflic_reasons.push({
            conflict_type: ev_type,
            conflict_event: conf_event.summary,
            end_time: conf_event.end.dateTime,
            start_time: conf_event.start.dateTime,
          });
        }

        if (int_conflic_reasons.length > 0) {
          upd_sess_slot.ints_conflicts.push({
            interviewer: {
              user_id: attendee.user_id,
            },
            conflict_reasons: [...int_conflic_reasons],
          });
        }
      }

      const curr_time = ScheduleUtils.getNearestCurrTime(
        this.api_payload.candidate_tz,
      );
      if (
        curr_time.isSameOrAfter(
          userTzDayjs(upd_sess_slot.start_time).tz(
            this.api_payload.candidate_tz,
          ),
          'day',
        )
      ) {
        upd_sess_slot.conflict_types.push('day_passed');
      }
      const unique_conflicts = new Set<ConflictReason['conflict_type']>();
      upd_sess_slot.ints_conflicts.forEach((int) => {
        for (let intr of int.conflict_reasons) {
          unique_conflicts.add(intr.conflict_type);
        }
      });
      upd_sess_slot.is_conflict = upd_sess_slot.ints_conflicts.length > 0;
      upd_sess_slot.conflict_types = [...Array.from(unique_conflicts)];

      return upd_sess_slot;
    };

    // this is recursion function
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

      let session_slot: SessionCombinationRespType = {
        ...curr_session,
        start_time: curr_sess_start_time.format(),
        end_time: curr_sess_end_time.format(),
        ints_conflicts: [],
        is_conflict: false,
        conflict_types: [],
      };

      let slot_with_conflicts = verifyForConflicts(session_slot, session_idx);
      if (!slot_with_conflicts) {
        return [];
      } else {
        session_slot = {
          ...slot_with_conflicts,
        };
      }

      if (session_idx + 1 === plan_comb.length) {
        return [{ ...session_slot }];
      }
      const upcoming_sessn_slots = getSessionsAvailability(
        session_idx + 1,
        curr_sess_end_time.add(curr_session.break_duration).format(),
      );
      if (upcoming_sessn_slots.length === 0) {
        return [];
      } else {
        return [session_slot, ...upcoming_sessn_slots];
      }
    };

    const slotDayConflictsReasons = () => {
      const zerodaySlotsReasons: PlanCombinationRespType = {
        no_slot_reasons: [],
        plan_comb_id: nanoid(),
        sessions: [],
      };
      cal_disc_inters.forEach((s) => {
        s.inters.forEach((inter) => {
          zerodaySlotsReasons.no_slot_reasons.push({
            reason: `${getFullName(inter.first_name, inter.last_name)} calender not connected`,
          });
        });
      });
      curr_day_paused_inters.forEach((s) => {
        s.inters.forEach((inter) => {
          zerodaySlotsReasons.no_slot_reasons.push({
            reason: `${getFullName(inter.first_name, inter.last_name)} is paused`,
          });
        });
      });
      indef_paused_inters.forEach((s) => {
        s.inters.forEach((inter) => {
          zerodaySlotsReasons.no_slot_reasons.push({
            reason: `${getFullName(inter.first_name, inter.last_name)} is paused indefinetly`,
          });
        });
      });
      load_reached_ints.forEach((s) => {
        s.inters.forEach((inter) => {
          zerodaySlotsReasons.no_slot_reasons.push({
            reason: `${getFullName(inter.first_name, inter.last_name)}'s ${inter.type === 'day_load_reached' ? 'day' : 'week'} load reached`,
          });
        });
      });

      return zerodaySlotsReasons;
    };

    const generateSlotsForCurrDay = (): PlanCombinationRespType[] => {
      const dayConflictsReasons = slotDayConflictsReasons();
      if (dayConflictsReasons.no_slot_reasons.length > 0) {
        return this.api_options.return_empty_slots_err
          ? [dayConflictsReasons]
          : [];
      }
      const schedule_combs: PlanCombinationRespType[] = [];

      const curr_time = ScheduleUtils.getNearestCurrTime(
        this.api_payload.candidate_tz,
      );
      const cand_start_time = curr_day_js.set(
        'hours',
        this.api_options.cand_start_time,
      );
      const cand_end_time = curr_day_js.set(
        'hours',
        this.api_options.cand_end_time,
      );
      // TODO: flag
      let cand_time = cand_start_time;
      if (
        !this.api_options.include_conflicting_slots.day_passed &&
        curr_time.isAfter(cand_time, 'day')
      ) {
        return [];
      }
      if (
        !this.api_options.include_conflicting_slots.day_passed &&
        curr_time.isSame(cand_time, 'day')
      ) {
        cand_time = curr_time;
      }

      while (cand_time.isBefore(cand_end_time, 'minutes')) {
        const slot_comb = getSessionsAvailability(0, cand_time.format());
        if (slot_comb.length > 0) {
          schedule_combs.push({
            plan_comb_id: nanoid(),
            sessions: [...slot_comb],
            no_slot_reasons: [],
          });
        }
        cand_time = cand_time.add(
          this.api_options.check_next_minutes,
          'minutes',
        );
      }

      return schedule_combs;
    };

    const verifyCurrDaySlot = (slot: SessionCombinationRespType[]) => {
      const slot_start_time = userTzDayjs(slot[0].start_time).tz(
        this.api_payload.candidate_tz,
      );
      const slot_comb_conflicts = getSessionsAvailability(
        0,
        slot_start_time.format(),
      );
      let are_conflict_same = true;
      if (slot_comb_conflicts.length === 0) {
        return false;
      }
      for (let sesn_idx = 0; sesn_idx < slot.length; ++sesn_idx) {
        if (
          !isEqual(
            slot_comb_conflicts[sesn_idx].ints_conflicts,
            slot[sesn_idx].ints_conflicts,
          )
        ) {
          are_conflict_same = false;
          break;
        }
      }
      return are_conflict_same;
    };
    return { generateSlotsForCurrDay, verifyCurrDaySlot };
  };
  static sum(a, b) {
    return a + b;
  }
}
