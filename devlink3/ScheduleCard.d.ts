import * as React from "react";
import * as Types from "./types";

declare function ScheduleCard(props: {
  as?: React.ElementType;
  textTitle?: React.ReactNode;
  textDuration?: React.ReactNode;
  textPlatformName?: React.ReactNode;
  slotPlatformIcon?: Types.Devlink.Slot;
  textMonth?: React.ReactNode;
  textDate?: React.ReactNode;
  textDay?: React.ReactNode;
  textStatus?: React.ReactNode;
  colorPropsText?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
