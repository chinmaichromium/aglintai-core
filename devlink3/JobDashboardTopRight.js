"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./JobDashboardTopRight.module.css";

export function JobDashboardTopRight({
  as: _Component = _Builtin.Block,
  slotJobStatus,
  onClickEdit = {},
  slotCloseJobButton,
  isPublish = true,
  isEditError = false,
  slotPublishButton,
  slotAddCandidateButton,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "jobdashboardtop_right")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1717")}
        tag="div"
      >
        {slotAddCandidateButton}
      </_Builtin.Block>
      {isPublish ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "button_primary",
            "greay_btn-copy-copy"
          )}
          tag="div"
          {...onClickEdit}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.6641%204.05469C13.5078%203.91406%2013.3281%203.84375%2013.125%203.84375C12.9219%203.84375%2012.7422%203.91406%2012.5859%204.05469L11.9766%204.6875L13.3125%206.02344L13.9453%205.41406C14.0859%205.25781%2014.1562%205.07812%2014.1562%204.875C14.1562%204.67188%2014.0859%204.49219%2013.9453%204.33594L13.6641%204.05469ZM7.42969%209.23438C7.33594%209.32812%207.27344%209.44531%207.24219%209.58594L6.86719%2011.1328L8.41406%2010.7812C8.55469%2010.7344%208.67188%2010.6641%208.76562%2010.5703L12.7734%206.5625L11.4375%205.22656L7.42969%209.23438ZM12.0703%203.53906C12.3828%203.24219%2012.7344%203.09375%2013.125%203.09375C13.5312%203.09375%2013.8828%203.24219%2014.1797%203.53906L14.4609%203.82031C14.7578%204.13281%2014.9062%204.48438%2014.9062%204.875C14.9062%205.28125%2014.7578%205.63281%2014.4609%205.92969L9.30469%2011.1094C9.10156%2011.3125%208.85938%2011.4453%208.57812%2011.5078L6.46875%2012C6.32812%2012.0156%206.21094%2011.9766%206.11719%2011.8828C6.02344%2011.7891%205.98438%2011.6797%206%2011.5547L6.49219%209.42188C6.55469%209.14062%206.6875%208.89844%206.89062%208.69531L12.0703%203.53906ZM4.875%204.5H7.875C8.10938%204.51562%208.23438%204.64062%208.25%204.875C8.23438%205.10938%208.10938%205.23438%207.875%205.25H4.875C4.5625%205.26562%204.29688%205.375%204.07812%205.57812C3.875%205.79688%203.76562%206.0625%203.75%206.375V13.125C3.76562%2013.4375%203.875%2013.7031%204.07812%2013.9219C4.29688%2014.125%204.5625%2014.2344%204.875%2014.25H11.625C11.9375%2014.2344%2012.2031%2014.125%2012.4219%2013.9219C12.625%2013.7031%2012.7344%2013.4375%2012.75%2013.125V10.125C12.7656%209.89062%2012.8906%209.76562%2013.125%209.75C13.3594%209.76562%2013.4844%209.89062%2013.5%2010.125V13.125C13.4844%2013.6562%2013.3047%2014.1016%2012.9609%2014.4609C12.6016%2014.8047%2012.1562%2014.9844%2011.625%2015H4.875C4.34375%2014.9844%203.89844%2014.8047%203.53906%2014.4609C3.19531%2014.1016%203.01562%2013.6562%203%2013.125V6.375C3.01562%205.84375%203.19531%205.39844%203.53906%205.03906C3.89844%204.69531%204.34375%204.51562%204.875%204.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Edit Job Details"}</_Builtin.Block>
          {isEditError ? (
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex", "fixedd")}
              value="%3Csvg%20width%3D%2222%22%20height%3D%2220%22%20viewBox%3D%220%200%2022%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11%201.25C11.599%201.27604%2012.0547%201.53646%2012.3672%202.03125L20.8047%2016.4062C21.0651%2016.9271%2021.0651%2017.4479%2020.8047%2017.9688C20.4922%2018.4635%2020.0365%2018.724%2019.4375%2018.75H2.5625C1.96354%2018.724%201.50781%2018.4635%201.19531%2017.9688C0.934896%2017.4479%200.934896%2016.9271%201.19531%2016.4062L9.67188%202.03125C9.98438%201.53646%2010.4271%201.27604%2011%201.25ZM11%206.25C10.4271%206.30208%2010.1146%206.61458%2010.0625%207.1875V11.5625C10.1146%2012.1354%2010.4271%2012.4479%2011%2012.5C11.5729%2012.4479%2011.8854%2012.1354%2011.9375%2011.5625V7.1875C11.8854%206.61458%2011.5729%206.30208%2011%206.25ZM12.25%2015C12.25%2014.6354%2012.1328%2014.3359%2011.8984%2014.1016C11.6641%2013.8672%2011.3646%2013.75%2011%2013.75C10.6354%2013.75%2010.3359%2013.8672%2010.1016%2014.1016C9.86719%2014.3359%209.75%2014.6354%209.75%2015C9.75%2015.3646%209.86719%2015.6641%2010.1016%2015.8984C10.3359%2016.1328%2010.6354%2016.25%2011%2016.25C11.3646%2016.25%2011.6641%2016.1328%2011.8984%2015.8984C12.1328%2015.6641%2012.25%2015.3646%2012.25%2015Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          ) : null}
        </_Builtin.Block>
      ) : null}
      {isPublish ? (
        <_Builtin.Block tag="div">{slotPublishButton}</_Builtin.Block>
      ) : null}
      <_Builtin.Block tag="div">{slotCloseJobButton}</_Builtin.Block>
    </_Component>
  );
}
