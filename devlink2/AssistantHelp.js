import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AssistantHelp.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-141":{"id":"e-141","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-89","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-142"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711116560091},"e-142":{"id":"e-142","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-141"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711116560092},"e-143":{"id":"e-143","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-144"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711117013504}},"actionLists":{"a-89":{"id":"a-89","title":"copy-hover in invitation schedular","actionItemGroups":[{"actionItems":[{"id":"a-89-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":"none"}},{"id":"a-89-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.copy","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","d5f9b086-8c8b-d31e-a39f-a50695a82c6a"]},"value":"block"}},{"id":"a-89-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-89-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":"flex"}},{"id":"a-89-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.copy","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","d5f9b086-8c8b-d31e-a39f-a50695a82c6a"]},"value":"block"}},{"id":"a-89-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.copied","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","9252ac6e-77b5-8e17-c28a-254683bcd6bd"]},"value":"none"}},{"id":"a-89-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711116769518},"a-90":{"id":"a-90","title":"copy-hover out invitation schedular","actionItemGroups":[{"actionItems":[{"id":"a-90-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":0,"unit":""}},{"id":"a-90-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1711116769518},"a-91":{"id":"a-91","title":"CLick Copied Invitation Link","actionItemGroups":[{"actionItems":[{"id":"a-91-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-sm.copy","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","d5f9b086-8c8b-d31e-a39f-a50695a82c6a"]},"value":"block"}},{"id":"a-91-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-sm.copied","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","9252ac6e-77b5-8e17-c28a-254683bcd6bd"]},"value":"none"}}]},{"actionItems":[{"id":"a-91-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-sm.copied","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","9252ac6e-77b5-8e17-c28a-254683bcd6bd"]},"value":"block"}},{"id":"a-91-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-sm.copy","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","d5f9b086-8c8b-d31e-a39f-a50695a82c6a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711117027368}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AssistantHelp({
  as: _Component = _Builtin.Block,
  onClickSchedulerAgent = {},
  onClickSourcingAgent = {},
  onClickScreeningAgent = {},
  onClickCareerChatbot = {},
  onClickSend = {},
  slotChatInput,
  isSlotChatVisible = false,
  isChatDashVisible = true,
  slotMessage,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-932")} tag="div">
      {isSlotChatVisible ? (
        <_Builtin.Block className={_utils.cx(_styles, "slot-caht")} tag="div">
          {slotMessage}
        </_Builtin.Block>
      ) : null}
      {isChatDashVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-945")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-933")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M41.8594%2030.0094C37.8188%2028.9969%2035.7938%2028.5%2034.3969%2027.1031C33%2025.6969%2032.5031%2023.6813%2031.4906%2019.6406L30%2013.6875L28.5094%2019.6406C27.4969%2023.6813%2027%2025.7062%2025.6031%2027.1031C24.1969%2028.5%2022.1813%2028.9969%2018.1406%2030.0094L12.1875%2031.5L18.1406%2032.9906C22.1813%2034.0031%2024.2062%2034.5%2025.6031%2035.8969C27%2037.3031%2027.4969%2039.3188%2028.5094%2043.3594L30%2049.3125L31.4906%2043.3594C32.5031%2039.3188%2033%2037.2938%2034.3969%2035.8969C35.8031%2034.5%2037.8188%2034.0031%2041.8594%2032.9906L47.8125%2031.5L41.8594%2030.0094Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M41.8594%2030.0094C37.8188%2028.9969%2035.7938%2028.5%2034.3969%2027.1031C33%2025.6969%2032.5031%2023.6813%2031.4906%2019.6406L30%2013.6875L28.5094%2019.6406C27.4969%2023.6813%2027%2025.7062%2025.6031%2027.1031C24.1969%2028.5%2022.1813%2028.9969%2018.1406%2030.0094L12.1875%2031.5L18.1406%2032.9906C22.1813%2034.0031%2024.2062%2034.5%2025.6031%2035.8969C27%2037.3031%2027.4969%2039.3188%2028.5094%2043.3594L30%2049.3125L31.4906%2043.3594C32.5031%2039.3188%2033%2037.2938%2034.3969%2035.8969C35.8031%2034.5%2037.8188%2034.0031%2041.8594%2032.9906L47.8125%2031.5L41.8594%2030.0094Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M44.4531%2014.5031C43.1063%2014.1656%2042.4313%2014%2041.9656%2013.5344C41.5%2013.0656%2041.3344%2012.3938%2040.9969%2011.0469L40.5%209.0625L40.0031%2011.0469C39.6656%2012.3938%2039.5%2013.0687%2039.0344%2013.5344C38.5656%2014%2037.8938%2014.1656%2036.5469%2014.5031L34.5625%2015L36.5469%2015.4969C37.8938%2015.8344%2038.5687%2016%2039.0344%2016.4656C39.5%2016.9344%2039.6656%2017.6063%2040.0031%2018.9531L40.5%2020.9375L40.9969%2018.9531C41.3344%2017.6063%2041.5%2016.9313%2041.9656%2016.4656C42.4344%2016%2043.1063%2015.8344%2044.4531%2015.4969L46.4375%2015L44.4531%2014.5031Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M44.4531%2014.5031C43.1063%2014.1656%2042.4313%2014%2041.9656%2013.5344C41.5%2013.0656%2041.3344%2012.3938%2040.9969%2011.0469L40.5%209.0625L40.0031%2011.0469C39.6656%2012.3938%2039.5%2013.0687%2039.0344%2013.5344C38.5656%2014%2037.8938%2014.1656%2036.5469%2014.5031L34.5625%2015L36.5469%2015.4969C37.8938%2015.8344%2038.5687%2016%2039.0344%2016.4656C39.5%2016.9344%2039.6656%2017.6063%2040.0031%2018.9531L40.5%2020.9375L40.9969%2018.9531C41.3344%2017.6063%2041.5%2016.9313%2041.9656%2016.4656C42.4344%2016%2043.1063%2015.8344%2044.4531%2015.4969L46.4375%2015L44.4531%2014.5031Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M50.3719%2022.2019C49.5638%2021.9994%2049.1588%2021.9%2048.8794%2021.6206C48.6%2021.3394%2048.5006%2020.9363%2048.2981%2020.1281L48%2018.9375L47.7019%2020.1281C47.4994%2020.9363%2047.4%2021.3413%2047.1206%2021.6206C46.8394%2021.9%2046.4363%2021.9994%2045.6281%2022.2019L44.4375%2022.5L45.6281%2022.7981C46.4363%2023.0006%2046.8413%2023.1%2047.1206%2023.3794C47.4%2023.6606%2047.4994%2024.0638%2047.7019%2024.8719L48%2026.0625L48.2981%2024.8719C48.5006%2024.0638%2048.6%2023.6588%2048.8794%2023.3794C49.1606%2023.1%2049.5638%2023.0006%2050.3719%2022.7981L51.5625%2022.5L50.3719%2022.2019Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M50.3719%2022.2019C49.5638%2021.9994%2049.1588%2021.9%2048.8794%2021.6206C48.6%2021.3394%2048.5006%2020.9363%2048.2981%2020.1281L48%2018.9375L47.7019%2020.1281C47.4994%2020.9363%2047.4%2021.3413%2047.1206%2021.6206C46.8394%2021.9%2046.4363%2021.9994%2045.6281%2022.2019L44.4375%2022.5L45.6281%2022.7981C46.4363%2023.0006%2046.8413%2023.1%2047.1206%2023.3794C47.4%2023.6606%2047.4994%2024.0638%2047.7019%2024.8719L48%2026.0625L48.2981%2024.8719C48.5006%2024.0638%2048.6%2023.6588%2048.8794%2023.3794C49.1606%2023.1%2049.5638%2023.0006%2050.3719%2022.7981L51.5625%2022.5L50.3719%2022.2019Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-60",
                "fw-semibold",
                "text-linear-orange"
              )}
              tag="div"
            >
              {"Hello."}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-xxl", "text-grey-600")}
            tag="div"
          >
            {"How can I help you today."}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-934")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "schedular-card-wrap")}
              tag="div"
              {...onClickSchedulerAgent}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.8%208.7C14.175%208.725%2014.375%208.925%2014.4%209.3V11.1H21.6V9.3C21.625%208.925%2021.825%208.725%2022.2%208.7C22.575%208.725%2022.775%208.925%2022.8%209.3V11.1H24C24.675%2011.125%2025.2375%2011.3625%2025.6875%2011.8125C26.1375%2012.2625%2026.375%2012.825%2026.4%2013.5V14.7V15.9V25.5C26.375%2026.175%2026.1375%2026.7375%2025.6875%2027.1875C25.2375%2027.6375%2024.675%2027.875%2024%2027.9H12C11.325%2027.875%2010.7625%2027.6375%2010.3125%2027.1875C9.8625%2026.7375%209.625%2026.175%209.6%2025.5V15.9V14.7V13.5C9.625%2012.825%209.8625%2012.2625%2010.3125%2011.8125C10.7625%2011.3625%2011.325%2011.125%2012%2011.1H13.2V9.3C13.225%208.925%2013.425%208.725%2013.8%208.7ZM25.2%2015.9H21.3V18.6H25.2V15.9ZM25.2%2019.8H21.3V22.8H25.2V19.8ZM25.2%2024H21.3V26.7H24C24.35%2026.7%2024.6375%2026.5875%2024.8625%2026.3625C25.0875%2026.1375%2025.2%2025.85%2025.2%2025.5V24ZM20.1%2022.8V19.8H15.9V22.8H20.1ZM15.9%2024V26.7H20.1V24H15.9ZM14.7%2022.8V19.8H10.8V22.8H14.7ZM10.8%2024V25.5C10.8%2025.85%2010.9125%2026.1375%2011.1375%2026.3625C11.3625%2026.5875%2011.65%2026.7%2012%2026.7H14.7V24H10.8ZM10.8%2018.6H14.7V15.9H10.8V18.6ZM15.9%2018.6H20.1V15.9H15.9V18.6ZM24%2012.3H12C11.65%2012.3%2011.3625%2012.4125%2011.1375%2012.6375C10.9125%2012.8625%2010.8%2013.15%2010.8%2013.5V14.7H25.2V13.5C25.2%2013.15%2025.0875%2012.8625%2024.8625%2012.6375C24.6375%2012.4125%2024.35%2012.3%2024%2012.3Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {"Scheduler Agent"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm", "text-grey-600")}
                tag="div"
              >
                {"Automated, precise talent discovery."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "schedular-card-wrap")}
              tag="div"
              {...onClickSourcingAgent}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2237%22%20height%3D%2236%22%20viewBox%3D%220%200%2037%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M25.95%2011.7C25.95%2011.675%2025.875%2011.5875%2025.725%2011.4375C25.45%2011.2125%2024.975%2010.975%2024.3%2010.725C22.875%2010.2%2021.025%209.925%2018.75%209.9C16.475%209.925%2014.625%2010.2%2013.2%2010.725C12.525%2010.975%2012.05%2011.2125%2011.775%2011.4375C11.625%2011.5875%2011.55%2011.675%2011.55%2011.7V15.525C12.1%2015.925%2012.9625%2016.275%2014.1375%2016.575C15.4625%2016.925%2017%2017.1%2018.75%2017.1C20.5%2017.1%2022.0375%2016.925%2023.3625%2016.575C24.5375%2016.275%2025.4%2015.925%2025.95%2015.525V11.7ZM25.95%2016.95C25.3%2017.275%2024.5375%2017.55%2023.6625%2017.775C22.2125%2018.125%2020.575%2018.3%2018.75%2018.3C16.925%2018.3%2015.2875%2018.1125%2013.8375%2017.7375C12.9625%2017.5375%2012.2%2017.275%2011.55%2016.95V20.325C12.1%2020.75%2012.9625%2021.1%2014.1375%2021.375C15.4625%2021.725%2017%2021.9%2018.75%2021.9C20.5%2021.9%2022.0375%2021.725%2023.3625%2021.375C24.5375%2021.075%2025.4%2020.725%2025.95%2020.325V16.95ZM11.55%2024.9C11.55%2024.925%2011.625%2025.0125%2011.775%2025.1625C12.05%2025.3875%2012.525%2025.625%2013.2%2025.875C14.625%2026.4%2016.475%2026.675%2018.75%2026.7C21.025%2026.675%2022.875%2026.4%2024.3%2025.875C24.975%2025.625%2025.45%2025.3875%2025.725%2025.1625C25.875%2025.0125%2025.95%2024.925%2025.95%2024.9V21.75C25.3%2022.075%2024.5375%2022.35%2023.6625%2022.575C22.2125%2022.925%2020.575%2023.1%2018.75%2023.1C16.925%2023.1%2015.2875%2022.925%2013.8375%2022.575C12.9625%2022.35%2012.2%2022.075%2011.55%2021.75V24.9ZM11.55%2011.7375C11.55%2011.7125%2011.55%2011.7125%2011.55%2011.7375V11.7375ZM27.15%2024.9C27.1%2025.75%2026.275%2026.4625%2024.675%2027.0375C23.1%2027.5875%2021.125%2027.875%2018.75%2027.9C16.375%2027.875%2014.4%2027.5875%2012.825%2027.0375C11.225%2026.4625%2010.4%2025.75%2010.35%2024.9V11.7C10.4%2010.85%2011.225%2010.1375%2012.825%209.5625C14.4%209.0125%2016.375%208.725%2018.75%208.7C21.125%208.725%2023.1%209.0125%2024.675%209.5625C26.275%2010.1375%2027.1%2010.85%2027.15%2011.7V24.9Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {"Sourcing Agent"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm", "text-grey-600")}
                tag="div"
              >
                {"Automated, precise talent discovery."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "schedular-card-wrap")}
              tag="div"
              {...onClickScreeningAgent}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2237%22%20height%3D%2236%22%20viewBox%3D%220%200%2037%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.9%2011.7C11.9%2011.35%2011.7875%2011.0625%2011.5625%2010.8375C11.3375%2010.6125%2011.05%2010.5%2010.7%2010.5C10.35%2010.5%2010.0625%2010.6125%209.8375%2010.8375C9.6125%2011.0625%209.5%2011.35%209.5%2011.7C9.5%2012.05%209.6125%2012.3375%209.8375%2012.5625C10.0625%2012.7875%2010.35%2012.9%2010.7%2012.9C11.05%2012.9%2011.3375%2012.7875%2011.5625%2012.5625C11.7875%2012.3375%2011.9%2012.05%2011.9%2011.7ZM13.1%2011.7C13.1%2012.275%2012.925%2012.775%2012.575%2013.2C12.25%2013.6%2011.825%2013.875%2011.3%2014.025V18.3H19.7V14.025C19.175%2013.875%2018.75%2013.6%2018.425%2013.2C18.075%2012.775%2017.9%2012.275%2017.9%2011.7C17.925%2011.025%2018.1625%2010.4625%2018.6125%2010.0125C19.0625%209.5625%2019.625%209.325%2020.3%209.3C20.975%209.325%2021.5375%209.5625%2021.9875%2010.0125C22.4375%2010.4625%2022.675%2011.025%2022.7%2011.7C22.7%2012.275%2022.525%2012.775%2022.175%2013.2C21.85%2013.6%2021.425%2013.875%2020.9%2014.025V18.3H28.25L25.925%2016.35C25.65%2016.1%2025.625%2015.825%2025.85%2015.525C26.1%2015.25%2026.375%2015.225%2026.675%2015.45L30.275%2018.45C30.3%2018.45%2030.3125%2018.45%2030.3125%2018.45C30.3125%2018.475%2030.325%2018.4875%2030.35%2018.4875C30.45%2018.6125%2030.5%2018.75%2030.5%2018.9C30.5%2018.9%2030.5%2018.9125%2030.5%2018.9375C30.5%2019.0625%2030.45%2019.175%2030.35%2019.275C30.325%2019.3%2030.3%2019.325%2030.275%2019.35L26.675%2022.35C26.375%2022.575%2026.1%2022.55%2025.85%2022.275C25.625%2021.975%2025.65%2021.7%2025.925%2021.45L28.25%2019.5H16.1V22.575C16.625%2022.725%2017.05%2023%2017.375%2023.4C17.725%2023.825%2017.9%2024.325%2017.9%2024.9C17.875%2025.575%2017.6375%2026.1375%2017.1875%2026.5875C16.7375%2027.0375%2016.175%2027.275%2015.5%2027.3C14.825%2027.275%2014.2625%2027.0375%2013.8125%2026.5875C13.3625%2026.1375%2013.125%2025.575%2013.1%2024.9C13.1%2024.325%2013.275%2023.825%2013.625%2023.4C13.95%2023%2014.375%2022.725%2014.9%2022.575V19.5H7.1C6.725%2019.475%206.525%2019.275%206.5%2018.9C6.525%2018.525%206.725%2018.325%207.1%2018.3H10.1V14.025C9.575%2013.875%209.15%2013.6%208.825%2013.2C8.475%2012.775%208.3%2012.275%208.3%2011.7C8.325%2011.025%208.5625%2010.4625%209.0125%2010.0125C9.4625%209.5625%2010.025%209.325%2010.7%209.3C11.375%209.325%2011.9375%209.5625%2012.3875%2010.0125C12.8375%2010.4625%2013.075%2011.025%2013.1%2011.7ZM14.3%2024.9C14.3%2025.25%2014.4125%2025.5375%2014.6375%2025.7625C14.8625%2025.9875%2015.15%2026.1%2015.5%2026.1C15.85%2026.1%2016.1375%2025.9875%2016.3625%2025.7625C16.5875%2025.5375%2016.7%2025.25%2016.7%2024.9C16.7%2024.55%2016.5875%2024.2625%2016.3625%2024.0375C16.1375%2023.8125%2015.85%2023.7%2015.5%2023.7C15.15%2023.7%2014.8625%2023.8125%2014.6375%2024.0375C14.4125%2024.2625%2014.3%2024.55%2014.3%2024.9ZM21.5%2011.7C21.5%2011.35%2021.3875%2011.0625%2021.1625%2010.8375C20.9375%2010.6125%2020.65%2010.5%2020.3%2010.5C19.95%2010.5%2019.6625%2010.6125%2019.4375%2010.8375C19.2125%2011.0625%2019.1%2011.35%2019.1%2011.7C19.1%2012.05%2019.2125%2012.3375%2019.4375%2012.5625C19.6625%2012.7875%2019.95%2012.9%2020.3%2012.9C20.65%2012.9%2020.9375%2012.7875%2021.1625%2012.5625C21.3875%2012.3375%2021.5%2012.05%2021.5%2011.7Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {"Screening Agent"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm", "text-grey-600")}
                tag="div"
              >
                {"Automated, precise talent discovery."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "schedular-card-wrap")}
              tag="div"
              {...onClickCareerChatbot}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2237%22%20height%3D%2236%22%20viewBox%3D%220%200%2037%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.65%2023.1C15%2023.1%2015.2875%2023.2125%2015.5125%2023.4375C15.7375%2023.6625%2015.85%2023.95%2015.85%2024.3V26.1L19.525%2023.325C19.75%2023.175%2019.9875%2023.1%2020.2375%2023.1H25.45C25.8%2023.1%2026.0875%2022.9875%2026.3125%2022.7625C26.5375%2022.5375%2026.65%2022.25%2026.65%2021.9V11.1C26.65%2010.75%2026.5375%2010.4625%2026.3125%2010.2375C26.0875%2010.0125%2025.8%209.9%2025.45%209.9H11.05C10.7%209.9%2010.4125%2010.0125%2010.1875%2010.2375C9.9625%2010.4625%209.85%2010.75%209.85%2011.1V21.9C9.85%2022.25%209.9625%2022.5375%2010.1875%2022.7625C10.4125%2022.9875%2010.7%2023.1%2011.05%2023.1H14.65ZM8.65%2011.1C8.675%2010.425%208.9125%209.8625%209.3625%209.4125C9.8125%208.9625%2010.375%208.725%2011.05%208.7H25.45C26.125%208.725%2026.6875%208.9625%2027.1375%209.4125C27.5875%209.8625%2027.825%2010.425%2027.85%2011.1V21.9C27.825%2022.575%2027.5875%2023.1375%2027.1375%2023.5875C26.6875%2024.0375%2026.125%2024.275%2025.45%2024.3H20.2375L15.625%2027.7875C15.425%2027.9125%2015.2125%2027.925%2014.9875%2027.825C14.7625%2027.725%2014.65%2027.55%2014.65%2027.3V25.5V24.3H13.45H11.05C10.375%2024.275%209.8125%2024.0375%209.3625%2023.5875C8.9125%2023.1375%208.675%2022.575%208.65%2021.9V11.1Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {"Career Chatbot"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm", "text-grey-600")}
                tag="div"
              >
                {"Automated, precise talent discovery."}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block className={_utils.cx(_styles, "div-block-936")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-937")}
          tag="div"
        >
          {slotChatInput}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-935")}
          tag="div"
          {...onClickSend}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20viewBox%3D%220%200%2025%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.3984%204.10156L19.6484%2010.3516C19.8828%2010.612%2020%2010.9115%2020%2011.25C20%2011.5885%2019.8828%2011.888%2019.6484%2012.1484C19.388%2012.3828%2019.0885%2012.5%2018.75%2012.5C18.4115%2012.5%2018.112%2012.3828%2017.8516%2012.1484L13.75%208.00781V20C13.75%2020.3646%2013.6328%2020.6641%2013.3984%2020.8984C13.1641%2021.1328%2012.8646%2021.25%2012.5%2021.25C12.1354%2021.25%2011.8359%2021.1328%2011.6016%2020.8984C11.3672%2020.6641%2011.25%2020.3646%2011.25%2020V8.00781L7.14844%2012.1484C6.88802%2012.3828%206.58854%2012.5%206.25%2012.5C5.91146%2012.5%205.61198%2012.3828%205.35156%2012.1484C5.11719%2011.888%205%2011.5885%205%2011.25C5%2010.9115%205.11719%2010.612%205.35156%2010.3516L11.6016%204.10156C11.862%203.86719%2012.1615%203.75%2012.5%203.75C12.8385%203.75%2013.138%203.86719%2013.3984%204.10156Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
