import * as React from "react";
import * as Types from "./types";

declare function ProfileShare(props: {
  as?: React.ElementType;
  onClickCopyProfile?: Types.Devlink.RuntimeProps;
  slotProfileImage?: Types.Devlink.Slot;
  textName?: React.ReactNode;
  textMail?: React.ReactNode;
  textPhone?: React.ReactNode;
  slotResumeScore?: Types.Devlink.Slot;
  textInterviewScore?: React.ReactNode;
  propsTextColor?: Types.Devlink.RuntimeProps;
  textOverview?: React.ReactNode;
  slotInterview?: Types.Devlink.Slot;
  slotResume?: Types.Devlink.Slot;
  isEducationVisible?: Types.Visibility.VisibilityConditions;
  isResumeVisible?: Types.Visibility.VisibilityConditions;
  isInterviewVisible?: Types.Visibility.VisibilityConditions;
  slotInterviewTranscript?: Types.Devlink.Slot;
  slotCandidateEducationCard?: Types.Devlink.Slot;
  isExperienceVisible?: Types.Visibility.VisibilityConditions;
  slotCandidateExperienceCard?: Types.Devlink.Slot;
  isSkillVisible?: Types.Visibility.VisibilityConditions;
  slotSkill?: Types.Devlink.Slot;
  isActivityVisible?: Types.Visibility.VisibilityConditions;
  slotActivity?: Types.Devlink.Slot;
  onClickInterviewScore?: Types.Devlink.RuntimeProps;
  onClickResumeScore?: Types.Devlink.RuntimeProps;
  onClickEducation?: Types.Devlink.RuntimeProps;
  onClickExperience?: Types.Devlink.RuntimeProps;
  onClickSkills?: Types.Devlink.RuntimeProps;
  onClickActivity?: Types.Devlink.RuntimeProps;
  slotCompanyLogo?: Types.Devlink.Slot;
  isInterviewActive?: Types.Visibility.VisibilityConditions;
  isResumeActive?: Types.Visibility.VisibilityConditions;
  isEducationActive?: Types.Visibility.VisibilityConditions;
  isExperienceActive?: Types.Visibility.VisibilityConditions;
  isSkillActive?: Types.Visibility.VisibilityConditions;
  isOverviewVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
