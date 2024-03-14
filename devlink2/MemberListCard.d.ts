import * as React from "react";
import * as Types from "./types";

declare function MemberListCard(props: {
  as?: React.ElementType;
  slotProfileImage?: Types.Devlink.Slot;
  textName?: React.ReactNode;
  textRole?: React.ReactNode;
  countUpcomingSchedule?: React.ReactNode;
  countCompletedSchedule?: React.ReactNode;
  countIncompleteSchedule?: React.ReactNode;
  onHoverDot?: Types.Devlink.RuntimeProps;
  onClickPauseInterview?: Types.Devlink.RuntimeProps;
  onClickResumeInterview?: Types.Devlink.RuntimeProps;
  onClickRemoveModule?: Types.Devlink.RuntimeProps;
  isPauseVisible?: Types.Visibility.VisibilityConditions;
  isResumeVisible?: Types.Visibility.VisibilityConditions;
  isScheduleCountVisible?: Types.Visibility.VisibilityConditions;
  isProfileVisible?: Types.Visibility.VisibilityConditions;
  isRoleVisible?: Types.Visibility.VisibilityConditions;
  isTrainingCompletedVisible?: Types.Visibility.VisibilityConditions;
  isTrainingProgessVisible?: Types.Visibility.VisibilityConditions;
  onClickApproveCandidate?: Types.Devlink.RuntimeProps;
  slotProgressBar?: Types.Devlink.Slot;
  onClickViewProgress?: Types.Devlink.RuntimeProps;
  isMoveToQualifierVisible?: Types.Visibility.VisibilityConditions;
  onClickMoveToQualifier?: Types.Devlink.RuntimeProps;
  isApproveCandidateButtonVisible?: Types.Visibility.VisibilityConditions;
  isPendingApprovalVisible?: Types.Visibility.VisibilityConditions;
  textPauseResumeDate?: React.ReactNode;
  isPauseResumeVisible?: Types.Visibility.VisibilityConditions;
  onClickCard?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
