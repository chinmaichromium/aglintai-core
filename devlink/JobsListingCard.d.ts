import * as React from "react";
import * as Types from "./types";

declare function JobsListingCard(props: {
  as?: React.ElementType;
  textJobRole?: React.ReactNode;
  textCompanyLocation?: React.ReactNode;
  textPostedDate?: React.ReactNode;
  rejectedCount?: React.ReactNode;
  interviewingCount?: React.ReactNode;
  selectedCount?: React.ReactNode;
  bgColorProps?: Types.Devlink.RuntimeProps;
  textJobsStatus?: React.ReactNode;
  onClickCard?: Types.Devlink.RuntimeProps;
  textColorActivePropsSourcing?: Types.Devlink.RuntimeProps;
  textColorActiveInterviewingProps?: Types.Devlink.RuntimeProps;
  slotStatusIcon?: Types.Devlink.Slot;
  candidateCount?: React.ReactNode;
  textSourcing?: React.ReactNode;
  slotSourcingIcon?: Types.Devlink.Slot;
  textInterview?: React.ReactNode;
  slotInterviewIcon?: Types.Devlink.Slot;
  isSourcingInterviewVisible?: Types.Visibility.VisibilityConditions;
  slotAtsBadge?: Types.Devlink.Slot;
}): React.JSX.Element;
