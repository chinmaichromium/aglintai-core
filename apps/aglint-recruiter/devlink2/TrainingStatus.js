"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./TrainingStatus.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-157":{"id":"e-157","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282313},"e-158":{"id":"e-158","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282314}},"actionLists":{"a-102":{"id":"a-102","title":"DayoffList Hover in","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-102-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]},{"actionItems":[{"id":"a-102-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":1,"unit":""}},{"id":"a-102-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715600286589},"a-103":{"id":"a-103","title":"DayoffList Hover out","actionItemGroups":[{"actionItems":[{"id":"a-103-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-103-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715600286589}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TrainingStatus({
  as: _Component = _Builtin.Block,
  isShadow = true,
  isReverseShadow = false,
  isCompletedVisible = true,
  isPendingApprovalVisible = false,
  isNotCompletedVisible = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-1672")} tag="div">
      {isCompletedVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1671")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            {isShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.285714%22%20y%3D%220.285714%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22white%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%20stroke-dasharray%3D%221.29%201.29%22%2F%3E%0A%3Cpath%20d%3D%22M7.01953%2010.666C5.47656%2010.666%204.48047%209.85547%204.37793%208.70801L4.37305%208.6543H5.25195L5.25684%208.70801C5.32031%209.41113%206.05273%209.85547%207.06836%209.85547C8.02539%209.85547%208.72363%209.3623%208.72363%208.64453V8.63965C8.72363%208.05371%208.31836%207.65332%207.35156%207.43848L6.57031%207.26758C5.15918%206.95508%204.54883%206.30566%204.54883%205.28516V5.28027C4.55371%204.11328%205.57422%203.28809%207.0293%203.28809C8.43555%203.28809%209.41699%204.11816%209.49023%205.16797L9.49512%205.23633H8.61621L8.60645%205.17285C8.50879%204.55273%207.92285%204.09375%207.00488%204.09863C6.12598%204.10352%205.44727%204.51855%205.44727%205.25586V5.26074C5.44727%205.82227%205.83301%206.20312%206.79004%206.41309L7.57129%206.58887C9.04102%206.91602%209.62207%207.50684%209.62207%208.52246V8.52734C9.62207%209.8457%208.5918%2010.666%207.01953%2010.666Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
            {isReverseShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.285714%22%20y%3D%220.285714%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22white%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%2F%3E%0A%3Cpath%20d%3D%22M4.63184%2010.5V3.4541H7.32227C8.67969%203.4541%209.56836%204.28418%209.56836%205.54883V5.55859C9.56836%206.53516%209.03613%207.29688%208.15234%207.5752L9.7832%2010.5H8.75293L7.24414%207.71191H5.51074V10.5H4.63184ZM5.51074%206.93066H7.24414C8.14746%206.93066%208.66016%206.44727%208.66016%205.58789V5.57812C8.66016%204.73828%208.11328%204.23535%207.20508%204.23535H5.51074V6.93066Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block tag="div">{"Completed"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isPendingApprovalVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1671", "pending")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            {isReverseShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2218%22%20height%3D%2217%22%20viewbox%3D%220%200%2018%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222.28571%22%20y%3D%222.28571%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22%23ED8F1C%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%2F%3E%0A%3Cpath%20d%3D%22M6.63184%2012.5V5.4541H9.32227C10.6797%205.4541%2011.5684%206.28418%2011.5684%207.54883V7.55859C11.5684%208.53516%2011.0361%209.29688%2010.1523%209.5752L11.7832%2012.5H10.7529L9.24414%209.71191H7.51074V12.5H6.63184ZM7.51074%208.93066H9.24414C10.1475%208.93066%2010.6602%208.44727%2010.6602%207.58789V7.57812C10.6602%206.73828%2010.1133%206.23535%209.20508%206.23535H7.51074V8.93066Z%22%20fill%3D%22%23ED8F1C%22%2F%3E%0A%3Crect%20x%3D%2210%22%20y%3D%229%22%20width%3D%228%22%20height%3D%228%22%20rx%3D%224%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M14%2017C13.2708%2016.9896%2012.6042%2016.8125%2012%2016.4688C11.3958%2016.1146%2010.9062%2015.625%2010.5312%2015C10.1771%2014.3646%2010%2013.6979%2010%2013C10%2012.3021%2010.1771%2011.6354%2010.5312%2011C10.9062%2010.375%2011.3958%209.88542%2012%209.53125C12.6042%209.1875%2013.2708%209.01042%2014%209C14.7292%209.01042%2015.3958%209.1875%2016%209.53125C16.6042%209.88542%2017.0938%2010.375%2017.4688%2011C17.8229%2011.6354%2018%2012.3021%2018%2013C18%2013.6979%2017.8229%2014.3646%2017.4688%2015C17.0938%2015.625%2016.6042%2016.1146%2016%2016.4688C15.3958%2016.8125%2014.7292%2016.9896%2014%2017ZM14.375%2010.875C14.3542%2010.6458%2014.2292%2010.5208%2014%2010.5C13.7708%2010.5208%2013.6458%2010.6458%2013.625%2010.875V12.625H12.375C12.1458%2012.6458%2012.0208%2012.7708%2012%2013C12.0208%2013.2292%2012.1458%2013.3542%2012.375%2013.375H14C14.2292%2013.3542%2014.3542%2013.2292%2014.375%2013V10.875Z%22%20fill%3D%22%23ED8F1C%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
            {isShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2218%22%20height%3D%2217%22%20viewbox%3D%220%200%2018%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222.28571%22%20y%3D%222.28571%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22%23ED8F1C%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%20stroke-dasharray%3D%221.29%201.29%22%2F%3E%0A%3Cpath%20d%3D%22M9.01953%2012.666C7.47656%2012.666%206.48047%2011.8555%206.37793%2010.708L6.37305%2010.6543H7.25195L7.25684%2010.708C7.32031%2011.4111%208.05273%2011.8555%209.06836%2011.8555C10.0254%2011.8555%2010.7236%2011.3623%2010.7236%2010.6445V10.6396C10.7236%2010.0537%2010.3184%209.65332%209.35156%209.43848L8.57031%209.26758C7.15918%208.95508%206.54883%208.30566%206.54883%207.28516V7.28027C6.55371%206.11328%207.57422%205.28809%209.0293%205.28809C10.4355%205.28809%2011.417%206.11816%2011.4902%207.16797L11.4951%207.23633H10.6162L10.6064%207.17285C10.5088%206.55273%209.92285%206.09375%209.00488%206.09863C8.12598%206.10352%207.44727%206.51855%207.44727%207.25586V7.26074C7.44727%207.82227%207.83301%208.20312%208.79004%208.41309L9.57129%208.58887C11.041%208.91602%2011.6221%209.50684%2011.6221%2010.5225V10.5273C11.6221%2011.8457%2010.5918%2012.666%209.01953%2012.666Z%22%20fill%3D%22%23ED8F1C%22%2F%3E%0A%3Crect%20x%3D%2210%22%20y%3D%229%22%20width%3D%228%22%20height%3D%228%22%20rx%3D%224%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M14%2017C13.2708%2016.9896%2012.6042%2016.8125%2012%2016.4688C11.3958%2016.1146%2010.9062%2015.625%2010.5312%2015C10.1771%2014.3646%2010%2013.6979%2010%2013C10%2012.3021%2010.1771%2011.6354%2010.5312%2011C10.9062%2010.375%2011.3958%209.88542%2012%209.53125C12.6042%209.1875%2013.2708%209.01042%2014%209C14.7292%209.01042%2015.3958%209.1875%2016%209.53125C16.6042%209.88542%2017.0938%2010.375%2017.4688%2011C17.8229%2011.6354%2018%2012.3021%2018%2013C18%2013.6979%2017.8229%2014.3646%2017.4688%2015C17.0938%2015.625%2016.6042%2016.1146%2016%2016.4688C15.3958%2016.8125%2014.7292%2016.9896%2014%2017ZM14.375%2010.875C14.3542%2010.6458%2014.2292%2010.5208%2014%2010.5C13.7708%2010.5208%2013.6458%2010.6458%2013.625%2010.875V12.625H12.375C12.1458%2012.6458%2012.0208%2012.7708%2012%2013C12.0208%2013.2292%2012.1458%2013.3542%2012.375%2013.375H14C14.2292%2013.3542%2014.3542%2013.2292%2014.375%2013V10.875Z%22%20fill%3D%22%23ED8F1C%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block tag="div">{"Pending Approval"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isNotCompletedVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1671", "not-schedule")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            {isShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.285714%22%20y%3D%220.285714%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22%2368737D%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%20stroke-dasharray%3D%221.29%201.29%22%2F%3E%0A%3Cpath%20d%3D%22M7.01953%2010.666C5.47656%2010.666%204.48047%209.85547%204.37793%208.70801L4.37305%208.6543H5.25195L5.25684%208.70801C5.32031%209.41113%206.05273%209.85547%207.06836%209.85547C8.02539%209.85547%208.72363%209.3623%208.72363%208.64453V8.63965C8.72363%208.05371%208.31836%207.65332%207.35156%207.43848L6.57031%207.26758C5.15918%206.95508%204.54883%206.30566%204.54883%205.28516V5.28027C4.55371%204.11328%205.57422%203.28809%207.0293%203.28809C8.43555%203.28809%209.41699%204.11816%209.49023%205.16797L9.49512%205.23633H8.61621L8.60645%205.17285C8.50879%204.55273%207.92285%204.09375%207.00488%204.09863C6.12598%204.10352%205.44727%204.51855%205.44727%205.25586V5.26074C5.44727%205.82227%205.83301%206.20312%206.79004%206.41309L7.57129%206.58887C9.04102%206.91602%209.62207%207.50684%209.62207%208.52246V8.52734C9.62207%209.8457%208.5918%2010.666%207.01953%2010.666Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
            {isReverseShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.285714%22%20y%3D%220.285714%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22%2368737D%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%2F%3E%0A%3Cpath%20d%3D%22M4.63184%2010.5V3.4541H7.32227C8.67969%203.4541%209.56836%204.28418%209.56836%205.54883V5.55859C9.56836%206.53516%209.03613%207.29688%208.15234%207.5752L9.7832%2010.5H8.75293L7.24414%207.71191H5.51074V10.5H4.63184ZM5.51074%206.93066H7.24414C8.14746%206.93066%208.66016%206.44727%208.66016%205.58789V5.57812C8.66016%204.73828%208.11328%204.23535%207.20508%204.23535H5.51074V6.93066Z%22%20fill%3D%22%23467B7C%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block tag="div">{"Not Completed"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
