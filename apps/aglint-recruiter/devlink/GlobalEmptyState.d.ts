import * as React from "react";
import * as Types from "./types";

declare function GlobalEmptyState(props: {
  as?: React.ElementType;
  textDesc?: React.ReactNode;
  iconName?: React.ReactNode;
  styleEmpty?: Types.Devlink.RuntimeProps;
  size?: Types.Builtin.Text;
  slotButton?: Types.Devlink.Slot;
  sizes?: Types.Builtin.Text;
  textSubDesc?: React.ReactNode;
  isSubDescVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
