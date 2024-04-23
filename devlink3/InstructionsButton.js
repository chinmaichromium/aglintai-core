import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InstructionsButton.module.css";

export function InstructionsButton({
  as: _Component = _Builtin.Block,
  onClickInstructions = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "div-block-1273", "cursor-pointer")}
      tag="div"
      {...onClickInstructions}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons")}
        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.5%201.5C1.71875%201.5%201.89844%201.57031%202.03906%201.71094C2.17969%201.85156%202.25%202.03125%202.25%202.25C2.25%202.46875%202.17969%202.64844%202.03906%202.78906C1.89844%202.92969%201.71875%203%201.5%203C1.28125%203%201.10156%202.92969%200.960938%202.78906C0.820312%202.64844%200.75%202.46875%200.75%202.25C0.75%202.03125%200.820312%201.85156%200.960938%201.71094C1.10156%201.57031%201.28125%201.5%201.5%201.5ZM4.125%201.875H11.625C11.8594%201.89063%2011.9844%202.01562%2012%202.25C11.9844%202.48438%2011.8594%202.60937%2011.625%202.625H4.125C3.89062%202.60937%203.76562%202.48438%203.75%202.25C3.76562%202.01562%203.89062%201.89063%204.125%201.875ZM4.125%205.625H11.625C11.8594%205.64062%2011.9844%205.76562%2012%206C11.9844%206.23438%2011.8594%206.35938%2011.625%206.375H4.125C3.89062%206.35938%203.76562%206.23438%203.75%206C3.76562%205.76562%203.89062%205.64062%204.125%205.625ZM4.125%209.375H11.625C11.8594%209.39062%2011.9844%209.51562%2012%209.75C11.9844%209.98438%2011.8594%2010.1094%2011.625%2010.125H4.125C3.89062%2010.1094%203.76562%209.98438%203.75%209.75C3.76562%209.51562%203.89062%209.39062%204.125%209.375ZM2.25%206C2.25%206.21875%202.17969%206.39844%202.03906%206.53906C1.89844%206.67969%201.71875%206.75%201.5%206.75C1.28125%206.75%201.10156%206.67969%200.960938%206.53906C0.820312%206.39844%200.75%206.21875%200.75%206C0.75%205.78125%200.820312%205.60156%200.960938%205.46094C1.10156%205.32031%201.28125%205.25%201.5%205.25C1.71875%205.25%201.89844%205.32031%202.03906%205.46094C2.17969%205.60156%202.25%205.78125%202.25%206ZM1.5%209C1.71875%209%201.89844%209.07031%202.03906%209.21094C2.17969%209.35156%202.25%209.53125%202.25%209.75C2.25%209.96875%202.17969%2010.1484%202.03906%2010.2891C1.89844%2010.4297%201.71875%2010.5%201.5%2010.5C1.28125%2010.5%201.10156%2010.4297%200.960938%2010.2891C0.820312%2010.1484%200.75%209.96875%200.75%209.75C0.75%209.53125%200.820312%209.35156%200.960938%209.21094C1.10156%209.07031%201.28125%209%201.5%209Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block className={_utils.cx(_styles, "text-blue-500")} tag="div">
        {"Instructions"}
      </_Builtin.Block>
    </_Component>
  );
}
