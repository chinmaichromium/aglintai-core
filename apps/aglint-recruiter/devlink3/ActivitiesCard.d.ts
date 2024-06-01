import * as React from "react";
import * as Types from "./types";

declare function ActivitiesCard(props: {
  as?: React.ElementType;
  slotImage?: Types.Devlink.Slot;
  textTitle?: React.ReactNode;
  textTime?: React.ReactNode;
  isLineVisible?: Types.Visibility.VisibilityConditions;
  onClickViewTask?: Types.Devlink.RuntimeProps;
  textDesc?: React.ReactNode;
  isViewTaskVisible?: Types.Visibility.VisibilityConditions;
  slotContent?: Types.Devlink.Slot;
  onClickReschedule?: Types.Devlink.RuntimeProps;
  isRescheduleVisible?: Types.Visibility.VisibilityConditions;
  isContentVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
