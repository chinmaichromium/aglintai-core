"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Text } from "./Text";
import { EditOptionModule } from "./EditOptionModule";
import * as _utils from "./utils";
import _styles from "./InterviewBreakCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b6652d53-78c1-0f96-30a0-40aa8431d39a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b6652d53-78c1-0f96-30a0-40aa8431d39a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711953151594},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b6652d53-78c1-0f96-30a0-40aa8431d39a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b6652d53-78c1-0f96-30a0-40aa8431d39a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711953151594},"e-45":{"id":"e-45","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a3dd66ab-b625-b411-593b-d8d3a0dcaf83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a3dd66ab-b625-b411-593b-d8d3a0dcaf83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712832309435},"e-46":{"id":"e-46","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a3dd66ab-b625-b411-593b-d8d3a0dcaf83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a3dd66ab-b625-b411-593b-d8d3a0dcaf83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712832309435},"e-47":{"id":"e-47","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fa39f503-e285-8ca8-e1d3-b0b7549642dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fa39f503-e285-8ca8-e1d3-b0b7549642dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712915751014},"e-48":{"id":"e-48","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-47"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fa39f503-e285-8ca8-e1d3-b0b7549642dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fa39f503-e285-8ca8-e1d3-b0b7549642dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712915751015},"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"81140247-8670-8afa-be02-2d78ca36a57e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81140247-8670-8afa-be02-2d78ca36a57e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718027263031},"e-82":{"id":"e-82","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-81"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"81140247-8670-8afa-be02-2d78ca36a57e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81140247-8670-8afa-be02-2d78ca36a57e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718027263032}},"actionLists":{"a-19":{"id":"a-19","title":"option schedule hover in","actionItemGroups":[{"actionItems":[{"id":"a-19-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":"none"}},{"id":"a-19-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-19-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":"block"}},{"id":"a-19-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711953157238},"a-20":{"id":"a-20","title":"option schedule hover out","actionItemGroups":[{"actionItems":[{"id":"a-20-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":0,"unit":""}},{"id":"a-20-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1711953157238},"a-25":{"id":"a-25","title":"option schedule hover in 2","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":"none"}},{"id":"a-25-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-25-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":"block"}},{"id":"a-25-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711953157238},"a-26":{"id":"a-26","title":"option schedule hover out 2","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":0,"unit":""}},{"id":"a-26-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sloteditoptions","selectorGuids":["85d382d5-45c9-d0d9-26ad-438675b051ba"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1711953157238}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InterviewBreakCard({
  as: _Component = _Builtin.Block,
  textDuration = "45 Minutes",
  onClickDelete = {},
  onClickEdit = {},
  isEditDeleteVisible = true,
  isDurationRightCornerVisible = false,
  isDurationLeftVisible = true,
  isThreeDotVisible = false,
  slotEditOptionModule,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "break_duration")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "intrerview_module_breaks")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "break")} tag="div">
          <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.0625%200C2.40625%200.03125%202.59375%200.21875%202.625%200.5625C2.625%200.75%202.67188%200.90625%202.76562%201.03125C2.85938%201.15625%203%201.29687%203.1875%201.45312L3.21094%201.47656C3.41406%201.63281%203.60938%201.84375%203.79688%202.10938C4%202.375%204.10938%202.73438%204.125%203.1875C4.09375%203.53125%203.90625%203.71875%203.5625%203.75C3.21875%203.71875%203.03125%203.53125%203%203.1875C3%203%202.95312%202.84375%202.85938%202.71875C2.76562%202.59375%202.625%202.45313%202.4375%202.29688L2.41406%202.27344C2.21094%202.11719%202.01562%201.90625%201.82812%201.64062C1.625%201.375%201.51562%201.01562%201.5%200.5625C1.53125%200.21875%201.71875%200.03125%202.0625%200ZM1.125%209.75C1.14062%2010.0625%201.25%2010.3281%201.45312%2010.5469C1.67188%2010.75%201.9375%2010.8594%202.25%2010.875H6.75C7.0625%2010.8594%207.32812%2010.75%207.54688%2010.5469C7.75%2010.3281%207.85938%2010.0625%207.875%209.75V5.625H1.125V9.75ZM0%205.25C0%205.03125%200.0703125%204.85156%200.210938%204.71094C0.351562%204.57031%200.53125%204.5%200.75%204.5H8.25H9.375C10.125%204.51562%2010.7422%204.77344%2011.2266%205.27344C11.7266%205.75781%2011.9844%206.375%2012%207.125C11.9844%207.875%2011.7266%208.49219%2011.2266%208.97656C10.7422%209.47656%2010.125%209.73438%209.375%209.75H9C8.98438%2010.3906%208.76562%2010.9219%208.34375%2011.3438C7.92188%2011.7656%207.39062%2011.9844%206.75%2012H2.25C1.60938%2011.9844%201.07812%2011.7656%200.65625%2011.3438C0.234375%2010.9219%200.015625%2010.3906%200%209.75L0%205.25ZM9%208.625H9.375C9.79688%208.60938%2010.1484%208.46094%2010.4297%208.17969C10.7109%207.89844%2010.8594%207.54688%2010.875%207.125C10.8594%206.70312%2010.7109%206.35156%2010.4297%206.07031C10.1484%205.78906%209.79688%205.64062%209.375%205.625H9V8.625ZM5.25%200.5625C5.25%200.75%205.29688%200.90625%205.39062%201.03125C5.48438%201.15625%205.625%201.29687%205.8125%201.45312L5.83594%201.47656C6.03906%201.63281%206.23438%201.84375%206.42188%202.10938C6.625%202.375%206.73438%202.73438%206.75%203.1875C6.71875%203.53125%206.53125%203.71875%206.1875%203.75C5.84375%203.71875%205.65625%203.53125%205.625%203.1875C5.625%203%205.57812%202.84375%205.48438%202.71875C5.39062%202.59375%205.25%202.45313%205.0625%202.29688L5.03906%202.27344C4.83594%202.11719%204.64062%201.90625%204.45312%201.64062C4.25%201.375%204.14062%201.01562%204.125%200.5625C4.15625%200.21875%204.34375%200.03125%204.6875%200C5.03125%200.03125%205.21875%200.21875%205.25%200.5625Z%22%20fill%3D%22%2349545C%22%2F%3E%0A%3C%2Fsvg%3E" />
          <Text weight="medium" content="Break" />
        </_Builtin.Block>
        {isDurationLeftVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "interview_module_duration")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%200C7.125%200.015625%208.13281%200.289062%209.02344%200.820312C9.92969%201.35156%2010.6484%202.07031%2011.1797%202.97656C11.7109%203.86719%2011.9844%204.875%2012%206C11.9844%207.125%2011.7109%208.13281%2011.1797%209.02344C10.6484%209.92969%209.92969%2010.6484%209.02344%2011.1797C8.13281%2011.7109%207.125%2011.9844%206%2012C4.875%2011.9844%203.86719%2011.7109%202.97656%2011.1797C2.07031%2010.6484%201.35156%209.92969%200.820312%209.02344C0.289062%208.13281%200.015625%207.125%200%206C0%205.15625%200.164062%204.36719%200.492188%203.63281C0.804688%202.89844%201.24219%202.25781%201.80469%201.71094C1.96094%201.57031%202.14062%201.5%202.34375%201.5C2.53125%201.5%202.70312%201.57812%202.85938%201.73438C3%201.89063%203.07031%202.0625%203.07031%202.25C3.07031%202.45313%203%202.63281%202.85938%202.78906C1.98438%203.63281%201.53125%204.70312%201.5%206C1.53125%207.28125%201.96875%208.34375%202.8125%209.1875C3.65625%2010.0312%204.71875%2010.4688%206%2010.5C7.28125%2010.4688%208.34375%2010.0312%209.1875%209.1875C10.0312%208.34375%2010.4688%207.28125%2010.5%206C10.4844%204.85938%2010.125%203.88281%209.42188%203.07031C8.73438%202.27344%207.84375%201.77344%206.75%201.57031V2.25C6.75%202.46875%206.67969%202.64844%206.53906%202.78906C6.39844%202.92969%206.21875%203%206%203C5.78125%203%205.60156%202.92969%205.46094%202.78906C5.32031%202.64844%205.25%202.46875%205.25%202.25V0.75C5.25%200.53125%205.32031%200.351562%205.46094%200.210938C5.60156%200.0703125%205.78125%200%206%200ZM4.52344%203.72656L6.39844%205.60156C6.61719%205.86719%206.61719%206.13281%206.39844%206.39844C6.13281%206.61719%205.86719%206.61719%205.60156%206.39844L3.72656%204.52344C3.50781%204.25781%203.50781%203.99219%203.72656%203.72656C3.99219%203.50781%204.25781%203.50781%204.52344%203.72656Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <Text content={textDuration} weight="" />
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
      {isEditDeleteVisible ? (
        <_Builtin.Block className={_utils.cx(_styles, "im_action")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "ibc-icon-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex", "cursor-pointer")}
              value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewbox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.92188%203.75C7.78125%203.75%207.67188%203.8125%207.59375%203.9375L7.24219%204.5H10.7578L10.4062%203.9375C10.3281%203.8125%2010.2188%203.75%2010.0781%203.75H7.92188ZM11.6484%204.5H12.75H13.5H13.875C14.1094%204.51562%2014.2344%204.64062%2014.25%204.875C14.2344%205.10938%2014.1094%205.23438%2013.875%205.25H13.4531L12.8438%2013.6172C12.8125%2014.0078%2012.6562%2014.3359%2012.375%2014.6016C12.0938%2014.8516%2011.75%2014.9844%2011.3438%2015H6.65625C6.25%2014.9844%205.90625%2014.8516%205.625%2014.6016C5.34375%2014.3359%205.1875%2014.0078%205.15625%2013.6172L4.54688%205.25H4.125C3.89062%205.23438%203.76562%205.10938%203.75%204.875C3.76562%204.64062%203.89062%204.51562%204.125%204.5H4.5H5.25H6.35156L6.96094%203.53906C7.19531%203.19531%207.51562%203.01563%207.92188%203H10.0781C10.4844%203.01563%2010.8047%203.19531%2011.0391%203.53906L11.6484%204.5ZM12.7031%205.25H5.29688L5.90625%2013.5469C5.92188%2013.75%206%2013.9141%206.14062%2014.0391C6.28125%2014.1797%206.45312%2014.25%206.65625%2014.25H11.3438C11.5469%2014.25%2011.7188%2014.1797%2011.8594%2014.0391C12%2013.9141%2012.0781%2013.75%2012.0938%2013.5469L12.7031%205.25Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
              {...onClickDelete}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "ibc-icon-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex", "cursor-pointer")}
              value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewbox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.6641%204.05469C13.5078%203.91406%2013.3281%203.84375%2013.125%203.84375C12.9219%203.84375%2012.7422%203.91406%2012.5859%204.05469L11.9766%204.6875L13.3125%206.02344L13.9453%205.41406C14.0859%205.25781%2014.1562%205.07812%2014.1562%204.875C14.1562%204.67188%2014.0859%204.49219%2013.9453%204.33594L13.6641%204.05469ZM7.42969%209.23438C7.33594%209.32812%207.27344%209.44531%207.24219%209.58594L6.86719%2011.1328L8.41406%2010.7812C8.55469%2010.7344%208.67188%2010.6641%208.76562%2010.5703L12.7734%206.5625L11.4375%205.22656L7.42969%209.23438ZM12.0703%203.53906C12.3828%203.24219%2012.7344%203.09375%2013.125%203.09375C13.5312%203.09375%2013.8828%203.24219%2014.1797%203.53906L14.4609%203.82031C14.7578%204.13281%2014.9062%204.48438%2014.9062%204.875C14.9062%205.28125%2014.7578%205.63281%2014.4609%205.92969L9.30469%2011.1094C9.10156%2011.3125%208.85938%2011.4453%208.57812%2011.5078L6.46875%2012C6.32812%2012.0156%206.21094%2011.9766%206.11719%2011.8828C6.02344%2011.7891%205.98438%2011.6797%206%2011.5547L6.49219%209.42188C6.55469%209.14062%206.6875%208.89844%206.89062%208.69531L12.0703%203.53906ZM4.875%204.5H7.875C8.10938%204.51562%208.23438%204.64062%208.25%204.875C8.23438%205.10938%208.10938%205.23438%207.875%205.25H4.875C4.5625%205.26562%204.29688%205.375%204.07812%205.57812C3.875%205.79688%203.76562%206.0625%203.75%206.375V13.125C3.76562%2013.4375%203.875%2013.7031%204.07812%2013.9219C4.29688%2014.125%204.5625%2014.2344%204.875%2014.25H11.625C11.9375%2014.2344%2012.2031%2014.125%2012.4219%2013.9219C12.625%2013.7031%2012.7344%2013.4375%2012.75%2013.125V10.125C12.7656%209.89062%2012.8906%209.76562%2013.125%209.75C13.3594%209.76562%2013.4844%209.89062%2013.5%2010.125V13.125C13.4844%2013.6562%2013.3047%2014.1016%2012.9609%2014.4609C12.6016%2014.8047%2012.1562%2014.9844%2011.625%2015H4.875C4.34375%2014.9844%203.89844%2014.8047%203.53906%2014.4609C3.19531%2014.1016%203.01562%2013.6562%203%2013.125V6.375C3.01562%205.84375%203.19531%205.39844%203.53906%205.03906C3.89844%204.69531%204.34375%204.51562%204.875%204.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              {...onClickEdit}
            />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isDurationRightCornerVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "interview_module_duration")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%200C7.125%200.015625%208.13281%200.289062%209.02344%200.820312C9.92969%201.35156%2010.6484%202.07031%2011.1797%202.97656C11.7109%203.86719%2011.9844%204.875%2012%206C11.9844%207.125%2011.7109%208.13281%2011.1797%209.02344C10.6484%209.92969%209.92969%2010.6484%209.02344%2011.1797C8.13281%2011.7109%207.125%2011.9844%206%2012C4.875%2011.9844%203.86719%2011.7109%202.97656%2011.1797C2.07031%2010.6484%201.35156%209.92969%200.820312%209.02344C0.289062%208.13281%200.015625%207.125%200%206C0%205.15625%200.164062%204.36719%200.492188%203.63281C0.804688%202.89844%201.24219%202.25781%201.80469%201.71094C1.96094%201.57031%202.14062%201.5%202.34375%201.5C2.53125%201.5%202.70312%201.57812%202.85938%201.73438C3%201.89063%203.07031%202.0625%203.07031%202.25C3.07031%202.45313%203%202.63281%202.85938%202.78906C1.98438%203.63281%201.53125%204.70312%201.5%206C1.53125%207.28125%201.96875%208.34375%202.8125%209.1875C3.65625%2010.0312%204.71875%2010.4688%206%2010.5C7.28125%2010.4688%208.34375%2010.0312%209.1875%209.1875C10.0312%208.34375%2010.4688%207.28125%2010.5%206C10.4844%204.85938%2010.125%203.88281%209.42188%203.07031C8.73438%202.27344%207.84375%201.77344%206.75%201.57031V2.25C6.75%202.46875%206.67969%202.64844%206.53906%202.78906C6.39844%202.92969%206.21875%203%206%203C5.78125%203%205.60156%202.92969%205.46094%202.78906C5.32031%202.64844%205.25%202.46875%205.25%202.25V0.75C5.25%200.53125%205.32031%200.351562%205.46094%200.210938C5.60156%200.0703125%205.78125%200%206%200ZM4.52344%203.72656L6.39844%205.60156C6.61719%205.86719%206.61719%206.13281%206.39844%206.39844C6.13281%206.61719%205.86719%206.61719%205.60156%206.39844L3.72656%204.52344C3.50781%204.25781%203.50781%203.99219%203.72656%203.72656C3.99219%203.50781%204.25781%203.50781%204.52344%203.72656Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <Text content={textDuration} weight="" />
        </_Builtin.Block>
      ) : null}
      {isThreeDotVisible ? (
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "three-dot-wrap")}
            data-w-id="fa39f503-e285-8ca8-e1d3-b0b7549642dd"
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons", "cursor-pointer")}
              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2015.5C12.5625%2015.5208%2013%2015.7708%2013.3125%2016.25C13.5625%2016.75%2013.5625%2017.25%2013.3125%2017.75C13%2018.2292%2012.5625%2018.4792%2012%2018.5C11.4375%2018.4792%2011%2018.2292%2010.6875%2017.75C10.4375%2017.25%2010.4375%2016.75%2010.6875%2016.25C11%2015.7708%2011.4375%2015.5208%2012%2015.5ZM12%2010.5C12.5625%2010.5208%2013%2010.7708%2013.3125%2011.25C13.5625%2011.75%2013.5625%2012.25%2013.3125%2012.75C13%2013.2292%2012.5625%2013.4792%2012%2013.5C11.4375%2013.4792%2011%2013.2292%2010.6875%2012.75C10.4375%2012.25%2010.4375%2011.75%2010.6875%2011.25C11%2010.7708%2011.4375%2010.5208%2012%2010.5ZM13.5%207C13.4792%207.5625%2013.2292%208%2012.75%208.3125C12.25%208.5625%2011.75%208.5625%2011.25%208.3125C10.7708%208%2010.5208%207.5625%2010.5%207C10.5208%206.4375%2010.7708%206%2011.25%205.6875C11.75%205.4375%2012.25%205.4375%2012.75%205.6875C13.2292%206%2013.4792%206.4375%2013.5%207Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "sloteditoptions")}
              tag="div"
            >
              {slotEditOptionModule ?? <EditOptionModule />}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
