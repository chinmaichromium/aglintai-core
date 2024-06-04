"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import { ButtonSoft } from "./ButtonSoft";
import * as _utils from "./utils";
import _styles from "./FeedbackEmpty.module.css";

export function FeedbackEmpty({
  as: _Component = _Builtin.Block,
  onClickSubmit = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1292")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1293")}
        tag="div"
      >
        <Text content="" weight="" color="neutral" />
        <_Builtin.Block tag="div">
          <ButtonSoft
            onClickButton={onClickSubmit}
            size="2"
            textButton="Submit Feedback"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
