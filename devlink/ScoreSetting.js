import React from "react";
import * as _Builtin from "./_Builtin";
import { ScoreCard } from "./ScoreCard";
import * as _utils from "./utils";
import _styles from "./ScoreSetting.module.css";

export function ScoreSetting({
  as: _Component = _Builtin.Block,
  slotScoreCardDetails,
}) {
  return (
    <_Component className={_utils.cx(_styles, "score-setting-wrap")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-661")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "indicate-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "indicator-box", "blue-200")}
            tag="div"
          />
          <_Builtin.Block tag="div">{"Must have"}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "indicate-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "indicator-box", "grey-200")}
            tag="div"
          />
          <_Builtin.Block tag="div">{"Nice to have"}</_Builtin.Block>
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
          {slotScoreCardDetails ?? <ScoreCard />}
        </_Builtin.Block>
        <_Builtin.Block tag="div" />
      </_Builtin.Block>
    </_Component>
  );
}
