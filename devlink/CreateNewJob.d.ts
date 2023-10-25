import * as React from "react";
import * as Types from "./types";

declare function CreateNewJob(props: {
  as?: React.ElementType;
  onClickBack?: Types.Devlink.RuntimeProps;
  isSavedChangesVisible?: Types.Visibility.VisibilityConditions;
  onClickPreview?: Types.Devlink.RuntimeProps;
  onClickPublish?: Types.Devlink.RuntimeProps;
  onClickDetails?: Types.Devlink.RuntimeProps;
  isDetailsActive?: Types.Visibility.VisibilityConditions;
  onClickApplyForm?: Types.Devlink.RuntimeProps;
  isApplyFormActive?: Types.Visibility.VisibilityConditions;
  onClickScoreSetting?: Types.Devlink.RuntimeProps;
  isScoreSettingActive?: Types.Visibility.VisibilityConditions;
  onClickEmailTemplates?: Types.Devlink.RuntimeProps;
  isEmailTemplateActive?: Types.Visibility.VisibilityConditions;
  onClickScreeningQuestions?: Types.Devlink.RuntimeProps;
  isScreeningQuestionsActive?: Types.Visibility.VisibilityConditions;
  onClickWorkflows?: Types.Devlink.RuntimeProps;
  isWorkflowsActive?: Types.Visibility.VisibilityConditions;
  slotCreateJob?: Types.Devlink.Slot;
  textJobName?: React.ReactNode;
  textJobEdit?: React.ReactNode;
  slotPublishButton?: Types.Devlink.Slot;
  slotSavedChanges?: Types.Devlink.Slot;
  isDisclaimerDetailsVisible?: Types.Visibility.VisibilityConditions;
  slotDisclaimerDetails?: Types.Devlink.Slot;
  isDisclaimerApplyFormVisible?: Types.Visibility.VisibilityConditions;
  slotDisclaimerApplyForm?: Types.Devlink.Slot;
  isDisclaimerScoreVisible?: Types.Visibility.VisibilityConditions;
  slotDisclaimerScoreSetting?: Types.Devlink.Slot;
  isDisclaimerEmailVisible?: Types.Visibility.VisibilityConditions;
  slotEmailDisclaimer?: Types.Devlink.Slot;
  isDisclaimerScreeningVisible?: Types.Visibility.VisibilityConditions;
  slotDisclaimerScreening?: Types.Devlink.Slot;
  isDisclaimerWorkflowVisible?: Types.Visibility.VisibilityConditions;
  slotDisclaimerWorkflow?: Types.Devlink.Slot;
  isPreviewVisible?: Types.Visibility.VisibilityConditions;
  slotAtsBadge?: Types.Devlink.Slot;
}): React.JSX.Element;
