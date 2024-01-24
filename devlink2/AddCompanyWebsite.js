import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AddCompanyWebsite.module.css";

export function AddCompanyWebsite({
  as: _Component = _Builtin.Block,
  slotWebsiteInput,
  slotButtons,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "cs-sidebar-website-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "cs-sidebar-website-info")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg", "fw-semibold")}
          tag="div"
        >
          {"Enter company website"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-gray-600")}
          tag="div"
        >
          {
            "Enter your company website URL, and our system will automatically fetch the necessary details to set up your company profile."
          }
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "cs-sidebar-website-input")}
        tag="div"
      >
        {slotWebsiteInput}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "cs-buttons-wrapper")}
        tag="div"
      >
        {slotButtons}
      </_Builtin.Block>
    </_Component>
  );
}
