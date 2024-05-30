"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ActivitiesCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b9121ed1-beeb-6c7a-90d1-55885df7ceae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b9121ed1-beeb-6c7a-90d1-55885df7ceae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716979210746}},"actionLists":{"a-58":{"id":"a-58","title":"Req-recent-reschedule hover in","actionItemGroups":[{"actionItems":[{"id":"a-58-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.text-underline.text-blue-500.view-req","selectorGuids":["8dc9ea7b-682a-9ca2-5212-49b405bc4978","3ee0110b-cb1a-ae21-d0cd-e1755ffe60cb","8f018daf-ab50-e59f-ddde-28a63babe37d","756eda23-1f35-5cde-d354-ecb6f9929139"]},"value":0,"unit":""}},{"id":"a-58-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"b9121ed1-beeb-6c7a-90d1-55885df7ceae"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-58-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.text-underline.text-blue-500.view-req","selectorGuids":["8dc9ea7b-682a-9ca2-5212-49b405bc4978","3ee0110b-cb1a-ae21-d0cd-e1755ffe60cb","8f018daf-ab50-e59f-ddde-28a63babe37d","756eda23-1f35-5cde-d354-ecb6f9929139"]},"value":"none"}}]},{"actionItems":[{"id":"a-58-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.text-underline.text-blue-500.view-req","selectorGuids":["8dc9ea7b-682a-9ca2-5212-49b405bc4978","3ee0110b-cb1a-ae21-d0cd-e1755ffe60cb","8f018daf-ab50-e59f-ddde-28a63babe37d","756eda23-1f35-5cde-d354-ecb6f9929139"]},"value":1,"unit":""}},{"id":"a-58-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":true,"id":"b9121ed1-beeb-6c7a-90d1-55885df7ceae"},"globalSwatchId":"","rValue":247,"bValue":251,"gValue":249,"aValue":1}},{"id":"a-58-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.text-underline.text-blue-500.view-req","selectorGuids":["8dc9ea7b-682a-9ca2-5212-49b405bc4978","3ee0110b-cb1a-ae21-d0cd-e1755ffe60cb","8f018daf-ab50-e59f-ddde-28a63babe37d","756eda23-1f35-5cde-d354-ecb6f9929139"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716979214379}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ActivitiesCard({
  as: _Component = _Builtin.Block,
  slotImage,
  textTitle = "Interview completed",
  textTime = "5 Hours ago",
  isLineVisible = true,
  onClickViewTask = {},
  textDesc = "This is some text inside of a div block.",
  isViewTaskVisible = true,
  slotContent,
  onClickReschedule = {},
  isRescheduleVisible = true,
  isContentVisible = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-1404")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1531")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1530")}
          tag="div"
        >
          {slotImage}
        </_Builtin.Block>
        {isLineVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1532")}
            tag="div"
          />
        ) : null}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1533")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {textTitle}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey-600")}
          tag="div"
        >
          {textDesc}
        </_Builtin.Block>
        {isContentVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1785")}
            tag="div"
          >
            {slotContent}
          </_Builtin.Block>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1567")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-sm", "text-grey-600")}
            tag="div"
          >
            {textTime}
          </_Builtin.Block>
          {isRescheduleVisible ? (
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-sm",
                "text-underline",
                "text-grey-600",
                "cursor-pointer"
              )}
              tag="div"
              {...onClickReschedule}
            >
              {"Reschedule"}
            </_Builtin.Block>
          ) : null}
          {isViewTaskVisible ? (
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-sm",
                "text-underline",
                "text-grey-600",
                "cursor-pointer"
              )}
              tag="div"
              {...onClickViewTask}
            >
              {"View task"}
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
