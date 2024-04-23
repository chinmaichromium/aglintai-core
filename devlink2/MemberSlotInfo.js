import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MemberSlotInfo.module.css";

export function MemberSlotInfo({
  as: _Component = _Builtin.Block,
  isCalenderNotConnected = false,
  onClickAskToConnectCalender = {},
  onClickViewSlots = {},
  textRequestedSlotNumber = "--",
  textConfirmedSlotnumber = "--",
  isRequestedSlots = false,
  isConfirmedSlots = false,
}) {
  return (
    <_Component className={_utils.cx(_styles, "member_slot_data")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "member_slot_info")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "slot_info")} tag="div">
          {isRequestedSlots ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "icon_text_flex")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "embed_flex")}
                value="%3Csvg%20width%3D%2226%22%20height%3D%2226%22%20viewBox%3D%220%200%2026%2026%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.71969%204.75H17.6237C18.1014%204.77388%2018.5074%204.94108%2018.8418%205.25158C19.1523%205.58596%2019.3195%205.992%2019.3434%206.46969C19.3195%207.04292%2019.0926%207.49673%2018.6627%207.83111L18.1611%208.22521C16.943%208.34463%2015.8801%208.76261%2014.9725%209.47915C14.041%2010.1718%2013.3603%2011.0675%2012.9304%2012.1662L10.8524%2013.7067C10.3986%2013.9933%209.94478%2013.9933%209.49097%2013.7067L1.68071%207.83111C1.25079%207.49673%201.02388%207.04292%201%206.46969C1.02388%205.992%201.19108%205.58596%201.50158%205.25158C1.83596%204.94108%202.242%204.77388%202.71969%204.75ZM11.5331%2014.6024L12.5004%2013.8859C12.4765%2014.1008%2012.4646%2014.3038%2012.4646%2014.4949C12.4885%2016.0474%2012.9662%2017.3849%2013.8977%2018.5075H3.29292C2.64804%2018.4836%202.11063%2018.2567%201.68071%2017.8268C1.25079%2017.3969%201.02388%2016.8595%201%2016.2146V8.76261L8.81026%2014.6024C9.2163%2014.9129%209.67011%2015.0681%2010.1717%2015.0681C10.6733%2015.0681%2011.1271%2014.9129%2011.5331%2014.6024ZM23.9292%2014.4949C23.9292%2015.4264%2023.7023%2016.2863%2023.2485%2017.0744C22.7947%2017.8626%2022.1617%2018.4956%2021.3497%2018.9733C20.5376%2019.4271%2019.6777%2019.654%2018.7701%2019.654C17.8625%2019.654%2017.0027%2019.4271%2016.1906%2018.9733C15.3785%2018.4956%2014.7456%2017.8626%2014.2918%2017.0744C13.838%2016.2863%2013.6111%2015.4264%2013.6111%2014.4949C13.6111%2013.5634%2013.838%2012.7036%2014.2918%2011.9154C14.7456%2011.1272%2015.3785%2010.4942%2016.1906%2010.0166C17.0027%209.56274%2017.8625%209.33584%2018.7701%209.33584C19.6777%209.33584%2020.5376%209.56274%2021.3497%2010.0166C22.1617%2010.4942%2022.7947%2011.1272%2023.2485%2011.9154C23.7023%2012.7036%2023.9292%2013.5634%2023.9292%2014.4949ZM22.3313%2012.5459C22.0686%2012.3071%2021.4333%2011.5377%2021.1705%2011.7766C21.1705%2011.7766%2019.7733%208.6193%2019.3075%2010.7689C18.8418%2012.9185%2016.5919%2011.1702%2016.5919%2011.1702C16.0545%2014.5092%2015.7153%2013.2243%2015.4526%2013.4631C15.2137%2013.7258%2015.2137%2015.0347%2015.4526%2015.2974L16.8283%2017.1318C17.091%2017.3706%2019.0448%2018.0657%2019.3075%2017.8268L22.7899%2015.2974C23.0288%2015.0347%2022.5702%2012.8087%2022.3313%2012.5459Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3Cpath%20d%3D%22M19.1217%2019.7117C18.1185%2019.6974%2017.2013%2019.4537%2016.3702%2018.9808C15.539%2018.4936%2014.8654%2017.82%2014.3495%2016.9602C13.8623%2016.086%2013.6187%2015.1688%2013.6187%2014.2087C13.6187%2013.2485%2013.8623%2012.3314%2014.3495%2011.4572C14.8654%2010.5973%2015.539%209.92378%2016.3702%209.43654C17.2013%208.96362%2018.1185%208.72%2019.1217%208.70567C20.1248%208.72%2021.042%208.96362%2021.8732%209.43654C22.7044%209.92378%2023.3779%2010.5973%2023.8938%2011.4572C24.381%2012.3314%2024.6247%2013.2485%2024.6247%2014.2087C24.6247%2015.1688%2024.381%2016.086%2023.8938%2016.9602C23.3779%2017.82%2022.7044%2018.4936%2021.8732%2018.9808C21.042%2019.4537%2020.1248%2019.6974%2019.1217%2019.7117ZM21.5507%2013.1984C21.7514%2012.9547%2021.7514%2012.7111%2021.5507%2012.4675C21.3071%2012.2669%2021.0635%2012.2669%2020.8199%2012.4675L18.4338%2014.8536L17.4235%2013.8432C17.1798%2013.6426%2016.9362%2013.6426%2016.6926%2013.8432C16.492%2014.0869%2016.492%2014.3305%2016.6926%2014.5741L18.0684%2015.9499C18.312%2016.1505%2018.5556%2016.1505%2018.7992%2015.9499L21.5507%2013.1984Z%22%20fill%3D%22%23F79A3E%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">
                {textRequestedSlotNumber}
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"slots requested"}</_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {isConfirmedSlots ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "icon_text_flex")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "embed_flex")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2217%22%20viewBox%3D%220%200%2016%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%2016.25C6.54167%2016.2292%205.20833%2015.875%204%2015.1875C2.79167%2014.4792%201.8125%2013.5%201.0625%2012.25C0.354167%2010.9792%200%209.64583%200%208.25C0%206.85417%200.354167%205.52083%201.0625%204.25C1.8125%203%202.79167%202.02083%204%201.3125C5.20833%200.625%206.54167%200.270833%208%200.25C9.45833%200.270833%2010.7917%200.625%2012%201.3125C13.2083%202.02083%2014.1875%203%2014.9375%204.25C15.6458%205.52083%2016%206.85417%2016%208.25C16%209.64583%2015.6458%2010.9792%2014.9375%2012.25C14.1875%2013.5%2013.2083%2014.4792%2012%2015.1875C10.7917%2015.875%209.45833%2016.2292%208%2016.25ZM11.5312%206.78125C11.8229%206.42708%2011.8229%206.07292%2011.5312%205.71875C11.1771%205.42708%2010.8229%205.42708%2010.4688%205.71875L7%209.1875L5.53125%207.71875C5.17708%207.42708%204.82292%207.42708%204.46875%207.71875C4.17708%208.07292%204.17708%208.42708%204.46875%208.78125L6.46875%2010.7812C6.82292%2011.0729%207.17708%2011.0729%207.53125%2010.7812L11.5312%206.78125Z%22%20fill%3D%22%23228F67%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">
                {textConfirmedSlotnumber}
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"slots confirmed"}</_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-underline", "text-blue-500")}
          tag="div"
          {...onClickViewSlots}
        >
          {"View Slots"}
        </_Builtin.Block>
      </_Builtin.Block>
      {isCalenderNotConnected ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "member_calender_connect")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "icon_text_flex")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2218%22%20height%3D%2219%22%20viewBox%3D%220%200%2018%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2015.25C7.90625%2015.2344%206.90625%2014.9688%206%2014.4531C5.09375%2013.9219%204.35938%2013.1875%203.79688%2012.25C3.26562%2011.2969%203%2010.2969%203%209.25C3%208.20312%203.26562%207.20312%203.79688%206.25C4.35938%205.3125%205.09375%204.57812%206%204.04688C6.90625%203.53125%207.90625%203.26563%209%203.25C10.0938%203.26563%2011.0938%203.53125%2012%204.04688C12.9062%204.57812%2013.6406%205.3125%2014.2031%206.25C14.7344%207.20312%2015%208.20312%2015%209.25C15%2010.2969%2014.7344%2011.2969%2014.2031%2012.25C13.6406%2013.1875%2012.9062%2013.9219%2012%2014.4531C11.0938%2014.9688%2010.0938%2015.2344%209%2015.25ZM8.0625%2011.125C7.71875%2011.1562%207.53125%2011.3438%207.5%2011.6875C7.53125%2012.0312%207.71875%2012.2188%208.0625%2012.25H9.9375C10.2812%2012.2188%2010.4688%2012.0312%2010.5%2011.6875C10.4688%2011.3438%2010.2812%2011.1562%209.9375%2011.125H9.75V9.0625C9.71875%208.71875%209.53125%208.53125%209.1875%208.5H8.0625C7.71875%208.53125%207.53125%208.71875%207.5%209.0625C7.53125%209.40625%207.71875%209.59375%208.0625%209.625H8.625V11.125H8.0625ZM9%206.25C8.78125%206.25%208.60156%206.32031%208.46094%206.46094C8.32031%206.60156%208.25%206.78125%208.25%207C8.25%207.21875%208.32031%207.39844%208.46094%207.53906C8.60156%207.67969%208.78125%207.75%209%207.75C9.21875%207.75%209.39844%207.67969%209.53906%207.53906C9.67969%207.39844%209.75%207.21875%209.75%207C9.75%206.78125%209.67969%206.60156%209.53906%206.46094C9.39844%206.32031%209.21875%206.25%209%206.25Z%22%20fill%3D%22%23F79A3E%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">
              {"Calender not connected"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-underline", "text-blue-500")}
            tag="div"
            {...onClickAskToConnectCalender}
          >
            {"Ask to connect calender"}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
