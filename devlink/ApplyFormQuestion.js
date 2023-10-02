import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ApplyFormQuestion.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1314":{"id":"e-1314","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-447","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1315"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"79fd7ea0-583f-573a-cd6d-b0153f200fca"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696244522243},"e-1315":{"id":"e-1315","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-448","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1314"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"79fd7ea0-583f-573a-cd6d-b0153f200fca"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696244522247}},"actionLists":{"a-447":{"id":"a-447","title":"Questions Hover In","actionItemGroups":[{"actionItems":[{"id":"a-447-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".div-block-418","selectorGuids":["ecc20141-57d6-a009-de26-3da6770cfdaf"]},"value":0,"unit":""}},{"id":"a-447-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"useEventTarget":"CHILDREN","selector":".div-block-418","selectorGuids":["ecc20141-57d6-a009-de26-3da6770cfdaf"]}}}]},{"actionItems":[{"id":"a-447-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".div-block-418","selectorGuids":["ecc20141-57d6-a009-de26-3da6770cfdaf"]},"value":1,"unit":""}},{"id":"a-447-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"flex","target":{"useEventTarget":"CHILDREN","selector":".div-block-418","selectorGuids":["ecc20141-57d6-a009-de26-3da6770cfdaf"]}}}]}],"createdOn":1696244536800,"useFirstGroupAsInitialState":true},"a-448":{"id":"a-448","title":"Questions Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-448-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".div-block-418","selectorGuids":["ecc20141-57d6-a009-de26-3da6770cfdaf"]},"value":0,"unit":""}},{"id":"a-448-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"value":"none","target":{"useEventTarget":"CHILDREN","selector":".div-block-418","selectorGuids":["ecc20141-57d6-a009-de26-3da6770cfdaf"]}}}]}],"createdOn":1696244536800,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ApplyFormQuestion({
  as: _Component = _Builtin.Block,
  textQuestion = "Can you describe your ideal work environment? ",
  onClickEditQuestions = {},
  onClickRemove = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "div-block-417")}
      data-w-id="79fd7ea0-583f-573a-cd6d-b0153f200fca"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "questions-wrappers")}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icons")}
          value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.5%202C1.22386%202%201%201.77614%201%201.5C1%201.22386%201.22386%201%201.5%201H14.5C14.7761%201%2015%201.22386%2015%201.5C15%201.77614%2014.7761%202%2014.5%202H1.5ZM1.5%206C1.22386%206%201%205.77614%201%205.5C1%205.22386%201.22386%205%201.5%205H10.5C10.7761%205%2011%205.22386%2011%205.5C11%205.77614%2010.7761%206%2010.5%206H1.5ZM1.5%2010C1.22386%2010%201%209.77614%201%209.5C1%209.22386%201.22386%209%201.5%209H14.5C14.7761%209%2015%209.22386%2015%209.5C15%209.77614%2014.7761%2010%2014.5%2010H1.5ZM1.5%2014C1.22386%2014%201%2013.7761%201%2013.5C1%2013.2239%201.22386%2013%201.5%2013H10.5C10.7761%2013%2011%2013.2239%2011%2013.5C11%2013.7761%2010.7761%2014%2010.5%2014H1.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{textQuestion}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-419")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-418")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "edit-icons-inbox")}
            tag="div"
            {...onClickEditQuestions}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2213%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.81796%202.42438L0.152676%209.09984C0.0538277%209.19171%20-0.0016094%209.32106%203.55954e-05%209.456V11.4912C3.55954e-05%2011.7761%200.223908%2012%200.508836%2012H2.54404C2.67633%2012%202.80861%2011.9491%202.9002%2011.8474L9.57566%205.18208L6.81796%202.42438ZM11.7024%201.6103L10.3897%200.297591C10.1996%200.107068%209.9415%200%209.67233%200C9.40317%200%209.14506%200.107068%208.95492%200.297591L7.7338%201.51871L10.4915%204.27641L11.7126%203.05529C12.0993%202.65842%2012.0993%202.00716%2011.7024%201.6103Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "edit-icons-inbox")}
            tag="div"
            {...onClickRemove}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.79289%209.20711C3.18342%209.59763%203.81658%209.59763%204.20711%209.20711L6%207.41421L7.79289%209.20711C8.18342%209.59763%208.81658%209.59763%209.20711%209.20711C9.59763%208.81658%209.59763%208.18342%209.20711%207.79289L7.41421%206L9.20711%204.20711C9.59763%203.81658%209.59763%203.18342%209.20711%202.79289C8.81658%202.40237%208.18342%202.40237%207.79289%202.79289L6%204.58579L4.20711%202.79289C3.81658%202.40237%203.18342%202.40237%202.79289%202.79289C2.40237%203.18342%202.40237%203.81658%202.79289%204.20711L4.58579%206L2.79289%207.79289C2.40237%208.18342%202.40237%208.81658%202.79289%209.20711Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
