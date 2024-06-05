import { Database } from '../schema.types';
import { Type } from '../utils.types';
import { CustomApplicationLogs } from './application_logs.types';
import { CustomApplications } from './applications.types';
import { CandidateRequestAvailability } from './candidate_request_availability.type';
import { CustomInterviewFilterJson } from './interview_filter_json';
import { CustomInterviewSessionCancel } from './interview_session_cancel.types';
import { CustomInterviewSessionRelation } from './interview_session_relation.types';
import { CustomInterviewSession } from './interview_sessions.types';
import { CustomNewTasks } from './new_tasks.types';
import { CustomNewTaskProgress } from './new_tasks_progress.types';
import { CustomRecruiter } from './recruiter.types';
import { CustomRecruiterUser } from './recruiter_user.types';
import { CustomWorkflowAction } from './workflow_action.types';

type DatabaseTables = Database['public']['Tables'];

export type TableType<
  T extends keyof DatabaseTables,
  U extends { [id in keyof Partial<DatabaseTables[T]['Row']>]: any },
> = Type<
  DatabaseTables[T],
  //@ts-ignore
  {
    Insert: Type<DatabaseTables[T]['Insert'], Partial<U>>;
    Row: Type<DatabaseTables[T]['Row'], U>;
    Update: Type<DatabaseTables[T]['Update'], Partial<U>>;
  }
>;

export type Tables = Type<
  DatabaseTables,
  {
    new_tasks: CustomNewTasks;
    interview_session_relation: CustomInterviewSessionRelation;
    new_tasks_progress: CustomNewTaskProgress;
    recruiter: CustomRecruiter;
    recruiter_user: CustomRecruiterUser;
    interview_session_cancel: CustomInterviewSessionCancel;
    applications: CustomApplications;
    candidate_request_availability: CandidateRequestAvailability;
    interview_session: CustomInterviewSession;
    workflow_action: CustomWorkflowAction;
    application_logs: CustomApplicationLogs;
    interview_filter_json: CustomInterviewFilterJson;
  }
>;
