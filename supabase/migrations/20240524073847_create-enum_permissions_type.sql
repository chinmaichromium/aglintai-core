create type "public"."permissions_type" as enum (
    'jobs_create',
    'jobs_read',
    'jobs_update',
    'jobs_delete',
    'jobs_publish',
    'jobs_unpublish',
    'jobs_archive',
    'jobs_restore',
    'jobs_assignHiringManager',
    'jobs_assignRecruiter',
    'jobs_assignCoordinator',
    'jobs_assignSourcer',
    'candidates_add',
    'candidates_read',
    'candidates_update',
    'candidates_delete',
    'candidates_moveStage',
    'profileScore_view',
    'profileScore_update',
    'interviews_schedule',
    'interviews_read',
    'interviews_update',
    'interviews_delete',
    'reports_generate',
    'reports_view',
    'reports_export',
    'settings_view',
    'settings_update',
    'tasks_enabled',
    'jobs_enabled',
    'scheduler_enabled',
    'sourcing_enabled',
    'phone_screening_enabled',
    'assessment_enabled',
    'integrations_enabled',
    'company_setting_enabled'
);
alter table "public"."permissions"
add column "is_enable" boolean default true;
alter table "public"."permissions"
alter column "name"
set data type permissions_type using "name"::permissions_type;