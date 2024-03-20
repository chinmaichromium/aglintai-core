import * as React from "react";
import * as Types from "./types";

declare function AllInterviewCard(props: {
  as?: React.ElementType;
  textName?: React.ReactNode;
  slotCandidateImage?: Types.Devlink.Slot;
  textDuration?: React.ReactNode;
  slotPanelImage?: Types.Devlink.Slot;
  textInterviewPanel?: React.ReactNode;
  textRelatedJob?: React.ReactNode;
  slotScheduleInfo?: Types.Devlink.Slot;
  isSchedulerTable?: Types.Visibility.VisibilityConditions;
  slotCheckbox?: Types.Devlink.Slot;
  isCheckBoxVisible?: Types.Visibility.VisibilityConditions;
  propsGrid?: Types.Devlink.RuntimeProps;
  isSelected?: Types.Visibility.VisibilityConditions;
  textCurrentRole?: React.ReactNode;
  slotStatusBadge?: Types.Devlink.Slot;
}): React.JSX.Element;
