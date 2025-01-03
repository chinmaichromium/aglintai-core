import type { Database } from "../schema.types";
import type { Custom, CustomizableTypes } from "../utils.types";
import type { CustomAllInterviewers } from "./all_interviewer";
import type { CustomApplicationStatusView } from "./application_status_view";
import type { CustomApplicationView } from "./application_view.types";
import type { CustomCandidateApplicationView } from "./candidate_applications_view";
import type { CustomInterviewTypesView } from "./interview_types_view";
import type { CustomJobView } from "./job_view.types";
import type { CustomMeetingDetails } from "./meeting_details";
import type { CustomMeetingInterviewersView } from "./meeting_interviewers.types";
import type { CustomModuleRelationView } from "./module_relation_view";
import type { CustomTasksView } from "./tasks_view";
import type { CustomWorkflowView } from "./workflow_view.types";

type DatabaseViews = Database["public"]["Views"];
type DatabaseViewRow<T extends keyof DatabaseViews> = DatabaseViews[T]["Row"];

export type ViewType<
  T extends keyof DatabaseViews,
  U extends DatabaseViewRow<T> extends CustomizableTypes<"Array">
    ? { [id in keyof Partial<DatabaseViewRow<T>[number]>]: any }
    : { [id in keyof Partial<DatabaseViewRow<T>>]: any },
> = Custom<
  DatabaseViews[T],
  //@ts-expect-error
  {
    //@ts-expect-error
    Row: Custom<DatabaseViewRow<T>, U>;
  }
>;

export type Views = Custom<
  DatabaseViews,
  {
    candidate_applications_view: CustomCandidateApplicationView;
    workflow_view: CustomWorkflowView;
    application_status_view: CustomApplicationStatusView;
    application_view: CustomApplicationView;
    tasks_view: CustomTasksView;
    job_view: CustomJobView;
    meeting_interviewers: CustomMeetingInterviewersView;
    all_interviewers: CustomAllInterviewers;
    interview_types_view: CustomInterviewTypesView;
    module_relations_view: CustomModuleRelationView;
    meeting_details: CustomMeetingDetails;
  }
>;
