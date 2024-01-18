import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./JobWarningList.module.css";

export function JobWarningList({
  as: _Component = _Builtin.Block,
  textWarning = "Please fill out the job Detail",
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-717")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons")}
        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%2012C4.90625%2011.9844%203.90625%2011.7188%203%2011.2031C2.09375%2010.6719%201.35938%209.9375%200.796875%209C0.265625%208.04688%200%207.04688%200%206C0%204.95312%200.265625%203.95313%200.796875%203C1.35938%202.0625%202.09375%201.32813%203%200.796875C3.90625%200.28125%204.90625%200.015625%206%200C7.09375%200.015625%208.09375%200.28125%209%200.796875C9.90625%201.32813%2010.6406%202.0625%2011.2031%203C11.7344%203.95313%2012%204.95312%2012%206C12%207.04688%2011.7344%208.04688%2011.2031%209C10.6406%209.9375%209.90625%2010.6719%209%2011.2031C8.09375%2011.7188%207.09375%2011.9844%206%2012ZM5.0625%207.875C4.71875%207.90625%204.53125%208.09375%204.5%208.4375C4.53125%208.78125%204.71875%208.96875%205.0625%209H6.9375C7.28125%208.96875%207.46875%208.78125%207.5%208.4375C7.46875%208.09375%207.28125%207.90625%206.9375%207.875H6.75V5.8125C6.71875%205.46875%206.53125%205.28125%206.1875%205.25H5.0625C4.71875%205.28125%204.53125%205.46875%204.5%205.8125C4.53125%206.15625%204.71875%206.34375%205.0625%206.375H5.625V7.875H5.0625ZM6%203C5.78125%203%205.60156%203.07031%205.46094%203.21094C5.32031%203.35156%205.25%203.53125%205.25%203.75C5.25%203.96875%205.32031%204.14844%205.46094%204.28906C5.60156%204.42969%205.78125%204.5%206%204.5C6.21875%204.5%206.39844%204.42969%206.53906%204.28906C6.67969%204.14844%206.75%203.96875%206.75%203.75C6.75%203.53125%206.67969%203.35156%206.53906%203.21094C6.39844%203.07031%206.21875%203%206%203Z%22%20fill%3D%22%23F79A3E%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "text-yellow-800")}
        tag="div"
      >
        {textWarning}
      </_Builtin.Block>
    </_Component>
  );
}
