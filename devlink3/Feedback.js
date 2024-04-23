import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Feedback.module.css";

export function Feedback({
  as: _Component = _Builtin.Block,
  textRecommendLevel = "Strongly recommended (9/10)",
  textFeedback = "During the interview, the candidate showcased a strong understanding of both front-end and back-end development concepts. They effectively demonstrated their proficiency in various programming languages and frameworks. Their problem-solving skills and ability to communicate technical ideas were impressive. Overall, the candidate appears to be a promising fit for the full stack developer role.",
  onClickEditFeedback = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1290")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1291")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"Recommendation level"}
        </_Builtin.Block>
        <_Builtin.Block tag="div">{textRecommendLevel}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1291")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"Feedback"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey-600")}
          tag="div"
        >
          {textFeedback}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-blue-500",
            "text-underline",
            "cursor-pointer"
          )}
          tag="div"
          {...onClickEditFeedback}
        >
          {"Edit Feedback"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
