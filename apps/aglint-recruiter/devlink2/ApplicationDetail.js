"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ApplicantInfoBox } from "./ApplicantInfoBox";
import { Text } from "./Text";
import { ApplicantDetailStage } from "./ApplicantDetailStage";
import * as _utils from "./utils";
import _styles from "./ApplicationDetail.module.css";

export function ApplicationDetail({
  as: _Component = _Builtin.Block,
  slotApplicantInfoBox,
  slotTab,
  slotCandidateInterviewProgress,
  slotApplicantDetailStage,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "app-detail-comp-wrap")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "app-detail-header-wrap")}
        tag="div"
      >
        {slotApplicantInfoBox ?? <ApplicantInfoBox />}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "ta-aap-detail-wrap")}
        tag="div"
      >
        {slotTab}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "applcant-detail-body-scroll")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "body-content-aap-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "bodyd-content-nav-wrap")}
            tag="div"
          >
            <Text content="Candidate’s Interview progress" color="neutral" />
            <_Builtin.Block tag="div">
              {slotCandidateInterviewProgress}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "bodyd-content-nav-wrap")}
            tag="div"
          >
            <Text content="Interview Stages" color="neutral" />
            <_Builtin.Block
              className={_utils.cx(_styles, "slot-applicant-detail")}
              tag="div"
            >
              {slotApplicantDetailStage ?? <ApplicantDetailStage />}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
