import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./InsightTagExperienced.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-75":{"id":"e-75","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-76"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a5b106de-2998-1705-53ba-c2270cc46ddc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a5b106de-2998-1705-53ba-c2270cc46ddc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701261972083},"e-76":{"id":"e-76","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-75"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a5b106de-2998-1705-53ba-c2270cc46ddc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a5b106de-2998-1705-53ba-c2270cc46ddc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701261972084},"e-77":{"id":"e-77","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-78"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b19b8edd-bcc0-295a-2e63-12627249d7b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b19b8edd-bcc0-295a-2e63-12627249d7b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262342850},"e-78":{"id":"e-78","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-77"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b19b8edd-bcc0-295a-2e63-12627249d7b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b19b8edd-bcc0-295a-2e63-12627249d7b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262342850},"e-79":{"id":"e-79","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3038a02d-fcbc-a8f7-9002-13ebb05867c3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3038a02d-fcbc-a8f7-9002-13ebb05867c3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262345236},"e-80":{"id":"e-80","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3038a02d-fcbc-a8f7-9002-13ebb05867c3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3038a02d-fcbc-a8f7-9002-13ebb05867c3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262345236},"e-81":{"id":"e-81","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1fc745f6-abd1-5e5f-1fb5-55d8776e6d6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1fc745f6-abd1-5e5f-1fb5-55d8776e6d6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262345465},"e-82":{"id":"e-82","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-81"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1fc745f6-abd1-5e5f-1fb5-55d8776e6d6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1fc745f6-abd1-5e5f-1fb5-55d8776e6d6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262345465},"e-83":{"id":"e-83","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fb94fc40-c274-144b-41bf-8e265360d9fd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fb94fc40-c274-144b-41bf-8e265360d9fd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262539280},"e-84":{"id":"e-84","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-83"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fb94fc40-c274-144b-41bf-8e265360d9fd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fb94fc40-c274-144b-41bf-8e265360d9fd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262539280},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6eb87153-cfa0-b98b-10c2-ce1903734dc2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6eb87153-cfa0-b98b-10c2-ce1903734dc2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262541182},"e-86":{"id":"e-86","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-85"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6eb87153-cfa0-b98b-10c2-ce1903734dc2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6eb87153-cfa0-b98b-10c2-ce1903734dc2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701262541182},"e-93":{"id":"e-93","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-94"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96be9bee-b5fd-8c1a-c6b5-52b7d2075bb8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701429950336},"e-94":{"id":"e-94","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96be9bee-b5fd-8c1a-c6b5-52b7d2075bb8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701429950336}},"actionLists":{"a-39":{"id":"a-39","title":"insight-tag-[hover-in]","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":"none"}},{"id":"a-39-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-39-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":"flex"}}]},{"actionItems":[{"id":"a-39-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701261976638},"a-40":{"id":"a-40","title":"insight-tag-[hover-out]","actionItemGroups":[{"actionItems":[{"id":"a-40-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-40-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701262166061},"a-41":{"id":"a-41","title":"insight-tag-[hover-in] 2","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":"none"}},{"id":"a-41-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-41-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":"flex"}}]},{"actionItems":[{"id":"a-41-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701261976638},"a-42":{"id":"a-42","title":"insight-tag-[hover-out] 2","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-42-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".insight-detail","selectorGuids":["2393fd03-f0fb-15bc-d1c0-fc209f77fadf"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701262166061}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InsightTagExperienced({
  as: _Component = _Builtin.Block,
  experience = "--",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "insight-tag")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "insight-tag-block")}
        data-w-id="6eb87153-cfa0-b98b-10c2-ce1903734dc2"
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "insight-tag-icon")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/651419e73ebbb12148f96ccc/65672e8a0a8db174e9dcdde5_%F0%9F%92%BC.svg"
        />
        <_Builtin.Block tag="div">{"Experienced"}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "insight-tag-number")}
          tag="div"
        >
          {experience}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "insight-detail")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "tag-tooltip-icon")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/651419e73ebbb12148f96ccc/65672fb0dbfe0c6c92ab38a6_Frame%201852.svg"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "insight-detail-top")}
          tag="div"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/651419e73ebbb12148f96ccc/65672e8a0a8db174e9dcdde5_%F0%9F%92%BC.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold", "text-color-black")}
            tag="div"
          >
            {"Experienced"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey-600")}
          tag="div"
        >
          {
            "Has a wealth of practical knowledge and hands-on expertise in the field, gained through a substantial period of active participation and learning."
          }
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
