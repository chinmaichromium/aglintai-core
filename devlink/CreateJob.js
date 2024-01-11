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
            value="%3Csvg%20width%3D%2224%22%20height%3D%2230%22%20viewBox%3D%220%200%2025%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.28125%200.937498C5.69141%200.964842%205.91016%201.18359%205.9375%201.59375C5.91016%202.0039%205.69141%202.22265%205.28125%202.25H4.29687C3.64062%202.27734%203.09375%202.49609%202.65625%202.90625C2.24609%203.34375%202.02734%203.89062%202%204.54687V5.53125C1.97266%205.94141%201.75391%206.16016%201.34375%206.1875C0.933593%206.16016%200.714843%205.94141%200.687499%205.53125V4.54687C0.714843%203.53515%201.07031%202.6875%201.75391%202.0039C2.4375%201.32031%203.28516%200.964842%204.29687%200.937498H5.28125ZM0.687499%2012.0937V8.15625C0.714843%207.74609%200.933593%207.52734%201.34375%207.5C1.75391%207.52734%201.97266%207.74609%202%208.15625V12.0937C1.97266%2012.5039%201.75391%2012.7227%201.34375%2012.75C0.933593%2012.7227%200.714843%2012.5039%200.687499%2012.0937ZM1.34375%2014.0625C1.75391%2014.0898%201.97266%2014.3086%202%2014.7187V15.7031C2.02734%2016.3594%202.24609%2016.9062%202.65625%2017.3437C3.09375%2017.7539%203.64062%2017.9727%204.29687%2018H5.28125C5.69141%2018.0273%205.91016%2018.2461%205.9375%2018.6563C5.91016%2019.0664%205.69141%2019.2852%205.28125%2019.3125H4.29687C3.28516%2019.2852%202.4375%2018.9297%201.75391%2018.2461C1.07031%2017.5625%200.714843%2016.7148%200.687499%2015.7031V14.7187C0.714843%2014.3086%200.933593%2014.0898%201.34375%2014.0625ZM18.4473%207.54101C18.0371%207.51367%2017.8047%207.29492%2017.75%206.88476V4.54687C17.7227%203.89062%2017.5039%203.34375%2017.0938%202.90625C16.6563%202.49609%2016.1094%202.27734%2015.4531%202.25H14.4688C14.0586%202.22265%2013.8398%202.0039%2013.8125%201.59375C13.8398%201.18359%2014.0586%200.964842%2014.4688%200.937498H15.4531C16.4648%200.964842%2017.3125%201.32031%2017.9961%202.0039C18.6797%202.6875%2019.0352%203.53515%2019.0625%204.54687V6.88476C19.0352%207.26758%2018.8301%207.48633%2018.4473%207.54101ZM7.25%2018.6563C7.27734%2018.2461%207.49609%2018.0273%207.90625%2018H11.8438C12.2539%2018.0273%2012.4727%2018.2461%2012.5%2018.6563C12.4727%2019.0664%2012.2539%2019.2852%2011.8438%2019.3125H7.90625C7.49609%2019.2852%207.27734%2019.0664%207.25%2018.6563ZM11.8438%202.25H7.90625C7.49609%202.22265%207.27734%202.0039%207.25%201.59375C7.27734%201.18359%207.49609%200.964842%207.90625%200.937498H11.8438C12.2539%200.964842%2012.4727%201.18359%2012.5%201.59375C12.4727%202.0039%2012.2539%202.22265%2011.8438%202.25ZM23%2014.7187C23%2013.8984%2022.7949%2013.1328%2022.3848%2012.4219C21.9746%2011.7109%2021.4141%2011.1504%2020.7031%2010.7402C19.9922%2010.3301%2019.2266%2010.125%2018.4063%2010.125C17.5859%2010.125%2016.8203%2010.3301%2016.1094%2010.7402C15.3984%2011.1504%2014.8379%2011.7109%2014.4277%2012.4219C14.0176%2013.1328%2013.8125%2013.8984%2013.8125%2014.7187C13.8125%2015.5391%2014.0176%2016.3047%2014.4277%2017.0156C14.8379%2017.7266%2015.3984%2018.2871%2016.1094%2018.6973C16.8203%2019.1074%2017.5859%2019.3125%2018.4063%2019.3125C19.2266%2019.3125%2019.9922%2019.1074%2020.7031%2018.6973C21.4141%2018.2871%2021.9746%2017.7266%2022.3848%2017.0156C22.7949%2016.3047%2023%2015.5391%2023%2014.7187ZM12.5%2014.7187C12.5%2013.6523%2012.7598%2012.668%2013.2793%2011.7656C13.7988%2010.8633%2014.5234%2010.1387%2015.4531%209.5918C16.3828%209.07226%2017.3672%208.8125%2018.4063%208.8125C19.4453%208.8125%2020.4297%209.07226%2021.3594%209.5918C22.2891%2010.1387%2023.0137%2010.8633%2023.5332%2011.7656C24.0527%2012.668%2024.3125%2013.6523%2024.3125%2014.7187C24.3125%2015.7852%2024.0527%2016.7695%2023.5332%2017.6719C23.0137%2018.5742%2022.2891%2019.2988%2021.3594%2019.8457C20.4297%2020.3652%2019.4453%2020.625%2018.4063%2020.625C17.3672%2020.625%2016.3828%2020.3652%2015.4531%2019.8457C14.5234%2019.2988%2013.7988%2018.5742%2013.2793%2017.6719C12.7598%2016.7695%2012.5%2015.7852%2012.5%2014.7187ZM19.0625%2012.0937V14.0625H21.0313C21.4414%2014.0898%2021.6602%2014.3086%2021.6875%2014.7187C21.6602%2015.1289%2021.4414%2015.3477%2021.0313%2015.375H19.0625V17.3437C19.0352%2017.7539%2018.8164%2017.9727%2018.4063%2018C17.9961%2017.9727%2017.7773%2017.7539%2017.75%2017.3437V15.375H15.7813C15.3711%2015.3477%2015.1523%2015.1289%2015.125%2014.7187C15.1523%2014.3086%2015.3711%2014.0898%2015.7813%2014.0625H17.75V12.0937C17.7773%2011.6836%2017.9961%2011.4648%2018.4063%2011.4375C18.8164%2011.4648%2019.0352%2011.6836%2019.0625%2012.0937Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
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
            <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2230%22%20height%3D%229%22%20viewBox%3D%220%200%2030%209%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_4336_50832)%22%3E%0A%3Cpath%20d%3D%22M8.44108%208.07282L6.83707%206.46848C6.78641%206.41881%206.71829%206.39099%206.64735%206.39099C6.57641%206.39099%206.50829%206.41881%206.45763%206.46848L4.85362%208.07282C4.81536%208.10929%204.78912%208.15655%204.77838%208.2083C4.76764%208.26006%204.77291%208.31385%204.79349%208.36253C4.81407%208.41122%204.84899%208.45248%204.8936%208.48083C4.93821%208.50918%204.99039%208.52328%205.0432%208.52124H8.2515C8.30401%208.52255%208.3557%208.50802%208.39984%208.47955C8.44398%208.45108%208.47852%208.40997%208.49898%208.36159C8.51943%208.31321%208.52485%208.25979%208.51452%208.20829C8.5042%208.15678%208.47861%208.10958%208.44108%208.07282Z%22%20fill%3D%22%23C3C6CC%22%2F%3E%0A%3Cpath%20d%3D%22M8.49407%202.31048L7.99162%200.818777C7.96895%200.751316%207.9328%200.689168%207.88537%200.636108L0.0612793%208.46025C0.107195%208.50134%200.167174%208.52318%200.228764%208.52122H2.45106C2.51317%208.52153%202.57473%208.50957%202.63221%208.48604C2.68969%208.46251%202.74196%208.42786%202.78603%208.38409L8.38756%202.78233C8.44844%202.72202%208.49081%202.64555%208.50968%202.56196C8.52855%202.47836%208.52314%202.39111%208.49407%202.31048Z%22%20fill%3D%22%23E1E3E6%22%2F%3E%0A%3Cpath%20d%3D%22M7.70275%200.529222L6.2111%200.027016C6.13049%20-0.00205264%206.04324%20-0.00747106%205.95964%200.0114C5.87605%200.0302711%205.79959%200.0726449%205.73927%200.133528L0.137472%205.73528C0.0493522%205.82444%200.000141427%205.94489%200.000609215%206.07026V8.29264C-0.00134688%208.35423%200.020489%208.41421%200.0615849%208.46013L7.88568%200.63601C7.83255%200.588419%207.77032%200.552091%207.70275%200.529222Z%22%20fill%3D%22%23C3C6CC%22%2F%3E%0A%3Cpath%20d%3D%22M29.0973%204.14068C29.1023%204.22732%2029.0818%204.31352%2029.0382%204.38859C28.9999%204.447%2028.9457%204.4932%2028.8819%204.52173C28.8119%204.55247%2028.737%204.57041%2028.6606%204.57472C28.5778%204.58084%2028.4952%204.58386%2028.4127%204.58377H28.1236V3.70371H28.4423C28.5191%203.70373%2028.5959%203.70764%2028.6723%203.71543C28.7459%203.7219%2028.8177%203.7409%2028.8848%203.77162C28.9473%203.80063%2029.0005%203.84657%2029.0382%203.90422C29.0808%203.97549%2029.1014%204.05776%2029.0973%204.14068ZM29.2036%206.39102H30.0003L29.5636%205.74716C29.4887%205.63691%2029.413%205.53067%2029.3364%205.42842C29.2595%205.3259%2029.1955%205.24122%2029.1444%205.17438C29.1077%205.11444%2029.0596%205.06225%2029.0028%205.02074C29.2185%205.00314%2029.4197%204.90515%2029.5665%204.7462C29.7176%204.57701%2029.797%204.35564%2029.7878%204.12896C29.7907%203.99339%2029.7624%203.85896%2029.7051%203.73606C29.6478%203.61315%2029.563%203.50506%2029.4573%203.42012C29.3475%203.33387%2029.2191%203.27418%2029.0824%203.24571C28.9049%203.20946%2028.7239%203.19267%2028.5427%203.19565H27.4685V6.39102H28.1236V5.06201C28.1879%205.05915%2028.2516%205.07566%2028.3065%205.10941C28.3543%205.14129%2028.3979%205.17895%2028.4364%205.22152C28.4943%205.29253%2028.5484%205.36647%2028.5986%205.44306C28.6636%205.53946%2028.759%205.68414%2028.8848%205.8771L29.2036%206.39102ZM23.6539%206.39102H25.7077V5.83583H24.321V4.98532H25.3594V4.45969H24.3148V3.72129H25.566L25.6603%203.19565H23.6539V6.39102ZM21.0775%206.39076L22.3226%203.19565H21.6322L21.0008%204.85538C20.9703%204.93072%2020.9437%205.0076%2020.9212%205.08571C20.8956%205.17225%2020.873%205.25391%2020.8533%205.33069C20.8336%205.40765%2020.8178%205.47164%2020.8059%205.52268L20.7883%205.59964L20.7646%205.52268C20.7529%205.46756%2020.7372%205.4017%2020.7175%205.3251C20.6978%205.24814%2020.6752%205.1664%2020.6496%205.07985C20.6241%204.99305%2020.5995%204.91627%2020.5759%204.84952L19.9917%203.19565H19.26L20.4816%206.39076H21.0775ZM15.8879%206.39102H17.9414V5.83583H16.5546V4.98532H17.5934V4.45969H16.5488V3.72129H17.7997L17.8942%203.19565H15.8879V6.39102ZM14.0898%206.39102L14.2139%205.84754H12.9155V3.19565H12.2488V6.39102H14.0898Z%22%20fill%3D%22%23262933%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_4336_50832%22%3E%0A%3Crect%20width%3D%2230%22%20height%3D%228.521%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E" />
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
                  className={_utils.cx(
                    _styles,
                    "text-sm",
                    "fw-semibold",
                    "text-green-500"
                  )}
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
            <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2212%22%20height%3D%2220%22%20viewBox%3D%220%200%2016%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.26556%2031.4569C4.15183%2031.5171%200.797568%2027.9886%200.874718%2023.9116C0.907316%2021.9505%201.71287%2020.0816%203.11616%2018.7114C4.51945%2017.3412%206.40698%2016.5805%208.36819%2016.5948C12.2866%2016.6054%2015.5672%2019.9683%2015.638%2023.8903C15.713%2028.0452%2012.288%2031.5206%208.26556%2031.4569ZM14.3137%2024.0729C14.3385%2020.7051%2011.646%2017.9559%208.29741%2017.9305C4.94881%2017.905%202.21954%2020.6131%202.19123%2023.9802C2.17386%2025.5985%202.79979%2027.1574%203.93141%2028.3143C5.06304%2029.4711%206.60774%2030.1313%208.22593%2030.1496C11.5377%2030.1913%2014.2889%2027.445%2014.3137%2024.0729ZM0.889582%208.95032C0.883047%208.14633%201.0356%207.34899%201.33847%206.60421C1.64133%205.85942%202.08852%205.18191%202.65429%204.61066C3.22006%204.03941%203.89323%203.58572%204.63504%203.27571C5.37686%202.9657%206.17267%202.80549%206.97666%202.8043C10.3175%202.79793%2013.0694%205.55702%2013.0744%208.91705C13.08%2012.3252%2010.3713%2015.0843%207.01063%2015.0942C3.60045%2015.1034%200.899491%2012.391%200.889582%208.95032ZM2.22803%208.9121C2.22194%209.53529%202.33866%2010.1536%202.57151%2010.7317C2.80437%2011.3098%203.14881%2011.8363%203.58516%2012.2813C4.02151%2012.7263%204.54123%2013.081%205.11464%2013.3251C5.68805%2013.5692%206.30393%2013.698%206.92711%2013.704C7.55029%2013.7101%208.16857%2013.5934%208.74664%2013.3606C9.32472%2013.1277%209.85127%2012.7832%2010.2962%2012.3469C10.7412%2011.9105%2011.0958%2011.3908%2011.34%2010.8173C11.5841%2010.2439%2011.7128%209.62802%2011.7189%209.00482C11.7359%206.34836%209.63374%204.18243%207.01913%204.16119C4.39107%204.14279%202.24856%206.26626%202.22803%208.9121ZM10.5779%201.24143C10.5802%200.910842%2010.7137%200.594691%2010.949%200.362525C11.0656%200.247568%2011.2036%200.156689%2011.3552%200.0950787C11.5069%200.033468%2011.6692%200.00233148%2011.8329%200.00344691C11.9966%200.00456234%2012.1584%200.0379079%2012.3092%200.10158C12.46%200.165251%2012.5968%200.258002%2012.7117%200.374537C12.8267%200.491071%2012.9176%200.629108%2012.9792%200.780764C13.0408%200.93242%2013.0719%201.09473%2013.0708%201.25842C13.0726%201.42375%2013.0414%201.58777%2012.9789%201.74085C12.9164%201.89394%2012.824%202.03299%2012.707%202.14984C12.59%202.26668%2012.4509%202.35897%2012.2977%202.42128C12.1446%202.48359%2011.9805%202.51467%2011.8152%202.51268C11.1145%202.50772%2010.5779%201.95562%2010.5779%201.24143Z%22%20fill%3D%22%2338B2A7%22%2F%3E%0A%3C%2Fsvg%3E" />
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
                  className={_utils.cx(
                    _styles,
                    "text-sm",
                    "fw-semibold",
                    "text-green-500"
                  )}
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
              value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%3Crect%20width%3D%2240%22%20height%3D%2240%22%20fill%3D%22url(%23pattern0)%22%2F%3E%0A%3Cdefs%3E%0A%3Cpattern%20id%3D%22pattern0%22%20patternContentUnits%3D%22objectBoundingBox%22%20width%3D%221%22%20height%3D%221%22%3E%0A%3Cuse%20xlink%3Ahref%3D%22%23image0_4289_10966%22%20transform%3D%22scale(0.0025)%22%2F%3E%0A%3C%2Fpattern%3E%0A%3Cimage%20id%3D%22image0_4289_10966%22%20width%3D%22400%22%20height%3D%22400%22%20xlink%3Ahref%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb%2BAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAOpQTFRFRzvORzvOdWza6Ob53Nr20c7zurbto53mjITgamDXXlTUmJDjxcLwurXt%2F%2F%2F%2F0M3zX1XU%2Fv7%2FSDzO8vL8UkfRdm3agXjdamHXxMHwl5HjrqnpgXndRzzOU0jRjIXg9PP83Nn26Of5XlPU0M3y5%2Bb5urXsmJHjjYXgi4PgxcLvpJ7mubTsgnndxMHv8%2FP8u7bt3dr2X1TUurbsaV%2FXopzm0c7ypJ7nxsLwaWDXo53n5%2BX5o57mr6nqjIXhXlXUU0nRrqnqmJHk9PL8mZHja2HXr6np8%2FL85%2BX429n1ubXsxcHvxsLvrajpRzvOAvyN2gAAAAJ0Uk5T%2Fv0%2FoI%2BqAAAPpElEQVR4nO2dbXvbxhFFXb2RomVWoi2nll%2FSxE4a143TqE3apmmVOo3lJOX%2F%2FzvlEtIuQYAkFpg7c1fPnG%2BWZBLgIfdiZpfYe3OHiXv3rI%2FAqeFCyHAhZLgQMlwIGS6EDBdChgshw4WQ4ULIcCFkuBAyXAgZLoQMF0KGCyHDhZDhQshwIWS4EDJcCBkuhAwXQoYLIcOFkOFCyHAhZLgQMlwIGS6EDBdChgshw4WQ4ULIcCFkuBAyXAgZLoQMF0KGCyHDhZDhQshwIWS4EDJcCBkuhAwXQoYLIcOFkOFCyHAhZLgQMlwIGS6EDBdChgshw4WQ4ULIcCFkuBAyXAgZhQrZ2z84PDw6Go1G4%2FF4b8Hx5Ibwj8XP7o9GR0cnh%2Fv7Y%2BtDzaRQIQ%2BmXfmt9aFmUqaQ084%2Bpmd71gebR5lCxt2FTEfWB5tHkUJm%2BxlCHj6yPtwsihRynuFjevbY%2BnCzKFJI90gPlBXrJQrJiPTlR6SoMatEITmRHigq1gsUMjvIFPLQ%2BohzKFDIR5k%2ByipFChSSF%2BmBkmK9PCFZRcjNR6SgWC9PSG6kBwqK9eKEzA57CCko1osTklmEVBQU68UJyY%2F0wO%2BsD7szpQnpEemBcjqMpQnpE%2BmBJ9YH3pXChPSK9EAxpUhhQnpFeqCYWC9MyEVfIdML60PvSFlCekZ6oJRYL0vI094%2Bion1ooQ8OxkgpJBYL0pI70gPFBLrRQnpW4RUlBHrJQkZEOmBMmK9JCFZq3%2BalLEeqCQh%2FfqKiSJivSAhgyJ9%2BREpYcwqSMiwSA%2BUMHFYjpCBkR4oYeKwHCEDIz1QQilSjpChkR4oINaLEfJcwEcJsV6MkOGRHuCP9VKEZC%2FobYc%2F1ksRkr2gtx3%2BWC9FiESkB%2BjXAxUiRKAIqaDvMBYiRCbSA%2ByxXoaQ3qt%2FmrCXImUIGdxXTLDHehlCpCI9QD5xWIQQsUgPkMd6EULkIj3AvR6oBCGCkR7gjvUShAhGeoA71ksQ0n9BbzvUsV6AENFID1DHegFChizobeeF9SltgV%2FIoAW97TDHOr8Q4UgPnB1bn9Rm%2BIXIFiEVxB1GeiHikR4gnjikFyKw%2BqcJcSlCL0Syr5jgjXV2IYBID%2FCuB2IXgoj0AG2skwuBRHqANtbJhUAiPUAb6%2BRCMJEeYI11biHPP4YJYY11biGoSA%2BQxjq1EKEFve383vrs2qEWEhf0fgIYukhjnVpIjPSR9KRhgHPikFlILELOPkVc%2FnJOHDILiZH%2BElMgUq4HIhaSVv%2BM5%2FMRQAhlKUIsJPYVX82FvmK4BmWsEwuJkf7ZXHyxXAVjrPMKWYn08M%2FPAUIYY51XyB9uX7aqgoN0UQhjnVZIGqO%2BWP772WuAkEPjk2yBVkiM9Nsu4B5ACOF6IFohf7x90d7c%2FGCGGLP4OoysQlKkx2tTRPuEb%2BKQVcifbl%2ByV%2FFHkDGLrhQhFTKLC3rTfuiQUoQu1kmFpEj%2FNP0Q0T6hmzgkFRKLkC9Xfohon9DFOqeQFOmrt3aFjFlvzU6yHU4hcfrjVe3HjwFCpmSxTilk9tXtq%2FWm9nNI%2B4Qs1imFtEZ6AFGKkMU6pZAY6S%2FXfoEoRchinVFIivQv1n%2BDGLP%2BbHKSm2AUsiHSA5BShCrWCYU8O7p9qd40fvc1QMj00uAkN0IoJF5LtTTHIaUI1cQhoZC1qcI6iJlcqolDPiFpQe%2B45bd3vhThE7KxCFkCGbOYYp1PSFz904z0AKQUIVoPRCekZaqw%2FnvEmEUU63RCYqQ3i5AKRPuEKNbZhNQW9LYCGbN4Yp1NyPZID9zxWGcTEiP9y41%2Fgmif8HQYyYRs7ismIDO5NLFOJmRnpM9RYxbLNqBcQtJr3V6EVEC%2BLM0S61xCdkd6ANI%2BYZk45BISF%2FSuTxXWgZQiJLFOJaRLpAcgpQjJMl8qIXFB745rHkj7hKQUYRKyafVPE0gpwhHrTEJSpO96s%2F4FIYQj1pmEdClCKiClCEesEwlJd2vY1FdMQGZyKWKdSEhc%2FbO1CKnAlCIMsc4jpHukz1Fj1gn%2BLHfCI6R7pAcwpQhBrPMI6R7pAczdGAkmDnmExEj%2Fa6c%2Fh7RPCEoRGiFxDOoQ6bW%2Fl4Qg1mmExKnC7X3FCOYGmfbrgViEPIoLerf3FROQ9ol9rLMIiZNOnSI9AJnJtY91FiFxAOpQhFRgShHzWCcRMrl9QTpGegDSPjGPdRIhuZEewJQi1rFOIqTjVGGdS4QQ61jnEDLu9XJgShHj9UAcQjqt%2FmkAmcm1jnUKISnS8yIVUooYTxxSCImR3rkIqYCMWcYThxRCMqYKa2BKEduJQwYhMdIzipCKO1iKMAjpF%2BkBTPvENNYJhKRIz77ixIxZprFOICReK2VGeuDuxTqBkBjp2SMWqn1iGev2QnKnCutAZnItY91eSJ%2B%2BYgIzZhmuBzIXkiI9p68YwexebNhhNBeSP1VYB9I%2BMYx1cyFDIj1w10oRayEpA3pu5QEqRcxi3VpIjPTet6KEtE%2FsJg6NhcRIz%2B0rJkCliFWsGwtJXznvU4RUQGZyzdYDGQuJkf5Z%2F8fAlCJWsW4rJL2WA0IUM5NrFeu2QmKkfzLkUTCliFGsmwqJC3r7R3oAM2YZxbqpEIlIn6NKkekLqdPMwlRIfCFfD3scTCliE%2BuWQlIRMnBxGqZ9YrMNqKUQmUifw8Yskw6jpRCJIqQCsjmVzcShoRChSA9g2icmpYihkDjOfDP8sSAzuSaxbidEoK%2BYwJQiFuuB7ITESJfY2hHTPrGIdTshcpEewLRPDGLdTEiKdJHLfcjmVBaxbiYk7s89tAipAJUi%2BrFuJUQ00gOY9ol%2BrFsJSWP%2B4CKkAlOK6Me6lRDZSJ%2FDxiz1bUCNhKS64cm5EN9ChKjHupGQB7tfChK0Jw5thEx2vxAsaE8c2giBbDgBQnk9kI0QyJJ1EMqliIkQTCsQhHKsmwgpJ9IDurFuIaSgSA%2FoxrqFkBTpI1n%2BhjGiGusWQsSr9Fswq090Y91AyN%2FjmUrHJah9oroeyECI2OqfJqD6RrPDqC8kLeiVv3wBtXw1Jw71hQiu%2FmmC%2BfKOZimiL0Ry9U8DUMmpGOvqQsSnCmuAVp8oThyqCxFd%2FdMEs2JOMdbVhcCKkArQmKUX69pCUqRjghJViqjFuraQ%2BHrJFyEVmBVzerGuLAQb6QFQ%2B0Qt1pWFpMY7oAhZAhqz1GJdWUiM9IHfKtwCZsWc2nogXSEp0nG3vAe1T7RiXVeI8ILedjDtk%2Bkl8JBXUBWSIh1ThFSgShGdWFcVIr6gtxVQ%2B0Rp4lBVSIx0RF8xAWqf6JQimkLSWIIqQtafRxSdWNcUkvqK2OEYVYqorAdSFKIT6QFQ%2B0Ql1hWFoPuKCVD7RCXWFYXESEcWIUtQY5ZGrOsJSVGLH4tB7RON9UB6QvB9xQSofaLRYVQTkiIdW4RUgNonCrGuJiRFOrYIqUCVIvhtQNWExP25FUYsXPsEH%2BtaQtKCXo0RC9Y%2BwU8caglJka4xYuG%2BpAWPdSUhaUGvyoiFK0Xg64GUhKRIx83d1gG1T%2BAdRiUh6f2qM2Lh2ifoWNcRsvKtQp0RCzdmoWNdR0iKdJ1rrACofYKOdR0h6UYBWiMWrn0CjnUVISvfNNMaseaw9gk41lWEpOFcb8TClSLYbUA1hKxEuuZXvlHtE2yHUUPIyp00VDccALVPsO8qDSEp0uFzhTVQYxa0FFEQsrJ1AXp1Q53ZweYXdQjQWFcQcpJOBT%2BdUAPUPoHOQeOFrN77R%2Fl2eaj2CTLW8UJW3qba91xFtU%2BQsY4XsnI7P%2FWtAVHtE2Csw4WsXuqo39oe1T4BxjpcyOrt%2FNRvpP7sNUYI8LOOFrIa6eq37caVIrhYRwtZvYOVwe6yqPYJbj0QWsjqHXqVq5AlqPYJLNbBQmpDhsXOmagxCzZxCBayGumY2%2F%2FsANU%2BgU0cYoXU7tCrOReSQLVPUBOHWCG1m1La7BiPap%2BgShGskNpN95W3GbgB1j4BxTpUSP2urRY7y85x7RNQrEOF1N%2BcBvuYBlDtE1CsI4XUb7pvcpE1B7ZPMLGOFFLflcKgcVIBK0UgYzBQyNquFDZXvXNc%2BwSzHggoZG3bFqXbG7WAap9AOow4IZO1jaYMtsK%2BAbbDEuKUcELWdyqwE1JUKYITsr4T2wvUE%2B0GVooAYh0mpLGVh6EQWCkC6AbBhDS2KjQUAhuzALGOEtLc68ZQCC7W5ftzKCHNvTwthcDGLPlYBwn5h8abqTvPTprHI4J8rGOErNcgAbvL3jlwN2TxWMcIadtb1a5Sn%2BOmqeRjHSKkdW9VrTsGtAKbWhf%2F4EOEtG4%2BvA94ou6g%2BlnT74QPFCFkw4BtNEFV8bj9mIYjHesIIRu2r7dYlhX5GiVE%2BsoXIKTlkneJ5XUvblJE%2BiMiL%2BR005Grbrq8Di7Vhc9LXsiGAQt%2Bg%2FEdgO7rMJX%2BiIgL2TRgTY3HLJwQ2QstaSEfbTlw0zELtaQ0IPlOExbS1jNJGC2VW4IUIlmuCwvZPvFg%2BRH5J1DI9Hu545QVsiVAltilCKzfu0Qw10WF7PIxfXsq%2BGxZzLaOpYP5TmzQkhTyr90Hvv9vuafLYtvFhgQPpA5UUEgHH9Ppgc1nZPYVWIjYaCwnpJOPxWfExMjG9oEYUjEiJmRnftzy9slM6Cm7c4VNkCUPJyKHKiRk9kPGoe8%2FVVZyBR%2Bwlqcl0s6WEXKa2bo7HGsqyT263kjkiISQ2X%2FeZR%2F7%2Fv1THSezq2%2Fzj64v3z8ffLzDhczOe74BD0bnM7CU2emPqEWL7ewPvlH0UCFXT4ec8bvD0fkVxMpsdvr0xyOFLF%2Fnwd6w0xkk5Gp8JDAcvDs8Go3P%2F3s6G25m8RCnp%2BcvPv%2Fh6EBvnFrn4P7xgBMZIuQn6VPZH3jlCO6PZNB%2F%2FdwQIfJzPkOFiB9QX%2FqvCnQhEFzIEhcijQtxIRhshZzd8P468LLJ9Q3vz%2Bo0zkNYyFmD99erfGg51ibfrP6X5kO2ncf0597nMOiy98Mvlxej8fjx3mQy6T5l9mjx15PjvQXj8fj%2BaDS6uLy8XJz4h%2BvroULC2%2BGXy58vFg%2B6eOxxeI7jyZJhD9xC9bDL0wjnsTyR0eJEfl0a%2FF%2Fvx1Xc4N7pggshw4WQ4ULIcCFkuBAyXAgZLoQMF0KGCyHDhZDhQshwIWS4EDJcCBkuhAwXQoYLIcOFkOFCyHAhZLgQMlwIGS6EDBdChgshw4WQ4ULIcCFkuBAyXAgZLoQMF0KGCyHDhZDhQshwIWS4EDJcCBkuhAwXQoYLIcOFkOFCyHAhZLgQMlwIGS6EDBdChgshw4WQ4ULIcCFkuBAyXAgZLoQMF0KGCyHDhZDhQshwIWTcc7j4zf8BQjKGTLehtEMAAAAASUVORK5CYII%3D%22%2F%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
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
                  className={_utils.cx(
                    _styles,
                    "text-sm",
                    "fw-semibold",
                    "text-green-500"
                  )}
                  tag="div"
                >
                  {"Connected"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
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
          className={_utils.cx(_styles, "text-blue-600", "cursor-pointer")}
          tag="div"
        >
          {"Request Integration"}
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
