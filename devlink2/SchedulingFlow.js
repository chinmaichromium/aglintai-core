import React from "react";
import * as _Builtin from "./_Builtin";
import { ScheduleOptions } from "./ScheduleOptions";
import { InterviewPlanCard } from "./InterviewPlanCard";
import * as _utils from "./utils";
import _styles from "./SchedulingFlow.module.css";

export function SchedulingFlow({
  as: _Component = _Builtin.Block,
  textRole = "Senior Software Engineer",
  textLocation = "Onsite , San Fransisco",
  slotPlanCard,
  onClickJobSettings = {},
  slotScheduleOptions,
}) {
  return (
    <_Component className={_utils.cx(_styles, "schedule-wrap-flow")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1189")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1191")}
          tag="div"
        >
          {slotScheduleOptions ?? <ScheduleOptions />}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1190")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1093")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold")}
              tag="div"
            >
              {"Job Details"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1095")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16.3984%2012.5V14.3H23.5984V12.5C23.5734%2012.125%2023.3734%2011.925%2022.9984%2011.9H16.9984C16.6234%2011.925%2016.4234%2012.125%2016.3984%2012.5ZM15.1984%2014.3V12.5C15.2234%2012%2015.3984%2011.575%2015.7234%2011.225C16.0734%2010.9%2016.4984%2010.725%2016.9984%2010.7H22.9984C23.4984%2010.725%2023.9234%2010.9%2024.2734%2011.225C24.5984%2011.575%2024.7734%2012%2024.7984%2012.5V14.3H27.1984C27.8734%2014.325%2028.4359%2014.5625%2028.8859%2015.0125C29.3359%2015.4625%2029.5734%2016.025%2029.5984%2016.7V26.3C29.5734%2026.975%2029.3359%2027.5375%2028.8859%2027.9875C28.4359%2028.4375%2027.8734%2028.675%2027.1984%2028.7H12.7984C12.1234%2028.675%2011.5609%2028.4375%2011.1109%2027.9875C10.6609%2027.5375%2010.4234%2026.975%2010.3984%2026.3V16.7C10.4234%2016.025%2010.6609%2015.4625%2011.1109%2015.0125C11.5609%2014.5625%2012.1234%2014.325%2012.7984%2014.3H15.1984ZM24.1984%2015.5H15.7984H12.7984C12.4484%2015.5%2012.1609%2015.6125%2011.9359%2015.8375C11.7109%2016.0625%2011.5984%2016.35%2011.5984%2016.7V20.3H16.9984H18.1984H21.7984H22.9984H28.3984V16.7C28.3984%2016.35%2028.2859%2016.0625%2028.0609%2015.8375C27.8359%2015.6125%2027.5484%2015.5%2027.1984%2015.5H24.1984ZM28.3984%2021.5H22.9984V23.3C22.9984%2023.65%2022.8859%2023.9375%2022.6609%2024.1625C22.4359%2024.3875%2022.1484%2024.5%2021.7984%2024.5H18.1984C17.8484%2024.5%2017.5609%2024.3875%2017.3359%2024.1625C17.1109%2023.9375%2016.9984%2023.65%2016.9984%2023.3V21.5H11.5984V26.3C11.5984%2026.65%2011.7109%2026.9375%2011.9359%2027.1625C12.1609%2027.3875%2012.4484%2027.5%2012.7984%2027.5H27.1984C27.5484%2027.5%2027.8359%2027.3875%2028.0609%2027.1625C28.2859%2026.9375%2028.3984%2026.65%2028.3984%2026.3V21.5ZM18.1984%2021.5V23.3H21.7984V21.5H18.1984Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">
                <_Builtin.Block tag="div">{textRole}</_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-sm", "text-gray-600")}
                  tag="div"
                >
                  {textLocation}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1097")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold")}
              tag="div"
            >
              {"Interview Plan"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-gray-600")}
              tag="div"
            >
              {"Interview plan will be set from corresponding"}
              <_Builtin.Span
                className={_utils.cx(
                  _styles,
                  "text-blue-500",
                  "text-underline"
                )}
                {...onClickJobSettings}
              >
                {" job settings"}
              </_Builtin.Span>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "interview-member-card-list")}
              tag="div"
            >
              {slotPlanCard ?? <InterviewPlanCard />}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
