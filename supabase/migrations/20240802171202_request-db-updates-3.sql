set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.move_to_interview(applications uuid[] DEFAULT '{}'::uuid[], sessions uuid[] DEFAULT '{}'::uuid[], request jsonb DEFAULT NULL::jsonb)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
DECLARE
  response record;
BEGIN
    RAISE LOG '🪵 move_to_interview %', applications;
    UPDATE applications
    SET status = 'interview'
    WHERE id = ANY(move_to_interview.applications);
    FOR response IN (
      WITH applications_cte AS (
        SELECT UNNEST(move_to_interview.applications) as application_id
      ), sessions_cte AS (
        SELECT UNNEST(move_to_interview.sessions) as session_id
      )
      SELECT meeting_details.application_id, array_agg(meeting_details.session_id) as session_ids
      FROM meeting_details
      INNER JOIN applications_cte ON applications_cte.application_id = meeting_details.application_id
      INNER JOIN sessions_cte ON sessions_cte.session_id = meeting_details.parent_session_id
      GROUP BY meeting_details.application_id
    ) 
    LOOP
      RAISE LOG '🪵 move_to_interview loop %', applications;
      PERFORM create_session_request(application_id, session_ids, request) FROM updated_session;
    END LOOP;
END;
$function$
;


