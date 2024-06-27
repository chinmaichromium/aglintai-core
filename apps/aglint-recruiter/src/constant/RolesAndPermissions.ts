export const defaultRoles = [
  { name: 'admin', description: '' },
  { name: 'hiring manager', description: '' },
  { name: 'recruiter', description: '' },
  { name: 'interviewer', description: '' },
  { name: 'recruiting coordinator', description: '' },
  { name: 'sourcer', description: '' },
] as const;

export const defaultPermissions = [
  { name: 'jobs_create', description: '' },
  { name: 'jobs_read', description: '' },
  { name: 'jobs_update', description: '' },
  { name: 'jobs_delete', description: '' },
  { name: 'jobs_publish', description: '' },
  { name: 'jobs_unpublish', description: '' },
  { name: 'jobs_archive', description: '' },
  { name: 'jobs_restore', description: '' },
  { name: 'jobs_assignHiringManager', description: '' },
  { name: 'jobs_assignRecruiter', description: '' },
  { name: 'jobs_assignCoordinator', description: '' },
  { name: 'jobs_assignSourcer', description: '' },
  { name: 'candidates_add', description: '' },
  { name: 'candidates_read', description: '' },
  { name: 'candidates_update', description: '' },
  { name: 'candidates_delete', description: '' },
  { name: 'candidates_moveStage', description: '' },
  { name: 'profileScore_view', description: '' },
  { name: 'profileScore_update', description: '' },
  { name: 'interviews_schedule', description: '' },
  { name: 'interviews_read', description: '' },
  { name: 'interviews_update', description: '' },
  { name: 'interviews_delete', description: '' },
  { name: 'reports_generate', description: '' },
  { name: 'reports_view', description: '' },
  { name: 'reports_export', description: '' },
  { name: 'settings_view', description: '' },
  { name: 'settings_update', description: '' },
  { name: 'tasks_enabled', description: '' },
  { name: 'jobs_enabled', description: '' },
  { name: 'scheduler_enabled', description: '' },
  { name: 'sourcing_enabled', description: '' },
  { name: 'phone_screening_enabled', description: '' },
  { name: 'assessment_enabled', description: '' },
  { name: 'integrations_enabled', description: '' },
  { name: 'company_setting_enabled', description: '' },
  { name: 'workflow_enabled', description: '' },
  { name: 'workflow_create', description: '' },
  { name: 'workflow_read', description: '' },
  { name: 'workflow_update', description: '' },
  { name: 'workflow_delete', description: '' },
  { name: 'team_enabled', description: '' },
  { name: 'team_create', description: '' },
  { name: 'team_read', description: '' },
  { name: 'team_update', description: '' },
  { name: 'team_delete', description: '' },
  { name: 'tasks_create', description: '' },
  { name: 'tasks_read', description: '' },
  { name: 'tasks_update', description: '' },
  { name: 'tasks_delete', description: '' },
  { name: 'scheduler_create', description: '' },
  { name: 'scheduler_read', description: '' },
  { name: 'scheduler_update', description: '' },
  { name: 'scheduler_delete', description: '' },
  { name: 'scheduler_request_availability', description: '' },
  { name: 'scheduler_send_scheduling', description: '' },
  { name: 'scheduler_interview_types_create', description: '' },
  { name: 'scheduler_interview_types_read', description: '' },
  { name: 'scheduler_interview_types_update', description: '' },
  { name: 'scheduler_interviewer_edit', description: '' },
  { name: 'settings_scheduler_enable', description: '' },
  { name: 'settings_scheduler_update', description: '' },
  { name: 'settings_company_enable', description: '' },
  { name: 'settings_company_update', description: '' },
  { name: 'settings_team_enable', description: '' },
  { name: 'settings_team_update', description: '' },
  { name: 'settings_roles_enable', description: '' },
  { name: 'settings_roles_update', description: '' },
] as const;

