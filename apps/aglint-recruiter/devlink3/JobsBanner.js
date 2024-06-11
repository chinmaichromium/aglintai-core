"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import * as _utils from "./utils";
import _styles from "./JobsBanner.module.css";

export function JobsBanner({ as: _Component = _Builtin.Block, slotButton }) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1515")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1678")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1516")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewbox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.25%204.5C5.03125%204.5%204.85156%204.57031%204.71094%204.71094C4.57031%204.85156%204.5%205.03125%204.5%205.25V12.75C4.5%2012.9688%204.57031%2013.1484%204.71094%2013.2891C4.85156%2013.4297%205.03125%2013.5%205.25%2013.5H12.75C12.9688%2013.5%2013.1484%2013.4297%2013.2891%2013.2891C13.4297%2013.1484%2013.5%2012.9688%2013.5%2012.75V5.25C13.5%205.03125%2013.4297%204.85156%2013.2891%204.71094C13.1484%204.57031%2012.9688%204.5%2012.75%204.5H5.25ZM3.75%205.25C3.76562%204.82812%203.91406%204.47656%204.19531%204.19531C4.47656%203.91406%204.82812%203.76563%205.25%203.75H12.75C13.1719%203.76563%2013.5234%203.91406%2013.8047%204.19531C14.0859%204.47656%2014.2344%204.82812%2014.25%205.25V12.75C14.2344%2013.1719%2014.0859%2013.5234%2013.8047%2013.8047C13.5234%2014.0859%2013.1719%2014.2344%2012.75%2014.25H5.25C4.82812%2014.2344%204.47656%2014.0859%204.19531%2013.8047C3.91406%2013.5234%203.76562%2013.1719%203.75%2012.75V5.25ZM10.7812%206.82031C10.5938%206.67969%2010.4141%206.67969%2010.2422%206.82031L9.75%207.33594L10.6875%208.27344L11.1797%207.75781C11.3203%207.58594%2011.3203%207.41406%2011.1797%207.24219L10.7812%206.82031ZM7.28906%209.79688C7.22656%209.84375%207.1875%209.89844%207.17188%209.96094L6.89062%2011.1094L8.03906%2010.8281C8.10156%2010.8125%208.15625%2010.7812%208.20312%2010.7344L10.1484%208.78906L9.21094%207.85156L7.26562%209.79688H7.28906ZM9.70312%206.30469C9.9375%206.08594%2010.2031%205.97656%2010.5%205.97656C10.7969%205.97656%2011.0625%206.08594%2011.2969%206.30469L11.7188%206.70312C11.9375%206.9375%2012.0469%207.20312%2012.0469%207.5C12.0469%207.79688%2011.9375%208.0625%2011.7188%208.29688L8.74219%2011.25C8.60156%2011.4062%208.42969%2011.5078%208.22656%2011.5547L6.46875%2012C6.32812%2012.0312%206.21094%2011.9922%206.11719%2011.8828C6.02344%2011.7891%205.99219%2011.6719%206.02344%2011.5312L6.44531%209.77344C6.50781%209.58594%206.60938%209.41406%206.75%209.25781L9.70312%206.30469Z%22%20fill%3D%22%23AD5918%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <Text
            content="This job is in draft state."
            weight="medium"
            color="accent"
          />
        </_Builtin.Block>
        <Text
          size="1"
          color="neutral"
          weight=""
          content="Please publish this job to begin evaluating candidates."
        />
      </_Builtin.Block>
      <_Builtin.Block tag="div">{slotButton}</_Builtin.Block>
    </_Component>
  );
}
