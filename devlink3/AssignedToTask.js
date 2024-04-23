"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AssignedToTask.module.css";

export function AssignedToTask({
  as: _Component = _Builtin.Block,
  isEmailAgentVisible = true,
  isPhoneAgentVisible = false,
  slotAvatarWithName,
  isAvatarWithNameVisible = false,
}) {
  return (
    <_Component tag="div">
      {isEmailAgentVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1438")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2212%22%20height%3D%2213%22%20viewBox%3D%220%200%2012%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.93947%206.21844L9.93951%206.21845L11.0639%206.5L9.93951%206.78155L9.93947%206.78156L9.89749%206.79208C9.24187%206.95634%208.73196%207.0841%208.3283%207.22903C7.91107%207.37884%207.58951%207.55284%207.32082%207.81974L7.32028%207.82028C7.05286%208.08769%206.87877%208.40967%206.72901%208.82718C6.5847%209.2295%206.4574%209.7376%206.29415%2010.3892L6.28156%2010.4395L6.28155%2010.4395L6%2011.5639L5.71845%2010.4395L5.71844%2010.4395L5.70792%2010.3975C5.54366%209.74187%205.4159%209.23196%205.27097%208.8283C5.12116%208.41107%204.94716%208.08951%204.68026%207.82082L4.67972%207.82028C4.4123%207.55286%204.09033%207.37877%203.67282%207.22901C3.2705%207.0847%202.7624%206.9574%202.11079%206.79415L2.06053%206.78156L2.06049%206.78155L0.936077%206.5L2.06049%206.21845L2.06053%206.21844L2.1025%206.20793C2.75813%206.04366%203.26804%205.9159%203.6717%205.77097C4.08893%205.62116%204.41049%205.44716%204.67918%205.18026L4.67972%205.17972C4.94714%204.9123%205.12123%204.59033%205.27099%204.17282C5.4153%203.7705%205.5426%203.2624%205.70585%202.61079L5.71844%202.56053L5.71845%202.56049L6%201.43608L6.28155%202.56049L6.28156%202.56053L6.29207%202.6025C6.45634%203.25813%206.5841%203.76804%206.72903%204.1717C6.87884%204.58893%207.05284%204.91049%207.31974%205.17918L7.32028%205.17972C7.58769%205.44714%207.90967%205.62123%208.32718%205.77099C8.7295%205.9153%209.2376%206.0426%209.88921%206.20585L9.93947%206.21844Z%22%20fill%3D%22%23FF6224%22%20stroke%3D%22white%22%20stroke-width%3D%220.454737%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Email Agent"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isPhoneAgentVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1438")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2212%22%20height%3D%2213%22%20viewBox%3D%220%200%2012%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.93947%206.21844L9.93951%206.21845L11.0639%206.5L9.93951%206.78155L9.93947%206.78156L9.89749%206.79208C9.24187%206.95634%208.73196%207.0841%208.3283%207.22903C7.91107%207.37884%207.58951%207.55284%207.32082%207.81974L7.32028%207.82028C7.05286%208.08769%206.87877%208.40967%206.72901%208.82718C6.5847%209.2295%206.4574%209.7376%206.29415%2010.3892L6.28156%2010.4395L6.28155%2010.4395L6%2011.5639L5.71845%2010.4395L5.71844%2010.4395L5.70792%2010.3975C5.54366%209.74187%205.4159%209.23196%205.27097%208.8283C5.12116%208.41107%204.94716%208.08951%204.68026%207.82082L4.67972%207.82028C4.4123%207.55286%204.09033%207.37877%203.67282%207.22901C3.2705%207.0847%202.7624%206.9574%202.11079%206.79415L2.06053%206.78156L2.06049%206.78155L0.936077%206.5L2.06049%206.21845L2.06053%206.21844L2.1025%206.20793C2.75813%206.04366%203.26804%205.9159%203.6717%205.77097C4.08893%205.62116%204.41049%205.44716%204.67918%205.18026L4.67972%205.17972C4.94714%204.9123%205.12123%204.59033%205.27099%204.17282C5.4153%203.7705%205.5426%203.2624%205.70585%202.61079L5.71844%202.56053L5.71845%202.56049L6%201.43608L6.28155%202.56049L6.28156%202.56053L6.29207%202.6025C6.45634%203.25813%206.5841%203.76804%206.72903%204.1717C6.87884%204.58893%207.05284%204.91049%207.31974%205.17918L7.32028%205.17972C7.58769%205.44714%207.90967%205.62123%208.32718%205.77099C8.7295%205.9153%209.2376%206.0426%209.88921%206.20585L9.93947%206.21844Z%22%20fill%3D%22%23FF6224%22%20stroke%3D%22white%22%20stroke-width%3D%220.454737%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Phone Agent"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isAvatarWithNameVisible ? (
        <_Builtin.Block tag="div">{slotAvatarWithName}</_Builtin.Block>
      ) : null}
    </_Component>
  );
}
