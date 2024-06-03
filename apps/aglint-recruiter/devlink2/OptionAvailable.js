"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./OptionAvailable.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-157":{"id":"e-157","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282313},"e-158":{"id":"e-158","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282314}},"actionLists":{"a-102":{"id":"a-102","title":"DayoffList Hover in","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-102-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]},{"actionItems":[{"id":"a-102-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":1,"unit":""}},{"id":"a-102-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715600286589},"a-103":{"id":"a-103","title":"DayoffList Hover out","actionItemGroups":[{"actionItems":[{"id":"a-103-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-103-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715600286589}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function OptionAvailable({
  as: _Component = _Builtin.Block,
  textTime = "09:00 AM to 09:30 PM",
  textTitle = "Personality and culture",
  slotMember,
  isBreakVisible = true,
  textBreakTime = "10 Minutes",
  isTitleVisible = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-1107")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "text-gray-600")} tag="div">
        {textTime}
      </_Builtin.Block>
      {isTitleVisible ? (
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {textTitle}
        </_Builtin.Block>
      ) : null}
      {isBreakVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1195")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1194")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2216%22%20height%3D%2217%22%20viewbox%3D%220%200%2016%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.5%200.5C2.8125%200.520833%202.97917%200.6875%203%201C3%201.52083%203.1875%201.96875%203.5625%202.34375L4.15625%202.9375C4.69792%203.52083%204.97917%204.20833%205%205C4.97917%205.3125%204.8125%205.47917%204.5%205.5C4.1875%205.47917%204.02083%205.3125%204%205C4%204.47917%203.8125%204.03125%203.4375%203.65625L2.84375%203.0625C2.30208%202.47917%202.02083%201.79167%202%201C2.02083%200.6875%202.1875%200.520833%202.5%200.5ZM1%207.5V13.5C1.02083%2014.0625%201.21875%2014.5312%201.59375%2014.9062C1.96875%2015.2812%202.4375%2015.4792%203%2015.5H9C9.5625%2015.4792%2010.0312%2015.2812%2010.4062%2014.9062C10.7812%2014.5312%2010.9792%2014.0625%2011%2013.5V7.5H1H10.5H1ZM12%207.5V12.5H12.5C13.2083%2012.4792%2013.8021%2012.2396%2014.2812%2011.7812C14.7396%2011.3021%2014.9792%2010.7083%2015%2010C14.9792%209.29167%2014.7396%208.69792%2014.2812%208.21875C13.8021%207.76042%2013.2083%207.52083%2012.5%207.5H12H12.5H12ZM12%2013.5C11.9792%2014.3542%2011.6875%2015.0625%2011.125%2015.625C10.5625%2016.1875%209.85417%2016.4792%209%2016.5H3C2.14583%2016.4792%201.4375%2016.1875%200.875%2015.625C0.3125%2015.0625%200.0208333%2014.3542%200%2013.5V7.5C0%207.20833%200.09375%206.96875%200.28125%206.78125C0.46875%206.59375%200.708333%206.5%201%206.5H11H12.5C13.5%206.52083%2014.3229%206.86458%2014.9688%207.53125C15.6354%208.17708%2015.9792%209%2016%2010C15.9792%2011%2015.6354%2011.8229%2014.9688%2012.4688C14.3229%2013.1354%2013.5%2013.4792%2012.5%2013.5H12H12.5H12ZM7%201C7%201.52083%207.1875%201.96875%207.5625%202.34375L8.15625%202.9375C8.69792%203.52083%208.97917%204.20833%209%205C8.97917%205.3125%208.8125%205.47917%208.5%205.5C8.1875%205.47917%208.02083%205.3125%208%205C8%204.47917%207.8125%204.03125%207.4375%203.65625L6.84375%203.0625C6.30208%202.47917%206.02083%201.79167%206%201C6.02083%200.6875%206.1875%200.520833%206.5%200.5C6.8125%200.520833%206.97917%200.6875%207%201Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold")}
              tag="div"
            >
              {"Break"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1194")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%200C7.125%200.015625%208.13281%200.289062%209.02344%200.820312C9.92969%201.35156%2010.6484%202.07031%2011.1797%202.97656C11.7109%203.86719%2011.9844%204.875%2012%206C11.9844%207.125%2011.7109%208.13281%2011.1797%209.02344C10.6484%209.92969%209.92969%2010.6484%209.02344%2011.1797C8.13281%2011.7109%207.125%2011.9844%206%2012C4.875%2011.9844%203.86719%2011.7109%202.97656%2011.1797C2.07031%2010.6484%201.35156%209.92969%200.820312%209.02344C0.289062%208.13281%200.015625%207.125%200%206C0%205.15625%200.164062%204.36719%200.492188%203.63281C0.804688%202.89844%201.24219%202.25781%201.80469%201.71094C1.96094%201.57031%202.14062%201.5%202.34375%201.5C2.53125%201.5%202.70312%201.57812%202.85938%201.73438C3%201.89063%203.07031%202.0625%203.07031%202.25C3.07031%202.45313%203%202.63281%202.85938%202.78906C1.98438%203.63281%201.53125%204.70312%201.5%206C1.53125%207.28125%201.96875%208.34375%202.8125%209.1875C3.65625%2010.0312%204.71875%2010.4688%206%2010.5C7.28125%2010.4688%208.34375%2010.0312%209.1875%209.1875C10.0312%208.34375%2010.4688%207.28125%2010.5%206C10.4844%204.85938%2010.125%203.88281%209.42188%203.07031C8.73438%202.27344%207.84375%201.77344%206.75%201.57031V2.25C6.75%202.46875%206.67969%202.64844%206.53906%202.78906C6.39844%202.92969%206.21875%203%206%203C5.78125%203%205.60156%202.92969%205.46094%202.78906C5.32031%202.64844%205.25%202.46875%205.25%202.25V0.75C5.25%200.53125%205.32031%200.351562%205.46094%200.210938C5.60156%200.0703125%205.78125%200%206%200ZM4.52344%203.72656L6.39844%205.60156C6.61719%205.86719%206.61719%206.13281%206.39844%206.39844C6.13281%206.61719%205.86719%206.61719%205.60156%206.39844L3.72656%204.52344C3.50781%204.25781%203.50781%203.99219%203.72656%203.72656C3.99219%203.50781%204.25781%203.50781%204.52344%203.72656Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{textBreakTime}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isTitleVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1170")}
          tag="div"
        >
          {slotMember}
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
