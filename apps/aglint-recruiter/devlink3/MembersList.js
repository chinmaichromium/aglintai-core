"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import { ButtonSurface } from "./ButtonSurface";
import { ButtonOutlined } from "./ButtonOutlined";
import { MemberDetail } from "./MemberDetail";
import * as _utils from "./utils";
import _styles from "./MembersList.module.css";

export function MembersList({
  as: _Component = _Builtin.Block,
  slotImage,
  isShadow = false,
  isReverseShadow = false,
  textName = "Brooklyn Simmons (you)",
  textDesignation = "Decline",
  textTime = "11:30PM - 12:30PM PST",
  isWrongVisible = false,
  isCorrectVisible = true,
  isButtonVisible = false,
  onClickResendInvite = {},
  onClickCopyInvite = {},
  isDesignationVisible = false,
  isDetailVisible = false,
  onClickAccept = {},
  onClickDecline = {},
  isAcceptVisible = true,
  isDeclineVisible = true,
  isAcceptDeclineVisibe = false,
  slotMemberDetail,
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1650")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1647")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1651")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "avatar_40")} tag="div">
            {slotImage}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1652")}
            tag="div"
          >
            {isShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_9955_56669)%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%220.285714%22%20y%3D%220.285714%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22%23467B7C%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%20stroke-dasharray%3D%221.29%201.29%22%2F%3E%0A%3Cpath%20d%3D%22M7.01953%2010.666C5.47656%2010.666%204.48047%209.85547%204.37793%208.70801L4.37305%208.6543H5.25195L5.25684%208.70801C5.32031%209.41113%206.05273%209.85547%207.06836%209.85547C8.02539%209.85547%208.72363%209.3623%208.72363%208.64453V8.63965C8.72363%208.05371%208.31836%207.65332%207.35156%207.43848L6.57031%207.26758C5.15918%206.95508%204.54883%206.30566%204.54883%205.28516V5.28027C4.55371%204.11328%205.57422%203.28809%207.0293%203.28809C8.43555%203.28809%209.41699%204.11816%209.49023%205.16797L9.49512%205.23633H8.61621L8.60645%205.17285C8.50879%204.55273%207.92285%204.09375%207.00488%204.09863C6.12598%204.10352%205.44727%204.51855%205.44727%205.25586V5.26074C5.44727%205.82227%205.83301%206.20312%206.79004%206.41309L7.57129%206.58887C9.04102%206.91602%209.62207%207.50684%209.62207%208.52246V8.52734C9.62207%209.8457%208.5918%2010.666%207.01953%2010.666Z%22%20fill%3D%22%23467B7C%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cclippath%20id%3D%22clip0_9955_56669%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fclippath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
            {isReverseShadow ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_9955_56687)%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%220.285714%22%20y%3D%220.285714%22%20width%3D%2213.4286%22%20height%3D%2213.4286%22%20rx%3D%226.71429%22%20stroke%3D%22%23467B7C%22%20stroke-width%3D%220.571429%22%20stroke-miterlimit%3D%221.30541%22%2F%3E%0A%3Cpath%20d%3D%22M4.63184%2010.5V3.4541H7.32227C8.67969%203.4541%209.56836%204.28418%209.56836%205.54883V5.55859C9.56836%206.53516%209.03613%207.29688%208.15234%207.5752L9.7832%2010.5H8.75293L7.24414%207.71191H5.51074V10.5H4.63184ZM5.51074%206.93066H7.24414C8.14746%206.93066%208.66016%206.44727%208.66016%205.58789V5.57812C8.66016%204.73828%208.11328%204.23535%207.20508%204.23535H5.51074V6.93066Z%22%20fill%3D%22%23467B7C%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cclippath%20id%3D%22clip0_9955_56687%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fclippath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "name_designation")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1648")}
            tag="div"
          >
            <Text content={textName} weight="medium" />
            <_Builtin.Block tag="div">
              {isCorrectVisible ? (
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2215%22%20height%3D%2212%22%20viewbox%3D%220%200%2015%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%2012C6.40625%2011.9844%205.40625%2011.7188%204.5%2011.2031C3.59375%2010.6719%202.85938%209.9375%202.29688%209C1.76562%208.04688%201.5%207.04688%201.5%206C1.5%204.95312%201.76562%203.95313%202.29688%203C2.85938%202.0625%203.59375%201.32813%204.5%200.796875C5.40625%200.28125%206.40625%200.015625%207.5%200C8.59375%200.015625%209.59375%200.28125%2010.5%200.796875C11.4062%201.32813%2012.1406%202.0625%2012.7031%203C13.2344%203.95313%2013.5%204.95312%2013.5%206C13.5%207.04688%2013.2344%208.04688%2012.7031%209C12.1406%209.9375%2011.4062%2010.6719%2010.5%2011.2031C9.59375%2011.7188%208.59375%2011.9844%207.5%2012ZM10.1484%204.89844C10.3672%204.63281%2010.3672%204.36719%2010.1484%204.10156C9.88281%203.88281%209.61719%203.88281%209.35156%204.10156L6.75%206.70312L5.64844%205.60156C5.38281%205.38281%205.11719%205.38281%204.85156%205.60156C4.63281%205.86719%204.63281%206.13281%204.85156%206.39844L6.35156%207.89844C6.61719%208.11719%206.88281%208.11719%207.14844%207.89844L10.1484%204.89844L7.14844%207.89844L10.1484%204.89844Z%22%20fill%3D%22%23228F67%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              ) : null}
              {isWrongVisible ? (
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2215%22%20height%3D%2212%22%20viewbox%3D%220%200%2015%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%2012C6.40625%2011.9844%205.40625%2011.7188%204.5%2011.2031C3.59375%2010.6719%202.85938%209.9375%202.29688%209C1.76562%208.04688%201.5%207.04688%201.5%206C1.5%204.95312%201.76562%203.95313%202.29688%203C2.85938%202.0625%203.59375%201.32813%204.5%200.796875C5.40625%200.28125%206.40625%200.015625%207.5%200C8.59375%200.015625%209.59375%200.28125%2010.5%200.796875C11.4062%201.32813%2012.1406%202.0625%2012.7031%203C13.2344%203.95313%2013.5%204.95312%2013.5%206C13.5%207.04688%2013.2344%208.04688%2012.7031%209C12.1406%209.9375%2011.4062%2010.6719%2010.5%2011.2031C9.59375%2011.7188%208.59375%2011.9844%207.5%2012ZM5.60156%204.10156C5.38281%204.36719%205.38281%204.63281%205.60156%204.89844L6.70312%206L5.60156%207.10156C5.38281%207.36719%205.38281%207.63281%205.60156%207.89844C5.86719%208.11719%206.13281%208.11719%206.39844%207.89844L7.5%206.79688L8.60156%207.89844C8.86719%208.11719%209.13281%208.11719%209.39844%207.89844C9.61719%207.63281%209.61719%207.36719%209.39844%207.10156L8.29688%206L9.39844%204.89844C9.61719%204.63281%209.61719%204.36719%209.39844%204.10156C9.13281%203.88281%208.86719%203.88281%208.60156%204.10156L7.5%205.20312L6.39844%204.10156C6.13281%203.88281%205.86719%203.88281%205.60156%204.10156Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "ml-card-wrap")}
            tag="div"
          >
            {isDesignationVisible ? (
              <_Builtin.Block tag="div">
                <Text
                  content={textDesignation}
                  weight=""
                  color="neutral"
                  size="1"
                />
              </_Builtin.Block>
            ) : null}
            {isButtonVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1654")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "div-block-1653",
                    "cursor-pointer"
                  )}
                  tag="div"
                  {...onClickResendInvite}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons")}
                    value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.5%202.25C1.28125%202.25%201.10156%202.32031%200.960938%202.46094C0.820312%202.60156%200.75%202.78125%200.75%203V3.9375L5.34375%207.28906C5.78125%207.58594%206.21875%207.58594%206.65625%207.28906L11.25%203.9375V3C11.25%202.78125%2011.1797%202.60156%2011.0391%202.46094C10.8984%202.32031%2010.7188%202.25%2010.5%202.25H1.5ZM0.75%204.875V9V4.875V9C0.75%209.21875%200.820312%209.39844%200.960938%209.53906C1.10156%209.67969%201.28125%209.75%201.5%209.75H10.5C10.7188%209.75%2010.8984%209.67969%2011.0391%209.53906C11.1797%209.39844%2011.25%209.21875%2011.25%209V4.875L7.10156%207.89844C6.77344%208.14844%206.40625%208.27344%206%208.27344C5.59375%208.27344%205.22656%208.14844%204.89844%207.89844L0.75%204.875ZM0%203C0.015625%202.57812%200.164062%202.22656%200.445312%201.94531C0.726562%201.66406%201.07812%201.51563%201.5%201.5H10.5C10.9219%201.51563%2011.2734%201.66406%2011.5547%201.94531C11.8359%202.22656%2011.9844%202.57812%2012%203V9C11.9844%209.42188%2011.8359%209.77344%2011.5547%2010.0547C11.2734%2010.3359%2010.9219%2010.4844%2010.5%2010.5H1.5C1.07812%2010.4844%200.726562%2010.3359%200.445312%2010.0547C0.164062%209.77344%200.015625%209.42188%200%209V3Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-sm", "text-blue-500")}
                    tag="div"
                  >
                    {"Resend"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "div-block-1653",
                    "cursor-pointer"
                  )}
                  tag="div"
                  {...onClickCopyInvite}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons")}
                    value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.75%208.25C9.96875%208.25%2010.1484%208.17969%2010.2891%208.03906C10.4297%207.89844%2010.5%207.71875%2010.5%207.5V2.71875C10.5%202.60937%2010.4609%202.52344%2010.3828%202.46094L8.78906%200.867188C8.72656%200.789063%208.64062%200.75%208.53125%200.75H6C5.78125%200.75%205.60156%200.820312%205.46094%200.960938C5.32031%201.10156%205.25%201.28125%205.25%201.5V7.5C5.25%207.71875%205.32031%207.89844%205.46094%208.03906C5.60156%208.17969%205.78125%208.25%206%208.25H9.75H6H9.75ZM10.9219%201.92188C11.1406%202.14062%2011.25%202.40625%2011.25%202.71875V7.5C11.2344%207.92188%2011.0859%208.27344%2010.8047%208.55469C10.5234%208.83594%2010.1719%208.98438%209.75%209H6C5.57812%208.98438%205.22656%208.83594%204.94531%208.55469C4.66406%208.27344%204.51562%207.92188%204.5%207.5V1.5C4.51562%201.07812%204.66406%200.726562%204.94531%200.445312C5.22656%200.164062%205.57812%200.015625%206%200H8.53125C8.84375%200%209.10938%200.109375%209.32812%200.328125L10.9219%201.92188L9.32812%200.328125L10.9219%201.92188ZM2.25%203H3.75V3.75H2.25C2.03125%203.75%201.85156%203.82031%201.71094%203.96094C1.57031%204.10156%201.5%204.28125%201.5%204.5V10.5C1.5%2010.7188%201.57031%2010.8984%201.71094%2011.0391C1.85156%2011.1797%202.03125%2011.25%202.25%2011.25H6C6.21875%2011.25%206.39844%2011.1797%206.53906%2011.0391C6.67969%2010.8984%206.75%2010.7188%206.75%2010.5V9.75H7.5V10.5C7.48438%2010.9219%207.33594%2011.2734%207.05469%2011.5547C6.77344%2011.8359%206.42188%2011.9844%206%2012H2.25C1.82812%2011.9844%201.47656%2011.8359%201.19531%2011.5547C0.914062%2011.2734%200.765625%2010.9219%200.75%2010.5V4.5C0.765625%204.07812%200.914062%203.72656%201.19531%203.44531C1.47656%203.16406%201.82812%203.01563%202.25%203Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-sm", "text-blue-500")}
                    tag="div"
                  >
                    {"Booking Link"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isAcceptDeclineVisibe ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-1668")}
                tag="div"
              >
                {isAcceptVisible ? (
                  <_Builtin.Block tag="div" {...onClickAccept}>
                    <ButtonSurface
                      isRightIcon={false}
                      isLeftIcon={false}
                      size="1"
                      textButton="Accept"
                    />
                  </_Builtin.Block>
                ) : null}
                {isDeclineVisible ? (
                  <_Builtin.Block tag="div" {...onClickDecline}>
                    <ButtonOutlined
                      isRightIcon={false}
                      isLeftIcon={false}
                      size="1"
                      textButton="Decline"
                      color="error"
                    />
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey-600")}
          tag="div"
        >
          {textTime}
        </_Builtin.Block>
      </_Builtin.Block>
      {isDetailVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1659")}
          tag="div"
        >
          {slotMemberDetail ?? <MemberDetail />}
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
