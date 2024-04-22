import * as React from "react";
import * as Types from "./types";

declare function ActivitiesCard(props: {
  as?: React.ElementType;
  slotImage?: Types.Devlink.Slot;
  textTitle?: React.ReactNode;
  textTime?: React.ReactNode;
  isLineVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
