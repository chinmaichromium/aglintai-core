"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./UnableFetchResume.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-948":{"id":"e-948","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-386","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-949"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"},"targets":[{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694910129600}},"actionLists":{"a-386":{"id":"a-386","title":"email-temp-editor-[close]","actionItemGroups":[{"actionItems":[{"id":"a-386-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":0,"unit":""}},{"id":"a-386-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".rd-email-edit-wrapper","selectorGuids":["2295ead5-85e1-b9a6-3337-5728082f803c"]},"xValue":500,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-386-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694910134507}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UnableFetchResume({
  as: _Component = _Builtin.Block,
  onClickReuploadResume = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "padding-left-right-fetch")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "unable-fetch")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "", "div-block-521")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.41667%201.16675C2.87%201.16675%200%204.03675%200%207.58342C0%2011.1301%202.87%2014.0001%206.41667%2014.0001C9.96333%2014.0001%2012.8333%2011.1301%2012.8333%207.58342C12.8333%204.03675%209.96333%201.16675%206.41667%201.16675ZM5.83333%204.08333C5.83333%203.75667%206.09%203.5%206.41667%203.5C6.74333%203.5%207%203.75667%207%204.08333V7.58333C7%207.91%206.74333%208.16667%206.41667%208.16667C6.09%208.16667%205.83333%207.91%205.83333%207.58333V4.08333ZM6.41667%2011.6667C5.775%2011.6667%205.25%2011.1417%205.25%2010.5C5.25%209.85833%205.775%209.33333%206.41667%209.33333C7.05833%209.33333%207.58333%209.85833%207.58333%2010.5C7.58333%2011.1417%207.05833%2011.6667%206.41667%2011.6667Z%22%20fill%3D%22%23F79A3E%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Unable to fetch resume details"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "color-grey-600")}
          tag="div"
        >
          {
            "We regret to inform you that we were unable to retrieve the candidate's resume details. Please review the resume manually and make a decision to move the candidate to the appropriate category: interviewing, qualified, or disqualified."
          }
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "button-wrappers-unable-fetch")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-557")}
            tag="div"
            {...onClickReuploadResume}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "aui-button-wrap")}
              tag="div"
              tabIndex="0"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "aui-button",
                  "is-button-outlined"
                )}
                tag="div"
                tabIndex="0"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "button-icon", "is-large")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icons")}
                    value="%3Csvg%20width%3D%2216%22%20height%3D%2212%22%20viewbox%3D%220%200%2016%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.82031%202.85938C8.27344%202.23437%207.5625%201.90625%206.6875%201.875C5.89062%201.89063%205.22656%202.16406%204.69531%202.69531C4.16406%203.22656%203.89062%203.89062%203.875%204.6875C3.84375%205.20312%203.59375%205.5625%203.125%205.76562C2.67188%205.92188%202.3125%206.1875%202.04688%206.5625C1.76562%206.9375%201.625%207.375%201.625%207.875C1.64062%208.51562%201.85938%209.04688%202.28125%209.46875C2.70312%209.89062%203.23438%2010.1094%203.875%2010.125H12.3125H12.3828C12.3984%2010.125%2012.4141%2010.125%2012.4297%2010.125C12.9922%2010.0781%2013.4531%209.85938%2013.8125%209.46875C14.1719%209.09375%2014.3594%208.625%2014.375%208.0625C14.375%207.64062%2014.2578%207.25781%2014.0234%206.91406C13.8047%206.58594%2013.5078%206.33594%2013.1328%206.16406C12.8984%206.05469%2012.7188%205.89062%2012.5938%205.67188C12.4844%205.45312%2012.4453%205.21875%2012.4766%204.96875C12.4922%204.875%2012.5%204.78125%2012.5%204.6875C12.4844%204.20312%2012.3203%203.80469%2012.0078%203.49219C11.6953%203.17969%2011.2969%203.01563%2010.8125%203C10.5625%203%2010.3359%203.04688%2010.1328%203.14062C9.63281%203.32812%209.19531%203.23438%208.82031%202.85938ZM12.5%2011.25H12.3125H11.375H3.875C2.92188%2011.2188%202.125%2010.8906%201.48438%2010.2656C0.859375%209.625%200.53125%208.82812%200.5%207.875C0.515625%207.125%200.726562%206.46875%201.13281%205.90625C1.53906%205.34375%202.07812%204.9375%202.75%204.6875C2.78125%203.57813%203.16406%202.64844%203.89844%201.89844C4.64844%201.16406%205.57812%200.78125%206.6875%200.75C7.28125%200.75%207.83594%200.875%208.35156%201.125C8.86719%201.35938%209.30469%201.6875%209.66406%202.10938C10.0234%201.95312%2010.4062%201.875%2010.8125%201.875C11.6094%201.89063%2012.2734%202.16406%2012.8047%202.69531C13.3359%203.22656%2013.6094%203.89062%2013.625%204.6875C13.625%204.84375%2013.6172%204.99219%2013.6016%205.13281C14.1641%205.39844%2014.6172%205.78906%2014.9609%206.30469C15.3047%206.82031%2015.4844%207.40625%2015.5%208.0625C15.4844%208.9375%2015.1953%209.67188%2014.6328%2010.2656C14.0703%2010.8438%2013.3594%2011.1719%2012.5%2011.25ZM5.72656%205.97656L7.60156%204.10156C7.86719%203.88281%208.13281%203.88281%208.39844%204.10156L10.2734%205.97656C10.4922%206.24219%2010.4922%206.50781%2010.2734%206.77344C10.0078%206.99219%209.74219%206.99219%209.47656%206.77344L8.5625%205.85938V9C8.53125%209.34375%208.34375%209.53125%208%209.5625C7.65625%209.53125%207.46875%209.34375%207.4375%209V5.85938L6.52344%206.77344C6.25781%206.99219%205.99219%206.99219%205.72656%206.77344C5.50781%206.50781%205.50781%206.24219%205.72656%205.97656Z%22%20fill%3D%22%231F73B7%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block tag="div">{"Reupload resume"}</_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
