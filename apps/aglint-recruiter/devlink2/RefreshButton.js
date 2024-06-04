"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RefreshButton.module.css";

export function RefreshButton({
  as: _Component = _Builtin.Block,
  text = "Refresh",
  iconProps = {},
  buttonProps = {},
}) {
  return (
    <_Component tag="div" {...buttonProps}>
      <_Builtin.Block
        className={_utils.cx(_styles, "radix-button")}
        tag="div"
        button-color-ghost="accent"
        button-high-contrast-ghost="false"
        button-size-ghost="1"
      >
        <_Builtin.Block tag="div" {...iconProps}>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon_placeholder")}
            value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22white%22%20fill-opacity%3D%220.01%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.02983%207.78396C2.02983%2011.0311%204.38418%2013.2431%207.02793%2013.7009C7.33046%2013.7533%207.53324%2014.041%207.48086%2014.3436C7.42848%2014.6461%207.14076%2014.8488%206.83824%2014.7965C3.73245%2014.2587%200.917969%2011.641%200.917969%207.78396C0.917968%206.14484%201.6637%204.85669%202.53456%203.87676C3.1584%203.1748%203.8721%202.60485%204.4461%202.16823H2.70059C2.40604%202.16823%202.16726%201.92945%202.16726%201.6349C2.16726%201.34035%202.40604%201.10156%202.70059%201.10156H5.90059C6.19514%201.10156%206.43393%201.34035%206.43393%201.6349V4.8349C6.43393%205.12945%206.19514%205.36823%205.90059%205.36823C5.60604%205.36823%205.36726%205.12945%205.36726%204.8349V2.86629L5.36565%202.8675C4.75608%203.32725%204.01104%203.88915%203.36565%204.61535C2.60349%205.47297%202.02983%206.50905%202.02983%207.78396ZM13.878%208.2175C13.878%205.00463%2011.5736%202.80565%208.96384%202.31572C8.66207%202.25907%208.46337%201.96852%208.52002%201.66675C8.57667%201.36499%208.86722%201.16629%209.16898%201.22294C12.2348%201.79851%2014.9898%204.40186%2014.9898%208.2175C14.9898%209.85661%2014.2441%2011.1447%2013.3733%2012.1247C12.7494%2012.8267%2012.0357%2013.3966%2011.4617%2013.8333H13.2073C13.5018%2013.8333%2013.7406%2014.072%2013.7406%2014.3666C13.7406%2014.6611%2013.5018%2014.8999%2013.2073%2014.8999H10.0073C9.71271%2014.8999%209.47393%2014.6611%209.47393%2014.3666V11.1666C9.47393%2010.872%209.71271%2010.6332%2010.0073%2010.6332C10.3018%2010.6332%2010.5406%2010.872%2010.5406%2011.1666V13.1351L10.5423%2013.1339C11.1518%2012.6741%2011.8968%2012.1123%2012.5421%2011.3861C13.3044%2010.5285%2013.878%209.49241%2013.878%208.2175Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block tag="div">{text}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
