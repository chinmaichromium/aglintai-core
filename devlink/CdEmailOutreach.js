import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonGenerate } from "./ButtonGenerate";
import { MailLink } from "./MailLink";
import { EmailSuccessCard } from "./EmailSuccessCard";
import * as _utils from "./utils";
import _styles from "./CdEmailOutreach.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-948":{"id":"e-948","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-386","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-949"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"},"targets":[{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694910129600},"e-1352":{"id":"e-1352","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-471","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1353"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".email-temp-wrap","originalId":"0064b8cf-9479-2476-c6a2-f47e4400269f","appliesTo":"CLASS"},"targets":[{"selector":".email-temp-wrap","originalId":"0064b8cf-9479-2476-c6a2-f47e4400269f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697459365602},"e-1353":{"id":"e-1353","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-472","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1352"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".email-temp-wrap","originalId":"0064b8cf-9479-2476-c6a2-f47e4400269f","appliesTo":"CLASS"},"targets":[{"selector":".email-temp-wrap","originalId":"0064b8cf-9479-2476-c6a2-f47e4400269f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697459365605},"e-1382":{"id":"e-1382","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-489","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1383"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".email-temp-wrap","originalId":"a79fecd5-634e-0ac6-7d1c-48e52d7d03d9","appliesTo":"CLASS"},"targets":[{"selector":".email-temp-wrap","originalId":"a79fecd5-634e-0ac6-7d1c-48e52d7d03d9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697550948479},"e-1383":{"id":"e-1383","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-490","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1382"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".email-temp-wrap","originalId":"a79fecd5-634e-0ac6-7d1c-48e52d7d03d9","appliesTo":"CLASS"},"targets":[{"selector":".email-temp-wrap","originalId":"a79fecd5-634e-0ac6-7d1c-48e52d7d03d9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697550948479},"e-1386":{"id":"e-1386","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-471","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1387"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f093b60-cbb7-c451-fc49-a51ba7c34eb3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f093b60-cbb7-c451-fc49-a51ba7c34eb3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697701976388},"e-1387":{"id":"e-1387","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-472","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1386"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f093b60-cbb7-c451-fc49-a51ba7c34eb3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f093b60-cbb7-c451-fc49-a51ba7c34eb3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697701976390},"e-1498":{"id":"e-1498","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-552","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1499"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f1038ff1-5110-690b-7a36-c9d18aec8401","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f1038ff1-5110-690b-7a36-c9d18aec8401","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704186554405},"e-1499":{"id":"e-1499","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-553","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1498"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f1038ff1-5110-690b-7a36-c9d18aec8401","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f1038ff1-5110-690b-7a36-c9d18aec8401","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704186554407}},"actionLists":{"a-386":{"id":"a-386","title":"email-temp-editor-[close]","actionItemGroups":[{"actionItems":[{"id":"a-386-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":0,"unit":""}},{"id":"a-386-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".rd-email-edit-wrapper","selectorGuids":["2295ead5-85e1-b9a6-3337-5728082f803c"]},"xValue":500,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-386-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694910134507},"a-471":{"id":"a-471","title":"Email Interaction Hover In","actionItemGroups":[{"actionItems":[{"id":"a-471-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":0,"unit":""}},{"id":"a-471-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-471-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"none"}}]},{"actionItems":[{"id":"a-471-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":1,"unit":""}},{"id":"a-471-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-471-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697459378737},"a-472":{"id":"a-472","title":"Email Interaction Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-472-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":0,"unit":""}},{"id":"a-472-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-472-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697459378737},"a-489":{"id":"a-489","title":"Email Interaction Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-489-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":0,"unit":""}},{"id":"a-489-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-489-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"none"}}]},{"actionItems":[{"id":"a-489-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":1,"unit":""}},{"id":"a-489-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-489-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697459378737},"a-490":{"id":"a-490","title":"Email Interaction Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-490-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":0,"unit":""}},{"id":"a-490-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-490-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697459378737},"a-552":{"id":"a-552","title":"copy mail interaction","actionItemGroups":[{"actionItems":[{"id":"a-552-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".copy-mail-tool-tip","selectorGuids":["0aac1b2f-0e01-1f3d-aab8-69042aec9c19"]},"value":0,"unit":""}},{"id":"a-552-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".copy-mail-tool-tip","selectorGuids":["0aac1b2f-0e01-1f3d-aab8-69042aec9c19"]},"value":"none"}}]},{"actionItems":[{"id":"a-552-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".copy-mail-tool-tip","selectorGuids":["0aac1b2f-0e01-1f3d-aab8-69042aec9c19"]},"value":1,"unit":""}},{"id":"a-552-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".copy-mail-tool-tip","selectorGuids":["0aac1b2f-0e01-1f3d-aab8-69042aec9c19"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704186559492},"a-553":{"id":"a-553","title":"copy mail interaction 2","actionItemGroups":[{"actionItems":[{"id":"a-553-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".copy-mail-tool-tip","selectorGuids":["0aac1b2f-0e01-1f3d-aab8-69042aec9c19"]},"value":0,"unit":""}},{"id":"a-553-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".copy-mail-tool-tip","selectorGuids":["0aac1b2f-0e01-1f3d-aab8-69042aec9c19"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704186559492}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CdEmailOutreach({
  as: _Component = _Builtin.Block,
  onClickBack = {},
  slotTemplateButton,
  onClickEdit = {},
  slotInputMailId,
  onClickCopyMail = {},
  slotInputSubject,
  slotInputBody,
  slotButtonGenerate,
  onClickSendMail = {},
  slotLinkMail,
  slotEmailSent,
  isEmailBodyVisible = true,
  slotLottie,
  isLoading = false,
  slotLoadingIcon,
  isEmailInputVisible = true,
  isEmailSuccess = true,
  onClickAddFollowUp = {},
  onClickOpenInbox = {},
  slotEmailSuccessCard,
  isRegenerateVisible = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "email-out-dialog")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "email-out-head")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "back-wrappers-email")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "email-out-back")}
            tag="div"
            {...onClickBack}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2211%22%20height%3D%2210%22%20viewBox%3D%220%200%2011%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.611718%204.55937L4.46172%200.709374C4.62214%200.563541%204.78255%200.563541%204.94297%200.709374C5.0888%200.869791%205.0888%201.03021%204.94297%201.19062L1.70547%204.45H9.95234C10.1711%204.46458%2010.2878%204.58125%2010.3023%204.8C10.2878%205.01875%2010.1711%205.13542%209.95234%205.15H1.70547L4.94297%208.40937C5.0888%208.56979%205.0888%208.73021%204.94297%208.89062C4.78255%209.03646%204.62214%209.03646%204.46172%208.89062L0.611718%205.04062C0.465885%204.88021%200.465885%204.71979%200.611718%204.55937Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Back"}</_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Email Outreach"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "email-template-right")}
          tag="div"
        >
          <_Builtin.Block tag="div">{slotTemplateButton}</_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "email-out-edit-btn")}
            tag="div"
            {...onClickEdit}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.7555%201.18437C10.6096%201.05312%2010.4419%200.987499%2010.2523%200.987499C10.0628%200.987499%209.89505%201.05312%209.74922%201.18437L9.18047%201.775L10.4273%203.02187L11.018%202.45312C11.1492%202.30729%2011.2148%202.13958%2011.2148%201.95C11.2148%201.76042%2011.1492%201.59271%2011.018%201.44687L10.7555%201.18437ZM4.93672%206.01875C4.84922%206.10625%204.79089%206.21562%204.76172%206.34687L4.41172%207.79062L5.85547%207.4625C5.98672%207.41875%206.09609%207.35312%206.18359%207.26562L9.92422%203.525L8.67734%202.27812L4.93672%206.01875ZM9.26797%200.703124C9.55964%200.426041%209.88776%200.287499%2010.2523%200.287499C10.6315%200.287499%2010.9596%200.426041%2011.2367%200.703124L11.4992%200.965624C11.7763%201.25729%2011.9148%201.58542%2011.9148%201.95C11.9148%202.32917%2011.7763%202.65729%2011.4992%202.93437L6.68672%207.76875C6.49714%207.95833%206.27109%208.08229%206.00859%208.14062L4.03984%208.6C3.90859%208.61458%203.79922%208.57812%203.71172%208.49062C3.62422%208.40312%203.58776%208.30104%203.60234%208.18437L4.06172%206.19375C4.12005%205.93125%204.24401%205.70521%204.43359%205.51562L9.26797%200.703124ZM2.55234%201.6H5.35234C5.57109%201.61458%205.68776%201.73125%205.70234%201.95C5.68776%202.16875%205.57109%202.28542%205.35234%202.3H2.55234C2.26068%202.31458%202.01276%202.41667%201.80859%202.60625C1.61901%202.81042%201.51693%203.05833%201.50234%203.35V9.65C1.51693%209.94167%201.61901%2010.1896%201.80859%2010.3938C2.01276%2010.5833%202.26068%2010.6854%202.55234%2010.7H8.85234C9.14401%2010.6854%209.39193%2010.5833%209.59609%2010.3938C9.78568%2010.1896%209.88776%209.94167%209.90234%209.65V6.85C9.91693%206.63125%2010.0336%206.51458%2010.2523%206.5C10.4711%206.51458%2010.5878%206.63125%2010.6023%206.85V9.65C10.5878%2010.1458%2010.4201%2010.5615%2010.0992%2010.8969C9.7638%2011.2177%209.34818%2011.3854%208.85234%2011.4H2.55234C2.05651%2011.3854%201.64089%2011.2177%201.30547%2010.8969C0.984635%2010.5615%200.816927%2010.1458%200.802343%209.65V3.35C0.816927%202.85417%200.984635%202.43854%201.30547%202.10312C1.64089%201.78229%202.05651%201.61458%202.55234%201.6Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      {isEmailInputVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "email-out-body")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-632")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-631")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {"To"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "slot-input-email")}
                tag="div"
              >
                {slotInputMailId}
              </_Builtin.Block>
              {isRegenerateVisible ? (
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "email-out-edit-btn",
                    "relative"
                  )}
                  data-w-id="f1038ff1-5110-690b-7a36-c9d18aec8401"
                  tag="div"
                  {...onClickCopyMail}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons")}
                    value="%3Csvg%20width%3D%2211%22%20height%3D%2212%22%20viewBox%3D%220%200%2011%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.90234%207.9C9.10651%207.9%209.27422%207.83437%209.40547%207.70312C9.53672%207.57187%209.60234%207.40417%209.60234%207.2V2.7375C9.60234%202.63542%209.56589%202.55521%209.49297%202.49687L8.00547%201.00937C7.94714%200.936458%207.86693%200.899999%207.76484%200.899999H5.40234C5.19818%200.899999%205.03047%200.965624%204.89922%201.09687C4.76797%201.22812%204.70234%201.39583%204.70234%201.6V7.2C4.70234%207.40417%204.76797%207.57187%204.89922%207.70312C5.03047%207.83437%205.19818%207.9%205.40234%207.9H8.90234ZM9.99609%201.99375C10.2003%202.19792%2010.3023%202.44583%2010.3023%202.7375V7.2C10.2878%207.59375%2010.1492%207.92187%209.88672%208.18437C9.62422%208.44687%209.29609%208.58542%208.90234%208.6H5.40234C5.00859%208.58542%204.68047%208.44687%204.41797%208.18437C4.15547%207.92187%204.01693%207.59375%204.00234%207.2V1.6C4.01693%201.20625%204.15547%200.878124%204.41797%200.615624C4.68047%200.353124%205.00859%200.214583%205.40234%200.199999H7.76484C8.05651%200.199999%208.30443%200.302083%208.50859%200.506249L9.99609%201.99375ZM1.90234%203H3.30234V3.7H1.90234C1.69818%203.7%201.53047%203.76562%201.39922%203.89687C1.26797%204.02812%201.20234%204.19583%201.20234%204.4V10C1.20234%2010.2042%201.26797%2010.3719%201.39922%2010.5031C1.53047%2010.6344%201.69818%2010.7%201.90234%2010.7H5.40234C5.60651%2010.7%205.77422%2010.6344%205.90547%2010.5031C6.03672%2010.3719%206.10234%2010.2042%206.10234%2010V9.3H6.80234V10C6.78776%2010.3938%206.64922%2010.7219%206.38672%2010.9844C6.12422%2011.2469%205.79609%2011.3854%205.40234%2011.4H1.90234C1.50859%2011.3854%201.18047%2011.2469%200.917968%2010.9844C0.655468%2010.7219%200.516927%2010.3938%200.502343%2010V4.4C0.516927%204.00625%200.655468%203.67812%200.917968%203.41562C1.18047%203.15312%201.50859%203.01458%201.90234%203Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "copy-mail-tool-tip")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-sm",
                        "text-color-white"
                      )}
                      tag="div"
                    >
                      {"Copy Mail"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
            {isRegenerateVisible ? (
              <_Builtin.Block tag="div">
                {slotButtonGenerate ?? (
                  <ButtonGenerate textDynamic="Regenerate" />
                )}
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {isEmailBodyVisible ? (
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-633")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "fw-semibold")}
                    tag="div"
                  >
                    {"Subject"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "slot-email-subject-input")}
                    tag="div"
                  >
                    {slotInputSubject}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-633")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "fw-semibold")}
                    tag="div"
                  >
                    {"Email Body"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "slot-email-subject-input")}
                    tag="div"
                  >
                    {slotInputBody}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isLoading ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "generating-mail")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-637")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{slotLottie}</_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-grey-500")}
                    tag="div"
                  >
                    {"Generating outreach email.."}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          {isEmailBodyVisible ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "send-mail-wrap-email")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "send-mail-left-wrap")}
                tag="div"
              >
                {slotLinkMail ?? <MailLink />}
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "aui-button-wrap")}
                  tag="div"
                  tabIndex="0"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "aui-button",
                      "is-button-bg-blue"
                    )}
                    tag="div"
                    tabIndex="0"
                    {...onClickSendMail}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-md")}
                      tag="div"
                    >
                      {"Send Mail"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "button-icon", "is-large")}
                      tag="div"
                      tabIndex="0"
                    >
                      {slotLoadingIcon ?? (
                        <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2212%22%20height%3D%2211%22%20viewBox%3D%220%200%2012%2011%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.867968%201.90625C0.751302%201.62917%200.795052%201.36667%200.999218%201.11875C1.21797%200.899999%201.48047%200.848958%201.78672%200.965624L11.5867%205.16562C11.8492%205.28229%2011.9878%205.49375%2012.0023%205.8C11.9878%206.09167%2011.8492%206.30312%2011.5867%206.43437L1.78672%2010.6344C1.48047%2010.751%201.21797%2010.7%200.999218%2010.4813C0.795052%2010.2333%200.751302%209.97083%200.867968%209.69375L2.81484%205.8L0.867968%201.90625ZM3.42734%206.15L1.50234%2010L10.493%206.15H3.42734ZM10.493%205.45L1.50234%201.6L3.42734%205.45H10.493Z%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E" />
                      )}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      ) : null}
      {isEmailSuccess ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "email-outreach-success")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-651")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "add-emial-wrap")}
              tag="div"
              {...onClickAddFollowUp}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.9987%201.33398C7.5896%201.33398%207.25796%201.66563%207.25796%202.07473V7.25991H2.07277C1.66367%207.25991%201.33203%207.59155%201.33203%208.00065C1.33203%208.40975%201.66367%208.74139%202.07277%208.74139H7.25796V13.9266C7.25796%2014.3357%207.5896%2014.6673%207.9987%2014.6673C8.4078%2014.6673%208.73944%2014.3357%208.73944%2013.9266V8.74139H13.9246C14.3337%208.74139%2014.6654%208.40975%2014.6654%208.00065C14.6654%207.59155%2014.3337%207.25991%2013.9246%207.25991H8.73944V2.07473C8.73944%201.66563%208.4078%201.33398%207.9987%201.33398Z%22%20fill%3D%22%231F73B7%22%20style%3D%22fill%3A%231F73B7%3Bfill%3Acolor(display-p3%200.1216%200.4510%200.7176)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-blue-600")}
                tag="div"
              >
                {"Add Followup Email"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "inbox-wrap")}
              tag="div"
              {...onClickOpenInbox}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2220%22%20height%3D%2216%22%20viewBox%3D%220%200%2020%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_6373_16598)%22%3E%0A%3Cpath%20d%3D%22M4.54545%2015.5014V7.77427L2.14896%205.58185L0%204.36523V14.1378C0%2014.8923%200.611364%2015.5014%201.36364%2015.5014H4.54545Z%22%20fill%3D%22%234285F4%22%20style%3D%22fill%3A%234285F4%3Bfill%3Acolor(display-p3%200.2588%200.5216%200.9569)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M15.4531%2015.5014H18.6349C19.3895%2015.5014%2019.9986%2014.8901%2019.9986%2014.1378V4.36523L17.5646%205.75882L15.4531%207.77427V15.5014Z%22%20fill%3D%22%2334A853%22%20style%3D%22fill%3A%2334A853%3Bfill%3Acolor(display-p3%200.2039%200.6588%200.3255)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M4.54485%207.77423L4.21875%204.75497L4.54485%201.86523L9.99939%205.95608L15.4539%201.86523L15.8187%204.59894L15.4539%207.77423L9.99939%2011.8651L4.54485%207.77423Z%22%20fill%3D%22%23EA4335%22%20style%3D%22fill%3A%23EA4335%3Bfill%3Acolor(display-p3%200.9176%200.2627%200.2078)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M15.4531%201.86553V7.77452L19.9986%204.36549V2.54734C19.9986%200.861%2018.0736%20-0.100348%2016.7259%200.910999L15.4531%201.86553Z%22%20fill%3D%22%23FBBC04%22%20style%3D%22fill%3A%23FBBC04%3Bfill%3Acolor(display-p3%200.9843%200.7373%200.0157)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M0%204.36549L2.09053%205.93336L4.54545%207.77452V1.86553L3.27273%200.910999C1.92273%20-0.100348%200%200.861%200%202.54734V4.36549Z%22%20fill%3D%22%23C5221F%22%20style%3D%22fill%3A%23C5221F%3Bfill%3Acolor(display-p3%200.7725%200.1333%200.1216)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_6373_16598%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2215.0037%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%20transform%3D%22translate(0%200.498047)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-blue-500", "fw-semibold")}
                tag="div"
              >
                {"Open Inbox"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {slotEmailSuccessCard ?? (
              <>
                <EmailSuccessCard />
                <EmailSuccessCard />
              </>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
