import React from "react";
import * as _Builtin from "./_Builtin";
import { PipeLine } from "./PipeLine";
import { ScheduleCardSmall } from "./ScheduleCardSmall";
import { GraphBlock } from "./GraphBlock";
import { ModuleCard } from "./ModuleCard";
import * as _utils from "./utils";
import _styles from "./JobDashboard.module.css";

export function JobDashboard({
  as: _Component = _Builtin.Block,
  textTopMatchPercentage = "27%",
  textGoodMatchPercentage = "27%",
  textAverageMatchPercentage = "27%",
  textBelowAveragePercentage = "27%",
  textNotAMatchPercentage = "27%",
  textTopMatchCount = "11 Candidates",
  textGoodMatchCount = "11 Candidates",
  textAveageMatchCount = "11 Candidates",
  textBelowAverageCount = "11 Candidates",
  textNotAMatchCount = "11 Candidates",
  slotPipeline,
  slotModuleCard,
  onClickAssistant = {},
  textCandidateCount = "125",
  slotScheduleCardSmall,
  slotLocationGraphBlock,
  slotSkillGraphBlock,
}) {
  return (
    <_Component className={_utils.cx(_styles, "jobdashboard")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "jobdadhboard_left", "hide-scrollbar")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "jd_titleblock")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "score_settings_top")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job_candidate_count")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {textCandidateCount}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-gray-600")}
                tag="div"
              >
                {"Total Applicants"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "score_settings")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "jd_stats_block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "jd_stat")}
            id={_utils.cx(
              _styles,
              "w-node-_7e6f5c12-f288-2e98-8a50-7d5c06b69091-06b69083"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold", "text-purple")}
              tag="div"
            >
              {"Top Match"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xl", "fw-semibold")}
              tag="div"
            >
              {textTopMatchPercentage}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate_flex")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-gray-600")}
                tag="div"
              >
                {textTopMatchCount}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "jd_stat")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold", "text-green")}
              tag="div"
            >
              {"Good Match"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xl", "fw-semibold")}
              tag="div"
            >
              {textGoodMatchPercentage}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate_flex")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-gray-600")}
                tag="div"
              >
                {textGoodMatchCount}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "jd_stat")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold", "text-yellow")}
              tag="div"
            >
              {"Average Match"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xl", "fw-semibold")}
              tag="div"
            >
              {textAverageMatchPercentage}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate_flex")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-gray-600")}
                tag="div"
              >
                {textAveageMatchCount}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "jd_stat")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold", "text-orange")}
              tag="div"
            >
              {"Below average"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xl", "fw-semibold")}
              tag="div"
            >
              {textBelowAveragePercentage}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate_flex")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-gray-600")}
                tag="div"
              >
                {textBelowAverageCount}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "jd_stat")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold", "text-red")}
              tag="div"
            >
              {"Not a match"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xl", "fw-semibold")}
              tag="div"
            >
              {textNotAMatchPercentage}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate_flex")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-gray-600")}
                tag="div"
              >
                {textNotAMatchCount}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "jd_pipeline_pillls")}
          tag="div"
        >
          {slotPipeline ?? (
            <>
              <PipeLine isLeft={false} />
              <PipeLine isLeft={true} isRight={true} />
              <PipeLine isLeft={true} isRight={true} />
              <PipeLine isLeft={true} isRight={true} />
              <PipeLine isLeft={true} isRight={false} />
            </>
          )}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "jd_graph")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "graph_wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-gray-600")}
              tag="div"
            >
              {"Upcoming Schedules"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "slot_schedulecards")}
              tag="div"
            >
              {slotScheduleCardSmall ?? (
                <>
                  <ScheduleCardSmall />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "schedulecardsmall")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "card_date")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-sm")}
                        tag="div"
                      >
                        {"March"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "big_date")}
                        tag="div"
                      >
                        {"02"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-sm",
                          "text-capitalize"
                        )}
                        tag="div"
                      >
                        {"Monday"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "schedule_info")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "fw-semibold")}
                        tag="div"
                      >
                        {"Personality and Culture"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "timer_flex")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {"09:00 AM to 09:30 AM"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "meeting_type")}
                          tag="div"
                        >
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "embed_flex")}
                            value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_4066_197815)%22%3E%0A%3Cpath%20d%3D%22M20%2010C20%2011.06%2019.92%2012.12%2019.74%2013.14C19.2%2016.52%2016.52%2019.2%2013.14%2019.74C12.12%2019.92%2011.06%2020%2010%2020C8.94%2020%207.88%2019.92%206.86%2019.74C3.48%2019.2%200.8%2016.52%200.26%2013.14C0.08%2012.12%200%2011.06%200%2010C0%208.94%200.08%207.88%200.26%206.86C0.8%203.48%203.48%200.8%206.86%200.26C7.88%200.08%208.94%200%2010%200C11.06%200%2012.12%200.08%2013.14%200.26C16.52%200.8%2019.2%203.48%2019.74%206.86C19.92%207.88%2020%208.94%2020%2010Z%22%20fill%3D%22url(%23paint0_linear_4066_197815)%22%2F%3E%0A%3Cpath%20d%3D%22M15.9405%2016.2402H5.86055C5.20055%2016.2402%204.56055%2015.8802%204.26055%2015.3002C3.90055%2014.6202%204.04055%2013.8002%204.58055%2013.2602L11.6005%206.24023H6.56055C5.18055%206.24023%204.06055%205.12023%204.06055%203.74023H13.3405C14.0005%203.74023%2014.6405%204.10023%2014.9405%204.68023C15.3005%205.36023%2015.1605%206.18023%2014.6205%206.72023L7.62055%2013.7602H13.4405C14.8205%2013.7602%2015.9405%2014.8602%2015.9405%2016.2402Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_4066_197815%22%20x1%3D%22473.32%22%20y1%3D%221912.24%22%20x2%3D%221526.68%22%20y2%3D%2287.76%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%230845BF%22%2F%3E%0A%3Cstop%20offset%3D%220.1911%22%20stop-color%3D%22%230950DE%22%2F%3E%0A%3Cstop%20offset%3D%220.3823%22%20stop-color%3D%22%230B59F6%22%2F%3E%0A%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22%230B5CFF%22%2F%3E%0A%3Cstop%20offset%3D%220.6732%22%20stop-color%3D%22%230E5EFE%22%2F%3E%0A%3Cstop%20offset%3D%220.7774%22%20stop-color%3D%22%231665FC%22%2F%3E%0A%3Cstop%20offset%3D%220.8633%22%20stop-color%3D%22%23246FF9%22%2F%3E%0A%3Cstop%20offset%3D%220.9388%22%20stop-color%3D%22%23387FF4%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%234F90EE%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_4066_197815%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                          />
                          <_Builtin.Block tag="div">{"Zoom"}</_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "timer_flex")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {"Candidate :"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "meeting_type")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "avatar_sample")}
                            loading="lazy"
                            width="auto"
                            height="auto"
                            alt=""
                            src="https://uploads-ssl.webflow.com/651125c25c47e8494b8e9eb8/65d8b0e9a0e9f0451bc3536c_user2.png"
                          />
                          <_Builtin.Block tag="div">
                            {"Alejandro Garnecho"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "schedulecardsmall")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "card_date")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-sm")}
                        tag="div"
                      >
                        {"March"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "big_date")}
                        tag="div"
                      >
                        {"11"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-sm",
                          "text-capitalize"
                        )}
                        tag="div"
                      >
                        {"Friday"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "schedule_info")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "fw-semibold")}
                        tag="div"
                      >
                        {"C++ Coading"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "timer_flex")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {"09:00 AM to 09:30 AM"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "meeting_type")}
                          tag="div"
                        >
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "embed_flex")}
                            value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.8125%209.44531L14.4375%2010.5703C14.6406%2010.6641%2014.7969%2010.8125%2014.9062%2011.0156C15%2011.2031%2015.0234%2011.4062%2014.9766%2011.625L14.4141%2014.25C14.2891%2014.7188%2013.9844%2014.9688%2013.5%2015C13.3594%2015%2013.2188%2015%2013.0781%2015C12.9688%2014.9844%2012.8594%2014.9766%2012.75%2014.9766C10.9219%2014.8203%209.27344%2014.2656%207.80469%2013.3125C6.33594%2012.3594%205.17188%2011.1172%204.3125%209.58594C3.45312%208.07031%203.01562%206.375%203%204.5C3.03125%204.01562%203.28125%203.71094%203.75%203.58594L6.375%203.02344C6.59375%202.97656%206.79688%203.00781%206.98438%203.11719C7.1875%203.21094%207.33594%203.35937%207.42969%203.5625L8.55469%206.1875C8.71094%206.60938%208.61719%206.97656%208.27344%207.28906L7.33594%208.0625C7.97656%209.15625%208.84375%2010.0234%209.9375%2010.6641L10.7109%209.72656C11.0234%209.38281%2011.3906%209.28906%2011.8125%209.44531ZM13.5%2014.25C13.5938%2014.25%2013.6562%2014.2031%2013.6875%2014.1094L14.25%2011.4844C14.2656%2011.375%2014.2266%2011.3047%2014.1328%2011.2734L11.5078%2010.1484C11.4297%2010.1172%2011.3594%2010.1328%2011.2969%2010.1953L10.5234%2011.1562C10.2422%2011.4375%209.92188%2011.4922%209.5625%2011.3203C8.34375%2010.6172%207.38281%209.65625%206.67969%208.4375C6.50781%208.07812%206.5625%207.75781%206.84375%207.47656L7.80469%206.70312C7.86719%206.64062%207.88281%206.57031%207.85156%206.49219L6.72656%203.86719C6.67969%203.77344%206.60938%203.73437%206.51562%203.75L3.89062%204.3125C3.79688%204.34375%203.75%204.40625%203.75%204.5C3.76562%206.3125%204.21094%207.95312%205.08594%209.42188C5.94531%2010.8906%207.10938%2012.0547%208.57812%2012.9141C10.0469%2013.7891%2011.6875%2014.2344%2013.5%2014.25Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                          <_Builtin.Block tag="div">
                            {"Phone Call"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "timer_flex")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {"Candidate :"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "meeting_type")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "avatar_sample")}
                            loading="lazy"
                            width="auto"
                            height="auto"
                            alt=""
                            src="https://uploads-ssl.webflow.com/651125c25c47e8494b8e9eb8/65d6e2cb5b27ca42119ddbb3_you.jpg"
                          />
                          <_Builtin.Block tag="div">
                            {"Timoty Ricks"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </>
              )}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-gray-600", "is_link")}
              tag="div"
            >
              {"View All Schedules"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "graph_wrapper-copy")}
            tag="div"
          >
            {slotLocationGraphBlock ?? <GraphBlock />}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "jd_graph_skills")}
          tag="div"
        >
          {slotSkillGraphBlock ?? <GraphBlock />}
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed_css_block")}
          id={_utils.cx(
            _styles,
            "w-node-_4e73c7f1-714f-6276-03b3-5a9eff08013a-06b69083"
          )}
          value="%3Cstyle%3E%0A.jobdadhboard_left%3A%3A-webkit-scrollbar%20%7B%0A%20%20display%3A%20none%3B%0A%7D%0A.hide-scrollbar%3A%3A-webkit-scrollbar%20%7B%0A%20%20display%3A%20none%3B%0A%7D%0A%3C%2Fstyle%3E"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "jobdadhboard_right")}
        id={_utils.cx(
          _styles,
          "w-node-_7e6f5c12-f288-2e98-8a50-7d5c06b690d3-06b69083"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "jd_aglint_toggle")}
          tag="div"
          {...onClickAssistant}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2240%22%20height%3D%2240%22%20rx%3D%228%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M27.9063%2020.0062C25.2125%2019.3312%2023.8625%2019%2022.9313%2018.0687C22%2017.1312%2021.6688%2015.7875%2020.9938%2013.0938L20%209.125L19.0062%2013.0938C18.3312%2015.7875%2018%2017.1375%2017.0687%2018.0687C16.1312%2019%2014.7875%2019.3312%2012.0938%2020.0062L8.125%2021L12.0938%2021.9938C14.7875%2022.6688%2016.1375%2023%2017.0687%2023.9313C18%2024.8688%2018.3312%2026.2125%2019.0062%2028.9063L20%2032.875L20.9938%2028.9063C21.6688%2026.2125%2022%2024.8625%2022.9313%2023.9313C23.8688%2023%2025.2125%2022.6688%2027.9063%2021.9938L31.875%2021L27.9063%2020.0062Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M27.9063%2020.0062C25.2125%2019.3312%2023.8625%2019%2022.9313%2018.0687C22%2017.1312%2021.6688%2015.7875%2020.9938%2013.0938L20%209.125L19.0062%2013.0938C18.3312%2015.7875%2018%2017.1375%2017.0687%2018.0687C16.1312%2019%2014.7875%2019.3312%2012.0938%2020.0062L8.125%2021L12.0938%2021.9938C14.7875%2022.6688%2016.1375%2023%2017.0687%2023.9313C18%2024.8688%2018.3312%2026.2125%2019.0062%2028.9063L20%2032.875L20.9938%2028.9063C21.6688%2026.2125%2022%2024.8625%2022.9313%2023.9313C23.8688%2023%2025.2125%2022.6688%2027.9063%2021.9938L31.875%2021L27.9063%2020.0062Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M29.6367%209.66615C28.7388%209.44115%2028.2888%209.33073%2027.9784%209.02031C27.668%208.70781%2027.5576%208.2599%2027.3326%207.36198L27.0013%206.03906L26.6701%207.36198C26.4451%208.2599%2026.3346%208.7099%2026.0242%209.02031C25.7117%209.33073%2025.2638%209.44115%2024.3659%209.66615L23.043%209.9974L24.3659%2010.3286C25.2638%2010.5536%2025.7138%2010.6641%2026.0242%2010.9745C26.3346%2011.287%2026.4451%2011.7349%2026.6701%2012.6328L27.0013%2013.9557L27.3326%2012.6328C27.5576%2011.7349%2027.668%2011.2849%2027.9784%2010.9745C28.2909%2010.6641%2028.7388%2010.5536%2029.6367%2010.3286L30.9596%209.9974L29.6367%209.66615Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M29.6367%209.66615C28.7388%209.44115%2028.2888%209.33073%2027.9784%209.02031C27.668%208.70781%2027.5576%208.2599%2027.3326%207.36198L27.0013%206.03906L26.6701%207.36198C26.4451%208.2599%2026.3346%208.7099%2026.0242%209.02031C25.7117%209.33073%2025.2638%209.44115%2024.3659%209.66615L23.043%209.9974L24.3659%2010.3286C25.2638%2010.5536%2025.7138%2010.6641%2026.0242%2010.9745C26.3346%2011.287%2026.4451%2011.7349%2026.6701%2012.6328L27.0013%2013.9557L27.3326%2012.6328C27.5576%2011.7349%2027.668%2011.2849%2027.9784%2010.9745C28.2909%2010.6641%2028.7388%2010.5536%2029.6367%2010.3286L30.9596%209.9974L29.6367%209.66615Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_5874_116344)%22%3E%0A%3Cpath%20d%3D%22M33.5813%2014.8013C33.0425%2014.6663%2032.7725%2014.6%2032.5863%2014.4138C32.4%2014.2263%2032.3338%2013.9575%2032.1988%2013.4188L32%2012.625L31.8013%2013.4188C31.6663%2013.9575%2031.6%2014.2275%2031.4138%2014.4138C31.2263%2014.6%2030.9575%2014.6663%2030.4188%2014.8013L29.625%2015L30.4188%2015.1988C30.9575%2015.3338%2031.2275%2015.4%2031.4138%2015.5863C31.6%2015.7738%2031.6663%2016.0425%2031.8013%2016.5813L32%2017.375L32.1988%2016.5813C32.3338%2016.0425%2032.4%2015.7725%2032.5863%2015.5863C32.7738%2015.4%2033.0425%2015.3338%2033.5813%2015.1988L34.375%2015L33.5813%2014.8013Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M33.5813%2014.8013C33.0425%2014.6663%2032.7725%2014.6%2032.5863%2014.4138C32.4%2014.2263%2032.3338%2013.9575%2032.1988%2013.4188L32%2012.625L31.8013%2013.4188C31.6663%2013.9575%2031.6%2014.2275%2031.4138%2014.4138C31.2263%2014.6%2030.9575%2014.6663%2030.4188%2014.8013L29.625%2015L30.4188%2015.1988C30.9575%2015.3338%2031.2275%2015.4%2031.4138%2015.5863C31.6%2015.7738%2031.6663%2016.0425%2031.8013%2016.5813L32%2017.375L32.1988%2016.5813C32.3338%2016.0425%2032.4%2015.7725%2032.5863%2015.5863C32.7738%2015.4%2033.0425%2015.3338%2033.5813%2015.1988L34.375%2015L33.5813%2014.8013Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_5874_116344%22%3E%0A%3Crect%20width%3D%226%22%20height%3D%226%22%20fill%3D%22white%22%20transform%3D%22translate(29%2012)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Ask to Assistant"}
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {
              "Utilize AI to efficiently handle all tasks related to this job, ensuring seamless execution of all tasks traditionally performed manually."
            }
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "jd_modulecard")}
          tag="div"
        >
          {slotModuleCard ?? (
            <>
              <ModuleCard textDescription="Phone screening is not enabled " />
              <ModuleCard textDescription="Phone screening is not enabled." />
              <ModuleCard textDescription="Phone screening is not enabled." />
            </>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
