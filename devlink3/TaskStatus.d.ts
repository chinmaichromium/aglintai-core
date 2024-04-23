import * as React from "react";
import * as Types from "./types";

declare function TaskStatus(props: {
  as?: React.ElementType;
  textStatus?: React.ReactNode;
  bgColorProps?: Types.Devlink.RuntimeProps;
  textColorProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
