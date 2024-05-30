import { CustomEmailTemplate, CustomSchedulingSettings } from "./common.types";
import { TableType } from "./index.types";

export type CustomRecruiter = TableType<
  "recruiter",
  {
    scheduling_settings: CustomSchedulingSettings;
    scheduling_reason: CustomSchedulingReason;
    email_template: CustomEmailTemplate;
  }
>;

type CustomSchedulingReason = {
  internal?: {
    rescheduling?: string[];
    cancellation?: string[];
    decline?: string[];
  };
  candidate?: { rescheduling?: string[]; cancellation?: string[] };
} | null;
