"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Text } from "./Text";
import * as _utils from "./utils";
import _styles from "./CreateJob.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1576":{"id":"e-1576","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1577"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972142},"e-1577":{"id":"e-1577","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1576"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972144},"e-1578":{"id":"e-1578","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1579"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624481},"e-1579":{"id":"e-1579","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1578"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624482}},"actionLists":{"a-613":{"id":"a-613","title":"score pill hover in","actionItemGroups":[{"actionItems":[{"id":"a-613-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-613-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":1,"unit":""}}]}],"createdOn":1718275975402,"useFirstGroupAsInitialState":true},"a-614":{"id":"a-614","title":"score pill hover out","actionItemGroups":[{"actionItems":[{"id":"a-614-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]}],"createdOn":1718275975402,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
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
  onClickLinktoIntegration = {},
  isEmpty = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "create-job-wrap-onclick")}
      tag="div"
      box-shadow="6"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "add-job-wrappers")}
        tag="div"
        {...onClickCreateNewJob}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "create-icon-wrap")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.7188%206.125C11.7188%205.89715%2011.6455%205.70995%2011.499%205.5635C11.3525%205.417%2011.1654%205.34375%2010.9375%205.34375H1.5625C1.33464%205.34375%201.14746%205.417%201.00098%205.5635C0.85449%205.70995%200.78125%205.89715%200.78125%206.125V12.375C0.78125%2012.6029%200.85449%2012.79%201.00098%2012.9365C1.14746%2013.083%201.33464%2013.1562%201.5625%2013.1562H8.78905C9.0332%2013.4492%209.31805%2013.7096%209.64355%2013.9375H1.5625C1.12304%2013.9212%200.756835%2013.7666%200.463867%2013.4736C0.170898%2013.1806%200.0162761%2012.8144%200%2012.375V6.125C0.0162761%205.68555%200.170898%205.31935%200.463867%205.02635C0.756835%204.7334%201.12304%204.57877%201.5625%204.5625H10.9375C11.3769%204.57877%2011.7431%204.7334%2012.0361%205.02635C12.3291%205.31935%2012.4837%205.68555%2012.5%206.125V6.1494C12.3698%206.13315%2012.2396%206.125%2012.1094%206.125C11.9791%206.125%2011.8489%206.13315%2011.7188%206.1494V6.125ZM10.9375%203C11.1816%203.01627%2011.3119%203.14649%2011.3281%203.39062C11.3119%203.63476%2011.1816%203.76498%2010.9375%203.78125H1.5625C1.31836%203.76498%201.18815%203.63476%201.17188%203.39062C1.18815%203.14649%201.31836%203.01627%201.5625%203H10.9375ZM9.7656%201.4375C10.0098%201.45377%2010.1399%201.58399%2010.1562%201.82812C10.1399%202.07226%2010.0098%202.20248%209.7656%202.21875H2.73438C2.49024%202.20248%202.36002%202.07226%202.34375%201.82812C2.36002%201.58399%202.49024%201.45377%202.73438%201.4375H9.7656ZM9.375%2010.4219C9.375%2010.9101%209.49705%2011.3659%209.7412%2011.7891C9.98535%2012.2123%2010.319%2012.5459%2010.7422%2012.79C11.1653%2013.0342%2011.6211%2013.1562%2012.1094%2013.1562C12.5976%2013.1562%2013.0534%2013.0342%2013.4766%2012.79C13.8998%2012.5459%2014.2334%2012.2123%2014.4775%2011.7891C14.7217%2011.3659%2014.8438%2010.9101%2014.8438%2010.4219C14.8438%209.9336%2014.7217%209.47785%2014.4775%209.0547C14.2334%208.6315%2013.8998%208.29785%2013.4766%208.0537C13.0534%207.80955%2012.5976%207.6875%2012.1094%207.6875C11.6211%207.6875%2011.1653%207.80955%2010.7422%208.0537C10.319%208.29785%209.98535%208.6315%209.7412%209.0547C9.49705%209.47785%209.375%209.9336%209.375%2010.4219ZM15.625%2010.4219C15.625%2011.0566%2015.4704%2011.6426%2015.1611%2012.1797C14.8519%2012.7168%2014.4205%2013.1481%2013.8672%2013.4736C13.3138%2013.7829%2012.7278%2013.9375%2012.1094%2013.9375C11.4909%2013.9375%2010.905%2013.7829%2010.3516%2013.4736C9.7982%2013.1481%209.36685%2012.7168%209.0576%2012.1797C8.74835%2011.6426%208.59375%2011.0566%208.59375%2010.4219C8.59375%209.7871%208.74835%209.20115%209.0576%208.66405C9.36685%208.12695%209.7982%207.69565%2010.3516%207.3701C10.905%207.06085%2011.4909%206.90625%2012.1094%206.90625C12.7278%206.90625%2013.3138%207.06085%2013.8672%207.3701C14.4205%207.69565%2014.8519%208.12695%2015.1611%208.66405C15.4704%209.20115%2015.625%209.7871%2015.625%2010.4219ZM12.5%208.8594V10.0312H13.6719C13.916%2010.0476%2014.0462%2010.1777%2014.0625%2010.4219C14.0462%2010.666%2013.916%2010.7962%2013.6719%2010.8125H12.5V11.9844C12.4837%2012.2285%2012.3535%2012.3587%2012.1094%2012.375C11.8652%2012.3587%2011.7351%2012.2285%2011.7188%2011.9844V10.8125H10.5469C10.3027%2010.7962%2010.1726%2010.666%2010.1562%2010.4219C10.1726%2010.1777%2010.3027%2010.0476%2010.5469%2010.0312H11.7188V8.8594C11.7351%208.61525%2011.8652%208.48505%2012.1094%208.46875C12.3535%208.48505%2012.4837%208.61525%2012.5%208.8594Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <Text content="Add Job" weight="medium" />
      </_Builtin.Block>
      {isLeverVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "add-job-wrappers")}
          tag="div"
          {...onClickLeverImport}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "create-icon-wrap")}
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
          <_Builtin.Block tag="div">
            <Text content="Import jobs from Lever" weight="medium" />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isGreenhouseVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "add-job-wrappers")}
          tag="div"
          {...onClickGreenhouse}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "create-icon-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2217%22%20height%3D%2216%22%20viewBox%3D%220%200%2017%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.13278%2015.7284C7.07592%2015.7585%205.39878%2013.9943%205.43736%2011.9558C5.45366%2010.9752%205.85643%2010.0408%206.55808%209.3557C7.25973%208.6706%208.20349%208.29025%209.1841%208.2974C11.1433%208.3027%2012.7836%209.98415%2012.819%2011.9451C12.8565%2014.0226%2011.144%2015.7603%209.13278%2015.7284ZM12.1569%2012.0364C12.1693%2010.3525%2010.823%208.97795%209.14871%208.96525C7.47441%208.9525%206.10977%2010.3065%206.09562%2011.9901C6.08693%2012.7992%206.3999%2013.5787%206.96571%2014.1571C7.53152%2014.7355%208.30387%2015.0656%209.11297%2015.0748C10.7689%2015.0956%2012.1445%2013.7225%2012.1569%2012.0364ZM5.44479%204.47516C5.44152%204.07316%205.5178%203.67449%205.66923%203.3021C5.82066%202.92971%206.04426%202.59095%206.32715%202.30533C6.61003%202.0197%206.94661%201.79286%207.31752%201.63785C7.68843%201.48285%208.08634%201.40274%208.48833%201.40215C10.1588%201.39896%2011.5347%202.77851%2011.5372%204.45852C11.54%206.1626%2010.1857%207.54215%208.50532%207.5471C6.80023%207.5517%205.44975%206.1955%205.44479%204.47516ZM6.11402%204.45605C6.11097%204.76764%206.16933%205.0768%206.28576%205.36585C6.40219%205.6549%206.57441%205.91815%206.79258%206.14065C7.01076%206.36315%207.27062%206.5405%207.55732%206.66255C7.84403%206.7846%208.15197%206.849%208.46356%206.852C8.77515%206.85505%209.08429%206.7967%209.37332%206.6803C9.66236%206.56385%209.92564%206.3916%2010.1481%206.17345C10.3706%205.95525%2010.5479%205.6954%2010.67%205.40865C10.7921%205.12195%2010.8564%204.81401%2010.8595%204.50241C10.868%203.17418%209.81687%202.09121%208.50957%202.08059C7.19554%202.07139%206.12428%203.13313%206.11402%204.45605ZM10.289%200.620715C10.2901%200.455421%2010.3569%200.297345%2010.4745%200.181262C10.5328%200.123784%2010.6018%200.0783445%2010.6776%200.0475393C10.7535%200.016734%2010.8346%200.00116574%2010.9165%200.00172346C10.9983%200.00228117%2011.0792%200.0189539%2011.1546%200.05079C11.23%200.0826255%2011.2984%200.129001%2011.3559%200.187268C11.4134%200.245535%2011.4588%200.314554%2011.4896%200.390382C11.5204%200.46621%2011.536%200.547365%2011.5354%200.62921C11.5363%200.711875%2011.5207%200.793885%2011.4895%200.870425C11.4582%200.94697%2011.412%201.01649%2011.3535%201.07492C11.295%201.13334%2011.2255%201.17948%2011.1489%201.21064C11.0723%201.24179%2010.9903%201.25733%2010.9076%201.25634C10.5573%201.25386%2010.289%200.97781%2010.289%200.620715Z%22%20fill%3D%22%2338B2A7%22%2F%3E%0A%3C%2Fsvg%3E" />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <Text content="Import from Greenhouse" weight="medium" />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isAshbyVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "add-job-wrappers")}
          tag="div"
          {...onClickAshby}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "create-icon-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2238%22%20height%3D%2214%22%20viewbox%3D%220%200%2038%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_3097_39476)%22%3E%0A%3Cpath%20d%3D%22M8.66614%209.63132C8.77674%209.90237%208.89541%2010.106%209.0231%2010.2418C9.15886%2010.369%209.29035%2010.4364%209.41756%2010.4454V10.6998C8.64543%2010.6716%207.8728%2010.659%207.10016%2010.6619C6.13275%2010.6619%205.41978%2010.6742%204.96123%2010.6998V10.4454C5.28402%2010.4283%205.51282%2010.3903%205.64858%2010.3305C5.78434%2010.2631%205.85269%2010.1483%205.85269%209.98734C5.85269%209.83449%205.80142%209.63132%205.69937%209.37642L4.94842%207.28971H2.37658L2.16013%207.86265C1.88006%208.58322%201.73956%209.1348%201.73956%209.51645C1.73956%209.86439%201.83734%2010.1017%202.03244%2010.2289C2.22801%2010.3562%202.51661%2010.4283%202.89826%2010.4454V10.6998C2.34255%2010.6762%201.78643%2010.6636%201.23022%2010.6619C0.831487%2010.6619%200.50443%2010.6742%200.25%2010.6998V10.4454C0.462184%2010.4112%200.661551%2010.2797%200.848101%2010.0509C1.03513%209.82167%201.22595%209.45712%201.42152%208.9568L4.24826%201.69177C4.47281%201.70678%204.69774%201.71517%204.92278%201.71693C5.09272%201.71693%205.31345%201.70839%205.58497%201.69177L8.66614%209.63132ZM4.85918%207.03481L3.70095%203.85443L2.47816%207.03481H4.85918ZM12.2747%203.91804C12.6055%203.91804%2012.9155%203.95601%2013.2041%204.03243C13.5013%204.10031%2013.7263%204.17674%2013.8791%204.26171C13.9722%204.3125%2014.0486%204.33766%2014.1084%204.33766C14.2864%204.33766%2014.3927%204.20237%2014.4264%203.93085H14.6813C14.6472%204.37231%2014.6301%205.13512%2014.6301%206.2212H14.3756C14.3078%205.66107%2014.1464%205.19066%2013.8915%204.80902C13.6456%204.41883%2013.2848%204.22373%2012.8092%204.22373C12.597%204.22373%2012.419%204.28734%2012.2747%204.41455C12.1304%204.54177%2012.0582%204.7155%2012.0582%204.93623C12.0582%205.21629%2012.1517%205.46598%2012.3383%205.68671C12.5248%205.89889%2012.8177%206.16139%2013.2165%206.47563C13.234%206.48417%2013.357%206.58148%2013.5862%206.76803C14.0614%207.15822%2014.4093%207.50617%2014.6305%207.81139C14.8508%208.10854%2014.9614%208.47737%2014.9614%208.91835C14.963%209.28656%2014.8419%209.64482%2014.6172%209.93655C14.3884%2010.2332%2014.0742%2010.4663%2013.675%2010.6362C13.2848%2010.7976%2012.8562%2010.8783%2012.3891%2010.8783C11.8546%2010.8783%2011.4174%2010.772%2011.0775%2010.5598C10.9626%2010.4968%2010.8437%2010.4415%2010.7215%2010.3941C10.6319%2010.3609%2010.5371%2010.3437%2010.4415%2010.3433C10.2801%2010.3433%2010.1614%2010.4919%2010.0845%2010.7886H9.83006C9.86376%2010.3054%209.88085%209.45712%209.88085%208.2443H10.1358C10.2117%208.93971%2010.3987%209.49936%2010.6959%209.92373C10.993%2010.3476%2011.3661%2010.5598%2011.8161%2010.5598C12.0283%2010.5598%2012.2025%2010.5005%2012.3383%2010.3818C12.4826%2010.2631%2012.5547%2010.0889%2012.5547%209.85965C12.5547%209.6223%2012.504%209.4106%2012.4019%209.22357C12.3107%209.04003%2012.1903%208.87251%2012.0454%208.72753C11.9097%208.57468%2011.6847%208.3587%2011.3704%208.07863C11.0916%207.82324%2010.82%207.56017%2010.5559%207.28971C10.3644%207.08825%2010.2015%206.86145%2010.0717%206.61566C9.94281%206.34557%209.87753%206.04955%209.88085%205.75031C9.88085%205.38576%209.99098%205.06345%2010.2117%204.78338C10.4324%204.50332%2010.7253%204.29114%2011.0903%204.14731C11.4658%203.99248%2011.8685%203.91452%2012.2747%203.91804ZM18.5733%204.87262C18.9554%204.23655%2019.6299%203.91851%2020.5978%203.91851C21.2766%203.91851%2021.756%204.08797%2022.0365%204.4269C22.1638%204.57974%2022.2573%204.78766%2022.3166%205.05063C22.3759%205.30506%2022.4059%205.64398%2022.4059%206.06835V9.51645C22.4059%209.86439%2022.4566%2010.106%2022.5587%2010.2418C22.6688%2010.369%2022.8559%2010.4326%2023.1188%2010.4326V10.6998C22.2022%2010.6657%2021.6079%2010.649%2021.3364%2010.649C21.0478%2010.649%2020.4449%2010.6657%2019.5278%2010.6998V10.4326C19.7491%2010.4326%2019.9019%2010.369%2019.9864%2010.2418C20.0718%2010.106%2020.1141%209.86439%2020.1141%209.51645V5.38148C20.1141%205.10997%2020.0628%204.9106%2019.9612%204.78338C19.8677%204.64762%2019.7106%204.57974%2019.4899%204.57974C19.244%204.57974%2019.0275%204.66898%2018.8405%204.84699C18.6625%205.01645%2018.5733%205.23291%2018.5733%205.49588V9.51645C18.5733%209.86439%2018.616%2010.106%2018.7005%2010.2418C18.7854%2010.369%2018.9378%2010.4326%2019.159%2010.4326V10.6998C18.3103%2010.6657%2017.7497%2010.649%2017.4786%2010.649C17.1896%2010.649%2016.553%2010.6657%2015.5685%2010.6998V10.4326C15.8315%2010.4326%2016.0138%2010.369%2016.1158%2010.2418C16.2264%2010.106%2016.2815%209.86439%2016.2815%209.51645V2.27658C16.2815%201.88639%2016.2259%201.60253%2016.1158%201.42452C16.0138%201.24604%2015.831%201.15728%2015.5685%201.15728V0.890032C15.8315%200.91519%2016.0945%200.928006%2016.3579%200.928006C17.2408%200.928006%2017.979%200.868671%2018.5728%200.75V4.87262H18.5733ZM28.2896%203.91804C28.9513%203.91804%2029.4858%204.18955%2029.894%204.73259C30.3008%205.27516%2030.5049%206.06835%2030.5049%207.11171C30.5049%208.46028%2030.2329%209.42721%2029.6899%2010.0125C29.1464%2010.5892%2028.4291%2010.8778%2027.5381%2010.8778C27.2661%2010.8778%2027.0373%2010.8693%2026.8503%2010.8527C26.679%2010.8373%2026.5113%2010.7942%2026.3538%2010.725C26.0426%2010.5983%2025.7096%2010.5335%2025.3736%2010.5342C25.1187%2010.5342%2024.8809%2010.5683%2024.6606%2010.6362C24.4399%2010.7041%2024.2699%2010.7929%2024.1513%2010.9035L23.9728%2010.7763C24.0321%2010.5978%2024.062%2010.3647%2024.062%2010.0761V2.27706C24.062%201.88639%2024.007%201.60253%2023.8964%201.42452C23.7948%201.24604%2023.612%201.15728%2023.349%201.15728V0.890032C23.612%200.91519%2023.875%200.928006%2024.1384%200.928006C25.0214%200.928006%2025.7595%200.868671%2026.3538%200.75V4.87262C26.7445%204.23655%2027.3896%203.91851%2028.2891%203.91851L28.2896%203.91804ZM26.9519%2010.6234C27.7328%2010.6234%2028.1234%209.55063%2028.1234%207.40458C28.1234%206.36123%2028.047%205.63164%2027.8941%205.21629C27.7413%204.79193%2027.5334%204.57974%2027.2699%204.57974C27.024%204.57974%2026.8076%204.66898%2026.6206%204.84699C26.4426%205.01645%2026.3533%205.23291%2026.3533%205.49588V10.4706C26.5484%2010.5726%2026.7487%2010.6234%2026.9519%2010.6234ZM36.4123%204.14731C36.8965%204.14731%2037.2231%204.13022%2037.3926%204.09604V4.36329C37.2146%204.42262%2037.0489%204.54604%2036.896%204.73259C36.7517%204.91914%2036.616%205.20728%2036.4888%205.59747L34.8971%2010.3305L34.3622%2011.8704C34.2093%2012.3114%2034.0228%2012.6166%2033.8021%2012.7865C33.5391%2012.9902%2033.1441%2013.0918%2032.6177%2013.0918C32.2033%2013.0943%2031.7954%2012.9891%2031.4339%2012.7865C31.0684%2012.5914%2030.8861%2012.2943%2030.8861%2011.8956C30.8861%2011.5989%2031.0009%2011.3615%2031.2302%2011.1835C31.459%2011.0051%2031.7604%2010.9158%2032.134%2010.9158C32.4905%2010.9158%2032.7706%2010.9965%2032.9742%2011.1579C33.1783%2011.3193%2033.2799%2011.5519%2033.2799%2011.8576C33.2799%2012.0612%2033.2078%2012.2516%2033.0634%2012.4301C32.9277%2012.6166%2032.724%2012.7528%2032.4525%2012.8373C32.537%2012.8544%2032.6818%2012.8625%2032.8854%2012.8625C33.4712%2012.8625%2033.8742%2012.5236%2034.0949%2011.8448L34.1585%2011.6283L31.1918%205.07579C31.0646%204.78766%2030.9373%204.59636%2030.8097%204.50332C30.691%204.41028%2030.5723%204.36329%2030.4536%204.36329V4.09652C31.1324%204.14778%2031.824%204.17294%2032.529%204.17294C33.0805%204.17294%2033.6957%204.14778%2034.375%204.09699V4.36376C34.1286%204.36376%2033.9383%204.38085%2033.8021%204.41503C33.6748%204.44873%2033.6112%204.52516%2033.6112%204.64383C33.6112%204.71171%2033.6278%204.77959%2033.662%204.84747L35.2285%208.57563L35.763%206.94699C35.9244%206.45474%2036.0051%206.02231%2036.0051%205.64921C36.0051%205.25047%2035.9196%204.9405%2035.7502%204.72025C35.6715%204.61415%2035.57%204.52708%2035.4532%204.46546C35.3363%204.40384%2035.2071%204.36925%2035.0752%204.36424V4.09652C35.3894%204.13069%2035.8346%204.14731%2036.4123%204.14731Z%22%20fill%3D%22%23483ACE%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cclippath%20id%3D%22clip0_3097_39476%22%3E%0A%3Crect%20width%3D%2237.5%22%20height%3D%2212.3418%22%20fill%3D%22white%22%20transform%3D%22translate(0.25%200.75)%22%2F%3E%0A%3C%2Fclippath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <Text content="Import jobs from Ashby" weight="bold" />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isEmpty ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "create-job-empty")}
          tag="div"
        >
          <Text content="To connect with your ATS, go to " />
          <_Builtin.Block
            className={_utils.cx(_styles, "integration-wrap")}
            tag="div"
          >
            <_Builtin.Block tag="div" {...onClickLinktoIntegration}>
              <Text content="Integration" color="accent" />
            </_Builtin.Block>
            <Text content="app." />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
