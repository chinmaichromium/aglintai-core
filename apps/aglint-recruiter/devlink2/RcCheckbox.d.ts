import * as React from "react";
import * as Types from "./types";

declare function RcCheckbox(props: {
  as?: React.ElementType;
  isChecked?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  onclickCheck?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
