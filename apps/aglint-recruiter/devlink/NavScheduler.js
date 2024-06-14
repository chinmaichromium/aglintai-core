"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavScheduler.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1558":{"id":"e-1558","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-601","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1559"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"55fdb457-e555-f157-197a-9083bb21d3d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55fdb457-e555-f157-197a-9083bb21d3d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716475143303},"e-1559":{"id":"e-1559","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-602","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1558"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"55fdb457-e555-f157-197a-9083bb21d3d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55fdb457-e555-f157-197a-9083bb21d3d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716475143305},"e-1564":{"id":"e-1564","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-603","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1565"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717148451867},"e-1565":{"id":"e-1565","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-604","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1564"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717148451872},"e-1566":{"id":"e-1566","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-603","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1567"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".navlink","originalId":"65115b964162cd123e7b694b|d0e49567-4d73-555b-eb7d-d56bd38b642d","appliesTo":"CLASS"},"targets":[{"selector":".navlink","originalId":"65115b964162cd123e7b694b|d0e49567-4d73-555b-eb7d-d56bd38b642d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717148507493},"e-1567":{"id":"e-1567","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-604","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1566"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".navlink","originalId":"65115b964162cd123e7b694b|d0e49567-4d73-555b-eb7d-d56bd38b642d","appliesTo":"CLASS"},"targets":[{"selector":".navlink","originalId":"65115b964162cd123e7b694b|d0e49567-4d73-555b-eb7d-d56bd38b642d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717148507493},"e-1576":{"id":"e-1576","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1577"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972142},"e-1577":{"id":"e-1577","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1576"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972144},"e-1578":{"id":"e-1578","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1579"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624481},"e-1579":{"id":"e-1579","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1578"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624482}},"actionLists":{"a-601":{"id":"a-601","title":"Show Nav Tooltip","actionItemGroups":[{"actionItems":[{"id":"a-601-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-601-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"none"}},{"id":"a-601-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-601-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-601-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"grid"}},{"id":"a-601-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716475148153},"a-602":{"id":"a-602","title":"Show Nav Tooltip 2","actionItemGroups":[{"actionItems":[{"id":"a-602-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-602-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-602-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716475148153},"a-603":{"id":"a-603","title":"Navlink Toolip [show]","actionItemGroups":[{"actionItems":[{"id":"a-603-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-603-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink","selectorGuids":["e6b78888-5f78-3df1-65db-54e645eb572b"]},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-603-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"none"}},{"id":"a-603-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-603-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-603-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink","selectorGuids":["e6b78888-5f78-3df1-65db-54e645eb572b"]},"globalSwatchId":"--neutral-2","rValue":249,"bValue":248,"gValue":249,"aValue":1}},{"id":"a-603-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"grid"}},{"id":"a-603-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716475148153},"a-604":{"id":"a-604","title":"Navlink Toolip [hide]","actionItemGroups":[{"actionItems":[{"id":"a-604-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-604-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navlink","selectorGuids":["e6b78888-5f78-3df1-65db-54e645eb572b"]},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-604-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-604-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716475148153},"a-613":{"id":"a-613","title":"score pill hover in","actionItemGroups":[{"actionItems":[{"id":"a-613-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-613-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718275975402},"a-614":{"id":"a-614","title":"score pill hover out","actionItemGroups":[{"actionItems":[{"id":"a-614-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718275975402}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavScheduler({
  as: _Component = _Builtin.Block,
  isActive = false,
  onClickNav = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navlink")}
      tag="div"
      {...onClickNav}
    >
      <_Builtin.Block className={_utils.cx(_styles, "navlink_icon")} tag="div">
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icons", "relative-1")}
          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.40002%202.7C5.77502%202.725%205.97502%202.925%206.00002%203.3V5.1H13.2V3.3C13.225%202.925%2013.425%202.725%2013.8%202.7C14.175%202.725%2014.375%202.925%2014.4%203.3V5.1H15.6C16.275%205.125%2016.8375%205.3625%2017.2875%205.8125C17.7375%206.2625%2017.975%206.825%2018%207.5V8.7V9.9V9.9375C17.8%209.9125%2017.6%209.9%2017.4%209.9C17.2%209.9%2017%209.9125%2016.8%209.9375V9.9H2.40002V19.5C2.40002%2019.85%202.51252%2020.1375%202.73752%2020.3625C2.96252%2020.5875%203.25002%2020.7%203.60002%2020.7H12.3C12.675%2021.15%2013.1125%2021.55%2013.6125%2021.9H3.60002C2.92502%2021.875%202.36252%2021.6375%201.91252%2021.1875C1.46252%2020.7375%201.22502%2020.175%201.20002%2019.5V9.9V8.7V7.5C1.22502%206.825%201.46252%206.2625%201.91252%205.8125C2.36252%205.3625%202.92502%205.125%203.60002%205.1H4.80002V3.3C4.82502%202.925%205.02502%202.725%205.40002%202.7ZM15.6%206.3H3.60002C3.25002%206.3%202.96252%206.4125%202.73752%206.6375C2.51252%206.8625%202.40002%207.15%202.40002%207.5V8.7H16.8V7.5C16.8%207.15%2016.6875%206.8625%2016.4625%206.6375C16.2375%206.4125%2015.95%206.3%2015.6%206.3ZM17.4%2020.7C18.15%2020.7%2018.85%2020.5125%2019.5%2020.1375C20.15%2019.7625%2020.6625%2019.25%2021.0375%2018.6C21.4125%2017.95%2021.6%2017.25%2021.6%2016.5C21.6%2015.75%2021.4125%2015.05%2021.0375%2014.4C20.6625%2013.75%2020.15%2013.2375%2019.5%2012.8625C18.85%2012.4875%2018.15%2012.3%2017.4%2012.3C16.65%2012.3%2015.95%2012.4875%2015.3%2012.8625C14.65%2013.2375%2014.1375%2013.75%2013.7625%2014.4C13.3875%2015.05%2013.2%2015.75%2013.2%2016.5C13.2%2017.25%2013.3875%2017.95%2013.7625%2018.6C14.1375%2019.25%2014.65%2019.7625%2015.3%2020.1375C15.95%2020.5125%2016.65%2020.7%2017.4%2020.7ZM17.4%2011.1C18.375%2011.1%2019.275%2011.3375%2020.1%2011.8125C20.925%2012.2875%2021.5875%2012.95%2022.0875%2013.8C22.5625%2014.65%2022.8%2015.55%2022.8%2016.5C22.8%2017.45%2022.5625%2018.35%2022.0875%2019.2C21.5875%2020.05%2020.925%2020.7125%2020.1%2021.1875C19.275%2021.6625%2018.375%2021.9%2017.4%2021.9C16.425%2021.9%2015.525%2021.6625%2014.7%2021.1875C13.875%2020.7125%2013.2125%2020.05%2012.7125%2019.2C12.2375%2018.35%2012%2017.45%2012%2016.5C12%2015.55%2012.2375%2014.65%2012.7125%2013.8C13.2125%2012.95%2013.875%2012.2875%2014.7%2011.8125C15.525%2011.3375%2016.425%2011.1%2017.4%2011.1ZM17.4%2013.5C17.775%2013.525%2017.975%2013.725%2018%2014.1V15.9H19.2C19.575%2015.925%2019.775%2016.125%2019.8%2016.5C19.775%2016.875%2019.575%2017.075%2019.2%2017.1H17.4C17.025%2017.075%2016.825%2016.875%2016.8%2016.5V14.1C16.825%2013.725%2017.025%2013.525%2017.4%2013.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "navlink_current")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons", "relative-1")}
            value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.40002%202.7C5.77502%202.725%205.97502%202.925%206.00002%203.3V5.1H13.2V3.3C13.225%202.925%2013.425%202.725%2013.8%202.7C14.175%202.725%2014.375%202.925%2014.4%203.3V5.1H15.6C16.275%205.125%2016.8375%205.3625%2017.2875%205.8125C17.7375%206.2625%2017.975%206.825%2018%207.5V8.7V9.9V9.9375C17.8%209.9125%2017.6%209.9%2017.4%209.9C17.2%209.9%2017%209.9125%2016.8%209.9375V9.9H2.40002V19.5C2.40002%2019.85%202.51252%2020.1375%202.73752%2020.3625C2.96252%2020.5875%203.25002%2020.7%203.60002%2020.7H12.3C12.675%2021.15%2013.1125%2021.55%2013.6125%2021.9H3.60002C2.92502%2021.875%202.36252%2021.6375%201.91252%2021.1875C1.46252%2020.7375%201.22502%2020.175%201.20002%2019.5V9.9V8.7V7.5C1.22502%206.825%201.46252%206.2625%201.91252%205.8125C2.36252%205.3625%202.92502%205.125%203.60002%205.1H4.80002V3.3C4.82502%202.925%205.02502%202.725%205.40002%202.7ZM15.6%206.3H3.60002C3.25002%206.3%202.96252%206.4125%202.73752%206.6375C2.51252%206.8625%202.40002%207.15%202.40002%207.5V8.7H16.8V7.5C16.8%207.15%2016.6875%206.8625%2016.4625%206.6375C16.2375%206.4125%2015.95%206.3%2015.6%206.3ZM17.4%2020.7C18.15%2020.7%2018.85%2020.5125%2019.5%2020.1375C20.15%2019.7625%2020.6625%2019.25%2021.0375%2018.6C21.4125%2017.95%2021.6%2017.25%2021.6%2016.5C21.6%2015.75%2021.4125%2015.05%2021.0375%2014.4C20.6625%2013.75%2020.15%2013.2375%2019.5%2012.8625C18.85%2012.4875%2018.15%2012.3%2017.4%2012.3C16.65%2012.3%2015.95%2012.4875%2015.3%2012.8625C14.65%2013.2375%2014.1375%2013.75%2013.7625%2014.4C13.3875%2015.05%2013.2%2015.75%2013.2%2016.5C13.2%2017.25%2013.3875%2017.95%2013.7625%2018.6C14.1375%2019.25%2014.65%2019.7625%2015.3%2020.1375C15.95%2020.5125%2016.65%2020.7%2017.4%2020.7ZM17.4%2011.1C18.375%2011.1%2019.275%2011.3375%2020.1%2011.8125C20.925%2012.2875%2021.5875%2012.95%2022.0875%2013.8C22.5625%2014.65%2022.8%2015.55%2022.8%2016.5C22.8%2017.45%2022.5625%2018.35%2022.0875%2019.2C21.5875%2020.05%2020.925%2020.7125%2020.1%2021.1875C19.275%2021.6625%2018.375%2021.9%2017.4%2021.9C16.425%2021.9%2015.525%2021.6625%2014.7%2021.1875C13.875%2020.7125%2013.2125%2020.05%2012.7125%2019.2C12.2375%2018.35%2012%2017.45%2012%2016.5C12%2015.55%2012.2375%2014.65%2012.7125%2013.8C13.2125%2012.95%2013.875%2012.2875%2014.7%2011.8125C15.525%2011.3375%2016.425%2011.1%2017.4%2011.1ZM17.4%2013.5C17.775%2013.525%2017.975%2013.725%2018%2014.1V15.9H19.2C19.575%2015.925%2019.775%2016.125%2019.8%2016.5C19.775%2016.875%2019.575%2017.075%2019.2%2017.1H17.4C17.025%2017.075%2016.825%2016.875%2016.8%2016.5V14.1C16.825%2013.725%2017.025%2013.525%2017.4%2013.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "navlink_tooltip")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "no_wrap")} tag="div">
          {"Scheduler"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
