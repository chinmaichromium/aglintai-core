import * as React from "react";
import * as Types from "./types";

declare function ButtonSolid(props: {
  as?: React.ElementType;
  onClickButton?: Types.Devlink.RuntimeProps;
  size?: Types.Builtin.Text;
  color?: Types.Builtin.Text;
  highContrast?: Types.Builtin.Text;
  isLeftIcon?: Types.Visibility.VisibilityConditions;
  slotIcon?: Types.Devlink.Slot;
  textButton?: React.ReactNode;
  isRightIcon?: Types.Visibility.VisibilityConditions;
  isDisabled?: Types.Visibility.VisibilityConditions;
  isLoading?: Types.Visibility.VisibilityConditions;
  slotLoader?: Types.Devlink.Slot;
}): React.JSX.Element;
