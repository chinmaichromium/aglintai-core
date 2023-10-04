import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./InboxTickets.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1328":{"id":"e-1328","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-453","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1329"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fcc47ab1-9077-3056-077a-a550c14dd34f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fcc47ab1-9077-3056-077a-a550c14dd34f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696310776032},"e-1329":{"id":"e-1329","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-454","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1328"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fcc47ab1-9077-3056-077a-a550c14dd34f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fcc47ab1-9077-3056-077a-a550c14dd34f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696310776036}},"actionLists":{"a-453":{"id":"a-453","title":"Archive Open","actionItemGroups":[{"actionItems":[{"id":"a-453-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".il-archive-btn","selectorGuids":["fc410ff5-c27a-10c7-f298-4ac8d2ccd8e5"]},"value":0,"unit":""}},{"id":"a-453-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".il-archive-btn","selectorGuids":["fc410ff5-c27a-10c7-f298-4ac8d2ccd8e5"]},"value":"none"}}]},{"actionItems":[{"id":"a-453-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".il-archive-btn","selectorGuids":["fc410ff5-c27a-10c7-f298-4ac8d2ccd8e5"]},"value":1,"unit":""}},{"id":"a-453-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".il-archive-btn","selectorGuids":["fc410ff5-c27a-10c7-f298-4ac8d2ccd8e5"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1696310779721},"a-454":{"id":"a-454","title":"Archive Close","actionItemGroups":[{"actionItems":[{"id":"a-454-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".il-archive-btn","selectorGuids":["fc410ff5-c27a-10c7-f298-4ac8d2ccd8e5"]},"value":0,"unit":""}},{"id":"a-454-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".il-archive-btn","selectorGuids":["fc410ff5-c27a-10c7-f298-4ac8d2ccd8e5"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1696310779721}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InboxTickets({
  as: _Component = _Builtin.Block,
  textIssues = "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
  textTicketsId = "887",
  textPriority = "High",
  colorTextPriority = {},
  slotPriorityIcon,
  slotAssigneeImage,
  textAssigneeName = "Otis Milburn",
  slotCandidateImage,
  textCandidateName = "Maria Johnson",
  textJobRole = "Software Developer",
  textCompanyLocations = "Microsoft, California, United States",
  textStatus = "Open",
  colorBgPropsStatus = {},
  textDate = "11-12-2023",
  onClickCheck = {},
  isChecked = true,
  onClickArchive = {},
  onClickCard = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "inbox-list-sl-block")}
      tag="div"
      {...onClickCard}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "checkbox-wrappers-job-2")}
        tag="div"
        {...onClickCheck}
      >
        {isChecked ? (
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "add-icon")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20y%3D%220.5%22%20width%3D%2216%22%20height%3D%2216%22%20rx%3D%224%22%20fill%3D%22%231F73B7%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7%209.08579L10.2929%205.79289C10.6834%205.40237%2011.3166%205.40237%2011.7071%205.79289C12.0976%206.18342%2012.0976%206.81658%2011.7071%207.20711L7.70711%2011.2071C7.31658%2011.5976%206.68342%2011.5976%206.29289%2011.2071L4.29289%209.20711C3.90237%208.81658%203.90237%208.18342%204.29289%207.79289C4.68342%207.40237%205.31658%207.40237%205.70711%207.79289L7%209.08579Z%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%221.5%22%20y%3D%222%22%20width%3D%2213%22%20height%3D%2213%22%20rx%3D%223.5%22%20stroke%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        ) : null}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "il-ticket-id")} tag="div">
        {textTicketsId}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "il-issue", "content")}
        tag="div"
      >
        {textIssues}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "il-priority", "content")}
        tag="div"
      >
        <_Builtin.Block tag="div" {...colorTextPriority}>
          {textPriority}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "il-priority-icon")}
          tag="div"
        >
          {slotPriorityIcon}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "il-assignee", "content", "assignee")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "il-assignee-image")}
          tag="div"
        >
          {slotAssigneeImage}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-color-black")}
          tag="div"
        >
          {textAssigneeName}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "il-candidate-name")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "il-candidate-image")}
          tag="div"
        >
          {slotCandidateImage}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {textCandidateName}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "il-job-info", "content")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {textJobRole}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-sm",
            "fw-semibold",
            "text-grey-600"
          )}
          tag="div"
        >
          {textCompanyLocations}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "il-status", "content")}
        tag="div"
        {...colorBgPropsStatus}
      >
        {textStatus}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "il-create-date",
          "fw-semibold",
          "text-color-black"
        )}
        tag="div"
      >
        {textDate}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "il-actions", "content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "il-actions-image-block")}
          data-w-id="fcc47ab1-9077-3056-077a-a550c14dd34f"
          tag="div"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/651419e73ebbb12148f96ccc/651a94f8aa13f70fec023553_Frame%201282.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "il-archive-btn")}
            tag="div"
            {...onClickArchive}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed")}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10%201.5L11%203.5V10C11%2010.2761%2010.7761%2010.5%2010.5%2010.5H1.5C1.22386%2010.5%201%2010.2761%201%2010V3.50177L2%201.5H10ZM10%204.5H2V9.5H10V4.5ZM6.5%205V7H8L6%209L4%207H5.5V5H6.5ZM9.38195%202.5H2.61828L2.11872%203.5H9.88195L9.38195%202.5Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-color-black")}
              tag="div"
            >
              {"Archive"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
