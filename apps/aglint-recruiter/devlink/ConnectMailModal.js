"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ConnectMailModal.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1576":{"id":"e-1576","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1577"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972142},"e-1577":{"id":"e-1577","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1576"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972144},"e-1578":{"id":"e-1578","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1579"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624481},"e-1579":{"id":"e-1579","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1578"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624482}},"actionLists":{"a-613":{"id":"a-613","title":"score pill hover in","actionItemGroups":[{"actionItems":[{"id":"a-613-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-613-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718275975402},"a-614":{"id":"a-614","title":"score pill hover out","actionItemGroups":[{"actionItems":[{"id":"a-614-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718275975402}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ConnectMailModal({
  as: _Component = _Builtin.Block,
  onClickGmail = {},
  onClickOutlook = {},
  onClickClose = {},
  isSoonVisible = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "connect-mail-modal")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-638")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"Connect your email"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-639")}
          tag="div"
          {...onClickClose}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22%2368737D%22%20style%3D%22fill%3A%2368737D%3Bfill%3Acolor(display-p3%200.4078%200.4510%200.4902)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cmask%20id%3D%22mask0_6373_16052%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%222%22%20y%3D%222%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_6373_16052)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "text-grey-600")} tag="div">
        {
          "Link your email to send messages directly to candidates from your inbox."
        }
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "continuw-gmail-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "gmail-wrappers")}
          tag="div"
          {...onClickGmail}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2220%22%20height%3D%2216%22%20viewbox%3D%220%200%2020%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_6362_100585)%22%3E%0A%3Cpath%20d%3D%22M4.54545%2015.5014V7.77427L2.14896%205.58185L0%204.36523V14.1378C0%2014.8923%200.611364%2015.5014%201.36364%2015.5014H4.54545Z%22%20fill%3D%22%234285F4%22%20style%3D%22fill%3A%234285F4%3Bfill%3Acolor(display-p3%200.2588%200.5216%200.9569)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M15.4531%2015.5014H18.6349C19.3895%2015.5014%2019.9986%2014.8901%2019.9986%2014.1378V4.36523L17.5646%205.75882L15.4531%207.77427V15.5014Z%22%20fill%3D%22%2334A853%22%20style%3D%22fill%3A%2334A853%3Bfill%3Acolor(display-p3%200.2039%200.6588%200.3255)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M4.54485%207.77423L4.21875%204.75497L4.54485%201.86523L9.99939%205.95608L15.4539%201.86523L15.8187%204.59894L15.4539%207.77423L9.99939%2011.8651L4.54485%207.77423Z%22%20fill%3D%22%23EA4335%22%20style%3D%22fill%3A%23EA4335%3Bfill%3Acolor(display-p3%200.9176%200.2627%200.2078)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M15.4531%201.86553V7.77452L19.9986%204.36549V2.54734C19.9986%200.861%2018.0736%20-0.100348%2016.7259%200.910999L15.4531%201.86553Z%22%20fill%3D%22%23FBBC04%22%20style%3D%22fill%3A%23FBBC04%3Bfill%3Acolor(display-p3%200.9843%200.7373%200.0157)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M0%204.36549L2.09053%205.93336L4.54545%207.77452V1.86553L3.27273%200.910999C1.92273%20-0.100348%200%200.861%200%202.54734V4.36549Z%22%20fill%3D%22%23C5221F%22%20style%3D%22fill%3A%23C5221F%3Bfill%3Acolor(display-p3%200.7725%200.1333%200.1216)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cclippath%20id%3D%22clip0_6362_100585%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2215.0037%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%20transform%3D%22translate(0%200.498047)%22%2F%3E%0A%3C%2Fclippath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Continue with Gmail"}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "gmail-wrappers")}
          tag="div"
          {...onClickOutlook}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewbox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M21.5624%201.49805H8.6845C8.40557%201.49805%208.13807%201.60885%207.94084%201.80608C7.74361%202.00331%207.63281%202.27081%207.63281%202.54973V3.74523L14.8912%205.99242L22.6141%203.74523V2.54973C22.6141%202.27081%2022.5033%202.00331%2022.306%201.80608C22.1088%201.60885%2021.8413%201.49805%2021.5624%201.49805Z%22%20fill%3D%22%230364B8%22%20style%3D%22fill%3A%230364B8%3Bfill%3Acolor(display-p3%200.0118%200.3922%200.7216)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M23.852%2013.0377C23.9618%2012.6928%2024.0493%2012.3413%2024.1142%2011.9852C24.1141%2011.8977%2024.091%2011.8118%2024.0472%2011.7361C24.0035%2011.6604%2023.9405%2011.5975%2023.8648%2011.5538L23.855%2011.5478L23.852%2011.5463L15.7337%206.92155C15.6987%206.89883%2015.6624%206.87807%2015.6251%206.85938C15.4698%206.7823%2015.2988%206.74219%2015.1255%206.74219C14.9521%206.74219%2014.7811%206.7823%2014.6258%206.85938C14.5885%206.87782%2014.5523%206.89832%2014.5172%206.92081L6.39889%2011.547L6.39589%2011.5485L6.38691%2011.5538C6.31101%2011.5974%206.24794%2011.6602%206.20402%2011.736C6.16011%2011.8117%206.1369%2011.8977%206.13672%2011.9852C6.20161%2012.3413%206.28918%2012.6928%206.39889%2013.0377L15.0071%2019.3335L23.852%2013.0377Z%22%20fill%3D%22%230A2767%22%20style%3D%22fill%3A%230A2767%3Bfill%3Acolor(display-p3%200.0392%200.1529%200.4039)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M18.1206%203.74609H12.8771L11.3633%205.99328L12.8771%208.24047L18.1206%2012.7348H22.6149V8.24047L18.1206%203.74609Z%22%20fill%3D%22%2328A8EA%22%20style%3D%22fill%3A%2328A8EA%3Bfill%3Acolor(display-p3%200.1569%200.6588%200.9176)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M7.63281%203.74609H12.8762V8.24047H7.63281V3.74609Z%22%20fill%3D%22%230078D4%22%20style%3D%22fill%3A%230078D4%3Bfill%3Acolor(display-p3%200.0000%200.4706%200.8314)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M18.1211%203.74609H22.6155V8.24047H18.1211V3.74609Z%22%20fill%3D%22%2350D9FF%22%20style%3D%22fill%3A%2350D9FF%3Bfill%3Acolor(display-p3%200.3137%200.8510%201.0000)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M18.1197%2012.7346L12.8762%208.24023H7.63281V12.7346L12.8762%2017.229L20.9901%2018.5533L18.1197%2012.7346Z%22%20fill%3D%22%230364B8%22%20style%3D%22fill%3A%230364B8%3Bfill%3Acolor(display-p3%200.0118%200.3922%200.7216)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M12.8789%208.24023H18.1223V12.7346H12.8789V8.24023Z%22%20fill%3D%22%230078D4%22%20style%3D%22fill%3A%230078D4%3Bfill%3Acolor(display-p3%200.0000%200.4706%200.8314)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M7.63281%2012.7344H12.8762V17.2288H7.63281V12.7344Z%22%20fill%3D%22%23064A8C%22%20style%3D%22fill%3A%23064A8C%3Bfill%3Acolor(display-p3%200.0235%200.2902%200.5490)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M18.1211%2012.7344H22.6155V17.2288H18.1211V12.7344Z%22%20fill%3D%22%230078D4%22%20style%3D%22fill%3A%230078D4%3Bfill%3Acolor(display-p3%200.0000%200.4706%200.8314)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20opacity%3D%220.5%22%20d%3D%22M15.2673%2018.8895L6.43359%2012.4476L6.80438%2011.7959C6.80438%2011.7959%2014.8531%2016.3802%2014.9759%2016.4491C15.0262%2016.4692%2015.08%2016.4788%2015.1341%2016.4772C15.1883%2016.4757%2015.2415%2016.463%2015.2905%2016.4401L23.48%2011.7734L23.8515%2012.4244L15.2673%2018.8895Z%22%20fill%3D%22%230A2767%22%20style%3D%22fill%3A%230A2767%3Bfill%3Acolor(display-p3%200.0392%200.1529%200.4039)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M23.8653%2012.4166L23.8548%2012.4226L23.8526%2012.4241L15.7343%2017.0488C15.573%2017.1528%2015.3878%2017.2136%2015.1963%2017.2255C15.0049%2017.2375%2014.8135%2017.2001%2014.6406%2017.117L17.4676%2020.908L23.6503%2022.254V22.257C23.7942%2022.153%2023.9113%2022.0163%2023.992%2021.8582C24.0727%2021.7001%2024.1148%2021.5252%2024.1148%2021.3477V11.9844C24.1148%2012.072%2024.0918%2012.158%2024.048%2012.2339C24.0042%2012.3098%2023.9412%2012.3728%2023.8653%2012.4166Z%22%20fill%3D%22%231490DF%22%20style%3D%22fill%3A%231490DF%3Bfill%3Acolor(display-p3%200.0784%200.5647%200.8745)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20opacity%3D%220.05%22%20d%3D%22M24.1148%2021.3486V20.7958L16.6369%2016.5352L15.7343%2017.0498C15.573%2017.1537%2015.3878%2017.2146%2015.1963%2017.2265C15.0049%2017.2385%2014.8135%2017.2011%2014.6406%2017.1179L17.4676%2020.9089L23.6503%2022.255V22.258C23.7942%2022.154%2023.9113%2022.0173%2023.992%2021.8592C24.0727%2021.7011%2024.1148%2021.5261%2024.1148%2021.3486Z%22%20fill%3D%22black%22%20style%3D%22fill%3Ablack%3Bfill%3Ablack%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20opacity%3D%220.1%22%20d%3D%22M24.0773%2021.6357L15.8803%2016.9668L15.7343%2017.0492C15.5731%2017.1533%2015.3879%2017.2143%2015.1964%2017.2263C15.005%2017.2384%2014.8136%2017.2011%2014.6406%2017.1181L17.4676%2020.9091L23.6503%2022.2552V22.2582C23.86%2022.1063%2024.0108%2021.8867%2024.0773%2021.6365V21.6357Z%22%20fill%3D%22black%22%20style%3D%22fill%3Ablack%3Bfill%3Ablack%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M6.39891%2012.4263V12.4188H6.39142L6.36895%2012.4038C6.29734%2012.3599%206.23832%2012.2982%206.19763%2012.2247C6.15694%2012.1512%206.13596%2012.0684%206.13674%2011.9844V21.3477C6.13654%2021.4953%206.16547%2021.6415%206.22187%2021.7779C6.27826%2021.9143%206.36102%2022.0382%206.46539%2022.1426C6.56977%2022.247%206.69371%2022.3297%206.83012%2022.3861C6.96653%2022.4425%207.11273%2022.4714%207.26033%2022.4713H22.9906C23.0842%2022.4703%2023.1773%2022.4578%2023.2678%2022.4338C23.3147%2022.4256%2023.3602%2022.4105%2023.4026%2022.3889C23.4185%2022.3873%2023.4339%2022.3822%2023.4476%2022.3739C23.5089%2022.3488%2023.5668%2022.3161%2023.6199%2022.2765C23.6348%2022.269%2023.6423%2022.269%2023.6498%2022.254L6.39891%2012.4263Z%22%20fill%3D%22%2328A8EA%22%20style%3D%22fill%3A%2328A8EA%3Bfill%3Acolor(display-p3%200.1569%200.6588%200.9176)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20opacity%3D%220.1%22%20d%3D%22M13.6273%2018.4778V6.24264C13.6266%205.97807%2013.5211%205.72455%2013.334%205.53747C13.1469%205.35038%2012.8934%205.24493%2012.6288%205.24414H7.65732V10.8292L6.39889%2011.5468L6.39515%2011.5483L6.38616%2011.5535C6.31029%2011.5973%206.2473%2011.6603%206.20351%2011.7362C6.15973%2011.812%206.13669%2011.8981%206.13672%2011.9857V19.4763H12.6288C12.8934%2019.4755%2013.1469%2019.3701%2013.334%2019.183C13.5211%2018.9959%2013.6266%2018.7424%2013.6273%2018.4778Z%22%20fill%3D%22black%22%20style%3D%22fill%3Ablack%3Bfill%3Ablack%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20opacity%3D%220.2%22%20d%3D%22M12.8783%2019.2259V6.99069C12.8775%206.72611%2012.772%206.4726%2012.585%206.28551C12.3979%206.09843%2012.1444%205.99298%2011.8798%205.99219H7.65732V10.8281L6.39889%2011.5457L6.39515%2011.5472L6.38616%2011.5525C6.31029%2011.5963%206.2473%2011.6593%206.20351%2011.7352C6.15973%2011.811%206.13669%2011.8971%206.13672%2011.9847V20.2244H11.8798C12.1444%2020.2236%2012.3979%2020.1181%2012.585%2019.931C12.772%2019.744%2012.8775%2019.4904%2012.8783%2019.2259Z%22%20fill%3D%22black%22%20style%3D%22fill%3Ablack%3Bfill%3Ablack%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20opacity%3D%220.2%22%20d%3D%22M12.8783%2017.7277V6.99069C12.8775%206.72611%2012.772%206.4726%2012.585%206.28551C12.3979%206.09843%2012.1444%205.99298%2011.8798%205.99219H7.65732V10.8281L6.39889%2011.5457L6.39515%2011.5472L6.38616%2011.5525C6.31029%2011.5963%206.2473%2011.6593%206.20351%2011.7352C6.15973%2011.811%206.13669%2011.8971%206.13672%2011.9847V18.7262H11.8798C12.1444%2018.7255%2012.3979%2018.62%2012.585%2018.4329C12.772%2018.2458%2012.8775%2017.9923%2012.8783%2017.7277Z%22%20fill%3D%22black%22%20style%3D%22fill%3Ablack%3Bfill%3Ablack%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20opacity%3D%220.2%22%20d%3D%22M12.1292%2017.7277V6.99069C12.1284%206.72611%2012.023%206.4726%2011.8359%206.28551C11.6488%206.09843%2011.3953%205.99298%2011.1307%205.99219H7.65732V10.8281L6.39889%2011.5457L6.39515%2011.5472L6.38616%2011.5525C6.31029%2011.5963%206.2473%2011.6593%206.20351%2011.7352C6.15973%2011.811%206.13669%2011.8971%206.13672%2011.9847V18.7262H11.1307C11.3953%2018.7255%2011.6488%2018.62%2011.8359%2018.4329C12.023%2018.2458%2012.1284%2017.9923%2012.1292%2017.7277Z%22%20fill%3D%22black%22%20style%3D%22fill%3Ablack%3Bfill%3Ablack%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M1.14303%205.99219H11.131C11.3958%205.99219%2011.6498%206.09739%2011.8371%206.28464C12.0243%206.4719%2012.1295%206.72587%2012.1295%206.99069V16.9787C12.1295%2017.2435%2012.0243%2017.4975%2011.8371%2017.6847C11.6498%2017.872%2011.3958%2017.9772%2011.131%2017.9772H1.14303C0.878213%2017.9772%200.62424%2017.872%200.436985%2017.6847C0.24973%2017.4975%200.144531%2017.2435%200.144531%2016.9787L0.144531%206.99069C0.144531%206.72587%200.24973%206.4719%200.436985%206.28464C0.62424%206.09739%200.878213%205.99219%201.14303%205.99219Z%22%20fill%3D%22%230078D4%22%20style%3D%22fill%3A%230078D4%3Bfill%3Acolor(display-p3%200.0000%200.4706%200.8314)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M3.03908%2010.0885C3.3044%209.52307%203.73273%209.04987%204.26905%208.72972C4.86322%208.38959%205.53975%208.22006%206.2241%208.23983C6.85777%208.22609%207.48303%208.38674%208.03159%208.70425C8.54795%209.01182%208.96381%209.46282%209.22859%2010.0024C9.51703%2010.5971%209.66077%2011.2516%209.64806%2011.9125C9.66193%2012.6028%209.51391%2013.2867%209.21585%2013.9095C8.94532%2014.4683%208.51692%2014.9355%207.98365%2015.2533C7.41357%2015.5809%206.76457%2015.746%206.10724%2015.7305C5.45966%2015.7459%204.82025%2015.5834%204.25856%2015.2608C3.73807%2014.9527%203.31731%2014.5013%203.04658%2013.9604C2.75615%2013.3745%202.61051%2012.7274%202.62186%2012.0735C2.6093%2011.3888%202.75194%2010.7102%203.03908%2010.0885ZM4.34994%2013.278C4.49129%2013.6355%204.731%2013.9456%205.04133%2014.1724C5.35755%2014.3937%205.73636%2014.5079%206.12223%2014.4982C6.53328%2014.5142%206.9384%2014.3962%207.27653%2014.1619C7.5834%2013.9352%207.81702%2013.6235%207.94844%2013.2653C8.0958%2012.8662%208.16842%2012.4435%208.16267%2012.0181C8.16724%2011.5887%208.09885%2011.1617%207.96043%2010.7552C7.83828%2010.3895%207.613%2010.0669%207.31174%209.82635C6.98252%209.58029%206.57858%209.45517%206.16792%209.47204C5.77366%209.46207%205.38636%209.57719%205.06155%209.80088C4.74514%2010.0281%204.49989%2010.3406%204.35444%2010.702C4.03268%2011.5305%204.03082%2012.449%204.3492%2013.2788L4.34994%2013.278Z%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Continue with Outlook"}</_Builtin.Block>
          {isSoonVisible ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-765")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm")}
                tag="div"
              >
                {"Soon"}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
