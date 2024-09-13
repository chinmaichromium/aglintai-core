import * as v from 'valibot';
export const scheduling_options_schema = v.object({
  include_free_time: v.optional(v.boolean(), true),
  make_training_optional: v.optional(v.boolean(), true),
  use_recruiting_blocks: v.optional(v.boolean(), true),
  check_next_minutes: v.optional(v.number(), 30),
  cand_start_time: v.optional(v.number(), 8),
  cand_end_time: v.optional(v.number(), 18),
  return_empty_slots_err: v.optional(v.boolean(), false),
  include_conflicting_slots: v.optional(
    v.object({
      show_soft_conflicts: v.optional(v.boolean(), false),
      show_conflicts_events: v.optional(v.boolean(), false),
      interviewers_load: v.optional(v.boolean(), false),
      interviewer_pause: v.optional(v.boolean(), false),
      out_of_office: v.optional(v.boolean(), false),
      calender_not_connected: v.optional(v.boolean(), false),
      day_off: v.optional(v.boolean(), false),
      holiday: v.optional(v.boolean(), false),
      out_of_working_hrs: v.optional(v.boolean(), false),
      day_passed: v.optional(v.boolean(), false),
    }),
    {}
  ),
});

export const schema_find_availability_payload = v.object({
  session_ids: v.array(v.string()),
  recruiter_id: v.string(),
  candidate_tz: v.string(),
  start_date_str: v.string(),
  end_date_str: v.string(),
  options: v.optional(scheduling_options_schema, {}),
});

export const schema_find_interview_slot = v.object({
  session_ids: v.array(v.string()),
  recruiter_id: v.string(),
  candidate_tz: v.string(),
  schedule_date: v.string(),
  options: v.optional(scheduling_options_schema, {}),
});

export const schema_find_slots_date_range = v.object({
  session_ids: v.array(v.string()),
  recruiter_id: v.string(),
  date_range_start: v.string(),
  date_range_end: v.string(),
  candidate_tz: v.string(),
  options: v.optional(scheduling_options_schema, {}),
});
export const schema_candidate_req_availabale_slots = v.object({
  avail_req_id: v.string(),
  recruiter_id: v.string(),
  candidate_tz: v.string(),
  curr_round: v.optional(v.number(), 1),
});
export const schema_verify_interviewer_selected_slots = v.object({
  cand_availability_id: v.string(),
  user_tz: v.string(),
});

export const schema_find_alternative_slots = v.object({
  session_id: v.string(),
  declined_int_sesn_reln_id: v.string(),
});

export const schema_update_meeting_ints = v.object({
  session_id: v.string(),
  curr_declined_int_sesn_reln_id: v.string(),
  new_int_user_id: v.string(),
});

export const schema_troubleshoot = v.object({
  session_id: v.string(),
  recruiter_id: v.string(),
  schedule_date: v.string(),
  user_tz: v.string(),
  api_options: v.optional(scheduling_options_schema, {}),
});

export const schema_send_avail_req_link = v.object({
  session_details: v.array(
    v.object({
      session_name: v.string(),
    })
  ),
  start_date: v.string(),
  end_date: v.string(),
  job_id: v.string(),
  application_id: v.string(),
  company_id: v.string(),
});

export const candidate_new_schedule_schema = v.object({
  application_id: v.string(),
  recruiter_id: v.string(),
  api_options: v.nullish(scheduling_options_schema, {}),
  session_ids: v.array(v.string()),
  target_api: v.any(),
  request_id: v.string(),
  event_run_id: v.number(),
});

export const candidate_avail_request_schema = v.intersect([
  v.object({
    number_of_days: v.optional(v.number(), 2),
    number_of_slots: v.optional(v.number(), 2),
  }),
  candidate_new_schedule_schema,
]);

export const candidate_self_schedule_request = v.intersect([
  candidate_new_schedule_schema,
]);

export const phone_agent_self_schedule_schema = v.intersect([
  v.object({
    begin_sentence_template: v.string(),
    interviewer_name: v.string(),
    filter_json_id: v.string(),
    from_phone_no: v.string(),
    to_phone_no: v.string(),
    retell_agent_id: v.string(),
    cand_email: v.string(),
    task_id: v.nullable(v.string()),
  }),
]);

export const email_agent_self_schedule_schema = v.intersect([
  candidate_new_schedule_schema,
  v.object({
    filter_json_id: v.string(),
    task_id: v.nullish(v.string()),
    recruiter_user_id: v.string(),
  }),
]);
