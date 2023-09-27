import * as React from "react";
import * as Types from "./types";

declare function SkillsInput(props: {
  as?: React.ElementType;
  slotInput?: Types.Devlink.Slot;
  onClickSave?: Types.Devlink.RuntimeProps;
  onClickCancel?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
