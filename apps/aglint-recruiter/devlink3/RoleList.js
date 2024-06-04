"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import * as _utils from "./utils";
import _styles from "./RoleList.module.css";

export function RoleList({
  as: _Component = _Builtin.Block,
  slotImage,
  textRoleHeader = "Hiring Manager",
  textName = "Devon Lane",
  textDesignation = "HR Manager",
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1716")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "fw-semibold", "hide")}
        tag="div"
      >
        {textDesignation}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1714")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1713")}
          tag="div"
        >
          {slotImage}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1715")}
          tag="div"
        >
          <_Builtin.Block tag="div">{textName}</_Builtin.Block>
          <Text content={textRoleHeader} size="1" color="neutral" weight="" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
