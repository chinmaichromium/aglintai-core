"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Text } from "./Text";
import * as _utils from "./utils";
import _styles from "./ScorePillNice.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1576":{"id":"e-1576","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1577"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972142},"e-1577":{"id":"e-1577","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1576"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972144},"e-1578":{"id":"e-1578","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1579"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624481},"e-1579":{"id":"e-1579","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1578"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624482}},"actionLists":{"a-613":{"id":"a-613","title":"score pill hover in","actionItemGroups":[{"actionItems":[{"id":"a-613-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-613-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":1,"unit":""}}]}],"createdOn":1718275975402,"useFirstGroupAsInitialState":true},"a-614":{"id":"a-614","title":"score pill hover out","actionItemGroups":[{"actionItems":[{"id":"a-614-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]}],"createdOn":1718275975402,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ScorePillNice({
  as: _Component = _Builtin.Block,
  textDetails = "React js",
  onClickEditText = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "skills-wrapps")}
      data-w-id="5bae7064-a4ab-5c07-f32d-92c0deb12e6f"
      tag="div"
      {...onClickEditText}
    >
      <Text content={textDetails} />
      <_Builtin.Block tag="div" {...onClickEditText}>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icons")}
          value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.7545%203.18437C12.6087%203.05312%2012.441%202.9875%2012.2514%202.9875C12.0618%202.9875%2011.8941%203.05312%2011.7482%203.18437L11.1795%203.775L12.4264%205.02187L13.017%204.45312C13.1482%204.30729%2013.2139%204.13958%2013.2139%203.95C13.2139%203.76042%2013.1482%203.59271%2013.017%203.44687L12.7545%203.18437ZM6.93574%208.01875C6.84824%208.10625%206.78991%208.21562%206.76074%208.34687L6.41074%209.79062L7.85449%209.4625C7.98574%209.41875%208.09512%209.35312%208.18262%209.26562L11.9232%205.525L10.6764%204.27812L6.93574%208.01875ZM11.267%202.70312C11.5587%202.42604%2011.8868%202.2875%2012.2514%202.2875C12.6305%202.2875%2012.9587%202.42604%2013.2357%202.70312L13.4982%202.96562C13.7753%203.25729%2013.9139%203.58542%2013.9139%203.95C13.9139%204.32917%2013.7753%204.65729%2013.4982%204.93437L8.68574%209.76875C8.49616%209.95833%208.27012%2010.0823%208.00762%2010.1406L6.03887%2010.6C5.90762%2010.6146%205.79824%2010.5781%205.71074%2010.4906C5.62324%2010.4031%205.58678%2010.301%205.60137%2010.1844L6.06074%208.19375C6.11908%207.93125%206.24303%207.70521%206.43262%207.51562L11.267%202.70312ZM4.55137%203.6H7.35137C7.57012%203.61458%207.68678%203.73125%207.70137%203.95C7.68678%204.16875%207.57012%204.28542%207.35137%204.3H4.55137C4.2597%204.31458%204.01178%204.41667%203.80762%204.60625C3.61803%204.81042%203.51595%205.05833%203.50137%205.35V11.65C3.51595%2011.9417%203.61803%2012.1896%203.80762%2012.3938C4.01178%2012.5833%204.2597%2012.6854%204.55137%2012.7H10.8514C11.143%2012.6854%2011.391%2012.5833%2011.5951%2012.3938C11.7847%2012.1896%2011.8868%2011.9417%2011.9014%2011.65V8.85C11.916%208.63125%2012.0326%208.51458%2012.2514%208.5C12.4701%208.51458%2012.5868%208.63125%2012.6014%208.85V11.65C12.5868%2012.1458%2012.4191%2012.5615%2012.0982%2012.8969C11.7628%2013.2177%2011.3472%2013.3854%2010.8514%2013.4H4.55137C4.05553%2013.3854%203.63991%2013.2177%203.30449%2012.8969C2.98366%2012.5615%202.81595%2012.1458%202.80137%2011.65V5.35C2.81595%204.85417%202.98366%204.43854%203.30449%204.10312C3.63991%203.78229%204.05553%203.61458%204.55137%203.6Z%22%20fill%3D%22%2368737D%22%20style%3D%22fill%3A%2368737D%3Bfill%3Acolor(display-p3%200.4078%200.4510%200.4902)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
