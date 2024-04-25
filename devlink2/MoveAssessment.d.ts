import * as React from "react";
import * as Types from "./types";

declare function MoveAssessment(props: {
  as?: React.ElementType;
  isInterviewVisible?: Types.Visibility.VisibilityConditions;
  isInterviewDateVisible?: Types.Visibility.VisibilityConditions;
  isAssignedToVisible?: Types.Visibility.VisibilityConditions;
  isWhentoCallVisible?: Types.Visibility.VisibilityConditions;
  slotWhentoCallIcon?: Types.Devlink.Slot;
  textWhenToCall?: React.ReactNode;
  slotWhentoCall?: Types.Devlink.Slot;
  slotAssignedTo?: Types.Devlink.Slot;
  slotInterviewDate?: Types.Devlink.Slot;
  slotInterview?: Types.Devlink.Slot;
  onClickInterview?: Types.Devlink.RuntimeProps;
  onClickInterviewDate?: Types.Devlink.RuntimeProps;
  onClickAssignedTo?: Types.Devlink.RuntimeProps;
  onClickWhenToCall?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
