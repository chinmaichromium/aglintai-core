import type { DatabaseTable } from "../..";
import type { EventNodeType, EventStatusType } from "../../workflow";
import type { TableType } from "./index.types";

export type CustomRequestProgress = TableType<
  "request_progress",
  {
    status: EventStatusType;
    event_type: EventNodeType;
    meta: {
      event_run_id?: number | null;
      workflow_action_id?: string;
      scheduled_time?: string;
      [key: string]: any;
      self_schedule_date?: {
        start: string;
        end: string;
        user_tz: string;
      };
      filter_json_id?: string;
      avail_req_id?: string;
      candidate_submitted_slots?: DatabaseTable["candidate_request_availability"]["slots"];
      re_requested_date?: {
        start_date: string;
        end_date: string;
      };
    };
  }
>;
