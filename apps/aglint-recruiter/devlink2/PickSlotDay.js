"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import { SlotComp } from "./SlotComp";
import { CalendarPick } from "./CalendarPick";
import { TimePick } from "./TimePick";
import * as _utils from "./utils";
import _styles from "./PickSlotDay.module.css";

export function PickSlotDay({
  as: _Component = _Builtin.Block,
  isPickedCalendarActive = false,
  textPickDays = "Pick atleast 4 days",
  slotCalenderPick,
  isPickSlotIconActive = false,
  textPickSlots = "Pick atleast 2 slots from each day",
  isPickTimeDescVisible = true,
  slotTimePick,
  slotSlotPicker,
  slotPrimaryButton,
}) {
  return (
    <_Component className={_utils.cx(_styles, "pick-slot-day-wrap")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "available-req-date-pick")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "pick-wrap")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "pick-icon-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%201C6.72917%201.02083%205.5625%201.33333%204.5%201.9375C3.4375%202.5625%202.58333%203.41667%201.9375%204.5C1.3125%205.60417%201%206.77083%201%208C1%209.22917%201.3125%2010.3958%201.9375%2011.5C2.58333%2012.5833%203.4375%2013.4375%204.5%2014.0625C5.5625%2014.6667%206.72917%2014.9792%208%2015C9.27083%2014.9792%2010.4375%2014.6667%2011.5%2014.0625C12.5625%2013.4375%2013.4167%2012.5833%2014.0625%2011.5C14.6875%2010.3958%2015%209.22917%2015%208C15%206.77083%2014.6875%205.60417%2014.0625%204.5C13.4167%203.41667%2012.5625%202.5625%2011.5%201.9375C10.4375%201.33333%209.27083%201.02083%208%201ZM8%2016C6.54167%2015.9792%205.20833%2015.625%204%2014.9375C2.79167%2014.2292%201.8125%2013.25%201.0625%2012C0.354167%2010.7292%200%209.39583%200%208C0%206.60417%200.354167%205.27083%201.0625%204C1.8125%202.75%202.79167%201.77083%204%201.0625C5.20833%200.375%206.54167%200.0208333%208%200C9.45833%200.0208333%2010.7917%200.375%2012%201.0625C13.2083%201.77083%2014.1875%202.75%2014.9375%204C15.6458%205.27083%2016%206.60417%2016%208C16%209.39583%2015.6458%2010.7292%2014.9375%2012C14.1875%2013.25%2013.2083%2014.2292%2012%2014.9375C10.7917%2015.625%209.45833%2015.9792%208%2016ZM11.3438%206.34375L7.34375%2010.3438C7.11458%2010.5521%206.88542%2010.5521%206.65625%2010.3438L4.65625%208.34375C4.44792%208.11458%204.44792%207.88542%204.65625%207.65625C4.88542%207.44792%205.11458%207.44792%205.34375%207.65625L7%209.28125L10.6562%205.65625C10.8854%205.44792%2011.1146%205.44792%2011.3438%205.65625C11.5521%205.88542%2011.5521%206.11458%2011.3438%206.34375Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            {isPickedCalendarActive ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "picked-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%2016C6.54167%2015.9792%205.20833%2015.625%204%2014.9375C2.79167%2014.2292%201.8125%2013.25%201.0625%2012C0.354167%2010.7292%200%209.39583%200%208C0%206.60417%200.354167%205.27083%201.0625%204C1.8125%202.75%202.79167%201.77083%204%201.0625C5.20833%200.375%206.54167%200.0208333%208%200C9.45833%200.0208333%2010.7917%200.375%2012%201.0625C13.2083%201.77083%2014.1875%202.75%2014.9375%204C15.6458%205.27083%2016%206.60417%2016%208C16%209.39583%2015.6458%2010.7292%2014.9375%2012C14.1875%2013.25%2013.2083%2014.2292%2012%2014.9375C10.7917%2015.625%209.45833%2015.9792%208%2016ZM11.5312%206.53125C11.8229%206.17708%2011.8229%205.82292%2011.5312%205.46875C11.1771%205.17708%2010.8229%205.17708%2010.4688%205.46875L7%208.9375L5.53125%207.46875C5.17708%207.17708%204.82292%207.17708%204.46875%207.46875C4.17708%207.82292%204.17708%208.17708%204.46875%208.53125L6.46875%2010.5312C6.82292%2010.8229%207.17708%2010.8229%207.53125%2010.5312L11.5312%206.53125Z%22%20fill%3D%22%23228F67%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <Text content={textPickDays} weight="" />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "slot-calender-pick")}
          tag="div"
        >
          {slotCalenderPick ?? (
            <>
              <SlotComp componentName="CalanderPick" />
              <CalendarPick />
            </>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "available-req-date-pick")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "pick-desc-wrap")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "pick-wrap")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "pick-icon-wrap")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%201C6.72917%201.02083%205.5625%201.33333%204.5%201.9375C3.4375%202.5625%202.58333%203.41667%201.9375%204.5C1.3125%205.60417%201%206.77083%201%208C1%209.22917%201.3125%2010.3958%201.9375%2011.5C2.58333%2012.5833%203.4375%2013.4375%204.5%2014.0625C5.5625%2014.6667%206.72917%2014.9792%208%2015C9.27083%2014.9792%2010.4375%2014.6667%2011.5%2014.0625C12.5625%2013.4375%2013.4167%2012.5833%2014.0625%2011.5C14.6875%2010.3958%2015%209.22917%2015%208C15%206.77083%2014.6875%205.60417%2014.0625%204.5C13.4167%203.41667%2012.5625%202.5625%2011.5%201.9375C10.4375%201.33333%209.27083%201.02083%208%201ZM8%2016C6.54167%2015.9792%205.20833%2015.625%204%2014.9375C2.79167%2014.2292%201.8125%2013.25%201.0625%2012C0.354167%2010.7292%200%209.39583%200%208C0%206.60417%200.354167%205.27083%201.0625%204C1.8125%202.75%202.79167%201.77083%204%201.0625C5.20833%200.375%206.54167%200.0208333%208%200C9.45833%200.0208333%2010.7917%200.375%2012%201.0625C13.2083%201.77083%2014.1875%202.75%2014.9375%204C15.6458%205.27083%2016%206.60417%2016%208C16%209.39583%2015.6458%2010.7292%2014.9375%2012C14.1875%2013.25%2013.2083%2014.2292%2012%2014.9375C10.7917%2015.625%209.45833%2015.9792%208%2016ZM11.3438%206.34375L7.34375%2010.3438C7.11458%2010.5521%206.88542%2010.5521%206.65625%2010.3438L4.65625%208.34375C4.44792%208.11458%204.44792%207.88542%204.65625%207.65625C4.88542%207.44792%205.11458%207.44792%205.34375%207.65625L7%209.28125L10.6562%205.65625C10.8854%205.44792%2011.1146%205.44792%2011.3438%205.65625C11.5521%205.88542%2011.5521%206.11458%2011.3438%206.34375Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              {isPickSlotIconActive ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "picked-wrap")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons")}
                    value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%2016C6.54167%2015.9792%205.20833%2015.625%204%2014.9375C2.79167%2014.2292%201.8125%2013.25%201.0625%2012C0.354167%2010.7292%200%209.39583%200%208C0%206.60417%200.354167%205.27083%201.0625%204C1.8125%202.75%202.79167%201.77083%204%201.0625C5.20833%200.375%206.54167%200.0208333%208%200C9.45833%200.0208333%2010.7917%200.375%2012%201.0625C13.2083%201.77083%2014.1875%202.75%2014.9375%204C15.6458%205.27083%2016%206.60417%2016%208C16%209.39583%2015.6458%2010.7292%2014.9375%2012C14.1875%2013.25%2013.2083%2014.2292%2012%2014.9375C10.7917%2015.625%209.45833%2015.9792%208%2016ZM11.5312%206.53125C11.8229%206.17708%2011.8229%205.82292%2011.5312%205.46875C11.1771%205.17708%2010.8229%205.17708%2010.4688%205.46875L7%208.9375L5.53125%207.46875C5.17708%207.17708%204.82292%207.17708%204.46875%207.46875C4.17708%207.82292%204.17708%208.17708%204.46875%208.53125L6.46875%2010.5312C6.82292%2010.8229%207.17708%2010.8229%207.53125%2010.5312L11.5312%206.53125Z%22%20fill%3D%22%23228F67%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
            <Text content={textPickSlots} weight="" />
          </_Builtin.Block>
          {isPickTimeDescVisible ? (
            <_Builtin.Block tag="div">
              <Text
                color="neutral"
                weight=""
                content="Pick more than prefered slots to increase the flexibility of your interview"
              />
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          {slotTimePick ?? (
            <>
              <SlotComp componentName="TimePick" />
              <TimePick />
            </>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "available-req-button-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "psd-button-slot")}
          tag="div"
        >
          {slotPrimaryButton ?? <SlotComp componentName="PrimaryButton" />}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
