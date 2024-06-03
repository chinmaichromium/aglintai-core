"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PanelBlock.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-157":{"id":"e-157","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282313},"e-158":{"id":"e-158","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282314}},"actionLists":{"a-102":{"id":"a-102","title":"DayoffList Hover in","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-102-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]},{"actionItems":[{"id":"a-102-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":1,"unit":""}},{"id":"a-102-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715600286589},"a-103":{"id":"a-103","title":"DayoffList Hover out","actionItemGroups":[{"actionItems":[{"id":"a-103-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-103-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715600286589}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PanelBlock({
  as: _Component = _Builtin.Block,
  textPanelName = "Company Indroduction",
  slotPanelIcon,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-1674")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1689")}
        tag="div"
      >
        {slotPanelIcon ?? (
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5%204H19.5C20.2083%204.02083%2020.8021%204.26042%2021.2812%204.71875C21.7396%205.19792%2021.9792%205.79167%2022%206.5V17.5C21.9792%2018.2083%2021.7396%2018.8021%2021.2812%2019.2812C20.8021%2019.7396%2020.2083%2019.9792%2019.5%2020H4.5C3.79167%2019.9792%203.19792%2019.7396%202.71875%2019.2812C2.26042%2018.8021%202.02083%2018.2083%202%2017.5V6.5C2.02083%205.79167%202.26042%205.19792%202.71875%204.71875C3.19792%204.26042%203.79167%204.02083%204.5%204ZM3%206.5V17.5C3.02083%2017.9167%203.16667%2018.2708%203.4375%2018.5625C3.72917%2018.8333%204.08333%2018.9792%204.5%2019H19.5C19.9167%2018.9792%2020.2708%2018.8333%2020.5625%2018.5625C20.8333%2018.2708%2020.9792%2017.9167%2021%2017.5V6.5C20.9792%206.08333%2020.8333%205.72917%2020.5625%205.4375C20.2708%205.16667%2019.9167%205.02083%2019.5%205H4.5C4.08333%205.02083%203.72917%205.16667%203.4375%205.4375C3.16667%205.72917%203.02083%206.08333%203%206.5ZM11%2010C11%2010.2917%2011.0938%2010.5312%2011.2812%2010.7188C11.4688%2010.9062%2011.7083%2011%2012%2011C12.2917%2011%2012.5312%2010.9062%2012.7188%2010.7188C12.9062%2010.5312%2013%2010.2917%2013%2010C13%209.70833%2012.9062%209.46875%2012.7188%209.28125C12.5312%209.09375%2012.2917%209%2012%209C11.7083%209%2011.4688%209.09375%2011.2812%209.28125C11.0938%209.46875%2011%209.70833%2011%2010ZM14%2010C13.9792%2010.75%2013.6458%2011.3229%2013%2011.7188C12.3333%2012.0938%2011.6667%2012.0938%2011%2011.7188C10.3542%2011.3229%2010.0208%2010.75%2010%2010C10.0208%209.25%2010.3542%208.67708%2011%208.28125C11.6667%207.90625%2012.3333%207.90625%2013%208.28125C13.6458%208.67708%2013.9792%209.25%2014%2010ZM13.25%2014H10.75C10.1042%2014.0417%209.69792%2014.375%209.53125%2015H14.4688C14.3021%2014.375%2013.8958%2014.0417%2013.25%2014ZM10.75%2013H12H13.25C13.8958%2013.0208%2014.4271%2013.2396%2014.8438%2013.6562C15.2604%2014.0729%2015.4792%2014.6042%2015.5%2015.25C15.4583%2015.7083%2015.2083%2015.9583%2014.75%2016H9.25C8.79167%2015.9583%208.54167%2015.7083%208.5%2015.25C8.52083%2014.6042%208.73958%2014.0729%209.15625%2013.6562C9.57292%2013.2396%2010.1042%2013.0208%2010.75%2013ZM7%209.5C7.02083%209.8125%207.1875%209.97917%207.5%2010C7.79167%209.97917%207.95833%209.8125%208%209.5C7.95833%209.1875%207.79167%209.02083%207.5%209C7.1875%209.02083%207.02083%209.1875%207%209.5ZM9%209.5C8.97917%2010.0625%208.72917%2010.5%208.25%2010.8125C7.75%2011.0625%207.25%2011.0625%206.75%2010.8125C6.27083%2010.5%206.02083%2010.0625%206%209.5C6.02083%208.9375%206.27083%208.5%206.75%208.1875C7.25%207.9375%207.75%207.9375%208.25%208.1875C8.72917%208.5%208.97917%208.9375%209%209.5ZM6%2013.75V14C5.97917%2014.3125%205.8125%2014.4792%205.5%2014.5C5.1875%2014.4792%205.02083%2014.3125%205%2014V13.75C5.02083%2013.25%205.1875%2012.8333%205.5%2012.5C5.83333%2012.1875%206.25%2012.0208%206.75%2012H8.5C8.8125%2012.0208%208.97917%2012.1875%209%2012.5C8.97917%2012.8125%208.8125%2012.9792%208.5%2013H6.75C6.29167%2013.0417%206.04167%2013.2917%206%2013.75ZM16.5%209C16.2083%209.02083%2016.0417%209.1875%2016%209.5C16.0417%209.8125%2016.2083%209.97917%2016.5%2010C16.8125%209.97917%2016.9792%209.8125%2017%209.5C16.9792%209.1875%2016.8125%209.02083%2016.5%209ZM16.5%2011C15.9375%2010.9792%2015.5104%2010.7292%2015.2188%2010.25C14.9479%209.75%2014.9479%209.25%2015.2188%208.75C15.5104%208.27083%2015.9375%208.02083%2016.5%208C17.0625%208.02083%2017.5%208.27083%2017.8125%208.75C18.0833%209.25%2018.0833%209.75%2017.8125%2010.25C17.5%2010.7292%2017.0625%2010.9792%2016.5%2011ZM17.25%2013H15.5C15.1875%2012.9792%2015.0208%2012.8125%2015%2012.5C15.0208%2012.1875%2015.1875%2012.0208%2015.5%2012H17.25C17.75%2012.0208%2018.1667%2012.1875%2018.5%2012.5C18.8125%2012.8333%2018.9792%2013.25%2019%2013.75V14C18.9792%2014.3125%2018.8125%2014.4792%2018.5%2014.5C18.1875%2014.4792%2018.0208%2014.3125%2018%2014V13.75C17.9583%2013.2917%2017.7083%2013.0417%2017.25%2013Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        )}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
        {textPanelName}
      </_Builtin.Block>
    </_Component>
  );
}
