"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import { ButtonSurface } from "./ButtonSurface";
import { MemberListCard } from "./MemberListCard";
import * as _utils from "./utils";
import _styles from "./ModuleMembers.module.css";

export function ModuleMembers({
  as: _Component = _Builtin.Block,
  onClickAddMember = {},
  slotQualifiedMemberList,
  onClickAddTrainee = {},
  slotMembersInTraining,
  isMembersTrainingVisible = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "module-member-wrap")} tag="div">
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "mm-header-wrap")}
          tag="div"
        >
          <Text content="Qualified" />
          <ButtonSurface
            onClickButton={onClickAddMember}
            size="2"
            textButton="Add"
            isRightIcon={false}
            isLeftIcon={false}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "mm-slot-list-card")}
          tag="div"
        >
          {slotQualifiedMemberList ?? <MemberListCard />}
        </_Builtin.Block>
      </_Builtin.Block>
      {isMembersTrainingVisible ? (
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "mm-header-wrap")}
            tag="div"
          >
            <Text content="Members in training" />
            <ButtonSurface
              onClickButton={onClickAddTrainee}
              size="2"
              textButton="Add"
              isRightIcon={false}
              isLeftIcon={false}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "mm-slot-list-card")}
            tag="div"
          >
            {slotMembersInTraining ?? <MemberListCard />}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
