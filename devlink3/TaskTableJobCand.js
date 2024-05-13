"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TaskTableJobCard } from "./TaskTableJobCard";
import * as _utils from "./utils";
import _styles from "./TaskTableJobCand.module.css";

export function TaskTableJobCand({
  as: _Component = _Builtin.Block,
  slotFilter,
  slotTaskJobCard,
  slotCheckbox,
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1433")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1436")}
        tag="div"
      >
        {slotFilter}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1439")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "div-block-1434",
            "height-40",
            "job-cand"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1537")}
            id={_utils.cx(
              _styles,
              "w-node-_4236db5e-3938-26b8-a04e-ed6679bd2c95-79bd2c91"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "checkbox-wrap-task")}
              id={_utils.cx(
                _styles,
                "w-node-_7aa6a833-923f-9190-7ab6-0d3438ac9b89-79bd2c91"
              )}
              tag="div"
            >
              {slotCheckbox}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1435")}
            id={_utils.cx(
              _styles,
              "w-node-_4236db5e-3938-26b8-a04e-ed6679bd2c99-79bd2c91"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-500")}
              tag="div"
            >
              {"Task"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1435")}
            id={_utils.cx(
              _styles,
              "w-node-_4236db5e-3938-26b8-a04e-ed6679bd2c96-79bd2c91"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-500")}
              tag="div"
            >
              {"Status"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1435")}
            id={_utils.cx(
              _styles,
              "w-node-_99d975b3-40a3-c9c4-b0fc-07003f0a3884-79bd2c91"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-500")}
              tag="div"
            >
              {"Priority"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1435")}
            id={_utils.cx(
              _styles,
              "w-node-_4236db5e-3938-26b8-a04e-ed6679bd2c9c-79bd2c91"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-500")}
              tag="div"
            >
              {"Assignee"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1452")}
          tag="div"
        >
          {slotTaskJobCard ?? (
            <>
              <TaskTableJobCard />
              <TaskTableJobCard />
            </>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
