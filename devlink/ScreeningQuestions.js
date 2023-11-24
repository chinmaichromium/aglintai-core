import React from "react";
import * as _Builtin from "./_Builtin";
import { ScreeningQuestionMenu } from "./ScreeningQuestionMenu";
import * as _utils from "./utils";
import _styles from "./ScreeningQuestions.module.css";

export function ScreeningQuestions({
  as: _Component = _Builtin.Block,
  onClickCulturalFit = {},
  onClickPersonalityFit = {},
  onClickSkillBased = {},
  onClickSoftSkill = {},
  onClickAddCustomQuestion = {},
  isSoftSkillMenuActive = true,
  isSoftSkillOn = true,
  slotSkillMenu,
  slotScreeningRight,
  textCountActiveQuestion = "11",
  isProceedDisable = true,
  onClickProceed = {},
  isAddJob = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "screening-question-wrappers")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "active-question-wrappers")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "color-grey-500", "fw-semibold")}
          tag="div"
        >
          {"Total Active Questions"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "fw-semibold", "color-black")}
          tag="div"
        >
          {textCountActiveQuestion}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "question-slot-tab-wrappers")}
        tag="div"
      >
        <_Builtin.Block
          id={_utils.cx(
            _styles,
            "w-node-_81d3a818-75ac-e76d-249a-24d52763c096-09de0af9"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "all-active-question")}
            tag="div"
          >
            {slotSkillMenu ?? <ScreeningQuestionMenu />}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "custom-question-menu-wrapper")}
            tag="div"
            {...onClickAddCustomQuestion}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "custom-question-inside")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2215%22%20viewBox%3D%220%200%2014%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7%201.1875C5.8151%201.20573%204.72135%201.4974%203.71875%202.0625C2.71615%202.64583%201.91406%203.44792%201.3125%204.46875C0.729167%205.50781%200.4375%206.60156%200.4375%207.75C0.4375%208.89844%200.729167%209.99219%201.3125%2011.0312C1.91406%2012.0521%202.71615%2012.8542%203.71875%2013.4375C4.72135%2014.0026%205.8151%2014.2943%207%2014.3125C8.1849%2014.2943%209.27865%2014.0026%2010.2812%2013.4375C11.2839%2012.8542%2012.0859%2012.0521%2012.6875%2011.0312C13.2708%209.99219%2013.5625%208.89844%2013.5625%207.75C13.5625%206.60156%2013.2708%205.50781%2012.6875%204.46875C12.0859%203.44792%2011.2839%202.64583%2010.2812%202.0625C9.27865%201.4974%208.1849%201.20573%207%201.1875ZM7%2014.75C5.72396%2014.7318%204.55729%2014.4219%203.5%2013.8203C2.44271%2013.2005%201.58594%2012.3438%200.929688%2011.25C0.309896%2010.138%200%208.97135%200%207.75C0%206.52865%200.309896%205.36198%200.929688%204.25C1.58594%203.15625%202.44271%202.29948%203.5%201.67969C4.55729%201.07812%205.72396%200.768229%207%200.75C8.27604%200.768229%209.44271%201.07812%2010.5%201.67969C11.5573%202.29948%2012.4141%203.15625%2013.0703%204.25C13.6901%205.36198%2014%206.52865%2014%207.75C14%208.97135%2013.6901%2010.138%2013.0703%2011.25C12.4141%2012.3438%2011.5573%2013.2005%2010.5%2013.8203C9.44271%2014.4219%208.27604%2014.7318%207%2014.75ZM6.78125%2010.375V7.96875H4.375C4.2474%207.95052%204.17448%207.8776%204.15625%207.75C4.17448%207.6224%204.2474%207.54948%204.375%207.53125H6.78125V5.125C6.79948%204.9974%206.8724%204.92448%207%204.90625C7.1276%204.92448%207.20052%204.9974%207.21875%205.125V7.53125H9.625C9.7526%207.54948%209.82552%207.6224%209.84375%207.75C9.82552%207.8776%209.7526%207.95052%209.625%207.96875H7.21875V10.375C7.20052%2010.5026%207.1276%2010.5755%207%2010.5938C6.8724%2010.5755%206.79948%2010.5026%206.78125%2010.375Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Add Custom Section"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          id={_utils.cx(
            _styles,
            "w-node-e0855013-6a0e-1cb9-9b41-336609de0b2e-09de0af9"
          )}
          tag="div"
        >
          {slotScreeningRight}
        </_Builtin.Block>
      </_Builtin.Block>
      {isAddJob ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "job-details-button-wrappers")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "proceed-to-apply")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "blue-process-button")}
              tag="div"
              {...onClickProceed}
            >
              <_Builtin.Block tag="div">
                {"Proceed to workflows"}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.1464%202.24645C9.95118%202.44171%209.95118%202.75829%2010.1464%202.95355L14.1929%207L0.499999%207C0.223857%207%20-5.04966e-07%207.22386%20-4.80825e-07%207.5C-4.56684e-07%207.77614%200.223857%208%200.5%208L14.2929%208L10.1464%2012.1464C9.95118%2012.3417%209.95118%2012.6583%2010.1464%2012.8536C10.3417%2013.0488%2010.6583%2013.0488%2010.8536%2012.8536L15.4536%208.25355C15.8488%207.85829%2015.8488%207.24171%2015.4536%206.84645L10.8536%202.24645C10.6583%202.05119%2010.3417%202.05119%2010.1464%202.24645Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            {isProceedDisable ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "grey-disable-process-button")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  {"Proceed to workflows"}
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.1464%202.24645C9.95118%202.44171%209.95118%202.75829%2010.1464%202.95355L14.1929%207L0.499999%207C0.223857%207%20-5.04966e-07%207.22386%20-4.80825e-07%207.5C-4.56684e-07%207.77614%200.223857%208%200.5%208L14.2929%208L10.1464%2012.1464C9.95118%2012.3417%209.95118%2012.6583%2010.1464%2012.8536C10.3417%2013.0488%2010.6583%2013.0488%2010.8536%2012.8536L15.4536%208.25355C15.8488%207.85829%2015.8488%207.24171%2015.4536%206.84645L10.8536%202.24645C10.6583%202.05119%2010.3417%202.05119%2010.1464%202.24645Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
