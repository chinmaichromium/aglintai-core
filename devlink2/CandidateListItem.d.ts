import * as React from "react";
import * as Types from "./types";

declare function CandidateListItem(props: {
  as?: React.ElementType;
  onclickSelect?: Types.Devlink.RuntimeProps;
  isChecked?: Types.Visibility.VisibilityConditions;
  slotProfileImage?: Types.Devlink.Slot;
  name?: React.ReactNode;
  jobTitle?: React.ReactNode;
  email?: React.ReactNode;
  phone?: React.ReactNode;
  isInterviewVisible?: Types.Visibility.VisibilityConditions;
  slotResumeScore?: Types.Devlink.Slot;
  slotInterviewScore?: Types.Devlink.Slot;
  isHighlighted?: Types.Visibility.VisibilityConditions;
  appliedDate?: React.ReactNode;
  onclickCandidate?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
