import * as React from "react";
import * as Types from "./types";

declare function TicketSideDrawer(props: {
  as?: React.ElementType;
  textIssuesTitle?: React.ReactNode;
  slotChatBox?: Types.Devlink.Slot;
  slotTypeMessage?: Types.Devlink.Slot;
  slotMessageSuggestion?: Types.Devlink.Slot;
  textTicketId?: React.ReactNode;
  textCreatedDate?: React.ReactNode;
  slotCandidateImage?: Types.Devlink.Slot;
  textCandidateName?: React.ReactNode;
  textCandidateMail?: React.ReactNode;
  textCandiatePhone?: React.ReactNode;
  textCandidateSite?: React.ReactNode;
  onClickClose?: Types.Devlink.RuntimeProps;
  textAppliedJobRole?: React.ReactNode;
  textAppliedJobCompany?: React.ReactNode;
  textAppliedJobPostedDate?: React.ReactNode;
  onClickAppliedViewJob?: Types.Devlink.RuntimeProps;
  textCandidateStatus?: React.ReactNode;
  colorPropsCandidateStatus?: Types.Devlink.RuntimeProps;
  onClickInterviewLink?: Types.Devlink.RuntimeProps;
  slotStatus?: Types.Devlink.Slot;
  slotAssignee?: Types.Devlink.Slot;
  slotPriority?: Types.Devlink.Slot;
  onClickPrev?: Types.Devlink.RuntimeProps;
  onClickNext?: Types.Devlink.RuntimeProps;
  slotStatusHeading?: Types.Devlink.Slot;
}): React.JSX.Element;
