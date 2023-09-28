import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { NavJobSubLink } from "./NavJobSubLink";
import * as _utils from "./utils";
import _styles from "./SideNavMenu.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1304":{"id":"e-1304","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-441","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1305"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"a613a130-5aed-68e6-c113-9799efe581f8"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695890220643},"e-1306":{"id":"e-1306","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-442","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1307"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"7a5c6ea7-24df-9e1c-bfd3-9a54842e69ee"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695890515755}},"actionLists":{"a-441":{"id":"a-441","title":"New Nav job link","actionItemGroups":[{"actionItems":[{"id":"a-441-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".slot-sublink-nav","selectorGuids":["294fed8f-70ec-3295-1efe-64e914332cd4"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px"}}]},{"actionItems":[{"id":"a-441-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".slot-sublink-nav","selectorGuids":["294fed8f-70ec-3295-1efe-64e914332cd4"]},"widthUnit":"PX","heightUnit":"AUTO"}}]}],"createdOn":1695890223967,"useFirstGroupAsInitialState":true},"a-442":{"id":"a-442","title":"New Nav job link close","actionItemGroups":[{"actionItems":[{"id":"a-442-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".slot-sublink-nav","selectorGuids":["294fed8f-70ec-3295-1efe-64e914332cd4"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px"}}]}],"createdOn":1695890223967,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SideNavMenu({
  as: _Component = _Builtin.Block,
  isMyJobs = true,
  isMyCandidateDatabase = true,
  onClickJob = {},
  slotJobSubLink,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "nav_sublinks")} tag="div">
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_sublink", "drop")}
        button={false}
        id="my-resume"
        options={{
          href: "/jobs",
        }}
        {...onClickJob}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-367")}
          data-w-id="a613a130-5aed-68e6-c113-9799efe581f8"
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3DcurrentColor%3E%0A%20%20%3Cpath%20d%3D%22M4.08317%202.91732V1.16732C4.08317%200.845154%204.34434%200.583984%204.6665%200.583984H9.33317C9.65534%200.583984%209.9165%200.845154%209.9165%201.16732V2.91732H12.2498C12.572%202.91732%2012.8332%203.17849%2012.8332%203.50065V11.6673C12.8332%2011.9895%2012.572%2012.2507%2012.2498%2012.2507H1.74984C1.42767%2012.2507%201.1665%2011.9895%201.1665%2011.6673V3.50065C1.1665%203.17849%201.42767%202.91732%201.74984%202.91732H4.08317ZM2.33317%209.33398V11.084H11.6665V9.33398H2.33317ZM2.33317%208.16732H11.6665V4.08398H2.33317V8.16732ZM5.24984%201.75065V2.91732H8.74984V1.75065H5.24984ZM6.4165%206.41732H7.58317V7.58398H6.4165V6.41732Z%22%20fill%3DcurrentColor%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Jobs"}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "slot-sublink-nav")}
          tag="div"
        >
          {slotJobSubLink ?? <NavJobSubLink />}
        </_Builtin.Block>
        {isMyJobs ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "aui_nav_sublink_active", "drop")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-366")}
              data-w-id="7a5c6ea7-24df-9e1c-bfd3-9a54842e69ee"
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "embed_flex")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3DcurrentColor%3E%0A%20%20%3Cpath%20d%3D%22M4.08317%202.91732V1.16732C4.08317%200.845154%204.34434%200.583984%204.6665%200.583984H9.33317C9.65534%200.583984%209.9165%200.845154%209.9165%201.16732V2.91732H12.2498C12.572%202.91732%2012.8332%203.17849%2012.8332%203.50065V11.6673C12.8332%2011.9895%2012.572%2012.2507%2012.2498%2012.2507H1.74984C1.42767%2012.2507%201.1665%2011.9895%201.1665%2011.6673V3.50065C1.1665%203.17849%201.42767%202.91732%201.74984%202.91732H4.08317ZM2.33317%209.33398V11.084H11.6665V9.33398H2.33317ZM2.33317%208.16732H11.6665V4.08398H2.33317V8.16732ZM5.24984%201.75065V2.91732H8.74984V1.75065H5.24984ZM6.4165%206.41732H7.58317V7.58398H6.4165V6.41732Z%22%20fill%3DcurrentColor%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Jobs"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_sublink")}
        button={false}
        id="jd"
        options={{
          href: "/candidates",
        }}
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed_flex")}
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3DcurrentColor%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10%203.26385C9.08755%203.738%207.63506%204%206%204C4.36494%204%202.91245%203.738%202%203.26385V4.7C2%205.08849%203.80673%205.7%206%205.7C8.19327%205.7%2010%205.08849%2010%204.7V3.26385ZM11%202V10C11%2011.2346%208.73855%2012%206%2012C3.26145%2012%201%2011.2346%201%2010V2C1%200.746622%203.23987%200%206%200C8.76013%200%2011%200.746622%2011%202ZM10%205.95247C9.08388%206.43015%207.62604%206.7%206%206.7C4.37396%206.7%202.91612%206.43015%202%205.95247V7.3C2%207.74812%203.70819%208.3%206%208.3C8.19327%208.3%2010%207.68849%2010%207.3V5.95247ZM2%208.60025V10C2%2010.3885%203.80673%2011%206%2011C8.19327%2011%2010%2010.3885%2010%2010V8.55247C9.08388%209.03015%207.62604%209.3%206%209.3C4.32786%209.3%202.89722%209.06118%202%208.60025ZM6%203C8.21043%203%2010%202.40348%2010%202C10%201.59652%208.21043%201%206%201C3.78957%201%202%201.59652%202%202C2%202.40348%203.78957%203%206%203Z%22%20fill%3DcurrentColor%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{"Candidate Database"}</_Builtin.Block>
        {isMyCandidateDatabase ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "aui_nav_sublink_active")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3DcurrentColor%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10%203.26385C9.08755%203.738%207.63506%204%206%204C4.36494%204%202.91245%203.738%202%203.26385V4.7C2%205.08849%203.80673%205.7%206%205.7C8.19327%205.7%2010%205.08849%2010%204.7V3.26385ZM11%202V10C11%2011.2346%208.73855%2012%206%2012C3.26145%2012%201%2011.2346%201%2010V2C1%200.746622%203.23987%200%206%200C8.76013%200%2011%200.746622%2011%202ZM10%205.95247C9.08388%206.43015%207.62604%206.7%206%206.7C4.37396%206.7%202.91612%206.43015%202%205.95247V7.3C2%207.74812%203.70819%208.3%206%208.3C8.19327%208.3%2010%207.68849%2010%207.3V5.95247ZM2%208.60025V10C2%2010.3885%203.80673%2011%206%2011C8.19327%2011%2010%2010.3885%2010%2010V8.55247C9.08388%209.03015%207.62604%209.3%206%209.3C4.32786%209.3%202.89722%209.06118%202%208.60025ZM6%203C8.21043%203%2010%202.40348%2010%202C10%201.59652%208.21043%201%206%201C3.78957%201%202%201.59652%202%202C2%202.40348%203.78957%203%206%203Z%22%20fill%3DcurrentColor%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Candidate Database"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Link>
    </_Component>
  );
}
