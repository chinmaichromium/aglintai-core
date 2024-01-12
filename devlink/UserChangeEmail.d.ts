import * as React from "react";
import * as Types from "./types";

declare function UserChangeEmail(props: {
  as?: React.ElementType;
  slotEmail?: Types.Devlink.Slot;
  onClickEmailChange?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