export const defaultRolePermissionRelation = {
  admin: [
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
    'company_setting_enabled',
    'workflow_enabled',
    'workflow_create',
    'workflow_read',
    'workflow_update',
    'workflow_delete',
    'team_enabled',
    'team_create',
    'team_read',
    'team_update',
    'team_delete',
    'tasks_create',
    'tasks_read',
    'tasks_update',
    'tasks_delete',
    'scheduler_create',
    'scheduler_read',
    'scheduler_update',
    'scheduler_delete',
    'scheduler_request_availability',
    'scheduler_send_scheduling',
    'scheduler_interview_types_create',
    'scheduler_interview_types_read',
    'scheduler_interview_types_update',
    'scheduler_interviewer_edit',
    'settings_scheduler_enable',
    'settings_scheduler_update',
    'settings_company_enable',
    'settings_company_update',
    'settings_team_enable',
    'settings_team_update',
    'settings_roles_enable',
    'settings_roles_update',
  ],
  'hiring manager': [
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
    'company_setting_enabled',
    'workflow_enabled',
    'workflow_create',
    'workflow_read',
    'workflow_update',
    'workflow_delete',
    'team_enabled',
    'team_create',
    'team_read',
    'team_update',
    'team_delete',
    'tasks_create',
    'tasks_read',
    'tasks_update',
    'tasks_delete',
    'scheduler_create',
    'scheduler_read',
    'scheduler_update',
    'scheduler_delete',
    'scheduler_request_availability',
    'scheduler_send_scheduling',
    'scheduler_interview_types_create',
    'scheduler_interview_types_read',
    'scheduler_interview_types_update',
    'scheduler_interviewer_edit',
    'settings_scheduler_enable',
    'settings_scheduler_update',
    'settings_company_enable',
    'settings_company_update',
    'settings_team_enable',
    'settings_team_update',
    'settings_roles_enable',
    'settings_roles_update',
  ],
  recruiter: [
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
    'company_setting_enabled',
    'workflow_enabled',
    'workflow_create',
    'workflow_read',
    'workflow_update',
    'workflow_delete',
    'team_enabled',
    'team_create',
    'team_read',
    'team_update',
    'team_delete',
    'tasks_create',
    'tasks_read',
    'tasks_update',
    'tasks_delete',
    'scheduler_create',
    'scheduler_read',
    'scheduler_update',
    'scheduler_delete',
    'scheduler_request_availability',
    'scheduler_send_scheduling',
    'scheduler_interview_types_create',
    'scheduler_interview_types_read',
    'scheduler_interview_types_update',
    'scheduler_interviewer_edit',
    'settings_scheduler_enable',
    'settings_scheduler_update',
    'settings_company_enable',
    'settings_company_update',
    'settings_team_enable',
    'settings_team_update',
    'settings_roles_enable',
    'settings_roles_update',
  ],
  interviewer: [
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
    'company_setting_enabled',
    'workflow_enabled',
    'workflow_create',
    'workflow_read',
    'workflow_update',
    'workflow_delete',
    'team_enabled',
    'team_create',
    'team_read',
    'team_update',
    'team_delete',
    'tasks_create',
    'tasks_read',
    'tasks_update',
    'tasks_delete',
    'scheduler_create',
    'scheduler_read',
    'scheduler_update',
    'scheduler_delete',
    'scheduler_request_availability',
    'scheduler_send_scheduling',
    'scheduler_interview_types_create',
    'scheduler_interview_types_read',
    'scheduler_interview_types_update',
    'scheduler_interviewer_edit',
    'settings_scheduler_enable',
    'settings_scheduler_update',
    'settings_company_enable',
    'settings_company_update',
    'settings_team_enable',
    'settings_team_update',
    'settings_roles_enable',
    'settings_roles_update',
  ],
  'recruiting coordinator': [
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
    'company_setting_enabled',
    'workflow_enabled',
    'workflow_create',
    'workflow_read',
    'workflow_update',
    'workflow_delete',
    'team_enabled',
    'team_create',
    'team_read',
    'team_update',
    'team_delete',
    'tasks_create',
    'tasks_read',
    'tasks_update',
    'tasks_delete',
    'scheduler_create',
    'scheduler_read',
    'scheduler_update',
    'scheduler_delete',
    'scheduler_request_availability',
    'scheduler_send_scheduling',
    'scheduler_interview_types_create',
    'scheduler_interview_types_read',
    'scheduler_interview_types_update',
    'scheduler_interviewer_edit',
    'settings_scheduler_enable',
    'settings_scheduler_update',
    'settings_company_enable',
    'settings_company_update',
    'settings_team_enable',
    'settings_team_update',
    'settings_roles_enable',
    'settings_roles_update',
  ],
  sourcer: [
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
    'company_setting_enabled',
    'workflow_enabled',
    'workflow_create',
    'workflow_read',
    'workflow_update',
    'workflow_delete',
    'team_enabled',
    'team_create',
    'team_read',
    'team_update',
    'team_delete',
    'tasks_create',
    'tasks_read',
    'tasks_update',
    'tasks_delete',
    'scheduler_create',
    'scheduler_read',
    'scheduler_update',
    'scheduler_delete',
    'scheduler_request_availability',
    'scheduler_send_scheduling',
    'scheduler_interview_types_create',
    'scheduler_interview_types_read',
    'scheduler_interview_types_update',
    'scheduler_interviewer_edit',
    'settings_scheduler_enable',
    'settings_scheduler_update',
    'settings_company_enable',
    'settings_company_update',
    'settings_team_enable',
    'settings_team_update',
    'settings_roles_enable',
    'settings_roles_update',
  ],
};
