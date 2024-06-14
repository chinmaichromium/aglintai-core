"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import { SlotComp } from "./SlotComp";
import * as _utils from "./utils";
import _styles from "./ScoreSetting.module.css";

export function ScoreSetting({
  as: _Component = _Builtin.Block,
  slotScoreCardDetails,
  slotBanner,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "score-setting-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "score-setting-header")}
        tag="div"
      >
        <Text content="Profile Score" weight="medium" />
        <Text
          content="Setup scoring criteria encompassing experience, skills, and education. Specify necessary criteria in each section, and our system will generate a candidate score by comparing it with the details provided in their resume."
          weight=""
          color="neutral"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "score-setting-banner")}
        tag="div"
      >
        {slotBanner}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "score-setting-indicator")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "indicate-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "indicator-box", "must-have")}
            tag="div"
          />
          <Text content="Must have" />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "indicate-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "indicator-box")}
            tag="div"
          />
          <Text content="Nice to have" />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "score-outer-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "left-score-wrap")}
          tag="div"
        >
          {slotScoreCardDetails ?? <SlotComp componentName="ScoreCard" />}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
