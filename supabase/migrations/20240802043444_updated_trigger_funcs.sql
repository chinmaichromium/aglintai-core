alter type "public"."workflow_cron_trigger_tables" rename to "workflow_cron_trigger_tables__old_version_to_be_dropped";

create type "public"."workflow_cron_trigger_tables" as enum ('interview_meeting', 'interview_session_relation', 'interview_filter_json', 'candidate_request_availability', 'interview_module_relation', 'interview_training_progress', 'request');

create table "public"."app_job_id" (
    "id" uuid
);


create table "public"."req_sess_ids" (
    "array_agg" uuid[]
);


create table "public"."request_completed_event" (
    "id" bigint generated by default as identity not null,
    "completed_at" timestamp with time zone not null default now(),
    "request_id" uuid default gen_random_uuid(),
    "event" workflow_trigger not null
);


alter table "public"."request_completed_event" enable row level security;

alter table "public"."workflow_action_logs" alter column related_table type "public"."workflow_cron_trigger_tables" using related_table::text::"public"."workflow_cron_trigger_tables";

drop type "public"."workflow_cron_trigger_tables__old_version_to_be_dropped";

alter table "public"."interview_meeting" alter column "status" set default 'confirmed'::interview_schedule_status;

alter table "public"."request_relation" alter column "cancel_id" drop default;

CREATE UNIQUE INDEX requests_events_pkey ON public.request_completed_event USING btree (id);

alter table "public"."request_completed_event" add constraint "requests_events_pkey" PRIMARY KEY using index "requests_events_pkey";

