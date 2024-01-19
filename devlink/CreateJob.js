import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CreateJob.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1352":{"id":"e-1352","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-471","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1353"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".email-temp-wrap","originalId":"0064b8cf-9479-2476-c6a2-f47e4400269f","appliesTo":"CLASS"},"targets":[{"selector":".email-temp-wrap","originalId":"0064b8cf-9479-2476-c6a2-f47e4400269f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697459365602},"e-1353":{"id":"e-1353","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-472","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1352"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".email-temp-wrap","originalId":"0064b8cf-9479-2476-c6a2-f47e4400269f","appliesTo":"CLASS"},"targets":[{"selector":".email-temp-wrap","originalId":"0064b8cf-9479-2476-c6a2-f47e4400269f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697459365605},"e-1382":{"id":"e-1382","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-489","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1383"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".email-temp-wrap","originalId":"a79fecd5-634e-0ac6-7d1c-48e52d7d03d9","appliesTo":"CLASS"},"targets":[{"selector":".email-temp-wrap","originalId":"a79fecd5-634e-0ac6-7d1c-48e52d7d03d9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697550948479},"e-1383":{"id":"e-1383","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-490","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1382"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".email-temp-wrap","originalId":"a79fecd5-634e-0ac6-7d1c-48e52d7d03d9","appliesTo":"CLASS"},"targets":[{"selector":".email-temp-wrap","originalId":"a79fecd5-634e-0ac6-7d1c-48e52d7d03d9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697550948479},"e-1386":{"id":"e-1386","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-471","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1387"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f093b60-cbb7-c451-fc49-a51ba7c34eb3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f093b60-cbb7-c451-fc49-a51ba7c34eb3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697701976388},"e-1387":{"id":"e-1387","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-472","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1386"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f093b60-cbb7-c451-fc49-a51ba7c34eb3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f093b60-cbb7-c451-fc49-a51ba7c34eb3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697701976390},"e-1414":{"id":"e-1414","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-499","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1415"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"84f8be11-6076-e13a-b037-17605a69d1ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"84f8be11-6076-e13a-b037-17605a69d1ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698922926832},"e-1415":{"id":"e-1415","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-500","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1414"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"84f8be11-6076-e13a-b037-17605a69d1ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"84f8be11-6076-e13a-b037-17605a69d1ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698922926835}},"actionLists":{"a-471":{"id":"a-471","title":"Email Interaction Hover In","actionItemGroups":[{"actionItems":[{"id":"a-471-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":0,"unit":""}},{"id":"a-471-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-471-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"none"}}]},{"actionItems":[{"id":"a-471-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":1,"unit":""}},{"id":"a-471-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-471-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697459378737},"a-472":{"id":"a-472","title":"Email Interaction Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-472-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":0,"unit":""}},{"id":"a-472-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-472-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697459378737},"a-489":{"id":"a-489","title":"Email Interaction Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-489-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":0,"unit":""}},{"id":"a-489-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-489-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"none"}}]},{"actionItems":[{"id":"a-489-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":1,"unit":""}},{"id":"a-489-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-489-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697459378737},"a-490":{"id":"a-490","title":"Email Interaction Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-490-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":0,"unit":""}},{"id":"a-490-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".email-temp-wrap","selectorGuids":["9f457289-11ac-9035-e0da-78b37faff5f5"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-490-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.color-blue-600","selectorGuids":["dc76774b-0be0-98ff-0afc-63b29c34e7b8","b60a7de9-41b3-cc43-d25a-3f8dab06d524"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697459378737},"a-499":{"id":"a-499","title":"Create job pop In","actionItemGroups":[{"actionItems":[{"id":"a-499-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".create-job-wrap-onclick","selectorGuids":["27cb09e1-b273-0d92-ceb0-411d9472e997"]},"value":0,"unit":""}},{"id":"a-499-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".create-job-wrap-onclick","selectorGuids":["27cb09e1-b273-0d92-ceb0-411d9472e997"]},"value":"none"}}]},{"actionItems":[{"id":"a-499-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".create-job-wrap-onclick","selectorGuids":["27cb09e1-b273-0d92-ceb0-411d9472e997"]},"value":1,"unit":""}},{"id":"a-499-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".create-job-wrap-onclick","selectorGuids":["27cb09e1-b273-0d92-ceb0-411d9472e997"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1698921661965},"a-500":{"id":"a-500","title":"Create job pop Out","actionItemGroups":[{"actionItems":[{"id":"a-500-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".create-job-wrap-onclick","selectorGuids":["27cb09e1-b273-0d92-ceb0-411d9472e997"]},"value":0,"unit":""}},{"id":"a-500-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".create-job-wrap-onclick","selectorGuids":["27cb09e1-b273-0d92-ceb0-411d9472e997"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1698921661965}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CreateJob({
  as: _Component = _Builtin.Block,
  onClickCreateNewJob = {},
  onClickLeverImport = {},
  isGreenhouseVisible = true,
  isAshbyVisible = false,
  onClickGreenhouse = {},
  onClickAshby = {},
  onClickRequestIntegration = {},
  isLeverConnected = false,
  isLeverVisible = true,
  isGreenhouseConnected = false,
  isAshbyConnected = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "create-job-wrap-onclick")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-550")}
        tag="div"
        {...onClickCreateNewJob}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "create-icon-wrap")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M23.4375%2012.25C23.4375%2011.7943%2023.291%2011.4199%2022.998%2011.127C22.7051%2010.834%2022.3307%2010.6875%2021.875%2010.6875H3.125C2.66927%2010.6875%202.29492%2010.834%202.00195%2011.127C1.70898%2011.4199%201.5625%2011.7943%201.5625%2012.25V24.75C1.5625%2025.2057%201.70898%2025.5801%202.00195%2025.873C2.29492%2026.166%202.66927%2026.3125%203.125%2026.3125H17.5781C18.0664%2026.8984%2018.6361%2027.4193%2019.2871%2027.875H3.125C2.24609%2027.8424%201.51367%2027.5332%200.927734%2026.9473C0.341797%2026.3613%200.0325521%2025.6289%200%2024.75V12.25C0.0325521%2011.3711%200.341797%2010.6387%200.927734%2010.0527C1.51367%209.4668%202.24609%209.15755%203.125%209.125H21.875C22.7539%209.15755%2023.4863%209.4668%2024.0723%2010.0527C24.6582%2010.6387%2024.9674%2011.3711%2025%2012.25V12.2988C24.7396%2012.2663%2024.4792%2012.25%2024.2188%2012.25C23.9583%2012.25%2023.6979%2012.2663%2023.4375%2012.2988V12.25ZM21.875%206C22.3633%206.03255%2022.6237%206.29297%2022.6562%206.78125C22.6237%207.26953%2022.3633%207.52995%2021.875%207.5625H3.125C2.63672%207.52995%202.3763%207.26953%202.34375%206.78125C2.3763%206.29297%202.63672%206.03255%203.125%206H21.875ZM19.5312%202.875C20.0195%202.90755%2020.2799%203.16797%2020.3125%203.65625C20.2799%204.14453%2020.0195%204.40495%2019.5312%204.4375H5.46875C4.98047%204.40495%204.72005%204.14453%204.6875%203.65625C4.72005%203.16797%204.98047%202.90755%205.46875%202.875H19.5312ZM18.75%2020.8438C18.75%2021.8203%2018.9941%2022.7318%2019.4824%2023.5781C19.9707%2024.4245%2020.638%2025.0918%2021.4844%2025.5801C22.3307%2026.0684%2023.2422%2026.3125%2024.2188%2026.3125C25.1953%2026.3125%2026.1068%2026.0684%2026.9531%2025.5801C27.7995%2025.0918%2028.4668%2024.4245%2028.9551%2023.5781C29.4434%2022.7318%2029.6875%2021.8203%2029.6875%2020.8438C29.6875%2019.8672%2029.4434%2018.9557%2028.9551%2018.1094C28.4668%2017.263%2027.7995%2016.5957%2026.9531%2016.1074C26.1068%2015.6191%2025.1953%2015.375%2024.2188%2015.375C23.2422%2015.375%2022.3307%2015.6191%2021.4844%2016.1074C20.638%2016.5957%2019.9707%2017.263%2019.4824%2018.1094C18.9941%2018.9557%2018.75%2019.8672%2018.75%2020.8438ZM31.25%2020.8438C31.25%2022.1133%2030.9408%2023.2852%2030.3223%2024.3594C29.7038%2025.4336%2028.8411%2026.2962%2027.7344%2026.9473C26.6276%2027.5658%2025.4557%2027.875%2024.2188%2027.875C22.9818%2027.875%2021.8099%2027.5658%2020.7031%2026.9473C19.5964%2026.2962%2018.7337%2025.4336%2018.1152%2024.3594C17.4967%2023.2852%2017.1875%2022.1133%2017.1875%2020.8438C17.1875%2019.5742%2017.4967%2018.4023%2018.1152%2017.3281C18.7337%2016.2539%2019.5964%2015.3913%2020.7031%2014.7402C21.8099%2014.1217%2022.9818%2013.8125%2024.2188%2013.8125C25.4557%2013.8125%2026.6276%2014.1217%2027.7344%2014.7402C28.8411%2015.3913%2029.7038%2016.2539%2030.3223%2017.3281C30.9408%2018.4023%2031.25%2019.5742%2031.25%2020.8438ZM25%2017.7188V20.0625H27.3438C27.832%2020.0951%2028.0924%2020.3555%2028.125%2020.8438C28.0924%2021.332%2027.832%2021.5924%2027.3438%2021.625H25V23.9688C24.9674%2024.457%2024.707%2024.7174%2024.2188%2024.75C23.7305%2024.7174%2023.4701%2024.457%2023.4375%2023.9688V21.625H21.0938C20.6055%2021.5924%2020.3451%2021.332%2020.3125%2020.8438C20.3451%2020.3555%2020.6055%2020.0951%2021.0938%2020.0625H23.4375V17.7188C23.4701%2017.2305%2023.7305%2016.9701%2024.2188%2016.9375C24.707%2016.9701%2024.9674%2017.2305%2025%2017.7188Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"Add Job"}
        </_Builtin.Block>
      </_Builtin.Block>
      {isLeverVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-550")}
          tag="div"
          {...onClickLeverImport}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "create-icon-wrap", "lever")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/65aa8ecf5a01f0a04d3df45f_6cbf247f647a05997dd059e987d56546%201.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-559")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold")}
              tag="div"
            >
              {"Import jobs from Lever"}
            </_Builtin.Block>
            {isLeverConnected ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-551")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%200C2.69%200%200%202.69%200%206C0%209.31%202.69%2012%206%2012C9.31%2012%2012%209.31%2012%206C12%202.69%209.31%200%206%200ZM9.44%204.94L5.94%208.44C5.82%208.56%205.66%208.62%205.5%208.62C5.34%208.62%205.18%208.56%205.06%208.44L3.06%206.44C2.82%206.2%202.82%205.8%203.06%205.56C3.3%205.32%203.7%205.32%203.94%205.56L5.5%207.12L8.56%204.06C8.8%203.82%209.2%203.82%209.44%204.06C9.69%204.3%209.69%204.7%209.44%204.94Z%22%20fill%3D%22%23228F67%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-sm", "text-green-500")}
                  tag="div"
                >
                  {"Connected"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isGreenhouseVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-550")}
          tag="div"
          {...onClickGreenhouse}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "create-icon-wrap", "lever")}
            tag="div"
          >
            <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2220%22%20height%3D%2236%22%20viewBox%3D%220%200%2016%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.26556%2031.4569C4.15183%2031.5171%200.797568%2027.9886%200.874718%2023.9116C0.907316%2021.9505%201.71287%2020.0816%203.11616%2018.7114C4.51945%2017.3412%206.40698%2016.5805%208.36819%2016.5948C12.2866%2016.6054%2015.5672%2019.9683%2015.638%2023.8903C15.713%2028.0452%2012.288%2031.5206%208.26556%2031.4569ZM14.3137%2024.0729C14.3385%2020.7051%2011.646%2017.9559%208.29741%2017.9305C4.94881%2017.905%202.21954%2020.6131%202.19123%2023.9802C2.17386%2025.5985%202.79979%2027.1574%203.93141%2028.3143C5.06304%2029.4711%206.60774%2030.1313%208.22593%2030.1496C11.5377%2030.1913%2014.2889%2027.445%2014.3137%2024.0729ZM0.889582%208.95032C0.883047%208.14633%201.0356%207.34899%201.33847%206.60421C1.64133%205.85942%202.08852%205.18191%202.65429%204.61066C3.22006%204.03941%203.89323%203.58572%204.63504%203.27571C5.37686%202.9657%206.17267%202.80549%206.97666%202.8043C10.3175%202.79793%2013.0694%205.55702%2013.0744%208.91705C13.08%2012.3252%2010.3713%2015.0843%207.01063%2015.0942C3.60045%2015.1034%200.899491%2012.391%200.889582%208.95032ZM2.22803%208.9121C2.22194%209.53529%202.33866%2010.1536%202.57151%2010.7317C2.80437%2011.3098%203.14881%2011.8363%203.58516%2012.2813C4.02151%2012.7263%204.54123%2013.081%205.11464%2013.3251C5.68805%2013.5692%206.30393%2013.698%206.92711%2013.704C7.55029%2013.7101%208.16857%2013.5934%208.74664%2013.3606C9.32472%2013.1277%209.85127%2012.7832%2010.2962%2012.3469C10.7412%2011.9105%2011.0958%2011.3908%2011.34%2010.8173C11.5841%2010.2439%2011.7128%209.62802%2011.7189%209.00482C11.7359%206.34836%209.63374%204.18243%207.01913%204.16119C4.39107%204.14279%202.24856%206.26626%202.22803%208.9121ZM10.5779%201.24143C10.5802%200.910842%2010.7137%200.594691%2010.949%200.362525C11.0656%200.247568%2011.2036%200.156689%2011.3552%200.0950787C11.5069%200.033468%2011.6692%200.00233148%2011.8329%200.00344691C11.9966%200.00456234%2012.1584%200.0379079%2012.3092%200.10158C12.46%200.165251%2012.5968%200.258002%2012.7117%200.374537C12.8267%200.491071%2012.9176%200.629108%2012.9792%200.780764C13.0408%200.93242%2013.0719%201.09473%2013.0708%201.25842C13.0726%201.42375%2013.0414%201.58777%2012.9789%201.74085C12.9164%201.89394%2012.824%202.03299%2012.707%202.14984C12.59%202.26668%2012.4509%202.35897%2012.2977%202.42128C12.1446%202.48359%2011.9805%202.51467%2011.8152%202.51268C11.1145%202.50772%2010.5779%201.95562%2010.5779%201.24143Z%22%20fill%3D%22%2338B2A7%22%2F%3E%0A%3C%2Fsvg%3E" />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-559")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold")}
              tag="div"
            >
              {"Import from Greenhouse"}
            </_Builtin.Block>
            {isGreenhouseConnected ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-551")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%200C2.69%200%200%202.69%200%206C0%209.31%202.69%2012%206%2012C9.31%2012%2012%209.31%2012%206C12%202.69%209.31%200%206%200ZM9.44%204.94L5.94%208.44C5.82%208.56%205.66%208.62%205.5%208.62C5.34%208.62%205.18%208.56%205.06%208.44L3.06%206.44C2.82%206.2%202.82%205.8%203.06%205.56C3.3%205.32%203.7%205.32%203.94%205.56L5.5%207.12L8.56%204.06C8.8%203.82%209.2%203.82%209.44%204.06C9.69%204.3%209.69%204.7%209.44%204.94Z%22%20fill%3D%22%23228F67%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-sm", "text-green-500")}
                  tag="div"
                >
                  {"Connected"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isAshbyVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-550")}
          tag="div"
          {...onClickAshby}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "create-icon-wrap", "lever")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2238%22%20height%3D%2214%22%20viewBox%3D%220%200%2038%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_3097_39476)%22%3E%0A%3Cpath%20d%3D%22M8.66614%209.63132C8.77674%209.90237%208.89541%2010.106%209.0231%2010.2418C9.15886%2010.369%209.29035%2010.4364%209.41756%2010.4454V10.6998C8.64543%2010.6716%207.8728%2010.659%207.10016%2010.6619C6.13275%2010.6619%205.41978%2010.6742%204.96123%2010.6998V10.4454C5.28402%2010.4283%205.51282%2010.3903%205.64858%2010.3305C5.78434%2010.2631%205.85269%2010.1483%205.85269%209.98734C5.85269%209.83449%205.80142%209.63132%205.69937%209.37642L4.94842%207.28971H2.37658L2.16013%207.86265C1.88006%208.58322%201.73956%209.1348%201.73956%209.51645C1.73956%209.86439%201.83734%2010.1017%202.03244%2010.2289C2.22801%2010.3562%202.51661%2010.4283%202.89826%2010.4454V10.6998C2.34255%2010.6762%201.78643%2010.6636%201.23022%2010.6619C0.831487%2010.6619%200.50443%2010.6742%200.25%2010.6998V10.4454C0.462184%2010.4112%200.661551%2010.2797%200.848101%2010.0509C1.03513%209.82167%201.22595%209.45712%201.42152%208.9568L4.24826%201.69177C4.47281%201.70678%204.69774%201.71517%204.92278%201.71693C5.09272%201.71693%205.31345%201.70839%205.58497%201.69177L8.66614%209.63132ZM4.85918%207.03481L3.70095%203.85443L2.47816%207.03481H4.85918ZM12.2747%203.91804C12.6055%203.91804%2012.9155%203.95601%2013.2041%204.03243C13.5013%204.10031%2013.7263%204.17674%2013.8791%204.26171C13.9722%204.3125%2014.0486%204.33766%2014.1084%204.33766C14.2864%204.33766%2014.3927%204.20237%2014.4264%203.93085H14.6813C14.6472%204.37231%2014.6301%205.13512%2014.6301%206.2212H14.3756C14.3078%205.66107%2014.1464%205.19066%2013.8915%204.80902C13.6456%204.41883%2013.2848%204.22373%2012.8092%204.22373C12.597%204.22373%2012.419%204.28734%2012.2747%204.41455C12.1304%204.54177%2012.0582%204.7155%2012.0582%204.93623C12.0582%205.21629%2012.1517%205.46598%2012.3383%205.68671C12.5248%205.89889%2012.8177%206.16139%2013.2165%206.47563C13.234%206.48417%2013.357%206.58148%2013.5862%206.76803C14.0614%207.15822%2014.4093%207.50617%2014.6305%207.81139C14.8508%208.10854%2014.9614%208.47737%2014.9614%208.91835C14.963%209.28656%2014.8419%209.64482%2014.6172%209.93655C14.3884%2010.2332%2014.0742%2010.4663%2013.675%2010.6362C13.2848%2010.7976%2012.8562%2010.8783%2012.3891%2010.8783C11.8546%2010.8783%2011.4174%2010.772%2011.0775%2010.5598C10.9626%2010.4968%2010.8437%2010.4415%2010.7215%2010.3941C10.6319%2010.3609%2010.5371%2010.3437%2010.4415%2010.3433C10.2801%2010.3433%2010.1614%2010.4919%2010.0845%2010.7886H9.83006C9.86376%2010.3054%209.88085%209.45712%209.88085%208.2443H10.1358C10.2117%208.93971%2010.3987%209.49936%2010.6959%209.92373C10.993%2010.3476%2011.3661%2010.5598%2011.8161%2010.5598C12.0283%2010.5598%2012.2025%2010.5005%2012.3383%2010.3818C12.4826%2010.2631%2012.5547%2010.0889%2012.5547%209.85965C12.5547%209.6223%2012.504%209.4106%2012.4019%209.22357C12.3107%209.04003%2012.1903%208.87251%2012.0454%208.72753C11.9097%208.57468%2011.6847%208.3587%2011.3704%208.07863C11.0916%207.82324%2010.82%207.56017%2010.5559%207.28971C10.3644%207.08825%2010.2015%206.86145%2010.0717%206.61566C9.94281%206.34557%209.87753%206.04955%209.88085%205.75031C9.88085%205.38576%209.99098%205.06345%2010.2117%204.78338C10.4324%204.50332%2010.7253%204.29114%2011.0903%204.14731C11.4658%203.99248%2011.8685%203.91452%2012.2747%203.91804ZM18.5733%204.87262C18.9554%204.23655%2019.6299%203.91851%2020.5978%203.91851C21.2766%203.91851%2021.756%204.08797%2022.0365%204.4269C22.1638%204.57974%2022.2573%204.78766%2022.3166%205.05063C22.3759%205.30506%2022.4059%205.64398%2022.4059%206.06835V9.51645C22.4059%209.86439%2022.4566%2010.106%2022.5587%2010.2418C22.6688%2010.369%2022.8559%2010.4326%2023.1188%2010.4326V10.6998C22.2022%2010.6657%2021.6079%2010.649%2021.3364%2010.649C21.0478%2010.649%2020.4449%2010.6657%2019.5278%2010.6998V10.4326C19.7491%2010.4326%2019.9019%2010.369%2019.9864%2010.2418C20.0718%2010.106%2020.1141%209.86439%2020.1141%209.51645V5.38148C20.1141%205.10997%2020.0628%204.9106%2019.9612%204.78338C19.8677%204.64762%2019.7106%204.57974%2019.4899%204.57974C19.244%204.57974%2019.0275%204.66898%2018.8405%204.84699C18.6625%205.01645%2018.5733%205.23291%2018.5733%205.49588V9.51645C18.5733%209.86439%2018.616%2010.106%2018.7005%2010.2418C18.7854%2010.369%2018.9378%2010.4326%2019.159%2010.4326V10.6998C18.3103%2010.6657%2017.7497%2010.649%2017.4786%2010.649C17.1896%2010.649%2016.553%2010.6657%2015.5685%2010.6998V10.4326C15.8315%2010.4326%2016.0138%2010.369%2016.1158%2010.2418C16.2264%2010.106%2016.2815%209.86439%2016.2815%209.51645V2.27658C16.2815%201.88639%2016.2259%201.60253%2016.1158%201.42452C16.0138%201.24604%2015.831%201.15728%2015.5685%201.15728V0.890032C15.8315%200.91519%2016.0945%200.928006%2016.3579%200.928006C17.2408%200.928006%2017.979%200.868671%2018.5728%200.75V4.87262H18.5733ZM28.2896%203.91804C28.9513%203.91804%2029.4858%204.18955%2029.894%204.73259C30.3008%205.27516%2030.5049%206.06835%2030.5049%207.11171C30.5049%208.46028%2030.2329%209.42721%2029.6899%2010.0125C29.1464%2010.5892%2028.4291%2010.8778%2027.5381%2010.8778C27.2661%2010.8778%2027.0373%2010.8693%2026.8503%2010.8527C26.679%2010.8373%2026.5113%2010.7942%2026.3538%2010.725C26.0426%2010.5983%2025.7096%2010.5335%2025.3736%2010.5342C25.1187%2010.5342%2024.8809%2010.5683%2024.6606%2010.6362C24.4399%2010.7041%2024.2699%2010.7929%2024.1513%2010.9035L23.9728%2010.7763C24.0321%2010.5978%2024.062%2010.3647%2024.062%2010.0761V2.27706C24.062%201.88639%2024.007%201.60253%2023.8964%201.42452C23.7948%201.24604%2023.612%201.15728%2023.349%201.15728V0.890032C23.612%200.91519%2023.875%200.928006%2024.1384%200.928006C25.0214%200.928006%2025.7595%200.868671%2026.3538%200.75V4.87262C26.7445%204.23655%2027.3896%203.91851%2028.2891%203.91851L28.2896%203.91804ZM26.9519%2010.6234C27.7328%2010.6234%2028.1234%209.55063%2028.1234%207.40458C28.1234%206.36123%2028.047%205.63164%2027.8941%205.21629C27.7413%204.79193%2027.5334%204.57974%2027.2699%204.57974C27.024%204.57974%2026.8076%204.66898%2026.6206%204.84699C26.4426%205.01645%2026.3533%205.23291%2026.3533%205.49588V10.4706C26.5484%2010.5726%2026.7487%2010.6234%2026.9519%2010.6234ZM36.4123%204.14731C36.8965%204.14731%2037.2231%204.13022%2037.3926%204.09604V4.36329C37.2146%204.42262%2037.0489%204.54604%2036.896%204.73259C36.7517%204.91914%2036.616%205.20728%2036.4888%205.59747L34.8971%2010.3305L34.3622%2011.8704C34.2093%2012.3114%2034.0228%2012.6166%2033.8021%2012.7865C33.5391%2012.9902%2033.1441%2013.0918%2032.6177%2013.0918C32.2033%2013.0943%2031.7954%2012.9891%2031.4339%2012.7865C31.0684%2012.5914%2030.8861%2012.2943%2030.8861%2011.8956C30.8861%2011.5989%2031.0009%2011.3615%2031.2302%2011.1835C31.459%2011.0051%2031.7604%2010.9158%2032.134%2010.9158C32.4905%2010.9158%2032.7706%2010.9965%2032.9742%2011.1579C33.1783%2011.3193%2033.2799%2011.5519%2033.2799%2011.8576C33.2799%2012.0612%2033.2078%2012.2516%2033.0634%2012.4301C32.9277%2012.6166%2032.724%2012.7528%2032.4525%2012.8373C32.537%2012.8544%2032.6818%2012.8625%2032.8854%2012.8625C33.4712%2012.8625%2033.8742%2012.5236%2034.0949%2011.8448L34.1585%2011.6283L31.1918%205.07579C31.0646%204.78766%2030.9373%204.59636%2030.8097%204.50332C30.691%204.41028%2030.5723%204.36329%2030.4536%204.36329V4.09652C31.1324%204.14778%2031.824%204.17294%2032.529%204.17294C33.0805%204.17294%2033.6957%204.14778%2034.375%204.09699V4.36376C34.1286%204.36376%2033.9383%204.38085%2033.8021%204.41503C33.6748%204.44873%2033.6112%204.52516%2033.6112%204.64383C33.6112%204.71171%2033.6278%204.77959%2033.662%204.84747L35.2285%208.57563L35.763%206.94699C35.9244%206.45474%2036.0051%206.02231%2036.0051%205.64921C36.0051%205.25047%2035.9196%204.9405%2035.7502%204.72025C35.6715%204.61415%2035.57%204.52708%2035.4532%204.46546C35.3363%204.40384%2035.2071%204.36925%2035.0752%204.36424V4.09652C35.3894%204.13069%2035.8346%204.14731%2036.4123%204.14731Z%22%20fill%3D%22%23483ACE%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_3097_39476%22%3E%0A%3Crect%20width%3D%2237.5%22%20height%3D%2212.3418%22%20fill%3D%22white%22%20transform%3D%22translate(0.25%200.75)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-559")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold")}
              tag="div"
            >
              {"Import jobs from Ashby"}
            </_Builtin.Block>
            {isAshbyConnected ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-551")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%200C2.69%200%200%202.69%200%206C0%209.31%202.69%2012%206%2012C9.31%2012%2012%209.31%2012%206C12%202.69%209.31%200%206%200ZM9.44%204.94L5.94%208.44C5.82%208.56%205.66%208.62%205.5%208.62C5.34%208.62%205.18%208.56%205.06%208.44L3.06%206.44C2.82%206.2%202.82%205.8%203.06%205.56C3.3%205.32%203.7%205.32%203.94%205.56L5.5%207.12L8.56%204.06C8.8%203.82%209.2%203.82%209.44%204.06C9.69%204.3%209.69%204.7%209.44%204.94Z%22%20fill%3D%22%23228F67%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-sm", "text-green-500")}
                  tag="div"
                >
                  {"Connected"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block className={_utils.cx(_styles, "div-block-733")} tag="div">
        <_Builtin.Block tag="div">{"Not finding your ATS?"}</_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "request-wrap")}
          button={false}
          block="inline"
          options={{
            href: "mailto:admin@aglinthq.com?subject=Request%20Integration",
          }}
          {...onClickRequestIntegration}
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-blue-600",
              "cursor-pointer",
              "text-underline"
            )}
            tag="div"
          >
            {"Request Integration"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
