"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SummaryBlock.module.css";

export function SummaryBlock({
  as: _Component = _Builtin.Block,
  title = "Overview",
  description = "Eike led software as a Senior System Software Engineer at NVIDIA Corporation, specializing in autonomous vehicles.",
  descriptionTextProps = {},
  wrapperProps = {},
  arrowProps = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "cvs-intro-overview-block")}
      tag="div"
      {...wrapperProps}
    >
      <_Builtin.Block className={_utils.cx(_styles, "cvs-intro-top")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "cvs-intro-header")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "icon-block")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "svg-icon")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.6875%201.99219L9%201.5L9.49219%200.1875C9.53906%200.0625%209.625%200%209.75%200C9.875%200%209.96094%200.0625%2010.0078%200.1875L10.5%201.5L11.8359%201.99219C11.9453%202.03906%2012%202.125%2012%202.25C12%202.375%2011.9453%202.46094%2011.8359%202.50781L10.5%203L10.0078%204.33594C9.96094%204.44531%209.875%204.5%209.75%204.5C9.625%204.5%209.53906%204.44531%209.49219%204.33594L9%203L7.6875%202.50781C7.5625%202.46094%207.5%202.375%207.5%202.25C7.5%202.125%207.5625%202.03906%207.6875%201.99219ZM0.210938%205.625L0.609375%205.4375L0.820312%205.34375L2.88281%204.38281L3.84375%202.32031L3.86719%202.29688L3.9375%202.10938L4.125%201.71094C4.20312%201.57031%204.32031%201.5%204.47656%201.5C4.63281%201.5%204.74219%201.57031%204.80469%201.71094L4.99219%202.10938L5.08594%202.32031L6.04688%204.38281L8.10938%205.34375L8.13281%205.36719L8.32031%205.4375L8.71875%205.625C8.85938%205.70312%208.92969%205.82031%208.92969%205.97656C8.92969%206.13281%208.85938%206.24219%208.71875%206.30469L8.32031%206.49219L8.13281%206.58594H8.10938L6.04688%207.54688L5.08594%209.60938V9.63281L4.99219%209.82031L4.80469%2010.2188C4.72656%2010.3594%204.61719%2010.4297%204.47656%2010.4297C4.32031%2010.4297%204.20312%2010.3594%204.125%2010.2188L3.9375%209.82031L3.84375%209.63281V9.60938L2.88281%207.54688L0.820312%206.58594H0.796875L0.609375%206.49219L0.210938%206.30469C0.0703125%206.24219%200%206.13281%200%205.97656C0%205.82031%200.0703125%205.70312%200.210938%205.625ZM2.15625%205.97656L3.375%206.51562C3.60938%206.64062%203.78906%206.82812%203.91406%207.07812L4.47656%208.27344L5.01562%207.07812C5.14062%206.82812%205.32812%206.64062%205.57812%206.51562L6.77344%205.97656L5.57812%205.41406C5.32812%205.28906%205.14062%205.10156%205.01562%204.85156L4.47656%203.65625L3.91406%204.85156C3.78906%205.10156%203.60938%205.28906%203.375%205.41406L2.15625%205.97656ZM9%209L9.49219%207.6875C9.53906%207.5625%209.625%207.5%209.75%207.5C9.875%207.5%209.96094%207.5625%2010.0078%207.6875L10.5%209L11.8359%209.49219C11.9453%209.53906%2012%209.625%2012%209.75C12%209.875%2011.9453%209.96094%2011.8359%2010.0078L10.5%2010.5L10.0078%2011.8359C9.96094%2011.9453%209.875%2012%209.75%2012C9.625%2012%209.53906%2011.9453%209.49219%2011.8359L9%2010.5L7.6875%2010.0078C7.5625%209.96094%207.5%209.875%207.5%209.75C7.5%209.625%207.5625%209.53906%207.6875%209.49219L9%209Z%22%20fill%3D%22%23012B30%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {title}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "sidebar-block-arrow")}
          tag="div"
          {...arrowProps}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "icon-block", "_12x12")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "svg-icon")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%227%22%20viewbox%3D%220%200%2012%207%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.60156%200.601562C5.86719%200.382813%206.13281%200.382813%206.39844%200.601562L10.8984%205.10156C11.1172%205.36719%2011.1172%205.63281%2010.8984%205.89844C10.6328%206.11719%2010.3672%206.11719%2010.1016%205.89844L6%201.79688L1.89844%205.89844C1.63281%206.11719%201.36719%206.11719%201.10156%205.89844C0.882812%205.63281%200.882812%205.36719%201.10156%205.10156L5.60156%200.601562Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "text-kale-600")}
        {...descriptionTextProps}
      >
        {description}
      </_Builtin.Paragraph>
    </_Component>
  );
}
