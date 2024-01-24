import * as React from "react";
import * as Types from "./types";

declare function ClearHistory(props: {
  as?: React.ElementType;
  onClickCancel?: Types.Devlink.RuntimeProps;
  onClickClearHistory?: Types.Devlink.RuntimeProps;
  textDesc?: React.ReactNode;
  textHeader?: React.ReactNode;
}): React.JSX.Element;
