import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CandidateExperienceCard.module.css";

export function CandidateExperienceCard({
  as: _Component = _Builtin.Block,
  slotLogo,
  textRole = "Senior Software Engineer",
  textCompany = "Google",
  textDate = "May 2017",
  isBadgeVisible = false,
  isCurrentVisible = false,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "cvs-experiences-block")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "div-block-791")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "cvs-company-logo")}
          tag="div"
        >
          {slotLogo}
        </_Builtin.Block>
        {isCurrentVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-790")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xsm")}
              tag="div"
            >
              {"Current"}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "cvs-company-info-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "one-line-clamp")}
          tag="div"
        >
          {textRole}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey-600", "one-line-clamp")}
          tag="div"
        >
          {textCompany}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-sm",
            "fw-semibold",
            "text-grey-500"
          )}
          tag="div"
        >
          {textDate}
        </_Builtin.Block>
      </_Builtin.Block>
      {isBadgeVisible ? (
        <_Builtin.Block className={_utils.cx(_styles, "book-badge")} tag="div">
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/65688607b7bfaa9734b192a5_%F0%9F%92%BC.svg"
          />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
