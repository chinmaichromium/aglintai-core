set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.ashbyjobreference(rec_id uuid)
 RETURNS jsonb[]
 LANGUAGE plpgsql
AS $function$
DECLARE
    result JSONB[];
BEGIN
    -- Initialize an empty JSONB array for the results
    result := ARRAY[]::JSONB[];

    -- Select up to 50 records that meet the specified conditions
    SELECT ARRAY_AGG(row_to_json(data))
    INTO result
    FROM (
      SELECT
         app.ats_json AS ats_json,
         job.public_job_id AS job_id,
         job.recruiter_id AS recruiter_id,
         rec.ashby_key AS apikey
         FROM
         application_reference app
         JOIN
         job_reference job ON (app.ats_json -> 'job'->>'id')::text = job.ats_job_id and job.recruiter_id = app.recruiter_id
         JOIN
         recruiter rec ON rec.id = job.recruiter_id
         WHERE app.recruiter_id = rec_id and app.is_processed=false
         ORDER BY
         (app.ats_json->>'id')::text
         LIMIT 25
   ) as data;

    -- Return the final result as a JSONB array
    RETURN result;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.batchtriggergreenhouse()
 RETURNS jsonb
 LANGUAGE plpgsql
AS $function$
DECLARE
    rec_id UUID;
    request_results JSONB;
    function_url TEXT;
    secret_key TEXT;
BEGIN
    -- Fetch the URL from the vault
    SELECT decrypted_secret 
    INTO function_url
    FROM vault.decrypted_secrets 
    WHERE name = 'APP_URL';


    SELECT decrypted_secret 
    INTO secret_key
    FROM vault.decrypted_secrets 
    WHERE name = 'SECRET_KEY';

    -- Loop through recruiters with Greenhouse integration
    FOR rec_id IN 
        SELECT recruiter_id 
        FROM integrations 
        JOIN recruiter ON recruiter.id = integrations.recruiter_id 
        WHERE integrations.greenhouse_key IS NOT NULL
    LOOP
        -- Check if there are applications with resume fetching enabled
        IF EXISTS (
            SELECT id 
            FROM applications
            WHERE is_resume_fetching 
              AND source = 'greenhouse' 
              AND recruiter_id = rec_id 
              AND remote_data IS NOT NULL
            ORDER BY created_at ASC
        ) THEN
            -- Make the HTTP POST request to the batch save endpoint
            request_results := net.http_post(
                url := concat(function_url, '/api/greenhouse/batchsave'),
                body := jsonb_build_object('recruiter_id', rec_id,'secret_key',secret_key),
                headers := jsonb_build_object('Content-Type', 'application/json')
            );
        END IF;
    END LOOP;

END;
$function$
;

CREATE OR REPLACE FUNCTION public.calc_sim_score3(job_ids uuid[], skill_qry_emb vector, edu_qry_emb vector, exp_qry_emb vector, resume_qry_emb vector, max_records integer DEFAULT 25, ts_query text DEFAULT ''::text, filter_companies text DEFAULT ''::text)
 RETURNS TABLE(application_id uuid, created_at text, first_name citext, last_name citext, job_title text, email citext, resume_link text, json_resume jsonb, profile_image text, candidate_id uuid, job_id uuid, similarity double precision, sim_exp double precision, sim_res double precision, sim_skills double precision, sim_educ double precision, candfile_id uuid)
 LANGUAGE plpgsql
AS $function$ 
BEGIN 
  RETURN QUERY 
    SELECT DISTINCT ON (j_app.candidate_id)
      j_app.id,
      j_app.created_at::text,
      cand.first_name,
      cand.last_name,
      COALESCE(c_files.resume_json->'basics'->>'currentJobTitle', ''),
      cand.email,
      c_files.file_url,
      c_files.resume_json,
      cand.avatar,
      j_app.candidate_id,
      j_app.job_id,
      (
        (
          COALESCE(1 - (c_files.experience_embedding <=> exp_qry_emb), 0) * 0.5 +
          COALESCE(1 - (c_files.resume_embedding <=> resume_qry_emb), 0) * 0.2 +
          COALESCE(1 - (c_files.skills_embedding <=> skill_qry_emb), 0) * 0.2 + 
          COALESCE(1 - (c_files.education_embedding <=> edu_qry_emb), 0) * 0.1 
        )
      ) AS similarity,
      COALESCE(1 - (c_files.experience_embedding <=> exp_qry_emb), 0),
      COALESCE(1 - (c_files.resume_embedding <=> resume_qry_emb), 0),
      COALESCE(1 - (c_files.skills_embedding <=> skill_qry_emb), 0),
      COALESCE(1 - (c_files.education_embedding <=> edu_qry_emb), 0),
      j_app.candidate_file_id
    FROM
        candidates AS cand
        JOIN applications AS j_app ON cand.id = j_app.candidate_id
        JOIN candidate_files AS c_files ON cand.id = c_files.candidate_id
    WHERE
      j_app.job_id = ANY(job_ids) AND
      CASE
        WHEN LENGTH(ts_query) > 0 THEN 
          to_tsvector(COALESCE(lower(c_files.resume_json->'basics'->>'currentJobTitle'), '')) @@ to_tsquery('english', ts_query) 
        ELSE true
        end
      AND
      CASE
        WHEN LENGTH(filter_companies) > 0 THEN to_tsvector(COALESCE(lower(c_files.resume_text),'')) @@ to_tsquery('english', filter_companies)
        ELSE true 
      END
    ORDER BY j_app.candidate_id, similarity DESC
    LIMIT max_records;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.calculate_resume_score(in_score_json jsonb, app_id uuid)
 RETURNS boolean
 LANGUAGE plpgsql
AS $function$
DECLARE
    weight_record jsonb;
    total_score numeric := 0;
BEGIN
    -- Fetching weights from the database
    SELECT
        pj.parameter_weights
    INTO
        weight_record
    FROM
        applications ja
    JOIN
        public_jobs pj ON ja.job_id = pj.id
    WHERE
        ja.id = app_id;

    -- Checking if the record exists
    IF NOT FOUND THEN
        RETURN FALSE;
    END IF;

    -- Checking and handling missing keys in score_json
    IF NOT (in_score_json->'scores'->>'skills' IS NOT NULL AND in_score_json->'scores'->>'education' IS NOT NULL AND in_score_json->'scores'->>'experience' IS NOT NULL) THEN
        -- Handle missing keys here (set default values or skip the calculation)
        -- For simplicity, we'll set default values to 0 in this example
        RETURN FALSE;
    END IF;

    -- Calculating the total score
    total_score := TRUNC(((in_score_json->'scores'->>'skills')::numeric * COALESCE((weight_record->>'skills')::numeric, 0) +
        (in_score_json->'scores'->>'education')::numeric * COALESCE((weight_record->>'education')::numeric, 0) +
        (in_score_json->'scores'->>'experience')::numeric * COALESCE((weight_record->>'experience')::numeric, 0))/100);

    -- Updating the job_applications table with the calculated score
    UPDATE applications
    SET overall_score = total_score,
    score_json = in_score_json,
    processing_status = 'success'
    WHERE id = app_id;

    -- Returning true for success
    RETURN true;
    -- RETURN total_score;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.call_webhook_on_change()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
    url text;
    payload jsonb;
    headers jsonb;
BEGIN
    -- Fetch the webhook URL from the vault
    SELECT decrypted_secret 
    INTO url
    FROM vault.decrypted_secrets 
    WHERE name = 'APP_URL';

    -- Build the payload based on the type of operation
    IF TG_OP = 'INSERT' THEN
        payload := jsonb_build_object(
            'operation_type', 'INSERT',
            'table_name', TG_TABLE_NAME,
            'new_data', row_to_json(NEW)
        );
    ELSIF TG_OP = 'UPDATE' THEN
        payload := jsonb_build_object(
            'operation_type', 'UPDATE',
            'table_name', TG_TABLE_NAME,
            'old_data', row_to_json(OLD),
            'new_data', row_to_json(NEW)
        );
    ELSIF TG_OP = 'DELETE' THEN
        payload := jsonb_build_object(
            'operation_type', 'DELETE',
            'table_name', TG_TABLE_NAME,
            'old_data', row_to_json(OLD)
        );
    END IF;

    -- Set headers for the HTTP request
    headers := jsonb_build_object(
        'Content-Type', 'application/json'
    );

    PERFORM net.http_post(
        url := concat(url,'/api/db-events'),
        headers := headers,
        body := payload::jsonb
    );

    RETURN NULL;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.count_candidates(job_ids uuid[])
 RETURNS TABLE(total_records numeric)
 LANGUAGE plpgsql
AS $function$ 
DECLARE
  candidate_count numeric;
BEGIN 
  SELECT count(DISTINCT ja.candidate_id) INTO candidate_count
  FROM
    job_applications ja
    JOIN candidates c ON ja.candidate_id = c.id
  WHERE
    ja.job_id = ANY(job_ids);

  RETURN QUERY SELECT candidate_count;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.create_auth_user(email text, password text, user_id uuid, app_meta_data jsonb, user_meta_data jsonb)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
  declare
  encrypted_pw text;
BEGIN
  -- user_id := gen_random_uuid();
  encrypted_pw := crypt(password, gen_salt('bf'));
  
  INSERT INTO auth.users
    (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, recovery_sent_at, last_sign_in_at,created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token,raw_app_meta_data,raw_user_meta_data)
  VALUES
    ('00000000-0000-0000-0000-000000000000', user_id, 'authenticated', 'authenticated', email, encrypted_pw, '2023-05-03 19:41:43.585805+00', '2023-04-22 13:10:03.275387+00', '2023-04-22 13:10:31.458239+00',  '2023-05-03 19:41:43.580424+00', '2023-05-03 19:41:43.585948+00', '', '', '', '',app_meta_data,user_meta_data);
  
  INSERT INTO auth.identities (id, user_id,provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  VALUES
    (gen_random_uuid(), user_id,gen_random_uuid(), format('{"sub":"%s","email":"%s"}', user_id::text, email)::jsonb, 'email', '2023-05-03 19:41:43.582456+00', '2023-05-03 19:41:43.582497+00', '2023-05-03 19:41:43.582497+00');
END;
$function$
;

CREATE OR REPLACE FUNCTION public.create_interview_meeting_log()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
    temp_column_name TEXT;
    old_value TEXT;
    new_value TEXT;
    query TEXT;
    delta_json jsonb = '{}'::jsonb;
BEGIN
    -- Iterate over the columns
    FOREACH temp_column_name IN ARRAY ARRAY['status', 'start_time', 'end_time', 'organizer_id', 'meeting_flow', 'delta']
    LOOP
        -- Dynamically construct the query to handle different data types
        old_value := COALESCE(row_to_json(OLD)->>temp_column_name, 'null');
        new_value := COALESCE(row_to_json(NEW)->>temp_column_name, 'null');
        -- insert log if values have changed
        IF old_value IS DISTINCT FROM new_value THEN
            delta_json := delta_json || jsonb_build_object(temp_column_name, old_value); 
        END IF;
    END LOOP;

    INSERT INTO public.interview_meeting_log (
        meeting_id
        , status
        , start_time
        , end_time
        , organizer_id
        , meeting_flow
        , delta
        )
        VALUES (
            New.id
            , NEW.status
            , NEW.start_time
            , NEW.end_time
            , NEW.organizer_id
            , NEW.meeting_flow
            , delta_json
        );  
    RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.create_new_workflow_action_log(triggered_table workflow_cron_trigger_tables, triggered_table_pkey uuid, workflow_id uuid, workflow_action_id uuid, interval_minutes numeric, phase text, meta json, base_time timestamp with time zone DEFAULT now())
 RETURNS numeric
 LANGUAGE plpgsql
AS $function$
DECLARE
    execute_at TIMESTAMP with time zone;
    inserted_id numeric;
BEGIN
    IF base_time IS NULL THEN
        base_time := NOW();
    END IF;

    -- Calculate execution time based on the phase and interval
    IF phase = 'before' THEN
        execute_at := base_time - (interval_minutes * INTERVAL '1 minute');
    ELSE
        execute_at := base_time + (interval_minutes * INTERVAL '1 minute');
    END IF;

    -- Insert record into workflow_action_logs and return the inserted ID
    INSERT INTO workflow_action_logs (
        workflow_id, workflow_action_id, meta, execute_at, related_table, related_table_pkey
    )
    VALUES (
        workflow_id, workflow_action_id, meta, execute_at, triggered_table, triggered_table_pkey
    )
    RETURNING id INTO inserted_id;

    RETURN inserted_id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.create_request_meeting_log()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
    temp_column_name TEXT;
    old_value TEXT;
    new_value TEXT;
    query TEXT;
    delta_json jsonb = '{}'::jsonb;
BEGIN
    -- Iterate over the columns
    FOREACH temp_column_name IN ARRAY ARRAY['assignee_id', 'status', 'type', 'priority']
    LOOP
        -- Dynamically construct the query to handle different data types
        old_value := COALESCE(row_to_json(OLD)->>temp_column_name, 'null');
        new_value := COALESCE(row_to_json(NEW)->>temp_column_name, 'null');
        -- insert log if values have changed
        IF old_value IS DISTINCT FROM new_value THEN
            delta_json := delta_json || jsonb_build_object(temp_column_name, old_value); 
        END IF;
    END LOOP;

    INSERT INTO public.request_log (
        request_id
        , assignee_id
        , status
        , type
        , priority  
        , delta
        )
        VALUES (
            NEW.id
            , NEW.assignee_id
            , NEW.status
            , NEW.type
            , NEW.priority
            , delta_json
        );  
    RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.create_training_progress()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
  session_relation RECORD;
BEGIN
  IF OLD.status = 'confirmed' AND NEW.status = 'completed' THEN
    FOR session_relation IN
      SELECT interview_session_relation.id 
      FROM interview_session_relation 
      JOIN interview_session ON interview_session.id = interview_session_relation.session_id
      JOIN interview_meeting ON interview_meeting.id = interview_session.meeting_id
      WHERE interview_session_relation.is_confirmed = true
        AND (interview_session_relation.training_type = 'shadow' 
          OR interview_session_relation.training_type = 'reverse_shadow') 
        AND interview_meeting.id = NEW.id
    LOOP
      -- Insert into interview_training_progress
      INSERT INTO interview_training_progress (session_relation_id)
      VALUES (session_relation.id);
    END LOOP;
  END IF;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.createrecuriterrelation(in_user_id uuid, in_recruiter_id uuid, in_is_active boolean)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
is_admin boolean;
BEGIN
   is_admin := Exists(select 1 from recruiter_user where recruiter_user.user_id = auth.uid() and role = 'admin');
   if is_admin then
      insert into recruiter_relation (user_id, recruiter_id, is_active, created_by) values (in_user_id, in_recruiter_id, in_is_active, auth.uid());
   else
      return false;
   end if;
    -- Return the final result as a UUID
    RETURN is_admin;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
AS $function$
DECLARE
    claims jsonb;
    allpermissions jsonb;
    role_name text;
    recruiter_id uuid;
BEGIN
    -- Retrieve and convert permissions to JSONB array
    SELECT jsonb_agg(permissions.name) INTO allpermissions
    FROM public.permissions
    JOIN public.role_permissions ON role_permissions.permission_id = permissions.id
    JOIN public.roles ON roles.id = role_permissions.role_id
    JOIN public.recruiter_relation ON recruiter_relation.role_id = roles.id
    WHERE permissions.is_enable = true 
      AND recruiter_relation.user_id = (event->>'user_id')::uuid;

    -- Handle case where no permissions are found
    allpermissions := COALESCE(allpermissions, '[]'::jsonb);

    -- Retrieve the role name
    SELECT roles.name, recruiter_relation.recruiter_id INTO role_name ,recruiter_id
    FROM public.roles
    JOIN public.recruiter_relation ON recruiter_relation.role_id = roles.id
    WHERE recruiter_relation.user_id = (event->>'user_id')::uuid;

    -- Proceed with claims
    claims := event->'claims';

    -- Check if 'app_metadata' exists in claims
    IF jsonb_typeof(claims->'app_metadata') IS NULL THEN
        -- If 'app_metadata' does not exist, create an empty object
        claims := jsonb_set(claims, '{app_metadata}', '{}');
    END IF;

    -- Set a claim of 'permissions' and 'role'
    claims := jsonb_set(
        claims, 
        '{app_metadata, role_permissions}', 
        jsonb_build_object('permissions', allpermissions, 'role', role_name,'recruiter_id',recruiter_id)
    );

    -- Update the 'claims' object in the original event
    event := jsonb_set(event, '{claims}', claims);

    -- Return the modified event
    RETURN event;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.decrement_interviewer_cnt()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    -- Check if the session type is 'debrief'
    IF (SELECT session_type FROM public.interview_session WHERE id = OLD.session_id) = 'debrief' THEN
        -- Update the interviewer_cnt
        UPDATE public.interview_session
        SET interviewer_cnt = interviewer_cnt - 1
        WHERE id = OLD.session_id;
    END IF;
    RETURN OLD;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.delete_session(session_id uuid, interview_plan_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
  overall_count INTEGER;
  session_order_to_delete INTEGER;
BEGIN
    DELETE FROM interview_session
    WHERE id = session_id
    RETURNING session_order INTO session_order_to_delete;
    
    SELECT COUNT(*)
    INTO overall_count
    FROM interview_session
    WHERE interview_session.interview_plan_id = delete_session.interview_plan_id
      AND session_order > session_order_to_delete;

    IF overall_count <> 0 THEN
        UPDATE interview_session
        SET session_order = session_order - 1
        WHERE interview_session.interview_plan_id = delete_session.interview_plan_id
          AND session_order > session_order_to_delete;

        UPDATE interview_session
        SET break_duration = 0
        WHERE id = (
            SELECT id 
            FROM interview_session
            WHERE interview_session.interview_plan_id = delete_session.interview_plan_id
            ORDER BY session_order DESC
            LIMIT 1
        );
    END IF;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.duplicateassessment(assessmentid uuid, newassessmentid uuid, recruiterid uuid, newtitle text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    INSERT INTO assessment (id, title, description, mode, type, level, recruiter_id)
    SELECT newAssessmentId, newTitle, description, mode, type, level, recruiterId
    FROM assessment
    WHERE id = assessmentId;
    INSERT INTO assessment_question (assessment_id, parent_question_id, question, answer, duration, description, type, level, required)
    SELECT newAssessmentId, assessment_question.parent_question_id, assessment_question.question, assessment_question.answer, assessment_question.duration, assessment_question.description, assessment_question.type, assessment_question.level, assessment_question.required
    FROM assessment_question
    WHERE assessment_question.assessment_id = assessmentId; 
END;
$function$
;

CREATE OR REPLACE FUNCTION public.emailhandlercandidatedb()
 RETURNS jsonb[]
 LANGUAGE plpgsql
AS $function$
DECLARE
    result JSONB[];
BEGIN
    -- Initialize an empty JSONB array for the results
    result := ARRAY[]::JSONB[];

    -- Select up to 50 records that meet the specified conditions
    SELECT ARRAY_AGG(row_to_json(data))
    INTO result
    FROM (
        SELECT 
        row_to_json(oe) AS outreach_email,
         json_build_object(
        'id', c.id,
        'organization_id', c.organization_id, 
        'aglint_id', c.aglint_id, 
        'email', c.email
        ) AS  ag_candidate,
        json_build_object(
        'user_id', ru.user_id,
        'email_auth', ru.email_auth
        ) AS  recruiter_user
        FROM outreached_emails oe
        JOIN aglint_candidates c ON oe.candidate_id = c.id
        JOIN recruiter_user ru ON ru.user_id=oe.recruiter_user_id
        WHERE oe.email_sent = false
        AND c.email NOT LIKE '%email_not_unlocked%'
        LIMIT 25
    ) as data;

    -- Return the final result as a JSONB array
    RETURN result;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.expire_new_applications()
 RETURNS void
 LANGUAGE plpgsql
AS $function$
begin
  UPDATE applications
  SET is_new = false
  WHERE is_new = true AND applied_at < now() - interval '6 hours';
end;
$function$
;

CREATE OR REPLACE FUNCTION public.fail_processing_applications()
 RETURNS void
 LANGUAGE plpgsql
AS $function$
begin
  with processing_applications as (
    select 
      id,
      retry
    from
      applications
    where 
      processing_status = 'processing' and 
      processing_started_at < now() - interval '5 minutes' 
  ) 
  update 
    applications
  set 
    processing_status = 'failed',
    retry = 2
  from 
    processing_applications
  where 
    applications.id = processing_applications.id;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.fetch_interview_data(rec_id uuid, text_search_filter text DEFAULT NULL::text, job_id_filter uuid[] DEFAULT NULL::uuid[], sort_by text DEFAULT 'asc'::text, cord_ids uuid[] DEFAULT NULL::uuid[], status_filter text[] DEFAULT NULL::text[], schedule_type_filter text[] DEFAULT NULL::text[], module_ids uuid[] DEFAULT NULL::uuid[], page_number integer DEFAULT 1)
 RETURNS TABLE(applications json, candidates json, file json, public_jobs json, schedule json, interview_session_meetings jsonb)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT
        row_to_json(ja) AS applications,
        row_to_json(cand) AS candidates,
        json_build_object(
            'id', candfil.id,
            'created_at', candfil.created_at,
            'file_url',candfil.file_url,
            'candidate_id',candfil.candidate_id,
            'resume_json',candfil.resume_json,
            'type',candfil.type
        )  AS file,
        json_build_object(
                    'id', pj.id,
                    'job_title', pj.job_title
        ) AS public_jobs,
        row_to_json(insc) AS schedule,
        (
            SELECT jsonb_agg(interview_sessions.interview_session_meeting) -- Changed to interview_sessions.interview_session_meeting
            FROM (
                SELECT
                    CASE
                        WHEN insc.id IS NULL THEN
                            jsonb_build_object(
                                'interview_session', row_to_json(intses),
                                'interview_meeting', null
                            )
                        ELSE
                            jsonb_build_object(
                                'interview_session', row_to_json(intses),
                                'interview_meeting', row_to_json(intmeet)
                            )
                    END AS interview_session_meeting
                FROM interview_session intses
                LEFT JOIN interview_meeting intmeet ON intmeet.id = intses.meeting_id
                LEFT JOIN interview_schedule intsch ON intsch.id = intmeet.interview_schedule_id
                WHERE
                    (insc.id IS NULL AND intses.interview_plan_id = intplan.id)
                    OR (insc.id IS NOT NULL AND insc.id = intsch.id)
                ORDER BY intses.session_order
            ) AS interview_sessions
        ) AS interview_session_meetings -- Corrected field name
    FROM
        applications ja      
        JOIN candidates cand ON ja.candidate_id = cand.id     
        LEFT JOIN public_jobs pj ON pj.id = ja.job_id
        LEFT JOIN candidate_files candfil ON candfil.id = ja.candidate_file_id
        LEFT JOIN interview_plan intplan ON intplan.job_id = ja.job_id
        LEFT JOIN interview_schedule insc ON insc.application_id = ja.id
        LEFT JOIN LATERAL (
            SELECT created_at
            FROM application_logs
            WHERE application_logs.application_id = ja.id
            ORDER BY created_at DESC
            LIMIT 1
        ) app_log ON true
    WHERE
        (ja.status = 'interview' OR insc.id IS NOT NULL)
        AND pj.recruiter_id = rec_id
        AND (
            status_filter IS NULL 
            OR (
               EXISTS (
                SELECT 1
                FROM interview_meeting intmt
                WHERE intmt.interview_schedule_id = insc.id
                AND intmt.status::text = ANY(status_filter)
             )
            ) 
        )
        AND (cord_ids IS NULL OR insc.coordinator_id =  ANY(cord_ids))
        AND (
            (text_search_filter IS NULL OR text_search_filter = '') OR  
            (LOWER(cand.first_name || ' ' || cand.last_name) LIKE LOWER('%' || text_search_filter || '%'))
        )
        AND (job_id_filter IS NULL OR ja.job_id = ANY(job_id_filter))
        AND (
            schedule_type_filter IS NULL 
            OR (
                SELECT ARRAY_AGG(inses.schedule_type)::text[]
                FROM interview_meeting intmt 
                JOIN interview_session inses ON inses.meeting_id = intmt.id 
                WHERE intmt.interview_schedule_id = insc.id
            ) && schedule_type_filter
        )
        AND (
            module_ids IS NULL 
            OR (
                SELECT ARRAY_AGG(inses.module_id)
                FROM interview_meeting intmt 
                JOIN interview_session inses ON inses.meeting_id = intmt.id
                WHERE intmt.interview_schedule_id = insc.id
            ) && module_ids
        )
    ORDER BY 
    CASE WHEN app_log.created_at IS NULL THEN 1 ELSE 0 END,
    app_log.created_at DESC, 
    cand.first_name
    LIMIT 50 -- Number of records per page
    OFFSET (page_number - 1) * 50; -- Calculate the starting position of records based on page number
END;
$function$
;

CREATE OR REPLACE FUNCTION public.fetch_slots_api_details(in_plan_id uuid, in_company_id uuid)
 RETURNS TABLE(interview_sessions jsonb, service_json text)
 LANGUAGE plpgsql
AS $function$ 
DECLARE
    int_sessions jsonb;
    rec_service_json text;
BEGIN
    -- Query to fetch interview sessions
    SELECT jsonb_agg(to_jsonb(int_sess))
    INTO int_sessions
    FROM interview_session int_sess
    WHERE int_sess.interview_plan_id = in_plan_id;

    -- Query to fetch service JSON
    SELECT rec.service_json
    INTO rec_service_json
    FROM recruiter rec
    WHERE id = in_company_id;

    -- Return the results with named keys
    RETURN QUERY 
    SELECT int_sessions, rec_service_json;
END; 
$function$
;

CREATE OR REPLACE FUNCTION public.find_avail_api_details(job_id uuid, recruiter_id uuid)
 RETURNS TABLE(interview_plan jsonb, service_json jsonb, interviewer jsonb, interview_modules jsonb)
 LANGUAGE plpgsql
AS $function$ 
  DECLARE
      int_ids_array uuid[] := '{}'; -- Initialize as empty array
      int_modules_ids_array uuid[] := '{}'; -- Initialize as empty array
  BEGIN
      -- Fetch interview plan details
      SELECT INTO interview_plan coalesce(p_jobs.interview_plan, '{}'::jsonb)
      FROM public_jobs p_jobs
      WHERE p_jobs.id = job_id;     

      SELECT array_agg(distinct module->>'module_id') INTO int_modules_ids_array
      FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '{}'::jsonb)) AS module;
      -- Extract interviewer IDs and module IDs from interview plan
      SELECT array_agg(distinct selected_interv->>'interv_id') INTO int_ids_array
      FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '[]'::jsonb)) AS plan,
          jsonb_array_elements(plan->'selectedIntervs') AS selected_interv;

      -- Fetch service details
      SELECT INTO service_json jsonb_build_object('service_json', to_jsonb(r.service_json))
      FROM recruiter r
      WHERE r.id = recruiter_id; 

      -- Fetch interviewer details
      SELECT INTO interviewer jsonb_build_object('interviewer', jsonb_agg(row_to_json(recruiter_user)))
      FROM recruiter_user
      WHERE user_id = ANY(int_ids_array); 

      -- Fetch interview module details
      SELECT INTO interview_modules jsonb_build_object('interview_modules', jsonb_agg(row_to_json(interview_module)))
      FROM interview_module
      WHERE id = ANY(int_modules_ids_array); 

      RETURN QUERY SELECT interview_plan, service_json, interviewer, interview_modules;
  END; 
  $function$
