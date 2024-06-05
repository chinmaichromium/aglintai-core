"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SlotComp } from "./SlotComp";
import * as _utils from "./utils";
import _styles from "./GroupFeedback.module.css";

export function GroupFeedback({
  as: _Component = _Builtin.Block,
  slotFeedbackTableRow,
  textInterviewType = "Company Indroduction",
  textDate = "12 Feb 2024",
  textTime = "09:00 AM to 09:30 PM",
  slotStatusPill,
}) {
  return (
    <_Component tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1572")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1573")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5%204H19.5C20.2083%204.02083%2020.8021%204.26042%2021.2812%204.71875C21.7396%205.19792%2021.9792%205.79167%2022%206.5V17.5C21.9792%2018.2083%2021.7396%2018.8021%2021.2812%2019.2812C20.8021%2019.7396%2020.2083%2019.9792%2019.5%2020H4.5C3.79167%2019.9792%203.19792%2019.7396%202.71875%2019.2812C2.26042%2018.8021%202.02083%2018.2083%202%2017.5V6.5C2.02083%205.79167%202.26042%205.19792%202.71875%204.71875C3.19792%204.26042%203.79167%204.02083%204.5%204ZM3%206.5V17.5C3.02083%2017.9167%203.16667%2018.2708%203.4375%2018.5625C3.72917%2018.8333%204.08333%2018.9792%204.5%2019H19.5C19.9167%2018.9792%2020.2708%2018.8333%2020.5625%2018.5625C20.8333%2018.2708%2020.9792%2017.9167%2021%2017.5V6.5C20.9792%206.08333%2020.8333%205.72917%2020.5625%205.4375C20.2708%205.16667%2019.9167%205.02083%2019.5%205H4.5C4.08333%205.02083%203.72917%205.16667%203.4375%205.4375C3.16667%205.72917%203.02083%206.08333%203%206.5ZM11%2010C11%2010.2917%2011.0938%2010.5312%2011.2812%2010.7188C11.4688%2010.9062%2011.7083%2011%2012%2011C12.2917%2011%2012.5312%2010.9062%2012.7188%2010.7188C12.9062%2010.5312%2013%2010.2917%2013%2010C13%209.70833%2012.9062%209.46875%2012.7188%209.28125C12.5312%209.09375%2012.2917%209%2012%209C11.7083%209%2011.4688%209.09375%2011.2812%209.28125C11.0938%209.46875%2011%209.70833%2011%2010ZM14%2010C13.9792%2010.75%2013.6458%2011.3229%2013%2011.7188C12.3333%2012.0938%2011.6667%2012.0938%2011%2011.7188C10.3542%2011.3229%2010.0208%2010.75%2010%2010C10.0208%209.25%2010.3542%208.67708%2011%208.28125C11.6667%207.90625%2012.3333%207.90625%2013%208.28125C13.6458%208.67708%2013.9792%209.25%2014%2010ZM13.25%2014H10.75C10.1042%2014.0417%209.69792%2014.375%209.53125%2015H14.4688C14.3021%2014.375%2013.8958%2014.0417%2013.25%2014ZM10.75%2013H13.25C13.8958%2013.0208%2014.4271%2013.2396%2014.8438%2013.6562C15.2604%2014.0729%2015.4792%2014.6042%2015.5%2015.25C15.4583%2015.7083%2015.2083%2015.9583%2014.75%2016H9.25C8.79167%2015.9583%208.54167%2015.7083%208.5%2015.25C8.52083%2014.6042%208.73958%2014.0729%209.15625%2013.6562C9.57292%2013.2396%2010.1042%2013.0208%2010.75%2013Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold", "text-grey_600")}
            tag="div"
          >
            {textInterviewType}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1574", "hide")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-grey-600")}
            tag="div"
          >
            {textDate}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-grey-600")}
            tag="div"
          >
            {textTime}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          {slotStatusPill ?? <SlotComp componentNeme="Status" />}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        {slotFeedbackTableRow ?? <SlotComp componentNeme="Feedback" />}
      </_Builtin.Block>
    </_Component>
  );
}
