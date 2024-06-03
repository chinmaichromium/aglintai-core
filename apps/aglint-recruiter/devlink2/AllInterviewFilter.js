"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { FilterItem } from "./FilterItem";
import * as _utils from "./utils";
import _styles from "./AllInterviewFilter.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-157":{"id":"e-157","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282313},"e-158":{"id":"e-158","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282314}},"actionLists":{"a-102":{"id":"a-102","title":"DayoffList Hover in","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-102-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]},{"actionItems":[{"id":"a-102-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":1,"unit":""}},{"id":"a-102-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715600286589},"a-103":{"id":"a-103","title":"DayoffList Hover out","actionItemGroups":[{"actionItems":[{"id":"a-103-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-103-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715600286589}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AllInterviewFilter({
  as: _Component = _Builtin.Block,
  isRelatedJobVisible = true,
  isScheduleTypeVisible = true,
  isStatusVisible = true,
  isInterviewPanelVisible = true,
  isDataRangeVisible = true,
  isDurationVisible = true,
  onClickRelatedJob = {},
  onClickScheduleType = {},
  onClickStatus = {},
  onClickInterviewPanel = {},
  onClickDateRange = {},
  onClickDuration = {},
  isCustomSlot = false,
  slotCustom,
  onClickCoordinator = {},
  isCoordinatorVisible = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "all-interview-filter")}
      tag="div"
    >
      {isRelatedJobVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-wrap", "cursor-pointer")}
          tag="div"
          {...onClickRelatedJob}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons", "hide")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.25%203.125V4.25H9.75V3.125C9.73438%202.89062%209.60938%202.76563%209.375%202.75H5.625C5.39062%202.76563%205.26562%202.89062%205.25%203.125ZM4.5%204.25V3.125C4.51562%202.8125%204.625%202.54687%204.82812%202.32812C5.04688%202.125%205.3125%202.01563%205.625%202H9.375C9.6875%202.01563%209.95312%202.125%2010.1719%202.32812C10.375%202.54687%2010.4844%202.8125%2010.5%203.125V4.25H12C12.4219%204.26562%2012.7734%204.41406%2013.0547%204.69531C13.3359%204.97656%2013.4844%205.32812%2013.5%205.75V11.75C13.4844%2012.1719%2013.3359%2012.5234%2013.0547%2012.8047C12.7734%2013.0859%2012.4219%2013.2344%2012%2013.25H3C2.57812%2013.2344%202.22656%2013.0859%201.94531%2012.8047C1.66406%2012.5234%201.51562%2012.1719%201.5%2011.75V5.75C1.51562%205.32812%201.66406%204.97656%201.94531%204.69531C2.22656%204.41406%202.57812%204.26562%203%204.25H4.5ZM10.125%205H4.875H3C2.78125%205%202.60156%205.07031%202.46094%205.21094C2.32031%205.35156%202.25%205.53125%202.25%205.75V8H5.625H6.375H8.625H9.375H12.75V5.75C12.75%205.53125%2012.6797%205.35156%2012.5391%205.21094C12.3984%205.07031%2012.2188%205%2012%205H10.125ZM12.75%208.75H9.375V9.875C9.375%2010.0938%209.30469%2010.2734%209.16406%2010.4141C9.02344%2010.5547%208.84375%2010.625%208.625%2010.625H6.375C6.15625%2010.625%205.97656%2010.5547%205.83594%2010.4141C5.69531%2010.2734%205.625%2010.0938%205.625%209.875V8.75H2.25V11.75C2.25%2011.9688%202.32031%2012.1484%202.46094%2012.2891C2.60156%2012.4297%202.78125%2012.5%203%2012.5H12C12.2188%2012.5%2012.3984%2012.4297%2012.5391%2012.2891C12.6797%2012.1484%2012.75%2011.9688%2012.75%2011.75V8.75ZM6.375%208.75V9.875H8.625V8.75H6.375Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Job"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isScheduleTypeVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-wrap", "cursor-pointer")}
          tag="div"
          {...onClickScheduleType}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons", "hide")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3%202.375V2.77344L12.3984%206.00781C12.6172%206.10156%2012.7344%206.26562%2012.75%206.5C12.7344%206.73438%2012.6172%206.89844%2012.3984%206.99219L3%2010.2266V13.625C2.98438%2013.8594%202.85938%2013.9844%202.625%2014C2.39062%2013.9844%202.26562%2013.8594%202.25%2013.625V10.25V9.5V3.5V2.75V2.375C2.26562%202.14062%202.39062%202.01563%202.625%202C2.85938%202.01563%202.98438%202.14062%203%202.375ZM3%203.57031V9.42969L11.5312%206.5L3%203.57031Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Schedule Type"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isStatusVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-wrap", "cursor-pointer")}
          tag="div"
          {...onClickStatus}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons", "hide")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.15625%207.4375C1.98438%207.4375%201.84375%207.375%201.73438%207.25C1.625%207.14062%201.58594%207%201.61719%206.82812C1.77344%206.03125%202.07031%205.3125%202.50781%204.67188C2.60156%204.53125%202.72656%204.46094%202.88281%204.46094C3.03906%204.44531%203.1875%204.5%203.32812%204.625C3.51562%204.85938%203.53125%205.11719%203.375%205.39844C3.07812%205.86719%202.86719%206.38281%202.74219%206.94531C2.64844%207.24219%202.45312%207.40625%202.15625%207.4375ZM4.89844%203.875C4.61719%204.03125%204.35938%204.01562%204.125%203.82812C4%203.70313%203.94531%203.55469%203.96094%203.38281C3.96094%203.22656%204.03125%203.10156%204.17188%203.00781C4.8125%202.57031%205.53125%202.27344%206.32812%202.11719C6.5%202.08594%206.64062%202.125%206.75%202.23438C6.875%202.34375%206.9375%202.48438%206.9375%202.65625C6.90625%202.96875%206.74219%203.16406%206.44531%203.24219C5.88281%203.36719%205.36719%203.57812%204.89844%203.875ZM8.0625%2013.3438C8.09375%2013.0312%208.25781%2012.8359%208.55469%2012.7578C9.11719%2012.6328%209.64062%2012.4219%2010.125%2012.125C10.3906%2011.9688%2010.6406%2011.9844%2010.875%2012.1719C11%2012.3125%2011.0547%2012.4609%2011.0391%2012.6172C11.0391%2012.7734%2010.9688%2012.8984%2010.8281%2012.9922C10.1875%2013.4297%209.46875%2013.7266%208.67188%2013.8828C8.5%2013.9141%208.35938%2013.875%208.25%2013.7656C8.125%2013.6562%208.0625%2013.5156%208.0625%2013.3438ZM11.625%2010.625C11.9219%2010.1406%2012.1328%209.61719%2012.2578%209.05469C12.3359%208.75781%2012.5312%208.59375%2012.8438%208.5625C13.0156%208.5625%2013.1562%208.625%2013.2656%208.75C13.375%208.85938%2013.4141%209%2013.3828%209.17188C13.2266%209.96875%2012.9297%2010.6875%2012.4922%2011.3281C12.3984%2011.4688%2012.2734%2011.5391%2012.1172%2011.5391C11.9453%2011.5547%2011.7969%2011.5%2011.6719%2011.375C11.4688%2011.1406%2011.4531%2010.8906%2011.625%2010.625ZM4.125%2012.1719C4.35938%2011.9688%204.61719%2011.9531%204.89844%2012.125C5.36719%2012.4219%205.88281%2012.6328%206.44531%2012.7578C6.74219%2012.8359%206.90625%2013.0312%206.9375%2013.3438C6.9375%2013.5156%206.875%2013.6562%206.75%2013.7656C6.64062%2013.875%206.5%2013.9141%206.32812%2013.8828C5.53125%2013.7266%204.8125%2013.4297%204.17188%2012.9922C4.03125%2012.8984%203.96094%2012.7656%203.96094%2012.5938C3.94531%2012.4375%204%2012.2969%204.125%2012.1719ZM2.50781%2011.3281C2.07031%2010.6875%201.77344%209.96875%201.61719%209.17188C1.58594%209%201.625%208.85938%201.73438%208.75C1.84375%208.625%201.98438%208.5625%202.15625%208.5625C2.46875%208.59375%202.66406%208.75781%202.74219%209.05469C2.86719%209.61719%203.07812%2010.1406%203.375%2010.625C3.53125%2010.8906%203.51562%2011.1406%203.32812%2011.375C3.20312%2011.5%203.05469%2011.5547%202.88281%2011.5391C2.72656%2011.5391%202.60156%2011.4688%202.50781%2011.3281ZM10.875%203.82812C10.6406%204.03125%2010.3906%204.04688%2010.125%203.875C9.64062%203.57812%209.11719%203.36719%208.55469%203.24219C8.25781%203.16406%208.09375%202.96875%208.0625%202.65625C8.0625%202.48438%208.125%202.34375%208.25%202.23438C8.35938%202.125%208.5%202.08594%208.67188%202.11719C9.46875%202.27344%2010.1875%202.57031%2010.8281%203.00781C10.9688%203.10156%2011.0391%203.22656%2011.0391%203.38281C11.0547%203.55469%2011%203.70313%2010.875%203.82812ZM11.625%205.375C11.4688%205.10938%2011.4844%204.85156%2011.6719%204.60156C11.7969%204.49219%2011.9453%204.44531%2012.1172%204.46094C12.2734%204.46094%2012.3984%204.53125%2012.4922%204.67188C12.9297%205.3125%2013.2266%206.03125%2013.3828%206.82812C13.4141%206.98438%2013.375%207.125%2013.2656%207.25C13.1562%207.375%2013.0156%207.4375%2012.8438%207.4375C12.5312%207.40625%2012.3359%207.24219%2012.2578%206.94531C12.1328%206.38281%2011.9219%205.85938%2011.625%205.375Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Status"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isInterviewPanelVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-wrap", "cursor-pointer")}
          tag="div"
          {...onClickInterviewPanel}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons", "hide")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.25%203.875C2.26562%204.29688%202.45312%204.625%202.8125%204.85938C3.1875%205.04688%203.5625%205.04688%203.9375%204.85938C4.29688%204.625%204.48438%204.29688%204.5%203.875C4.48438%203.45312%204.29688%203.125%203.9375%202.89062C3.5625%202.70312%203.1875%202.70312%202.8125%202.89062C2.45312%203.125%202.26562%203.45312%202.25%203.875ZM5.25%203.875C5.23438%204.57812%204.92188%205.11719%204.3125%205.49219C3.6875%205.83594%203.0625%205.83594%202.4375%205.49219C1.82812%205.11719%201.51562%204.57812%201.5%203.875C1.51562%203.17188%201.82812%202.63281%202.4375%202.25781C3.0625%201.91406%203.6875%201.91406%204.3125%202.25781C4.92188%202.63281%205.23438%203.17188%205.25%203.875ZM7.5%205.75C6.9375%205.76562%206.50781%206.01562%206.21094%206.5C5.92969%207%205.92969%207.5%206.21094%208C6.50781%208.48438%206.9375%208.73438%207.5%208.75C8.0625%208.73438%208.49219%208.48438%208.78906%208C9.07031%207.5%209.07031%207%208.78906%206.5C8.49219%206.01562%208.0625%205.76562%207.5%205.75ZM7.5%209.5C7.09375%209.5%206.71875%209.39844%206.375%209.19531C6.03125%208.99219%205.75781%208.71875%205.55469%208.375C5.35156%208.01562%205.25%207.64062%205.25%207.25C5.25%206.85938%205.35156%206.48438%205.55469%206.125C5.75781%205.78125%206.03125%205.50781%206.375%205.30469C6.71875%205.10156%207.09375%205%207.5%205C7.90625%205%208.28125%205.10156%208.625%205.30469C8.96875%205.50781%209.24219%205.78125%209.44531%206.125C9.64844%206.48438%209.75%206.85938%209.75%207.25C9.75%207.64062%209.64844%208.01562%209.44531%208.375C9.24219%208.71875%208.96875%208.99219%208.625%209.19531C8.28125%209.39844%207.90625%209.5%207.5%209.5ZM6.11719%2011C5.47656%2011.0156%204.92969%2011.2344%204.47656%2011.6562C4.03906%2012.0781%203.79688%2012.6094%203.75%2013.25H11.25C11.2031%2012.6094%2010.9609%2012.0781%2010.5234%2011.6562C10.0703%2011.2344%209.52344%2011.0156%208.88281%2011H6.11719ZM6.11719%2010.25H8.88281C9.75781%2010.2656%2010.4922%2010.5703%2011.0859%2011.1641C11.6797%2011.7578%2011.9844%2012.4922%2012%2013.3672C11.9688%2013.7578%2011.7578%2013.9688%2011.3672%2014H3.63281C3.24219%2013.9688%203.03125%2013.7578%203%2013.3672C3.01562%2012.4922%203.32031%2011.7578%203.91406%2011.1641C4.50781%2010.5703%205.24219%2010.2656%206.11719%2010.25ZM12%202.75C11.5781%202.76563%2011.25%202.95313%2011.0156%203.3125C10.8281%203.6875%2010.8281%204.0625%2011.0156%204.4375C11.25%204.79688%2011.5781%204.98438%2012%205C12.4219%204.98438%2012.75%204.79688%2012.9844%204.4375C13.1719%204.0625%2013.1719%203.6875%2012.9844%203.3125C12.75%202.95313%2012.4219%202.76563%2012%202.75ZM12%205.75C11.2969%205.73438%2010.7578%205.42188%2010.3828%204.8125C10.0391%204.1875%2010.0391%203.5625%2010.3828%202.9375C10.7578%202.32812%2011.2969%202.01563%2012%202C12.7031%202.01563%2013.2422%202.32812%2013.6172%202.9375C13.9609%203.5625%2013.9609%204.1875%2013.6172%204.8125C13.2422%205.42188%2012.7031%205.73438%2012%205.75ZM12.375%207.25H10.5C10.5%206.98438%2010.4688%206.73438%2010.4062%206.5H12.375C13.125%206.51562%2013.7422%206.77344%2014.2266%207.27344C14.7266%207.75781%2014.9844%208.375%2015%209.125C14.9844%209.35938%2014.8594%209.48438%2014.625%209.5C14.3906%209.48438%2014.2656%209.35938%2014.25%209.125C14.2344%208.59375%2014.0547%208.14844%2013.7109%207.78906C13.3516%207.44531%2012.9062%207.26562%2012.375%207.25ZM4.5%207.25H2.625C2.09375%207.26562%201.64844%207.44531%201.28906%207.78906C0.945312%208.14844%200.765625%208.59375%200.75%209.125C0.734375%209.35938%200.609375%209.48438%200.375%209.5C0.140625%209.48438%200.015625%209.35938%200%209.125C0.015625%208.375%200.273438%207.75781%200.773438%207.27344C1.25781%206.77344%201.875%206.51562%202.625%206.5H4.59375C4.53125%206.73438%204.5%206.98438%204.5%207.25Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Interview Type"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isDataRangeVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-wrap", "cursor-pointer")}
          tag="div"
          {...onClickDateRange}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons", "hide")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.875%202C5.10938%202.01563%205.23438%202.14062%205.25%202.375V3.5H9.75V2.375C9.76562%202.14062%209.89062%202.01563%2010.125%202C10.3594%202.01563%2010.4844%202.14062%2010.5%202.375V3.5H11.25C11.6719%203.51563%2012.0234%203.66406%2012.3047%203.94531C12.5859%204.22656%2012.7344%204.57812%2012.75%205V5.75V6.5V12.5C12.7344%2012.9219%2012.5859%2013.2734%2012.3047%2013.5547C12.0234%2013.8359%2011.6719%2013.9844%2011.25%2014H3.75C3.32812%2013.9844%202.97656%2013.8359%202.69531%2013.5547C2.41406%2013.2734%202.26562%2012.9219%202.25%2012.5V6.5V5.75V5C2.26562%204.57812%202.41406%204.22656%202.69531%203.94531C2.97656%203.66406%203.32812%203.51563%203.75%203.5H4.5V2.375C4.51562%202.14062%204.64062%202.01563%204.875%202ZM12%206.5H9.5625V8.1875H12V6.5ZM12%208.9375H9.5625V10.8125H12V8.9375ZM12%2011.5625H9.5625V13.25H11.25C11.4688%2013.25%2011.6484%2013.1797%2011.7891%2013.0391C11.9297%2012.8984%2012%2012.7188%2012%2012.5V11.5625ZM8.8125%2010.8125V8.9375H6.1875V10.8125H8.8125ZM6.1875%2011.5625V13.25H8.8125V11.5625H6.1875ZM5.4375%2010.8125V8.9375H3V10.8125H5.4375ZM3%2011.5625V12.5C3%2012.7188%203.07031%2012.8984%203.21094%2013.0391C3.35156%2013.1797%203.53125%2013.25%203.75%2013.25H5.4375V11.5625H3ZM3%208.1875H5.4375V6.5H3V8.1875ZM6.1875%208.1875H8.8125V6.5H6.1875V8.1875ZM11.25%204.25H3.75C3.53125%204.25%203.35156%204.32031%203.21094%204.46094C3.07031%204.60156%203%204.78125%203%205V5.75H12V5C12%204.78125%2011.9297%204.60156%2011.7891%204.46094C11.6484%204.32031%2011.4688%204.25%2011.25%204.25Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Date Range"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isDurationVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-wrap", "cursor-pointer")}
          tag="div"
          {...onClickDuration}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons", "hide")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%202C8.625%202.01563%209.63281%202.28906%2010.5234%202.82031C11.4297%203.35156%2012.1484%204.07031%2012.6797%204.97656C13.2109%205.86719%2013.4844%206.875%2013.5%208C13.4844%209.125%2013.2109%2010.1328%2012.6797%2011.0234C12.1484%2011.9297%2011.4297%2012.6484%2010.5234%2013.1797C9.63281%2013.7109%208.625%2013.9844%207.5%2014C6.375%2013.9844%205.36719%2013.7109%204.47656%2013.1797C3.57031%2012.6484%202.85156%2011.9297%202.32031%2011.0234C1.78906%2010.1328%201.51562%209.125%201.5%208C1.51562%206.73438%201.85938%205.60938%202.53125%204.625C2.6875%204.45312%202.85938%204.42188%203.04688%204.53125C3.23438%204.67188%203.27344%204.84375%203.16406%205.04688C2.57031%205.90625%202.26562%206.89062%202.25%208C2.26562%208.98438%202.50781%209.86719%202.97656%2010.6484C3.42969%2011.4453%204.05469%2012.0703%204.85156%2012.5234C5.63281%2012.9922%206.51562%2013.2344%207.5%2013.25C8.48438%2013.2344%209.36719%2012.9922%2010.1484%2012.5234C10.9453%2012.0703%2011.5703%2011.4453%2012.0234%2010.6484C12.4922%209.86719%2012.7344%208.98438%2012.75%208C12.7188%206.57812%2012.25%205.38281%2011.3438%204.41406C10.4219%203.44531%209.26562%202.89844%207.875%202.77344V4.625C7.85938%204.85938%207.73438%204.98438%207.5%205C7.26562%204.98438%207.14062%204.85938%207.125%204.625V2.375C7.14062%202.14062%207.26562%202.01563%207.5%202ZM5.50781%205.49219L7.75781%207.74219C7.91406%207.91406%207.91406%208.08594%207.75781%208.25781C7.58594%208.41406%207.41406%208.41406%207.24219%208.25781L4.99219%206.00781C4.83594%205.83594%204.83594%205.66406%204.99219%205.49219C5.16406%205.33594%205.33594%205.33594%205.50781%205.49219Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Duration"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isCoordinatorVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-wrap", "cursor-pointer")}
          tag="div"
          {...onClickCoordinator}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons", "hide")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2215%22%20viewbox%3D%220%200%2015%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.25%206.75C5.65625%206.75%206.03125%206.64844%206.375%206.44531C6.71875%206.24219%206.99219%205.96875%207.19531%205.625C7.39844%205.26562%207.5%204.89062%207.5%204.5C7.5%204.10938%207.39844%203.73437%207.19531%203.375C6.99219%203.03125%206.71875%202.75781%206.375%202.55469C6.03125%202.35156%205.65625%202.25%205.25%202.25C4.84375%202.25%204.46875%202.35156%204.125%202.55469C3.78125%202.75781%203.50781%203.03125%203.30469%203.375C3.10156%203.73437%203%204.10938%203%204.5C3%204.89062%203.10156%205.26562%203.30469%205.625C3.50781%205.96875%203.78125%206.24219%204.125%206.44531C4.46875%206.64844%204.84375%206.75%205.25%206.75ZM0.75%2012.75H8.22656C8.63281%2013.0469%209.04688%2013.0859%209.46875%2012.8672V12.8906C9.46875%2013.1094%209.53125%2013.3125%209.65625%2013.5H0.703125C0.5%2013.5%200.335938%2013.4297%200.210938%2013.2891C0.0703125%2013.1641%200%2013%200%2012.7969C0.03125%2011.625%200.4375%2010.6406%201.21875%209.84375C2.01562%209.0625%203%208.65625%204.17188%208.625H6.32812C6.59375%208.625%206.85938%208.64844%207.125%208.69531C7.10938%209.02344%207.20312%209.30469%207.40625%209.53906C7.0625%209.42969%206.70312%209.375%206.32812%209.375H4.17188C3.21875%209.40625%202.42188%209.73438%201.78125%2010.3594C1.125%2011%200.78125%2011.7969%200.75%2012.75ZM2.25%204.5C2.25%203.95313%202.38281%203.45312%202.64844%203C2.91406%202.54688%203.28125%202.17969%203.75%201.89844C4.21875%201.63281%204.71875%201.5%205.25%201.5C5.78125%201.5%206.28125%201.63281%206.75%201.89844C7.21875%202.17969%207.58594%202.54688%207.85156%203C8.11719%203.45312%208.25%203.95313%208.25%204.5C8.25%205.04688%208.11719%205.54688%207.85156%206C7.58594%206.45312%207.21875%206.82031%206.75%207.10156C6.28125%207.36719%205.78125%207.5%205.25%207.5C4.71875%207.5%204.21875%207.36719%203.75%207.10156C3.28125%206.82031%202.91406%206.45312%202.64844%206C2.38281%205.54688%202.25%205.04688%202.25%204.5ZM8.76562%2010.7344L9.16406%2011.4609C9.55469%2011.3203%209.91406%2011.3438%2010.2422%2011.5312C10.5547%2011.7188%2010.7578%2012.0078%2010.8516%2012.3984H11.6484C11.7422%2012.0078%2011.9531%2011.7188%2012.2812%2011.5312C12.5938%2011.3438%2012.9453%2011.3203%2013.3359%2011.4609L13.7578%2010.7344C13.4609%2010.4375%2013.3125%2010.1094%2013.3125%209.75C13.3125%209.375%2013.4609%209.03906%2013.7578%208.74219L13.3359%208.03906C12.9453%208.16406%2012.5938%208.13281%2012.2812%207.94531C11.9531%207.77344%2011.7422%207.48438%2011.6484%207.07812H10.8516C10.7578%207.48438%2010.5547%207.77344%2010.2422%207.94531C9.91406%208.13281%209.55469%208.16406%209.16406%208.03906L8.74219%208.74219C9.03906%209.03906%209.1875%209.375%209.1875%209.75C9.1875%2010.1094%209.04688%2010.4375%208.76562%2010.7344ZM9.375%2012.1875L9.32812%2012.2109C9.03125%2012.3516%208.79688%2012.2891%208.625%2012.0234L7.99219%2010.9219C7.86719%2010.6406%207.92969%2010.4141%208.17969%2010.2422C8.35156%2010.1172%208.4375%209.95312%208.4375%209.75C8.4375%209.53125%208.35156%209.36719%208.17969%209.25781C7.92969%209.07031%207.86719%208.84375%207.99219%208.57812L8.60156%207.47656C8.78906%207.21094%209.03125%207.14844%209.32812%207.28906L9.375%207.3125C9.53125%207.39062%209.69531%207.38281%209.86719%207.28906C10.0234%207.19531%2010.1094%207.05469%2010.125%206.86719V6.84375C10.1562%206.53125%2010.3203%206.35938%2010.6172%206.32812H11.8828C12.1797%206.35938%2012.3438%206.53125%2012.375%206.84375V6.86719C12.3906%207.05469%2012.4766%207.19531%2012.6328%207.28906C12.8047%207.38281%2012.9688%207.39062%2013.125%207.3125L13.1719%207.28906C13.4688%207.14844%2013.7031%207.21094%2013.875%207.47656L14.5078%208.57812C14.6328%208.84375%2014.5703%209.07031%2014.3203%209.25781C14.1484%209.36719%2014.0625%209.53125%2014.0625%209.75C14.0625%209.95312%2014.1484%2010.1172%2014.3203%2010.2422C14.5703%2010.4141%2014.6328%2010.6406%2014.5078%2010.9219L13.8984%2012.0234C13.7109%2012.2891%2013.4688%2012.3516%2013.1719%2012.2109L13.125%2012.1875C12.9688%2012.0938%2012.8047%2012.0938%2012.6328%2012.1875C12.4766%2012.2812%2012.3906%2012.4219%2012.375%2012.6094V12.6562C12.3438%2012.9531%2012.1797%2013.1172%2011.8828%2013.1484H10.6172C10.3203%2013.1172%2010.1562%2012.9531%2010.125%2012.6562V12.6094C10.1094%2012.4219%2010.0234%2012.2812%209.86719%2012.1875C9.69531%2012.0938%209.53125%2012.0938%209.375%2012.1875ZM11.25%208.4375C11.75%208.45312%2012.1328%208.67188%2012.3984%209.09375C12.6328%209.53125%2012.6328%209.96875%2012.3984%2010.4062C12.1328%2010.8281%2011.75%2011.0469%2011.25%2011.0625C10.75%2011.0469%2010.375%2010.8281%2010.125%2010.4062C9.89062%209.96875%209.89062%209.53125%2010.125%209.09375C10.375%208.67188%2010.75%208.45312%2011.25%208.4375ZM11.25%2010.3125C11.5938%2010.2812%2011.7812%2010.0938%2011.8125%209.75C11.7812%209.40625%2011.5938%209.21875%2011.25%209.1875C10.9062%209.21875%2010.7188%209.40625%2010.6875%209.75C10.7188%2010.0938%2010.9062%2010.2812%2011.25%2010.3125Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Co-ordinator"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isCustomSlot ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "all-interview-filter-copy")}
          tag="div"
        >
          {slotCustom ?? <FilterItem />}
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
