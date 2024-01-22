import * as React from "react";
import * as Types from "./types";

declare function CandidateDatabaseSearch(props: {
  as?: React.ElementType;
  onClickAllCandidate?: Types.Devlink.RuntimeProps;
  onClickDbRequest?: Types.Devlink.RuntimeProps;
  onClickSearchJobDescription?: Types.Devlink.RuntimeProps;
  slotInputSearch?: Types.Devlink.Slot;
  isClearHistoryVisible?: Types.Visibility.VisibilityConditions;
  onClickClearHistory?: Types.Devlink.RuntimeProps;
  slotCandidateHistoryCard?: Types.Devlink.Slot;
  onClickSearch?: Types.Devlink.RuntimeProps;
  slotLottieSearch?: Types.Devlink.Slot;
  isSearchInAglintVisible?: Types.Visibility.VisibilityConditions;
  isSearchInAllVisible?: Types.Visibility.VisibilityConditions;
  slotNavSublink?: Types.Devlink.Slot;
  isSearchJdVisible?: Types.Visibility.VisibilityConditions;
  isSearchByJdVisible?: Types.Visibility.VisibilityConditions;
  isSavedListVisible?: Types.Visibility.VisibilityConditions;
  slotSavedList?: Types.Devlink.Slot;
  slotInput?: Types.Devlink.Slot;
  onClickSubmit?: Types.Devlink.RuntimeProps;
  onClickClose?: Types.Devlink.RuntimeProps;
  onClickCreateNewList?: Types.Devlink.RuntimeProps;
  isSavedListEmpty?: Types.Visibility.VisibilityConditions;
  isInputVisible?: Types.Visibility.VisibilityConditions;
  isViewAllCandidateVisible?: Types.Visibility.VisibilityConditions;
  onClickViewAllCandidate?: Types.Devlink.RuntimeProps;
  isSearchDbVisible?: Types.Visibility.VisibilityConditions;
  isEmpty?: Types.Visibility.VisibilityConditions;
  slotEmptyLottie?: Types.Devlink.Slot;
}): React.JSX.Element;
