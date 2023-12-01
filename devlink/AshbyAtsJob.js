import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { AtsCard } from "./AtsCard";
import * as _utils from "./utils";
import _styles from "./AshbyAtsJob.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-948":{"id":"e-948","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-386","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-949"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"},"targets":[{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694910129600}},"actionLists":{"a-386":{"id":"a-386","title":"email-temp-editor-[close]","actionItemGroups":[{"actionItems":[{"id":"a-386-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":0,"unit":""}},{"id":"a-386-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".rd-email-edit-wrapper","selectorGuids":["2295ead5-85e1-b9a6-3337-5728082f803c"]},"xValue":500,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-386-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694910134507}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AshbyAtsJob({
  as: _Component = _Builtin.Block,
  textNumberOfJobs = "This is some text inside of a div block.",
  isImportDisable = true,
  onClickImport = {},
  onClickAll = {},
  onClickPublished = {},
  onClickClosed = {},
  slotAtsCard,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "ats-wrappers-outer")} tag="div">
      <_Builtin.Block tag="div">
        {
          "These jobs are retrieved from your greenhouse account. You can view/edit api key in "
        }
        <_Builtin.Strong>{"Integrations > "}</_Builtin.Strong>
        <br />
        <_Builtin.Strong>{"Ashby."}</_Builtin.Strong>
        {" Choose one or multiple jobs to import from Lever."}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "ats-import-wrappers")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "relative-1", "text-color-grey-600")}
          tag="div"
        >
          {textNumberOfJobs}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "relative-1")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "aui-button-wrap")}
            tag="div"
            tabIndex="0"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "aui-button", "is-button-bg-blue")}
              tag="div"
              tabIndex="0"
              {...onClickImport}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md")}
                tag="div"
              >
                {"Import"}
              </_Builtin.Block>
            </_Builtin.Block>
            {isImportDisable ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "is-button-disabled")}
                tag="div"
              >
                <_Builtin.Block tag="div">{"Import"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "ats-search-wrappers")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "ats-tab-wappers")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ats-tab-menu")}
            tag="div"
            {...onClickAll}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-relative", "zindex-1")}
              tag="div"
            >
              {"All"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "ats-tab-menu")}
            tag="div"
            {...onClickPublished}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-relative", "zindex-1")}
              tag="div"
            >
              {"Published"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "ats-tab-menu", "hide")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-relative", "zindex-1")}
              tag="div"
            >
              {"Internal"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "ats-tab-menu")}
            tag="div"
            {...onClickClosed}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-relative", "zindex-1")}
              tag="div"
            >
              {"Closed"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div" />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "slot-ats-cards-wrappers")}
        tag="div"
      >
        {slotAtsCard ?? <AtsCard />}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "pagination-wrappers", "hide")}
        tag="div"
      />
    </_Component>
  );
}
