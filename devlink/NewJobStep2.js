import React from "react";
import * as _Builtin from "./_Builtin";
import { CreateBtn } from "./CreateBtn";
import { SkillPill } from "./SkillPill";
import { SuggestedSkillPill } from "./SuggestedSkillPill";
import * as _utils from "./utils";
import _styles from "./NewJobStep2.module.css";

export function NewJobStep2({
  as: _Component = _Builtin.Block,
  slotJobDescription,
  onClickAddSkill = {},
  slotAddedSkill,
  slotSuggestedSkill,
  isAddSkillVisible = true,
  slotRequiredSKill,
  isJobHeaderVisible = true,
  onClickGenerate = {},
  isGenerateVisible = true,
  onClickProceed = {},
  isProceedDisable = true,
  isAddJob = true,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "job-sidebar-main-block",
        "cj-step-2",
        "height-auto",
        "width-780"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "cj-main-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cj-input-wrapper", "pb-80")}
          tag="div"
        >
          <_Builtin.Block tag="div">{"Job Description"}</_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "cj-richtext-editor-wrapper")}
            tag="div"
          >
            {slotJobDescription}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "cj-skills", "hide")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "cj-add-skill-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {"Required Skills"}
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                {slotRequiredSKill ??
                  (isAddSkillVisible ? (
                    <_Builtin.Block tag="div" {...onClickAddSkill}>
                      <CreateBtn />
                    </_Builtin.Block>
                  ) : null)}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "cj-skills-wrapper")}
                tag="div"
              >
                {slotAddedSkill ?? <SkillPill />}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "cj-suggested-skills")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-424")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cj-suggested-skills-header")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "fw-semibold")}
                    tag="div"
                  >
                    {"Suggested skills"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-27")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec430890155_Vectors-Wrapper.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-grey-600")}
                    tag="div"
                  >
                    {"Click on the ‘+’ icon to add the suggested skill."}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "cj-skills-wrapper")}
                tag="div"
              >
                {slotSuggestedSkill ?? <SuggestedSkillPill />}
              </_Builtin.Block>
              {isGenerateVisible ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "content-11", "active")}
                  tag="div"
                  {...onClickGenerate}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "vectors-wrapper-55")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec430890239_glitter.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "label-5")}
                    tag="div"
                  >
                    {"Generate"}
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
