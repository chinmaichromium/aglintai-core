import * as React from "react";
import * as Types from "./types";

declare function ButtonSoft(props: {
  as?: React.ElementType;
  onClickButton?: Types.Devlink.RuntimeProps;
  color?: Types.Builtin.Text;
  highContrast?: Types.Builtin.Text;
  size?: Types.Builtin.Text;
  isLeftIcon?: Types.Visibility.VisibilityConditions;
  slotIcon?: Types.Devlink.Slot;
  isRightIcon?: Types.Visibility.VisibilityConditions;
  textButton?: React.ReactNode;
  isDisabled?: Types.Visibility.VisibilityConditions;
  isLoading?: Types.Visibility.VisibilityConditions;
  slotLoader?: Types.Devlink.Slot;
}): React.JSX.Element;
