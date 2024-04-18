"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CandidateCalender } from "./CandidateCalender";
import * as _utils from "./utils";
import _styles from "./CandidateConfirmationPage.module.css";

export function CandidateConfirmationPage({
  as: _Component = _Builtin.Block,
  slotCandidateCalender,
  onClickView = {},
  textTitle = "Select a date and time that works best for you.",
  slotCompanyLogo,
  slotProceedButton,
}) {
  return (
    <_Component className={_utils.cx(_styles, "candidate_page")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "title_block")} tag="div">
        <_Builtin.Block tag="div">
          {slotCompanyLogo ?? (
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%22101%22%20height%3D%2268%22%20viewBox%3D%220%200%20101%2068%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M64.6985%2032.8766C64.6985%2049.8991%2050.899%2063.6985%2033.8765%2063.6985C16.8542%2063.6985%203.05469%2049.8991%203.05469%2032.8766C3.05469%2015.8541%2016.8542%202.05469%2033.8765%202.05469C50.899%202.05469%2064.6985%2015.8541%2064.6985%2032.8766Z%22%20fill%3D%22%2368DBFF%22%2F%3E%0A%3Cpath%20d%3D%22M97.9458%2032.8766C97.9458%2049.8991%2084.2815%2063.6985%2067.426%2063.6985C50.5705%2063.6985%2036.9062%2049.8991%2036.9062%2032.8766C36.9062%2015.8541%2050.5705%202.05469%2067.426%202.05469C84.2815%202.05469%2097.9458%2015.8541%2097.9458%2032.8766Z%22%20fill%3D%22%23FF7917%22%2F%3E%0A%3Cpath%20d%3D%22M50.7378%2058.6909C59.1493%2053.1872%2064.7064%2043.683%2064.7064%2032.8805C64.7064%2022.0783%2059.1493%2012.5739%2050.7378%207.07031C42.4089%2012.5739%2036.9062%2022.0783%2036.9062%2032.8805C36.9062%2043.683%2042.4089%2053.1872%2050.7378%2058.6909Z%22%20fill%3D%22%235D2C02%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          )}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg", "fw-semibold")}
          tag="div"
        >
          {textTitle}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey-600", "max-width-500")}
          tag="div"
        >
          {
            "Available slots are organized by day. Each slot includes the total time required for your interview, including breaks."
          }
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-link")}
          tag="div"
          {...onClickView}
        >
          {"View Schedule details"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate_calender_slot")}
          tag="div"
        >
          {slotCandidateCalender ?? <CandidateCalender />}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "copyright_block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-944")}
          tag="div"
        >
          <_Builtin.Block tag="div">{"Powered By"}</_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%2280%22%20height%3D%2219%22%20viewBox%3D%220%200%2080%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.7421%208.65936C13.5984%208.12219%2012.5241%207.85858%2011.783%207.11749C11.0419%206.37142%2010.7783%205.30206%2010.2411%203.15835L9.45025%200L8.65941%203.15835C8.12224%205.30206%207.85863%206.37639%207.11753%207.11749C6.37146%207.85858%205.30209%208.12219%203.15837%208.65936L0%209.4502L3.15837%2010.241C5.30209%2010.7782%206.37643%2011.0418%207.11753%2011.7829C7.85863%2012.529%208.12224%2013.5983%208.65941%2015.742L9.45025%2018.9004L10.2411%2015.742C10.7783%2013.5983%2011.0419%2012.524%2011.783%2011.7829C12.529%2011.0418%2013.5984%2010.7782%2015.7421%2010.241L18.9005%209.4502L15.7421%208.65936Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M25.4376%2015.2093C24.7705%2015.2093%2024.1479%2015.0907%2023.5697%2014.8535C23.0064%2014.6015%2022.5469%2014.2383%2022.1911%2013.7639C21.8502%2013.2747%2021.6797%2012.667%2021.6797%2011.9406C21.6797%2010.9029%2022.0429%2010.0728%2022.7692%209.4502C23.5104%208.82759%2024.6%208.51629%2026.0379%208.51629H29.1509V8.22723C29.1509%207.57498%2028.9656%207.11544%2028.595%206.84861C28.2393%206.58178%2027.5129%206.44837%2026.4159%206.44837C25.2152%206.44837%2024.0589%206.63367%2022.9471%207.00426V4.89187C23.4363%204.69916%2024.0293%204.54351%2024.726%204.42491C25.4376%204.2915%2026.2084%204.22479%2027.0385%204.22479C28.6247%204.22479%2029.8477%204.55092%2030.7075%205.20317C31.5821%205.84059%2032.0194%206.87085%2032.0194%208.29394V14.9869H29.4178L29.2621%2014.0308C28.8471%2014.4014%2028.3356%2014.6904%2027.7278%2014.898C27.1201%2015.1055%2026.3566%2015.2093%2025.4376%2015.2093ZM26.2603%2013.2303C26.9274%2013.2303%2027.5055%2013.1191%2027.9947%2012.8967C28.4839%2012.6744%2028.8693%2012.3927%2029.1509%2012.0518V10.3841H26.1046C24.9335%2010.3841%2024.348%2010.8659%2024.348%2011.8294C24.348%2012.7633%2024.9854%2013.2303%2026.2603%2013.2303Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M39.1062%2018.9004C38.3205%2018.9004%2037.5126%2018.8485%2036.6825%2018.7447C35.8672%2018.641%2035.1779%2018.4927%2034.6145%2018.3V16.0542C35.2075%2016.2469%2035.9042%2016.3952%2036.7047%2016.4989C37.5052%2016.6175%2038.2538%2016.6768%2038.9505%2016.6768C39.9734%2016.6768%2040.7146%2016.6175%2041.1741%2016.4989C41.6337%2016.3952%2041.8634%2016.2025%2041.8634%2015.9208C41.8634%2015.6836%2041.7597%2015.5206%2041.5521%2015.4316C41.3594%2015.3427%2040.9444%2015.2982%2040.3069%2015.2982H37.4385C35.5559%2015.2982%2034.6145%2014.6015%2034.6145%2013.208C34.6145%2012.7781%2034.7331%2012.3853%2034.9703%2012.0295C35.2075%2011.6738%2035.5855%2011.3921%2036.1043%2011.1846C34.9036%2010.5768%2034.3032%209.55396%2034.3032%208.11605C34.3032%206.75226%2034.7257%205.76647%2035.5707%205.15869C36.4156%204.53609%2037.6683%204.22479%2039.3285%204.22479C39.6695%204.22479%2040.0401%204.25444%2040.4403%204.31374C40.8554%204.35821%2041.1667%204.40268%2041.3742%204.44715H45.3322L45.2655%206.33719H43.5978C44.0574%206.76708%2044.2871%207.36745%2044.2871%208.13829C44.2871%209.22043%2043.9462%2010.0876%2043.2643%2010.7399C42.5824%2011.3773%2041.5744%2011.696%2040.2402%2011.696C40.003%2011.696%2039.7733%2011.6886%2039.5509%2011.6738C39.3434%2011.6441%2039.1284%2011.6145%2038.9061%2011.5848C38.4613%2011.6441%2038.0833%2011.7479%2037.772%2011.8961C37.4756%2012.0444%2037.3273%2012.2445%2037.3273%2012.4965C37.3273%2012.8374%2037.6312%2013.0079%2038.239%2013.0079H41.2186C42.2859%2013.0079%2043.1087%2013.2525%2043.6868%2013.7417C44.2649%2014.2161%2044.554%2014.9128%2044.554%2015.8319C44.554%2016.8695%2044.087%2017.6404%2043.1531%2018.1444C42.2192%2018.6484%2040.8702%2018.9004%2039.1062%2018.9004ZM39.3508%2010.0061C40.2402%2010.0061%2040.8554%209.85785%2041.1964%209.56137C41.5521%209.25007%2041.73%208.73124%2041.73%208.00487C41.73%207.2785%2041.5521%206.75226%2041.1964%206.42613C40.8554%206.10001%2040.2402%205.93695%2039.3508%205.93695C38.5058%205.93695%2037.898%206.10001%2037.5274%206.42613C37.1568%206.73743%2036.9715%207.26368%2036.9715%208.00487C36.9715%208.68677%2037.142%209.19078%2037.483%209.5169C37.8387%209.84303%2038.4613%2010.0061%2039.3508%2010.0061Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M50.3025%2015.2093C49.2796%2015.2093%2048.531%2014.9721%2048.0567%2014.4977C47.5971%2014.0233%2047.3673%2013.2673%2047.3673%2012.2297V0H50.3692V11.9851C50.3692%2012.3557%2050.4433%2012.6151%2050.5915%2012.7633C50.7398%2012.8967%2050.9547%2012.9634%2051.2364%2012.9634C51.6218%2012.9634%2051.9702%2012.9116%2052.2815%2012.8078V14.8757C51.7182%2015.0981%2051.0585%2015.2093%2050.3025%2015.2093Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M54.1647%202.51264V0.15565H57.4334V2.51264H54.1647ZM54.4093%2014.9869V6.67073H52.8306L53.0974%204.44715H57.4112V14.9869H54.4093Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M60.1895%2014.9869V4.44715H62.9689L63.0801%205.44776C63.51%205.12163%2064.0511%204.83998%2064.7033%204.6028C65.3704%204.3508%2066.0671%204.22479%2066.7935%204.22479C68.187%204.22479%2069.2024%204.55092%2069.8398%205.20317C70.4773%205.85541%2070.796%206.86344%2070.796%208.22723V14.9869H67.7941V8.38288C67.7941%207.67133%2067.6459%207.16732%2067.3494%206.87085C67.0677%206.57437%2066.5341%206.42613%2065.7484%206.42613C65.2889%206.42613%2064.8219%206.5299%2064.3476%206.73743C63.888%206.94497%2063.5026%207.20438%2063.1913%207.51569V14.9869H60.1895Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M77.6427%2015.2093C76.4271%2015.2093%2075.5229%2014.8905%2074.9299%2014.2531C74.3518%2013.6157%2074.0627%2012.7485%2074.0627%2011.6515V6.75967H72.5729V4.44715H74.0627V2.1791L77.0646%201.28967V4.44715H79.7329L79.555%206.75967H77.0646V11.4514C77.0646%2012.0295%2077.198%2012.4298%2077.4648%2012.6521C77.7317%2012.8597%2078.1467%2012.9634%2078.71%2012.9634C79.1251%2012.9634%2079.555%2012.8893%2079.9997%2012.7411V14.809C79.6736%2014.9424%2079.3178%2015.0388%2078.9324%2015.0981C78.547%2015.1722%2078.1171%2015.2093%2077.6427%2015.2093Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey-600")}
          tag="div"
        >
          {"© 2024 Aglint Inc. All Rights Reserved"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
