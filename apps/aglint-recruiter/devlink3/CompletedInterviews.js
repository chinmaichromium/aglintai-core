"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CompletedInterviews.module.css";

export function CompletedInterviews({
  as: _Component = _Builtin.Block,
  slotGraph,
  textMonth = "Last 8 months",
  textLastDays = "Last 30 days",
  onClickLastMonth = {},
  onClickLastDays = {},
  isLastMonthsActive = false,
  isLastDaysActive = false,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "completed-interview-wrap")}
      id={_utils.cx(
        _styles,
        "w-node-_34ab1cb7-7f26-aa79-3f1b-e5788ae166be-8ae166be"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1784")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"Completed Interviews"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1783")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1788")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-hover-link")}
              tag="div"
              {...onClickLastMonth}
            >
              {textMonth}
            </_Builtin.Block>
            {isLastMonthsActive ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1789")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-active-link")}
                  tag="div"
                  {...onClickLastMonth}
                >
                  {textMonth}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1788")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-hover-link")}
              tag="div"
              {...onClickLastDays}
            >
              {textLastDays}
            </_Builtin.Block>
            {isLastDaysActive ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1789")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-active-link")}
                  tag="div"
                  {...onClickLastDays}
                >
                  {textLastDays}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">{slotGraph}</_Builtin.Block>
    </_Component>
  );
}
