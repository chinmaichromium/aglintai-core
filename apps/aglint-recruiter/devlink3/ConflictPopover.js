"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ConflictReason } from "./ConflictReason";
import * as _utils from "./utils";
import _styles from "./ConflictPopover.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".tooltip_on_bottom","originalId":"b2e9dee4-b000-4ce4-52bf-f4679099b866","appliesTo":"CLASS"},"targets":[{"selector":".tooltip_on_bottom","originalId":"b2e9dee4-b000-4ce4-52bf-f4679099b866","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716455298207},"e-80":{"id":"e-80","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".tooltip_on_bottom","originalId":"b2e9dee4-b000-4ce4-52bf-f4679099b866","appliesTo":"CLASS"},"targets":[{"selector":".tooltip_on_bottom","originalId":"b2e9dee4-b000-4ce4-52bf-f4679099b866","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716455298207}},"actionLists":{"a-51":{"id":"a-51","title":"Bottom Tooltip [show]","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".info_absolute","selectorGuids":["4da17e9f-3e1a-c3e5-825b-831924cbc27d"]},"value":"none"}},{"id":"a-51-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".info_absolute","selectorGuids":["4da17e9f-3e1a-c3e5-825b-831924cbc27d"]},"xValue":0.95,"yValue":0.95,"locked":true}},{"id":"a-51-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".info_absolute","selectorGuids":["4da17e9f-3e1a-c3e5-825b-831924cbc27d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-51-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".info_absolute","selectorGuids":["4da17e9f-3e1a-c3e5-825b-831924cbc27d"]},"value":"flex"}}]},{"actionItems":[{"id":"a-51-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".info_absolute","selectorGuids":["4da17e9f-3e1a-c3e5-825b-831924cbc27d"]},"value":1,"unit":""}},{"id":"a-51-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".info_absolute","selectorGuids":["4da17e9f-3e1a-c3e5-825b-831924cbc27d"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716455303146},"a-52":{"id":"a-52","title":"Bottom Tooltip [hide]","actionItemGroups":[{"actionItems":[{"id":"a-52-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".info_absolute","selectorGuids":["4da17e9f-3e1a-c3e5-825b-831924cbc27d"]},"value":0,"unit":""}},{"id":"a-52-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".info_absolute","selectorGuids":["4da17e9f-3e1a-c3e5-825b-831924cbc27d"]},"xValue":0.95,"yValue":0.95,"locked":true}}]},{"actionItems":[{"id":"a-52-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".info_absolute","selectorGuids":["4da17e9f-3e1a-c3e5-825b-831924cbc27d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716455303146}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ConflictPopover({
  as: _Component = _Builtin.Block,
  isOutsideWorkHours = true,
  isSoftConflict = true,
  isHardConflict = true,
  slotConflictReason,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "info_absolute", "top_32", "seperate_card")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "tooltip_content")}
        tag="div"
      >
        {isOutsideWorkHours ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "conflict_title")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.25%202.75H8.22656C8.38281%202.75%208.53125%202.75781%208.67188%202.77344C8.85938%202.80469%208.97656%202.89844%209.02344%203.05469C9.05469%203.24219%208.99219%203.38281%208.83594%203.47656C8.21094%203.83594%207.70312%204.32812%207.3125%204.95312C6.9375%205.57812%206.75%206.28125%206.75%207.0625C6.78125%208.23438%207.17969%209.20312%207.94531%209.96875C8.72656%2010.75%209.69531%2011.1562%2010.8516%2011.1875C11.1016%2011.1875%2011.3359%2011.1641%2011.5547%2011.1172C11.7422%2011.1016%2011.875%2011.1719%2011.9531%2011.3281C12.0312%2011.4844%2012.0078%2011.6328%2011.8828%2011.7734C10.9141%2012.7266%209.70312%2013.2188%208.25%2013.25C7.26562%2013.2344%206.38281%2012.9922%205.60156%2012.5234C4.80469%2012.0703%204.17969%2011.4453%203.72656%2010.6484C3.25781%209.86719%203.01562%208.98438%203%208C3.01562%207.01562%203.25%206.13281%203.70312%205.35156C4.17188%204.55469%204.80469%203.92969%205.60156%203.47656C6.38281%203.00781%207.26562%202.76563%208.25%202.75Z%22%20fill%3D%22%231371D6%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "outside_work_hours")}
              tag="div"
            >
              {"Outside Work hours"}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        {isSoftConflict ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "conflict_title")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%2014C6.40625%2013.9844%205.40625%2013.7188%204.5%2013.2031C3.59375%2012.6719%202.85938%2011.9375%202.29688%2011C1.76562%2010.0469%201.5%209.04688%201.5%208C1.5%206.95312%201.76562%205.95312%202.29688%205C2.85938%204.0625%203.59375%203.32813%204.5%202.79688C5.40625%202.28125%206.40625%202.01563%207.5%202C8.59375%202.01563%209.59375%202.28125%2010.5%202.79688C11.4062%203.32813%2012.1406%204.0625%2012.7031%205C13.2344%205.95312%2013.5%206.95312%2013.5%208C13.5%209.04688%2013.2344%2010.0469%2012.7031%2011C12.1406%2011.9375%2011.4062%2012.6719%2010.5%2013.2031C9.59375%2013.7188%208.59375%2013.9844%207.5%2014ZM7.5%205C7.15625%205.03125%206.96875%205.21875%206.9375%205.5625V8.1875C6.96875%208.53125%207.15625%208.71875%207.5%208.75C7.84375%208.71875%208.03125%208.53125%208.0625%208.1875V5.5625C8.03125%205.21875%207.84375%205.03125%207.5%205ZM6.75%2010.25C6.75%2010.4688%206.82031%2010.6484%206.96094%2010.7891C7.10156%2010.9297%207.28125%2011%207.5%2011C7.71875%2011%207.89844%2010.9297%208.03906%2010.7891C8.17969%2010.6484%208.25%2010.4688%208.25%2010.25C8.25%2010.0312%208.17969%209.85156%208.03906%209.71094C7.89844%209.57031%207.71875%209.5%207.5%209.5C7.28125%209.5%207.10156%209.57031%206.96094%209.71094C6.82031%209.85156%206.75%2010.0312%206.75%2010.25Z%22%20fill%3D%22%23ED8F1C%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "soft_conflict_text")}
              tag="div"
            >
              {"Soft Conflict"}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        {isHardConflict ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "conflict_title")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%202.75C7.85938%202.76563%208.13281%202.92187%208.32031%203.21875L13.3828%2011.8438C13.5391%2012.1562%2013.5391%2012.4688%2013.3828%2012.7812C13.1953%2013.0781%2012.9219%2013.2344%2012.5625%2013.25H2.4375C2.07812%2013.2344%201.80469%2013.0781%201.61719%2012.7812C1.46094%2012.4688%201.46094%2012.1562%201.61719%2011.8438L6.70312%203.21875C6.89062%202.92187%207.15625%202.76563%207.5%202.75ZM7.5%205.75C7.15625%205.78125%206.96875%205.96875%206.9375%206.3125V8.9375C6.96875%209.28125%207.15625%209.46875%207.5%209.5C7.84375%209.46875%208.03125%209.28125%208.0625%208.9375V6.3125C8.03125%205.96875%207.84375%205.78125%207.5%205.75ZM8.25%2011C8.25%2010.7812%208.17969%2010.6016%208.03906%2010.4609C7.89844%2010.3203%207.71875%2010.25%207.5%2010.25C7.28125%2010.25%207.10156%2010.3203%206.96094%2010.4609C6.82031%2010.6016%206.75%2010.7812%206.75%2011C6.75%2011.2188%206.82031%2011.3984%206.96094%2011.5391C7.10156%2011.6797%207.28125%2011.75%207.5%2011.75C7.71875%2011.75%207.89844%2011.6797%208.03906%2011.5391C8.17969%2011.3984%208.25%2011.2188%208.25%2011Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text_hard_conflict")}
              tag="div"
            >
              {"Hard Conflict"}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "conflict_resons")}
          tag="div"
        >
          {slotConflictReason ?? (
            <ConflictReason textConflictReason="some reasons for the conflict wll appar here. i e committed to another schedule" />
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
