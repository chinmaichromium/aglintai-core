import * as React from "react";
import * as Types from "./types";

declare function GeneralScheduleCard(props: {
  as?: React.ElementType;
  isPanelIconVisible?: Types.Visibility.VisibilityConditions;
  isDebriefIconVisible?: Types.Visibility.VisibilityConditions;
  isOnetoOneIconVisible?: Types.Visibility.VisibilityConditions;
  onClickDelete?: Types.Devlink.RuntimeProps;
  onClickEdit?: Types.Devlink.RuntimeProps;
  textModuleName?: React.ReactNode;
  slotStatusPill?: Types.Devlink.Slot;
  onClickDot?: Types.Devlink.RuntimeProps;
  textTiming?: React.ReactNode;
  textDuration?: React.ReactNode;
  textPlatformName?: React.ReactNode;
  slotPlatformIcon?: Types.Devlink.Slot;
  isTimingVisible?: Types.Visibility.VisibilityConditions;
  onClickLink?: Types.Devlink.RuntimeProps;
  textLink?: React.ReactNode;
  textSelected?: React.ReactNode;
  isTextSelectedVisible?: Types.Visibility.VisibilityConditions;
  textInterviewers?: React.ReactNode;
  slotInterviewers?: Types.Devlink.Slot;
  textTrainees?: React.ReactNode;
  slotTrainees?: Types.Devlink.Slot;
  textMembers?: React.ReactNode;
  slotMembers?: Types.Devlink.Slot;
  isMembersVisible?: Types.Visibility.VisibilityConditions;
  isTraineesVisible?: Types.Visibility.VisibilityConditions;
  isInterviewersVisible?: Types.Visibility.VisibilityConditions;
  isLinkVisilble?: Types.Visibility.VisibilityConditions;
  isHeaderTitleVisible?: Types.Visibility.VisibilityConditions;
  isCardSelected?: Types.Visibility.VisibilityConditions;
  slotAddScheduleCard?: Types.Devlink.Slot;
  isAddCardVisible?: Types.Visibility.VisibilityConditions;
  onClickScheduleNow?: Types.Devlink.RuntimeProps;
  isScheduleNowVisible?: Types.Visibility.VisibilityConditions;
  isSubHeaderVisible?: Types.Visibility.VisibilityConditions;
  slotEditOptions?: Types.Devlink.Slot;
  isEditOptionVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
