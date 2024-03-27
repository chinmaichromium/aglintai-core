import * as React from "react";
import * as Types from "./types";

declare function FeedbackTableRow(props: {
  as?: React.ElementType;
  isAddFeedback?: Types.Visibility.VisibilityConditions;
  isNoFeedback?: Types.Visibility.VisibilityConditions;
  textInterviewerName?: React.ReactNode;
  textjobTitle?: React.ReactNode;
  slotAvatar?: Types.Devlink.Slot;
  textRecommendation?: React.ReactNode;
  textFeedback?: React.ReactNode;
  onClickFeedback?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
