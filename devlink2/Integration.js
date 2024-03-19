import React from "react";
import * as _Builtin from "./_Builtin";
import { IntegrationCard } from "./IntegrationCard";
import * as _utils from "./utils";
import _styles from "./Integration.module.css";

export function Integration({
  as: _Component = _Builtin.Block,
  slotHrTools,
  slotScheduling,
}) {
  return (
    <_Component className={_utils.cx(_styles, "integration-wrapp")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1240")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"HR tools"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1241")}
          tag="div"
        >
          {slotHrTools ?? <IntegrationCard />}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1240", "border-none")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"Scheduling"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1241")}
          tag="div"
        >
          {slotScheduling}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
