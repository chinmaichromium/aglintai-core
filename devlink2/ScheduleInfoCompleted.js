import React from "react";
import * as _Builtin from "./_Builtin";
import { ScheduleInfoPlan } from "./ScheduleInfoPlan";
import * as _utils from "./utils";
import _styles from "./ScheduleInfoCompleted.module.css";

export function ScheduleInfoCompleted({
  as: _Component = _Builtin.Block,
  slotScheduleInfoCard,
  slotProfileImage,
  textName = "Tom Odel",
  textRole = "Senior Software Engineer",
  textLocation = "Onsite , San Fransisco",
  onClickViewProfile = {},
  onClickReschedule = {},
  onClickCancel = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "scheduled-info-wrap")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "schedule-info-sub-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "schedule-info-wrapps")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Schedule Info"}
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "mt-10")} tag="div">
            {slotScheduleInfoCard}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "schedule-info-wrapps")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Candidate Info"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1127")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1128")}
              tag="div"
            >
              {slotProfileImage}
            </_Builtin.Block>
            <_Builtin.Block tag="div">{textName}</_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1131")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1130")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2224%22%20height%3D%2225%22%20viewBox%3D%220%200%2024%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.39844%205.47656V7.27656H15.5984V5.47656C15.5734%205.10156%2015.3734%204.90156%2014.9984%204.87656H8.99844C8.62344%204.90156%208.42344%205.10156%208.39844%205.47656ZM7.19844%207.27656V5.47656C7.22344%204.97656%207.39844%204.55156%207.72344%204.20156C8.07344%203.87656%208.49844%203.70156%208.99844%203.67656H14.9984C15.4984%203.70156%2015.9234%203.87656%2016.2734%204.20156C16.5984%204.55156%2016.7734%204.97656%2016.7984%205.47656V7.27656H19.1984C19.8734%207.30156%2020.4359%207.53906%2020.8859%207.98906C21.3359%208.43906%2021.5734%209.00156%2021.5984%209.67656V19.2766C21.5734%2019.9516%2021.3359%2020.5141%2020.8859%2020.9641C20.4359%2021.4141%2019.8734%2021.6516%2019.1984%2021.6766H4.79844C4.12344%2021.6516%203.56094%2021.4141%203.11094%2020.9641C2.66094%2020.5141%202.42344%2019.9516%202.39844%2019.2766V9.67656C2.42344%209.00156%202.66094%208.43906%203.11094%207.98906C3.56094%207.53906%204.12344%207.30156%204.79844%207.27656H7.19844ZM16.1984%208.47656H7.79844H4.79844C4.44844%208.47656%204.16094%208.58906%203.93594%208.81406C3.71094%209.03906%203.59844%209.32656%203.59844%209.67656V13.2766H8.99844H10.1984H13.7984H14.9984H20.3984V9.67656C20.3984%209.32656%2020.2859%209.03906%2020.0609%208.81406C19.8359%208.58906%2019.5484%208.47656%2019.1984%208.47656H16.1984ZM20.3984%2014.4766H14.9984V16.2766C14.9984%2016.6266%2014.8859%2016.9141%2014.6609%2017.1391C14.4359%2017.3641%2014.1484%2017.4766%2013.7984%2017.4766H10.1984C9.84844%2017.4766%209.56094%2017.3641%209.33594%2017.1391C9.11094%2016.9141%208.99844%2016.6266%208.99844%2016.2766V14.4766H3.59844V19.2766C3.59844%2019.6266%203.71094%2019.9141%203.93594%2020.1391C4.16094%2020.3641%204.44844%2020.4766%204.79844%2020.4766H19.1984C19.5484%2020.4766%2019.8359%2020.3641%2020.0609%2020.1391C20.2859%2019.9141%2020.3984%2019.6266%2020.3984%2019.2766V14.4766ZM10.1984%2014.4766V16.2766H13.7984V14.4766H10.1984Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1129")}
              tag="div"
            >
              <_Builtin.Block tag="div">{textRole}</_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm", "text-grey-600")}
                tag="div"
              >
                {textLocation}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1132", "cursor-pointer")}
            tag="div"
            {...onClickViewProfile}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2213%22%20viewBox%3D%220%200%2012%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.125%201.53906C7.15625%201.19531%207.34375%201.00781%207.6875%200.976562H11.4375C11.7812%201.00781%2011.9688%201.19531%2012%201.53906V5.28906C11.9688%205.63281%2011.7812%205.82031%2011.4375%205.85156C11.0938%205.82031%2010.9062%205.63281%2010.875%205.28906V2.89844L5.64844%208.125C5.38281%208.34375%205.11719%208.34375%204.85156%208.125C4.63281%207.85938%204.63281%207.59375%204.85156%207.32812L10.0781%202.10156H7.6875C7.34375%202.07031%207.15625%201.88281%207.125%201.53906ZM1.6875%201.72656H4.6875C5.03125%201.75781%205.21875%201.94531%205.25%202.28906C5.21875%202.63281%205.03125%202.82031%204.6875%202.85156H1.6875C1.34375%202.88281%201.15625%203.07031%201.125%203.41406V11.2891C1.15625%2011.6328%201.34375%2011.8203%201.6875%2011.8516H9.5625C9.90625%2011.8203%2010.0938%2011.6328%2010.125%2011.2891V8.28906C10.1562%207.94531%2010.3438%207.75781%2010.6875%207.72656C11.0312%207.75781%2011.2188%207.94531%2011.25%208.28906V11.2891C11.2344%2011.7734%2011.0703%2012.1719%2010.7578%2012.4844C10.4453%2012.7969%2010.0469%2012.9609%209.5625%2012.9766H1.6875C1.20312%2012.9609%200.804688%2012.7969%200.492188%2012.4844C0.179688%2012.1719%200.015625%2011.7734%200%2011.2891V3.41406C0.015625%202.92969%200.179688%202.53125%200.492188%202.21875C0.804688%201.90625%201.20312%201.74219%201.6875%201.72656Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-blue-500")}
              tag="div"
            >
              {"View Candidate Profile"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "schedule-info-right-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "schedule-info-wrapps")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Schedule Status"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1119")}
            tag="div"
          >
            <_Builtin.Block tag="div">{"Confirmed"}</_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-grey-600")}
            tag="div"
          >
            {"Caniddate confirmed schedule"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1165")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1120", "cursor-pointer")}
              tag="div"
              {...onClickReschedule}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.539062%206.5625C0.195312%206.51562%200.015625%206.32031%200%205.97656V5.78906C0.09375%204.61719%200.539062%203.64844%201.33594%202.88281C2.14844%202.11719%203.14062%201.71875%204.3125%201.6875H7.125V0.84375C7.125%200.59375%207.20312%200.390625%207.35938%200.234375C7.51562%200.078125%207.71875%200%207.96875%200C8.17188%200%208.35156%200.0703125%208.50781%200.210938L10.3125%201.82812C10.4375%201.9375%2010.5%202.07813%2010.5%202.25C10.5%202.42187%2010.4375%202.5625%2010.3125%202.67188L8.50781%204.28906C8.35156%204.42969%208.17188%204.5%207.96875%204.5C7.73438%204.48438%207.53125%204.39844%207.35938%204.24219C7.20312%204.08594%207.125%203.89062%207.125%203.65625V2.8125H4.3125C3.4375%202.82813%202.70312%203.11719%202.10938%203.67969C1.51562%204.25781%201.1875%204.97656%201.125%205.83594V6.02344C1.07812%206.36719%200.882812%206.54688%200.539062%206.5625ZM8.25%203.02344L9.09375%202.25L8.25%201.5V3.02344ZM11.4609%205.4375C11.8047%205.48438%2011.9844%205.67969%2012%206.02344V6.21094C11.9062%207.38281%2011.4609%208.35156%2010.6641%209.11719C9.85156%209.88281%208.85938%2010.2812%207.6875%2010.3125H4.875V11.1562C4.875%2011.3906%204.79688%2011.5938%204.64062%2011.7656C4.48438%2011.9219%204.28125%2012%204.03125%2012C3.82812%2012%203.64844%2011.9297%203.49219%2011.7891L1.6875%2010.1719C1.5625%2010.0625%201.5%209.92188%201.5%209.75C1.5%209.57812%201.5625%209.4375%201.6875%209.32812L3.49219%207.71094C3.64844%207.57031%203.82812%207.5%204.03125%207.5C4.26562%207.51562%204.46875%207.60156%204.64062%207.75781C4.79688%207.91406%204.875%208.10938%204.875%208.34375V9.1875H7.6875C8.5625%209.17188%209.29688%208.88281%209.89062%208.32031C10.4844%207.74219%2010.8125%207.02344%2010.875%206.16406V5.97656C10.9219%205.63281%2011.1172%205.45312%2011.4609%205.4375ZM3.75%209L2.90625%209.75L3.75%2010.5234V9Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-blue-500")}
                tag="div"
              >
                {"Reschedule"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1164", "cursor-pointer")}
              tag="div"
              {...onClickCancel}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.75%200C4.09375%200.03125%204.28125%200.21875%204.3125%200.5625V1.5H7.6875V0.5625C7.71875%200.21875%207.90625%200.03125%208.25%200C8.59375%200.03125%208.78125%200.21875%208.8125%200.5625V1.5H9.75C10.1719%201.51563%2010.5234%201.66406%2010.8047%201.94531C11.0859%202.22656%2011.2344%202.57812%2011.25%203V3.375V4.5V10.5C11.2344%2010.9219%2011.0859%2011.2734%2010.8047%2011.5547C10.5234%2011.8359%2010.1719%2011.9844%209.75%2012H2.25C1.82812%2011.9844%201.47656%2011.8359%201.19531%2011.5547C0.914062%2011.2734%200.765625%2010.9219%200.75%2010.5V4.5V3.375V3C0.765625%202.57812%200.914062%202.22656%201.19531%201.94531C1.47656%201.66406%201.82812%201.51563%202.25%201.5H3.1875V0.5625C3.21875%200.21875%203.40625%200.03125%203.75%200ZM10.125%204.5H1.875V10.5C1.89062%2010.7344%202.01562%2010.8594%202.25%2010.875H9.75C9.98438%2010.8594%2010.1094%2010.7344%2010.125%2010.5V4.5ZM7.89844%206.58594L6.79688%207.6875L7.89844%208.78906C8.11719%209.05469%208.11719%209.32031%207.89844%209.58594C7.63281%209.80469%207.36719%209.80469%207.10156%209.58594L6%208.48438L4.89844%209.58594C4.63281%209.80469%204.36719%209.80469%204.10156%209.58594C3.88281%209.32031%203.88281%209.05469%204.10156%208.78906L5.20312%207.6875L4.10156%206.58594C3.88281%206.32031%203.88281%206.05469%204.10156%205.78906C4.36719%205.57031%204.63281%205.57031%204.89844%205.78906L6%206.89062L7.10156%205.78906C7.36719%205.57031%207.63281%205.57031%207.89844%205.78906C8.11719%206.05469%208.11719%206.32031%207.89844%206.58594Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-red-500")}
                tag="div"
              >
                {"Cancel Schedule"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
