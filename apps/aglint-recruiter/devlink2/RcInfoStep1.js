"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SlotComp } from "./SlotComp";
import * as _utils from "./utils";
import _styles from "./RcInfoStep1.module.css";

export function RcInfoStep1({
  as: _Component = _Builtin.Block,
  slotInput,
  slotDetails,
  textheader = "Let's create your company profile.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sl-company-details-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "sl-company-details-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sl-login-header-block", "gap-12")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg", "fw-semibold")}
            tag="div"
          >
            {textheader}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-gray-600")}
            tag="div"
          >
            {
              "Enter your company website URL, and our system will automatically fetch the necessary details to set up your company profile. Let's dive in!"
            }
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "sl-company-input-wrapper",
            "sl-company-padding"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Company Website"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-386")}
            tag="div"
          >
            {slotInput ?? <SlotComp componentName="slot for MUI Form" />}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
