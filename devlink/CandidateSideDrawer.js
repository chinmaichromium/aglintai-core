import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { CandidateDetails } from "./CandidateDetails";
import * as _utils from "./utils";
import _styles from "./CandidateSideDrawer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1440":{"id":"e-1440","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-518","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1441"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f48177e-f948-6cb4-f8f5-030771445e6a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f48177e-f948-6cb4-f8f5-030771445e6a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699284623076},"e-1441":{"id":"e-1441","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-519","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1440"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f48177e-f948-6cb4-f8f5-030771445e6a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f48177e-f948-6cb4-f8f5-030771445e6a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699284623078},"e-1442":{"id":"e-1442","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-518","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1443"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f48177e-f948-6cb4-f8f5-030771445e68","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f48177e-f948-6cb4-f8f5-030771445e68","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699284775571},"e-1443":{"id":"e-1443","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-519","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1442"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f48177e-f948-6cb4-f8f5-030771445e68","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f48177e-f948-6cb4-f8f5-030771445e68","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699284775574},"e-1454":{"id":"e-1454","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-528","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1455"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8678ceb8-a929-4369-7ec7-1eaf5f29ad94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8678ceb8-a929-4369-7ec7-1eaf5f29ad94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700038932960},"e-1455":{"id":"e-1455","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-529","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1454"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8678ceb8-a929-4369-7ec7-1eaf5f29ad94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8678ceb8-a929-4369-7ec7-1eaf5f29ad94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700038932960},"e-1456":{"id":"e-1456","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-528","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1457"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8678ceb8-a929-4369-7ec7-1eaf5f29ad8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8678ceb8-a929-4369-7ec7-1eaf5f29ad8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700038932960},"e-1457":{"id":"e-1457","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-529","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1456"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8678ceb8-a929-4369-7ec7-1eaf5f29ad8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8678ceb8-a929-4369-7ec7-1eaf5f29ad8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700038932960},"e-1484":{"id":"e-1484","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-548","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1485"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d0b1d6b-d33f-696b-2dd2-444ee6b076f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d0b1d6b-d33f-696b-2dd2-444ee6b076f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701667278081},"e-1485":{"id":"e-1485","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-549","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1484"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d0b1d6b-d33f-696b-2dd2-444ee6b076f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d0b1d6b-d33f-696b-2dd2-444ee6b076f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701667278084},"e-1486":{"id":"e-1486","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-548","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1487"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3f08f391-0538-359f-07a6-ab1395acb028","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3f08f391-0538-359f-07a6-ab1395acb028","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701667617347},"e-1487":{"id":"e-1487","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-549","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1486"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3f08f391-0538-359f-07a6-ab1395acb028","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3f08f391-0538-359f-07a6-ab1395acb028","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701667617350},"e-1488":{"id":"e-1488","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-548","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1489"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b355347005c93ed379d62|0d26e87f-95e3-6bcf-86af-5280f37c33ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b355347005c93ed379d62|0d26e87f-95e3-6bcf-86af-5280f37c33ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701670348007},"e-1489":{"id":"e-1489","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-549","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1488"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b355347005c93ed379d62|0d26e87f-95e3-6bcf-86af-5280f37c33ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b355347005c93ed379d62|0d26e87f-95e3-6bcf-86af-5280f37c33ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701670348007},"e-1490":{"id":"e-1490","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-548","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1491"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b355347005c93ed379d62|0d26e87f-95e3-6bcf-86af-5280f37c33bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b355347005c93ed379d62|0d26e87f-95e3-6bcf-86af-5280f37c33bf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701670348007},"e-1491":{"id":"e-1491","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-549","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1490"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b355347005c93ed379d62|0d26e87f-95e3-6bcf-86af-5280f37c33bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b355347005c93ed379d62|0d26e87f-95e3-6bcf-86af-5280f37c33bf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701670348007}},"actionLists":{"a-518":{"id":"a-518","title":"Job Candidate tooltip hover in","actionItemGroups":[{"actionItems":[{"id":"a-518-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":"none"}},{"id":"a-518-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-518-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":1,"unit":""}},{"id":"a-518-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1699284626581},"a-519":{"id":"a-519","title":"Job Candidate tooltip hover in 2","actionItemGroups":[{"actionItems":[{"id":"a-519-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":0,"unit":""}},{"id":"a-519-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699284626581},"a-528":{"id":"a-528","title":"Job Candidate tooltip hover in 3","actionItemGroups":[{"actionItems":[{"id":"a-528-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":"none"}},{"id":"a-528-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-528-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":1,"unit":""}},{"id":"a-528-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1699284626581},"a-529":{"id":"a-529","title":"Job Candidate tooltip hover in 4","actionItemGroups":[{"actionItems":[{"id":"a-529-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":0,"unit":""}},{"id":"a-529-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrow-tooltips-drawer","selectorGuids":["75304b5d-e0de-79ea-e833-822d545330ec"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699284626581},"a-548":{"id":"a-548","title":"phone hover in CD","actionItemGroups":[{"actionItems":[{"id":"a-548-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".devlink-copy-text","selectorGuids":["b6c7a400-9844-cd7e-e5ed-a8fa4f736c6f"]},"value":0,"unit":""}},{"id":"a-548-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".devlink-copy-text","selectorGuids":["b6c7a400-9844-cd7e-e5ed-a8fa4f736c6f"]},"value":"none"}}]},{"actionItems":[{"id":"a-548-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".devlink-copy-text","selectorGuids":["b6c7a400-9844-cd7e-e5ed-a8fa4f736c6f"]},"value":"flex"}},{"id":"a-548-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".devlink-copy-text","selectorGuids":["b6c7a400-9844-cd7e-e5ed-a8fa4f736c6f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701667288663},"a-549":{"id":"a-549","title":"phone hover out CD","actionItemGroups":[{"actionItems":[{"id":"a-549-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".devlink-copy-text","selectorGuids":["b6c7a400-9844-cd7e-e5ed-a8fa4f736c6f"]},"value":0,"unit":""}},{"id":"a-549-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".devlink-copy-text","selectorGuids":["b6c7a400-9844-cd7e-e5ed-a8fa4f736c6f"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701667288663}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CandidateSideDrawer({
  as: _Component = _Builtin.Block,
  onClickPrev = {},
  onClickNext = {},
  onClickCopyProfile = {},
  onClickClose = {},
  slotCandidateImage,
  textName = "Dianne Russell",
  textMail = "dianerussel@example.com",
  textPhone = "(704) 555-0127",
  textOverviewDesc = "Eike led software as a Senior System Software Engineer at NVIDIA Corporation, specializing in autonomous vehicles.",
  slotCandidateDetails,
  isOverviewVisible = true,
  isLinkedInVisible = true,
  isCopiedMessageVisible = false,

  linkedinLink = {
    href: "#",
  },

  onClickLinkedin = {},
  onClickCopyMail = {},
  onClickCopyPhone = {},
  isPhoneIconVisible = true,
  isMailIconVisible = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "candiate-side-drawer-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "cv-sidebar-header-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cvs-header-nav-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "cvs-header-nav-icon",
              "clickable",
              "bg-white"
            )}
            data-w-id="6f48177e-f948-6cb4-f8f5-030771445e68"
            tag="div"
            {...onClickPrev}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed")}
              value="%3Csvg%20width%3D%227%22%20height%3D%2213%22%20viewBox%3D%220%200%207%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.242188%206.41406C0.169271%206.30469%200.169271%206.19531%200.242188%206.08594L6.14844%200.179688C6.25781%200.106771%206.36719%200.106771%206.47656%200.179688C6.54948%200.289062%206.54948%200.398438%206.47656%200.507812L0.707031%206.25L6.47656%2011.9922C6.54948%2012.1016%206.54948%2012.2109%206.47656%2012.3203C6.36719%2012.3932%206.25781%2012.3932%206.14844%2012.3203L0.242188%206.41406Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "arrow-tooltips-drawer")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Shift + ←"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "cvs-header-nav-icon",
              "clickable",
              "bg-white"
            )}
            data-w-id="6f48177e-f948-6cb4-f8f5-030771445e6a"
            tag="div"
            {...onClickNext}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed")}
              value="%3Csvg%20width%3D%227%22%20height%3D%2213%22%20viewBox%3D%220%200%207%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.75781%206.58594C6.83073%206.69531%206.83073%206.80469%206.75781%206.91406L0.851562%2012.8203C0.742188%2012.8932%200.632812%2012.8932%200.523438%2012.8203C0.450521%2012.7109%200.450521%2012.6016%200.523438%2012.4922L6.29297%206.75L0.523438%201.00781C0.450521%200.898438%200.450521%200.789062%200.523438%200.679688C0.632812%200.606771%200.742188%200.606771%200.851562%200.679688L6.75781%206.58594Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "arrow-tooltips-drawer")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Shift + →"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "cvs-header-copy-block", "clickable")}
          tag="div"
          {...onClickCopyProfile}
        >
          <_Builtin.Block tag="div">{"View Profile"}</_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "cvs-header-copy-icon")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.5%202C11.7455%202%2011.9496%202.17688%2011.9919%202.41012L12%202.5V5.5C12%205.77614%2011.7761%206%2011.5%206C11.2545%206%2011.0504%205.82312%2011.0081%205.58988L11%205.5V3.706L6.85355%207.85355C6.67999%208.02712%206.41056%208.0464%206.21569%207.91141L6.14645%207.85355L4.5%206.207L0.853553%209.85355C0.679987%2010.0271%200.410563%2010.0464%200.215695%209.91141L0.146447%209.85355C-0.0271197%209.67999%20-0.0464049%209.41056%200.0885912%209.21569L0.146447%209.14645L4.14645%205.14645C4.32001%204.97288%204.58944%204.9536%204.78431%205.08859L4.85355%205.14645L6.5%206.793L10.292%203H8.5C8.25454%203%208.05039%202.82312%208.00806%202.58988L8%202.5C8%202.25454%208.17688%202.05039%208.41012%202.00806L8.5%202H11.5Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          {isCopiedMessageVisible ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "toss-copied", "hide")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-xsm")}
                tag="div"
              >
                {"Copied!"}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "cvs-header-close-button",
            "cursor-pointer"
          )}
          tag="div"
          {...onClickClose}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon-embed")}
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%20%20%3Cmask%20id%3D%22mask0_3498_23410%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%222%22%20y%3D%222%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3C%2Fmask%3E%0A%20%20%3Cg%20mask%3D%22url(%23mask0_3498_23410)%22%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "slot-candiate-profile")}
        tag="div"
      >
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "cv-sidebar-intro-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "cvs-intro-profile-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "cvs-intro-profile-image")}
                tag="div"
              >
                {slotCandidateImage}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "cvs-intro-profile-info")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-490")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "fw-semibold")}
                    tag="div"
                  >
                    {textName}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-629")}
                  tag="div"
                >
                  {isLinkedInVisible ? (
                    <_Builtin.Block tag="div" {...onClickLinkedin}>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icons")}
                        value="%3Csvg%20width%3D%2222%22%20height%3D%2222%22%20viewBox%3D%220%200%2022%2022%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2222%22%20height%3D%2222%22%20rx%3D%223%22%20fill%3D%22%23347FBC%22%20style%3D%22fill%3A%23347FBC%3Bfill%3Acolor(display-p3%200.2039%200.4980%200.7373)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Crect%20x%3D%223%22%20y%3D%223%22%20width%3D%2216%22%20height%3D%2215%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_6323_44447)%22%3E%0A%3Cpath%20d%3D%22M19.2857%202H3.32552C2.5942%202%202%202.60251%202%203.34214V19.2732C2%2020.0129%202.5942%2020.6154%203.32552%2020.6154H19.2857C20.017%2020.6154%2020.6154%2020.0129%2020.6154%2019.2732V3.34214C20.6154%202.60251%2020.017%202%2019.2857%202ZM7.62617%2017.956H4.8671V9.07218H7.63032V17.956H7.62617ZM6.24663%207.85886C5.36157%207.85886%204.64687%207.14001%204.64687%206.2591C4.64687%205.37819%205.36157%204.65934%206.24663%204.65934C7.12754%204.65934%207.84639%205.37819%207.84639%206.2591C7.84639%207.14416%207.1317%207.85886%206.24663%207.85886ZM17.9685%2017.956H15.2094V13.6346C15.2094%2012.6041%2015.1887%2011.2786%2013.7759%2011.2786C12.3382%2011.2786%2012.118%2012.4005%2012.118%2013.5598V17.956H9.35889V9.07218H12.0058V10.2855H12.0432C12.413%209.58743%2013.3147%208.85196%2014.6568%208.85196C17.4491%208.85196%2017.9685%2010.6927%2017.9685%2013.0861V17.956Z%22%20fill%3D%22%23347FBC%22%20style%3D%22fill%3A%23347FBC%3Bfill%3Acolor(display-p3%200.2039%200.4980%200.7373)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_6323_44447%22%3E%0A%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2218.6154%22%20height%3D%2218.6154%22%20rx%3D%221.69231%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  ) : null}
                  {isPhoneIconVisible ? (
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "phone-icon-wraps",
                        "pointer"
                      )}
                      data-w-id="0d26e87f-95e3-6bcf-86af-5280f37c33ba"
                      tag="div"
                      {...onClickCopyPhone}
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icons")}
                        value="%3Csvg%20width%3D%2212%22%20height%3D%2211%22%20viewBox%3D%220%200%2012%2011%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.21042%200.851952L5.0125%202.77695C5.13281%203.13789%205.0526%203.44535%204.77187%203.69935L3.78932%204.50143C4.12352%205.20994%204.56467%205.84492%205.11276%206.40638C5.67422%206.95447%206.3092%207.39562%207.01771%207.72982L7.81979%206.74727C8.07379%206.46654%208.38125%206.38633%208.74219%206.50664L10.6672%207.30872C10.8677%207.38893%2011.0081%207.51593%2011.0883%207.68971C11.1685%207.87687%2011.1885%208.0707%2011.1484%208.27122L10.6672%2010.0358C10.5335%2010.3967%2010.2728%2010.5906%209.88516%2010.6173C8.21415%2010.6039%206.70356%2010.1962%205.35339%209.39414C4.00321%208.59206%202.92708%207.51593%202.125%206.16575C1.32292%204.81558%200.91519%203.30499%200.901822%201.63398C0.928558%201.24631%201.1224%200.985632%201.48333%200.851952L3.24792%200.370702C3.44844%200.330598%203.64227%200.35065%203.82943%200.430858C4.00321%200.511066%204.13021%200.651431%204.21042%200.851952Z%22%20fill%3D%22black%22%20style%3D%22fill%3Ablack%3Bfill%3Ablack%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "devlink-copy-text")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-xsm")}
                          tag="div"
                        >
                          {"Copy Phone"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                  {isMailIconVisible ? (
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "phone-icon-wraps",
                        "pointer"
                      )}
                      data-w-id="0d26e87f-95e3-6bcf-86af-5280f37c33bf"
                      tag="div"
                      {...onClickCopyMail}
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icons")}
                        value="%3Csvg%20width%3D%2212%22%20height%3D%229%22%20viewBox%3D%220%200%2012%209%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.86432%200.633983H10.206C10.4734%200.647351%2010.7006%200.740928%2010.8878%200.914712C11.0615%201.10187%2011.1551%201.32912%2011.1685%201.59648C11.1551%201.91732%2011.0281%202.17131%2010.7875%202.35846L6.41615%205.647C6.16215%205.80742%205.90816%205.80742%205.65417%205.647L1.28281%202.35846C1.04219%202.17131%200.91519%201.91732%200.901822%201.59648C0.91519%201.32912%201.00877%201.10187%201.18255%200.914712C1.3697%200.740928%201.59696%200.647351%201.86432%200.633983ZM0.901822%202.87982L5.27318%206.14831C5.50043%206.32209%205.75443%206.40898%206.03516%206.40898C6.31589%206.40898%206.56988%206.32209%206.79714%206.14831L11.1685%202.87982V7.05065C11.1551%207.41159%2011.0281%207.71237%2010.7875%207.95299C10.5469%208.19362%2010.2461%208.32062%209.88516%208.33398H2.18516C1.82422%208.32062%201.52344%208.19362%201.28281%207.95299C1.04219%207.71237%200.91519%207.41159%200.901822%207.05065V2.87982Z%22%20fill%3D%22black%22%20style%3D%22fill%3Ablack%3Bfill%3Ablack%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "devlink-copy-text")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-xsm")}
                          tag="div"
                        >
                          {"Copy Mail"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            {isOverviewVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "cvs-intro-overview-block")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cvs-intro-top")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "icon-block-2")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cg%20clip-path%3D%22url(%23clip0_3341_29934)%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12.667%206.00008L13.5003%204.16675L15.3337%203.33341L13.5003%202.50008L12.667%200.666748L11.8337%202.50008L10.0003%203.33341L11.8337%204.16675L12.667%206.00008ZM7.66699%206.33342L6.00033%202.66675L4.33366%206.33342L0.666992%208.00008L4.33366%209.66675L6.00033%2013.3334L7.66699%209.66675L11.3337%208.00008L7.66699%206.33342ZM12.667%2010.0001L11.8337%2011.8334L10.0003%2012.6667L11.8337%2013.5001L12.667%2015.3334L13.5003%2013.5001L15.3337%2012.6667L13.5003%2011.8334L12.667%2010.0001Z%22%20fill%3D%22%2317494D%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3CclipPath%20id%3D%22clip0_3341_29934%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-kale-800-2")}
                    tag="div"
                  >
                    {"Overview"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "text-kale-600-2")}
                >
                  {textOverviewDesc}
                </_Builtin.Paragraph>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "slot-candidate-details")}
        tag="div"
      >
        {slotCandidateDetails ?? <CandidateDetails />}
      </_Builtin.Block>
    </_Component>
  );
}
