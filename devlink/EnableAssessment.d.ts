import * as React from "react";
import * as Types from "./types";

declare function EnableAssessment(props: {
  as?: React.ElementType;
  onClickEnableAssessment?: Types.Devlink.RuntimeProps;
  isAddJob?: Types.Visibility.VisibilityConditions;
  onClickProceed?: Types.Devlink.RuntimeProps;
  isProceedDisable?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
