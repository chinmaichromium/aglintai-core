"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavLink.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1558":{"id":"e-1558","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-601","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1559"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"55fdb457-e555-f157-197a-9083bb21d3d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55fdb457-e555-f157-197a-9083bb21d3d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716475143303},"e-1559":{"id":"e-1559","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-602","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1558"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"55fdb457-e555-f157-197a-9083bb21d3d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55fdb457-e555-f157-197a-9083bb21d3d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716475143305},"e-1564":{"id":"e-1564","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-603","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1565"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717148451867},"e-1565":{"id":"e-1565","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-604","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1564"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717148451872},"e-1566":{"id":"e-1566","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-603","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1567"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".navlink","originalId":"65115b964162cd123e7b694b|d0e49567-4d73-555b-eb7d-d56bd38b642d","appliesTo":"CLASS"},"targets":[{"selector":".navlink","originalId":"65115b964162cd123e7b694b|d0e49567-4d73-555b-eb7d-d56bd38b642d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717148507493},"e-1567":{"id":"e-1567","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-604","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1566"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".navlink","originalId":"65115b964162cd123e7b694b|d0e49567-4d73-555b-eb7d-d56bd38b642d","appliesTo":"CLASS"},"targets":[{"selector":".navlink","originalId":"65115b964162cd123e7b694b|d0e49567-4d73-555b-eb7d-d56bd38b642d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717148507493},"e-1576":{"id":"e-1576","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1577"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972142},"e-1577":{"id":"e-1577","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1576"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972144},"e-1578":{"id":"e-1578","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1579"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624481},"e-1579":{"id":"e-1579","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1578"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624482}},"actionLists":{"a-601":{"id":"a-601","title":"Show Nav Tooltip","actionItemGroups":[{"actionItems":[{"id":"a-601-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-601-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"none"}},{"id":"a-601-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-601-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-601-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"grid"}},{"id":"a-601-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716475148153},"a-602":{"id":"a-602","title":"Show Nav Tooltip 2","actionItemGroups":[{"actionItems":[{"id":"a-602-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-602-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-602-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716475148153},"a-603":{"id":"a-603","title":"Navlink Toolip [show]","actionItemGroups":[{"actionItems":[{"id":"a-603-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-603-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink","selectorGuids":["e6b78888-5f78-3df1-65db-54e645eb572b"]},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-603-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"none"}},{"id":"a-603-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-603-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-603-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink","selectorGuids":["e6b78888-5f78-3df1-65db-54e645eb572b"]},"globalSwatchId":"--neutral-2","rValue":249,"bValue":248,"gValue":249,"aValue":1}},{"id":"a-603-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"grid"}},{"id":"a-603-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716475148153},"a-604":{"id":"a-604","title":"Navlink Toolip [hide]","actionItemGroups":[{"actionItems":[{"id":"a-604-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-604-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navlink","selectorGuids":["e6b78888-5f78-3df1-65db-54e645eb572b"]},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-604-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-604-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navlink_tooltip","selectorGuids":["e4727a83-7bf5-5174-ffb5-c75aac481f67"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716475148153},"a-613":{"id":"a-613","title":"score pill hover in","actionItemGroups":[{"actionItems":[{"id":"a-613-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-613-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":1,"unit":""}}]}],"createdOn":1718275975402,"useFirstGroupAsInitialState":true},"a-614":{"id":"a-614","title":"score pill hover out","actionItemGroups":[{"actionItems":[{"id":"a-614-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]}],"createdOn":1718275975402,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavLink({
  as: _Component = _Builtin.Block,
  isActive = false,
  texttooltip = "Module Name",
  slotIcon,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navlink")}
      data-w-id="55fdb457-e555-f157-197a-9083bb21d3d3"
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "navlink_icon")} tag="div">
        {slotIcon ?? (
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons", "relative-1")}
            value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.25%204.875L5.25%208.475C5.15%208.625%205.0125%208.7%204.8375%208.7C4.6625%208.7%204.5125%208.6375%204.3875%208.5125L2.5875%206.7125C2.3375%206.4375%202.3375%206.1625%202.5875%205.8875C2.8625%205.6375%203.1375%205.6375%203.4125%205.8875L4.7625%207.2L7.35%204.125C7.6%203.85%207.875%203.825%208.175%204.05C8.45%204.3%208.475%204.575%208.25%204.875ZM8.25%2010.875L5.25%2014.475C5.15%2014.625%205.0125%2014.7%204.8375%2014.7C4.6625%2014.7%204.5125%2014.6375%204.3875%2014.5125L2.5875%2012.7125C2.3375%2012.4375%202.3375%2012.1625%202.5875%2011.8875C2.8625%2011.6375%203.1375%2011.6375%203.4125%2011.8875L4.7625%2013.2L7.35%2010.125C7.6%209.85%207.875%209.825%208.175%2010.05C8.45%2010.3%208.475%2010.575%208.25%2010.875ZM9.6%206.3C9.625%205.925%209.825%205.725%2010.2%205.7H21C21.375%205.725%2021.575%205.925%2021.6%206.3C21.575%206.675%2021.375%206.875%2021%206.9H10.2C9.825%206.875%209.625%206.675%209.6%206.3ZM9.6%2012.3C9.625%2011.925%209.825%2011.725%2010.2%2011.7H21C21.375%2011.725%2021.575%2011.925%2021.6%2012.3C21.575%2012.675%2021.375%2012.875%2021%2012.9H10.2C9.825%2012.875%209.625%2012.675%209.6%2012.3ZM8.4%2018.3C8.425%2017.925%208.625%2017.725%209%2017.7H21C21.375%2017.725%2021.575%2017.925%2021.6%2018.3C21.575%2018.675%2021.375%2018.875%2021%2018.9H9C8.625%2018.875%208.425%2018.675%208.4%2018.3ZM6%2018.3C6%2018.65%205.8875%2018.9375%205.6625%2019.1625C5.4375%2019.3875%205.15%2019.5%204.8%2019.5C4.45%2019.5%204.1625%2019.3875%203.9375%2019.1625C3.7125%2018.9375%203.6%2018.65%203.6%2018.3C3.6%2017.95%203.7125%2017.6625%203.9375%2017.4375C4.1625%2017.2125%204.45%2017.1%204.8%2017.1C5.15%2017.1%205.4375%2017.2125%205.6625%2017.4375C5.8875%2017.6625%206%2017.95%206%2018.3Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        )}
      </_Builtin.Block>
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "navlink_current")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            {slotIcon ?? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons", "relative-1")}
                value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.25%204.875L5.25%208.475C5.15%208.625%205.0125%208.7%204.8375%208.7C4.6625%208.7%204.5125%208.6375%204.3875%208.5125L2.5875%206.7125C2.3375%206.4375%202.3375%206.1625%202.5875%205.8875C2.8625%205.6375%203.1375%205.6375%203.4125%205.8875L4.7625%207.2L7.35%204.125C7.6%203.85%207.875%203.825%208.175%204.05C8.45%204.3%208.475%204.575%208.25%204.875ZM8.25%2010.875L5.25%2014.475C5.15%2014.625%205.0125%2014.7%204.8375%2014.7C4.6625%2014.7%204.5125%2014.6375%204.3875%2014.5125L2.5875%2012.7125C2.3375%2012.4375%202.3375%2012.1625%202.5875%2011.8875C2.8625%2011.6375%203.1375%2011.6375%203.4125%2011.8875L4.7625%2013.2L7.35%2010.125C7.6%209.85%207.875%209.825%208.175%2010.05C8.45%2010.3%208.475%2010.575%208.25%2010.875ZM9.6%206.3C9.625%205.925%209.825%205.725%2010.2%205.7H21C21.375%205.725%2021.575%205.925%2021.6%206.3C21.575%206.675%2021.375%206.875%2021%206.9H10.2C9.825%206.875%209.625%206.675%209.6%206.3ZM9.6%2012.3C9.625%2011.925%209.825%2011.725%2010.2%2011.7H21C21.375%2011.725%2021.575%2011.925%2021.6%2012.3C21.575%2012.675%2021.375%2012.875%2021%2012.9H10.2C9.825%2012.875%209.625%2012.675%209.6%2012.3ZM8.4%2018.3C8.425%2017.925%208.625%2017.725%209%2017.7H21C21.375%2017.725%2021.575%2017.925%2021.6%2018.3C21.575%2018.675%2021.375%2018.875%2021%2018.9H9C8.625%2018.875%208.425%2018.675%208.4%2018.3ZM6%2018.3C6%2018.65%205.8875%2018.9375%205.6625%2019.1625C5.4375%2019.3875%205.15%2019.5%204.8%2019.5C4.45%2019.5%204.1625%2019.3875%203.9375%2019.1625C3.7125%2018.9375%203.6%2018.65%203.6%2018.3C3.6%2017.95%203.7125%2017.6625%203.9375%2017.4375C4.1625%2017.2125%204.45%2017.1%204.8%2017.1C5.15%2017.1%205.4375%2017.2125%205.6625%2017.4375C5.8875%2017.6625%206%2017.95%206%2018.3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            )}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "navlink_tooltip")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "no_wrap")} tag="div">
          {texttooltip}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
