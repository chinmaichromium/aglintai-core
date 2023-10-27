import * as React from "react";
import * as Types from "./types";

declare function JobDetailsTabs(props: {
  as?: React.ElementType;
  onClickNew?: Types.Devlink.RuntimeProps;
  countNew?: React.ReactNode;
  onClickInterview?: Types.Devlink.RuntimeProps;
  countInterview?: React.ReactNode;
  onClickQualified?: Types.Devlink.RuntimeProps;
  countQualified?: React.ReactNode;
  onClickDisqualified?: Types.Devlink.RuntimeProps;
  countDisqualified?: React.ReactNode;
  isNewSelected?: Types.Visibility.VisibilityConditions;
  isInterviewSelected?: Types.Visibility.VisibilityConditions;
  isQualifiedSelected?: Types.Visibility.VisibilityConditions;
  isDisqualifiedSelected?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
