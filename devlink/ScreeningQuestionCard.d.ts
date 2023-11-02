import * as React from "react";
import * as Types from "./types";

declare function ScreeningQuestionCard(props: {
  as?: React.ElementType;
  slotInput?: Types.Devlink.Slot;
  onClickGenerate?: Types.Devlink.RuntimeProps;
  slotVideo?: Types.Devlink.Slot;
  isGeneratingLoaderVisible?: Types.Visibility.VisibilityConditions;
  slotGeneratingLottie?: Types.Devlink.Slot;
  isEditButtonVisible?: Types.Visibility.VisibilityConditions;
  isGenerateButtonVisible?: Types.Visibility.VisibilityConditions;
  onClickEdit?: Types.Devlink.RuntimeProps;
  onClickDelete?: Types.Devlink.RuntimeProps;
  isSaveButtonVisible?: Types.Visibility.VisibilityConditions;
  isGenerateVisible?: Types.Visibility.VisibilityConditions;
  slotEmptyVideo?: Types.Devlink.Slot;
  onClickGenerateVideo?: Types.Devlink.RuntimeProps;
  isPauseButtonVisible?: Types.Visibility.VisibilityConditions;
  isPlayButtonVisible?: Types.Visibility.VisibilityConditions;
  onClickPause?: Types.Devlink.RuntimeProps;
  onClickPlay?: Types.Devlink.RuntimeProps;
  onClickSave?: Types.Devlink.RuntimeProps;
  onClickCancel?: Types.Devlink.RuntimeProps;
  isPlayPauseButtonVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
