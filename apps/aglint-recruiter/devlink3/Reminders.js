"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ReminderList } from "./ReminderList";
import * as _utils from "./utils";
import _styles from "./Reminders.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cdb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cdb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714384232879},"e-62":{"id":"e-62","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cdb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cdb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714384232879},"e-63":{"id":"e-63","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7ce3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7ce3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714384475221},"e-64":{"id":"e-64","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-63"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7ce3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7ce3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714384475221},"e-65":{"id":"e-65","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-66"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"929670e1-ea17-e027-dabe-48de65032365","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"929670e1-ea17-e027-dabe-48de65032365","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714384618643},"e-66":{"id":"e-66","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-65"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"929670e1-ea17-e027-dabe-48de65032365","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"929670e1-ea17-e027-dabe-48de65032365","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714384618643},"e-67":{"id":"e-67","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-68"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cfe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cfe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714384618643},"e-68":{"id":"e-68","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-67"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cfe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cfe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714384618643}},"actionLists":{"a-39":{"id":"a-39","title":"Candidate Remind hover in","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cdb"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-39-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1622","selectorGuids":["e906309a-2136-0979-0866-2ef1be7beedc"]},"value":"none"}},{"id":"a-39-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1622","selectorGuids":["e906309a-2136-0979-0866-2ef1be7beedc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-39-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":true,"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cdb"},"globalSwatchId":"","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-39-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1622","selectorGuids":["e906309a-2136-0979-0866-2ef1be7beedc"]},"value":"flex"}},{"id":"a-39-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1622","selectorGuids":["e906309a-2136-0979-0866-2ef1be7beedc"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1714384256891},"a-40":{"id":"a-40","title":"Candidate Remind hover out","actionItemGroups":[{"actionItems":[{"id":"a-40-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":true,"id":"4f356960-8d7f-a7bc-698e-96c6c94f7cdb"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-40-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1622","selectorGuids":["e906309a-2136-0979-0866-2ef1be7beedc"]},"value":0,"unit":""}},{"id":"a-40-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1622","selectorGuids":["e906309a-2136-0979-0866-2ef1be7beedc"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1714384256891}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Reminders({
  as: _Component = _Builtin.Block,
  slotCandidateReminder,
  onClickAddCandidateReminder = {},
  slotInterviewerReminder,
  onClickAddInterviewerReminder = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-1616")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1618")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1617")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Candidate Reminders"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-grey-600")}
            tag="div"
          >
            {
              "Add reminders that will be sent to the candidate before the start of their interviews."
            }
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1619")}
          tag="div"
        >
          {slotCandidateReminder ?? (
            <>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1620")}
                data-w-id="4f356960-8d7f-a7bc-698e-96c6c94f7cdb"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-1621")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons")}
                    value="%3Csvg%20width%3D%2216%22%20height%3D%2212%22%20viewbox%3D%220%200%2016%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.5%200H14.5C14.9167%200.0208333%2015.2708%200.166667%2015.5625%200.4375C15.8333%200.729167%2015.9792%201.08333%2016%201.5C15.9792%202%2015.7812%202.39583%2015.4062%202.6875L8.59375%207.8125C8.19792%208.0625%207.80208%208.0625%207.40625%207.8125L0.59375%202.6875C0.21875%202.39583%200.0208333%202%200%201.5C0.0208333%201.08333%200.166667%200.729167%200.4375%200.4375C0.729167%200.166667%201.08333%200.0208333%201.5%200ZM0%203.5L6.8125%208.59375C7.16667%208.86458%207.5625%209%208%209C8.4375%209%208.83333%208.86458%209.1875%208.59375L16%203.5V10C15.9792%2010.5625%2015.7812%2011.0312%2015.4062%2011.4062C15.0312%2011.7812%2014.5625%2011.9792%2014%2012H2C1.4375%2011.9792%200.96875%2011.7812%200.59375%2011.4062C0.21875%2011.0312%200.0208333%2010.5625%200%2010V3.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">
                    {"Send email reminder 1 day before the event"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-1622")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons", "cursor-pointer")}
                    value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.1641%203.05469C12.0078%202.91406%2011.8281%202.84375%2011.625%202.84375C11.4219%202.84375%2011.2422%202.91406%2011.0859%203.05469L10.4766%203.6875L11.8125%205.02344L12.4453%204.41406C12.5859%204.25781%2012.6562%204.07812%2012.6562%203.875C12.6562%203.67187%2012.5859%203.49219%2012.4453%203.33594L12.1641%203.05469ZM5.92969%208.23438C5.83594%208.32812%205.77344%208.44531%205.74219%208.58594L5.36719%2010.1328L6.91406%209.78125C7.05469%209.73438%207.17188%209.66406%207.26562%209.57031L11.2734%205.5625L9.9375%204.22656L5.92969%208.23438ZM10.5703%202.53906C10.8828%202.24219%2011.2344%202.09375%2011.625%202.09375C12.0312%202.09375%2012.3828%202.24219%2012.6797%202.53906L12.9609%202.82031C13.2578%203.13281%2013.4062%203.48437%2013.4062%203.875C13.4062%204.28125%2013.2578%204.63281%2012.9609%204.92969L7.80469%2010.1094C7.60156%2010.3125%207.35938%2010.4453%207.07812%2010.5078L4.96875%2011C4.82812%2011.0156%204.71094%2010.9766%204.61719%2010.8828C4.52344%2010.7891%204.48438%2010.6797%204.5%2010.5547L4.99219%208.42188C5.05469%208.14062%205.1875%207.89844%205.39062%207.69531L10.5703%202.53906ZM3.375%203.5H6.375C6.60938%203.51563%206.73438%203.64062%206.75%203.875C6.73438%204.10938%206.60938%204.23438%206.375%204.25H3.375C3.0625%204.26562%202.79688%204.375%202.57812%204.57812C2.375%204.79688%202.26562%205.0625%202.25%205.375V12.125C2.26562%2012.4375%202.375%2012.7031%202.57812%2012.9219C2.79688%2013.125%203.0625%2013.2344%203.375%2013.25H10.125C10.4375%2013.2344%2010.7031%2013.125%2010.9219%2012.9219C11.125%2012.7031%2011.2344%2012.4375%2011.25%2012.125V9.125C11.2656%208.89062%2011.3906%208.76562%2011.625%208.75C11.8594%208.76562%2011.9844%208.89062%2012%209.125V12.125C11.9844%2012.6562%2011.8047%2013.1016%2011.4609%2013.4609C11.1016%2013.8047%2010.6562%2013.9844%2010.125%2014H3.375C2.84375%2013.9844%202.39844%2013.8047%202.03906%2013.4609C1.69531%2013.1016%201.51562%2012.6562%201.5%2012.125V5.375C1.51562%204.84375%201.69531%204.39844%202.03906%204.03906C2.39844%203.69531%202.84375%203.51563%203.375%203.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons", "cursor-pointer")}
                    value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.42188%202.75C6.28125%202.75%206.17188%202.8125%206.09375%202.9375L5.74219%203.5H9.25781L8.90625%202.9375C8.82812%202.8125%208.71875%202.75%208.57812%202.75H6.42188ZM10.1484%203.5H11.25H12H12.375C12.6094%203.51563%2012.7344%203.64062%2012.75%203.875C12.7344%204.10938%2012.6094%204.23438%2012.375%204.25H11.9531L11.3438%2012.6172C11.3125%2013.0078%2011.1562%2013.3359%2010.875%2013.6016C10.5938%2013.8516%2010.25%2013.9844%209.84375%2014H5.15625C4.75%2013.9844%204.40625%2013.8516%204.125%2013.6016C3.84375%2013.3359%203.6875%2013.0078%203.65625%2012.6172L3.04688%204.25H2.625C2.39062%204.23438%202.26562%204.10938%202.25%203.875C2.26562%203.64062%202.39062%203.51563%202.625%203.5H3H3.75H4.85156L5.46094%202.53906C5.69531%202.19531%206.01562%202.01563%206.42188%202H8.57812C8.98438%202.01563%209.30469%202.19531%209.53906%202.53906L10.1484%203.5ZM11.2031%204.25H3.79688L4.40625%2012.5469C4.42188%2012.75%204.5%2012.9141%204.64062%2013.0391C4.78125%2013.1797%204.95312%2013.25%205.15625%2013.25H9.84375C10.0469%2013.25%2010.2188%2013.1797%2010.3594%2013.0391C10.5%2012.9141%2010.5781%2012.75%2010.5938%2012.5469L11.2031%204.25Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1620")}
                data-w-id="4f356960-8d7f-a7bc-698e-96c6c94f7ce3"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-1621")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons")}
                    value="%3Csvg%20width%3D%2216%22%20height%3D%2212%22%20viewbox%3D%220%200%2016%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.5%200H14.5C14.9167%200.0208333%2015.2708%200.166667%2015.5625%200.4375C15.8333%200.729167%2015.9792%201.08333%2016%201.5C15.9792%202%2015.7812%202.39583%2015.4062%202.6875L8.59375%207.8125C8.19792%208.0625%207.80208%208.0625%207.40625%207.8125L0.59375%202.6875C0.21875%202.39583%200.0208333%202%200%201.5C0.0208333%201.08333%200.166667%200.729167%200.4375%200.4375C0.729167%200.166667%201.08333%200.0208333%201.5%200ZM0%203.5L6.8125%208.59375C7.16667%208.86458%207.5625%209%208%209C8.4375%209%208.83333%208.86458%209.1875%208.59375L16%203.5V10C15.9792%2010.5625%2015.7812%2011.0312%2015.4062%2011.4062C15.0312%2011.7812%2014.5625%2011.9792%2014%2012H2C1.4375%2011.9792%200.96875%2011.7812%200.59375%2011.4062C0.21875%2011.0312%200.0208333%2010.5625%200%2010V3.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">
                    {"Send email reminder 1 day before the event"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-1622")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons", "cursor-pointer")}
                    value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.1641%203.05469C12.0078%202.91406%2011.8281%202.84375%2011.625%202.84375C11.4219%202.84375%2011.2422%202.91406%2011.0859%203.05469L10.4766%203.6875L11.8125%205.02344L12.4453%204.41406C12.5859%204.25781%2012.6562%204.07812%2012.6562%203.875C12.6562%203.67187%2012.5859%203.49219%2012.4453%203.33594L12.1641%203.05469ZM5.92969%208.23438C5.83594%208.32812%205.77344%208.44531%205.74219%208.58594L5.36719%2010.1328L6.91406%209.78125C7.05469%209.73438%207.17188%209.66406%207.26562%209.57031L11.2734%205.5625L9.9375%204.22656L5.92969%208.23438ZM10.5703%202.53906C10.8828%202.24219%2011.2344%202.09375%2011.625%202.09375C12.0312%202.09375%2012.3828%202.24219%2012.6797%202.53906L12.9609%202.82031C13.2578%203.13281%2013.4062%203.48437%2013.4062%203.875C13.4062%204.28125%2013.2578%204.63281%2012.9609%204.92969L7.80469%2010.1094C7.60156%2010.3125%207.35938%2010.4453%207.07812%2010.5078L4.96875%2011C4.82812%2011.0156%204.71094%2010.9766%204.61719%2010.8828C4.52344%2010.7891%204.48438%2010.6797%204.5%2010.5547L4.99219%208.42188C5.05469%208.14062%205.1875%207.89844%205.39062%207.69531L10.5703%202.53906ZM3.375%203.5H6.375C6.60938%203.51563%206.73438%203.64062%206.75%203.875C6.73438%204.10938%206.60938%204.23438%206.375%204.25H3.375C3.0625%204.26562%202.79688%204.375%202.57812%204.57812C2.375%204.79688%202.26562%205.0625%202.25%205.375V12.125C2.26562%2012.4375%202.375%2012.7031%202.57812%2012.9219C2.79688%2013.125%203.0625%2013.2344%203.375%2013.25H10.125C10.4375%2013.2344%2010.7031%2013.125%2010.9219%2012.9219C11.125%2012.7031%2011.2344%2012.4375%2011.25%2012.125V9.125C11.2656%208.89062%2011.3906%208.76562%2011.625%208.75C11.8594%208.76562%2011.9844%208.89062%2012%209.125V12.125C11.9844%2012.6562%2011.8047%2013.1016%2011.4609%2013.4609C11.1016%2013.8047%2010.6562%2013.9844%2010.125%2014H3.375C2.84375%2013.9844%202.39844%2013.8047%202.03906%2013.4609C1.69531%2013.1016%201.51562%2012.6562%201.5%2012.125V5.375C1.51562%204.84375%201.69531%204.39844%202.03906%204.03906C2.39844%203.69531%202.84375%203.51563%203.375%203.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons", "cursor-pointer")}
                    value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.42188%202.75C6.28125%202.75%206.17188%202.8125%206.09375%202.9375L5.74219%203.5H9.25781L8.90625%202.9375C8.82812%202.8125%208.71875%202.75%208.57812%202.75H6.42188ZM10.1484%203.5H11.25H12H12.375C12.6094%203.51563%2012.7344%203.64062%2012.75%203.875C12.7344%204.10938%2012.6094%204.23438%2012.375%204.25H11.9531L11.3438%2012.6172C11.3125%2013.0078%2011.1562%2013.3359%2010.875%2013.6016C10.5938%2013.8516%2010.25%2013.9844%209.84375%2014H5.15625C4.75%2013.9844%204.40625%2013.8516%204.125%2013.6016C3.84375%2013.3359%203.6875%2013.0078%203.65625%2012.6172L3.04688%204.25H2.625C2.39062%204.23438%202.26562%204.10938%202.25%203.875C2.26562%203.64062%202.39062%203.51563%202.625%203.5H3H3.75H4.85156L5.46094%202.53906C5.69531%202.19531%206.01562%202.01563%206.42188%202H8.57812C8.98438%202.01563%209.30469%202.19531%209.53906%202.53906L10.1484%203.5ZM11.2031%204.25H3.79688L4.40625%2012.5469C4.42188%2012.75%204.5%2012.9141%204.64062%2013.0391C4.78125%2013.1797%204.95312%2013.25%205.15625%2013.25H9.84375C10.0469%2013.25%2010.2188%2013.1797%2010.3594%2013.0391C10.5%2012.9141%2010.5781%2012.75%2010.5938%2012.5469L11.2031%204.25Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </>
          )}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1623")}
          tag="div"
          {...onClickAddCandidateReminder}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.5625%201.6875V5.4375H10.3125C10.6562%205.46875%2010.8438%205.65625%2010.875%206C10.8438%206.34375%2010.6562%206.53125%2010.3125%206.5625H6.5625V10.3125C6.53125%2010.6562%206.34375%2010.8438%206%2010.875C5.65625%2010.8438%205.46875%2010.6562%205.4375%2010.3125V6.5625H1.6875C1.34375%206.53125%201.15625%206.34375%201.125%206C1.15625%205.65625%201.34375%205.46875%201.6875%205.4375H5.4375V1.6875C5.46875%201.34375%205.65625%201.15625%206%201.125C6.34375%201.15625%206.53125%201.34375%206.5625%201.6875Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-blue-500")}
            tag="div"
          >
            {"Add Candidate Reminder"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1618")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1617")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Interviewer Reminders"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-grey-600")}
            tag="div"
          >
            {
              "Add reminders that will be sent to the interviewers before the start of their schedules."
            }
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1619")}
          tag="div"
        >
          {slotInterviewerReminder ?? (
            <>
              <ReminderList />
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1620")}
                data-w-id="4f356960-8d7f-a7bc-698e-96c6c94f7cfe"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-1621")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons")}
                    value="%3Csvg%20width%3D%2216%22%20height%3D%2212%22%20viewbox%3D%220%200%2016%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.5%200H14.5C14.9167%200.0208333%2015.2708%200.166667%2015.5625%200.4375C15.8333%200.729167%2015.9792%201.08333%2016%201.5C15.9792%202%2015.7812%202.39583%2015.4062%202.6875L8.59375%207.8125C8.19792%208.0625%207.80208%208.0625%207.40625%207.8125L0.59375%202.6875C0.21875%202.39583%200.0208333%202%200%201.5C0.0208333%201.08333%200.166667%200.729167%200.4375%200.4375C0.729167%200.166667%201.08333%200.0208333%201.5%200ZM0%203.5L6.8125%208.59375C7.16667%208.86458%207.5625%209%208%209C8.4375%209%208.83333%208.86458%209.1875%208.59375L16%203.5V10C15.9792%2010.5625%2015.7812%2011.0312%2015.4062%2011.4062C15.0312%2011.7812%2014.5625%2011.9792%2014%2012H2C1.4375%2011.9792%200.96875%2011.7812%200.59375%2011.4062C0.21875%2011.0312%200.0208333%2010.5625%200%2010V3.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">
                    {"Send email reminder 1 day before the event"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-1622")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons", "cursor-pointer")}
                    value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.1641%203.05469C12.0078%202.91406%2011.8281%202.84375%2011.625%202.84375C11.4219%202.84375%2011.2422%202.91406%2011.0859%203.05469L10.4766%203.6875L11.8125%205.02344L12.4453%204.41406C12.5859%204.25781%2012.6562%204.07812%2012.6562%203.875C12.6562%203.67187%2012.5859%203.49219%2012.4453%203.33594L12.1641%203.05469ZM5.92969%208.23438C5.83594%208.32812%205.77344%208.44531%205.74219%208.58594L5.36719%2010.1328L6.91406%209.78125C7.05469%209.73438%207.17188%209.66406%207.26562%209.57031L11.2734%205.5625L9.9375%204.22656L5.92969%208.23438ZM10.5703%202.53906C10.8828%202.24219%2011.2344%202.09375%2011.625%202.09375C12.0312%202.09375%2012.3828%202.24219%2012.6797%202.53906L12.9609%202.82031C13.2578%203.13281%2013.4062%203.48437%2013.4062%203.875C13.4062%204.28125%2013.2578%204.63281%2012.9609%204.92969L7.80469%2010.1094C7.60156%2010.3125%207.35938%2010.4453%207.07812%2010.5078L4.96875%2011C4.82812%2011.0156%204.71094%2010.9766%204.61719%2010.8828C4.52344%2010.7891%204.48438%2010.6797%204.5%2010.5547L4.99219%208.42188C5.05469%208.14062%205.1875%207.89844%205.39062%207.69531L10.5703%202.53906ZM3.375%203.5H6.375C6.60938%203.51563%206.73438%203.64062%206.75%203.875C6.73438%204.10938%206.60938%204.23438%206.375%204.25H3.375C3.0625%204.26562%202.79688%204.375%202.57812%204.57812C2.375%204.79688%202.26562%205.0625%202.25%205.375V12.125C2.26562%2012.4375%202.375%2012.7031%202.57812%2012.9219C2.79688%2013.125%203.0625%2013.2344%203.375%2013.25H10.125C10.4375%2013.2344%2010.7031%2013.125%2010.9219%2012.9219C11.125%2012.7031%2011.2344%2012.4375%2011.25%2012.125V9.125C11.2656%208.89062%2011.3906%208.76562%2011.625%208.75C11.8594%208.76562%2011.9844%208.89062%2012%209.125V12.125C11.9844%2012.6562%2011.8047%2013.1016%2011.4609%2013.4609C11.1016%2013.8047%2010.6562%2013.9844%2010.125%2014H3.375C2.84375%2013.9844%202.39844%2013.8047%202.03906%2013.4609C1.69531%2013.1016%201.51562%2012.6562%201.5%2012.125V5.375C1.51562%204.84375%201.69531%204.39844%202.03906%204.03906C2.39844%203.69531%202.84375%203.51563%203.375%203.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons", "cursor-pointer")}
                    value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.42188%202.75C6.28125%202.75%206.17188%202.8125%206.09375%202.9375L5.74219%203.5H9.25781L8.90625%202.9375C8.82812%202.8125%208.71875%202.75%208.57812%202.75H6.42188ZM10.1484%203.5H11.25H12H12.375C12.6094%203.51563%2012.7344%203.64062%2012.75%203.875C12.7344%204.10938%2012.6094%204.23438%2012.375%204.25H11.9531L11.3438%2012.6172C11.3125%2013.0078%2011.1562%2013.3359%2010.875%2013.6016C10.5938%2013.8516%2010.25%2013.9844%209.84375%2014H5.15625C4.75%2013.9844%204.40625%2013.8516%204.125%2013.6016C3.84375%2013.3359%203.6875%2013.0078%203.65625%2012.6172L3.04688%204.25H2.625C2.39062%204.23438%202.26562%204.10938%202.25%203.875C2.26562%203.64062%202.39062%203.51563%202.625%203.5H3H3.75H4.85156L5.46094%202.53906C5.69531%202.19531%206.01562%202.01563%206.42188%202H8.57812C8.98438%202.01563%209.30469%202.19531%209.53906%202.53906L10.1484%203.5ZM11.2031%204.25H3.79688L4.40625%2012.5469C4.42188%2012.75%204.5%2012.9141%204.64062%2013.0391C4.78125%2013.1797%204.95312%2013.25%205.15625%2013.25H9.84375C10.0469%2013.25%2010.2188%2013.1797%2010.3594%2013.0391C10.5%2012.9141%2010.5781%2012.75%2010.5938%2012.5469L11.2031%204.25Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </>
          )}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1623")}
          tag="div"
          {...onClickAddInterviewerReminder}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.5625%201.6875V5.4375H10.3125C10.6562%205.46875%2010.8438%205.65625%2010.875%206C10.8438%206.34375%2010.6562%206.53125%2010.3125%206.5625H6.5625V10.3125C6.53125%2010.6562%206.34375%2010.8438%206%2010.875C5.65625%2010.8438%205.46875%2010.6562%205.4375%2010.3125V6.5625H1.6875C1.34375%206.53125%201.15625%206.34375%201.125%206C1.15625%205.65625%201.34375%205.46875%201.6875%205.4375H5.4375V1.6875C5.46875%201.34375%205.65625%201.15625%206%201.125C6.34375%201.15625%206.53125%201.34375%206.5625%201.6875Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-blue-500")}
            tag="div"
          >
            {"Add Interviewer Reminder"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
