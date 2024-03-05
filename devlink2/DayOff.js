import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DayOff.module.css";

export function DayOff({
  as: _Component = _Builtin.Block,
  textDate = "17 Nov 2024 - 20 Nov 2024",
  onClickRemove = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "day_off")} tag="div">
      <_Builtin.Block
        id={_utils.cx(
          _styles,
          "w-node-_1ec17d4b-084f-674b-41dc-34aeb6f2abd2-b6f2abd1"
        )}
        tag="div"
      >
        {textDate}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "removeday")}
        id={_utils.cx(
          _styles,
          "w-node-_1ec17d4b-084f-674b-41dc-34aeb6f2abd4-b6f2abd1"
        )}
        tag="div"
        {...onClickRemove}
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed_flex")}
          id={_utils.cx(
            _styles,
            "w-node-_1ec17d4b-084f-674b-41dc-34aeb6f2abd5-b6f2abd1"
          )}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.92188%200.75C4.78125%200.75%204.67188%200.8125%204.59375%200.9375L4.24219%201.5H7.75781L7.40625%200.9375C7.32812%200.8125%207.21875%200.75%207.07812%200.75H4.92188ZM8.64844%201.5H9.75H10.5H10.875C11.1094%201.51563%2011.2344%201.64062%2011.25%201.875C11.2344%202.10938%2011.1094%202.23437%2010.875%202.25H10.4531L9.84375%2010.6172C9.8125%2011.0078%209.65625%2011.3359%209.375%2011.6016C9.09375%2011.8516%208.75%2011.9844%208.34375%2012H3.65625C3.25%2011.9844%202.90625%2011.8516%202.625%2011.6016C2.34375%2011.3359%202.1875%2011.0078%202.15625%2010.6172L1.54688%202.25H1.125C0.890625%202.23437%200.765625%202.10938%200.75%201.875C0.765625%201.64062%200.890625%201.51563%201.125%201.5H1.5H2.25H3.35156L3.96094%200.539062C4.19531%200.195312%204.51562%200.015625%204.92188%200H7.07812C7.48438%200.015625%207.80469%200.195312%208.03906%200.539062L8.64844%201.5ZM9.70312%202.25H2.29688L2.90625%2010.5469C2.92188%2010.75%203%2010.9141%203.14062%2011.0391C3.28125%2011.1797%203.45312%2011.25%203.65625%2011.25H8.34375C8.54688%2011.25%208.71875%2011.1797%208.85938%2011.0391C9%2010.9141%209.07812%2010.75%209.09375%2010.5469L9.70312%202.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
