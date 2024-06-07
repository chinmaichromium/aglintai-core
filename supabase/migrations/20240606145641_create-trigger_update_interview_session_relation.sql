CREATE OR REPLACE FUNCTION public.workflow_log_on_update_interview_session_relation()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
    wa_record RECORD;
    trigger_case text;
    workflow_id uuid;
BEGIN
    if NEW.is_confirmed then
        FOR wa_record IN
            SELECT wa.workflow_id as workflow_id, wa.id as workflow_action_id, w.interval as interval_minutes, w.phase as phase, json_build_object( 'schedule_id', i_s.id, 'application_id', i_s.application_id, 'meeting_id', i_m.id, 'start_time', i_m.start_time, 'recruiter_user_id', m_i.user_id, 'email_type', c_e_t.type) as meta
            , m_i.session_id
            FROM 
            interview_schedule i_s 
            JOIN interview_meeting i_m ON i_m.interview_schedule_id = i_s.id
            JOIN meeting_interviewers m_i ON m_i.meeting_id = i_m.id
            JOIN applications a ON i_s.application_id = a.id
            JOIN workflow_job_relation war ON war.job_id = a.job_id
            JOIN workflow w ON war.workflow_id = w.id
            JOIN workflow_action wa ON wa.workflow_id = war.workflow_id
            JOIN company_email_template c_e_t ON c_e_t.id = wa.email_template_id
            WHERE m_i.session_id = NEW.session_id
            AND c_e_t.type = 'upcoming_interview_reminder_interviewers' and w.trigger::text = 'upcoming_interview_reminder' 
        LOOP
            PERFORM create_new_workflow_action_log(wa_record.workflow_id, wa_record.workflow_action_id, wa_record.interval_minutes, wa_record.phase::text, wa_record.meta, i_m.start_time);
        END LOOP;
    END if;
  RETURN NEW;
END;
$function$
;

CREATE TRIGGER after_update_interview_session_relation AFTER UPDATE OF is_confirmed ON public.interview_session_relation FOR EACH ROW EXECUTE FUNCTION workflow_log_on_update_interview_session_relation();