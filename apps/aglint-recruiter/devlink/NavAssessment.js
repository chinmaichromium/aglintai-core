"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavAssessment.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1542":{"id":"e-1542","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-583","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1543"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"32cd43bb-7884-8845-68c3-cf1e5cf0b591","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"32cd43bb-7884-8845-68c3-cf1e5cf0b591","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707734038389},"e-1543":{"id":"e-1543","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-584","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1542"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"32cd43bb-7884-8845-68c3-cf1e5cf0b591","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"32cd43bb-7884-8845-68c3-cf1e5cf0b591","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707734038389}},"actionLists":{"a-583":{"id":"a-583","title":"Nav Icon Hover In 8","actionItemGroups":[{"actionItems":[{"id":"a-583-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover.schedule-copy","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93","cc7002db-ac3e-0ca3-8049-7956b6949879"]},"value":"none"}},{"id":"a-583-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover.schedule-copy","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93","cc7002db-ac3e-0ca3-8049-7956b6949879"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-583-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover.schedule-copy","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93","cc7002db-ac3e-0ca3-8049-7956b6949879"]},"value":"flex"}},{"id":"a-583-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover.schedule-copy","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93","cc7002db-ac3e-0ca3-8049-7956b6949879"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-584":{"id":"a-584","title":"Nav Icon Hover Out 8","actionItemGroups":[{"actionItems":[{"id":"a-584-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-584-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavAssessment({
  as: _Component = _Builtin.Block,
  isActive = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "nav-bar-icon")}
      data-w-id="32cd43bb-7884-8845-68c3-cf1e5cf0b591"
      tag="div"
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons", "relative-1")}
        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.40039%203.9V14.325L7.16289%2016.35C7.18789%2016.2%207.20039%2016.05%207.20039%2015.9V9.9H2.40039V15.9C2.42539%2016.575%202.66289%2017.1375%203.11289%2017.5875C3.56289%2018.0375%204.12539%2018.275%204.80039%2018.3C5.40039%2018.3%205.91289%2018.1125%206.33789%2017.7375C6.11289%2018.2375%206.00039%2018.7625%206.00039%2019.3125C5.62539%2019.4375%205.22539%2019.5%204.80039%2019.5C3.77539%2019.475%202.92539%2019.125%202.25039%2018.45C1.57539%2017.775%201.22539%2016.925%201.20039%2015.9V3.9H0.600391C0.225391%203.875%200.025391%203.675%200.000391006%203.3C0.025391%202.925%200.225391%202.725%200.600391%202.7H1.20039H2.40039H7.20039H8.40039H9.00039C9.37539%202.725%209.57539%202.925%209.60039%203.3C9.57539%203.675%209.37539%203.875%209.00039%203.9H8.40039ZM2.40039%203.9V8.7H7.20039V3.9H2.40039ZM11.4004%202.7H19.8004C20.1754%202.725%2020.3754%202.925%2020.4004%203.3C20.3754%203.675%2020.1754%203.875%2019.8004%203.9H19.2004V10.95L23.6254%2018.15C23.8754%2018.55%2024.0004%2018.975%2024.0004%2019.425C23.9754%2020.125%2023.7379%2020.7125%2023.2879%2021.1875C22.8129%2021.6375%2022.2254%2021.875%2021.5254%2021.9H9.67539C8.97539%2021.875%208.38789%2021.6375%207.91289%2021.1875C7.46289%2020.7125%207.22539%2020.125%207.20039%2019.425C7.20039%2018.975%207.32539%2018.55%207.57539%2018.15L12.0004%2010.95V3.9H11.4004C11.0254%203.875%2010.8254%203.675%2010.8004%203.3C10.8254%202.925%2011.0254%202.725%2011.4004%202.7ZM18.0004%203.9H13.2004V11.1C13.2004%2011.225%2013.1754%2011.325%2013.1254%2011.4L11.1004%2014.7H20.1004L18.0754%2011.4C18.0254%2011.325%2018.0004%2011.225%2018.0004%2011.1V3.9ZM8.58789%2018.75C8.46289%2018.975%208.40039%2019.2%208.40039%2019.425C8.40039%2019.8%208.52539%2020.1%208.77539%2020.325C9.02539%2020.575%209.32539%2020.7%209.67539%2020.7H21.5254C21.8754%2020.7%2022.1754%2020.575%2022.4254%2020.325C22.6754%2020.1%2022.8004%2019.8%2022.8004%2019.425C22.8004%2019.2%2022.7379%2018.975%2022.6129%2018.75L20.8504%2015.9H10.3504L8.58789%2018.75Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-bar-icon-active")}
          tag="div"
        />
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-bar-icon-hover", "schedule-copy")}
        tag="div"
      >
        <_Builtin.Block tag="div">{"Assessment"}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
