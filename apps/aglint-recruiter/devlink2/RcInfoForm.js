"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import { SlotComp } from "./SlotComp";
import * as _utils from "./utils";
import _styles from "./RcInfoForm.module.css";

export function RcInfoForm({
  as: _Component = _Builtin.Block,
  slotLogo,
  onclickChange = {},
  slotForm,
  slotChangeLogoBtn,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sl-company-details-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "sl-company-details-block",
          "sl-company-padding"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sl-company-logo-wrapper")}
          tag="div"
        >
          <Text
            size="2"
            weight="bold"
            color=""
            content="Company Logo"
            align=""
            highContrast=""
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "sl-company-title-block")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sl-company-image-block")}
              tag="div"
            >
              {slotLogo ?? <SlotComp componentName="slot for Logo" />}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sl-com-title-info-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-411")}
                tag="div"
              >
                {slotChangeLogoBtn ?? (
                  <SlotComp componentName="slot for Button" />
                )}
              </_Builtin.Block>
              <Text
                size="2"
                weight=""
                color=""
                content="Upload a square company logo (PNG or JPEG). Maximum size: 2 MB."
                align=""
                highContrast=""
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          {slotForm ?? <SlotComp componentName="slot for Form" />}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
