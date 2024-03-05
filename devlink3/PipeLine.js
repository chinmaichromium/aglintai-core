import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PipeLine.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"697fa2ff-99c5-6b91-8e86-0db414c2ac1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697fa2ff-99c5-6b91-8e86-0db414c2ac1c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709547189751},"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"697fa2ff-99c5-6b91-8e86-0db414c2ac1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"697fa2ff-99c5-6b91-8e86-0db414c2ac1c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709547189751}},"actionLists":{"a-7":{"id":"a-7","title":"PipeLine[Hover In]","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".change_on_hover","selectorGuids":["5b76a6ba-661d-6823-a6c9-76862b02f9f7"]},"globalSwatchId":"","rValue":247,"bValue":251,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-7-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".change_on_hover","selectorGuids":["5b76a6ba-661d-6823-a6c9-76862b02f9f7"]},"globalSwatchId":"","rValue":233,"bValue":237,"gValue":235,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1709547192312},"a-8":{"id":"a-8","title":"PipeLine[Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"selector":".change_on_hover","selectorGuids":["5b76a6ba-661d-6823-a6c9-76862b02f9f7"]},"globalSwatchId":"","rValue":247,"bValue":251,"gValue":249,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1709547192312}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PipeLine({
  as: _Component = _Builtin.Block,
  isLeft = true,
  isRight = true,
  textName = "Qualified",
  textCandidateCount = "11 Candidates",
  onClickPipeline = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "pipeline")}
      data-w-id="697fa2ff-99c5-6b91-8e86-0db414c2ac1c"
      tag="div"
      {...onClickPipeline}
    >
      {isLeft ? (
        <_Builtin.Block className={_utils.cx(_styles, "arrow_left")} tag="div">
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%2234%22%20height%3D%2289%22%20viewBox%3D%220%200%2034%2089%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M34%200V89H0C0%2089%2034%2047%2034%2044.5C34%2042%200%200%200%200H34Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "text_bloxk", "change_on_hover")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "fw-semibold", "relative_2")}
          tag="div"
        >
          {textName}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "relative_2")} tag="div">
          {textCandidateCount}
        </_Builtin.Block>
        {isRight ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "is_start", "change_on_hover")}
            tag="div"
          />
        ) : null}
        {isLeft ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "is_end", "change_on_hover")}
            tag="div"
          />
        ) : null}
      </_Builtin.Block>
      {isRight ? (
        <_Builtin.Block className={_utils.cx(_styles, "arrow_right")} tag="div">
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%2234%22%20height%3D%2289%22%20viewBox%3D%220%200%2034%2089%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200L34%2044L0%2089.5V0Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "change_on_hover")}
        tag="div"
      />
    </_Component>
  );
}
