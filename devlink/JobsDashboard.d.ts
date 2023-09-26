import * as React from "react";
import * as Types from "./types";

declare function JobsDashboard(props: {
  as?: React.ElementType;
  onClickCreateNewJob?: Types.Devlink.RuntimeProps;
  draftCount?: React.ReactNode;
  sourcingCount?: React.ReactNode;
  interviewingCount?: React.ReactNode;
  closedCount?: React.ReactNode;
  slotAllJobs?: Types.Devlink.Slot;
  slotDraftJobs?: Types.Devlink.Slot;
  slotSourcingJobs?: Types.Devlink.Slot;
  slotInterviewingJobs?: Types.Devlink.Slot;
  slotClosedJobs?: Types.Devlink.Slot;
  slotSearchJobs?: Types.Devlink.Slot;
  onClickAll?: Types.Devlink.RuntimeProps;
  onClickDraft?: Types.Devlink.RuntimeProps;
  onClickSourcing?: Types.Devlink.RuntimeProps;
  onClickInterviewing?: Types.Devlink.RuntimeProps;
  onClickClosed?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
