"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EditOptionModule.module.css";

export function EditOptionModule({
  as: _Component = _Builtin.Block,
  onClickViewInSchedule = {},
  onClickEdit = {},
  onClickReschedule = {},
  onClickCancelSchedule = {},
  isViewScheduleVisible = true,
  isEditVisible = true,
  isRescheduleVisible = true,
  isCancelScheduleVisible = true,
  onClickResendInvite = {},
  isResendInviteVisible = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1329")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1331")}
        tag="div"
      >
        {isViewScheduleVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1330", "cursor-pointer")}
            tag="div"
            {...onClickViewInSchedule}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.875%200H11.625C11.8594%200.015625%2011.9844%200.140625%2012%200.375V4.125C11.9844%204.35938%2011.8594%204.48438%2011.625%204.5C11.3906%204.48438%2011.2656%204.35938%2011.25%204.125V1.28906L5.50781%207.00781C5.33594%207.16406%205.16406%207.16406%204.99219%207.00781C4.83594%206.83594%204.83594%206.66406%204.99219%206.49219L10.7109%200.75H7.875C7.64062%200.734375%207.51562%200.609375%207.5%200.375C7.51562%200.140625%207.64062%200.015625%207.875%200ZM1.5%200.75H4.875C5.10938%200.765625%205.23438%200.890625%205.25%201.125C5.23438%201.35938%205.10938%201.48437%204.875%201.5H1.5C1.28125%201.5%201.10156%201.57031%200.960938%201.71094C0.820312%201.85156%200.75%202.03125%200.75%202.25V10.5C0.75%2010.7188%200.820312%2010.8984%200.960938%2011.0391C1.10156%2011.1797%201.28125%2011.25%201.5%2011.25H9.75C9.96875%2011.25%2010.1484%2011.1797%2010.2891%2011.0391C10.4297%2010.8984%2010.5%2010.7188%2010.5%2010.5V7.125C10.5156%206.89062%2010.6406%206.76562%2010.875%206.75C11.1094%206.76562%2011.2344%206.89062%2011.25%207.125V10.5C11.2344%2010.9219%2011.0859%2011.2734%2010.8047%2011.5547C10.5234%2011.8359%2010.1719%2011.9844%209.75%2012H1.5C1.07812%2011.9844%200.726562%2011.8359%200.445312%2011.5547C0.164062%2011.2734%200.015625%2010.9219%200%2010.5V2.25C0.015625%201.82812%200.164062%201.47656%200.445312%201.19531C0.726562%200.914062%201.07812%200.765625%201.5%200.75Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"View In scheduler"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        {isEditVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1330", "cursor-pointer")}
            tag="div"
            {...onClickEdit}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.6641%201.05469C10.5078%200.914062%2010.3281%200.84375%2010.125%200.84375C9.92188%200.84375%209.74219%200.914062%209.58594%201.05469L8.97656%201.6875L10.3125%203.02344L10.9453%202.41406C11.0859%202.25781%2011.1562%202.07813%2011.1562%201.875C11.1562%201.67187%2011.0859%201.49219%2010.9453%201.33594L10.6641%201.05469ZM4.42969%206.23438C4.33594%206.32812%204.27344%206.44531%204.24219%206.58594L3.86719%208.13281L5.41406%207.78125C5.55469%207.73438%205.67188%207.66406%205.76562%207.57031L9.77344%203.5625L8.4375%202.22656L4.42969%206.23438ZM9.07031%200.539062C9.38281%200.242187%209.73438%200.09375%2010.125%200.09375C10.5312%200.09375%2010.8828%200.242187%2011.1797%200.539062L11.4609%200.820312C11.7578%201.13281%2011.9062%201.48437%2011.9062%201.875C11.9062%202.28125%2011.7578%202.63281%2011.4609%202.92969L6.30469%208.10938C6.10156%208.3125%205.85938%208.44531%205.57812%208.50781L3.46875%209C3.32812%209.01562%203.21094%208.97656%203.11719%208.88281C3.02344%208.78906%202.98438%208.67969%203%208.55469L3.49219%206.42188C3.55469%206.14062%203.6875%205.89844%203.89062%205.69531L9.07031%200.539062ZM1.875%201.5H4.875C5.10938%201.51563%205.23438%201.64062%205.25%201.875C5.23438%202.10938%205.10938%202.23437%204.875%202.25H1.875C1.5625%202.26563%201.29688%202.375%201.07812%202.57812C0.875%202.79687%200.765625%203.0625%200.75%203.375V10.125C0.765625%2010.4375%200.875%2010.7031%201.07812%2010.9219C1.29688%2011.125%201.5625%2011.2344%201.875%2011.25H8.625C8.9375%2011.2344%209.20312%2011.125%209.42188%2010.9219C9.625%2010.7031%209.73438%2010.4375%209.75%2010.125V7.125C9.76562%206.89062%209.89062%206.76562%2010.125%206.75C10.3594%206.76562%2010.4844%206.89062%2010.5%207.125V10.125C10.4844%2010.6562%2010.3047%2011.1016%209.96094%2011.4609C9.60156%2011.8047%209.15625%2011.9844%208.625%2012H1.875C1.34375%2011.9844%200.898438%2011.8047%200.539062%2011.4609C0.195312%2011.1016%200.015625%2010.6562%200%2010.125V3.375C0.015625%202.84375%200.195312%202.39844%200.539062%202.03906C0.898438%201.69531%201.34375%201.51563%201.875%201.5Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Edit"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        {isRescheduleVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1330", "cursor-pointer")}
            tag="div"
            {...onClickReschedule}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2214%22%20viewBox%3D%220%200%2012%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.351562%207.375C0.132813%207.34375%200.015625%207.21094%200%206.97656V6.78906C0.09375%205.66406%200.523437%204.73438%201.28906%204C2.05469%203.28125%203%202.90625%204.125%202.875H9.16406L7.80469%201.65625C7.64844%201.48438%207.64062%201.30469%207.78125%201.11719C7.95312%200.960937%208.13281%200.953125%208.32031%201.09375L10.3828%202.96875C10.4609%203.04687%2010.5%203.14062%2010.5%203.25C10.5%203.35938%2010.4609%203.45313%2010.3828%203.53125L8.32031%205.40625C8.13281%205.54688%207.95312%205.53906%207.78125%205.38281C7.64062%205.19531%207.64844%205.01562%207.80469%204.84375L9.16406%203.625H4.125C3.20312%203.64063%202.42969%203.95312%201.80469%204.5625C1.17969%205.15625%200.828125%205.91406%200.75%206.83594V7.02344C0.71875%207.24219%200.585938%207.35938%200.351562%207.375ZM11.6484%206.625C11.8672%206.65625%2011.9844%206.78906%2012%207.02344V7.21094C11.9062%208.33594%2011.4766%209.26562%2010.7109%2010C9.94531%2010.7188%209%2011.0938%207.875%2011.125H2.83594L4.19531%2012.3438C4.35156%2012.5156%204.35938%2012.6953%204.21875%2012.8828C4.04688%2013.0391%203.86719%2013.0469%203.67969%2012.9062L1.61719%2011.0312C1.53906%2010.9531%201.5%2010.8594%201.5%2010.75C1.5%2010.6406%201.53906%2010.5469%201.61719%2010.4688L3.67969%208.59375C3.86719%208.45312%204.04688%208.46094%204.21875%208.61719C4.35938%208.80469%204.35156%208.98438%204.19531%209.15625L2.83594%2010.375H7.875C8.79688%2010.3594%209.57031%2010.0469%2010.1953%209.4375C10.8203%208.84375%2011.1719%208.08594%2011.25%207.16406V6.97656C11.2812%206.75781%2011.4141%206.64062%2011.6484%206.625Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Reschedule"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        {isResendInviteVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1330", "cursor-pointer")}
            tag="div"
            {...onClickResendInvite}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2217%22%20height%3D%2216%22%20viewBox%3D%220%200%2017%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.5%203C2.20833%203%201.96875%203.09375%201.78125%203.28125C1.59375%203.46875%201.5%203.70833%201.5%204V5.25L7.625%209.71875C8.20833%2010.1146%208.79167%2010.1146%209.375%209.71875L15.5%205.25V4C15.5%203.70833%2015.4062%203.46875%2015.2188%203.28125C15.0312%203.09375%2014.7917%203%2014.5%203H2.5ZM1.5%206.5V12C1.5%2012.2917%201.59375%2012.5312%201.78125%2012.7188C1.96875%2012.9062%202.20833%2013%202.5%2013H14.5C14.7917%2013%2015.0312%2012.9062%2015.2188%2012.7188C15.4062%2012.5312%2015.5%2012.2917%2015.5%2012V6.5L9.96875%2010.5312C9.53125%2010.8646%209.04167%2011.0312%208.5%2011.0312C7.95833%2011.0312%207.46875%2010.8646%207.03125%2010.5312L1.5%206.5ZM0.5%204C0.520833%203.4375%200.71875%202.96875%201.09375%202.59375C1.46875%202.21875%201.9375%202.02083%202.5%202H14.5C15.0625%202.02083%2015.5312%202.21875%2015.9062%202.59375C16.2812%202.96875%2016.4792%203.4375%2016.5%204V12C16.4792%2012.5625%2016.2812%2013.0312%2015.9062%2013.4062C15.5312%2013.7812%2015.0625%2013.9792%2014.5%2014H2.5C1.9375%2013.9792%201.46875%2013.7812%201.09375%2013.4062C0.71875%2013.0312%200.520833%2012.5625%200.5%2012V4Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Resend Invite"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        {isCancelScheduleVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1330", "cursor-pointer")}
            tag="div"
            {...onClickCancelSchedule}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.75%200.375V1.5H8.25V0.375C8.26562%200.140625%208.39062%200.015625%208.625%200C8.85938%200.015625%208.98438%200.140625%209%200.375V1.5H9.75C10.1719%201.51563%2010.5234%201.66406%2010.8047%201.94531C11.0859%202.22656%2011.2344%202.57812%2011.25%203V3.75V4.5V10.5C11.2344%2010.9219%2011.0859%2011.2734%2010.8047%2011.5547C10.5234%2011.8359%2010.1719%2011.9844%209.75%2012H2.25C1.82812%2011.9844%201.47656%2011.8359%201.19531%2011.5547C0.914062%2011.2734%200.765625%2010.9219%200.75%2010.5V4.5V3.75V3C0.765625%202.57812%200.914062%202.22656%201.19531%201.94531C1.47656%201.66406%201.82812%201.51563%202.25%201.5H3V0.375C3.01562%200.140625%203.14062%200.015625%203.375%200C3.60938%200.015625%203.73438%200.140625%203.75%200.375ZM1.5%204.5V10.5C1.5%2010.7188%201.57031%2010.8984%201.71094%2011.0391C1.85156%2011.1797%202.03125%2011.25%202.25%2011.25H9.75C9.96875%2011.25%2010.1484%2011.1797%2010.2891%2011.0391C10.4297%2010.8984%2010.5%2010.7188%2010.5%2010.5V4.5H1.5ZM2.25%202.25C2.03125%202.25%201.85156%202.32031%201.71094%202.46094C1.57031%202.60156%201.5%202.78125%201.5%203V3.75H10.5V3C10.5%202.78125%2010.4297%202.60156%2010.2891%202.46094C10.1484%202.32031%209.96875%202.25%209.75%202.25H2.25ZM7.75781%206.63281L6.53906%207.875L7.75781%209.11719C7.91406%209.28906%207.91406%209.46094%207.75781%209.63281C7.58594%209.78906%207.41406%209.78906%207.24219%209.63281L6%208.41406L4.75781%209.63281C4.58594%209.78906%204.41406%209.78906%204.24219%209.63281C4.08594%209.46094%204.08594%209.28906%204.24219%209.11719L5.46094%207.875L4.24219%206.63281C4.08594%206.46094%204.08594%206.28906%204.24219%206.11719C4.41406%205.96094%204.58594%205.96094%204.75781%206.11719L6%207.33594L7.24219%206.11719C7.41406%205.96094%207.58594%205.96094%207.75781%206.11719C7.91406%206.28906%207.91406%206.46094%207.75781%206.63281Z%22%20fill%3D%22%23CC3340%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-red-600")}
              tag="div"
            >
              {"Cancel Schedule"}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
