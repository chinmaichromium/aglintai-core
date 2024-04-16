"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { LeaderBoardCard } from "./LeaderBoardCard";
import * as _utils from "./utils";
import _styles from "./LeaderBoard.module.css";

export function LeaderBoard({
  as: _Component = _Builtin.Block,
  onClickThisWeek = {},
  isWeekActive = true,
  onClickThisMonth = {},
  isMonthActive = true,
  onClickThisYear = {},
  isYearActive = true,
  slotLeaderboardCard,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "div-block-1470")}
      id={_utils.cx(
        _styles,
        "w-node-_618668d0-cfa3-fa00-f68c-034c63a8d0ae-63a8d0ae"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1471")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1472")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2214%22%20height%3D%2212%22%20viewBox%3D%220%200%2014%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.125%200.75C3.90625%200.78125%203.78906%200.898437%203.77344%201.10156C3.86719%202.99219%204.09375%204.4375%204.45312%205.4375C4.79688%206.4375%205.16406%207.13281%205.55469%207.52344C5.92969%207.89844%206.23438%208.11719%206.46875%208.17969C6.57812%208.22656%206.66406%208.25%206.72656%208.25C6.74219%208.25%206.75%208.25%206.75%208.25C6.76562%208.25%206.77344%208.25%206.77344%208.25C6.82031%208.23438%206.90625%208.21094%207.03125%208.17969C7.26562%208.11719%207.57031%207.89844%207.94531%207.52344C8.33594%207.13281%208.70312%206.4375%209.04688%205.4375C9.40625%204.4375%209.63281%202.99219%209.72656%201.10156C9.72656%200.898437%209.60938%200.78125%209.375%200.75H4.125ZM9.375%200C9.6875%200.015625%209.95312%200.125%2010.1719%200.328125C10.375%200.546875%2010.4766%200.8125%2010.4766%201.125C10.4766%201.25%2010.4688%201.375%2010.4531%201.5H12.375C12.6875%201.5%2012.9531%201.60938%2013.1719%201.82812C13.3906%202.04687%2013.4844%202.32812%2013.4531%202.67188C13.3125%203.76563%2012.9844%204.69531%2012.4688%205.46094C11.9531%206.24219%2011.3594%206.875%2010.6875%207.35938C10.0156%207.84375%209.36719%208.21094%208.74219%208.46094C8.10156%208.71094%207.58594%208.86719%207.19531%208.92969V8.90625C7.17969%208.92188%207.16406%208.92969%207.14844%208.92969C7.14844%208.92969%207.14062%208.92969%207.125%208.92969V11.25H9.375C9.60938%2011.2656%209.73438%2011.3906%209.75%2011.625C9.73438%2011.8594%209.60938%2011.9844%209.375%2012H6.75H4.125C3.89062%2011.9844%203.76562%2011.8594%203.75%2011.625C3.76562%2011.3906%203.89062%2011.2656%204.125%2011.25H6.375V8.92969C6.35938%208.92969%206.33594%208.92188%206.30469%208.90625C5.91406%208.85938%205.39844%208.70312%204.75781%208.4375C4.13281%208.1875%203.48438%207.82812%202.8125%207.35938C2.14062%206.875%201.54688%206.24219%201.03125%205.46094C0.515625%204.69531%200.1875%203.76563%200.046875%202.67188C0.015625%202.32812%200.109375%202.04687%200.328125%201.82812C0.546875%201.60938%200.8125%201.5%201.125%201.5H3.04688C3.03125%201.375%203.02344%201.25%203.02344%201.125C3.02344%200.8125%203.125%200.546875%203.32812%200.328125C3.54688%200.125%203.8125%200.015625%204.125%200H9.375ZM10.4062%202.25C10.2812%203.60938%2010.0781%204.71875%209.79688%205.57812C9.51562%206.4375%209.20312%207.10156%208.85938%207.57031C9.3125%207.36719%209.77344%207.09375%2010.2422%206.75C10.8516%206.3125%2011.3906%205.75%2011.8594%205.0625C12.3125%204.375%2012.5938%203.54687%2012.7031%202.57812C12.7188%202.39062%2012.6094%202.28125%2012.375%202.25H10.4062ZM4.64062%207.57031C4.29688%207.10156%203.98438%206.4375%203.70312%205.57812C3.42188%204.71875%203.21875%203.60938%203.09375%202.25H1.125C0.890625%202.28125%200.78125%202.39062%200.796875%202.57812C0.90625%203.54687%201.1875%204.375%201.64062%205.0625C2.10938%205.75%202.64844%206.3125%203.25781%206.75C3.72656%207.09375%204.1875%207.36719%204.64062%207.57031Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Interviewer Leaderboard"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1473")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1504")}
            tag="div"
            {...onClickThisWeek}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1474")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"This week"}</_Builtin.Block>
            </_Builtin.Block>
            {isWeekActive ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1474", "active")}
                tag="div"
              >
                <_Builtin.Block tag="div">{"This week"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1504")}
            tag="div"
            {...onClickThisMonth}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1474")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"This month"}</_Builtin.Block>
            </_Builtin.Block>
            {isMonthActive ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1474", "active")}
                tag="div"
              >
                <_Builtin.Block tag="div">{"This month"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1504")}
            tag="div"
            {...onClickThisYear}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1474")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"This year"}</_Builtin.Block>
            </_Builtin.Block>
            {isYearActive ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1474", "active")}
                tag="div"
              >
                <_Builtin.Block tag="div">{"This year"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1475")}
        tag="div"
      >
        {slotLeaderboardCard ?? <LeaderBoardCard />}
      </_Builtin.Block>
    </_Component>
  );
}
