import * as React from "react";
import * as Types from "./types";

declare function AglintAiChat(props: {
  as?: React.ElementType;
  slotAiBody?: Types.Devlink.Slot;
  slotAiInput?: Types.Devlink.Slot;
  onClickMemory?: Types.Devlink.RuntimeProps;
  onClickClear?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
