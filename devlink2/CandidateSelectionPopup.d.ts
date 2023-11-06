import * as React from "react";
import * as Types from "./types";

declare function CandidateSelectionPopup(props: {
  as?: React.ElementType;
  textHeader?: React.ReactNode;
  textDescription?: React.ReactNode;
  isChecked?: Types.Visibility.VisibilityConditions;
  slotButtons?: Types.Devlink.Slot;
  onclickClose?: Types.Devlink.RuntimeProps;
  textCheck?: React.ReactNode;
}): React.JSX.Element;
