"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AssistantLogo.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-157":{"id":"e-157","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282313},"e-158":{"id":"e-158","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282314}},"actionLists":{"a-102":{"id":"a-102","title":"DayoffList Hover in","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-102-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]},{"actionItems":[{"id":"a-102-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":1,"unit":""}},{"id":"a-102-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715600286589},"a-103":{"id":"a-103","title":"DayoffList Hover out","actionItemGroups":[{"actionItems":[{"id":"a-103-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-103-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715600286589}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AssistantLogo({
  as: _Component = _Builtin.Block,
  onClickAssistant = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "asstant-logo-wrap")}
      tag="div"
      {...onClickAssistant}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons")}
        value="%3Csvg%20width%3D%2230%22%20height%3D%2231%22%20viewbox%3D%220%200%2030%2031%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.9062%2015.0063C20.2125%2014.3313%2018.8625%2014%2017.9313%2013.0687C17%2012.1312%2016.6687%2010.7875%2015.9937%208.09375L15%204.125L14.0063%208.09375C13.3313%2010.7875%2013%2012.1375%2012.0687%2013.0687C11.1312%2014%209.7875%2014.3313%207.09375%2015.0063L3.125%2016L7.09375%2016.9937C9.7875%2017.6687%2011.1375%2018%2012.0687%2018.9313C13%2019.8688%2013.3313%2021.2125%2014.0063%2023.9062L15%2027.875L15.9937%2023.9062C16.6687%2021.2125%2017%2019.8625%2017.9313%2018.9313C18.8688%2018%2020.2125%2017.6687%2022.9062%2016.9937L26.875%2016L22.9062%2015.0063Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M22.9062%2015.0063C20.2125%2014.3313%2018.8625%2014%2017.9313%2013.0687C17%2012.1312%2016.6687%2010.7875%2015.9937%208.09375L15%204.125L14.0063%208.09375C13.3313%2010.7875%2013%2012.1375%2012.0687%2013.0687C11.1312%2014%209.7875%2014.3313%207.09375%2015.0063L3.125%2016L7.09375%2016.9937C9.7875%2017.6687%2011.1375%2018%2012.0687%2018.9313C13%2019.8688%2013.3313%2021.2125%2014.0063%2023.9062L15%2027.875L15.9937%2023.9062C16.6687%2021.2125%2017%2019.8625%2017.9313%2018.9313C18.8688%2018%2020.2125%2017.6687%2022.9062%2016.9937L26.875%2016L22.9062%2015.0063Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M24.6353%204.66908C23.7373%204.44408%2023.2873%204.33366%2022.9769%204.02324C22.6665%203.71074%2022.5561%203.26283%2022.3311%202.36491L21.9998%201.04199L21.6686%202.36491C21.4436%203.26283%2021.3332%203.71283%2021.0228%204.02324C20.7103%204.33366%2020.2623%204.44408%2019.3644%204.66908L18.0415%205.00033L19.3644%205.33158C20.2623%205.55658%2020.7123%205.66699%2021.0228%205.97741C21.3332%206.28991%2021.4436%206.73783%2021.6686%207.63574L21.9998%208.95866L22.3311%207.63574C22.5561%206.73783%2022.6665%206.28783%2022.9769%205.97741C23.2894%205.66699%2023.7373%205.55658%2024.6353%205.33158L25.9582%205.00033L24.6353%204.66908Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M24.6353%204.66908C23.7373%204.44408%2023.2873%204.33366%2022.9769%204.02324C22.6665%203.71074%2022.5561%203.26283%2022.3311%202.36491L21.9998%201.04199L21.6686%202.36491C21.4436%203.26283%2021.3332%203.71283%2021.0228%204.02324C20.7103%204.33366%2020.2623%204.44408%2019.3644%204.66908L18.0415%205.00033L19.3644%205.33158C20.2623%205.55658%2020.7123%205.66699%2021.0228%205.97741C21.3332%206.28991%2021.4436%206.73783%2021.6686%207.63574L21.9998%208.95866L22.3311%207.63574C22.5561%206.73783%2022.6665%206.28783%2022.9769%205.97741C23.2894%205.66699%2023.7373%205.55658%2024.6353%205.33158L25.9582%205.00033L24.6353%204.66908Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
