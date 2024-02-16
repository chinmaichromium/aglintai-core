import React from "react";
import * as _Builtin from "./_Builtin";
import { AssistantHelp } from "./AssistantHelp";
import { AssistantTaskEmpty } from "./AssistantTaskEmpty";
import { AvailabilitySlot } from "./AvailabilitySlot";
import * as _utils from "./utils";
import _styles from "./AssistantLanding.module.css";

export function AssistantLanding({
  as: _Component = _Builtin.Block,
  isFilterVisible = false,
  slotTask,
  slotChat,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "assistant-landing-wrap")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "assistant-chat-wrap")}
        tag="div"
      >
        {slotChat ?? <AssistantHelp />}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "tasks-wrap")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-930")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-928")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2213%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5625%200.890625C4.79688%201.14063%204.8125%201.40625%204.60938%201.6875L2.92188%203.5625C2.8125%203.6875%202.67969%203.75%202.52344%203.75C2.35156%203.75%202.21094%203.69531%202.10156%203.58594L1.16406%202.64844C0.945312%202.38281%200.945312%202.11719%201.16406%201.85156C1.42969%201.63281%201.69531%201.63281%201.96094%201.85156L2.47656%202.36719L3.76562%200.9375C4.01562%200.703125%204.28125%200.6875%204.5625%200.890625ZM4.5625%204.64062C4.79688%204.89062%204.8125%205.15625%204.60938%205.4375L2.92188%207.3125C2.8125%207.4375%202.67969%207.5%202.52344%207.5C2.35156%207.5%202.21094%207.44531%202.10156%207.33594L1.16406%206.39844C0.945312%206.13281%200.945312%205.86719%201.16406%205.60156C1.42969%205.38281%201.69531%205.38281%201.96094%205.60156L2.47656%206.11719L3.76562%204.6875C4.01562%204.45312%204.28125%204.4375%204.5625%204.64062ZM6.25%202.25C6.25%202.03125%206.32031%201.85156%206.46094%201.71094C6.60156%201.57031%206.78125%201.5%207%201.5H12.25C12.4688%201.5%2012.6484%201.57031%2012.7891%201.71094C12.9297%201.85156%2013%202.03125%2013%202.25C13%202.46875%2012.9297%202.64844%2012.7891%202.78906C12.6484%202.92969%2012.4688%203%2012.25%203H7C6.78125%203%206.60156%202.92969%206.46094%202.78906C6.32031%202.64844%206.25%202.46875%206.25%202.25ZM6.25%206C6.25%205.78125%206.32031%205.60156%206.46094%205.46094C6.60156%205.32031%206.78125%205.25%207%205.25H12.25C12.4688%205.25%2012.6484%205.32031%2012.7891%205.46094C12.9297%205.60156%2013%205.78125%2013%206C13%206.21875%2012.9297%206.39844%2012.7891%206.53906C12.6484%206.67969%2012.4688%206.75%2012.25%206.75H7C6.78125%206.75%206.60156%206.67969%206.46094%206.53906C6.32031%206.39844%206.25%206.21875%206.25%206ZM4.75%209.75C4.75%209.53125%204.82031%209.35156%204.96094%209.21094C5.10156%209.07031%205.28125%209%205.5%209H12.25C12.4688%209%2012.6484%209.07031%2012.7891%209.21094C12.9297%209.35156%2013%209.53125%2013%209.75C13%209.96875%2012.9297%2010.1484%2012.7891%2010.2891C12.6484%2010.4297%2012.4688%2010.5%2012.25%2010.5H5.5C5.28125%2010.5%205.10156%2010.4297%204.96094%2010.2891C4.82031%2010.1484%204.75%209.96875%204.75%209.75ZM2.125%208.625C2.54688%208.64062%202.875%208.82812%203.10938%209.1875C3.29688%209.5625%203.29688%209.9375%203.10938%2010.3125C2.875%2010.6719%202.54688%2010.8594%202.125%2010.875C1.70312%2010.8594%201.375%2010.6719%201.14062%2010.3125C0.953125%209.9375%200.953125%209.5625%201.14062%209.1875C1.375%208.82812%201.70312%208.64062%202.125%208.625Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-600")}
              tag="div"
            >
              {"Tasks"}
            </_Builtin.Block>
          </_Builtin.Block>
          {isFilterVisible ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-929")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%201.6875C0%201.42188%200.09375%201.20312%200.28125%201.03125C0.453125%200.84375%200.671875%200.75%200.9375%200.75H11.0859C11.3359%200.75%2011.5469%200.84375%2011.7188%201.03125C11.9062%201.20312%2012%201.42188%2012%201.6875C12%201.90625%2011.9297%202.10156%2011.7891%202.27344L7.5%207.45312V10.4531C7.5%2010.6719%207.42188%2010.8594%207.26562%2011.0156C7.10938%2011.1719%206.92188%2011.25%206.70312%2011.25C6.53125%2011.25%206.36719%2011.1953%206.21094%2011.0859L4.78125%209.98438C4.59375%209.82812%204.5%209.625%204.5%209.375V7.45312L0.210938%202.27344C0.0703125%202.10156%200%201.90625%200%201.6875ZM0.9375%201.5C0.828125%201.51563%200.765625%201.57812%200.75%201.6875C0.75%201.71875%200.765625%201.75%200.796875%201.78125L5.15625%207.07812C5.21875%207.14062%205.25%207.21875%205.25%207.3125V9.375L6.67969%2010.5C6.67969%2010.5%206.6875%2010.5%206.70312%2010.5C6.73438%2010.5%206.75%2010.4844%206.75%2010.4531V7.3125C6.75%207.21875%206.78125%207.14062%206.84375%207.07812L11.2031%201.78125C11.2344%201.75%2011.25%201.71875%2011.25%201.6875C11.2344%201.57812%2011.1797%201.51563%2011.0859%201.5H0.9375Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-blue-500")}
                tag="div"
              >
                {"Filter"}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "slot-task-wrap")}
          tag="div"
        >
          {slotTask ?? (
            <>
              <AssistantTaskEmpty />
              <AvailabilitySlot />
            </>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hide")}
        value="%3Cstyle%3E%0A%5Bclass*%3D%22AssistantLanding_assistant-chat-wrap__%22%5D%7B%0Aheight%3Acalc(100vh%20-%2060px)%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