;

CREATE OR REPLACE FUNCTION public.find_avail_api_details_updated(job_id uuid, recruiter_id uuid)
 RETURNS TABLE(interview_plan jsonb, service_json jsonb, interviewer jsonb, interview_modules jsonb, shadow_ints jsonb, rshadow_ints jsonb)
 LANGUAGE plpgsql
AS $function$ 
  DECLARE
      int_ids_array uuid[] := '{}'; -- Initialize as empty array
      int_modules_ids_array uuid[] := '{}'; -- Initialize as empty array
      shadow_int_ids_array uuid[] := '{}'; -- Initialize as empty array
      rshadow_int_ids_array uuid[] := '{}'; -- Initialize as empty array
  BEGIN
      -- Fetch interview plan details
      SELECT INTO interview_plan coalesce(p_jobs.interview_plan, '{}'::jsonb)
      FROM public_jobs p_jobs
      WHERE p_jobs.id = job_id;
      
      SELECT array_agg(distinct module->>'module_id') INTO int_modules_ids_array
      FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '{}'::jsonb)) AS module;
      -- Extract interviewer IDs and module IDs from interview plan
      SELECT array_agg(distinct selected_interv->>'interv_id') INTO int_ids_array
      FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '[]'::jsonb)) AS plan,
          jsonb_array_elements(plan->'selectedIntervs') AS selected_interv;

      SELECT array_agg(distinct shadowIntervs->>'interv_id') INTO shadow_int_ids_array
            FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '[]'::jsonb)) AS plan,
                jsonb_array_elements(plan->'shadowIntervs') AS shadowIntervs;
      
      SELECT array_agg(distinct revShadowInterv->>'interv_id') INTO rshadow_int_ids_array
            FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '[]'::jsonb)) AS plan,
                jsonb_array_elements(plan->'revShadowInterv') AS revShadowInterv;

      -- Fetch service details
      SELECT INTO service_json jsonb_build_object('service_json', to_jsonb(r.service_json))
      FROM recruiter r
      WHERE r.id = recruiter_id; 

      -- Fetch interviewer details
      SELECT INTO interviewer jsonb_build_object('interviewer', jsonb_agg(row_to_json(recruiter_user)))
      FROM recruiter_user
      WHERE user_id = ANY(int_ids_array); 


-- shadow and reverse shadow 
      SELECT INTO shadow_ints jsonb_build_object('shadow_ints', jsonb_agg(row_to_json(recruiter_user)))
      FROM recruiter_user
      WHERE user_id = ANY(shadow_int_ids_array); 

      SELECT INTO rshadow_ints jsonb_build_object('rshadow_ints', jsonb_agg(row_to_json(recruiter_user)))
      FROM recruiter_user
      WHERE user_id = ANY(rshadow_int_ids_array); 

      -- Fetch interview module details
      SELECT INTO interview_modules jsonb_build_object('interview_modules', jsonb_agg(row_to_json(interview_module)))
      FROM interview_module
      WHERE id = ANY(int_modules_ids_array); 

      RETURN QUERY SELECT interview_plan, service_json, interviewer, interview_modules,shadow_ints, rshadow_ints;
  END; 
  $function$
;

CREATE OR REPLACE FUNCTION public.find_avail_api_details_updated_2(job_id uuid, recruiter_id uuid)
 RETURNS TABLE(interview_plan jsonb, service_json jsonb, interviewer jsonb, interview_modules jsonb, shadow_ints jsonb, rshadow_ints jsonb, int_mod_relns jsonb)
 LANGUAGE plpgsql
AS $function$ 
  DECLARE
      int_ids_array uuid[] := '{}'; -- Initialize as empty array
      int_modules_ids_array uuid[] := '{}'; -- Initialize as empty array
      shadow_int_ids_array uuid[] := '{}'; -- Initialize as empty array
      rshadow_int_ids_array uuid[] := '{}'; -- Initialize as empty array
  BEGIN
      -- Fetch interview plan details
      SELECT INTO interview_plan coalesce(p_jobs.interview_plan, '{}'::jsonb)
      FROM public_jobs p_jobs
      WHERE p_jobs.id = job_id;
      
      SELECT array_agg(distinct module->>'module_id') INTO int_modules_ids_array
      FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '{}'::jsonb)) AS module;
      -- Extract interviewer IDs and module IDs from interview plan
      SELECT array_agg(distinct selected_interv->>'interv_id') INTO int_ids_array
      FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '[]'::jsonb)) AS plan,
          jsonb_array_elements(plan->'selectedIntervs') AS selected_interv;

      SELECT array_agg(distinct shadowIntervs->>'interv_id') INTO shadow_int_ids_array
            FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '[]'::jsonb)) AS plan,
                jsonb_array_elements(plan->'shadowIntervs') AS shadowIntervs;
      
      SELECT array_agg(distinct revShadowInterv->>'interv_id') INTO rshadow_int_ids_array
            FROM jsonb_array_elements(COALESCE(interview_plan->'plan', '[]'::jsonb)) AS plan,
                jsonb_array_elements(plan->'revShadowInterv') AS revShadowInterv;

      -- Fetch service details
      SELECT INTO service_json jsonb_build_object('service_json', to_jsonb(r.service_json))
      FROM recruiter r
      WHERE r.id = recruiter_id; 

      -- Fetch interviewer details
      SELECT INTO interviewer jsonb_build_object('interviewer', jsonb_agg(row_to_json(recruiter_user)))
      FROM recruiter_user
      WHERE user_id = ANY(int_ids_array); 


    -- shadow and reverse shadow 
      SELECT INTO shadow_ints jsonb_build_object('shadow_ints', jsonb_agg(row_to_json(recruiter_user)))
      FROM recruiter_user
      WHERE user_id = ANY(shadow_int_ids_array); 

      SELECT INTO rshadow_ints jsonb_build_object('rshadow_ints', jsonb_agg(row_to_json(recruiter_user)))
      FROM recruiter_user
      WHERE user_id = ANY(rshadow_int_ids_array); 

      -- Fetch interview module details
      SELECT INTO interview_modules jsonb_build_object('interview_modules', jsonb_agg(row_to_json(interview_module)))
      FROM interview_module
      WHERE id = ANY(int_modules_ids_array); 

      
      -- Fetch interview module details
      SELECT INTO int_mod_relns jsonb_build_object('int_mod_relns', jsonb_agg(row_to_json(int_mod_reln)))
      FROM interview_module_relation int_mod_reln
      WHERE module_id = ANY(int_modules_ids_array); 

      RETURN QUERY SELECT interview_plan, service_json, interviewer, interview_modules,shadow_ints, rshadow_ints , int_mod_relns;
  END; 
  $function$
;

