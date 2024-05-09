"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MemberDetail.module.css";

export function MemberDetail({
  as: _Component = _Builtin.Block,
  slotImage,
  isShadow = false,
  isReverseShadow = false,
  textName = "Brooklyn Simmons (you)",
  isDesignationVisible = true,
  textDesignation = "Decline",
  textJobTitle = "Engineering",
  textMail = "codyfisher1992@company.com",
  textLocation = "San Fransisco California",
  textTimeZone = "India Standard Time(GMT+5:30)",
  textTodayInterview = "2 / 3 Interviews",
  textWeekInterview = "2 / 3 Interviews",
  onClickViewInterviewDetail = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1709")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1647")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1651")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1646")}
            tag="div"
          >
            {slotImage}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1652")}
            tag="div"
          >
            {isShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_9955_56669)%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%220.285714%22%20y%3D%220.285714%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22%23467B7C%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%20stroke-dasharray%3D%221.29%201.29%22%2F%3E%0A%3Cpath%20d%3D%22M7.01953%2010.666C5.47656%2010.666%204.48047%209.85547%204.37793%208.70801L4.37305%208.6543H5.25195L5.25684%208.70801C5.32031%209.41113%206.05273%209.85547%207.06836%209.85547C8.02539%209.85547%208.72363%209.3623%208.72363%208.64453V8.63965C8.72363%208.05371%208.31836%207.65332%207.35156%207.43848L6.57031%207.26758C5.15918%206.95508%204.54883%206.30566%204.54883%205.28516V5.28027C4.55371%204.11328%205.57422%203.28809%207.0293%203.28809C8.43555%203.28809%209.41699%204.11816%209.49023%205.16797L9.49512%205.23633H8.61621L8.60645%205.17285C8.50879%204.55273%207.92285%204.09375%207.00488%204.09863C6.12598%204.10352%205.44727%204.51855%205.44727%205.25586V5.26074C5.44727%205.82227%205.83301%206.20312%206.79004%206.41309L7.57129%206.58887C9.04102%206.91602%209.62207%207.50684%209.62207%208.52246V8.52734C9.62207%209.8457%208.5918%2010.666%207.01953%2010.666Z%22%20fill%3D%22%23467B7C%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_9955_56669%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
            {isReverseShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_9955_56687)%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%220.285714%22%20y%3D%220.285714%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22%23467B7C%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%2F%3E%0A%3Cpath%20d%3D%22M4.63184%2010.5V3.4541H7.32227C8.67969%203.4541%209.56836%204.28418%209.56836%205.54883V5.55859C9.56836%206.53516%209.03613%207.29688%208.15234%207.5752L9.7832%2010.5H8.75293L7.24414%207.71191H5.51074V10.5H4.63184ZM5.51074%206.93066H7.24414C8.14746%206.93066%208.66016%206.44727%208.66016%205.58789V5.57812C8.66016%204.73828%208.11328%204.23535%207.20508%204.23535H5.51074V6.93066Z%22%20fill%3D%22%23467B7C%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_9955_56687%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1649")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1648")}
            tag="div"
          >
            <_Builtin.Block tag="div">{textName}</_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {isDesignationVisible ? (
              <_Builtin.Block tag="div">{textDesignation}</_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1660")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1661")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%203H11C10.7083%203%2010.4688%203.09375%2010.2812%203.28125C10.0938%203.46875%2010%203.70833%2010%204V16C10%2016.2917%2010.0938%2016.5312%2010.2812%2016.7188C10.4688%2016.9062%2010.7083%2017%2011%2017H16C16.2917%2017%2016.5312%2016.9062%2016.7188%2016.7188C16.9062%2016.5312%2017%2016.2917%2017%2016V4C17%203.70833%2016.9062%203.46875%2016.7188%203.28125C16.5312%203.09375%2016.2917%203%2016%203ZM11%202H16C16.5625%202.02083%2017.0312%202.21875%2017.4062%202.59375C17.7812%202.96875%2017.9792%203.4375%2018%204V16C17.9792%2016.5625%2017.7812%2017.0312%2017.4062%2017.4062C17.0312%2017.7812%2016.5625%2017.9792%2016%2018H11C10.4375%2017.9792%209.96875%2017.7812%209.59375%2017.4062C9.21875%2017.0312%209.02083%2016.5625%209%2016V4C9.02083%203.4375%209.21875%202.96875%209.59375%202.59375C9.96875%202.21875%2010.4375%202.02083%2011%202ZM8%206V7H4C3.70833%207%203.46875%207.09375%203.28125%207.28125C3.09375%207.46875%203%207.70833%203%208V16C3%2016.2917%203.09375%2016.5312%203.28125%2016.7188C3.46875%2016.9062%203.70833%2017%204%2017H8.15625C8.30208%2017.375%208.5%2017.7083%208.75%2018H4C3.4375%2017.9792%202.96875%2017.7812%202.59375%2017.4062C2.21875%2017.0312%202.02083%2016.5625%202%2016V8C2.02083%207.4375%202.21875%206.96875%202.59375%206.59375C2.96875%206.21875%203.4375%206.02083%204%206H8ZM4.75%2012H6.25C6.70833%2012.0417%206.95833%2012.2917%207%2012.75V14.25C6.95833%2014.7083%206.70833%2014.9583%206.25%2015H4.75C4.29167%2014.9583%204.04167%2014.7083%204%2014.25V12.75C4.04167%2012.2917%204.29167%2012.0417%204.75%2012ZM5%2014H6V13H5V14ZM12%2014.25V12.75C12.0417%2012.2917%2012.2917%2012.0417%2012.75%2012H14.25C14.7083%2012.0417%2014.9583%2012.2917%2015%2012.75V14.25C14.9583%2014.7083%2014.7083%2014.9583%2014.25%2015H12.75C12.2917%2014.9583%2012.0417%2014.7083%2012%2014.25ZM13%2014H14V13H13V14ZM4.75%208H6.25C6.70833%208.04167%206.95833%208.29167%207%208.75V10.25C6.95833%2010.7083%206.70833%2010.9583%206.25%2011H4.75C4.29167%2010.9583%204.04167%2010.7083%204%2010.25V8.75C4.04167%208.29167%204.29167%208.04167%204.75%208ZM5%2010H6V9H5V10ZM12%204.75C12.0417%204.29167%2012.2917%204.04167%2012.75%204H14.25C14.7083%204.04167%2014.9583%204.29167%2015%204.75V6.25C14.9583%206.70833%2014.7083%206.95833%2014.25%207H12.75C12.2917%206.95833%2012.0417%206.70833%2012%206.25V4.75ZM13%205V6H14V5H13ZM12.75%2011C12.2917%2010.9583%2012.0417%2010.7083%2012%2010.25V8.75C12.0417%208.29167%2012.2917%208.04167%2012.75%208H14.25C14.7083%208.04167%2014.9583%208.29167%2015%208.75V10.25C14.9583%2010.7083%2014.7083%2010.9583%2014.25%2011H12.75ZM13%209V10H14V9H13Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{textJobTitle}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1661")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4%205C3.70833%205%203.46875%205.09375%203.28125%205.28125C3.09375%205.46875%203%205.70833%203%206V7.25L9.125%2011.7188C9.70833%2012.1146%2010.2917%2012.1146%2010.875%2011.7188L17%207.25V6C17%205.70833%2016.9062%205.46875%2016.7188%205.28125C16.5312%205.09375%2016.2917%205%2016%205H4ZM3%208.5V14C3%2014.2917%203.09375%2014.5312%203.28125%2014.7188C3.46875%2014.9062%203.70833%2015%204%2015H16C16.2917%2015%2016.5312%2014.9062%2016.7188%2014.7188C16.9062%2014.5312%2017%2014.2917%2017%2014V8.5L11.4688%2012.5312C11.0312%2012.8646%2010.5417%2013.0312%2010%2013.0312C9.45833%2013.0312%208.96875%2012.8646%208.53125%2012.5312L3%208.5ZM2%206C2.02083%205.4375%202.21875%204.96875%202.59375%204.59375C2.96875%204.21875%203.4375%204.02083%204%204H16C16.5625%204.02083%2017.0312%204.21875%2017.4062%204.59375C17.7812%204.96875%2017.9792%205.4375%2018%206V14C17.9792%2014.5625%2017.7812%2015.0312%2017.4062%2015.4062C17.0312%2015.7812%2016.5625%2015.9792%2016%2016H4C3.4375%2015.9792%202.96875%2015.7812%202.59375%2015.4062C2.21875%2015.0312%202.02083%2014.5625%202%2014V6Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{textMail}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1661")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15%208C14.9583%206.58333%2014.4688%205.40625%2013.5312%204.46875C12.5938%203.53125%2011.4167%203.04167%2010%203C8.58333%203.04167%207.40625%203.53125%206.46875%204.46875C5.53125%205.40625%205.04167%206.58333%205%208C5%208.5%205.17708%209.15625%205.53125%209.96875C5.88542%2010.8021%206.33333%2011.6667%206.875%2012.5625C7.41667%2013.4375%207.96875%2014.25%208.53125%2015C9.09375%2015.7708%209.58333%2016.4167%2010%2016.9375C10.4167%2016.4167%2010.9062%2015.7708%2011.4688%2015C12.0312%2014.25%2012.5833%2013.4375%2013.125%2012.5625C13.6875%2011.6667%2014.1458%2010.8021%2014.5%209.96875C14.8333%209.15625%2015%208.5%2015%208ZM16%208C15.9583%208.9375%2015.625%2010.0208%2015%2011.25C14.3542%2012.4792%2013.625%2013.6667%2012.8125%2014.8125C12%2015.9792%2011.3125%2016.9062%2010.75%2017.5938C10.5417%2017.8438%2010.2917%2017.9688%2010%2017.9688C9.70833%2017.9688%209.45833%2017.8438%209.25%2017.5938C8.6875%2016.9062%208%2015.9792%207.1875%2014.8125C6.375%2013.6667%205.64583%2012.4792%205%2011.25C4.375%2010.0208%204.04167%208.9375%204%208C4.04167%206.29167%204.625%204.875%205.75%203.75C6.875%202.625%208.29167%202.04167%2010%202C11.7083%202.04167%2013.125%202.625%2014.25%203.75C15.375%204.875%2015.9583%206.29167%2016%208ZM8.5%208C8.52083%208.5625%208.77083%209%209.25%209.3125C9.75%209.5625%2010.25%209.5625%2010.75%209.3125C11.2292%209%2011.4792%208.5625%2011.5%208C11.4792%207.4375%2011.2292%207%2010.75%206.6875C10.25%206.4375%209.75%206.4375%209.25%206.6875C8.77083%207%208.52083%207.4375%208.5%208ZM10%2010.5C9.0625%2010.4792%208.34375%2010.0625%207.84375%209.25C7.38542%208.41667%207.38542%207.58333%207.84375%206.75C8.34375%205.9375%209.0625%205.52083%2010%205.5C10.9375%205.52083%2011.6562%205.9375%2012.1562%206.75C12.6146%207.58333%2012.6146%208.41667%2012.1562%209.25C11.6562%2010.0625%2010.9375%2010.4792%2010%2010.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{textLocation}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1661")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10%2017C10.2708%2017%2010.5729%2016.8646%2010.9062%2016.5938C11.2396%2016.3229%2011.5833%2015.8646%2011.9375%2015.2188C12.25%2014.5938%2012.5%2013.8542%2012.6875%2013H7.3125C7.5%2013.8542%207.75%2014.5938%208.0625%2015.2188C8.41667%2015.8646%208.76042%2016.3229%209.09375%2016.5938C9.42708%2016.8646%209.72917%2017%2010%2017ZM7.125%2012H12.875C12.9583%2011.375%2013%2010.7083%2013%2010C13%209.29167%2012.9583%208.625%2012.875%208H7.125C7.04167%208.625%207%209.29167%207%2010C7%2010.7083%207.04167%2011.375%207.125%2012ZM7.3125%207H12.6875C12.5%206.14583%2012.25%205.40625%2011.9375%204.78125C11.5833%204.13542%2011.2396%203.67708%2010.9062%203.40625C10.5729%203.13542%2010.2708%203%2010%203C9.72917%203%209.42708%203.13542%209.09375%203.40625C8.76042%203.67708%208.41667%204.13542%208.0625%204.78125C7.75%205.40625%207.5%206.14583%207.3125%207ZM13.875%208C13.9583%208.64583%2014%209.3125%2014%2010C14%2010.6875%2013.9583%2011.3542%2013.875%2012H16.7188C16.9062%2011.3542%2017%2010.6875%2017%2010C17%209.3125%2016.9062%208.64583%2016.7188%208H13.875ZM16.3438%207C15.9271%206.14583%2015.3646%205.40625%2014.6562%204.78125C13.9479%204.15625%2013.1458%203.6875%2012.25%203.375C12.9167%204.27083%2013.4062%205.47917%2013.7188%207H16.3438ZM6.28125%207C6.59375%205.47917%207.09375%204.27083%207.78125%203.375C6.86458%203.6875%206.05208%204.15625%205.34375%204.78125C4.63542%205.40625%204.08333%206.14583%203.6875%207H6.28125ZM3.28125%208C3.09375%208.64583%203%209.3125%203%2010C3%2010.6875%203.09375%2011.3542%203.28125%2012H6.125C6.04167%2011.3542%206%2010.6875%206%2010C6%209.3125%206.04167%208.64583%206.125%208H3.28125ZM12.25%2016.625C13.1458%2016.3125%2013.9479%2015.8438%2014.6562%2015.2188C15.3646%2014.5938%2015.9167%2013.8542%2016.3125%2013H13.7188C13.4062%2014.5208%2012.9167%2015.7292%2012.25%2016.625ZM7.78125%2016.625C7.09375%2015.7292%206.59375%2014.5208%206.28125%2013H3.6875C4.08333%2013.8542%204.63542%2014.5938%205.34375%2015.2188C6.05208%2015.8438%206.86458%2016.3125%207.78125%2016.625ZM10%2018C8.54167%2017.9792%207.20833%2017.625%206%2016.9375C4.79167%2016.2292%203.8125%2015.25%203.0625%2014C2.35417%2012.7292%202%2011.3958%202%2010C2%208.60417%202.35417%207.27083%203.0625%206C3.8125%204.75%204.79167%203.77083%206%203.0625C7.20833%202.375%208.54167%202.02083%2010%202C11.4583%202.02083%2012.7917%202.375%2014%203.0625C15.2083%203.77083%2016.1875%204.75%2016.9375%206C17.6458%207.27083%2018%208.60417%2018%2010C18%2011.3958%2017.6458%2012.7292%2016.9375%2014C16.1875%2015.25%2015.2083%2016.2292%2014%2016.9375C12.7917%2017.625%2011.4583%2017.9792%2010%2018Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{textTimeZone}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1662")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1663")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1664")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.75%200.375V1.5H8.25V0.375C8.26562%200.140625%208.39062%200.015625%208.625%200C8.85938%200.015625%208.98438%200.140625%209%200.375V1.5H9.75C10.1719%201.51563%2010.5234%201.66406%2010.8047%201.94531C11.0859%202.22656%2011.2344%202.57812%2011.25%203V3.75V4.5V10.5C11.2344%2010.9219%2011.0859%2011.2734%2010.8047%2011.5547C10.5234%2011.8359%2010.1719%2011.9844%209.75%2012H2.25C1.82812%2011.9844%201.47656%2011.8359%201.19531%2011.5547C0.914062%2011.2734%200.765625%2010.9219%200.75%2010.5V4.5V3.75V3C0.765625%202.57812%200.914062%202.22656%201.19531%201.94531C1.47656%201.66406%201.82812%201.51563%202.25%201.5H3V0.375C3.01562%200.140625%203.14062%200.015625%203.375%200C3.60938%200.015625%203.73438%200.140625%203.75%200.375ZM1.5%204.5V10.5C1.5%2010.7188%201.57031%2010.8984%201.71094%2011.0391C1.85156%2011.1797%202.03125%2011.25%202.25%2011.25H9.75C9.96875%2011.25%2010.1484%2011.1797%2010.2891%2011.0391C10.4297%2010.8984%2010.5%2010.7188%2010.5%2010.5V4.5H1.5ZM2.25%202.25C2.03125%202.25%201.85156%202.32031%201.71094%202.46094C1.57031%202.60156%201.5%202.78125%201.5%203V3.75H10.5V3C10.5%202.78125%2010.4297%202.60156%2010.2891%202.46094C10.1484%202.32031%209.96875%202.25%209.75%202.25H2.25ZM3.1875%206C3.07812%206.01562%203.01562%206.07812%203%206.1875V8.0625C3.01562%208.17188%203.07812%208.23438%203.1875%208.25H5.0625C5.17188%208.23438%205.23438%208.17188%205.25%208.0625V6.1875C5.23438%206.07812%205.17188%206.01562%205.0625%206H3.1875ZM2.25%206.1875C2.25%205.92188%202.34375%205.70312%202.53125%205.53125C2.70312%205.34375%202.92188%205.25%203.1875%205.25H5.0625C5.32812%205.25%205.54688%205.34375%205.71875%205.53125C5.90625%205.70312%206%205.92188%206%206.1875V8.0625C6%208.32812%205.90625%208.54688%205.71875%208.71875C5.54688%208.90625%205.32812%209%205.0625%209H3.1875C2.92188%209%202.70312%208.90625%202.53125%208.71875C2.34375%208.54688%202.25%208.32812%202.25%208.0625V6.1875Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-sm", "text-grey-600")}
              tag="div"
            >
              {"Today"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">{textTodayInterview}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1663")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1664")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.75%200.375V1.5H8.25V0.375C8.26562%200.140625%208.39062%200.015625%208.625%200C8.85938%200.015625%208.98438%200.140625%209%200.375V1.5H9.75C10.1719%201.51563%2010.5234%201.66406%2010.8047%201.94531C11.0859%202.22656%2011.2344%202.57812%2011.25%203V3.75V4.5V10.5C11.2344%2010.9219%2011.0859%2011.2734%2010.8047%2011.5547C10.5234%2011.8359%2010.1719%2011.9844%209.75%2012H2.25C1.82812%2011.9844%201.47656%2011.8359%201.19531%2011.5547C0.914062%2011.2734%200.765625%2010.9219%200.75%2010.5V4.5V3.75V3C0.765625%202.57812%200.914062%202.22656%201.19531%201.94531C1.47656%201.66406%201.82812%201.51563%202.25%201.5H3V0.375C3.01562%200.140625%203.14062%200.015625%203.375%200C3.60938%200.015625%203.73438%200.140625%203.75%200.375ZM1.5%204.5V10.5C1.5%2010.7188%201.57031%2010.8984%201.71094%2011.0391C1.85156%2011.1797%202.03125%2011.25%202.25%2011.25H9.75C9.96875%2011.25%2010.1484%2011.1797%2010.2891%2011.0391C10.4297%2010.8984%2010.5%2010.7188%2010.5%2010.5V4.5H1.5ZM2.25%202.25C2.03125%202.25%201.85156%202.32031%201.71094%202.46094C1.57031%202.60156%201.5%202.78125%201.5%203V3.75H10.5V3C10.5%202.78125%2010.4297%202.60156%2010.2891%202.46094C10.1484%202.32031%209.96875%202.25%209.75%202.25H2.25ZM3.1875%206C3.07812%206.01562%203.01562%206.07812%203%206.1875V8.0625C3.01562%208.17188%203.07812%208.23438%203.1875%208.25H5.0625C5.17188%208.23438%205.23438%208.17188%205.25%208.0625V6.1875C5.23438%206.07812%205.17188%206.01562%205.0625%206H3.1875ZM2.25%206.1875C2.25%205.92188%202.34375%205.70312%202.53125%205.53125C2.70312%205.34375%202.92188%205.25%203.1875%205.25H5.0625C5.32812%205.25%205.54688%205.34375%205.71875%205.53125C5.90625%205.70312%206%205.92188%206%206.1875V8.0625C6%208.32812%205.90625%208.54688%205.71875%208.71875C5.54688%208.90625%205.32812%209%205.0625%209H3.1875C2.92188%209%202.70312%208.90625%202.53125%208.71875C2.34375%208.54688%202.25%208.32812%202.25%208.0625V6.1875Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-sm", "text-grey-600")}
              tag="div"
            >
              {"This Week"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">{textWeekInterview}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1665")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-blue-500",
            "text-underline",
            "cursor-pointer"
          )}
          tag="div"
          {...onClickViewInterviewDetail}
        >
          {"View interviewer detail"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
