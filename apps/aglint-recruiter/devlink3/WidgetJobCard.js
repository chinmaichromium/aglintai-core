"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./WidgetJobCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b9121ed1-beeb-6c7a-90d1-55885df7ceae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b9121ed1-beeb-6c7a-90d1-55885df7ceae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716979210746}},"actionLists":{"a-58":{"id":"a-58","title":"Req-recent-reschedule hover in","actionItemGroups":[{"actionItems":[{"id":"a-58-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.text-underline.text-blue-500.view-req","selectorGuids":["8dc9ea7b-682a-9ca2-5212-49b405bc4978","3ee0110b-cb1a-ae21-d0cd-e1755ffe60cb","8f018daf-ab50-e59f-ddde-28a63babe37d","756eda23-1f35-5cde-d354-ecb6f9929139"]},"value":0,"unit":""}},{"id":"a-58-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"b9121ed1-beeb-6c7a-90d1-55885df7ceae"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-58-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.text-underline.text-blue-500.view-req","selectorGuids":["8dc9ea7b-682a-9ca2-5212-49b405bc4978","3ee0110b-cb1a-ae21-d0cd-e1755ffe60cb","8f018daf-ab50-e59f-ddde-28a63babe37d","756eda23-1f35-5cde-d354-ecb6f9929139"]},"value":"none"}}]},{"actionItems":[{"id":"a-58-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.text-underline.text-blue-500.view-req","selectorGuids":["8dc9ea7b-682a-9ca2-5212-49b405bc4978","3ee0110b-cb1a-ae21-d0cd-e1755ffe60cb","8f018daf-ab50-e59f-ddde-28a63babe37d","756eda23-1f35-5cde-d354-ecb6f9929139"]},"value":1,"unit":""}},{"id":"a-58-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":true,"id":"b9121ed1-beeb-6c7a-90d1-55885df7ceae"},"globalSwatchId":"","rValue":247,"bValue":251,"gValue":249,"aValue":1}},{"id":"a-58-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.text-underline.text-blue-500.view-req","selectorGuids":["8dc9ea7b-682a-9ca2-5212-49b405bc4978","3ee0110b-cb1a-ae21-d0cd-e1755ffe60cb","8f018daf-ab50-e59f-ddde-28a63babe37d","756eda23-1f35-5cde-d354-ecb6f9929139"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716979214379}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function WidgetJobCard({
  as: _Component = _Builtin.Block,
  textJob = "Jobname",
  textSecondary = "something like something",
  onClickJob = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "usercard")}
      tag="div"
      {...onClickJob}
    >
      <_Builtin.Block className={_utils.cx(_styles, "slot_jobavatr")} tag="div">
        <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewbox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2240%22%20height%3D%2240%22%20rx%3D%228%22%20fill%3D%22%23E9EBED%22%20fill-opacity%3D%220.5%22%2F%3E%0A%3Cpath%20d%3D%22M16.3999%2012.5V14.3H23.5999V12.5C23.5749%2012.125%2023.3749%2011.925%2022.9999%2011.9H16.9999C16.6249%2011.925%2016.4249%2012.125%2016.3999%2012.5ZM15.1999%2014.3V12.5C15.2249%2012%2015.3999%2011.575%2015.7249%2011.225C16.0749%2010.9%2016.4999%2010.725%2016.9999%2010.7H22.9999C23.4999%2010.725%2023.9249%2010.9%2024.2749%2011.225C24.5999%2011.575%2024.7749%2012%2024.7999%2012.5V14.3H27.1999C27.8749%2014.325%2028.4374%2014.5625%2028.8874%2015.0125C29.3374%2015.4625%2029.5749%2016.025%2029.5999%2016.7V26.3C29.5749%2026.975%2029.3374%2027.5375%2028.8874%2027.9875C28.4374%2028.4375%2027.8749%2028.675%2027.1999%2028.7H12.7999C12.1249%2028.675%2011.5624%2028.4375%2011.1124%2027.9875C10.6624%2027.5375%2010.4249%2026.975%2010.3999%2026.3V16.7C10.4249%2016.025%2010.6624%2015.4625%2011.1124%2015.0125C11.5624%2014.5625%2012.1249%2014.325%2012.7999%2014.3H15.1999ZM24.1999%2015.5H15.7999H12.7999C12.4499%2015.5%2012.1624%2015.6125%2011.9374%2015.8375C11.7124%2016.0625%2011.5999%2016.35%2011.5999%2016.7V20.3H16.9999H18.1999H21.7999H22.9999H28.3999V16.7C28.3999%2016.35%2028.2874%2016.0625%2028.0624%2015.8375C27.8374%2015.6125%2027.5499%2015.5%2027.1999%2015.5H24.1999ZM28.3999%2021.5H22.9999V23.3C22.9999%2023.65%2022.8874%2023.9375%2022.6624%2024.1625C22.4374%2024.3875%2022.1499%2024.5%2021.7999%2024.5H18.1999C17.8499%2024.5%2017.5624%2024.3875%2017.3374%2024.1625C17.1124%2023.9375%2016.9999%2023.65%2016.9999%2023.3V21.5H11.5999V26.3C11.5999%2026.65%2011.7124%2026.9375%2011.9374%2027.1625C12.1624%2027.3875%2012.4499%2027.5%2012.7999%2027.5H27.1999C27.5499%2027.5%2027.8374%2027.3875%2028.0624%2027.1625C28.2874%2026.9375%2028.3999%2026.65%2028.3999%2026.3V21.5ZM18.1999%2021.5V23.3H21.7999V21.5H18.1999Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E" />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "panel_card_text")}
        tag="div"
      >
        <_Builtin.Block tag="div">{textJob}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-sm", "color-grey-600")}
          tag="div"
        >
          {textSecondary}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
