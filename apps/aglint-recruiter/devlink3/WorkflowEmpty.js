"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WorkflowEmpty.module.css";

export function WorkflowEmpty({
  as: _Component = _Builtin.Block,
  onClickCreate = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "workflow_empty")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "embed_flex")}
        value="%3Csvg%20width%3D%2232%22%20height%3D%2234%22%20viewBox%3D%220%200%2032%2034%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20.1875%2031.25C20.6042%2031.7083%2020.625%2032.1875%2020.25%2032.6875C19.7917%2033.1042%2019.3125%2033.125%2018.8125%2032.75L13.3125%2027.75C13.1042%2027.5417%2013%2027.2917%2013%2027C13%2026.7083%2013.1042%2026.4583%2013.3125%2026.25L18.8125%2021.25C19.3125%2020.875%2019.7917%2020.8958%2020.25%2021.3125C20.625%2021.8125%2020.6042%2022.2917%2020.1875%2022.75L16.5625%2026H21C22.4167%2025.9583%2023.6042%2025.4792%2024.5625%2024.5625C25.4792%2023.6042%2025.9583%2022.4167%2026%2021V10.875C24.8333%2010.625%2023.875%2010.0625%2023.125%209.1875C22.4167%208.3125%2022.0417%207.25%2022%206C22.0417%204.58333%2022.5208%203.39583%2023.4375%202.4375C24.3958%201.52083%2025.5833%201.04167%2027%201C28.4167%201.04167%2029.6042%201.52083%2030.5625%202.4375C31.4792%203.39583%2031.9583%204.58333%2032%206C31.9583%207.25%2031.5833%208.3125%2030.875%209.1875C30.125%2010.0625%2029.1667%2010.625%2028%2010.875V21C27.9583%2023%2027.2708%2024.6458%2025.9375%2025.9375C24.6458%2027.2708%2023%2027.9583%2021%2028H16.5625L20.1875%2031.25ZM24%206C24.0417%207.125%2024.5417%208%2025.5%208.625C26.5%209.125%2027.5%209.125%2028.5%208.625C29.4583%208%2029.9583%207.125%2030%206C29.9583%204.875%2029.4583%204%2028.5%203.375C27.5%202.875%2026.5%202.875%2025.5%203.375C24.5417%204%2024.0417%204.875%2024%206ZM11.8125%202.75C11.3958%202.29167%2011.375%201.8125%2011.75%201.3125C12.2083%200.895833%2012.6875%200.875%2013.1875%201.25L18.6875%206.25C18.8958%206.45833%2019%206.70833%2019%207C19%207.29167%2018.8958%207.54167%2018.6875%207.75L13.1875%2012.75C12.6875%2013.125%2012.2083%2013.1042%2011.75%2012.6875C11.375%2012.1875%2011.3958%2011.7083%2011.8125%2011.25L15.4375%208H11C9.58333%208.04167%208.39583%208.52083%207.4375%209.4375C6.52083%2010.3958%206.04167%2011.5833%206%2013V23.125C7.16667%2023.375%208.125%2023.9375%208.875%2024.8125C9.58333%2025.6875%209.95833%2026.75%2010%2028C9.95833%2029.4167%209.47917%2030.6042%208.5625%2031.5625C7.60417%2032.4792%206.41667%2032.9583%205%2033C3.58333%2032.9583%202.39583%2032.4792%201.4375%2031.5625C0.520833%2030.6042%200.0416667%2029.4167%200%2028C0.0416667%2026.75%200.416667%2025.6875%201.125%2024.8125C1.875%2023.9375%202.83333%2023.375%204%2023.125V13C4.04167%2011%204.72917%209.35417%206.0625%208.0625C7.35417%206.72917%209%206.04167%2011%206H15.4375L11.8125%202.75ZM8%2028C7.95833%2026.875%207.45833%2026%206.5%2025.375C5.5%2024.875%204.5%2024.875%203.5%2025.375C2.54167%2026%202.04167%2026.875%202%2028C2.04167%2029.125%202.54167%2030%203.5%2030.625C4.5%2031.125%205.5%2031.125%206.5%2030.625C7.45833%2030%207.95833%2029.125%208%2028Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block className={_utils.cx(_styles, "flex_hr_4")} tag="div">
        <_Builtin.Block tag="div">{"No workflows added."}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "link")}
          tag="div"
          {...onClickCreate}
        >
          {"Create New Workflow"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
