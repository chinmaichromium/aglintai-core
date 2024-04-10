"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { TaskStatus } from "./TaskStatus";
import { AgentPill } from "./AgentPill";
import * as _utils from "./utils";
import _styles from "./TaskInline.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0269b999-1146-9720-fd6b-677dbcce844f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0269b999-1146-9720-fd6b-677dbcce844f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712070411075},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0269b999-1146-9720-fd6b-677dbcce844f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0269b999-1146-9720-fd6b-677dbcce844f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712070411075}},"actionLists":{"a-21":{"id":"a-21","title":"Task Inline Open Hover in","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1358.cursor","selectorGuids":["e715c980-0b93-da6d-42dd-3c68d590965f","c123e4c2-42af-fcd2-df09-16b43cdf2d82"]},"value":0,"unit":""}},{"id":"a-21-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"0269b999-1146-9720-fd6b-677dbcce844f"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-21-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1358.cursor","selectorGuids":["e715c980-0b93-da6d-42dd-3c68d590965f","c123e4c2-42af-fcd2-df09-16b43cdf2d82"]},"value":"none"}}]},{"actionItems":[{"id":"a-21-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1358.cursor","selectorGuids":["e715c980-0b93-da6d-42dd-3c68d590965f","c123e4c2-42af-fcd2-df09-16b43cdf2d82"]},"value":1,"unit":""}},{"id":"a-21-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":true,"id":"0269b999-1146-9720-fd6b-677dbcce844f"},"globalSwatchId":"","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-21-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1358.cursor","selectorGuids":["e715c980-0b93-da6d-42dd-3c68d590965f","c123e4c2-42af-fcd2-df09-16b43cdf2d82"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1712070414021},"a-22":{"id":"a-22","title":"Task Inline Open Hover out","actionItemGroups":[{"actionItems":[{"id":"a-22-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1358.cursor","selectorGuids":["e715c980-0b93-da6d-42dd-3c68d590965f","c123e4c2-42af-fcd2-df09-16b43cdf2d82"]},"value":0,"unit":""}},{"id":"a-22-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":true,"id":"0269b999-1146-9720-fd6b-677dbcce844f"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-22-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1358.cursor","selectorGuids":["e715c980-0b93-da6d-42dd-3c68d590965f","c123e4c2-42af-fcd2-df09-16b43cdf2d82"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1712070414021}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TaskInline({
  as: _Component = _Builtin.Block,
  slotCheckbox,
  textTaskName = "Schedule Coding Interview",
  textDate = "Thu, Aug 15 2024",
  slotPill,
  slotTaskStatus,
  onClickStatus = {},
  onClickOpen = {},
  onClickEdit = {},
  isDateVisible = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "div-block-1333", "pl-24")}
      data-w-id="0269b999-1146-9720-fd6b-677dbcce844f"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1362")}
        tag="div"
      >
        <_Builtin.Block tag="div">{slotCheckbox}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1359")}
          tag="div"
          {...onClickEdit}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "task-inline-wrapper")}
            tag="div"
          >
            <_Builtin.Block tag="div" {...onClickStatus}>
              {slotTaskStatus ?? <TaskStatus />}
            </_Builtin.Block>
            <_Builtin.Block tag="div">{textTaskName}</_Builtin.Block>
          </_Builtin.Block>
          {isDateVisible ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1334")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5%202.5C4.8125%202.52083%204.97917%202.6875%205%203V4.5H11V3C11.0208%202.6875%2011.1875%202.52083%2011.5%202.5C11.8125%202.52083%2011.9792%202.6875%2012%203V4.5H13C13.5625%204.52083%2014.0312%204.71875%2014.4062%205.09375C14.7812%205.46875%2014.9792%205.9375%2015%206.5V7.5V8.5V8.53125C14.8333%208.51042%2014.6667%208.5%2014.5%208.5C14.3333%208.5%2014.1667%208.51042%2014%208.53125V8.5H2V16.5C2%2016.7917%202.09375%2017.0312%202.28125%2017.2188C2.46875%2017.4062%202.70833%2017.5%203%2017.5H10.25C10.5625%2017.875%2010.9271%2018.2083%2011.3438%2018.5H3C2.4375%2018.4792%201.96875%2018.2812%201.59375%2017.9062C1.21875%2017.5312%201.02083%2017.0625%201%2016.5V8.5V7.5V6.5C1.02083%205.9375%201.21875%205.46875%201.59375%205.09375C1.96875%204.71875%202.4375%204.52083%203%204.5H4V3C4.02083%202.6875%204.1875%202.52083%204.5%202.5ZM13%205.5H3H13H3C2.70833%205.5%202.46875%205.59375%202.28125%205.78125C2.09375%205.96875%202%206.20833%202%206.5V7.5H14V6.5C14%206.20833%2013.9062%205.96875%2013.7188%205.78125C13.5312%205.59375%2013.2917%205.5%2013%205.5ZM14.5%2017.5C15.125%2017.5%2015.7083%2017.3438%2016.25%2017.0312C16.7917%2016.7188%2017.2188%2016.2917%2017.5312%2015.75C17.8438%2015.2083%2018%2014.625%2018%2014C18%2013.375%2017.8438%2012.7917%2017.5312%2012.25C17.2188%2011.7083%2016.7917%2011.2812%2016.25%2010.9688C15.7083%2010.6562%2015.125%2010.5%2014.5%2010.5C13.875%2010.5%2013.2917%2010.6562%2012.75%2010.9688C12.2083%2011.2812%2011.7812%2011.7083%2011.4688%2012.25C11.1562%2012.7917%2011%2013.375%2011%2014C11%2014.625%2011.1562%2015.2083%2011.4688%2015.75C11.7812%2016.2917%2012.2083%2016.7188%2012.75%2017.0312C13.2917%2017.3438%2013.875%2017.5%2014.5%2017.5ZM14.5%209.5C15.3125%209.5%2016.0625%209.69792%2016.75%2010.0938C17.4375%2010.4896%2017.9896%2011.0417%2018.4062%2011.75C18.8021%2012.4583%2019%2013.2083%2019%2014C19%2014.7917%2018.8021%2015.5417%2018.4062%2016.25C17.9896%2016.9583%2017.4375%2017.5104%2016.75%2017.9062C16.0625%2018.3021%2015.3125%2018.5%2014.5%2018.5C13.6875%2018.5%2012.9375%2018.3021%2012.25%2017.9062C11.5625%2017.5104%2011.0104%2016.9583%2010.5938%2016.25C10.1979%2015.5417%2010%2014.7917%2010%2014C10%2013.2083%2010.1979%2012.4583%2010.5938%2011.75C11.0104%2011.0417%2011.5625%2010.4896%2012.25%2010.0938C12.9375%209.69792%2013.6875%209.5%2014.5%209.5ZM14.5%2011.5C14.8125%2011.5208%2014.9792%2011.6875%2015%2012V13.5H16C16.3125%2013.5208%2016.4792%2013.6875%2016.5%2014C16.4792%2014.3125%2016.3125%2014.4792%2016%2014.5H14.5C14.1875%2014.4792%2014.0208%2014.3125%2014%2014V12C14.0208%2011.6875%2014.1875%2011.5208%2014.5%2011.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{textDate}</_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1336")}
            tag="div"
          >
            {slotPill ?? <AgentPill />}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1373")}
        tag="div"
        {...onClickOpen}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1363")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1358", "cursor")}
          tag="div"
          {...onClickOpen}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2220%22%20height%3D%2214%22%20viewBox%3D%220%200%2020%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.65625%203.25C3.98958%203.89583%203.42708%204.55208%202.96875%205.21875C2.53125%205.88542%202.20833%206.47917%202%207C2.20833%207.52083%202.53125%208.11458%202.96875%208.78125C3.42708%209.44792%203.98958%2010.1042%204.65625%2010.75C5.34375%2011.3958%206.125%2011.9271%207%2012.3438C7.89583%2012.7604%208.89583%2012.9792%2010%2013C11.1042%2012.9792%2012.1042%2012.7604%2013%2012.3438C13.875%2011.9271%2014.6562%2011.3958%2015.3438%2010.75C16.0104%2010.1042%2016.5729%209.44792%2017.0312%208.78125C17.4688%208.11458%2017.7917%207.52083%2018%207C17.7917%206.47917%2017.4688%205.88542%2017.0312%205.21875C16.5729%204.55208%2016.0104%203.89583%2015.3438%203.25C14.6562%202.60417%2013.875%202.07292%2013%201.65625C12.1042%201.23958%2011.1042%201.02083%2010%201C8.89583%201.02083%207.89583%201.23958%207%201.65625C6.125%202.07292%205.34375%202.60417%204.65625%203.25ZM10%200C11.2708%200.0208333%2012.4062%200.270833%2013.4062%200.75C14.4062%201.22917%2015.2812%201.82292%2016.0312%202.53125C16.7604%203.21875%2017.3646%203.92708%2017.8438%204.65625C18.3229%205.38542%2018.6875%206.04167%2018.9375%206.625C19.0417%206.875%2019.0417%207.125%2018.9375%207.375C18.6875%207.95833%2018.3229%208.61458%2017.8438%209.34375C17.3646%2010.0729%2016.7604%2010.7812%2016.0312%2011.4688C15.2812%2012.1771%2014.4062%2012.7708%2013.4062%2013.25C12.4062%2013.7292%2011.2708%2013.9792%2010%2014C8.72917%2013.9792%207.59375%2013.7292%206.59375%2013.25C5.59375%2012.7708%204.71875%2012.1771%203.96875%2011.4688C3.23958%2010.7812%202.63542%2010.0729%202.15625%209.34375C1.67708%208.61458%201.32292%207.95833%201.09375%207.375C0.989583%207.125%200.989583%206.875%201.09375%206.625C1.32292%206.04167%201.67708%205.38542%202.15625%204.65625C2.63542%203.92708%203.23958%203.21875%203.96875%202.53125C4.71875%201.82292%205.59375%201.22917%206.59375%200.75C7.59375%200.270833%208.72917%200.0208333%2010%200ZM7%207C7%207.54167%207.13542%208.04167%207.40625%208.5C7.67708%208.95833%208.04167%209.32292%208.5%209.59375C8.97917%209.86458%209.47917%2010%2010%2010C10.5208%2010%2011.0208%209.86458%2011.5%209.59375C11.9583%209.32292%2012.3229%208.95833%2012.5938%208.5C12.8646%208.04167%2013%207.54167%2013%207C13%206.45833%2012.8646%205.95833%2012.5938%205.5C12.3229%205.04167%2011.9583%204.67708%2011.5%204.40625C11.0208%204.13542%2010.5208%204%2010%204C9.47917%204%208.97917%204.13542%208.5%204.40625C8.04167%204.67708%207.67708%205.04167%207.40625%205.5C7.13542%205.95833%207%206.45833%207%207ZM14%207C14%207.72917%2013.8229%208.39583%2013.4688%209C13.1146%209.60417%2012.625%2010.0938%2012%2010.4688C11.375%2010.8229%2010.7083%2011%2010%2011C9.29167%2011%208.625%2010.8229%208%2010.4688C7.375%2010.0938%206.88542%209.60417%206.53125%209C6.17708%208.39583%206%207.72917%206%207C6%206.27083%206.17708%205.60417%206.53125%205C6.88542%204.39583%207.375%203.90625%208%203.53125C8.625%203.17708%209.29167%203%2010%203C10.7083%203%2011.375%203.17708%2012%203.53125C12.625%203.90625%2013.1146%204.39583%2013.4688%205C13.8229%205.60417%2014%206.27083%2014%207Z%22%20fill%3D%22%2387929D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1358", "cursor")}
          tag="div"
          {...onClickEdit}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.2188%201.40625C14.0104%201.21875%2013.7708%201.125%2013.5%201.125C13.2292%201.125%2012.9896%201.21875%2012.7812%201.40625L11.9688%202.25L13.75%204.03125L14.5938%203.21875C14.7812%203.01042%2014.875%202.77083%2014.875%202.5C14.875%202.22917%2014.7812%201.98958%2014.5938%201.78125L14.2188%201.40625ZM5.90625%208.3125C5.78125%208.4375%205.69792%208.59375%205.65625%208.78125L5.15625%2010.8438L7.21875%2010.375C7.40625%2010.3125%207.5625%2010.2188%207.6875%2010.0938L13.0312%204.75L11.25%202.96875L5.90625%208.3125ZM12.0938%200.71875C12.5104%200.322917%2012.9792%200.125%2013.5%200.125C14.0417%200.125%2014.5104%200.322917%2014.9062%200.71875L15.2812%201.09375C15.6771%201.51042%2015.875%201.97917%2015.875%202.5C15.875%203.04167%2015.6771%203.51042%2015.2812%203.90625L8.40625%2010.8125C8.13542%2011.0833%207.8125%2011.2604%207.4375%2011.3438L4.625%2012C4.4375%2012.0208%204.28125%2011.9688%204.15625%2011.8438C4.03125%2011.7188%203.97917%2011.5729%204%2011.4062L4.65625%208.5625C4.73958%208.1875%204.91667%207.86458%205.1875%207.59375L12.0938%200.71875ZM2.5%202H6.5C6.8125%202.02083%206.97917%202.1875%207%202.5C6.97917%202.8125%206.8125%202.97917%206.5%203H2.5C2.08333%203.02083%201.72917%203.16667%201.4375%203.4375C1.16667%203.72917%201.02083%204.08333%201%204.5V13.5C1.02083%2013.9167%201.16667%2014.2708%201.4375%2014.5625C1.72917%2014.8333%202.08333%2014.9792%202.5%2015H11.5C11.9167%2014.9792%2012.2708%2014.8333%2012.5625%2014.5625C12.8333%2014.2708%2012.9792%2013.9167%2013%2013.5V9.5C13.0208%209.1875%2013.1875%209.02083%2013.5%209C13.8125%209.02083%2013.9792%209.1875%2014%209.5V13.5C13.9792%2014.2083%2013.7396%2014.8021%2013.2812%2015.2812C12.8021%2015.7396%2012.2083%2015.9792%2011.5%2016H2.5C1.79167%2015.9792%201.19792%2015.7396%200.71875%2015.2812C0.260417%2014.8021%200.0208333%2014.2083%200%2013.5V4.5C0.0208333%203.79167%200.260417%203.19792%200.71875%202.71875C1.19792%202.26042%201.79167%202.02083%202.5%202Z%22%20fill%3D%22%2387929D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
