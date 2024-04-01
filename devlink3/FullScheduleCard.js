import React from "react";
import * as _Builtin from "./_Builtin";
import { GeneralScheduleCard } from "./GeneralScheduleCard";
import * as _utils from "./utils";
import _styles from "./FullScheduleCard.module.css";

export function FullScheduleCard({
  as: _Component = _Builtin.Block,
  slotCheckbox,
  textMonth = "February",
  textDate = "27",
  textDay = "FRIDAY",
  slotGeneralScheduleCard,
  isNotScheduledActive = false,
  isCardSelected = false,
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1316")} tag="div">
      <_Builtin.Block tag="div">
        <_Builtin.Block tag="div">{slotCheckbox}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1318")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1320")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1321")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "schedule_dateblcok",
                "height-90",
                "center",
                "width-85"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "data_wrap")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "schedule_month")}
                  tag="div"
                >
                  {textMonth}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "scheduledate")}
                  tag="div"
                >
                  {textDate}
                </_Builtin.Block>
                <_Builtin.Block className={_utils.cx(_styles, "day")} tag="div">
                  {textDay}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            {isCardSelected ? (
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "schedule_dateblcok",
                  "height-90",
                  "center",
                  "width-85",
                  "active"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "data_wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "schedule_month")}
                    tag="div"
                  >
                    {textMonth}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "scheduledate")}
                    tag="div"
                  >
                    {textDate}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "day")}
                    tag="div"
                  >
                    {textDay}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          {isNotScheduledActive ? (
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "schedule_dateblcok",
                "height-90",
                "center",
                "width-85",
                "not-schedule"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "data_wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2237%22%20height%3D%2237%22%20viewBox%3D%220%200%2037%2037%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.39062%2017.375C6.89062%2017.3125%206.64062%2017.0312%206.64062%2016.5312C6.98438%2014.6562%207.6875%2012.9844%208.75%2011.5156C9.09375%2011.1406%209.45312%2011.1094%209.82812%2011.4219C10.1094%2011.7344%2010.1406%2012.0781%209.92188%2012.4531C9.01562%2013.7031%208.42188%2015.125%208.14062%2016.7188C8.04688%2017.125%207.79688%2017.3438%207.39062%2017.375ZM12.4531%209.92188C12.0781%2010.1406%2011.7344%2010.1094%2011.4219%209.82812C11.1094%209.45312%2011.1406%209.09375%2011.5156%208.75C12.9844%207.6875%2014.6719%206.98437%2016.5781%206.64062C17.0469%206.64062%2017.3125%206.89062%2017.375%207.39062C17.3438%207.79688%2017.125%208.04688%2016.7188%208.14062C15.125%208.42188%2013.7031%209.01562%2012.4531%209.92188ZM19.625%2029.6094C19.6562%2029.2031%2019.875%2028.9531%2020.2812%2028.8594C21.875%2028.5781%2023.2969%2027.9844%2024.5469%2027.0781C24.8906%2026.8594%2025.2344%2026.8906%2025.5781%2027.1719C25.8906%2027.5469%2025.8594%2027.9062%2025.4844%2028.25C24.0156%2029.3125%2022.3438%2030.0156%2020.4688%2030.3594C19.9688%2030.3594%2019.6875%2030.1094%2019.625%2029.6094ZM27.0781%2024.5469C27.9844%2023.2969%2028.5781%2021.875%2028.8594%2020.2812C28.9531%2019.875%2029.2031%2019.6562%2029.6094%2019.625C30.1094%2019.6875%2030.3594%2019.9688%2030.3594%2020.4688C30.0156%2022.3438%2029.3125%2024.0156%2028.25%2025.4844C27.9062%2025.8594%2027.5469%2025.8906%2027.1719%2025.5781C26.8906%2025.2656%2026.8594%2024.9219%2027.0781%2024.5469ZM11.4219%2027.1719C11.7344%2026.8906%2012.0781%2026.8594%2012.4531%2027.0781C13.7031%2027.9844%2015.125%2028.5781%2016.7188%2028.8594C17.125%2028.9531%2017.3438%2029.2031%2017.375%2029.6094C17.3125%2030.1094%2017.0312%2030.3594%2016.5312%2030.3594C14.6562%2030.0156%2012.9844%2029.3125%2011.5156%2028.25C11.1406%2027.9062%2011.1094%2027.5469%2011.4219%2027.1719ZM8.75%2025.4844C7.6875%2024.0156%206.98438%2022.3438%206.64062%2020.4688C6.64062%2019.9688%206.89062%2019.6875%207.39062%2019.625C7.79688%2019.6562%208.04688%2019.875%208.14062%2020.2812C8.42188%2021.875%209.01562%2023.2969%209.92188%2024.5469C10.1406%2024.9219%2010.1094%2025.2656%209.82812%2025.5781C9.45312%2025.8906%209.09375%2025.8594%208.75%2025.4844ZM25.5781%209.82812C25.2656%2010.1094%2024.9219%2010.1406%2024.5469%209.92188C23.2969%209.01562%2021.875%208.42188%2020.2812%208.14062C19.875%208.04688%2019.6562%207.79688%2019.625%207.39062C19.6875%206.89062%2019.9688%206.64062%2020.4688%206.64062C22.3438%206.98437%2024.0156%207.6875%2025.4844%208.75C25.8594%209.09375%2025.8906%209.45312%2025.5781%209.82812ZM27.0781%2012.4531C26.8594%2012.0781%2026.8906%2011.7344%2027.1719%2011.4219C27.5469%2011.1094%2027.9062%2011.1406%2028.25%2011.5156C29.3125%2012.9844%2030.0156%2014.6562%2030.3594%2016.5312C30.3594%2017.0312%2030.1094%2017.3125%2029.6094%2017.375C29.2031%2017.3438%2028.9531%2017.125%2028.8594%2016.7188C28.5781%2015.125%2027.9844%2013.7031%2027.0781%2012.4531Z%22%20fill%3D%22%23C2C8CC%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-xsm", "text-grey_400")}
                  tag="div"
                >
                  {"Not scheduled"}
                  <br />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1317")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1319")}
        tag="div"
      >
        {slotGeneralScheduleCard ?? <GeneralScheduleCard />}
      </_Builtin.Block>
    </_Component>
  );
}
