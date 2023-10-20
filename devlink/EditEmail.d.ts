import * as React from "react";
import * as Types from "./types";

declare function EditEmail(props: {
  as?: React.ElementType;
  textEmailName?: React.ReactNode;
  onClickSaveChanges?: Types.Devlink.RuntimeProps;
  onClickClose?: Types.Devlink.RuntimeProps;
  slotForm?: Types.Devlink.Slot;
  editEmailDescription?: React.ReactNode;
  slotBottom?: Types.Devlink.Slot;
  isSaveChangesButtonVisible?: Types.Visibility.VisibilityConditions;
  isRequestTestMailVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
