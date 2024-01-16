import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavCd.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1504":{"id":"e-1504","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-558","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1505"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776697393},"e-1505":{"id":"e-1505","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-559","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1504"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776697395},"e-1506":{"id":"e-1506","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-560","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1507"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776842585},"e-1507":{"id":"e-1507","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-561","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1506"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776842585},"e-1508":{"id":"e-1508","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-562","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1509"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704777049435},"e-1509":{"id":"e-1509","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-563","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1508"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704777049435},"e-1510":{"id":"e-1510","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-564","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1511"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704779879412},"e-1511":{"id":"e-1511","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-565","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1510"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704779879412}},"actionLists":{"a-558":{"id":"a-558","title":"Nav Icon Hover In","actionItemGroups":[{"actionItems":[{"id":"a-558-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-558-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-558-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-558-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-559":{"id":"a-559","title":"Nav Icon Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-559-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-559-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-560":{"id":"a-560","title":"Nav Icon Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-560-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-560-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-560-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-560-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-561":{"id":"a-561","title":"Nav Icon Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-561-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-561-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-562":{"id":"a-562","title":"Nav Icon Hover In 3","actionItemGroups":[{"actionItems":[{"id":"a-562-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-562-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-562-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-562-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-563":{"id":"a-563","title":"Nav Icon Hover Out 3","actionItemGroups":[{"actionItems":[{"id":"a-563-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-563-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-564":{"id":"a-564","title":"Nav Icon Hover In 4","actionItemGroups":[{"actionItems":[{"id":"a-564-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-564-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-564-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-564-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-565":{"id":"a-565","title":"Nav Icon Hover Out 4","actionItemGroups":[{"actionItems":[{"id":"a-565-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-565-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavCd({
  as: _Component = _Builtin.Block,
  isActive = true,
  onClickNav = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "nav-bar-icon")}
      data-w-id="8a329651-0370-279d-0141-b830868d2807"
      tag="div"
      {...onClickNav}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons", "relative-1")}
        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M19.2%205.7C19.2%205.675%2019.125%205.5875%2018.975%205.4375C18.7%205.2125%2018.225%204.975%2017.55%204.725C16.125%204.2%2014.275%203.925%2012%203.9C9.72502%203.925%207.87502%204.2%206.45002%204.725C5.77502%204.975%205.30002%205.2125%205.02502%205.4375C4.87502%205.5875%204.80002%205.675%204.80002%205.7V9.525C5.35002%209.925%206.21252%2010.275%207.38752%2010.575C8.71252%2010.925%2010.25%2011.1%2012%2011.1C13.75%2011.1%2015.2875%2010.925%2016.6125%2010.575C17.7875%2010.275%2018.65%209.925%2019.2%209.525V5.7ZM19.2%2010.95C18.55%2011.275%2017.7875%2011.55%2016.9125%2011.775C15.4625%2012.125%2013.825%2012.3%2012%2012.3C10.175%2012.3%208.53752%2012.1125%207.08752%2011.7375C6.21252%2011.5375%205.45002%2011.275%204.80002%2010.95V14.325C5.35002%2014.75%206.21252%2015.1%207.38752%2015.375C8.71252%2015.725%2010.25%2015.9%2012%2015.9C13.75%2015.9%2015.2875%2015.725%2016.6125%2015.375C17.7875%2015.075%2018.65%2014.725%2019.2%2014.325V10.95ZM4.80002%2018.9C4.80002%2018.925%204.87502%2019.0125%205.02502%2019.1625C5.30002%2019.3875%205.77502%2019.625%206.45002%2019.875C7.87502%2020.4%209.72502%2020.675%2012%2020.7C14.275%2020.675%2016.125%2020.4%2017.55%2019.875C18.225%2019.625%2018.7%2019.3875%2018.975%2019.1625C19.125%2019.0125%2019.2%2018.925%2019.2%2018.9V15.75C18.55%2016.075%2017.7875%2016.35%2016.9125%2016.575C15.4625%2016.925%2013.825%2017.1%2012%2017.1C10.175%2017.1%208.53752%2016.925%207.08752%2016.575C6.21252%2016.35%205.45002%2016.075%204.80002%2015.75V18.9ZM4.80002%205.7375C4.80002%205.7125%204.80002%205.7125%204.80002%205.7375V5.7375ZM20.4%2018.9C20.35%2019.75%2019.525%2020.4625%2017.925%2021.0375C16.35%2021.5875%2014.375%2021.875%2012%2021.9C9.62502%2021.875%207.65002%2021.5875%206.07502%2021.0375C4.47502%2020.4625%203.65002%2019.75%203.60002%2018.9V5.7C3.65002%204.85%204.47502%204.1375%206.07502%203.5625C7.65002%203.0125%209.62502%202.725%2012%202.7C14.375%202.725%2016.35%203.0125%2017.925%203.5625C19.525%204.1375%2020.35%204.85%2020.4%205.7V18.9Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-bar-icon-active")}
          tag="div"
        />
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-bar-icon-hover", "cd")}
        tag="div"
      >
        <_Builtin.Block tag="div">{"Candidate Database"}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
