import * as React from "react";
import * as Types from "./types";

declare function SidebarScreening(props: {
  as?: React.ElementType;
  isInvited?: Types.Visibility.VisibilityConditions;
  isSubmitted?: Types.Visibility.VisibilityConditions;
  onclickResend?: Types.Devlink.RuntimeProps;
  slotQuestions?: Types.Devlink.Slot;
  isNotInvited?: Types.Visibility.VisibilityConditions;
  onclickInvite?: Types.Devlink.RuntimeProps;
  slotStatus?: Types.Devlink.Slot;
  onclickCopyLink?: Types.Devlink.RuntimeProps;
  onclickArrow?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
