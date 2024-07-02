import * as React from "react";
import * as Types from "./types";

declare function NewScheduleDetail(props: {
  as?: React.ElementType;
  slotCandidateList?: Types.Devlink.Slot;
  slotCandidateButton?: Types.Devlink.Slot;
  isCandidateButtonVisible?: Types.Visibility.VisibilityConditions;
  slotInterviewerList?: Types.Devlink.Slot;
  slotInterviewerButton?: Types.Devlink.Slot;
  isInterviewerButtonVisible?: Types.Visibility.VisibilityConditions;
  slotOrganizerList?: Types.Devlink.Slot;
  slotHiringTeamList?: Types.Devlink.Slot;
  slotInterviewTypeButton?: Types.Devlink.Slot;
  textMonth?: React.ReactNode;
  textDate?: React.ReactNode;
  textDay?: React.ReactNode;
  textPanelName?: React.ReactNode;
  iconPanel?: React.ReactNode;
  slotStatusBadge?: Types.Devlink.Slot;
  textTime?: React.ReactNode;
}): React.JSX.Element;