CREATE OR REPLACE FUNCTION public.get_all_interview_session_by_user_id(target_user_id uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
    schedule_data JSONB;
    user_data JSONB;
    result_data JSONB;
BEGIN
    BEGIN
        SELECT 
            jsonb_agg(
                json_build_object(
                    'interview_meeting', json_build_object(
                        'meeting_id', intmeet.id,
                        'start_time', intmeet.start_time,
                        'end_time', intmeet.end_time,
                        'session_duration', intses.session_duration,
                        'status', intmeet.status,
                        'session_name', intses.name,
                        'schedule_type', intses.schedule_type,
                        'job_title', pj.job_title
                    ),
                    'users', (
                        SELECT 
                            json_agg(
                                json_build_object(
                                    'id', recuser.user_id,
                                    'first_name', recuser.first_name,
                                    'last_name', recuser.last_name,
                                    'email', recuser.email,
                                    'profile_image', recuser.profile_image,
                                    'position', recuser.position,
                                    'training_type', intsr.training_type,
                                    'interviewer_type', intsr.interviewer_type,
                                    'location', recuser.interview_location,
                                    'scheduling_settings', recuser.scheduling_settings,
                                    'accepted_status', intsr.accepted_status,
                                    'weekly_meetings', (
                                        SELECT 
                                            json_agg(
                                                json_build_object(
                                                    'start_time', im2.start_time,
                                                    'end_time', im2.end_time,
                                                    'duration', ints2.session_duration
                                                )
                                            ) 
                                        FROM 
                                            interview_session_relation intsr2
                                            JOIN interview_module_relation intmr2 ON intmr2.id = intsr2.interview_module_relation_id 
                                            JOIN recruiter_user recuser2 ON recuser2.user_id = intmr2.user_id 
                                            JOIN interview_session ints2 ON intsr2.session_id = ints2.id
                                            JOIN interview_meeting im2 ON ints2.meeting_id = im2.id
                                        WHERE 
                                            recuser2.user_id = recuser.user_id
                                            AND intsr2.is_confirmed = true
                                            AND im2.start_time >= date_trunc('week', CURRENT_DATE)  -- Start of the current week (Monday)
                                            AND im2.start_time < date_trunc('week', CURRENT_DATE) + INTERVAL '1 week'
                                    )
                                )
                            )
                        FROM 
                            interview_session_relation intsr
                            JOIN interview_module_relation intmr ON intmr.id = intsr.interview_module_relation_id  
                            LEFT JOIN recruiter_user recuser ON recuser.user_id = intmr.user_id
                            JOIN interview_session ints ON intsr.session_id = ints.id
                            JOIN interview_module indmod1 ON indmod1.id = ints.module_id
                            JOIN interview_meeting im ON ints.meeting_id = im.id
                        WHERE 
                            im.id = intmeet.id
                    )
                )
            )
        INTO 
            schedule_data
        FROM 
            interview_meeting intmeet
            JOIN interview_session intses ON intses.meeting_id = intmeet.id
            JOIN interview_module indmod ON indmod.id = intses.module_id
            JOIN interview_schedule insc ON insc.id = intmeet.interview_schedule_id
            JOIN applications app ON app.id = insc.application_id
            JOIN public_jobs pj ON pj.id = app.job_id
            LEFT JOIN interview_session_relation intsesrel ON intses.id = intsesrel.session_id
            LEFT JOIN interview_module_relation intmodrel ON intmodrel.id = intsesrel.interview_module_relation_id
            LEFT JOIN recruiter_user ru ON ru.user_id = intmodrel.user_id
        WHERE 
            intmodrel.user_id = target_user_id 
            AND intmeet.status IN ('completed', 'confirmed', 'cancelled') 
            AND intsesrel.is_confirmed = true
        GROUP BY 
            intmeet.id, insc.id , intses.id, app.id, pj.id;
        
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                schedule_data := '[]'::jsonb;
    END;

    BEGIN
        SELECT 
            json_build_object('data', row_to_json(recuser))
        INTO 
            user_data 
        FROM  
            recruiter_user recuser  
        WHERE 
            user_id = target_user_id;
        
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                user_data := NULL;
    END;

    result_data := jsonb_build_object(
        'schedule_data', COALESCE(schedule_data, '[]'::jsonb),
        'user_data', user_data
    );

    RETURN result_data;
    
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_applicant_badges(job_id uuid, badge_constants jsonb DEFAULT '{}'::jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
AS $function$
DECLARE 
  counts jsonb;
BEGIN
  with score_json_cte as (
  select score_json -> 'badges' as badges, applications.job_id
  from applications
  where score_json -> 'badges' is not null and applications.job_id = get_applicant_badges.job_id
), badges_cte as (
  select coalesce((badges -> 'careerGrowth')::numeric, 0) as careerGrowthCount, coalesce((badges -> 'jobStability')::numeric, 0) as jobStabilityCount, coalesce((badges -> 'leadership')::numeric, 0) as leadershipCount, coalesce((badges -> 'jobHopping')::numeric, 0) as jobHoppingCount, coalesce((badges -> 'positions')::numeric, 0) as positionsCount, coalesce((badges -> 'schools')::numeric, 0) as schoolsCount, coalesce((badges -> 'skills')::numeric, 0) as skillsCount, score_json_cte.job_id
  from score_json_cte
), careerGrowth_cte as (
  select 
    badges_cte.job_id,
    count(careerGrowthCount)
  from 
    badges_cte
  where
    careerGrowthCount > coalesce((badge_constants -> 'careerGrowth')::numeric, 89)
  group by
    badges_cte.job_id
), jobStability_cte as (
  select 
    badges_cte.job_id,
    count(jobStabilityCount)
  from 
    badges_cte
  where
    jobStabilityCount > coalesce((badge_constants -> 'jobStability')::numeric, 89)
  group by
    badges_cte.job_id
), leadership_cte as (
  select 
    badges_cte.job_id,
    count(leadershipCount)
  from 
    badges_cte
  where
    leadershipCount > coalesce((badge_constants -> 'leadership')::numeric, 69)
  group by
    badges_cte.job_id
), jobHopping_cte as (
  select 
    badges_cte.job_id,
    count(jobHoppingCount)
  from 
    badges_cte
  where
    jobHoppingCount > coalesce((badge_constants -> 'jobHopping')::numeric, 0)
  group by
    badges_cte.job_id
), positions_cte as (
  select 
    badges_cte.job_id,
    count(positionsCount)
  from 
    badges_cte
  where
    positionsCount > coalesce((badge_constants -> 'positions')::numeric, 0)
  group by
    badges_cte.job_id
), schools_cte as (
  select 
    badges_cte.job_id,
    count(schoolsCount)
  from 
    badges_cte
  where
    schoolsCount > coalesce((badge_constants -> 'schools')::numeric, 0)
  group by
    badges_cte.job_id
), skills_cte as (
  select 
    badges_cte.job_id,
    count(skillsCount)
  from 
    badges_cte
  where
    skillsCount > coalesce((badge_constants -> 'skills')::numeric, 0)
  group by
    badges_cte.job_id
)
select 
  json_build_object (
    'careerGrowth',
    coalesce(careerGrowth_cte.count, 0),
    'jobStability',
    coalesce(jobStability_cte.count, 0),
    'leadership',
    coalesce(leadership_cte.count, 0),
    'jobHopping',
    coalesce(jobHopping_cte.count, 0),
    'positions',
    coalesce(positions_cte.count, 0),
    'schools',
    coalesce(schools_cte.count, 0),
    'skills',
    coalesce(skills_cte.count, 0) 
  )
into 
  counts
from 
  score_json_cte
left join 
  careerGrowth_cte on careerGrowth_cte.job_id = score_json_cte.job_id
left join 
  jobStability_cte on jobStability_cte.job_id = score_json_cte.job_id
left join 
  leadership_cte on leadership_cte.job_id = score_json_cte.job_id
left join 
  jobHopping_cte on jobHopping_cte.job_id = score_json_cte.job_id
left join 
  positions_cte on positions_cte.job_id = score_json_cte.job_id
left join 
  schools_cte on schools_cte.job_id = score_json_cte.job_id
left join 
  skills_cte on skills_cte.job_id = score_json_cte.job_id
limit 1;
RETURN counts;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_applicant_locations(job_id uuid)
 RETURNS TABLE(locations jsonb)
 LANGUAGE plpgsql
AS $function$
BEGIN
  RETURN QUERY 
  WITH cities_per_state AS (
  SELECT
    candidates.country,
    candidates.state,
    jsonb_agg(DISTINCT candidates.city) AS cities
  FROM
    public_jobs
    INNER JOIN applications ON applications.job_id = public_jobs.id
    INNER JOIN candidates ON candidates.id = applications.candidate_id
  WHERE
    public_jobs.id = get_applicant_locations.job_id
    AND candidates.city IS NOT NULL
    AND candidates.state IS NOT NULL
    AND candidates.country IS NOT NULL
  GROUP BY
    candidates.country,
    candidates.state
    ),
  states_per_country AS (
  SELECT
    country,
    jsonb_object_agg(
      state,
      cities
    ) AS states
  FROM
    cities_per_state
  GROUP BY
    country
),
countries_per_job AS (
  SELECT
    jsonb_object_agg(
      country,
      states
    ) AS countries
  FROM
    states_per_country
)
SELECT
  countries AS locations
FROM
  countries_per_job;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_candidate_info(rec_id uuid)
 RETURNS TABLE(first_name text, last_name text, avatar text, screening_title text, job_title text)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
        COALESCE(c.first_name, '') AS first_name,
        COALESCE(c.last_name, '') AS last_name,
        COALESCE(c.avatar, '') AS avatar,
        COALESCE(sq.title, '') AS screening_title,
        COALESCE(pj.job_title, '') AS job_title
    FROM 
        recruiter r
    JOIN 
        public_jobs pj ON r.id = pj.recruiter_id
    JOIN 
        applications a ON pj.id = a.job_id
    JOIN 
        candidate_files cf ON a.candidate_file_id = cf.id
    JOIN 
        candidates c ON cf.candidate_id = c.id
    LEFT JOIN
        screening_questions sq ON pj.screening_template = sq.id
    WHERE 
        r.id = rec_id
        AND a.status = 'screening';

END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_combined_resume_score(jd_data jsonb, parameter_weights jsonb)
 RETURNS integer
 LANGUAGE plpgsql
 STABLE
AS $function$
DECLARE
  overall_score numeric := 0;
BEGIN
  -- Add the weighted score to the overall score
  overall_score := TRUNC(((jd_data->'scores'->>'skills')::numeric * COALESCE((parameter_weights->>'skills')::numeric, 0) +
      (jd_data->'scores'->>'education')::numeric * COALESCE((parameter_weights->>'education')::numeric, 0) +
      (jd_data->'scores'->>'experience')::numeric * COALESCE((parameter_weights->>'experience')::numeric, 0))/100, 0);

  -- Return the truncated integer part of the overall score
  RETURN TRUNC(overall_score);
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_conversion_count(recruiter_id uuid, type text)
 RETURNS TABLE(timeline timestamp with time zone, count bigint)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
RETURN QUERY
  SELECT
  DATE_TRUNC(get_conversion_count.type, applications.converted_at) AS timeline,
  COUNT (*) AS count
FROM
  (
    SELECT
      applications.id,
      applications.converted_at
    FROM
      (
        SELECT
          applications.id,
          applications.converted_at,
          applications.job_id
        FROM
          applications
        WHERE
          status = 'qualified'
          AND converted_at IS NOT null
      ) AS applications
      INNER JOIN public_jobs ON public_jobs.id = applications.job_id
    WHERE
      public_jobs.recruiter_id = get_conversion_count.recruiter_id
  ) as applications
WHERE
  applications.id IN (
    SELECT
      interview_schedule.application_id
    FROM
      interview_schedule
    WHERE
      interview_schedule.recruiter_id = get_conversion_count.recruiter_id
  )
  AND applications.converted_at >= NOW() - INTERVAL '1 day' * (CASE
        WHEN get_conversion_count.type = 'year' THEN 36500
        WHEN get_conversion_count.type = 'month' THEN 365
        WHEN get_conversion_count.type = 'week' THEN 30
        WHEN get_conversion_count.type = 'day' THEN 7
    END)
GROUP BY timeline
ORDER BY timeline;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interview_data_count(rec_id uuid, text_search_filter text DEFAULT NULL::text, job_id_filter uuid[] DEFAULT NULL::uuid[], cord_ids uuid[] DEFAULT NULL::uuid[], status_filter text[] DEFAULT NULL::text[], schedule_type_filter text[] DEFAULT NULL::text[], module_ids uuid[] DEFAULT NULL::uuid[])
 RETURNS integer
 LANGUAGE plpgsql
AS $function$
DECLARE
    total_candidates_count integer;
BEGIN
    -- Count total number of candidates
    SELECT count(*) INTO total_candidates_count
    FROM
        applications ja      
        JOIN candidates cand ON ja.candidate_id = cand.id     
        JOIN public_jobs pj ON pj.id = ja.job_id
        LEFT JOIN interview_schedule insc ON insc.application_id = ja.id
        -- LEFT JOIN interview_meeting intmeet ON intmeet.interview_schedule_id = insc.id
    WHERE
         (ja.status = 'interview' OR insc.id IS NOT NULL)
        AND pj.recruiter_id = rec_id
        AND (
            status_filter IS NULL 
            OR (
               EXISTS (
                SELECT 1
                FROM interview_meeting intmt
                WHERE intmt.interview_schedule_id = insc.id
                AND intmt.status::text = ANY(status_filter)
             )
            ) 
        )
        AND (cord_ids IS NULL OR insc.coordinator_id =  ANY(cord_ids))
        AND (
            (text_search_filter IS NULL OR text_search_filter = '') OR  
            (LOWER(cand.first_name || ' ' || cand.last_name) LIKE LOWER('%' || text_search_filter || '%'))
        )
        AND (job_id_filter IS NULL OR ja.job_id = ANY(job_id_filter))
        AND (
            schedule_type_filter IS NULL 
            OR (
                SELECT ARRAY_AGG(inses.schedule_type)::text[]
                FROM interview_meeting intmt 
                JOIN interview_session inses ON inses.meeting_id = intmt.id 
                WHERE intmt.interview_schedule_id = insc.id
            ) && schedule_type_filter
        )
        AND (
            module_ids IS NULL 
            OR (
                SELECT ARRAY_AGG(inses.module_id)
                FROM interview_meeting intmt 
                JOIN interview_session inses ON inses.meeting_id = intmt.id
                WHERE intmt.interview_schedule_id = insc.id
            ) && module_ids
        ) ;

    RETURN total_candidates_count;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interview_leaderboard(recruiter_id uuid, type text)
 RETURNS TABLE(user_id uuid, first_name text, last_name text, profile_image text, user_position text, duration numeric, interviews bigint)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  RETURN QUERY
SELECT
  recruiter_user.user_id,
  recruiter_user.first_name,
  recruiter_user.last_name,
  recruiter_user.profile_image,
  recruiter_user.position AS user_position,
  interviewers.duration,
  interviewers.interviews
FROM
  recruiter_user
  INNER JOIN (
    SELECT
      interview_module_relation.user_id,
      SUM(interview_session.session_duration) AS duration,
      COUNT(*) AS interviews
    FROM
      interview_module_relation
      INNER JOIN (
        SELECT
          interview_session_relation.interview_module_relation_id,
          interview_session.session_duration
        FROM
          (
            SELECT
              interview_session.id,
              interview_session.session_duration
            FROM
              interview_session
              INNER JOIN (
                SELECT
                  interview_meeting.id
                FROM
                  interview_meeting
                  INNER JOIN interview_schedule ON interview_schedule.id = interview_meeting.interview_schedule_id
                WHERE
                  interview_schedule.recruiter_id = get_interview_leaderboard.recruiter_id
                  AND interview_meeting.status = 'completed'
                  AND interview_meeting.end_time >= NOW() - INTERVAL '1 day' * (CASE
        WHEN get_interview_leaderboard.type = 'year' THEN 36500
        WHEN get_interview_leaderboard.type = 'month' THEN 365
        WHEN get_interview_leaderboard.type = 'week' THEN 30
        WHEN get_interview_leaderboard.type = 'day' THEN 7
    END)
              ) AS interview_meeting ON interview_meeting.id = interview_session.meeting_id
          ) AS interview_session
          INNER JOIN interview_session_relation ON interview_session.id = interview_session_relation.session_id
        WHERE
          interview_session_relation.is_confirmed = true
      ) AS interview_session ON interview_session.interview_module_relation_id = interview_module_relation.id
    GROUP BY
      interview_module_relation.user_id
  ) AS interviewers ON interviewers.user_id = recruiter_user.user_id
  ORDER BY interviewers.duration DESC;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interview_meeting_status_count(recruiter_id uuid, type text)
 RETURNS TABLE(timeline timestamp with time zone, completed bigint, cancelled bigint, not_scheduled bigint, waiting bigint, confirmed bigint, reschedule bigint)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  RETURN QUERY
  SELECT 
    DATE_TRUNC(get_interview_meeting_status_count.type, interview_meeting.created_at) AS timeline, 
    SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed, 
    SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled,
    SUM(CASE WHEN status = 'not_scheduled' THEN 1 ELSE 0 END) AS not_scheduled,
    SUM(CASE WHEN status = 'waiting' THEN 1 ELSE 0 END) AS waiting,
    SUM(CASE WHEN status = 'confirmed' THEN 1 ELSE 0 END) AS confirmed,
    SUM(CASE WHEN status = 'reschedule' THEN 1 ELSE 0 END) AS reschedule
    FROM interview_meeting 
    INNER JOIN interview_schedule ON interview_schedule.id = interview_meeting.interview_schedule_id
    WHERE 
      interview_schedule.recruiter_id = get_interview_meeting_status_count.recruiter_id 
      AND interview_meeting.created_at >= NOW() - INTERVAL '1 day' * (CASE
        WHEN get_interview_meeting_status_count.type = 'year' THEN 36500
        WHEN get_interview_meeting_status_count.type = 'month' THEN 365
        WHEN get_interview_meeting_status_count.type = 'week' THEN 30
        WHEN get_interview_meeting_status_count.type = 'day' THEN 7
    END)
    GROUP BY timeline 
    ORDER BY timeline;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interview_modules(rec_id uuid)
 RETURNS TABLE(interview_modules jsonb, users jsonb, upcoming_meeting_count integer, completed_meeting_count integer, canceled_meeting_count integer)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    RETURN QUERY
    SELECT
        to_jsonb(intmod.*) AS interview_modules,
        COALESCE((SELECT jsonb_agg(
            jsonb_build_object(
                'user_id', ru.user_id,
                'first_name', ru.first_name,
                'last_name', ru.last_name,
                'email', ru.email,
                'profile_image', ru.profile_image,
                'position', ru.position
            )
        ) FROM recruiter_user ru 
        WHERE ru.user_id IN (SELECT intmodrel.user_id FROM interview_module_relation intmodrel WHERE intmodrel.module_id = intmod.id)), '[]'::jsonb) AS users,
        (SELECT COUNT(*) FROM interview_meeting intm JOIN interview_session inses ON inses.meeting_id=intm.id  WHERE  intm.status='confirmed' AND inses.module_id=intmod.id)::integer AS upcoming_meeting_count,
        (SELECT COUNT(*) FROM interview_meeting intm JOIN interview_session inses ON inses.meeting_id=intm.id WHERE  intm.status='completed' AND inses.module_id=intmod.id)::integer AS completed_meeting_count,
         (SELECT COUNT(*) FROM interview_meeting intm JOIN interview_session inses ON inses.meeting_id=intm.id WHERE  intm.status='cancelled' AND inses.module_id=intmod.id)::integer AS canceled_meeting_count
    FROM interview_module intmod
    WHERE intmod.recruiter_id = rec_id
    GROUP BY intmod.id
    ORDER BY intmod.created_at DESC;  -- Ensure correct grouping
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interview_schedule_by_job_id(target_job_id uuid)
 RETURNS TABLE(interview_meeting jsonb, schedule jsonb, interview_session jsonb, candidates jsonb, users jsonb)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
        row_to_json(intmeet)::jsonb AS interview_meeting,
        row_to_json(insc)::jsonb AS schedule,
        row_to_json(intses)::jsonb AS interview_session,
        row_to_json(cand)::jsonb AS candidates,
        COALESCE((
            SELECT jsonb_agg(
                jsonb_build_object(
                    'user_id', ru.user_id,
                    'first_name', ru.first_name,
                    'last_name', ru.last_name,
                    'email', ru.email,
                    'profile_image', ru.profile_image,
                    'position', ru.position
                )::jsonb
            )
            FROM recruiter_user ru 
            WHERE ru.user_id IN (
                SELECT intmodrel.user_id 
                FROM interview_session_relation intsesrel
                JOIN interview_module_relation intmodrel ON intmodrel.id = intsesrel.interview_module_relation_id
                WHERE intsesrel.session_id = intses.id AND intsesrel.is_confirmed=true
            )
        ), '[]'::jsonb) AS users
    FROM interview_meeting intmeet
    JOIN interview_session intses ON intses.meeting_id = intmeet.id 
    JOIN interview_schedule insc ON insc.id = intmeet.interview_schedule_id
    JOIN applications app ON insc.application_id = app.id  
    JOIN candidates cand ON app.candidate_id = cand.id 
    WHERE app.job_id = target_job_id AND intmeet.status='confirmed' AND intmeet.start_time > NOW()
    GROUP BY intmeet.id,intses.id, insc.id,cand.id
    ORDER BY intmeet.start_time ASC ; 
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interview_schedule_by_module_id(target_module_id uuid)
 RETURNS TABLE(interview_meeting json, users json, candidate json)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
        json_build_object(
                            'meeting_id',intmeet.id,
                            'start_time', intmeet.start_time,
                            'end_time', intmeet.end_time,
                            'session_duration', intses.session_duration,
                            'status', intmeet.status,
                            'session_name', intses.name,
                            'schedule_type', intses.schedule_type,
                            'job_title', pj.job_title
                        ) AS interview_meeting,
        (
            SELECT json_agg(json_build_object(
                    'id', recuser.user_id,
                    'first_name', recuser.first_name,
                    'last_name', recuser.last_name,
                    'email', recuser.email,
                    'profile_image', recuser.profile_image,
                    'position', recuser.position,
                    'training_type', intsr.training_type,
                    'interviewer_type',intsr.interviewer_type,
                    'location', recuser.interview_location,
                    'scheduling_settings', recuser.scheduling_settings,
                    'accepted_status' ,intsr.accepted_status,
                    'is_confirmed',intsr.is_confirmed,
                    'weekly_meetings', (
                        SELECT json_agg(json_build_object(
                            'start_time', im2.start_time,
                            'end_time', im2.end_time,
                            'duration', ints2.session_duration
                        )) 
                        FROM interview_session_relation intsr2
                        JOIN interview_module_relation intmr2 ON intmr2.id = intsr2.interview_module_relation_id 
                        JOIN recruiter_user recuser2 ON recuser2.user_id = intmr2.user_id 
                        JOIN interview_session ints2 ON intsr2.session_id = ints2.id
                        JOIN interview_meeting im2 ON ints2.meeting_id = im2.id
                        WHERE recuser2.user_id = recuser.user_id
                        AND intsr2.is_confirmed = true
                        AND im2.start_time >= date_trunc('week', CURRENT_DATE)  -- Start of the current week (Monday)
                        AND im2.start_time < date_trunc('week', CURRENT_DATE) + INTERVAL '1 week'
                    )
                )) 
            FROM interview_session_relation intsr
            JOIN interview_module_relation intmr ON intmr.id = intsr.interview_module_relation_id  
            LEFT JOIN recruiter_user recuser ON recuser.user_id = intmr.user_id
            JOIN interview_session ints ON intsr.session_id = ints.id
            JOIN interview_module indmod1 ON indmod1.id = ints.module_id
            JOIN interview_meeting im ON ints.meeting_id = im.id
            WHERE im.id = intmeet.id
        ) AS users,
         (
            SELECT json_build_object(
                'candidate_id', c.id,
                'first_name', c.first_name,
                'last_name', c.last_name,
                'email', c.email,
                'phone_number', c.phone,
                'application_id', app.id
            )
            FROM candidates c
            JOIN applications app ON app.candidate_id = c.id
            WHERE app.id = insc.application_id
        ) AS candidate
    FROM interview_meeting intmeet
    JOIN interview_session intses ON intses.meeting_id = intmeet.id
    JOIN interview_module indmod ON indmod.id = intses.module_id
    JOIN interview_schedule insc ON insc.id = intmeet.interview_schedule_id
    JOIN applications app ON app.id = insc.application_id
    JOIN public_jobs pj ON pj.id = app.job_id
    LEFT JOIN interview_session_relation intsesrel ON intses.id = intsesrel.session_id
    LEFT JOIN interview_module_relation intmodrel ON intmodrel.id = intsesrel.interview_module_relation_id
    LEFT JOIN recruiter_user ru ON ru.user_id = intmodrel.user_id
    WHERE indmod.id = target_module_id AND intmeet.status IN ('completed', 'confirmed', 'cancelled') 
    AND intsesrel.is_confirmed = true
    GROUP BY intmeet.id, insc.id , intses.id, app.id, pj.id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interview_schedule_by_rec_id(target_rec_id uuid)
 RETURNS TABLE(interview_meeting json, users json, candidate json)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
    RETURN QUERY
    SELECT 
        json_build_object(
            'meeting_id', intmeet.id,
            'start_time', intmeet.start_time,
            'end_time', intmeet.end_time,
            'session_duration', intses.session_duration,
            'status', intmeet.status,
            'session_name', intses.name,
            'schedule_type', intses.schedule_type,
            'job_title', pj.job_title,
            'job_id',pj.id

        ) AS interview_meeting,
        (
            SELECT json_agg(json_build_object(
                'id', recuser.user_id,
                'first_name', recuser.first_name,
                'last_name', recuser.last_name,
                'email', recuser.email,
                'profile_image', recuser.profile_image,
                'position', recuser.position,
                'training_type', intsr.training_type,
                'interviewer_type', intsr.interviewer_type,
                'location', recuser.interview_location,
                'scheduling_settings', recuser.scheduling_settings,
                'is_confirmed', intsr.is_confirmed,
                'weekly_meetings', (
                    SELECT json_agg(json_build_object(
                        'start_time', im2.start_time,
                        'end_time', im2.end_time,
                        'duration', ints2.session_duration,
                        'accepted_status', intsr2.accepted_status
                    ))
                    FROM interview_session_relation intsr2
                    JOIN interview_module_relation intmr2 ON intmr2.id = intsr2.interview_module_relation_id
                    JOIN recruiter_user recuser2 ON recuser2.user_id = intmr2.user_id
                    JOIN interview_session ints2 ON intsr2.session_id = ints2.id
                    JOIN interview_meeting im2 ON ints2.meeting_id = im2.id
                    WHERE recuser2.user_id = recuser.user_id
                    AND intsr2.is_confirmed = true
                    AND im2.start_time >= date_trunc('week', CURRENT_DATE)
                    AND im2.start_time < date_trunc('week', CURRENT_DATE) + INTERVAL '1 week'
                )
            ))
            FROM interview_session_relation intsr
            JOIN interview_module_relation intmr ON intmr.id = intsr.interview_module_relation_id
            LEFT JOIN recruiter_user recuser ON recuser.user_id = intmr.user_id
            JOIN interview_session ints ON intsr.session_id = ints.id
            JOIN interview_module indmod1 ON indmod1.id = ints.module_id
            JOIN interview_meeting im ON ints.meeting_id = im.id
            WHERE im.id = intmeet.id
        ) AS users,
        (
            SELECT json_build_object(
                'candidate_id', c.id,
                'first_name', c.first_name,
                'last_name', c.last_name,
                'email', c.email,
                'phone_number', c.phone,
                'application_id', app.id
            )
            FROM candidates c
            JOIN applications app ON app.candidate_id = c.id
            WHERE app.id = insc.application_id
        ) AS candidate
    FROM interview_meeting intmeet
    JOIN interview_session intses ON intses.meeting_id = intmeet.id
    JOIN interview_module indmod ON indmod.id = intses.module_id
    JOIN interview_schedule insc ON insc.id = intmeet.interview_schedule_id
    JOIN applications app ON app.id = insc.application_id
    JOIN public_jobs pj ON pj.id = app.job_id
    LEFT JOIN interview_session_relation intsesrel ON intses.id = intsesrel.session_id
    LEFT JOIN interview_module_relation intmodrel ON intmodrel.id = intsesrel.interview_module_relation_id
    LEFT JOIN recruiter_user ru ON ru.user_id = intmodrel.user_id
    WHERE pj.recruiter_id = target_rec_id 
      AND intmeet.status IN ('completed', 'confirmed', 'cancelled', 'waiting')
    GROUP BY intmeet.id, insc.id, intses.id, app.id, pj.id;
END;$function$
;

CREATE OR REPLACE FUNCTION public.get_interview_schedule_by_user_id(target_user_id uuid)
 RETURNS TABLE(interview_meeting json, interview_session json, schedule json, users json)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
        row_to_json(intmeet) AS interview_meeting,
        row_to_json(intses) AS interview_session,
        row_to_json(insc) AS schedule,
        json_agg(json_build_object(
            'id', intmodrel.user_id,
            'training_type', intsesrel.training_type,
            'first_name', ru.first_name,
            'last_name', ru.last_name,
            'email', ru.email,
            'profile_image', ru.profile_image,
            'is_confirmed', intsesrel.is_confirmed
        )) AS users
    FROM interview_meeting intmeet
    JOIN interview_session intses ON intses.meeting_id = intmeet.id
    JOIN interview_schedule insc ON insc.id = intmeet.interview_schedule_id
    LEFT JOIN interview_session_relation intsesrel ON intses.id = intsesrel.session_id
    LEFT JOIN interview_module_relation intmodrel ON intmodrel.id = intsesrel.interview_module_relation_id
    LEFT JOIN recruiter_user ru ON ru.user_id = intmodrel.user_id
    WHERE intmodrel.user_id = target_user_id  AND intmeet.status IN ('completed','confirmed','cancelled') 
    AND intsesrel.is_confirmed = true
    GROUP BY intmeet.id, insc.id , intses.id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interview_training_status_count(recruiter_id uuid)
 RETURNS TABLE(id uuid, name text, training_status_count jsonb)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN 
  RETURN QUERY 
  SELECT
  interview_module.id,
  interview_module.name,
  modules.training_status_count
FROM
  interview_module
  INNER JOIN (
    SELECT
      modules.module_id AS id,
      jsonb_build_object(
        'qualified',
        qualified_count,
        'training',
        training_count
      ) AS training_status_count
    FROM
      (
        SELECT
          interview_module_relation.module_id AS module_id,
          SUM(
            CASE
              WHEN interview_module_relation.training_status = 'qualified' THEN 1
              ELSE 0
            END
          ) AS qualified_count,
          SUM(
            CASE
              WHEN interview_module_relation.training_status = 'training' THEN 1
              ELSE 0
            END
          ) AS training_count
        FROM
          interview_module_relation
        GROUP BY
          interview_module_relation.module_id
      ) AS modules
    GROUP BY
      modules.module_id,
      modules.qualified_count,
      modules.training_count
  ) AS modules ON modules.id = interview_module.id
  WHERE interview_module.recruiter_id = get_interview_training_status_count.recruiter_id
  ORDER BY ((modules.training_status_count->>'training')::int + (modules.training_status_count->>'qualified')::int) DESC;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interviewer_meetings(target_user_id uuid)
 RETURNS TABLE(interviewer_meetings json)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    RETURN QUERY
    SELECT json_build_object(
                            'start_time', im2.start_time,
                            'end_time', im2.end_time,
                            'duration', ints2.session_duration
                        )
    FROM interview_session_relation intsr2
    JOIN interview_module_relation intmr2 ON intmr2.id = intsr2.interview_module_relation_id 
    JOIN recruiter_user recuser2 ON recuser2.user_id = intmr2.user_id 
    JOIN interview_session ints2 ON intsr2.session_id = ints2.id
    JOIN interview_meeting im2 ON ints2.meeting_id = im2.id
    WHERE recuser2.user_id = target_user_id  -- Changed to target_user_id
    AND intsr2.is_confirmed = true
    AND im2.start_time >= date_trunc('week', CURRENT_DATE)  -- Start of the current week (Monday)
    AND im2.start_time < date_trunc('week', CURRENT_DATE) + INTERVAL '1 week';
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_interviewers(rec_id uuid)
 RETURNS TABLE(rec_user jsonb, qualified_module_names text[], training_module_names text[], upcoming_meeting_count integer, completed_meeting_count integer)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    RETURN QUERY
     SELECT
        json_build_object(
            'user_id', ru.user_id,
            'first_name', ru.first_name,
            'last_name', ru.last_name,
            'email', ru.email,
            'profile_image', ru.profile_image,
            'position', ru.position,
            'schedule_auth', ru.schedule_auth
        )::JSONB as rec_user,
        array_agg(DISTINCT CASE WHEN intmodrel.training_status = 'qualified' THEN intmod.name ELSE NULL END)::TEXT[] as qualified_module_names,
        array_agg(DISTINCT CASE WHEN intmodrel.training_status = 'training' THEN intmod.name ELSE NULL END)::TEXT[] as training_module_names,
        (SELECT COUNT(*) FROM interview_session_relation intsesrel
         JOIN interview_session intses ON intses.id=intsesrel.session_id 
         JOIN interview_meeting intm ON intm.id=intses.meeting_id 
         JOIN interview_module_relation intmodrel ON intmodrel.id=intsesrel.interview_module_relation_id 
         WHERE intmodrel.user_id= recrel.user_id AND intm.status='confirmed' AND intsesrel.is_confirmed=true)::integer AS upcoming_meeting_count,
        (SELECT COUNT(*) FROM interview_session_relation intsesrel
         JOIN interview_session intses ON intses.id=intsesrel.session_id 
         JOIN interview_meeting intm ON intm.id=intses.meeting_id 
         JOIN interview_module_relation intmodrel ON intmodrel.id=intsesrel.interview_module_relation_id 
         WHERE intmodrel.user_id= recrel.user_id AND intm.status='completed' AND intsesrel.is_confirmed=true)::integer AS completed_meeting_count
    FROM recruiter_relation recrel
    JOIN recruiter_user ru ON ru.user_id = recrel.user_id
    LEFT JOIN interview_module_relation intmodrel ON intmodrel.user_id = ru.user_id 
    LEFT JOIN interview_module intmod ON intmod.id = intmodrel.module_id
    WHERE ru.status = 'active' AND recrel.recruiter_id = rec_id
    GROUP BY recrel.id, ru.user_id;  -- Ensure correct grouping
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_job_workflows(recruiter_id uuid)
 RETURNS TABLE(id uuid, job_title text, workflow_count bigint)
 LANGUAGE plpgsql
AS $function$
BEGIN
  RETURN QUERY 
  select 
    public_jobs.id,
    public_jobs.job_title,
    count(*) as workflow_count
  from 
    workflow_job_relation
  inner join
    public_jobs on
      public_jobs.id = workflow_job_relation.job_id
  where
    public_jobs.recruiter_id = get_job_workflows.recruiter_id
  group by
    public_jobs.id,
    public_jobs.job_title;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_present_scheduled_jobs()
 RETURNS SETOF json
 LANGUAGE plpgsql
AS $function$
BEGIN
  RETURN QUERY
    SELECT
      json_build_object(
        'job_id', id::uuid,
        'job_title', job_title::text,
        'time_stamp', TO_TIMESTAMP(active_status -> 'interviewing' ->> 'timeStamp', 'YYYY-MM-DD')::timestamp,
        'current_date', current_date::timestamp
      )
    FROM
      public.public_jobs
    WHERE
    active_status -> 'closed' ->> 'isActive' = 'false' AND
      active_status -> 'interviewing' ->> 'timeStamp' IS NOT NULL
      AND to_timestamp(
        active_status -> 'interviewing' ->> 'timeStamp',
        'YYYY-MM-DD'
      ) = current_date;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_recruiter_name_id(in_application_id uuid)
 RETURNS TABLE(id uuid, name text)
 LANGUAGE plpgsql
AS $function$
DECLARE
    new_message_row RECORD;
BEGIN
    -- Add a new message
    SELECT r.id, r.name INTO new_message_row
    FROM recruiter r
    JOIN public_jobs pj ON pj.recruiter_id = r.id
    JOIN applications a ON a.job_id = pj.id
    WHERE a.id = in_application_id;

    -- Return the inserted row
    RETURN QUERY SELECT new_message_row.id, new_message_row.name;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_recruiter_screening_data(recruiter_id uuid)
 RETURNS TABLE(first_name text, last_name text, avatar text, status_emails_sent integer, screening_title text, job_title text)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
        c.first_name,
        c.last_name,
        c.avatar,
        a.status_emails_sent,
        COALESCE(sq.title, '') AS screening_title,
        pj.job_title
    FROM 
        recruiter r
    JOIN 
        public_jobs pj ON r.id = pj.recruiter_id
    JOIN 
        applications a ON pj.id = a.job_id
    JOIN 
        candidate_files cf ON a.candidate_file_id = cf.id
    JOIN 
        candidates c ON cf.candidate_id = c.id
    LEFT JOIN
        screening_questions sq ON pj.screening_template = sq.id
    WHERE 
        r.id = get_recruiter_screening_data.recruiter_id
        AND a.status = 'screening';

END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_requests_candidate_list(rec_id uuid)
 RETURNS TABLE(applications jsonb[], jobs jsonb[], assignerlist jsonb[], assigneelist jsonb[])
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY  
    WITH candidates_cte AS (
        SELECT DISTINCT
            a.id AS application_id,
            CONCAT(c.first_name, ' ', COALESCE(c.last_name, '')) AS candidate_name,
            pj.id AS job_id,
            pj.job_title,
            r.assigner_id,
            r.assignee_id,
            CONCAT(ru_assigner.first_name, ' ', COALESCE(ru_assigner.last_name,'')) AS assigner_name,
            CONCAT(ru_assignee.first_name, ' ', COALESCE(ru_assignee.last_name,'')) AS assignee_name
        FROM
            public.applications a
            INNER JOIN public.public_jobs pj ON pj.id = a.job_id
            INNER JOIN public.candidates c ON a.candidate_id = c.id
            INNER JOIN public.request r ON a.id = r.application_id
            LEFT JOIN public.recruiter_user ru_assigner ON r.assigner_id = ru_assigner.user_id
            LEFT JOIN public.recruiter_user ru_assignee ON r.assignee_id = ru_assignee.user_id
        WHERE
            c.recruiter_id = rec_id
    ),
    applications AS (
        SELECT
            array_agg(
                DISTINCT jsonb_build_object(
                    'application_id', application_id,
                    'candidate_name', candidate_name
                )
            )::jsonb[] AS applications
        FROM
            candidates_cte
    ),
    jobs AS (
        SELECT
            array_agg(
                DISTINCT jsonb_build_object(
                    'job_id', job_id,
                    'job_title', job_title
                )
            )::jsonb[] AS jobs
        FROM
            candidates_cte
    ),
    assignerList AS (
        SELECT
            array_agg(
                DISTINCT jsonb_build_object(
                    'id', assigner_id,
                    'name', assigner_name
                )
            )::jsonb[] AS assignerList
        FROM
            candidates_cte
    ),
    assigneeList AS (
        SELECT
            array_agg(
                DISTINCT jsonb_build_object(
                    'id', assignee_id,
                    'name', assignee_name
                )
            )::jsonb[] AS assigneeList
        FROM
            candidates_cte
    )
    
    SELECT
        coalesce(applications.applications, ARRAY[]::jsonb[]) as applications,
        coalesce(jobs.jobs, ARRAY[]::jsonb[]) as jobs,
        coalesce(assignerList.assignerList, ARRAY[]::jsonb[]) as assignerList,
        coalesce(assigneeList.assigneeList, ARRAY[]::jsonb[]) as assigneeList
    FROM
        applications, jobs, assignerList, assigneeList;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_screening_candidates(p_recruiter_id uuid)
 RETURNS TABLE(id uuid, first_name text, last_name text, avatar text, status_emails_sent jsonb, screening_title text, job_title text, created_at text, response jsonb, questions jsonb, public_job_id uuid, company text, email text, candidate_id uuid, email_template jsonb, result_created_at text, assessment_result jsonb[], phonescreening_templateid uuid)
 LANGUAGE sql
 STABLE
AS $function$
  SELECT 
    a.id,
    c.first_name,
    c.last_name,
    c.avatar,
    a.status_emails_sent,
    COALESCE(sq.title, '') AS screening_title,
    pj.job_title,
    sa.created_at,
    sa.answers,
    sq.questions,
    pj.id AS public_job_id,
    pj.company,
    c.email,
    c.id AS candidate_id,
    pj.email_template,
    ar.created_at AS result_created_at,
    ar.result AS assessment_result,
    sq.id AS phoneScreening_templateId
  FROM  
    recruiter r
  JOIN
    public_jobs pj ON r.id = pj.recruiter_id 
  JOIN
    applications a ON pj.id = a.job_id
  JOIN 
    candidate_files cf ON a.candidate_file_id = cf.id
  JOIN
    candidates c ON cf.candidate_id = c.id
  LEFT JOIN
    screening_questions sq ON pj.screening_template = sq.id
  LEFT JOIN
    screening_answers sa ON a.id = sa.screening_id
  LEFT JOIN
    assessment_results ar ON a.id = ar.application_id
  WHERE
    r.id = p_recruiter_id
    AND a.status = 'screening';
$function$
;

CREATE OR REPLACE FUNCTION public.getallresumematches(jobid uuid, topmatch integer DEFAULT 80, goodmatch integer DEFAULT 60, averagematch integer DEFAULT 40, poormatch integer DEFAULT 20)
 RETURNS jsonb
 LANGUAGE plpgsql
AS $function$
DECLARE 
  matches jsonb;
BEGIN
  SELECT JSONB_OBJECT_AGG(match, count) INTO matches
  FROM(
    SELECT categories.match as match, COALESCE(match_category.count, 0) AS count
      FROM (
      SELECT 'topMatch' AS match UNION ALL
      SELECT 'goodMatch' UNION ALL
      SELECT 'averageMatch' UNION ALL
      SELECT 'poorMatch' UNION ALL
      SELECT 'noMatch' UNION ALL
      SELECT 'unknownMatch'
    ) AS categories
    LEFT JOIN (
      SELECT 
        CASE 
          WHEN overall_score <= 100 AND overall_score >=topMatch THEN 'topMatch'
          WHEN overall_score < topMatch AND overall_score >=goodMatch THEN 'goodMatch'
          WHEN overall_score < goodMatch AND overall_score >=averageMatch THEN 'averageMatch'
          WHEN overall_score < averageMatch AND overall_score >=poorMatch THEN 'poorMatch'
          WHEN overall_score < poorMatch AND overall_score >=0 THEN 'noMatch'
          ELSE 'unknownMatch'
        END AS match,
      COUNT(*) AS count
      FROM 
        applications
        WHERE 
          job_id = jobId 
        GROUP BY 
          match
    ) AS match_category
    ON categories.match = match_category.match
  ) as m;
RETURN matches;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.getapplicationprocessingstatuscount(jobid uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE 
  sections jsonb;
BEGIN
  SELECT JSONB_OBJECT_AGG(processing_status, count) INTO sections
  FROM(
    SELECT categories.processing_status as processing_status, COALESCE(status_category.count, 0) AS count
      FROM (
      SELECT 'processing' AS processing_status UNION ALL
      SELECT 'not started' UNION ALL
      SELECT 'success' UNION ALL
      SELECT 'failed' 
    ) AS categories
    LEFT JOIN (
      SELECT 
      processing_status,
      COUNT(*) AS count
      FROM 
        applications
        WHERE 
          job_id = jobId 
        GROUP BY 
          processing_status
    ) AS status_category
    ON 
    categories.processing_status::application_processing_status = status_category.processing_status
  ) as s;
RETURN sections;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.getexperienceandtenure(jobid uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
  average_tenure jsonb;
  tenure jsonb;
  average_experience jsonb;
  experience jsonb;
  result jsonb;
BEGIN
EXECUTE format(
  'CREATE MATERIALIZED VIEW resumes AS (
    SELECT 
      can.resume_json AS resume_json,
      can.id AS id
    FROM applications AS app 
    LEFT JOIN candidate_files AS can 
    ON app.candidate_file_id = can.id 
    WHERE app.job_id = ''%s'')'
,jobId);

SELECT TO_JSONB(AVG((resumes.resume_json -> 'basics' ->> 'totalExperienceInMonths')::numeric)) INTO average_experience
FROM resumes
WHERE resumes.resume_json -> 'basics' ->> 'totalExperienceInMonths' IS NOT NULL;

WITH candidate_avg_experience AS(
SELECT resumes_with_exp.id AS id, resumes_with_exp.average_experience AS average_experience
FROM (SELECT resumes.id, CEIL((resumes.resume_json -> 'basics' ->> 'totalExperienceInMonths')::numeric/12) AS average_experience
  FROM resumes
  WHERE resumes.resume_json -> 'basics' ->> 'totalExperienceInMonths' IS NOT NULL 
  GROUP BY resumes.id, average_experience
) AS resumes_with_exp),
all_possible_experience_levels AS (
  SELECT 
    generate_series(
      (SELECT MIN(candidate_avg_experience.average_experience) FROM candidate_avg_experience),
      (SELECT MAX(candidate_avg_experience.average_experience) FROM candidate_avg_experience)
    ) AS experience_level
), ae AS (
  SELECT all_possible_experience_levels.experience_level AS average_experience, COALESCE(COUNT(candidate_avg_experience.average_experience), 0) AS candidates
  FROM all_possible_experience_levels
  LEFT JOIN 
  candidate_avg_experience ON all_possible_experience_levels.experience_level = candidate_avg_experience.average_experience
  GROUP BY all_possible_experience_levels.experience_level
  ORDER BY all_possible_experience_levels.experience_level
)
SELECT JSONB_OBJECT_AGG(ae.average_experience, ae.candidates) INTO experience
FROM ae;

WITH candidate_avg_tenure AS (
    SELECT 
        resumes.id,
       (resumes.resume_json -> 'basics' ->> 'totalExperienceInMonths')::numeric AS average_tenure,
        jsonb_array_length(resumes.resume_json -> 'positions') AS positions_length
    FROM 
        resumes
        WHERE 
        resumes.resume_json -> 'basics' ->> 'totalExperienceInMonths' IS NOT NULL
        AND jsonb_array_length(resumes.resume_json -> 'positions') > 0
    GROUP BY 
        resumes.id, resumes.resume_json
)
SELECT 
    TO_JSONB(AVG(candidate_avg_tenure.average_tenure/candidate_avg_tenure.positions_length))
INTO average_tenure
FROM 
    candidate_avg_tenure;

WITH candidate_avg_tenure AS(
SELECT resumes_with_exp.id AS id, resumes_with_exp.average_tenure AS average_tenure
FROM (SELECT resumes.id, TRUNC(((resumes.resume_json -> 'basics' ->> 'totalExperienceInMonths')::numeric/jsonb_array_length(resumes.resume_json -> 'positions')::numeric)::numeric/12) AS average_tenure
  FROM resumes
  WHERE resumes.resume_json -> 'basics' ->> 'totalExperienceInMonths' IS NOT NULL 
  AND jsonb_array_length(resumes.resume_json -> 'positions') <> 0
) AS resumes_with_exp),
all_possible_tenure_levels AS (
  SELECT 
    generate_series(
      (SELECT MIN(candidate_avg_tenure.average_tenure) FROM candidate_avg_tenure),
      (SELECT MAX(candidate_avg_tenure.average_tenure) FROM candidate_avg_tenure)
    ) AS tenure_level
), at AS (
  SELECT all_possible_tenure_levels.tenure_level AS average_tenure, COALESCE(COUNT(candidate_avg_tenure.average_tenure), 0) AS candidates
  FROM all_possible_tenure_levels
  LEFT JOIN 
  candidate_avg_tenure ON all_possible_tenure_levels.tenure_level = candidate_avg_tenure.average_tenure
  GROUP BY all_possible_tenure_levels.tenure_level
  ORDER BY all_possible_tenure_levels.tenure_level
)
SELECT JSONB_OBJECT_AGG(at.average_tenure, at.candidates) INTO tenure
FROM at;

result := '{}'::jsonb;
result := jsonb_set(result, '{average_experience}', average_experience, true);
result := jsonb_set(result, '{average_tenure}', average_tenure , true);
result := jsonb_set(result, '{tenure}', tenure, true);
result := jsonb_set(result, '{experience}', experience, true);

DROP MATERIALIZED VIEW resumes;
RETURN result;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.getjobapplicationcountforcandidates(candidate_ids uuid[])
 RETURNS TABLE(candidate_id uuid, job_ids uuid[], job_titles text[])
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT
        ja.candidate_id,
        ARRAY_AGG(pj.id) AS job_ids,
        ARRAY_AGG(pj.job_title) AS job_titles
    FROM
        job_applications AS ja
    JOIN
        public_jobs AS pj ON ja.job_id = pj.id
    WHERE
        ja.candidate_id = ANY(candidate_ids)
    GROUP BY
        ja.candidate_id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.getjobapplicationcountforcandidates2(candidate_ids uuid[])
 RETURNS TABLE(candidate_id uuid, job_ids uuid[], job_titles text[])
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT
        j_app.candidate_id ,
        ARRAY_AGG(pj.id) as job_ids,
        ARRAY_AGG(pj.job_title) AS job_titles
    FROM
        applications AS j_app
    JOIN
        public_jobs AS pj ON j_app.job_id = pj.id
    WHERE
        j_app.candidate_id = ANY(candidate_ids)
    GROUP BY
        j_app.candidate_id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.getjobapplications(ids uuid[])
 RETURNS TABLE(job_id uuid, status text, count bigint)
 LANGUAGE plpgsql
AS $function$
BEGIN
  RETURN QUERY
    SELECT ja.job_id, ja.status::text, count(*)
    FROM public.applications AS ja
    WHERE ja.job_id = ANY(ids)
    GROUP BY ja.job_id, ja.status::text
    ORDER BY ja.job_id, ja.status::text;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.getjobassessments(jobid uuid)
 RETURNS TABLE(id uuid, created_at timestamp with time zone, title text, description text, type template_type, recruiter_id uuid, level question_level, mode assessment_mode, duration numeric)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
      assessment.*,
      questions.duration AS duration
    FROM 
      assessment
    LEFT JOIN 
      assessment_job_relation ON assessment_job_relation.assessment_id = assessment.id
    LEFT JOIN (
      SELECT 
        assessment_id, 
        SUM(assessment_question.duration) AS duration
      FROM 
        assessment_question
      GROUP BY 
        assessment_id
    ) AS questions ON questions.assessment_id = assessment.id
    WHERE 
      assessment_job_relation.job_id  = jobId
    GROUP BY 
      assessment.id, questions.duration
    ORDER BY 
      assessment.created_at DESC;
END
$function$
;

CREATE OR REPLACE FUNCTION public.getlocationspool(jobid uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE 
  location jsonb;
  city_json jsonb;
  state_json jsonb;
  country_json jsonb;
BEGIN
EXECUTE format('
  CREATE MATERIALIZED VIEW locations AS (
    SELECT 
      can.city, can.state, can.country 
    FROM applications AS app 
    LEFT JOIN candidates AS can 
    ON app.candidate_id = can.id 
    WHERE app.job_id =  ''%s''
)', jobId);
SELECT JSONB_OBJECT_AGG(city, count) INTO city_json
FROM (
    SELECT LOWER(city) AS city, count(*) FROM locations WHERE city IS NOT NULL GROUP BY city ORDER BY count(*) DESC LIMIT 5
) AS s;
city_json := jsonb_set(city_json, '{others}', 
((SELECT COALESCE(SUM(count)::text, '0') FROM (SELECT count(*) FROM locations WHERE city IS NOT NULL GROUP BY city ORDER BY count(*) DESC OFFSET 5) AS o))::jsonb, 
true);
city_json := jsonb_set(city_json, '{unknown}', 
((SELECT COALESCE(SUM(count)::text, '0') FROM (SELECT count(*) FROM locations WHERE city IS NULL GROUP BY city ) AS o))::jsonb, 
true);
SELECT JSONB_OBJECT_AGG(state, count) INTO state_json
FROM (
    SELECT LOWER(state) AS state, count(*) from locations WHERE state IS NOT NULL GROUP BY state ORDER BY count(*) DESC LIMIT 5
) AS s;
state_json := jsonb_set(state_json, '{others}', 
((SELECT COALESCE(SUM(count)::text, '0') FROM (SELECT count(*) from locations WHERE state IS NOT NULL GROUP BY state ORDER BY count(*) DESC OFFSET 5) AS o))::jsonb, 
true);
state_json := jsonb_set(state_json, '{unknown}', 
((SELECT COALESCE(SUM(count)::text, '0') FROM (SELECT count(*) from locations WHERE state IS NULL GROUP BY state ) AS o))::jsonb, 
true);
SELECT JSONB_OBJECT_AGG(country, count) INTO country_json
FROM (
    SELECT LOWER(country) AS country, count(*) from locations WHERE country IS NOT NULL GROUP BY country ORDER BY count(*) DESC LIMIT 5
) AS s;
country_json := jsonb_set(country_json, '{others}', 
((SELECT COALESCE(SUM(count)::text, '0') FROM (SELECT count(*) from locations WHERE country IS NOT NULL GROUP BY country ORDER BY count(*) DESC OFFSET 5) AS o))::jsonb, 
true);
country_json := jsonb_set(country_json, '{unknown}', 
((SELECT COALESCE(SUM(count)::text, '0') FROM (SELECT count(*) from locations WHERE country IS NULL GROUP BY country ) AS o))::jsonb, 
true);
location := '{}'::jsonb;
location := jsonb_set(location, '{city}', city_json, true);
location := jsonb_set(location, '{state}', state_json, true);
location := jsonb_set(location, '{country}', country_json, true);
DROP MATERIALIZED VIEW locations;
RETURN location;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.getoutreachemails()
 RETURNS jsonb[]
 LANGUAGE plpgsql
AS $function$
DECLARE
    result JSONB[];
BEGIN
    -- Initialize an empty JSONB array for the results
    result := ARRAY[]::JSONB[];

    -- Select up to 50 records that meet the specified conditions
    SELECT ARRAY_AGG(row_to_json(data))
    INTO result
    FROM (
        SELECT 
        row_to_json(oe) AS outreach_email,
         json_build_object(
        'id', c.id,
        'organization_id', c.organization_id, 
        'aglint_id', c.aglint_id, 
        'email', c.email
        ) AS  ag_candidate,
        json_build_object(
        'user_id', ru.user_id,
        'email_auth', ru.email_auth
        ) AS  recruiter_user
        FROM outreached_emails oe
        JOIN aglint_candidates c ON oe.candidate_id = c.id
        JOIN recruiter_user ru ON ru.user_id=oe.recruiter_user_id
        WHERE oe.email_sent = false
        AND c.email LIKE '%email_not_unlocked%'
        LIMIT 25
    ) as data;

    -- Return the final result as a JSONB array
    RETURN result;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.getrecruiterscreeningdata(recruiter_id integer)
 RETURNS TABLE(first_name character varying, last_name character varying, avatar character varying, status_emails_sent character varying, screening_title character varying, job_title character varying)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
        c.first_name,
        c.last_name,
        c.avatar,
        a.status_emails_sent,
        COALESCE(sq.title, '') AS screening_title,
        pj.job_title
    FROM 
        recruiter r
    JOIN 
        public_jobs pj ON r.id = pj.recruiter_id
    JOIN 
        applications a ON pj.id = a.job_id
    JOIN 
        candidate_files cf ON a.candidate_file_id = cf.id
    JOIN 
        candidates c ON cf.candidate_id = c.id
    LEFT JOIN
        screening_questions sq ON pj.screening_template = sq.id
    WHERE 
        r.id ='f201c53d-9602-442d-9122-2725d9a2aae8'
        AND a.status = 'screening';
END;
$function$
;

CREATE OR REPLACE FUNCTION public.getskillpools(jobid uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE 
  skill jsonb;
  top_skills jsonb;
  required_skills jsonb;
BEGIN 
  EXECUTE format('
  CREATE MATERIALIZED VIEW candidate_skills AS (
    SELECT
      jsonb_array_elements_text((can.resume_json ->> ''skills'')::jsonb) AS all_skills
    FROM
      applications as app
    LEFT JOIN 
      candidate_files AS can ON app.candidate_file_id = can.id
    WHERE
      app.job_id = ''%s''
  )
', jobId);
  SELECT JSON_OBJECT_AGG(skills, count) INTO top_skills
  FROM (
    SELECT 
      LOWER(all_skills) as skills, 
      COUNT(all_skills)
    FROM candidate_skills
    GROUP BY LOWER(all_skills)
    ORDER BY count DESC
    LIMIT 10 
    ) AS can;
  SELECT JSON_OBJECT_AGG(skills, count) INTO required_skills
  FROM (
    SELECT
      job.skills, 
      COALESCE(can.count , 0) as count
    FROM
      (SELECT
        LOWER((jsonb_array_elements_text((jd_json -> 'skills')::jsonb)::jsonb) ->> 'field') AS skills
      FROM
        public_jobs
      WHERE
        id = jobId
        ) AS job 
    LEFT JOIN
      (SELECT 
        LOWER(all_skills) as skills, 
        COUNT(all_skills)
      FROM candidate_skills 
      GROUP BY 
        LOWER(all_skills)) AS can
    ON can.skills = job.skills
    ORDER BY count DESC
  ) as s;
skill := '{}'::jsonb;
skill := jsonb_set(skill, '{top_skills}', top_skills, true);
skill := jsonb_set(skill, '{required_skills}', required_skills, true);
DROP MATERIALIZED VIEW candidate_skills;
RETURN skill;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.insert_email_templates(recruiter_id uuid)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
DECLARE
    template_data text;
    template_row text[];
    template_type text;
    template_id uuid;
    template_created_at timestamp with time zone;
    template_from_name text;
    template_subject text;
    template_body text;
BEGIN
    -- Sample CSV data as text (assuming you have it loaded or read from somewhere)
    template_data := 'debrief_email_interviewer,0a853069-11e1-4535-b934-a4d6c63de108,2024-05-29 14:31:34.671027+00,{ { interviewerFirstName } },d353b3a0-3e19-45d0-8623-4bd35577f548,Invitation to Debrief Session for { { candidateName } }\''s Interview for {{jobRole}},"<p>Dear <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"interviewerFirstName\">{{interviewerFirstName}}</span>,</p><p></p><p>Please join the debrief session to discuss <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"candidateName\">{{candidateName}}</span>\''s interview for <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"jobRole\">{{jobRole}}</span>. Your insights are valuable to the selection process.</p><p>Thanks,</p><p><span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{companyName}}</span> Recruitment Team</p>"
applicantReject_email_applicant,5ea9c5ab-5db7-4dbd-a7d9-3ab746c1f06e,2024-06-10 09:13:04.296532+00,{{ recruiterFullName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Your application at {{ companyName }},"<p>Hi {{ candidateFirstName }},</p><p>Thank you for your interest in the {{ jobTitle }} position.</p><p>We have reviewed your application and carefully considered your qualifications. Based on your profile and the number of other qualified applications, for the moment, we are not able to move forward in the recruiting process with you.</p><p>Good luck in your search!</p><p>Sincerely,</p><p>{{ companyName }}</p>"
interviewStart_slack_interviewers,5982f1ac-a435-467f-96c3-c56582ed8ba8,2024-06-07 09:55:31.009397+00,,d353b3a0-3e19-45d0-8623-4bd35577f548,Interview reminder,"Interview reminder"
phoneScreen_email_candidate,4e0609a2-33db-436d-83a3-3d39da234a0e,2024-05-30 07:09:49.95669+00,{{ recruiterFullName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Invitation to a Phone Screening Session for {{firstName}} - {{jobTitle}} Position at {{companyName}},"<p>Dear {{ candidateFirstName }},</p><p>I hope this message finds you well. We appreciate your interest in the {{ jobTitle }} position at {{ companyName }}, and we are excited to move forward with your application.</p><p>After reviewing your application, we would like to invite you to participate in a phone screening session. This initial conversation will give us the opportunity to learn more about your experiences, skills, and how they align with the requirements of the role.</p><p>Please click on the following link to access the phone screening session: {{ phoneScreeningLink }}</p><p>Best regards,</p><p>{{ companyName }}</p>"
interviewEnd_slack_interviewers,80fe6406-7f15-4205-9037-7a0df51cf2b8,2024-06-06 14:20:30.664329+00,,d353b3a0-3e19-45d0-8623-4bd35577f548,Slack RSVP Message,"Coding Interview scheduled with candidate: Aman Aman - Staff Frontend Engineer Meeting Place: google_meet Meeting Time: June 10 04:00 AM - 04:30 AM IST Duration: 30 Minutes"
interviewerConfirmation_slack_interviewers,b51a20bb-ae5a-4dc3-a6e5-96a6b8a952b7,2024-06-06 09:21:32.785312+00,,d353b3a0-3e19-45d0-8623-4bd35577f548,Confirmation Slack Message To Interviewer,"Initial Screening scheduled with candidate: Muharrem Muharrem - Staff Software Engineer Meeting Place: google_meet Meeting Time: June 13 04:30 AM - 05:00 AM IST Duration: 30 Minutes"
interviewCancel_email_applicant,3bef4198-e7d7-48cd-b127-61d23dfbe309,2024-05-30 07:14:36.704522+00,{{ recruiterName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Interview Cancellation: {{jobRole}} Position,"<p>Dear <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"candidateName\">{{ candidateName }}</span>,</p><p></p><p>I regret to inform you that we need to cancel your scheduled interview session at <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span>.</p><p>We apologize for any inconvenience caused and will be in touch soon to reschedule.</p><p></p><p>Best regards,</p><p><span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"recruiterName\">{{ recruiterName }}</span><br><span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span></p>"
interviewStart_email_applicant,80587302-95f6-49e9-b467-b954937ef996,2024-06-05 07:03:07.427382+00,{{ recruiterName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Interview Reminder: {{jobRole}} Position at {{companyName}},"<p>Dear <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"candidateFirstName\">{{ candidateFirstName }}</span>,</p><p></p><p style=\"text-align: start\">This is a friendly reminder of your upcoming interview for the <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"jobRole\">{{ jobRole }}</span> position at <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span> scheduled for <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"startDate\">{{ startDate }}</span> <strong>at</strong> <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"time\">{{ time }}</span>.</p><p style=\"text-align: start\"></p><p style=\"text-align: start\">We look forward to a successful interview!</p><p style=\"text-align: start\"></p><p style=\"text-align: start\">Warm regards,</p><p style=\"text-align: start\">The <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span> Team</p>"
selfScheduleReminder_email_applicant,68d46030-fc59-4b69-b388-4ccd02a3d685,2024-06-11 04:22:27.85218+00,{{ recruiterName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Reminder: Schedule Your Interview for {{jobRole}} at {{companyName}},"<p>Dear <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"candidateFirstName\">{{ candidateFirstName }}</span>,</p><p></p><p>This is a friendly reminder about the self-schedule interview request you received for the <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"jobRole\">{{ jobRole }}</span> position at <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span>.</p><p></p><p>Please use the following link to schedule your interview: <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"selfScheduleLink\">{{ selfScheduleLink }}</span></p><p>Looking forward to connecting with you!</p><p></p><p>Best regards,</p><p><span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"recruiterName\">{{ recruiterName }}</span><br><span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span></p>"
rescheduleRequest_email_candidate,bb456baf-8ca5-4c15-bd95-235e9b4cb889,2024-06-06 09:33:08.96832+00,{{ recruiterName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Request to Reschedule Interview for {{jobRole}} Position,"<p>Dear <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"candidateName\">{{ candidateName }}</span>,</p><p></p><p>We need to reschedule your interview for the <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"jobRole\">{{ jobRole }}</span> position at <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span>. Please use the link below to select a new date and time that works for you.</p><p></p><p>Reschedule your interview: <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"rescheduleLink\">{{ rescheduleLink }}</span></p><p>Sorry for any inconvenience this may cause, and we look forward to speaking with you soon.</p><p></p><p>Best regards,</p><p><span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"recruiterName\">{{ recruiterName }}</span><br><span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span></p>"
rescheduleConfirm_email_candidate,1352fa6a-9799-4765-9d98-3a20a5aa1e88,2024-05-28 05:24:14.334442+00,{{ recruiterName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Interview Rescheduled for {{jobRole}} Position,"<p>Dear <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"candidateName\">{{ candidateName }}</span>,</p><p></p><p>Your interview for the <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"jobRole\">{{ jobRole }}</span> position at <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span> has been rescheduled as per your request.</p><p></p><p>Please find the new details below:</p><p>Date: <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"newDate\">{{ newDate }}</span></p><p>Time: <span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"newTime\">{{ newTime }}</span></p><p></p><p>Looking forward to our conversation!</p><p></p><p>Best regards,</p><p><span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"recruiterName\">{{ recruiterName }}</span><br><span class=\"temp-variable\" data-type=\"temp-variable\" data-id=\"companyName\">{{ companyName }}</span></p>"
offerSend_email_candidate,16d95a4c-0af2-4ba6-996d-5c0a7ac03f5c,2024-06-12 04:36:56.188787+00,{{ recruiterFullName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Congratulations! You\''ve Been Selected for the {{ jobTitle }} Position at {{ companyName }},"<p>Dear {{ candidateFirstName }},</p><p>We are delighted to inform you that you have been selected for the {{ jobTitle }} position at {{ companyName }}.</p><p>Please find the attached offer letter for your review. If you have any questions or need further information, do not hesitate to reach out.</p><p>We are excited to have you join our team and look forward to your positive response.</p><p>Best regards,</p><p>{{ recruiterFullName }}</p>"
applicantReject_email_candidate,ebd38e2c-eeb7-46c6-b1c3-0fbd8a234a01,2024-06-10 09:27:50.265145+00,{{ recruiterName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Update on Your Application at {{ companyName }},"<p>Dear {{ candidateFirstName }},</p><p>Thank you for your interest in the {{ jobTitle }} position at {{ companyName }} and for taking the time to apply and interview with us.</p><p>We regret to inform you that we have decided to move forward with another candidate for this position.</p><p>We appreciate your effort and interest in our company and wish you all the best in your future endeavors.</p><p>Best regards,</p><p>{{ recruiterName }}</p>"
firstRound_email_candidate,6ef32992-fad7-4b0a-b321-11853ae89ef6,2024-05-27 09:44:41.226378+00,{{ recruiterName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Next Steps: First Round Interview for {{ jobTitle }} at {{ companyName }},"<p>Dear {{ candidateFirstName }},</p><p>Congratulations! We were impressed by your application for the {{ jobTitle }} position at {{ companyName }} and would like to invite you to the first round of interviews.</p><p>Below are the details:</p><p>Date: {{ interviewDate }}</p><p>Time: {{ interviewTime }}</p><p>Location: {{ interviewLocation }}</p><p>We look forward to learning more about your qualifications and experience during this interview.</p><p>Best regards,</p><p>{{ recruiterName }}</p>"
offerAccept_email_candidate,9983a586-f75c-4f7e-b032-d0e7b9d450cf,2024-06-11 09:19:21.74592+00,{{ recruiterFullName }},d353b3a0-3e19-45d0-8623-4bd35577f548,Welcome to {{ companyName }}!,"<p>Dear {{ candidateFirstName }},</p><p>We are thrilled to welcome you to {{ companyName }} as our new {{ jobTitle }}!</p><p>Your start date is {{ startDate }}. Please find attached the details of your onboarding process.</p><p>Looking forward to working with you!</p><p>Best regards,</p><p>{{ recruiterFullName }}</p>"
';

    -- Split the CSV data into individual rows
    FOREACH template_row SLICE 1 IN ARRAY string_to_array(template_data, '\n')
    LOOP
        -- Split each row into columns
        template_row := string_to_array(template_row, ',');

        -- Assign variables from the row
        template_type := template_row[1];
        template_id := template_row[2]::uuid;
        template_created_at := template_row[3]::timestamp with time zone;
        template_from_name := template_row[4];
        -- template_to_id := template_row[5]::uuid;
        template_subject := template_row[6];
        template_body := template_row[7];

        -- Insert the data into the email_templates table
        INSERT INTO email_templates (
            template_type, 
          
            from_name, 
            recruiter_id, 
            subject, 
            body
        )
        VALUES (
            template_type,
            template_from_name, 
            recruiter_id, 
            template_subject, 
            template_body
        );
    END LOOP;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.insert_job_email_template(p_job_id uuid)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
BEGIN

INSERT INTO
    job_email_template (subject, body, from_name, type, job_id)
VALUES
(
    'We received your application for a position at {{companyName}}',
    '<p>Hi <span class="temp-variable" data-type="temp-variable" data-id="candidateFirstName">{{candidateFirstName}}</span>,</p><p>Thank you for your interest in the <span class="temp-variable" data-type="temp-variable" data-id="jobRole">{{jobRole}}</span> position.</p><p>We have reviewed your application and carefully considered your qualifications. Based on your profile and the number of other qualified applications, for the moment, we are not able to move forward in the recruiting process with you.</p><p>Good luck in your search!</p><p>Sincerely,</p><p><span class="temp-variable" data-type="temp-variable" data-id="companyName">{{companyName}}</span></p>',
    '{{companyName}}',
    'applicantReject_email_applicant',
    p_job_id
),
(
    'We received your application for a position at {{companyName}}',
    '<p>Hi <span class="temp-variable" data-type="temp-variable" data-id="candidateFirstName">{{candidateFirstName}}</span>,</p><p>Thank you for your interest in the <span class="temp-variable" data-type="temp-variable" data-id="jobRole">{{jobRole}}</span> position.</p><p>We have reviewed your application and carefully considered your qualifications. Based on your profile and the number of other qualified applications, for the moment, we are not able to move forward in the recruiting process with you.</p><p>Good luck in your search!</p><p>Sincerely,</p><p><span class="temp-variable" data-type="temp-variable" data-id="companyName">{{companyName}}</span></p>',
    '{{companyName}}',
    'applicationRecieved_email_applicant',
    p_job_id
);

END;
$function$
;

CREATE OR REPLACE FUNCTION public.interviewing_state_active()
 RETURNS void
 LANGUAGE plpgsql
AS $function$
BEGIN
  UPDATE public_jobs
  SET
    active_status = jsonb_set(
      active_status,
      '{interviewing, isActive}',
      'true',
      true
    )
  WHERE
    active_status -> 'closed' ->> 'isActive' = 'false' AND
    active_status -> 'interviewing' ->> 'timeStamp' IS NOT NULL
    AND to_timestamp(
      active_status -> 'interviewing' ->> 'timeStamp',
      'YYYY-MM-DD'
    ) = current_date;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.job_email_template_init()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    PERFORM insert_job_email_template(NEW.id);
    RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.lever_resume_save()
 RETURNS void
 LANGUAGE plpgsql
AS $function$
DECLARE
    rec_id uuid;
    app_id uuid;
    request_results JSONB;
    function_url TEXT;
BEGIN

    FOR rec_id IN 
        SELECT recruiter_id 
        FROM integrations 
        JOIN recruiter ON recruiter.id = integrations.recruiter_id 
        WHERE integrations.lever_key IS NOT NULL
    LOOP
        SELECT decrypted_secret 
        INTO function_url
        FROM vault.decrypted_secrets 
        WHERE name = 'APP_URL';

        FOR app_id IN 
            SELECT applications.id 
            FROM applications 
            JOIN public_jobs ON public_jobs.id = applications.job_id 
            WHERE public_jobs.posted_by = 'Lever' 
            AND applications.is_resume_fetching = TRUE 
            AND applications.processing_status <> 'failed' LIMIT 10
        LOOP
            request_results := net.http_post(
                url := concat(function_url,'/api/lever/saveResume' ),
                body := jsonb_build_object('application_id', app_id),
                headers := jsonb_build_object('Content-Type', 'application/json')
            );
            RAISE NOTICE 'HTTP request result for application_id %: %', app_id, request_results;
        END LOOP;

    END LOOP;
END $function$
;

CREATE OR REPLACE FUNCTION public.match_documents(query_embedding vector, match_count integer DEFAULT 500, filter jsonb DEFAULT '{}'::jsonb)
 RETURNS TABLE(id uuid, content text, metadata jsonb, similarity double precision, json_resume jsonb)
 LANGUAGE plpgsql
AS $function$
#variable_conflict use_column
begin
  return query
  select
    job_applications.application_id as id,
    content,
    json_resume as metadata,
    1 - (job_applications.resume_embedding <=> query_embedding) as similarity,
    json_resume
  from job_applications
  where metadata @> filter
  order by job_applications.resume_embedding <=> query_embedding
  limit match_count;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.move_scheduled_jobs_sourcing_to_active()
 RETURNS void
 LANGUAGE plpgsql
AS $function$
BEGIN
  UPDATE public_jobs
  SET
    active_status = jsonb_set(
      active_status,
      '{sourcing, isActive}',
      'true',
      true
    )
  WHERE
    active_status -> 'closed' ->> 'isActive' = 'false'
    AND active_status -> 'sourcing' ->> 'timeStamp' IS NOT NULL
    AND to_date(
      active_status -> 'sourcing' ->> 'timeStamp',
      'YYYY-MM-DD'
    ) = current_date;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.new_get_interview_schedule_by_meeting_id(target_meeting_id uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
    schedule_data JSONB;
    cancel_data JSONB;
    result_data JSONB;
BEGIN
    BEGIN
        SELECT 
            jsonb_build_object(
                'interview_meeting', row_to_json(intmeet),
                'interview_session', row_to_json(intses),
                'schedule', row_to_json(insc),
                'candidates', (
                    SELECT json_build_object(
                        'id', cand.id,
                        'email', cand.email,
                        'first_name' , cand.first_name,
                        'last_name' , cand.last_name,
                        'timezone' , cand.timezone
                    )
                    ),
                'interview_module', row_to_json(intmod),
                'job', (
                    SELECT json_build_object(
                        'id', pj.id,
                        'created_at', pj.created_at, 
                        'job_title', pj.job_title, 
                        'description', pj.description 
                    ) 
                ),
                'users', COALESCE((
                    SELECT jsonb_agg(
                         CASE WHEN intses.session_type = 'debrief' THEN
                            jsonb_build_object(
                            'id', debuser.user_id,
                            'first_name', debuser.first_name,
                            'last_name', debuser.last_name,
                            'email', debuser.email,
                            'profile_image', debuser.profile_image,
                            'position', debuser.position,
                            'department', '',
                            'interview_session_relation', row_to_json(isr),
                            'location', '',
                            'scheduling_settings', debuser.scheduling_settings,
                            'weekly_meetings', (
                                SELECT json_agg(json_build_object(
                                    'start_time', im2.start_time,
                                    'end_time', im2.end_time
                                )) 
                                FROM interview_session_relation intsr2
                                JOIN interview_module_relation intmr2 ON intmr2.id = intsr2.interview_module_relation_id 
                                JOIN recruiter_user recuser2 ON recuser2.user_id = intmr2.user_id 
                                JOIN interview_session ints2 ON intsr2.session_id = ints2.id
                                JOIN interview_meeting im2 ON ints2.meeting_id = im2.id
                                WHERE recuser2.user_id = debuser.user_id
                                AND intsr2.is_confirmed = true
                                AND im2.start_time >= date_trunc('week', CURRENT_DATE)  -- Start of the current week (Monday)
                                AND im2.start_time < date_trunc('week', CURRENT_DATE) + INTERVAL '1 week'
                            )
                        )::jsonb
                            ELSE
                            jsonb_build_object(
                            'id', ru.user_id,
                            'first_name', ru.first_name,
                            'last_name', ru.last_name,
                            'email', ru.email,
                            'profile_image', ru.profile_image,
                            'position', ru.position,
                            'department', '',
                            'interview_session_relation', row_to_json(isr),
                            'location', '',
                            'scheduling_settings', ru.scheduling_settings,
                            'weekly_meetings', (
                                SELECT json_agg(json_build_object(
                                    'start_time', im2.start_time,
                                    'end_time', im2.end_time
                                )) 
                                FROM interview_session_relation intsr2
                                JOIN interview_module_relation intmr2 ON intmr2.id = intsr2.interview_module_relation_id 
                                JOIN recruiter_user recuser2 ON recuser2.user_id = intmr2.user_id 
                                JOIN interview_session ints2 ON intsr2.session_id = ints2.id
                                JOIN interview_meeting im2 ON ints2.meeting_id = im2.id
                                WHERE recuser2.user_id = ru.user_id
                                AND intsr2.is_confirmed = true
                                AND im2.start_time >= date_trunc('week', CURRENT_DATE)  -- Start of the current week (Monday)
                                AND im2.start_time < date_trunc('week', CURRENT_DATE) + INTERVAL '1 week'
                            )
                        )::jsonb
                            END

                       
                    )
                    FROM interview_session_relation isr
                    LEFT JOIN interview_module_relation inm ON inm.id = isr.interview_module_relation_id
                    LEFT JOIN recruiter_user ru ON ru.user_id = inm.user_id
                    LEFT JOIN recruiter_user debuser ON debuser.user_id = isr.user_id
                    WHERE isr.session_id = intses.id
                ), '[]'::jsonb),
                'hiring_manager', (
                    SELECT json_build_object(
                        'id', recruiter_user.user_id,
                        'first_name', recruiter_user.first_name,
                        'last_name', recruiter_user.last_name,
                        'email', recruiter_user.email,
                        'profile_image', recruiter_user.profile_image,
                        'position', recruiter_user.position
                    ) from recruiter_user where user_id=pj.hiring_manager
                ),
                'recruiter', (
                    SELECT json_build_object(
                        'id', recruiter_user.user_id,
                        'first_name', recruiter_user.first_name,
                        'last_name', recruiter_user.last_name,
                        'email', recruiter_user.email,
                        'profile_image', recruiter_user.profile_image,
                        'position', recruiter_user.position
                    ) from recruiter_user where user_id=pj.recruiter
                ),
                'recruiting_coordinator', (
                    SELECT json_build_object(
                        'id', recruiter_user.user_id,
                        'first_name', recruiter_user.first_name,
                        'last_name', recruiter_user.last_name,
                        'email', recruiter_user.email,
                        'profile_image', recruiter_user.profile_image,
                        'position', recruiter_user.position
                    ) from recruiter_user where user_id=pj.recruiting_coordinator
                ),
                'sourcer', (
                    SELECT json_build_object(
                        'id', recruiter_user.user_id,
                        'first_name', recruiter_user.first_name,
                        'last_name', recruiter_user.last_name,
                        'email', recruiter_user.email,
                        'profile_image', recruiter_user.profile_image,
                        'position', recruiter_user.position
                    ) from recruiter_user where user_id=pj.sourcer
                ),
                 'organizer', (
                    SELECT json_build_object(
                        'id', recruiter_user.user_id,
                        'first_name', recruiter_user.first_name,
                        'last_name', recruiter_user.last_name,
                        'email', recruiter_user.email,
                        'profile_image', recruiter_user.profile_image,
                        'position', recruiter_user.position
                    ) from recruiter_user where user_id=intmeet.organizer_id
                )
            )
        INTO schedule_data
        FROM interview_meeting intmeet
        LEFT JOIN interview_session intses ON intses.meeting_id = intmeet.id 
        LEFT JOIN interview_module intmod ON intmod.id = intses.module_id
        LEFT JOIN interview_schedule insc ON insc.id = intmeet.interview_schedule_id  
        LEFT JOIN applications app ON insc.application_id = app.id
        LEFT JOIN candidates cand ON app.candidate_id = cand.id 
        LEFT JOIN candidate_files cf ON cf.id = app.candidate_file_id  
        LEFT JOIN public_jobs pj ON pj.id = app.job_id
        WHERE intmeet.id = target_meeting_id
        GROUP BY intmeet.id, intses.id, intmod.id, insc.id, app.id, cand.id, cf.id, pj.id;
        
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                schedule_data := NULL;
    END;

    BEGIN
        SELECT jsonb_agg( 
            jsonb_build_object(
                'interview_session_cancel', row_to_json(intsescan),
                'interview_session_relation', row_to_json(intsesrel),
                'recruiter_user',(
                     CASE WHEN intsescan.session_relation_id is NULL THEN
                    json_build_object(
                        'id', canceluser.user_id,
                        'first_name', canceluser.first_name,
                        'last_name', canceluser.last_name,
                        'email', canceluser.email,
                        'profile_image', canceluser.profile_image,
                        'position', canceluser.position
                    )
                    ELSE  json_build_object(
                        'id', recuser.user_id,
                        'first_name', recuser.first_name,
                        'last_name', recuser.last_name,
                        'email', recuser.email,
                        'profile_image', recuser.profile_image,
                        'position', recuser.position
                    )
                    END
                    ), 
                'candidate', row_to_json(cand)
                    ))
        INTO cancel_data
        FROM interview_session_cancel intsescan
        LEFT JOIN interview_session intses ON intses.id = intsescan.session_id 
        LEFT JOIN interview_meeting intmeet ON intmeet.id = intses.meeting_id
        LEFT JOIN interview_session_relation intsesrel ON intsesrel.id = intsescan.session_relation_id
        LEFT JOIN interview_module_relation intmodrel ON intmodrel.id = intsesrel.interview_module_relation_id
        LEFT JOIN recruiter_user recuser ON recuser.user_id = intmodrel.user_id
        LEFT JOIN recruiter_user canceluser ON canceluser.user_id = intsescan.cancel_user_id
        LEFT JOIN interview_schedule intsch ON intsch.id = intsescan.schedule_id
        LEFT JOIN applications app ON app.id = intsch.application_id
        LEFT JOIN candidates cand ON cand.id = app.candidate_id
        WHERE intmeet.id = target_meeting_id;
        
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                cancel_data := NULL;
    END;

    result_data := jsonb_build_object(
        'schedule_data', schedule_data,
        'cancel_data', cancel_data
    );

    RETURN result_data;
    
     -- Ensure correct grouping
END;
$function$
;

CREATE OR REPLACE FUNCTION public.new_get_interview_schedule_by_user_id(target_user_id uuid)
 RETURNS TABLE(interview_meeting json, users json, candidate json)
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
        json_build_object(
                            'meeting_id',intmeet.id,
                            'start_time', intmeet.start_time,
                            'end_time', intmeet.end_time,
                            'session_duration', intses.session_duration,
                            'status', intmeet.status,
                            'session_name', intses.name,
                            'schedule_type', intses.schedule_type,
                            'job_title', pj.job_title,
                            'module_id',indmod.id
                        ) AS interview_meeting,
        (
            SELECT json_agg(json_build_object(
                    'id', recuser.user_id,
                    'first_name', recuser.first_name,
                    'last_name', recuser.last_name,
                    'email', recuser.email,
                    'profile_image', recuser.profile_image,
                    'position', recuser.position,
                    'training_type', intsr.training_type,
                    'interviewer_type',intsr.interviewer_type,
                    'location', recuser.interview_location,
                    'scheduling_settings', recuser.scheduling_settings,
                    'accepted_status' ,intsr.accepted_status,
                    'is_confirmed',intsr.is_confirmed,
                    'weekly_meetings', (
                        SELECT json_agg(json_build_object(
                            'start_time', im2.start_time,
                            'end_time', im2.end_time,
                            'duration', ints2.session_duration
                        )) 
                        FROM interview_session_relation intsr2
                        JOIN interview_module_relation intmr2 ON intmr2.id = intsr2.interview_module_relation_id 
                        JOIN recruiter_user recuser2 ON recuser2.user_id = intmr2.user_id 
                        JOIN interview_session ints2 ON intsr2.session_id = ints2.id
                        JOIN interview_meeting im2 ON ints2.meeting_id = im2.id
                        WHERE recuser2.user_id = recuser.user_id
                        AND intsr2.is_confirmed = true
                        AND im2.start_time >= date_trunc('week', CURRENT_DATE)  -- Start of the current week (Monday)
                        AND im2.start_time < date_trunc('week', CURRENT_DATE) + INTERVAL '1 week'
                    )
                )) 
            FROM interview_session_relation intsr
            JOIN interview_module_relation intmr ON intmr.id = intsr.interview_module_relation_id  
            LEFT JOIN recruiter_user recuser ON recuser.user_id = intmr.user_id
            JOIN interview_session ints ON intsr.session_id = ints.id
            JOIN interview_module indmod1 ON indmod1.id = ints.module_id
            JOIN interview_meeting im ON ints.meeting_id = im.id
            WHERE im.id = intmeet.id
        ) AS users,
         (
            SELECT json_build_object(
                'candidate_id', c.id,
                'first_name', c.first_name,
                'last_name', c.last_name,
                'email', c.email,
                'phone_number', c.phone,
                'application_id', app.id
            )
            FROM candidates c
            JOIN applications app ON app.candidate_id = c.id
            WHERE app.id = insc.application_id
        ) AS candidate
    FROM interview_meeting intmeet
    JOIN interview_session intses ON intses.meeting_id = intmeet.id
    JOIN interview_module indmod ON indmod.id = intses.module_id
    JOIN interview_schedule insc ON insc.id = intmeet.interview_schedule_id
    JOIN applications app ON app.id = insc.application_id
    JOIN public_jobs pj ON pj.id = app.job_id
    LEFT JOIN interview_session_relation intsesrel ON intses.id = intsesrel.session_id
    LEFT JOIN interview_module_relation intmodrel ON intmodrel.id = intsesrel.interview_module_relation_id
    LEFT JOIN recruiter_user ru ON ru.user_id = intmodrel.user_id
    WHERE intmodrel.user_id = target_user_id AND intmeet.status IN ('completed', 'confirmed', 'cancelled') 
    AND intsesrel.is_confirmed = true
    GROUP BY intmeet.id,indmod.id, insc.id , intses.id, app.id, pj.id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.new_permission_to_role_mapper()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  IF NEW.is_enable THEN
    WITH temp_roles as ( SELECT id as role_id, recruiter_id from roles where name = 'admin' ) --  selection sequence matters
    INSERT INTO role_permissions ( role_id, recruiter_id, permission_id) -- here
    SELECT temp_roles.*, NEW.id AS permission_id
    FROM temp_roles;
  ELSE
    DELETE FROM role_permissions WHERE permission_id = NEW.id;
  END IF;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.overviewgenerate()
 RETURNS jsonb
 LANGUAGE plpgsql
AS $function$
DECLARE
    aggregated_data JSONB;  -- Variable to store the aggregated JSON data
    request_results JSONB;  -- Variable to store the HTTP request result
    host text;
BEGIN

    SELECT decrypted_secret 
    INTO host
    FROM vault.decrypted_secrets 
    WHERE name = 'APP_URL';
    -- Aggregate the selected application data into a JSON array
    SELECT json_agg(row_to_json(test)) 
    INTO aggregated_data  -- Store the result into aggregated_data
    FROM (
        SELECT
            id as file_id,
            resume_json
        FROM candidate_files
        WHERE resume_json IS NOT NULL  AND resume_json->>'basics' IS NOT NULL AND resume_json->>'positions' IS NOT NULL  AND resume_json->>'skills' IS NOT NULL AND resume_json->>'overview' IS NULL 
        ORDER BY created_at DESC
        LIMIT 50
    ) as test;

    IF aggregated_data IS NULL THEN
        RETURN '{"message": "No records found"}';
    END IF;

    
    -- Make a single HTTP request for the aggregated data
    SELECT
        net.http_post(
            url := concat(host,'/api/google/overview-handler'),
            body := aggregated_data  -- Use aggregated_data here
        ) INTO request_results;

    -- Return the HTTP request result
    RETURN request_results;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.per_module_candidate_pipeline(module_id uuid)
 RETURNS TABLE(applied bigint, screened bigint, interviewed bigint, offered bigint)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY SELECT count(*) as applied
, COUNT(*) FILTER (WHERE candidate_files.resume_json IS NOT NULL) as screened
, COUNT(*) FILTER (WHERE interview_meeting.status = 'completed') as interviewed
, COUNT(*) FILTER (WHERE applications.status = 'qualified') as offered
FROM interview_session 
JOIN interview_meeting ON interview_session.meeting_id = interview_meeting.id
JOIN applications ON interview_meeting.application_id = applications.id
JOIN candidate_files ON applications.candidate_id = candidate_files.candidate_id
WHERE interview_session.module_id = per_module_candidate_pipeline.module_id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.per_module_interview_statistics(module_id uuid)
 RETURNS TABLE(total bigint, completed bigint, duration numeric, time_to_schedule jsonb)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*) AS total,
        COUNT(*) FILTER (WHERE interview_meeting.status = 'completed') AS completed,
        AVG(interview_session.session_duration)::NUMERIC AS duration,
        jsonb_build_object(
            'days', EXTRACT(DAY FROM AVG(interview_meeting.created_at - applications.created_at)),
            'hours', EXTRACT(HOUR FROM AVG(interview_meeting.created_at - applications.created_at)),
            'minutes', EXTRACT(MINUTE FROM AVG(interview_meeting.created_at - applications.created_at))
        ) AS time_to_schedule
    FROM 
        interview_meeting
    JOIN 
        interview_session ON interview_meeting.id = interview_session.meeting_id
    JOIN 
        applications ON applications.id = interview_meeting.application_id
    WHERE interview_session.module_id = per_module_interview_statistics.module_id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.per_module_interviewer_performance(module_id uuid)
 RETURNS TABLE(candidate_feedback_avg numeric, total_interviews numeric, interviewer_feedback_count numeric, recommendation_success bigint, interviewers_count numeric)
 LANGUAGE plpgsql
AS $function$BEGIN
    RETURN QUERY WITH temp_res AS (
  SELECT coalesce((candidate_feedback->>'rating')::INT,0) AS candidate_feedback
  , COUNT (DISTINCT interview_meeting.id) AS interview_count
  , COUNT(*) filter(WHERE interview_session_relation.feedback->'recommendation' IS NOT NULL) AS interviewer_feedback_count
  , (AVG((interview_session_relation.feedback->'recommendation')::int)>6) = (applications.status = 'qualified') AS success
  , COUNT(interview_session_relation) AS interviewers_count
  FROM interview_session_relation 
    JOIN interview_session ON interview_session.id = interview_session_relation.session_id 
    JOIN interview_meeting ON interview_meeting.id = interview_session.meeting_id
    JOIN applications on applications.id= interview_meeting.application_id
  WHERE interview_session_relation.is_confirmed
  AND interview_meeting.status ='completed'
  AND interview_session.module_id = per_module_interviewer_performance.module_id
  group by interview_meeting.application_id, candidate_feedback, applications.status
)
SELECT AVG(temp_res.candidate_feedback) AS candidate_feedback_avg
, SUM(temp_res.interview_count) AS total_interviews
, SUM(temp_res.interviewer_feedback_count) AS interviewer_feedback_count
, COUNT(*) FILTER (WHERE temp_res.success) AS recommendation_success
, SUM(temp_res.interviewers_count) AS interviewers_count 
FROM temp_res;
END;$function$
;

CREATE OR REPLACE FUNCTION public.reorder_sessions(sessions jsonb, interview_plan_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
  var_session_data jsonb;
  var_session_id uuid;
  var_session_order numeric;
BEGIN
  FOR var_session_data IN SELECT * FROM jsonb_array_elements(sessions)
    LOOP
        var_session_id := (var_session_data->>'id')::uuid;
        var_session_order := (var_session_data->>'session_order')::numeric;
        UPDATE interview_session
        SET session_order = var_session_order
        WHERE id = var_session_id;
    END LOOP;

    UPDATE interview_session AS iss
    SET break_duration = 0
    WHERE iss.id = (
        SELECT isss.id 
        FROM interview_session isss 
        WHERE isss.interview_plan_id = reorder_sessions.interview_plan_id
        ORDER BY isss.session_order DESC
        LIMIT 1
    );
END;
$function$
;

CREATE OR REPLACE FUNCTION public.reports_request_metrics(recruiter_id uuid, departments numeric[] DEFAULT ARRAY[]::numeric[], locations numeric[] DEFAULT ARRAY[]::numeric[], jobs uuid[] DEFAULT ARRAY[]::uuid[], start_datetime timestamp with time zone DEFAULT NULL::timestamp with time zone, end_datetime timestamp with time zone DEFAULT now())
 RETURNS TABLE(request_id uuid, interviewing_coordinator text, candidate_name text, recruiting_coord text, type text, availability_req boolean, self_scheduling_req boolean, confirmation boolean, availability_received boolean, availability_followup boolean, self_scheduling_followup boolean, candidate_status text)
 LANGUAGE plpgsql
AS $function$
BEGIN
  RETURN QUERY select request.id as request_id
          , interview_coordinator_user.first_name ||' '|| interview_coordinator_user.last_name as interviewing_coordinator
          , candidates.first_name ||' '|| candidates.last_name as candidate_name
          , recruiting_coordinator_user.first_name ||' '|| recruiting_coordinator_user.last_name as recruiting_coord
          , interview_module.name as type
          , bool_or(request_progress.event_type = 'REQ_CAND_AVAIL_EMAIL_LINK') as availability_req
          , bool_or(request_progress.event_type = 'SELF_SCHEDULE_LINK') as self_scheduling_req
          , bool_or(request_progress.event_type = 'CAND_CONFIRM_SLOT') as confirmation
          , bool_or(request_progress.event_type = 'CAND_AVAIL_REC') as availability_received
          , bool_or(request_progress.event_type = 'REQ_AVAIL_FIRST_FOLLOWUP') as availability_followup
          , bool_or(request_progress.event_type = 'SELF_SCHEDULE_FIRST_FOLLOWUP') as self_scheduling_followup
          -- , interview_meeting.start_time as interview_date
          -- , bool_or(interview_meeting.status = 'confirmed' ) as confirmation
          -- , bool_or(interview_meeting.status = 'completed') as completed
          , applications.status as candidate_status
        from request
          JOIN request_note on request_note.request_id = request.id
          JOIN applications ON applications.id = request.application_id
          JOIN candidates ON candidates.id = applications.candidate_id
          JOIN request_relation ON request_relation.request_id = request.id
          JOIN interview_session ON interview_session.id = request_relation.session_id
          -- left JOIN interview_meeting ON interview_meeting.id = request_relation.session_id
          JOIN interview_module ON interview_module.id = interview_session.module_id
          JOIN public_jobs ON public_jobs.id = applications.job_id
          JOIN request_progress ON request_progress.request_id = request.id
          LEFT JOIN recruiter_user AS interview_coordinator_user ON request.assignee_id = public_jobs.interview_coordinator
          LEFT JOIN recruiter_user AS recruiting_coordinator_user ON recruiting_coordinator_user.user_id = public_jobs.recruiting_coordinator
        where request_progress.event_type IN ('REQ_CAND_AVAIL_EMAIL_LINK','CAND_AVAIL_REC','SELF_SCHEDULE_LINK', 'CAND_CONFIRM_SLOT')
          AND public_jobs.recruiter_id = reports_request_metrics.recruiter_id
          AND (CARDINALITY(departments) = 0 OR public_jobs.department_id = ANY(departments))
          AND (CARDINALITY(locations) = 0 OR public_jobs.location_id = ANY(locations))
          AND (CARDINALITY(jobs) = 0 OR applications.job_id = ANY(jobs))
          AND (start_datetime IS NULL OR applications.created_at >= start_datetime)
          AND applications.created_at <= end_datetime
        group by request.id , interviewing_coordinator , candidate_name, recruiting_coord , interview_module.name, applications.status;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.reset_auth_users_identities(user_email text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    DELETE FROM auth.users
    where email=user_email;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.resync_calendar()
 RETURNS void
 LANGUAGE plpgsql
AS $function$
DECLARE
    rec_user RECORD;
    response text;
    host text;
BEGIN

    SELECT decrypted_secret 
    INTO host
    FROM vault.decrypted_secrets 
    WHERE name = 'APP_URL';

    FOR rec_user IN
        SELECT user_id
        FROM public.recruiter_user
        where recruiter_user.is_calendar_connected = true
    LOOP

        -- Make the HTTP POST request
        response := (
            SELECT content
            FROM http_post(
                concat(host,'/api/google-calender/resync'),
                json_build_object('user_id', rec_user.user_id)::text,
                'application/json'
            )
        );
        
        RAISE NOTICE 'User ID: %, Response: %', rec_user.user_id, response;
        BEGIN
        EXCEPTION
            WHEN others THEN
                RAISE NOTICE 'Response is not valid JSON for User ID: %', rec_user.user_id;
        END;
    END LOOP;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.schedulercron()
 RETURNS jsonb
 LANGUAGE plpgsql
AS $function$
DECLARE
    request_results JSONB;  -- Variable to store the HTTP request result
    function_url text;
BEGIN
    -- Make a single HTTP request for the aggregated data
    SELECT value INTO function_url FROM env WHERE name = 'scheduler-cron';
    -- Make a single HTTP request for the aggregated data
    
    request_results := net.http_post(
        url := function_url
        -- Add other parameters like headers or data if needed
    );
    -- Return the HTTP request result
    RETURN request_results;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.score_application(scores jsonb DEFAULT '{}'::jsonb, parameter_weights jsonb DEFAULT '{}'::jsonb)
 RETURNS numeric
 LANGUAGE plpgsql
AS $function$
  BEGIN
  RETURN 
    trunc((coalesce((scores -> 'skills')::numeric * (parameter_weights -> 'skills')::numeric, 0) +  
    coalesce((scores -> 'education')::numeric * (parameter_weights -> 'education')::numeric, 0) +
    coalesce((scores -> 'experience')::numeric * (parameter_weights -> 'experience')::numeric, 0)) / 100);
  END;
$function$
;

CREATE OR REPLACE FUNCTION public.search_candidates(recruiter_id_param uuid, name_param text)
 RETURNS TABLE(applications json, candidate json, job json)
 LANGUAGE plpgsql
 STABLE
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
      row_to_json(app) AS applications,
      row_to_json(cand) AS candidate,
      json_build_object(
        'id', pj.id,
        'created_at', pj.created_at, 
        'job_title', pj.job_title, 
        'description', pj.description, 
        'parameter_weights', pj.parameter_weights, 
        'recruiter_id', pj.recruiter_id, 
        'jd_json', pj.jd_json
      ) AS job
    FROM applications AS app
    JOIN candidates AS cand ON app.candidate_id = cand.id
    JOIN public_jobs pj ON pj.id = app.job_id
    WHERE cand.recruiter_id = recruiter_id_param
      AND app.status::text = 'interview'
      AND (cand.first_name ILIKE '%' || name_param || '%' OR cand.last_name ILIKE '%' || name_param || '%')
      LIMIT 10;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.search_members(recruiter_id_param uuid, name_param text)
 RETURNS TABLE(member_info json)
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
AS $function$
BEGIN
    RETURN QUERY
    SELECT 
        json_build_object(
        'user_id', recuser.user_id,
        'first_name', recUser.first_name, 
        'last_name', recUser.last_name, 
        'email', recUser.email, 
        'position', recUser.position,
        'profile_image', recUser.profile_image
      ) AS member_info
    FROM 
        recruiter_relation AS recRel
    JOIN 
        recruiter_user AS recUser ON recUser.user_id = recRel.user_id
    WHERE 
        recRel.recruiter_id = recruiter_id_param
        AND (recUser.first_name ILIKE '%' || name_param || '%' OR 
             recUser.last_name ILIKE '%' || name_param || '%' OR
             recUser.email ILIKE '%' || name_param || '%' OR
             recUser.position ILIKE '%' || name_param || '%') LIMIT 10;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.set_active_rec(in_user_id uuid, in_recruiter_id uuid)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
is_admin boolean;
BEGIN
      update recruiter_relation set is_active = (in_recruiter_id = recruiter_id) where user_id = in_user_id;
    RETURN true;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.test_filter3(rec_id uuid, location_filter text, name_filter text, job_title_filter text, page_size integer, page_number integer, sort_param text DEFAULT 'first_name'::text, is_name_sort_desc boolean DEFAULT false, is_location_sort_desc boolean DEFAULT false, is_job_title_sort_desc boolean DEFAULT false)
 RETURNS TABLE(application_id uuid, created_at text, first_name citext, last_name citext, job_title text, email citext, resume_link text, json_resume jsonb, profile_image text, candidate_id uuid, job_id uuid, candfile_id uuid, total_results bigint)
 LANGUAGE plpgsql
AS $function$ 
BEGIN
  -- Initialize total_results variable
  total_results := 0;

  -- Return the paginated results along with total_results
  RETURN QUERY 
  WITH filtered_results AS (
    SELECT DISTINCT ON (j_app.candidate_id)
      j_app.id as application_id,
      j_app.created_at::text,
      cand.first_name,
      cand.last_name,
      COALESCE(c_files.resume_json->'basics'->>'currentJobTitle', '') as job_title,
      cand.email,
      c_files.file_url as resume,
      c_files.resume_json,
      cand.avatar as profile_image,
      j_app.candidate_id,
      j_app.job_id,
      c_files.id as candfile_id
    FROM
        candidates AS cand
        JOIN applications AS j_app ON cand.id = j_app.candidate_id
        JOIN candidate_files AS c_files ON cand.id = c_files.candidate_id
    WHERE
      cand.recruiter_id = rec_id
      AND
      c_files.resume_json is not null
      AND
      c_files.resume_json->'basics' is not null
      AND (
        CASE
          WHEN LENGTH(location_filter) > 0 THEN to_tsvector(lower(COALESCE(c_files.resume_json->'basics'->>'location', ''))) @@ to_tsquery('english', lower(location_filter))
          ELSE true 
        END
      )
      AND (
        CASE
          WHEN LENGTH(name_filter) > 0 THEN to_tsvector(lower(concat(COALESCE(c_files.resume_json->'basics'->>'firstName', ''),' ',COALESCE(c_files.resume_json->'basics'->>'lastName', '')))) @@ to_tsquery('english', lower(name_filter))
          ELSE true 
        END
      )
      AND (
        CASE
          WHEN LENGTH(job_title_filter) > 0 THEN to_tsvector(lower(COALESCE(c_files.resume_json->'basics'->>'currentJobTitle', ''))) @@ to_tsquery('english', lower(job_title_filter))
          ELSE true 
        END
      )
  )
 SELECT 
    fr.application_id,
    fr.created_at,
    fr.first_name,
    fr.last_name,
    fr.job_title,
    fr.email,
    fr.resume,
    fr.resume_json,
    fr.profile_image,
    fr.candidate_id,
    fr.job_id,
    fr.candfile_id,
    count(*) OVER () AS total_results
  FROM filtered_results fr
ORDER BY
   CASE
      WHEN sort_param = 'first_name' AND is_name_sort_desc THEN lower(fr.first_name) END DESC,
    CASE
      WHEN sort_param = 'first_name' AND NOT is_name_sort_desc THEN lower(fr.first_name) END ASC,
    CASE
      WHEN sort_param = 'location' AND is_location_sort_desc THEN lower(COALESCE(fr.resume_json->'basics'->>'location', '')) END DESC,
    CASE
      WHEN sort_param = 'location' AND NOT is_location_sort_desc THEN lower(COALESCE(fr.resume_json->'basics'->>'location', '')) END ASC,
    CASE
      WHEN sort_param = 'job_title' AND is_job_title_sort_desc THEN lower(COALESCE(fr.resume_json->'basics'->>'currentJobTitle', '')) END DESC,
    CASE
    WHEN sort_param = 'job_title' AND NOT is_job_title_sort_desc THEN lower(COALESCE(fr.resume_json->'basics'->>'currentJobTitle', '')) END ASC

  LIMIT page_size
  OFFSET (page_number - 1) * page_size;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.transfer_user_responsibilities(suspended_user uuid, task_owner uuid DEFAULT NULL::uuid, hiring_manager uuid DEFAULT NULL::uuid, recruiter uuid DEFAULT NULL::uuid, recruiting_coordinator uuid DEFAULT NULL::uuid, sourcer uuid DEFAULT NULL::uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  IF(transfer_user_responsibilities.hiring_manager IS NOT NULL) THEN
    UPDATE 
      public_jobs
    SET 
      hiring_manager = transfer_user_responsibilities.hiring_manager
    WHERE 
      public_jobs.hiring_manager = transfer_user_responsibilities.suspended_user;
  END IF;
  IF(transfer_user_responsibilities.recruiter IS NOT NULL) THEN
    UPDATE 
      public_jobs
    SET 
      recruiter = transfer_user_responsibilities.recruiter
    WHERE 
      public_jobs.recruiter = transfer_user_responsibilities.suspended_user;
  END IF;
  IF(transfer_user_responsibilities.recruiting_coordinator IS NOT NULL) THEN
    UPDATE 
      public_jobs
    SET 
      recruiting_coordinator = transfer_user_responsibilities.recruiting_coordinator
    WHERE 
      public_jobs.recruiting_coordinator = transfer_user_responsibilities.suspended_user;
  END IF;
  IF(transfer_user_responsibilities.sourcer IS NOT NULL) THEN
    UPDATE 
      public_jobs
    SET 
      sourcer = transfer_user_responsibilities.sourcer
    WHERE 
      public_jobs.sourcer = transfer_user_responsibilities.suspended_user;
  END IF;
  IF(transfer_user_responsibilities.task_owner IS NOT NULL) THEN
    UPDATE
      new_tasks
    SET
      assignee = new_assignees.assignee
    FROM
      (
        SELECT
          id,
          ARRAY(SELECT DISTINCT UNNEST(ARRAY_REPLACE(assignee, transfer_user_responsibilities.suspended_user, transfer_user_responsibilities.task_owner))) as assignee
        FROM
          new_tasks
        WHERE
          transfer_user_responsibilities.suspended_user = ANY(assignee)
      ) AS new_assignees
    WHERE
      new_tasks.id = new_assignees.id;
  END IF;
  UPDATE
    recruiter_user
  SET
    status = 'suspended'
  WHERE
    recruiter_user.user_id = transfer_user_responsibilities.suspended_user;
  RETURN;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_application_import_log()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE 
  title TEXT;
  logged_by application_logger;
  created_by UUID := NULL;
BEGIN

  CASE NEW.source
    WHEN 'lever' THEN
      title := 'Application imported from Lever';
      logged_by := 'system';
    WHEN 'greenhouse' THEN
      title := 'Application imported from Greenhouse';
      logged_by := 'system';
    WHEN 'ashby' THEN
      title := 'Application imported from Ashby';
      logged_by := 'system';
    WHEN 'apply_link' THEN
      title := 'Application received from Application link';
      logged_by := 'candidate';
    WHEN 'resume_upload' THEN
      title := 'Application uploaded through Resume upload';
      logged_by := 'user';
      created_by := auth.uid();
    WHEN 'csv_upload' THEN
      title := 'Application uploaded through CSV upload';
      logged_by := 'user';
      created_by := auth.uid();
    WHEN 'manual_upload' THEN
      title := 'Application uploaded through Manual upload';
      logged_by := 'user';
      created_by := auth.uid();
  END CASE;

  INSERT INTO application_logs(application_id, title, created_by, logged_by, module)
  VALUES (NEW.id, title, created_by, logged_by, 'jobs');

  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_application_score_log()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
  score numeric;
BEGIN
  SELECT INTO score 
    score_application(applications.score_json -> 'scores', public_jobs.parameter_weights)
  FROM
    applications
  INNER JOIN
    public_jobs ON
      public_jobs.id = applications.job_id
  WHERE
    applications.id = NEW.id;
  IF score IS NOT NULL AND score >= 0 THEN
    INSERT INTO 
      application_logs (application_id, logged_by, module, title)
    VALUES
      (
        NEW.id,
        'system',
        'jobs',
        'Application was scored ' || score || '% by AglintAI'
      );
  END IF;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_application_score_log2()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  WITH scores AS (
    SELECT
      applications.id as application_id,
      score_application(applications.score_json -> 'scores', NEW.parameter_weights) as new_score,
      score_application(applications.score_json -> 'scores', OLD.parameter_weights) as old_score
    FROM
      applications
    WHERE
      applications.job_id = NEW.id
  )
  INSERT INTO 
    application_logs (application_id, logged_by, module, title)
  SELECT
    scores.application_id,
    'system',
    'jobs',
    'Application was scored ' || scores.new_score || '% due to updated score weights'
  FROM
    scores
  WHERE
    scores.new_score <> scores.old_score AND
    scores.new_score IS NOT NULL AND
    scores.new_score >= 0;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_application_status_log()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
  title TEXT;
  logged_by application_logger := 'user';
  created_by UUID := NULL;
BEGIN
  IF auth.uid() IS NULL THEN
    logged_by := 'system';
  ELSE
    created_by := auth.uid();
  END IF;

  title := 'Application moved from ' || OLD.status || ' to ' || NEW.status;

  INSERT INTO application_logs(application_id, title, created_by, logged_by, module)
  VALUES (NEW.id, title, created_by, logged_by, 'jobs');
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_conversion_timestamp()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  update applications
  set converted_at = now()
  where id = old.id and old.status <> new.status;
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_interview_plan_warning()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
declare 
  plan_count integer;
begin
  select 
    coalesce(count(interview_plan.id), 0) as count into plan_count
  from 
    public_jobs 
  left join
    interview_plan on
      interview_plan.job_id = public_jobs.id
  where
    public_jobs.id = old.job_id;
  if plan_count = 0 then
    update 
      public_jobs
    set
      interview_plan_warning_ignore = false
    where
      public_jobs.id = old.job_id;
  end if;
  return old;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_interview_session_count_invalidation()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  WITH interview_session_info AS (
    SELECT DISTINCT
      interview_session.id,
      interview_session.interviewer_cnt,
      count(interview_session_relation.id) OVER (PARTITION BY interview_session.id) AS session_count
    FROM
      interview_session
    LEFT JOIN
      interview_session_relation ON
      interview_session_relation.session_id = interview_session.id
    WHERE
      interview_session.id = OLD.session_id
  ), invalid_session AS (
    SELECT
      *
    FROM
      interview_session_info
    WHERE
      interview_session_info.interviewer_cnt > interview_session_info.session_count
  )
  UPDATE interview_session
  SET 
    interviewer_cnt = CASE 
                        WHEN invalid_session.interviewer_cnt = 0 THEN 0
                        ELSE invalid_session.session_count
                      END
  FROM 
    invalid_session
  WHERE 
    interview_session.id = invalid_session.id;
  RETURN OLD;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_interview_session_warning()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
declare 
  session_info record;
begin
  select 
    public_jobs.id as job_id,
    coalesce(count(interview_session.id), 0) as count into session_info
  from 
    public_jobs
  left join
    interview_plan on
      interview_plan.job_id = public_jobs.id
  left join
    interview_session on
        interview_session.interview_plan_id = interview_plan.id
  where 
    interview_plan.id = old.interview_plan_id
  group by
    public_jobs.id;
  if session_info.count = 0 then
    update 
      public_jobs
    set
      interview_session_warning_ignore = false
    where
      public_jobs.id = session_info.job_id;
  end if;
  return old;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_module_relation_archive()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  DELETE FROM 
    interview_session_relation
  USING (
    SELECT
    interview_session_relation.id
  FROM
    interview_session_relation
  LEFT JOIN
    interview_session ON
      interview_session_relation.session_id = interview_session.id
  LEFT JOIN
    interview_meeting ON
      interview_meeting.id = interview_session.meeting_id
  WHERE
    interview_session_relation.interview_module_relation_id = NEW.id AND
    (
      interview_session.interview_plan_id IS NOT NULL OR
      interview_meeting.status = 'not_scheduled' OR
      interview_meeting.status = 'cancelled'
    )
  ) AS session_relations
  WHERE
    interview_session_relation.id = session_relations.id;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_recruiter_user_suspension()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  UPDATE 
    interview_module_relation
  SET 
    is_archived = true
  WHERE 
    interview_module_relation.user_id = NEW.user_id;
  DELETE FROM 
    interview_session_relation
  WHERE
    interview_session_relation.user_id = NEW.user_id;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_rescore_applications()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  if old.jd_json <> new.jd_json then
    update 
      applications
    set 
      processing_status = 'not started',
      score_json = null,
      retry = 0
    where
      applications.job_id = new.id;
  end if;
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_set_application_to_new()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  update applications 
  set is_new = true
  where id = new.id;
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_set_processing_started_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  update applications 
  set processing_started_at = now()
  where 
    id = new.id and
    new.processing_status = 'processing';
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_workflow_action_deletion()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  IF NEW."trigger" <> OLD."trigger" THEN
      DELETE FROM workflow_action
      WHERE workflow_action.workflow_id = OLD.id;
  END IF;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.trigger_workflow_auto_connect()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
  workflow RECORD;
BEGIN
  FOR workflow IN 
    SELECT id 
    FROM workflow 
    WHERE recruiter_id = NEW.recruiter_id 
      AND auto_connect = TRUE
  LOOP
    INSERT INTO workflow_job_relation(job_id, workflow_id)
    VALUES (NEW.id, workflow.id);
  END LOOP;
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.update_debrief_session(session_id uuid, session_duration integer, break_duration integer, location text, schedule_type interview_schedule_type, name text, members jsonb, members_meta jsonb)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    DELETE FROM 
        interview_session_relation
    WHERE user_id IN (
        SELECT
            user_id
        FROM 
            interview_session_relation
        WHERE
            interview_session_relation.session_id = update_debrief_session.session_id AND
            user_id NOT IN (
                SELECT 
                    (entry->>'id')::uuid AS user_id
                FROM 
                    jsonb_array_elements(members) AS entry
            )
    );

    INSERT INTO interview_session_relation (user_id, session_id)
    SELECT
        user_id,
        update_debrief_session.session_id AS session_id
    FROM
        (
            SELECT 
                (entry->>'id')::uuid AS user_id
            FROM 
                jsonb_array_elements(members) AS entry
        ) as temp
    WHERE
        user_id NOT IN (
            SELECT 
                interview_session_relation.user_id
            FROM
                interview_session_relation
            WHERE
                interview_session_relation.session_id = update_debrief_session.session_id
        );
    UPDATE interview_session
    SET 
      session_duration = update_debrief_session.session_duration,
      break_duration = update_debrief_session.break_duration,
      location = update_debrief_session.location,
      schedule_type = update_debrief_session.schedule_type,
      name = update_debrief_session.name,
      members_meta = update_debrief_session.members_meta
    WHERE interview_session.id = update_debrief_session.session_id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.update_interview_session(session_id uuid, module_id uuid, session_duration integer, break_duration integer, interviewer_cnt integer, session_type session_type, location text, schedule_type interview_schedule_type, name text, interview_module_relation_entries jsonb, interview_plan_id uuid, session_order integer)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    DELETE FROM interview_session_relation WHERE interview_session_relation.session_id = update_interview_session.session_id;
    INSERT INTO interview_session_relation (interview_module_relation_id, session_id, interviewer_type, training_type)
    SELECT 
        (entry->>'id')::uuid AS interview_module_relation_id,
        update_interview_session.session_id AS session_id,
        (entry->>'interviewer_type')::status_training AS interviewer_type,
        (entry->>'training_type')::interviewer_type AS training_type
    FROM 
        jsonb_array_elements(interview_module_relation_entries) AS entry;
    UPDATE interview_session
    SET  
      module_id = update_interview_session.module_id,
      session_duration = update_interview_session.session_duration,
      break_duration = update_interview_session.break_duration,
      interviewer_cnt = update_interview_session.interviewer_cnt,
      session_type = update_interview_session.session_type,
      location = update_interview_session.location,
      schedule_type = update_interview_session.schedule_type,
      name = update_interview_session.name,
      interview_plan_id = update_interview_session.interview_plan_id
    WHERE interview_session.id = update_interview_session.session_id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.update_interviewer_cnt()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    -- Check if the session type is 'debrief'
    IF (SELECT session_type FROM public.interview_session WHERE id = NEW.session_id) = 'debrief' THEN
        -- Update the interviewer_cnt
        UPDATE public.interview_session
        SET interviewer_cnt = interviewer_cnt + 1
        WHERE id = NEW.session_id;
    END IF;
    RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.update_meeting_status()
 RETURNS void
 LANGUAGE plpgsql
AS $function$BEGIN
  -- Loop through each row in interview_schedule
-- Loop through each row in interview_schedule
    UPDATE interview_meeting
    SET status = 'completed'
    WHERE end_time < NOW() - INTERVAL '1 day' AND status <> 'completed' AND status <> 'cancelled';
END;$function$
;

CREATE OR REPLACE FUNCTION public.update_or_delete_filter_json(session_ids_to_remove uuid[])
 RETURNS void
 LANGUAGE plpgsql
AS $function$
DECLARE
    record RECORD;
BEGIN
    FOR record IN SELECT id, session_ids FROM interview_filter_json
    LOOP
        -- Calculate the difference between current session IDs and those to be removed
        record.session_ids := array(SELECT unnest(record.session_ids) EXCEPT SELECT unnest(session_ids_to_remove));

        IF array_length(record.session_ids, 1) IS NULL THEN
            -- If no session IDs are left, delete the record
            DELETE FROM interview_filter_json WHERE id = record.id;
        ELSE
            -- Otherwise, update the record with the new array of session IDs
            UPDATE interview_filter_json SET session_ids = record.session_ids WHERE id = record.id;
        END IF;
    END LOOP;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.update_resume_score(job_id uuid)
 RETURNS boolean
 LANGUAGE plpgsql
AS $function$
DECLARE
    job_data record;
    parameter_weights_x jsonb;  -- Fixed parameter_weights for all rows
    result_score numeric;     -- Variable to store the result of get_combined_resume_score
BEGIN
    -- Fetch the fixed parameter_weights from the public_jobs table
    SELECT parameter_weights
    INTO parameter_weights_x
    FROM public_jobs
    WHERE id = job_id;
    -- Check if the parameter_weights were found, and if not, return false
    IF NOT FOUND THEN
        RETURN false;
    END IF;
    FOR job_data IN (
        SELECT score_json, id
        FROM applications
        WHERE applications.job_id = update_resume_score.job_id AND score_json IS NOT NULL
    )
    LOOP
        -- Call your get_combined_resume_score function with jd_score and fixed parameter_weights
        result_score := get_combined_resume_score(job_data.score_json, parameter_weights_x);
        -- Update the same row in the job_applications table with the result
        UPDATE applications
        SET overall_score = result_score
        WHERE id = job_data.id;
    END LOOP;
    -- If the loop completes without errors, return true
    RETURN true;
END $function$
;

CREATE OR REPLACE FUNCTION public.updatequestionorder(start_point integer, question_ids uuid[])
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    WITH question_order AS (
        SELECT 
            id,
            start_point + (ROW_NUMBER() OVER ()) - 1 AS new_order
        FROM 
            unnest(question_ids) WITH ORDINALITY AS t(id, ordinal)
    )
    UPDATE 
        assessment_question AS aq
    SET 
        "order" = qo.new_order
    FROM 
        question_order AS qo
    WHERE 
        aq.id = qo.id;
    
END
$function$
;

CREATE OR REPLACE FUNCTION public.workflow_action_log_cron()
 RETURNS boolean
 LANGUAGE plpgsql
AS $function$
DECLARE
    url_x text;
    headers_x jsonb;
    wa_record record;
BEGIN
    SELECT decrypted_secret 
    INTO  url_x
    FROM vault.decrypted_secrets 
    WHERE name = 'APP_URL';
    
    url_x := concat(url_x,'/api/workflow-cron' );

    headers_x := '{"Content-Type": "application/json"}'::jsonb;

    FOR wa_record IN
        SELECT json_build_object('id', w_a_l.id,'workflow_id', w_a_l.workflow_id, 'workflow_action_id', w_a_l.workflow_action_id, 'meta', w_a_l.meta, 'payload', w_a.payload, 'execution_time', w_a_l.execute_at ) AS body,
               w_a_l.id AS id,
               w_a_l.tries AS tries
        FROM workflow_action_logs w_a_l
        JOIN workflow_action w_a ON w_a_l.workflow_action_id = w_a.id
        WHERE (w_a_l.status = 'not_started' AND w_a_l.execute_at < CURRENT_TIMESTAMP + INTERVAL '1 minute')
           OR (w_a_l.status = 'failed' AND w_a_l.tries <= 3 AND w_a_l.started_at > CURRENT_TIMESTAMP - INTERVAL '6 minutes')
    LOOP
        PERFORM net.http_post(
            url := url_x,
            headers := headers_x,
            body := wa_record.body::jsonb
        );

        UPDATE workflow_action_logs
        SET status = 'processing', tries = wa_record.tries + 1, started_at = NOW()
        WHERE id = wa_record.id;
    END LOOP;

    RETURN true;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.workflow_action_log_set_fail_cron()
 RETURNS boolean
 LANGUAGE plpgsql
AS $function$
BEGIN 
  Update workflow_action_logs set status = 'failed' where status = 'processing' and started_at < CURRENT_TIMESTAMP - INTERVAL '4 minutes';
  RETURN true;
END;
$function$
;

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
    IF NEW.is_confirmed THEN
        FOR wa_record IN
            SELECT wa.workflow_id as workflow_id, wa.id as workflow_action_id, w.interval as interval_minutes, w.phase as phase, i_m.start_time as start_time, w.trigger as trigger, i_m_s.session_duration as session_duration,
            json_build_object( 'schedule_id', i_s.id, 'application_id', i_s.application_id, 'meeting_id', i_m.id, 'start_time', i_m.start_time, 'recruiter_user_id', m_i.user_id, 'email_type', c_e_t.type, 'session_id', NEW.session_id) as meta
            FROM 
            meeting_interviewers m_i 
            JOIN interview_session i_m_s ON i_m_s.id =  m_i.session_id
            JOIN interview_meeting i_m ON i_m.id = i_m_s.meeting_id
            JOIN interview_schedule i_s ON i_s.id = i_m.interview_schedule_id
            JOIN applications a ON i_s.application_id = a.id
            JOIN workflow_job_relation war ON war.job_id = a.job_id
            JOIN workflow w ON war.workflow_id = w.id
            JOIN workflow_action wa ON wa.workflow_id = war.workflow_id
            JOIN company_email_template c_e_t ON c_e_t.id = wa.email_template_id
            WHERE m_i.session_relation_id = NEW.id 
            AND c_e_t.type <> 'interviewStart_email_applicant' AND 
                c_e_t.type <> 'interviewStart_email_organizer' and 
                (w.trigger::text = 'interviewStart' or w.trigger::text = 'interviewerConfirmation' or w.trigger::text = 'interviewEnd' and (c_e_t.type='interviewEnd_email_interviewerForFeedback' or c_e_t.type='interviewEnd_slack_interviewerForFeedback'  ))
        LOOP
            IF wa_record.trigger = 'interviewEnd' THEN
              PERFORM create_new_workflow_action_log(wa_record.workflow_id, wa_record.workflow_action_id, wa_record.interval_minutes, wa_record.phase::text, wa_record.meta, wa_record.start_time + (wa_record.session_duration * INTERVAL '1 minute'));
            ELSIF wa_record.trigger = 'interviewStart' THEN
              PERFORM create_new_workflow_action_log(wa_record.workflow_id, wa_record.workflow_action_id, wa_record.interval_minutes, wa_record.phase::text, wa_record.meta, wa_record.start_time);
            ELSE
              PERFORM create_new_workflow_action_log(wa_record.workflow_id, wa_record.workflow_action_id, wa_record.interval_minutes, wa_record.phase::text, wa_record.meta , now());
            END IF;
        END LOOP;
    END IF;
  RETURN NEW;
END;
$function$
;


