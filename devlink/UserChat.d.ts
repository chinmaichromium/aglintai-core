import * as React from "react";
import * as Types from "./types";

declare function UserChat(props: {
  as?: React.ElementType;
  textMessage?: React.ReactNode;
  textPdfName?: React.ReactNode;
  isUserMessageVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
