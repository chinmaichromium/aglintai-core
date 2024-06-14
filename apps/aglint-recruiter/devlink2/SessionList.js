"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SessionList.module.css";

export function SessionList({
  as: _Component = _Builtin.Block,
  textSession = "Personality and culture",
  textDuration = "45 Minutes",
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1210")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1208", "gap-10")}
        tag="div"
      >
        <_Builtin.Block tag="div">
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2221%22%20height%3D%2217%22%20viewbox%3D%220%200%2021%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.5%201.125H3.5C3.20833%201.125%202.96875%201.21875%202.78125%201.40625C2.59375%201.59375%202.5%201.83333%202.5%202.125V7.3125C2.125%207.4375%201.79167%207.63542%201.5%207.90625V2.125C1.52083%201.5625%201.71875%201.09375%202.09375%200.71875C2.46875%200.34375%202.9375%200.145833%203.5%200.125H17.5C18.0625%200.145833%2018.5312%200.34375%2018.9062%200.71875C19.2812%201.09375%2019.4792%201.5625%2019.5%202.125V7.875C19.2083%207.625%2018.875%207.42708%2018.5%207.28125V2.125C18.5%201.83333%2018.4062%201.59375%2018.2188%201.40625C18.0312%201.21875%2017.7917%201.125%2017.5%201.125ZM3.5%2011.125C3.79167%2011.125%204.03125%2011.0312%204.21875%2010.8438C4.40625%2010.6562%204.5%2010.4167%204.5%2010.125C4.5%209.83333%204.40625%209.59375%204.21875%209.40625C4.03125%209.21875%203.79167%209.125%203.5%209.125C3.20833%209.125%202.96875%209.21875%202.78125%209.40625C2.59375%209.59375%202.5%209.83333%202.5%2010.125C2.5%2010.4167%202.59375%2010.6562%202.78125%2010.8438C2.96875%2011.0312%203.20833%2011.125%203.5%2011.125ZM3.5%208.125C4.25%208.14583%204.82292%208.47917%205.21875%209.125C5.59375%209.79167%205.59375%2010.4583%205.21875%2011.125C4.82292%2011.7708%204.25%2012.1042%203.5%2012.125C2.75%2012.1042%202.17708%2011.7708%201.78125%2011.125C1.40625%2010.4583%201.40625%209.79167%201.78125%209.125C2.17708%208.47917%202.75%208.14583%203.5%208.125ZM10.5%2011.125C10.7917%2011.125%2011.0312%2011.0312%2011.2188%2010.8438C11.4062%2010.6562%2011.5%2010.4167%2011.5%2010.125C11.5%209.83333%2011.4062%209.59375%2011.2188%209.40625C11.0312%209.21875%2010.7917%209.125%2010.5%209.125C10.2083%209.125%209.96875%209.21875%209.78125%209.40625C9.59375%209.59375%209.5%209.83333%209.5%2010.125C9.5%2010.4167%209.59375%2010.6562%209.78125%2010.8438C9.96875%2011.0312%2010.2083%2011.125%2010.5%2011.125ZM10.5%208.125C11.25%208.14583%2011.8229%208.47917%2012.2188%209.125C12.5938%209.79167%2012.5938%2010.4583%2012.2188%2011.125C11.8229%2011.7708%2011.25%2012.1042%2010.5%2012.125C9.75%2012.1042%209.17708%2011.7708%208.78125%2011.125C8.40625%2010.4583%208.40625%209.79167%208.78125%209.125C9.17708%208.47917%209.75%208.14583%2010.5%208.125ZM18.5%2010.125C18.5%209.83333%2018.4062%209.59375%2018.2188%209.40625C18.0312%209.21875%2017.7917%209.125%2017.5%209.125C17.2083%209.125%2016.9688%209.21875%2016.7812%209.40625C16.5938%209.59375%2016.5%209.83333%2016.5%2010.125C16.5%2010.4167%2016.5938%2010.6562%2016.7812%2010.8438C16.9688%2011.0312%2017.2083%2011.125%2017.5%2011.125C17.7917%2011.125%2018.0312%2011.0312%2018.2188%2010.8438C18.4062%2010.6562%2018.5%2010.4167%2018.5%2010.125ZM15.5%2010.125C15.5208%209.375%2015.8542%208.80208%2016.5%208.40625C17.1667%208.03125%2017.8333%208.03125%2018.5%208.40625C19.1458%208.80208%2019.4792%209.375%2019.5%2010.125C19.4792%2010.875%2019.1458%2011.4479%2018.5%2011.8438C17.8333%2012.2188%2017.1667%2012.2188%2016.5%2011.8438C15.8542%2011.4479%2015.5208%2010.875%2015.5%2010.125ZM1.5%2015.125V15.625C1.47917%2015.9375%201.3125%2016.1042%201%2016.125C0.6875%2016.1042%200.520833%2015.9375%200.5%2015.625V15.125C0.520833%2014.5625%200.71875%2014.0938%201.09375%2013.7188C1.46875%2013.3438%201.9375%2013.1458%202.5%2013.125H4.5C5.0625%2013.1458%205.53125%2013.3438%205.90625%2013.7188C6.28125%2014.0938%206.47917%2014.5625%206.5%2015.125V15.625C6.47917%2015.9375%206.3125%2016.1042%206%2016.125C5.6875%2016.1042%205.52083%2015.9375%205.5%2015.625V15.125C5.5%2014.8333%205.40625%2014.5938%205.21875%2014.4062C5.03125%2014.2188%204.79167%2014.125%204.5%2014.125H2.5C2.20833%2014.125%201.96875%2014.2188%201.78125%2014.4062C1.59375%2014.5938%201.5%2014.8333%201.5%2015.125ZM9.5%2014.125C9.20833%2014.125%208.96875%2014.2188%208.78125%2014.4062C8.59375%2014.5938%208.5%2014.8333%208.5%2015.125V15.625C8.47917%2015.9375%208.3125%2016.1042%208%2016.125C7.6875%2016.1042%207.52083%2015.9375%207.5%2015.625V15.125C7.52083%2014.5625%207.71875%2014.0938%208.09375%2013.7188C8.46875%2013.3438%208.9375%2013.1458%209.5%2013.125H11.5C12.0625%2013.1458%2012.5312%2013.3438%2012.9062%2013.7188C13.2812%2014.0938%2013.4792%2014.5625%2013.5%2015.125V15.625C13.4792%2015.9375%2013.3125%2016.1042%2013%2016.125C12.6875%2016.1042%2012.5208%2015.9375%2012.5%2015.625V15.125C12.5%2014.8333%2012.4062%2014.5938%2012.2188%2014.4062C12.0312%2014.2188%2011.7917%2014.125%2011.5%2014.125H9.5ZM15.5%2015.125V15.625C15.4792%2015.9375%2015.3125%2016.1042%2015%2016.125C14.6875%2016.1042%2014.5208%2015.9375%2014.5%2015.625V15.125C14.5208%2014.5625%2014.7188%2014.0938%2015.0938%2013.7188C15.4688%2013.3438%2015.9375%2013.1458%2016.5%2013.125H18.5C19.0625%2013.1458%2019.5312%2013.3438%2019.9062%2013.7188C20.2812%2014.0938%2020.4792%2014.5625%2020.5%2015.125V15.625C20.4792%2015.9375%2020.3125%2016.1042%2020%2016.125C19.6875%2016.1042%2019.5208%2015.9375%2019.5%2015.625V15.125C19.5%2014.8333%2019.4062%2014.5938%2019.2188%2014.4062C19.0312%2014.2188%2018.7917%2014.125%2018.5%2014.125H16.5C16.2083%2014.125%2015.9688%2014.2188%2015.7812%2014.4062C15.5938%2014.5938%2015.5%2014.8333%2015.5%2015.125Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block tag="div">{textSession}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1208")}
        tag="div"
      >
        <_Builtin.Block tag="div">
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewbox%3D%220%200%2013%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.5%200.125C7.625%200.140625%208.63281%200.414062%209.52344%200.945312C10.4297%201.47656%2011.1484%202.19531%2011.6797%203.10156C12.2109%203.99219%2012.4844%205%2012.5%206.125C12.4844%207.25%2012.2109%208.25781%2011.6797%209.14844C11.1484%2010.0547%2010.4297%2010.7734%209.52344%2011.3047C8.63281%2011.8359%207.625%2012.1094%206.5%2012.125C5.375%2012.1094%204.36719%2011.8359%203.47656%2011.3047C2.57031%2010.7734%201.85156%2010.0547%201.32031%209.14844C0.789062%208.25781%200.515625%207.25%200.5%206.125C0.5%205.28125%200.664062%204.49219%200.992188%203.75781C1.30469%203.02344%201.74219%202.38281%202.30469%201.83594C2.46094%201.69531%202.64062%201.625%202.84375%201.625C3.03125%201.625%203.20312%201.70312%203.35938%201.85938C3.5%202.01563%203.57031%202.1875%203.57031%202.375C3.57031%202.57813%203.5%202.75781%203.35938%202.91406C2.48438%203.75781%202.03125%204.82812%202%206.125C2.03125%207.40625%202.46875%208.46875%203.3125%209.3125C4.15625%2010.1562%205.21875%2010.5938%206.5%2010.625C7.78125%2010.5938%208.84375%2010.1562%209.6875%209.3125C10.5312%208.46875%2010.9688%207.40625%2011%206.125C10.9844%204.98438%2010.625%204.00781%209.92188%203.19531C9.23438%202.39844%208.34375%201.89844%207.25%201.69531V2.375C7.25%202.59375%207.17969%202.77344%207.03906%202.91406C6.89844%203.05469%206.71875%203.125%206.5%203.125C6.28125%203.125%206.10156%203.05469%205.96094%202.91406C5.82031%202.77344%205.75%202.59375%205.75%202.375V0.875C5.75%200.65625%205.82031%200.476562%205.96094%200.335938C6.10156%200.195312%206.28125%200.125%206.5%200.125ZM5.02344%203.85156L6.89844%205.72656C7.11719%205.99219%207.11719%206.25781%206.89844%206.52344C6.63281%206.74219%206.36719%206.74219%206.10156%206.52344L4.22656%204.64844C4.00781%204.38281%204.00781%204.11719%204.22656%203.85156C4.49219%203.63281%204.75781%203.63281%205.02344%203.85156Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block tag="div">{textDuration}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
