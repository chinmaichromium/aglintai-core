import * as React from "react";
import * as Types from "./types";

declare function NewInterviewPlanCard(props: {
  as?: React.ElementType;
  slotCheckbox?: Types.Devlink.Slot;
  isNotScheduledIconVisible?: Types.Visibility.VisibilityConditions;
  textMonth?: React.ReactNode;
  textDate?: React.ReactNode;
  textDay?: React.ReactNode;
  slotStatus?: Types.Devlink.Slot;
  textTime?: React.ReactNode;
  isTimeVisible?: Types.Visibility.VisibilityConditions;
  textMeetingTitle?: React.ReactNode;
  textMeetingPlatform?: React.ReactNode;
  slotPlatformIcon?: Types.Devlink.Slot;
  textDuration?: React.ReactNode;
  textLocation?: React.ReactNode;
  isLocationVisible?: Types.Visibility.VisibilityConditions;
  isDurationVisible?: Types.Visibility.VisibilityConditions;
  slotScheduleNowButton?: Types.Devlink.Slot;
  isScheduleNowButtonVisible?: Types.Visibility.VisibilityConditions;
  isSelected?: Types.Visibility.VisibilityConditions;
  slotEditOptionModule?: Types.Devlink.Slot;
  isOnetoOneIconVisible?: Types.Visibility.VisibilityConditions;
  isPanelIconVisible?: Types.Visibility.VisibilityConditions;
  isDebriefIconVisible?: Types.Visibility.VisibilityConditions;
  onClickDots?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
