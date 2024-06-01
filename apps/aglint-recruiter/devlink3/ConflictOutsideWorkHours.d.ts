import * as React from "react";
import * as Types from "./types";

declare function ConflictOutsideWorkHours(props: {
  as?: React.ElementType;
  textConflict?: React.ReactNode;
  slotConflictReasons?: Types.Devlink.Slot;
  isHover?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
