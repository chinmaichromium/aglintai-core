import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CandidateSkills.module.css";

export function CandidateSkills({
  as: _Component = _Builtin.Block,
  textSkill = "Entry to Senior-Level Professionals",
}) {
  return (
    <_Component className={_utils.cx(_styles, "cdb-card-tag")} tag="div">
      {textSkill}
    </_Component>
  );
}
