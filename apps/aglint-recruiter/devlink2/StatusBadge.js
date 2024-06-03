"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./StatusBadge.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-157":{"id":"e-157","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282313},"e-158":{"id":"e-158","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282314}},"actionLists":{"a-102":{"id":"a-102","title":"DayoffList Hover in","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-102-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]},{"actionItems":[{"id":"a-102-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":1,"unit":""}},{"id":"a-102-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715600286589},"a-103":{"id":"a-103","title":"DayoffList Hover out","actionItemGroups":[{"actionItems":[{"id":"a-103-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-103-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715600286589}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function StatusBadge({
  as: _Component = _Builtin.Block,
  isCompletedVisible = false,
  isConfirmedVisible = true,
  isNotScheduledVisible = false,
  isInProgressVisible = false,
  isCancelledVisible = false,
  isWaitingVisible = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-1273")} tag="div">
      {isCompletedVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1272")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.25%202.375V3.5H9.75V2.375C9.76562%202.14062%209.89062%202.01563%2010.125%202C10.3594%202.01563%2010.4844%202.14062%2010.5%202.375V3.5H11.25C11.6719%203.51563%2012.0234%203.66406%2012.3047%203.94531C12.5859%204.22656%2012.7344%204.57812%2012.75%205V5.75V6.5V12.5C12.7344%2012.9219%2012.5859%2013.2734%2012.3047%2013.5547C12.0234%2013.8359%2011.6719%2013.9844%2011.25%2014H3.75C3.32812%2013.9844%202.97656%2013.8359%202.69531%2013.5547C2.41406%2013.2734%202.26562%2012.9219%202.25%2012.5V6.5V5.75V5C2.26562%204.57812%202.41406%204.22656%202.69531%203.94531C2.97656%203.66406%203.32812%203.51563%203.75%203.5H4.5V2.375C4.51562%202.14062%204.64062%202.01563%204.875%202C5.10938%202.01563%205.23438%202.14062%205.25%202.375ZM3%206.5V12.5C3%2012.7188%203.07031%2012.8984%203.21094%2013.0391C3.35156%2013.1797%203.53125%2013.25%203.75%2013.25H11.25C11.4688%2013.25%2011.6484%2013.1797%2011.7891%2013.0391C11.9297%2012.8984%2012%2012.7188%2012%2012.5V6.5H3ZM3.75%204.25C3.53125%204.25%203.35156%204.32031%203.21094%204.46094C3.07031%204.60156%203%204.78125%203%205V5.75H12V5C12%204.78125%2011.9297%204.60156%2011.7891%204.46094C11.6484%204.32031%2011.4688%204.25%2011.25%204.25H3.75ZM10.0078%208.63281L7.38281%2011.2578C7.21094%2011.4141%207.03906%2011.4141%206.86719%2011.2578L5.36719%209.75781C5.21094%209.58594%205.21094%209.41406%205.36719%209.24219C5.53906%209.08594%205.71094%209.08594%205.88281%209.24219L7.125%2010.4609L9.49219%208.11719C9.66406%207.96094%209.83594%207.96094%2010.0078%208.11719C10.1641%208.28906%2010.1641%208.46094%2010.0078%208.63281Z%22%20fill%3D%22%23228F67%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-green-500")}
            tag="div"
          >
            {"Completed"}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isConfirmedVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1272", "confirmed")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.875%202C5.10938%202.01563%205.23438%202.14062%205.25%202.375V3.5H9.75V2.375C9.76562%202.14062%209.89062%202.01563%2010.125%202C10.3594%202.01563%2010.4844%202.14062%2010.5%202.375V3.5H11.25C11.6719%203.51563%2012.0234%203.66406%2012.3047%203.94531C12.5859%204.22656%2012.7344%204.57812%2012.75%205V5.75V6.5V12.5C12.7344%2012.9219%2012.5859%2013.2734%2012.3047%2013.5547C12.0234%2013.8359%2011.6719%2013.9844%2011.25%2014H3.75C3.32812%2013.9844%202.97656%2013.8359%202.69531%2013.5547C2.41406%2013.2734%202.26562%2012.9219%202.25%2012.5V6.5V5.75V5C2.26562%204.57812%202.41406%204.22656%202.69531%203.94531C2.97656%203.66406%203.32812%203.51563%203.75%203.5H4.5V2.375C4.51562%202.14062%204.64062%202.01563%204.875%202ZM12%206.5H3V12.5C3%2012.7188%203.07031%2012.8984%203.21094%2013.0391C3.35156%2013.1797%203.53125%2013.25%203.75%2013.25H11.25C11.4688%2013.25%2011.6484%2013.1797%2011.7891%2013.0391C11.9297%2012.8984%2012%2012.7188%2012%2012.5V6.5ZM11.25%204.25H3.75C3.53125%204.25%203.35156%204.32031%203.21094%204.46094C3.07031%204.60156%203%204.78125%203%205V5.75H12V5C12%204.78125%2011.9297%204.60156%2011.7891%204.46094C11.6484%204.32031%2011.4688%204.25%2011.25%204.25Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Confirmed"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isNotScheduledVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1272", "not-schedule")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.94531%207.4375C1.69531%207.40625%201.57031%207.26562%201.57031%207.01562C1.74219%206.07812%202.09375%205.24219%202.625%204.50781C2.79688%204.32031%202.97656%204.30469%203.16406%204.46094C3.30469%204.61719%203.32031%204.78906%203.21094%204.97656C2.75781%205.60156%202.46094%206.3125%202.32031%207.10938C2.27344%207.3125%202.14844%207.42188%201.94531%207.4375ZM4.47656%203.71094C4.28906%203.82031%204.11719%203.80469%203.96094%203.66406C3.80469%203.47656%203.82031%203.29687%204.00781%203.125C4.74219%202.59375%205.58594%202.24219%206.53906%202.07031C6.77344%202.07031%206.90625%202.19531%206.9375%202.44531C6.92188%202.64844%206.8125%202.77344%206.60938%202.82031C5.8125%202.96094%205.10156%203.25781%204.47656%203.71094ZM8.0625%2013.5547C8.07812%2013.3516%208.1875%2013.2266%208.39062%2013.1797C9.1875%2013.0391%209.89844%2012.7422%2010.5234%2012.2891C10.6953%2012.1797%2010.8672%2012.1953%2011.0391%2012.3359C11.1953%2012.5234%2011.1797%2012.7031%2010.9922%2012.875C10.2578%2013.4062%209.42188%2013.7578%208.48438%2013.9297C8.23438%2013.9297%208.09375%2013.8047%208.0625%2013.5547ZM11.7891%2011.0234C12.2422%2010.3984%2012.5391%209.6875%2012.6797%208.89062C12.7266%208.6875%2012.8516%208.57812%2013.0547%208.5625C13.3047%208.59375%2013.4297%208.73438%2013.4297%208.98438C13.2578%209.92188%2012.9062%2010.7578%2012.375%2011.4922C12.2031%2011.6797%2012.0234%2011.6953%2011.8359%2011.5391C11.6953%2011.3828%2011.6797%2011.2109%2011.7891%2011.0234ZM3.96094%2012.3359C4.11719%2012.1953%204.28906%2012.1797%204.47656%2012.2891C5.10156%2012.7422%205.8125%2013.0391%206.60938%2013.1797C6.8125%2013.2266%206.92188%2013.3516%206.9375%2013.5547C6.90625%2013.8047%206.76562%2013.9297%206.51562%2013.9297C5.57812%2013.7578%204.74219%2013.4062%204.00781%2012.875C3.82031%2012.7031%203.80469%2012.5234%203.96094%2012.3359ZM2.625%2011.4922C2.09375%2010.7578%201.74219%209.92188%201.57031%208.98438C1.57031%208.73438%201.69531%208.59375%201.94531%208.5625C2.14844%208.57812%202.27344%208.6875%202.32031%208.89062C2.46094%209.6875%202.75781%2010.3984%203.21094%2011.0234C3.32031%2011.2109%203.30469%2011.3828%203.16406%2011.5391C2.97656%2011.6953%202.79688%2011.6797%202.625%2011.4922ZM11.0391%203.66406C10.8828%203.80469%2010.7109%203.82031%2010.5234%203.71094C9.89844%203.25781%209.1875%202.96094%208.39062%202.82031C8.1875%202.77344%208.07812%202.64844%208.0625%202.44531C8.09375%202.19531%208.23438%202.07031%208.48438%202.07031C9.42188%202.24219%2010.2578%202.59375%2010.9922%203.125C11.1797%203.29687%2011.1953%203.47656%2011.0391%203.66406ZM11.7891%204.97656C11.6797%204.78906%2011.6953%204.61719%2011.8359%204.46094C12.0234%204.30469%2012.2031%204.32031%2012.375%204.50781C12.9062%205.24219%2013.2578%206.07812%2013.4297%207.01562C13.4297%207.26562%2013.3047%207.40625%2013.0547%207.4375C12.8516%207.42188%2012.7266%207.3125%2012.6797%207.10938C12.5391%206.3125%2012.2422%205.60156%2011.7891%204.97656Z%22%20fill%3D%22%2387929D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Not Scheduled"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isInProgressVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1272", "in-progress")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.25%202.375V3.5H9.75V2.375C9.76562%202.14062%209.89062%202.01563%2010.125%202C10.3594%202.01563%2010.4844%202.14062%2010.5%202.375V3.5H11.25C11.6719%203.51563%2012.0234%203.66406%2012.3047%203.94531C12.5859%204.22656%2012.7344%204.57812%2012.75%205V5.75V6.5V12.5C12.7344%2012.9219%2012.5859%2013.2734%2012.3047%2013.5547C12.0234%2013.8359%2011.6719%2013.9844%2011.25%2014H3.75C3.32812%2013.9844%202.97656%2013.8359%202.69531%2013.5547C2.41406%2013.2734%202.26562%2012.9219%202.25%2012.5V6.5V5.75V5C2.26562%204.57812%202.41406%204.22656%202.69531%203.94531C2.97656%203.66406%203.32812%203.51563%203.75%203.5H4.5V2.375C4.51562%202.14062%204.64062%202.01563%204.875%202C5.10938%202.01563%205.23438%202.14062%205.25%202.375ZM3%206.5V12.5C3%2012.7188%203.07031%2012.8984%203.21094%2013.0391C3.35156%2013.1797%203.53125%2013.25%203.75%2013.25H11.25C11.4688%2013.25%2011.6484%2013.1797%2011.7891%2013.0391C11.9297%2012.8984%2012%2012.7188%2012%2012.5V6.5H3ZM3.75%204.25C3.53125%204.25%203.35156%204.32031%203.21094%204.46094C3.07031%204.60156%203%204.78125%203%205V5.75H12V5C12%204.78125%2011.9297%204.60156%2011.7891%204.46094C11.6484%204.32031%2011.4688%204.25%2011.25%204.25H3.75ZM4.6875%208C4.57812%208.01562%204.51562%208.07812%204.5%208.1875V10.0625C4.51562%2010.1719%204.57812%2010.2344%204.6875%2010.25H6.5625C6.67188%2010.2344%206.73438%2010.1719%206.75%2010.0625V8.1875C6.73438%208.07812%206.67188%208.01562%206.5625%208H4.6875ZM3.75%208.1875C3.75%207.92188%203.84375%207.70312%204.03125%207.53125C4.20312%207.34375%204.42188%207.25%204.6875%207.25H6.5625C6.82812%207.25%207.04688%207.34375%207.21875%207.53125C7.40625%207.70312%207.5%207.92188%207.5%208.1875V10.0625C7.5%2010.3281%207.40625%2010.5469%207.21875%2010.7188C7.04688%2010.9062%206.82812%2011%206.5625%2011H4.6875C4.42188%2011%204.20312%2010.9062%204.03125%2010.7188C3.84375%2010.5469%203.75%2010.3281%203.75%2010.0625V8.1875Z%22%20fill%3D%22%2317494D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"In Progress"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isCancelledVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1272", "cancelled")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.25%202.375V3.5H9.75V2.375C9.76562%202.14062%209.89062%202.01563%2010.125%202C10.3594%202.01563%2010.4844%202.14062%2010.5%202.375V3.5H11.25C11.6719%203.51563%2012.0234%203.66406%2012.3047%203.94531C12.5859%204.22656%2012.7344%204.57812%2012.75%205V5.75V6.5V12.5C12.7344%2012.9219%2012.5859%2013.2734%2012.3047%2013.5547C12.0234%2013.8359%2011.6719%2013.9844%2011.25%2014H3.75C3.32812%2013.9844%202.97656%2013.8359%202.69531%2013.5547C2.41406%2013.2734%202.26562%2012.9219%202.25%2012.5V6.5V5.75V5C2.26562%204.57812%202.41406%204.22656%202.69531%203.94531C2.97656%203.66406%203.32812%203.51563%203.75%203.5H4.5V2.375C4.51562%202.14062%204.64062%202.01563%204.875%202C5.10938%202.01563%205.23438%202.14062%205.25%202.375ZM3%206.5V12.5C3%2012.7188%203.07031%2012.8984%203.21094%2013.0391C3.35156%2013.1797%203.53125%2013.25%203.75%2013.25H11.25C11.4688%2013.25%2011.6484%2013.1797%2011.7891%2013.0391C11.9297%2012.8984%2012%2012.7188%2012%2012.5V6.5H3ZM3.75%204.25C3.53125%204.25%203.35156%204.32031%203.21094%204.46094C3.07031%204.60156%203%204.78125%203%205V5.75H12V5C12%204.78125%2011.9297%204.60156%2011.7891%204.46094C11.6484%204.32031%2011.4688%204.25%2011.25%204.25H3.75ZM9.25781%208.63281L8.03906%209.875L9.25781%2011.1172C9.41406%2011.2891%209.41406%2011.4609%209.25781%2011.6328C9.08594%2011.7891%208.91406%2011.7891%208.74219%2011.6328L7.5%2010.4141L6.25781%2011.6328C6.08594%2011.7891%205.91406%2011.7891%205.74219%2011.6328C5.58594%2011.4609%205.58594%2011.2891%205.74219%2011.1172L6.96094%209.875L5.74219%208.63281C5.58594%208.46094%205.58594%208.28906%205.74219%208.11719C5.91406%207.96094%206.08594%207.96094%206.25781%208.11719L7.5%209.33594L8.74219%208.11719C8.91406%207.96094%209.08594%207.96094%209.25781%208.11719C9.41406%208.28906%209.41406%208.46094%209.25781%208.63281Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Cancelled"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isWaitingVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1272", "waiting")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewbox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.875%203C5.10938%203.01563%205.23438%203.14062%205.25%203.375V4.5H9.75V3.375C9.76562%203.14062%209.89062%203.01563%2010.125%203C10.3594%203.01563%2010.4844%203.14062%2010.5%203.375V4.5H11.25C11.6719%204.51562%2012.0234%204.66406%2012.3047%204.94531C12.5859%205.22656%2012.7344%205.57812%2012.75%206V6.75V7.5V7.52344C12.625%207.50781%2012.5%207.5%2012.375%207.5C12.25%207.5%2012.125%207.50781%2012%207.52344V7.5H3V13.5C3%2013.7188%203.07031%2013.8984%203.21094%2014.0391C3.35156%2014.1797%203.53125%2014.25%203.75%2014.25H9.1875C9.42188%2014.5312%209.69531%2014.7812%2010.0078%2015H3.75C3.32812%2014.9844%202.97656%2014.8359%202.69531%2014.5547C2.41406%2014.2734%202.26562%2013.9219%202.25%2013.5V7.5V6.75V6C2.26562%205.57812%202.41406%205.22656%202.69531%204.94531C2.97656%204.66406%203.32812%204.51562%203.75%204.5H4.5V3.375C4.51562%203.14062%204.64062%203.01563%204.875%203ZM11.25%205.25H3.75C3.53125%205.25%203.35156%205.32031%203.21094%205.46094C3.07031%205.60156%203%205.78125%203%206V6.75H12V6C12%205.78125%2011.9297%205.60156%2011.7891%205.46094C11.6484%205.32031%2011.4688%205.25%2011.25%205.25ZM12.375%2014.25C12.8438%2014.25%2013.2812%2014.1328%2013.6875%2013.8984C14.0938%2013.6641%2014.4141%2013.3438%2014.6484%2012.9375C14.8828%2012.5312%2015%2012.0938%2015%2011.625C15%2011.1562%2014.8828%2010.7188%2014.6484%2010.3125C14.4141%209.90625%2014.0938%209.58594%2013.6875%209.35156C13.2812%209.11719%2012.8438%209%2012.375%209C11.9062%209%2011.4688%209.11719%2011.0625%209.35156C10.6562%209.58594%2010.3359%209.90625%2010.1016%2010.3125C9.86719%2010.7188%209.75%2011.1562%209.75%2011.625C9.75%2012.0938%209.86719%2012.5312%2010.1016%2012.9375C10.3359%2013.3438%2010.6562%2013.6641%2011.0625%2013.8984C11.4688%2014.1328%2011.9062%2014.25%2012.375%2014.25ZM12.375%208.25C12.9844%208.25%2013.5469%208.39844%2014.0625%208.69531C14.5781%208.99219%2014.9922%209.40625%2015.3047%209.9375C15.6016%2010.4688%2015.75%2011.0312%2015.75%2011.625C15.75%2012.2188%2015.6016%2012.7812%2015.3047%2013.3125C14.9922%2013.8438%2014.5781%2014.2578%2014.0625%2014.5547C13.5469%2014.8516%2012.9844%2015%2012.375%2015C11.7656%2015%2011.2031%2014.8516%2010.6875%2014.5547C10.1719%2014.2578%209.75781%2013.8438%209.44531%2013.3125C9.14844%2012.7812%209%2012.2188%209%2011.625C9%2011.0312%209.14844%2010.4688%209.44531%209.9375C9.75781%209.40625%2010.1719%208.99219%2010.6875%208.69531C11.2031%208.39844%2011.7656%208.25%2012.375%208.25ZM12.375%209.75C12.6094%209.76562%2012.7344%209.89062%2012.75%2010.125V11.25H13.5C13.7344%2011.2656%2013.8594%2011.3906%2013.875%2011.625C13.8594%2011.8594%2013.7344%2011.9844%2013.5%2012H12.375C12.1406%2011.9844%2012.0156%2011.8594%2012%2011.625V10.125C12.0156%209.89062%2012.1406%209.76562%2012.375%209.75Z%22%20fill%3D%22%23ED8F1C%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Unconfirmed"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
