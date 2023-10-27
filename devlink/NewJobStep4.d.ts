import * as React from "react";
import * as Types from "./types";

declare function NewJobStep4(props: {
  as?: React.ElementType;
  slotInterviewWorkflow?: Types.Devlink.Slot;
  slotInterviewEmail?: Types.Devlink.Slot;
  slotApplicationWorkflow?: Types.Devlink.Slot;
  slotDisqualifyEmail?: Types.Devlink.Slot;
  isProceedDisable?: Types.Visibility.VisibilityConditions;
  onClickProcced?: Types.Devlink.RuntimeProps;
  isJobAdd?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
