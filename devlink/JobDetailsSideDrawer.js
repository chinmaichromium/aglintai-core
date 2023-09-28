import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { KeySkills } from "./KeySkills";
import * as _utils from "./utils";
import _styles from "./JobDetailsSideDrawer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-928":{"id":"e-928","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-378","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-929"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807030","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807030","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694908197175},"e-936":{"id":"e-936","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-381","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-937"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|002821df-9a23-91c6-11fa-4b56cedb1947","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|002821df-9a23-91c6-11fa-4b56cedb1947","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694909163681},"e-948":{"id":"e-948","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-386","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-949"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"},"targets":[{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694910129600},"e-1283":{"id":"e-1283","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-381","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1284"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"59642c18-096f-1528-6295-a791c8c9a815","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"59642c18-096f-1528-6295-a791c8c9a815","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695820203394}},"actionLists":{"a-378":{"id":"a-378","title":"screening-sidebar-[close]","actionItemGroups":[{"actionItems":[{"id":"a-378-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-378-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".screening-sidebar","selectorGuids":["9c18f576-777f-0c22-82c0-ab8821e1e97d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-378-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".screening-sidebar","selectorGuids":["9c18f576-777f-0c22-82c0-ab8821e1e97d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694898960131},"a-381":{"id":"a-381","title":"detailed-feedback-[open]","actionItemGroups":[{"actionItems":[{"id":"a-381-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper.overview","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8","103615c0-baf5-f2ba-a55e-2e2680195094"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-381-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper.overview","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8","103615c0-baf5-f2ba-a55e-2e2680195094"]},"value":"none"}},{"id":"a-381-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-wrapper.detailed","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8","176d92f4-5f7b-45cf-12df-142b9dea7515"]},"value":"flex"}}]},{"actionItems":[{"id":"a-381-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".sidebar-wrapper.detailed","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8","176d92f4-5f7b-45cf-12df-142b9dea7515"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694909170941},"a-386":{"id":"a-386","title":"email-temp-editor-[close]","actionItemGroups":[{"actionItems":[{"id":"a-386-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":0,"unit":""}},{"id":"a-386-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".rd-email-edit-wrapper","selectorGuids":["2295ead5-85e1-b9a6-3337-5728082f803c"]},"xValue":500,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-386-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694910134507}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function JobDetailsSideDrawer({
  as: _Component = _Builtin.Block,
  slotProfileImage,
  textMail = "nathan.roberts@example.com",
  textPhone = "(303) 555-0105",
  textSites = "janecooper.com",
  slotKeySkills,
  isKeySkillsVisible = true,
  textInterviewHeader = "Woohoo. It looks great 😍",
  slotScore,
  onClickDetailedFeedback = {},
  onClickCopyFeedbackLink = {},
  slotTotalScoreGraph,
  isInterviewVisible = true,
  slotResumeScore,
  onClickAddToShortlist = {},
  onClickReject = {},
  textName = "Jane Cooper",
  textStatus = "Selected",
  textStatusColorProps = {},
  statusBgColorProps = {},
  isResumeVisible = true,
  onClickClose = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "sidebar-wrapper", "overview")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "sidebar-block")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-296")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-lg",
              "fw-semibold",
              "color-black"
            )}
            tag="div"
          >
            {textName}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-298")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "label-global", "green-100")}
              tag="div"
              {...statusBgColorProps}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-sm",
                  "fw-semibold",
                  "text-green-500"
                )}
                tag="div"
                {...textStatusColorProps}
              >
                {textStatus}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-297")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20width%3D%2212%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23F8F9F9%22%2F%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.64645%203.64645C1.82001%203.47288%202.08944%203.4536%202.28431%203.58859L2.35355%203.64645L6%207.293L9.64645%203.64645C9.82001%203.47288%2010.0894%203.4536%2010.2843%203.58859L10.3536%203.64645C10.5271%203.82001%2010.5464%204.08944%2010.4114%204.28431L10.3536%204.35355L6.35355%208.35355C6.17999%208.52712%205.91056%208.5464%205.71569%208.41141L5.64645%208.35355L1.64645%204.35355C1.45118%204.15829%201.45118%203.84171%201.64645%203.64645Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "job-sidebar-wrapper")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "hide")}
            value="%3Cstyle%3E%0A.job-sidebar-wrapper%3A%3A-webkit-scrollbar%20%7B%0A%20%20display%3A%20none%3B%0A%7D%0A%0A.job-sidebar-wrapper%20%7B%0A%20%20-ms-overflow-style%3A%20none%3B%0A%20%20scrollbar-width%3A%20none%3B%0A%7D%0A%3C%2Fstyle%3E"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "job-sidebar-main-block",
              "screening"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-profile-infor")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slot-job-details-profile-image")}
                tag="div"
              >
                {slotProfileImage}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "frame-1020")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-profile-contact-block")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "vectors-wrapper-46")}
                    loading="lazy"
                    width={11.999947547912598}
                    height={11.999947547912598}
                    src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/6504bb624dfe721c77c1cf3f_Vectors-Wrapper.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "",
                      "text-sm",
                      "color-grey-600"
                    )}
                    dyn={{
                      bind: {},
                    }}
                    tag="div"
                  >
                    {textMail}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-profile-contact-block")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "vectors-wrapper-43")}
                    loading="lazy"
                    width={12}
                    height={12}
                    src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/6504bb634328f76be652b614_Vectors-Wrapper.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "",
                      "text-sm",
                      "color-grey-600"
                    )}
                    dyn={{
                      bind: {},
                    }}
                    tag="div"
                  >
                    {textPhone}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-profile-contact-block")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM10.9%207C10.9656%206.67689%2011%206.34247%2011%206C11%205.65753%2010.9656%205.32311%2010.9%205H9V7H10.9ZM1.41604%208C2.06409%209.48321%203.41091%2010.5913%205.04038%2010.908L3.22288%208H1.41604ZM6%2010.5566L7.59788%208H4.40212L6%2010.5566ZM6.95962%2010.908C8.58909%2010.5913%209.93591%209.48321%2010.584%208H8.77712L6.95962%2010.908ZM1.10002%207C1.03443%206.67689%201%206.34247%201%206C1%205.65753%201.03443%205.32311%201.10002%205H3V7H1.10002ZM4%207V5H8V7H4ZM1.41604%204C2.06409%202.51679%203.41091%201.40874%205.04038%201.092L3.22288%204H1.41604ZM6%201.4434L4.40212%204H7.59788L6%201.4434ZM8.77712%204H10.584C9.93591%202.51679%208.58909%201.40874%206.95962%201.092L8.77712%204Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%20%20%3Cmask%20id%3D%22mask0_9129_31033%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM10.9%207C10.9656%206.67689%2011%206.34247%2011%206C11%205.65753%2010.9656%205.32311%2010.9%205H9V7H10.9ZM1.41604%208C2.06409%209.48321%203.41091%2010.5913%205.04038%2010.908L3.22288%208H1.41604ZM6%2010.5566L7.59788%208H4.40212L6%2010.5566ZM6.95962%2010.908C8.58909%2010.5913%209.93591%209.48321%2010.584%208H8.77712L6.95962%2010.908ZM1.10002%207C1.03443%206.67689%201%206.34247%201%206C1%205.65753%201.03443%205.32311%201.10002%205H3V7H1.10002ZM4%207V5H8V7H4ZM1.41604%204C2.06409%202.51679%203.41091%201.40874%205.04038%201.092L3.22288%204H1.41604ZM6%201.4434L4.40212%204H7.59788L6%201.4434ZM8.77712%204H10.584C9.93591%202.51679%208.58909%201.40874%206.95962%201.092L8.77712%204Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3C%2Fmask%3E%0A%20%20%3Cg%20mask%3D%22url(%23mask0_9129_31033)%22%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "",
                      "text-sm",
                      "color-grey-600"
                    )}
                    dyn={{
                      bind: {},
                    }}
                    tag="div"
                  >
                    {textSites}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            {isKeySkillsVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-detail-block")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-header-block")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.5%2012C1.77614%2012%202%2011.7761%202%2011.5V7H9.8C10.637%207%2011.1322%206.00962%2010.6%205.3L9.21687%203.99024L10.4536%202.75355C11.0801%202.12698%2010.6293%201%209.7%201H2V0.5C2%200.223858%201.77614%200%201.5%200C1.22386%200%201%200.223858%201%200.5V1V7V11.5C1%2011.7761%201.22386%2012%201.5%2012ZM2%206H9.8C9.81298%206%209.83779%205.95038%209.85732%205.9641L7.78202%204.01088L9.74645%202.04645C9.74845%202.04445%209.73067%202%209.7%202H2V6Z%22%20fill%3D%22%2387929D%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-sm", "color-grey-500")}
                    tag="div"
                  >
                    {"Key Skills"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-289")}
                  tag="div"
                >
                  {slotKeySkills ?? <KeySkills />}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isInterviewVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-detail-block")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-header-block")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.86804%203.99886H6.82864L7.85805%202.19989C7.89802%202.08995%207.84805%202%207.74811%202H5.71927C5.61933%202%205.4894%202.08995%205.43943%202.19989L4.47998%204.77841C4.43001%204.88835%204.47998%204.99828%204.58992%204.99828H5.4994L4.47998%207.56681C4.40003%207.7667%204.45999%207.9366%204.70985%207.71673L7.87803%204.2687C8.04794%204.10879%208.03794%203.99886%207.86804%203.99886ZM5.79289%208.14042H11V1.01755H1V8.14042H3V8.6492L2.99995%2010.9824L5.79289%208.14042ZM2%209.15797H1C0.443858%209.15797%200%208.70632%200%208.14042V1.01755C0%200.451648%200.443858%200%201%200H11C11.5561%200%2012%200.451648%2012%201.01755V8.14042C12%208.70632%2011.5561%209.15797%2011%209.15797H6.2071L3.70005%2011.709C3.41435%2011.994%202.98918%2012.0783%202.6192%2011.9233C2.24922%2011.7683%202.00567%2011.4038%202%2010.9896V9.15797Z%22%20fill%3D%22%2387929D%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-sm", "color-grey-500")}
                    tag="div"
                  >
                    {"Interview"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(_styles, "analysis-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "analysis-summary-block")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "analysis-content-block-copy"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "fw-semibold")}
                          tag="div"
                        >
                          {textInterviewHeader}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "div-block-299")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "analysis-main-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "",
                                "rating-list-item"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "aui-button-wrap"
                                )}
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
                                  {...onClickDetailedFeedback}
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-sm",
                                      "text-blue-600"
                                    )}
                                    tag="div"
                                  >
                                    {"Detailed feedback"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "analysis-main-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "",
                                "rating-list-item"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "aui-button-wrap"
                                )}
                                tag="div"
                                tabIndex="0"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "aui-button")}
                                  tag="div"
                                  tabIndex="0"
                                  {...onClickCopyFeedbackLink}
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "button-icon",
                                      "is-large"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed
                                      className={_utils.cx(_styles, "icon")}
                                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3%207.5C3%207.22386%202.77614%207%202.5%207H1V1H7V2.5C7%202.77614%207.22386%203%207.5%203C7.77614%203%208%202.77614%208%202.5V1C8%200.447715%207.55228%200%207%200H1C0.447715%200%200%200.447715%200%201V7C0%207.55228%200.447715%208%201%208H2.5C2.77614%208%203%207.77614%203%207.5ZM12%205C12%204.44772%2011.5523%204%2011%204H5C4.44772%204%204%204.44772%204%205V11C4%2011.5523%204.44772%2012%205%2012H11C11.5523%2012%2012%2011.5523%2012%2011V5ZM5%2011V5H11V11H5Z%22%20fill%3D%22%231F73B7%22%2F%3E%0A%20%20%3Cmask%20id%3D%22mask0_9364_13086%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3%207.5C3%207.22386%202.77614%207%202.5%207H1V1H7V2.5C7%202.77614%207.22386%203%207.5%203C7.77614%203%208%202.77614%208%202.5V1C8%200.447715%207.55228%200%207%200H1C0.447715%200%200%200.447715%200%201V7C0%207.55228%200.447715%208%201%208H2.5C2.77614%208%203%207.77614%203%207.5ZM12%205C12%204.44772%2011.5523%204%2011%204H5C4.44772%204%204%204.44772%204%205V11C4%2011.5523%204.44772%2012%205%2012H11C11.5523%2012%2012%2011.5523%2012%2011V5ZM5%2011V5H11V11H5Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3C%2Fmask%3E%0A%20%20%3Cg%20mask%3D%22url(%23mask0_9364_13086)%22%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                                    />
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-sm",
                                      "text-blue-600"
                                    )}
                                    tag="div"
                                  >
                                    {"Copy Feedback Link"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "analysis-score-block")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "vectors-wrapper-13")}
                          tag="div"
                        >
                          {slotScore}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "slot-total-score")}
                  tag="div"
                >
                  {slotTotalScoreGraph}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isResumeVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-detail-block")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-header-block")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2213%22%20viewbox%3D%220%200%2012%2013%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2%201.99905H7V3.99905C7%204.55133%207.44772%204.99905%208%204.99905H10V11.999H2V1.99905ZM11%2011.999L11%204.52779C11.0013%204.50635%2011.0014%204.48478%2011%204.4632L10.9999%204.20193C10.9962%203.93816%2010.8884%203.68656%2010.6999%203.50193L8.49355%201.2955C8.31249%201.11069%208.06089%201.00286%207.79712%200.9991L7.53584%200.999098C7.51427%200.997687%207.4927%200.997706%207.47128%200.999097L2%200.999049C1.44772%200.999049%201%201.44676%201%201.99905V11.999C1%2012.5513%201.44772%2012.999%202%2012.999H10C10.5523%2012.999%2011%2012.5513%2011%2011.999ZM9.29289%203.99905H8V2.70616L9.29289%203.99905ZM8.5%209.99905H3.5C2.83333%209.99905%202.83333%2010.999%203.5%2010.999H8.5C9.16667%2010.999%209.16667%209.99905%208.5%209.99905ZM3.5%205.99905C3.22386%205.99905%203%206.22291%203%206.49905V8.49905C3%208.77519%203.22386%208.99905%203.5%208.99905H8.5C8.77614%208.99905%209%208.77519%209%208.49905V6.49905C9%206.22291%208.77614%205.99905%208.5%205.99905H3.5Z%22%20fill%3D%22%2387929D%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-sm", "color-grey-500")}
                    tag="div"
                  >
                    {"Resume"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-301")}
                  tag="div"
                >
                  {slotResumeScore}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-302")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "aui-button-wrap")}
                tag="div"
                tabIndex=""
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "aui-button",
                    "is-small",
                    "is-button-bg-blue"
                  )}
                  tag="div"
                  tabIndex=""
                  {...onClickAddToShortlist}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-icon", "is-large")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%200C2.69%200%200%202.69%200%206C0%209.31%202.69%2012%206%2012C9.31%2012%2012%209.31%2012%206C12%202.69%209.31%200%206%200ZM9.44%204.94L5.94%208.44C5.82%208.56%205.66%208.62%205.5%208.62C5.34%208.62%205.18%208.56%205.06%208.44L3.06%206.44C2.82%206.2%202.82%205.8%203.06%205.56C3.3%205.32%203.7%205.32%203.94%205.56L5.5%207.12L8.56%204.06C8.8%203.82%209.2%203.82%209.44%204.06C9.69%204.3%209.69%204.7%209.44%204.94Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">
                    {"Add to shortlist"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "aui-button-wrap")}
                tag="div"
                tabIndex=""
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "aui-button", "is-small")}
                  tag="div"
                  tabIndex=""
                  {...onClickReject}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-red-600")}
                    tag="div"
                  >
                    {"Reject Candidate"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
