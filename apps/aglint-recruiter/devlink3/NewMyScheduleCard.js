"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SlotComp } from "./SlotComp";
import * as _utils from "./utils";
import _styles from "./NewMyScheduleCard.module.css";

export function NewMyScheduleCard({
  as: _Component = _Builtin.Block,
  slotMyScheduleSubCard,
  textMonth = "February",
  textDate = "27",
  textDay = "FRI",
  isNotScheduledIconVisible = false,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "newinterviewplancard", "my-schedule")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "div-block-1394",
          "gap-20",
          "all-schedule"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1427")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1399")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "div-block-1393",
                "radius-10",
                "height-100"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1395")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "month-text")}
                  tag="div"
                >
                  {textMonth}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-40")}
                  tag="div"
                >
                  {textDate}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-blue-500",
                    "text-capital"
                  )}
                  tag="div"
                >
                  {textDay}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            {isNotScheduledIconVisible ? (
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "div-block-1393",
                  "empty-schedule-date",
                  "radius-10"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-1395")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons")}
                    value="%3Csvg%20width%3D%2236%22%20height%3D%2236%22%20viewbox%3D%220%200%2036%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.5%206.75V9H19.5V6.75C19.5312%206.28125%2019.7812%206.03125%2020.25%206C20.7188%206.03125%2020.9688%206.28125%2021%206.75V9H22.5C23.3438%209.03125%2024.0469%209.32812%2024.6094%209.89062C25.1719%2010.4531%2025.4688%2011.1562%2025.5%2012V13.5V15H24.75H24H21H6V27C6%2027.4375%206.14062%2027.7969%206.42188%2028.0781C6.70312%2028.3594%207.0625%2028.5%207.5%2028.5H18.375C18.8438%2029.0625%2019.3906%2029.5625%2020.0156%2030H7.5C6.65625%2029.9688%205.95312%2029.6719%205.39062%2029.1094C4.82812%2028.5469%204.53125%2027.8438%204.5%2027V15V13.5V12C4.53125%2011.1562%204.82812%2010.4531%205.39062%209.89062C5.95312%209.32812%206.65625%209.03125%207.5%209H9V6.75C9.03125%206.28125%209.28125%206.03125%209.75%206C10.2188%206.03125%2010.4688%206.28125%2010.5%206.75ZM7.5%2010.5C7.0625%2010.5%206.70312%2010.6406%206.42188%2010.9219C6.14062%2011.2031%206%2011.5625%206%2012V13.5H24V12C24%2011.5625%2023.8594%2011.2031%2023.5781%2010.9219C23.2969%2010.6406%2022.9375%2010.5%2022.5%2010.5H7.5ZM19.5%2023.25C19.5%2024.1875%2019.7344%2025.0625%2020.2031%2025.875C20.6719%2026.6875%2021.3125%2027.3281%2022.125%2027.7969C22.9375%2028.2656%2023.8125%2028.5%2024.75%2028.5C25.6875%2028.5%2026.5625%2028.2656%2027.375%2027.7969C28.1875%2027.3281%2028.8281%2026.6875%2029.2969%2025.875C29.7656%2025.0625%2030%2024.1875%2030%2023.25C30%2022.3125%2029.7656%2021.4375%2029.2969%2020.625C28.8281%2019.8125%2028.1875%2019.1719%2027.375%2018.7031C26.5625%2018.2344%2025.6875%2018%2024.75%2018C23.8125%2018%2022.9375%2018.2344%2022.125%2018.7031C21.3125%2019.1719%2020.6719%2019.8125%2020.2031%2020.625C19.7344%2021.4375%2019.5%2022.3125%2019.5%2023.25ZM31.5%2023.25C31.5%2024.4688%2031.2031%2025.5938%2030.6094%2026.625C30.0156%2027.6562%2029.1875%2028.4844%2028.125%2029.1094C27.0625%2029.7031%2025.9375%2030%2024.75%2030C23.5625%2030%2022.4375%2029.7031%2021.375%2029.1094C20.3125%2028.4844%2019.4844%2027.6562%2018.8906%2026.625C18.2969%2025.5938%2018%2024.4688%2018%2023.25C18%2022.0312%2018.2969%2020.9062%2018.8906%2019.875C19.4844%2018.8438%2020.3125%2018.0156%2021.375%2017.3906C22.4375%2016.7969%2023.5625%2016.5%2024.75%2016.5C25.9375%2016.5%2027.0625%2016.7969%2028.125%2017.3906C29.1875%2018.0156%2030.0156%2018.8438%2030.6094%2019.875C31.2031%2020.9062%2031.5%2022.0312%2031.5%2023.25ZM25.5%2020.25V22.5H27.75C28.2188%2022.5312%2028.4688%2022.7812%2028.5%2023.25C28.4688%2023.7188%2028.2188%2023.9688%2027.75%2024H25.5V26.25C25.4688%2026.7188%2025.2188%2026.9688%2024.75%2027C24.2812%2026.9688%2024.0312%2026.7188%2024%2026.25V24H21.75C21.2812%2023.9688%2021.0312%2023.7188%2021%2023.25C21.0312%2022.7812%2021.2812%2022.5312%2021.75%2022.5H24V20.25C24.0312%2019.7812%2024.2812%2019.5312%2024.75%2019.5C25.2188%2019.5312%2025.4688%2019.7812%2025.5%2020.25Z%22%20fill%3D%22%23C2C8CC%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1405", "no-border")}
          tag="div"
        >
          {slotMyScheduleSubCard ?? (
            <SlotComp componentNeme="My Schedule Sub Card" />
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