alter table "public"."request_completed_event" add constraint "public_requests_events_request_id_fkey" FOREIGN KEY (request_id) REFERENCES request(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."request_completed_event" validate constraint "public_requests_events_request_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.func_on_update_request()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
    wa_record RECORD;
    base_time TIMESTAMP;
    allowed_endpoints TEXT[];
    w_ids uuid[];
    app_job_id uuid;
    req_sess_ids uuid[];
BEGIN
    allowed_endpoints := ARRAY[]::text[];

    -- stop queued jobs
    UPDATE workflow_action_logs
    SET status='stopped'::workflow_cron_run_status
    WHERE status='not_started' 
      AND related_table='request'::workflow_cron_trigger_tables 
      AND related_table_pkey=NEW.id;

    -- Retrieve session IDs
    SELECT ARRAY_AGG(request_relation.session_id)
    INTO req_sess_ids
    FROM request_relation
    WHERE request_relation.request_id = NEW.id;

    -- Retrieve application job ID
    SELECT applications.job_id INTO app_job_id
    FROM applications
    WHERE applications.id = NEW.application_id;

    -- Retrieve workflow IDs
    SELECT ARRAY_AGG(w_j_r.workflow_id) AS w_ids
    INTO w_ids
    FROM workflow_job_relation w_j_r
    WHERE w_j_r.job_id = app_job_id;

    -- Process workflows if the status is 'in_progress'
    IF NEW.status::text = 'in_progress' THEN
        FOR wa_record IN
          SELECT 
            workflow.id AS workflow_id, 
            workflow_action.id AS workflow_action_id, 
            workflow.interval AS interval_minutes, 
            workflow.phase AS phase, 
            workflow.trigger AS trigger, 
            json_build_object(
              'target_api', workflow_action.target_api,
              'payload', workflow_action.payload,
              'request_id', NEW.id,
              'session_ids', req_sess_ids,
              'recruiter_id', workflow.recruiter_id,
              'application_id',new.application_id
            ) AS meta
          FROM workflow
          LEFT JOIN workflow_action ON workflow_action.workflow_id = workflow.id
          WHERE 
            workflow.id = ANY(w_ids)
            AND workflow.is_paused = FALSE
            AND (workflow.trigger::text = 'onAvailReqAgent' OR workflow.trigger::text = 'onSelfScheduleReqAgent')
        LOOP
            PERFORM create_new_workflow_action_log(
              'request'::workflow_cron_trigger_tables,
              NEW.id,
              wa_record.workflow_id, 
              wa_record.workflow_action_id, 
              wa_record.interval_minutes, 
              wa_record.phase::text, 
              wa_record.meta
            );
        END LOOP;    
    END IF;

    RETURN NEW;
END;
$function$
;

grant delete on table "public"."app_job_id" to "anon";

grant insert on table "public"."app_job_id" to "anon";

grant references on table "public"."app_job_id" to "anon";

grant select on table "public"."app_job_id" to "anon";

grant trigger on table "public"."app_job_id" to "anon";

grant truncate on table "public"."app_job_id" to "anon";

grant update on table "public"."app_job_id" to "anon";

grant delete on table "public"."app_job_id" to "authenticated";

grant insert on table "public"."app_job_id" to "authenticated";

grant references on table "public"."app_job_id" to "authenticated";

grant select on table "public"."app_job_id" to "authenticated";

grant trigger on table "public"."app_job_id" to "authenticated";

grant truncate on table "public"."app_job_id" to "authenticated";

grant update on table "public"."app_job_id" to "authenticated";

grant delete on table "public"."app_job_id" to "service_role";

grant insert on table "public"."app_job_id" to "service_role";

grant references on table "public"."app_job_id" to "service_role";

grant select on table "public"."app_job_id" to "service_role";

grant trigger on table "public"."app_job_id" to "service_role";

grant truncate on table "public"."app_job_id" to "service_role";

grant update on table "public"."app_job_id" to "service_role";

grant delete on table "public"."req_sess_ids" to "anon";

grant insert on table "public"."req_sess_ids" to "anon";

grant references on table "public"."req_sess_ids" to "anon";

grant select on table "public"."req_sess_ids" to "anon";

grant trigger on table "public"."req_sess_ids" to "anon";

grant truncate on table "public"."req_sess_ids" to "anon";

grant update on table "public"."req_sess_ids" to "anon";

grant delete on table "public"."req_sess_ids" to "authenticated";

grant insert on table "public"."req_sess_ids" to "authenticated";

grant references on table "public"."req_sess_ids" to "authenticated";

grant select on table "public"."req_sess_ids" to "authenticated";

grant trigger on table "public"."req_sess_ids" to "authenticated";

grant truncate on table "public"."req_sess_ids" to "authenticated";

grant update on table "public"."req_sess_ids" to "authenticated";

grant delete on table "public"."req_sess_ids" to "service_role";

grant insert on table "public"."req_sess_ids" to "service_role";

grant references on table "public"."req_sess_ids" to "service_role";

grant select on table "public"."req_sess_ids" to "service_role";

grant trigger on table "public"."req_sess_ids" to "service_role";

grant truncate on table "public"."req_sess_ids" to "service_role";

grant update on table "public"."req_sess_ids" to "service_role";

grant delete on table "public"."request_completed_event" to "anon";

grant insert on table "public"."request_completed_event" to "anon";

grant references on table "public"."request_completed_event" to "anon";

grant select on table "public"."request_completed_event" to "anon";

grant trigger on table "public"."request_completed_event" to "anon";

grant truncate on table "public"."request_completed_event" to "anon";

grant update on table "public"."request_completed_event" to "anon";

grant delete on table "public"."request_completed_event" to "authenticated";

grant insert on table "public"."request_completed_event" to "authenticated";

grant references on table "public"."request_completed_event" to "authenticated";

grant select on table "public"."request_completed_event" to "authenticated";

grant trigger on table "public"."request_completed_event" to "authenticated";

grant truncate on table "public"."request_completed_event" to "authenticated";

grant update on table "public"."request_completed_event" to "authenticated";

grant delete on table "public"."request_completed_event" to "service_role";

grant insert on table "public"."request_completed_event" to "service_role";

grant references on table "public"."request_completed_event" to "service_role";

grant select on table "public"."request_completed_event" to "service_role";

grant trigger on table "public"."request_completed_event" to "service_role";

grant truncate on table "public"."request_completed_event" to "service_role";

grant update on table "public"."request_completed_event" to "service_role";

CREATE TRIGGER workflow_on_update_request AFTER UPDATE OF status ON public.request FOR EACH ROW EXECUTE FUNCTION func_on_update_request();


