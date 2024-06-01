"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AvatarWithName.module.css";

export function AvatarWithName({
  as: _Component = _Builtin.Block,
  isReverseShadowVisible = false,
  isShadowVisible = false,
  slotAvatar,
  textName = "Mike",
  textRole = "Senior software engineer",
  isRoleVisible = false,
  isTickVisible = false,
  isAvatarVisible = true,
  isCandidateIconVisible = false,
}) {
  return (
    <_Component className={_utils.cx(_styles, "avatarwithname")} tag="div">
      {isCandidateIconVisible ? (
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icons")}
          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.25%22%20y%3D%220.25%22%20width%3D%2223.5%22%20height%3D%2223.5%22%20rx%3D%2211.75%22%20fill%3D%22%23F8F9F9%22%2F%3E%0A%3Crect%20x%3D%220.25%22%20y%3D%220.25%22%20width%3D%2223.5%22%20height%3D%2223.5%22%20rx%3D%2211.75%22%20stroke%3D%22%23D8DCDE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Cpath%20d%3D%22M12%2012C11.4531%2012%2010.9531%2011.8672%2010.5%2011.6016C10.0469%2011.3359%209.67969%2010.9688%209.39844%2010.5C9.13281%2010.0312%209%209.53125%209%209C9%208.46875%209.13281%207.96875%209.39844%207.5C9.67969%207.03125%2010.0469%206.66406%2010.5%206.39844C10.9531%206.13281%2011.4531%206%2012%206C12.5469%206%2013.0469%206.13281%2013.5%206.39844C13.9531%206.66406%2014.3203%207.03125%2014.6016%207.5C14.8672%207.96875%2015%208.46875%2015%209C15%209.53125%2014.8672%2010.0312%2014.6016%2010.5C14.3203%2010.9688%2013.9531%2011.3359%2013.5%2011.6016C13.0469%2011.8672%2012.5469%2012%2012%2012ZM10.9219%2013.125H13.0781C14.25%2013.1562%2015.2344%2013.5625%2016.0312%2014.3438C16.8125%2015.1406%2017.2188%2016.125%2017.25%2017.2969C17.25%2017.5%2017.1797%2017.6641%2017.0391%2017.7891C16.9141%2017.9297%2016.75%2018%2016.5469%2018H7.45312C7.25%2018%207.08594%2017.9297%206.96094%2017.7891C6.82031%2017.6641%206.75%2017.5%206.75%2017.2969C6.78125%2016.125%207.1875%2015.1406%207.96875%2014.3438C8.76562%2013.5625%209.75%2013.1562%2010.9219%2013.125Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      ) : null}
      {isAvatarVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-757")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "slot_useravatr", "small")}
            tag="div"
          >
            {slotAvatar}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-758")}
            tag="div"
          >
            {isShadowVisible ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.25%22%20y%3D%220.25%22%20width%3D%2213.5%22%20height%3D%2213.5%22%20rx%3D%226.75%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%220.25%22%20y%3D%220.25%22%20width%3D%2213.5%22%20height%3D%2213.5%22%20rx%3D%226.75%22%20stroke%3D%22%23467B7C%22%20stroke-width%3D%220.5%22%20stroke-miterlimit%3D%221.30541%22%20stroke-dasharray%3D%222%202%22%2F%3E%0A%3Cpath%20d%3D%22M6.97559%2010.8164C5.33496%2010.8164%204.20703%2010.0234%204.07031%208.80664H5.28711C5.48535%209.42188%206.07324%209.8252%207.0166%209.8252C8.00781%209.8252%208.71191%209.35352%208.71191%208.68359V8.66992C8.71191%208.1709%208.33594%207.82227%207.42676%207.60352L6.28516%207.33008C4.9043%207.00195%204.28223%206.40039%204.28223%205.34082V5.33398C4.28223%204.11035%205.45801%203.1875%207.02344%203.1875C8.56836%203.1875%209.6416%203.95996%209.80566%205.16309H8.63672C8.47949%204.58203%207.90527%204.17871%207.0166%204.17871C6.1416%204.17871%205.49902%204.62988%205.49902%205.2793V5.29297C5.49902%205.79199%205.86816%206.10645%206.73633%206.31836L7.87109%206.5918C9.25879%206.92676%209.92871%207.52832%209.92871%208.58105V8.59473C9.92871%209.90723%208.65039%2010.8164%206.97559%2010.8164Z%22%20fill%3D%22%23467B7C%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
            {isReverseShadowVisible ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20rx%3D%227.25%22%20fill%3D%22%23467B7C%22%2F%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20rx%3D%227.25%22%20stroke%3D%22%23F5FCFC%22%20stroke-width%3D%220.5%22%20stroke-miterlimit%3D%221.30541%22%2F%3E%0A%3Cpath%20d%3D%22M5.41016%2011.546V4.46094H8.11554C9.48051%204.46094%2010.3741%205.29563%2010.3741%206.56731V6.57713C10.3741%207.55912%209.83893%208.32507%208.95023%208.60494L10.5902%2011.546H9.55416L8.03698%208.74242H6.29395V11.546H5.41016ZM6.29395%207.95682H8.03698C8.94532%207.95682%209.46087%207.47074%209.46087%206.60659V6.59677C9.46087%205.75225%208.91095%205.24653%207.9977%205.24653H6.29395V7.95682Z%22%20fill%3D%22%23F5FCFC%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "one-line-clamp")}
        tag="div"
      >
        {textName}
      </_Builtin.Block>
      {isRoleVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey-500")}
          tag="div"
        >
          {textRole}
        </_Builtin.Block>
      ) : null}
      {isTickVisible ? (
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icons")}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%2012C4.90625%2011.9844%203.90625%2011.7188%203%2011.2031C2.09375%2010.6719%201.35938%209.9375%200.796875%209C0.265625%208.04688%200%207.04688%200%206C0%204.95312%200.265625%203.95313%200.796875%203C1.35938%202.0625%202.09375%201.32813%203%200.796875C3.90625%200.28125%204.90625%200.015625%206%200C7.09375%200.015625%208.09375%200.28125%209%200.796875C9.90625%201.32813%2010.6406%202.0625%2011.2031%203C11.7344%203.95313%2012%204.95312%2012%206C12%207.04688%2011.7344%208.04688%2011.2031%209C10.6406%209.9375%209.90625%2010.6719%209%2011.2031C8.09375%2011.7188%207.09375%2011.9844%206%2012ZM8.64844%204.89844C8.86719%204.63281%208.86719%204.36719%208.64844%204.10156C8.38281%203.88281%208.11719%203.88281%207.85156%204.10156L5.25%206.70312L4.14844%205.60156C3.88281%205.38281%203.61719%205.38281%203.35156%205.60156C3.13281%205.86719%203.13281%206.13281%203.35156%206.39844L4.85156%207.89844C5.11719%208.11719%205.38281%208.11719%205.64844%207.89844L8.64844%204.89844Z%22%20fill%3D%22%23228F67%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      ) : null}
    </_Component>
  );
}
