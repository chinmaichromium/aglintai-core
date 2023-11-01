import * as React from "react";
import * as Types from "./types";

declare function SortArrows(props: {
  as?: React.ElementType;
  upArrow?: Types.Visibility.VisibilityConditions;
  downArrow?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
