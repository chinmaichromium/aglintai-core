import * as React from "react";
import * as Types from "./types";

declare function JobDashboard(props: {
  as?: React.ElementType;
  textTopMatchPercentage?: React.ReactNode;
  textGoodMatchPercentage?: React.ReactNode;
  textAverageMatchPercentage?: React.ReactNode;
  textBelowAveragePercentage?: React.ReactNode;
  textNotAMatchPercentage?: React.ReactNode;
  textTopMatchCount?: React.ReactNode;
  textGoodMatchCount?: React.ReactNode;
  textAveageMatchCount?: React.ReactNode;
  textBelowAverageCount?: React.ReactNode;
  textNotAMatchCount?: React.ReactNode;
  slotPipeline?: Types.Devlink.Slot;
  slotModuleCard?: Types.Devlink.Slot;
  onClickAssistant?: Types.Devlink.RuntimeProps;
  textCandidateCount?: React.ReactNode;
  slotScheduleCardSmall?: Types.Devlink.Slot;
  slotLocationGraphBlock?: Types.Devlink.Slot;
  slotSkillGraphBlock?: Types.Devlink.Slot;
}): React.JSX.Element;
