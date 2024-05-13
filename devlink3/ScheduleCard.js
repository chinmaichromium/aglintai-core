"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ScheduleCard.module.css";

export function ScheduleCard({
  as: _Component = _Builtin.Block,
  textTitle = "Personality and culture",
  textDuration = "09:00 AM to 11:30 AM",
  textPlatformName = "Google Meet",
  slotPlatformIcon,
  textMonth = "February",
  textDate = "27",
  textDay = "FRIDAY",
  textStatus = "Upcoming",
  colorPropsText = {},
  isPanelIconVisible = false,
  isOneToOneIconVisible = true,
  isDebriefIconVisible = false,
  textTimeDuration = "45 Minutes",
  bgColorProps = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "schedule_card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1644")}
        tag="div"
        {...bgColorProps}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "schedule_details")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1645")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {textDate}
          </_Builtin.Block>
          <_Builtin.Block tag="div">{textDuration}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1415")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            {isOneToOneIconVisible ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5%204H19.5C20.2083%204.02083%2020.8021%204.26042%2021.2812%204.71875C21.7396%205.19792%2021.9792%205.79167%2022%206.5V17.5C21.9792%2018.2083%2021.7396%2018.8021%2021.2812%2019.2812C20.8021%2019.7396%2020.2083%2019.9792%2019.5%2020H4.5C3.79167%2019.9792%203.19792%2019.7396%202.71875%2019.2812C2.26042%2018.8021%202.02083%2018.2083%202%2017.5V6.5C2.02083%205.79167%202.26042%205.19792%202.71875%204.71875C3.19792%204.26042%203.79167%204.02083%204.5%204ZM3%206.5V17.5C3.02083%2017.9167%203.16667%2018.2708%203.4375%2018.5625C3.72917%2018.8333%204.08333%2018.9792%204.5%2019H19.5C19.9167%2018.9792%2020.2708%2018.8333%2020.5625%2018.5625C20.8333%2018.2708%2020.9792%2017.9167%2021%2017.5V6.5C20.9792%206.08333%2020.8333%205.72917%2020.5625%205.4375C20.2708%205.16667%2019.9167%205.02083%2019.5%205H4.5C4.08333%205.02083%203.72917%205.16667%203.4375%205.4375C3.16667%205.72917%203.02083%206.08333%203%206.5ZM11%2010C11%2010.2917%2011.0938%2010.5312%2011.2812%2010.7188C11.4688%2010.9062%2011.7083%2011%2012%2011C12.2917%2011%2012.5312%2010.9062%2012.7188%2010.7188C12.9062%2010.5312%2013%2010.2917%2013%2010C13%209.70833%2012.9062%209.46875%2012.7188%209.28125C12.5312%209.09375%2012.2917%209%2012%209C11.7083%209%2011.4688%209.09375%2011.2812%209.28125C11.0938%209.46875%2011%209.70833%2011%2010ZM14%2010C13.9792%2010.75%2013.6458%2011.3229%2013%2011.7188C12.3333%2012.0938%2011.6667%2012.0938%2011%2011.7188C10.3542%2011.3229%2010.0208%2010.75%2010%2010C10.0208%209.25%2010.3542%208.67708%2011%208.28125C11.6667%207.90625%2012.3333%207.90625%2013%208.28125C13.6458%208.67708%2013.9792%209.25%2014%2010ZM13.25%2014H10.75C10.1042%2014.0417%209.69792%2014.375%209.53125%2015H14.4688C14.3021%2014.375%2013.8958%2014.0417%2013.25%2014ZM10.75%2013H13.25C13.8958%2013.0208%2014.4271%2013.2396%2014.8438%2013.6562C15.2604%2014.0729%2015.4792%2014.6042%2015.5%2015.25C15.4583%2015.7083%2015.2083%2015.9583%2014.75%2016H9.25C8.79167%2015.9583%208.54167%2015.7083%208.5%2015.25C8.52083%2014.6042%208.73958%2014.0729%209.15625%2013.6562C9.57292%2013.2396%2010.1042%2013.0208%2010.75%2013Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
            {isPanelIconVisible ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2220%22%20height%3D%2216%22%20viewBox%3D%220%200%2020%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.5%200H17.5C18.2083%200.0208333%2018.8021%200.260417%2019.2812%200.71875C19.7396%201.19792%2019.9792%201.79167%2020%202.5V13.5C19.9792%2014.2083%2019.7396%2014.8021%2019.2812%2015.2812C18.8021%2015.7396%2018.2083%2015.9792%2017.5%2016H2.5C1.79167%2015.9792%201.19792%2015.7396%200.71875%2015.2812C0.260417%2014.8021%200.0208333%2014.2083%200%2013.5V2.5C0.0208333%201.79167%200.260417%201.19792%200.71875%200.71875C1.19792%200.260417%201.79167%200.0208333%202.5%200ZM1%202.5V13.5C1.02083%2013.9167%201.16667%2014.2708%201.4375%2014.5625C1.72917%2014.8333%202.08333%2014.9792%202.5%2015H17.5C17.9167%2014.9792%2018.2708%2014.8333%2018.5625%2014.5625C18.8333%2014.2708%2018.9792%2013.9167%2019%2013.5V2.5C18.9792%202.08333%2018.8333%201.72917%2018.5625%201.4375C18.2708%201.16667%2017.9167%201.02083%2017.5%201H2.5C2.08333%201.02083%201.72917%201.16667%201.4375%201.4375C1.16667%201.72917%201.02083%202.08333%201%202.5ZM9%206C9%206.29167%209.09375%206.53125%209.28125%206.71875C9.46875%206.90625%209.70833%207%2010%207C10.2917%207%2010.5312%206.90625%2010.7188%206.71875C10.9062%206.53125%2011%206.29167%2011%206C11%205.70833%2010.9062%205.46875%2010.7188%205.28125C10.5312%205.09375%2010.2917%205%2010%205C9.70833%205%209.46875%205.09375%209.28125%205.28125C9.09375%205.46875%209%205.70833%209%206ZM12%206C11.9792%206.75%2011.6458%207.32292%2011%207.71875C10.3333%208.09375%209.66667%208.09375%209%207.71875C8.35417%207.32292%208.02083%206.75%208%206C8.02083%205.25%208.35417%204.67708%209%204.28125C9.66667%203.90625%2010.3333%203.90625%2011%204.28125C11.6458%204.67708%2011.9792%205.25%2012%206ZM11.25%2010H8.75C8.10417%2010.0417%207.69792%2010.375%207.53125%2011H12.4688C12.3021%2010.375%2011.8958%2010.0417%2011.25%2010ZM8.75%209H10H11.25C11.8958%209.02083%2012.4271%209.23958%2012.8438%209.65625C13.2604%2010.0729%2013.4792%2010.6042%2013.5%2011.25C13.4583%2011.7083%2013.2083%2011.9583%2012.75%2012H7.25C6.79167%2011.9583%206.54167%2011.7083%206.5%2011.25C6.52083%2010.6042%206.73958%2010.0729%207.15625%209.65625C7.57292%209.23958%208.10417%209.02083%208.75%209ZM5%205.5C5.02083%205.8125%205.1875%205.97917%205.5%206C5.79167%205.97917%205.95833%205.8125%206%205.5C5.95833%205.1875%205.79167%205.02083%205.5%205C5.1875%205.02083%205.02083%205.1875%205%205.5ZM7%205.5C6.97917%206.0625%206.72917%206.5%206.25%206.8125C5.75%207.0625%205.25%207.0625%204.75%206.8125C4.27083%206.5%204.02083%206.0625%204%205.5C4.02083%204.9375%204.27083%204.5%204.75%204.1875C5.25%203.9375%205.75%203.9375%206.25%204.1875C6.72917%204.5%206.97917%204.9375%207%205.5ZM4%209.75V10C3.97917%2010.3125%203.8125%2010.4792%203.5%2010.5C3.1875%2010.4792%203.02083%2010.3125%203%2010V9.75C3.02083%209.25%203.1875%208.83333%203.5%208.5C3.83333%208.1875%204.25%208.02083%204.75%208H6.5C6.8125%208.02083%206.97917%208.1875%207%208.5C6.97917%208.8125%206.8125%208.97917%206.5%209H4.75C4.29167%209.04167%204.04167%209.29167%204%209.75ZM14.5%205C14.2083%205.02083%2014.0417%205.1875%2014%205.5C14.0417%205.8125%2014.2083%205.97917%2014.5%206C14.8125%205.97917%2014.9792%205.8125%2015%205.5C14.9792%205.1875%2014.8125%205.02083%2014.5%205ZM14.5%207C13.9375%206.97917%2013.5104%206.72917%2013.2188%206.25C12.9479%205.75%2012.9479%205.25%2013.2188%204.75C13.5104%204.27083%2013.9375%204.02083%2014.5%204C15.0625%204.02083%2015.5%204.27083%2015.8125%204.75C16.0833%205.25%2016.0833%205.75%2015.8125%206.25C15.5%206.72917%2015.0625%206.97917%2014.5%207ZM15.25%209H13.5C13.1875%208.97917%2013.0208%208.8125%2013%208.5C13.0208%208.1875%2013.1875%208.02083%2013.5%208H15.25C15.75%208.02083%2016.1667%208.1875%2016.5%208.5C16.8125%208.83333%2016.9792%209.25%2017%209.75V10C16.9792%2010.3125%2016.8125%2010.4792%2016.5%2010.5C16.1875%2010.4792%2016.0208%2010.3125%2016%2010V9.75C15.9583%209.29167%2015.7083%209.04167%2015.25%209Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
            {isDebriefIconVisible ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3%209.5C3.04167%2010.6458%203.51042%2011.6562%204.40625%2012.5312C4.55208%2012.6979%204.58333%2012.8854%204.5%2013.0938C4.16667%2013.7396%203.77083%2014.3646%203.3125%2014.9688C4.3125%2014.8646%205.27083%2014.5938%206.1875%2014.1562C6.35417%2014.0729%206.54167%2013.9792%206.75%2013.875C6.83333%2013.8333%206.9375%2013.8229%207.0625%2013.8438C7.54167%2013.9479%208.02083%2014%208.5%2014C10.125%2013.9583%2011.4375%2013.5%2012.4375%2012.625C13.4583%2011.75%2013.9792%2010.7083%2014%209.5C13.9792%208.29167%2013.4583%207.25%2012.4375%206.375C11.4375%205.5%2010.125%205.04167%208.5%205C6.875%205.04167%205.5625%205.5%204.5625%206.375C3.54167%207.25%203.02083%208.29167%203%209.5ZM8.5%204C10.3333%204.04167%2011.8646%204.58333%2013.0938%205.625C14.3229%206.64583%2014.9583%207.9375%2015%209.5C14.9583%2011.0625%2014.3229%2012.3646%2013.0938%2013.4062C11.8646%2014.4271%2010.3333%2014.9583%208.5%2015C8%2015%207.51042%2014.9583%207.03125%2014.875C6.88542%2014.9375%206.73958%2015%206.59375%2015.0625C5.40625%2015.625%204.125%2015.9375%202.75%2016C2.4375%2015.9792%202.20833%2015.8229%202.0625%2015.5312C1.9375%2015.2396%201.97917%2014.9792%202.1875%2014.75H2.21875C2.67708%2014.2083%203.08333%2013.6042%203.4375%2012.9375C3.02083%2012.4792%202.67708%2011.9583%202.40625%2011.375C2.13542%2010.8125%202%2010.1875%202%209.5C2.04167%207.9375%202.67708%206.64583%203.90625%205.625C5.13542%204.58333%206.66667%204.04167%208.5%204ZM15.9688%209.03125C15.9479%208.67708%2015.8958%208.33333%2015.8125%208C17.5833%208.10417%2019.0417%208.66667%2020.1875%209.6875C21.3542%2010.7292%2021.9583%2012%2022%2013.5C22%2014.1875%2021.8646%2014.8125%2021.5938%2015.375C21.3229%2015.9583%2020.9792%2016.4792%2020.5625%2016.9375C20.9167%2017.6042%2021.3333%2018.2083%2021.8125%2018.75C22%2018.9792%2022.0417%2019.25%2021.9375%2019.5625C21.7917%2019.8333%2021.5625%2019.9792%2021.25%2020C19.875%2019.9375%2018.5938%2019.625%2017.4062%2019.0625C17.2604%2019%2017.1146%2018.9271%2016.9688%2018.8438C16.4896%2018.9479%2016%2019%2015.5%2019C14.2083%2018.9792%2013.0417%2018.6979%2012%2018.1562C10.9792%2017.5938%2010.1979%2016.8542%209.65625%2015.9375C10.0104%2015.875%2010.3646%2015.8021%2010.7188%2015.7188C11.1771%2016.3854%2011.8229%2016.9271%2012.6562%2017.3438C13.4688%2017.7604%2014.4167%2017.9792%2015.5%2018C15.9792%2018%2016.4583%2017.9479%2016.9375%2017.8438C17.0625%2017.8229%2017.1771%2017.8333%2017.2812%2017.875C17.4688%2017.9792%2017.6562%2018.0729%2017.8438%2018.1562C18.7396%2018.5729%2019.6875%2018.8438%2020.6875%2018.9688C20.2292%2018.3646%2019.8333%2017.7396%2019.5%2017.0938C19.4167%2016.8854%2019.4479%2016.6979%2019.5938%2016.5312C20.4896%2015.6562%2020.9583%2014.6458%2021%2013.5C20.9792%2012.3542%2020.5104%2011.3542%2019.5938%2010.5C18.6771%209.64583%2017.4688%209.15625%2015.9688%209.03125Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold", "one-line-clamp")}
            tag="div"
          >
            {textTitle}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1416")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "meeting_type")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "meeting_type_logo")}
              tag="div"
            >
              {slotPlatformIcon}
            </_Builtin.Block>
            <_Builtin.Block tag="div">{textPlatformName}</_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "meeting_type")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "meeting_type_logo")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%200C7.125%200.015625%208.13281%200.289062%209.02344%200.820312C9.92969%201.35156%2010.6484%202.07031%2011.1797%202.97656C11.7109%203.86719%2011.9844%204.875%2012%206C11.9844%207.125%2011.7109%208.13281%2011.1797%209.02344C10.6484%209.92969%209.92969%2010.6484%209.02344%2011.1797C8.13281%2011.7109%207.125%2011.9844%206%2012C4.875%2011.9844%203.86719%2011.7109%202.97656%2011.1797C2.07031%2010.6484%201.35156%209.92969%200.820312%209.02344C0.289062%208.13281%200.015625%207.125%200%206C0%205.15625%200.164062%204.36719%200.492188%203.63281C0.804688%202.89844%201.24219%202.25781%201.80469%201.71094C1.96094%201.57031%202.14062%201.5%202.34375%201.5C2.53125%201.5%202.70312%201.57812%202.85938%201.73438C3%201.89063%203.07031%202.0625%203.07031%202.25C3.07031%202.45313%203%202.63281%202.85938%202.78906C1.98438%203.63281%201.53125%204.70312%201.5%206C1.53125%207.28125%201.96875%208.34375%202.8125%209.1875C3.65625%2010.0312%204.71875%2010.4688%206%2010.5C7.28125%2010.4688%208.34375%2010.0312%209.1875%209.1875C10.0312%208.34375%2010.4688%207.28125%2010.5%206C10.4844%204.85938%2010.125%203.88281%209.42188%203.07031C8.73438%202.27344%207.84375%201.77344%206.75%201.57031V2.25C6.75%202.46875%206.67969%202.64844%206.53906%202.78906C6.39844%202.92969%206.21875%203%206%203C5.78125%203%205.60156%202.92969%205.46094%202.78906C5.32031%202.64844%205.25%202.46875%205.25%202.25V0.75C5.25%200.53125%205.32031%200.351562%205.46094%200.210938C5.60156%200.0703125%205.78125%200%206%200ZM4.52344%203.72656L6.39844%205.60156C6.61719%205.86719%206.61719%206.13281%206.39844%206.39844C6.13281%206.61719%205.86719%206.61719%205.60156%206.39844L3.72656%204.52344C3.50781%204.25781%203.50781%203.99219%203.72656%203.72656C3.99219%203.50781%204.25781%203.50781%204.52344%203.72656Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block tag="div">{textTimeDuration}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
