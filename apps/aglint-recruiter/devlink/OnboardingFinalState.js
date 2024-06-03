"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import * as _utils from "./utils";
import _styles from "./OnboardingFinalState.module.css";

export function OnboardingFinalState({
  as: _Component = _Builtin.Block,
  onClickImportJob = {},
  onClickSourceCandidates = {},
  onClickScheduleInterview = {},
  isSourcingVisible = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "onboarding-final-wrap")}
      tag="div"
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons", "mb-9")}
        value="%3Csvg%20width%3D%22100%22%20height%3D%2224%22%20viewBox%3D%220%200%20100%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M18.9052%2010.3994C16.3308%209.75425%2015.0406%209.43767%2014.1505%208.54766C13.2605%207.65168%2012.944%206.36744%2012.2988%203.79299L11.3491%200L10.3994%203.79299C9.75426%206.36744%209.43768%207.65766%208.54767%208.54766C7.65169%209.43767%206.36745%209.75425%203.79299%2010.3994L0%2011.3491L3.79299%2012.2988C6.36745%2012.9439%207.65766%2013.2605%208.54767%2014.1505C9.43768%2015.0465%209.75426%2016.3308%2010.3994%2018.9052L11.3491%2022.6982L12.2988%2018.9052C12.944%2016.3308%2013.2605%2015.0405%2014.1505%2014.1505C15.0465%2013.2605%2016.3308%2012.9439%2018.9052%2012.2988L22.6982%2011.3491L18.9052%2010.3994Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M34.4746%2019.0682C33.6735%2019.0682%2032.9258%2018.9257%2032.2315%2018.6409C31.555%2018.3383%2031.0031%2017.9021%2030.5758%2017.3324C30.1664%2016.7449%2029.9616%2016.015%2029.9616%2015.1427C29.9616%2013.8965%2030.3978%2012.8996%2031.2701%2012.1519C32.1602%2011.4042%2033.4687%2011.0303%2035.1956%2011.0303H38.9341V10.6832C38.9341%209.89986%2038.7116%209.34799%2038.2665%209.02754C37.8393%208.7071%2036.9669%208.54687%2035.6495%208.54687C34.2075%208.54687%2032.8189%208.7694%2031.4838%209.21447V6.67761C32.0712%206.44618%2032.7833%206.25925%2033.6201%206.11683C34.4746%205.95661%2035.4003%205.8765%2036.3972%205.8765C38.3021%205.8765%2039.7708%206.26815%2040.8034%207.05146C41.8537%207.81697%2042.3789%209.05424%2042.3789%2010.7633V18.8011H39.2546L39.0676%2017.6529C38.5692%2018.0979%2037.955%2018.4451%2037.2251%2018.6943C36.4952%2018.9435%2035.5783%2019.0682%2034.4746%2019.0682ZM35.4626%2016.6915C36.2637%2016.6915%2036.958%2016.558%2037.5455%2016.291C38.133%2016.0239%2038.5959%2015.6857%2038.9341%2015.2762V13.2734H35.2757C33.8693%2013.2734%2033.1661%2013.852%2033.1661%2015.0092C33.1661%2016.1307%2033.9316%2016.6915%2035.4626%2016.6915Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M50.8897%2023.501C49.9461%2023.501%2048.9759%2023.4387%2047.979%2023.3141C46.9998%2023.1894%2046.172%2023.0114%2045.4955%2022.78V20.0829C46.2076%2020.3143%2047.0443%2020.4924%2048.0057%2020.617C48.967%2020.7594%2049.866%2020.8306%2050.7027%2020.8306C51.9311%2020.8306%2052.8212%2020.7594%2053.3731%2020.617C53.925%2020.4924%2054.2009%2020.2609%2054.2009%2019.9227C54.2009%2019.6378%2054.0763%2019.442%2053.8271%2019.3352C53.5957%2019.2284%2053.0972%2019.175%2052.3317%2019.175H48.8869C46.626%2019.175%2045.4955%2018.3383%2045.4955%2016.6648C45.4955%2016.1485%2045.6379%2015.6768%2045.9228%2015.2495C46.2076%2014.8223%2046.6616%2014.484%2047.2847%2014.2348C45.8427%2013.5049%2045.1217%2012.2765%2045.1217%2010.5497C45.1217%208.91182%2045.629%207.72796%2046.6438%206.99805C47.6585%206.25035%2049.1628%205.8765%2051.1567%205.8765C51.5662%205.8765%2052.0112%205.9121%2052.4919%205.98331C52.9904%206.03672%2053.3642%206.09013%2053.6135%206.14353H58.3667L58.2866%208.41335H56.2838C56.8357%208.92963%2057.1117%209.65063%2057.1117%2010.5764C57.1117%2011.8759%2056.7022%2012.9174%2055.8833%2013.7007C55.0644%2014.4662%2053.8538%2014.849%2052.2516%2014.849C51.9667%2014.849%2051.6908%2014.8401%2051.4238%2014.8223C51.1745%2014.7867%2050.9164%2014.751%2050.6493%2014.7154C50.1153%2014.7867%2049.6613%2014.9113%2049.2874%2015.0893C48.9314%2015.2673%2048.7534%2015.5077%2048.7534%2015.8103C48.7534%2016.2198%2049.1183%2016.4245%2049.8482%2016.4245H53.4265C54.7083%2016.4245%2055.6964%2016.7182%2056.3907%2017.3057C57.085%2017.8754%2057.4321%2018.7121%2057.4321%2019.8159C57.4321%2021.062%2056.8713%2021.9878%2055.7498%2022.5931C54.6282%2023.1983%2053.0082%2023.501%2050.8897%2023.501ZM51.1834%2012.8195C52.2516%2012.8195%2052.9904%2012.6415%2053.3998%2012.2854C53.8271%2011.9115%2054.0407%2011.2885%2054.0407%2010.4161C54.0407%209.54381%2053.8271%208.91183%2053.3998%208.52017C52.9904%208.12851%2052.2516%207.93269%2051.1834%207.93269C50.1687%207.93269%2049.4388%208.12851%2048.9937%208.52017C48.5486%208.89402%2048.3261%209.52601%2048.3261%2010.4161C48.3261%2011.2351%2048.5308%2011.8403%2048.9403%2012.232C49.3676%2012.6236%2050.1153%2012.8195%2051.1834%2012.8195Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M64.3357%2019.0682C63.1073%2019.0682%2062.2082%2018.7833%2061.6386%2018.2136C61.0867%2017.644%2060.8107%2016.736%2060.8107%2015.4899V0.802779H64.4158V15.1961C64.4158%2015.6412%2064.5048%2015.9527%2064.6828%2016.1307C64.8608%2016.291%2065.119%2016.3711%2065.4572%2016.3711C65.9201%2016.3711%2066.3384%2016.3088%2066.7123%2016.1842V18.6676C66.0358%2018.9346%2065.2436%2019.0682%2064.3357%2019.0682Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M68.974%203.8203V0.989704H72.8994V3.8203H68.974ZM69.2677%2018.8011V8.81391H67.3717L67.6922%206.14353H72.8727V18.8011H69.2677Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M76.2092%2018.8011V6.14353H79.5472L79.6807%207.3452C80.197%206.95355%2080.8468%206.6153%2081.6301%206.33046C82.4312%206.02782%2083.2679%205.8765%2084.1403%205.8765C85.8137%205.8765%2087.0332%206.26815%2087.7987%207.05146C88.5642%207.83477%2088.9469%209.04534%2088.9469%2010.6832V18.8011H85.3419V10.8701C85.3419%2010.0156%2085.1639%209.41029%2084.8079%209.05424C84.4696%208.69819%2083.8287%208.52017%2082.8852%208.52017C82.3333%208.52017%2081.7725%208.64479%2081.2028%208.89402C80.651%209.14326%2080.1881%209.4548%2079.8142%209.82865V18.8011H76.2092Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M97.1694%2019.0682C95.7096%2019.0682%2094.6236%2018.6854%2093.9115%2017.9199C93.2172%2017.1544%2092.8701%2016.1129%2092.8701%2014.7956V8.92073H91.0809V6.14353H92.8701V3.41975L96.4751%202.3516V6.14353H99.6796L99.4659%208.92073H96.4751V14.5552C96.4751%2015.2495%2096.6353%2015.7302%2096.9558%2015.9972C97.2762%2016.2465%2097.7747%2016.3711%2098.4512%2016.3711C98.9497%2016.3711%2099.4659%2016.2821%20100%2016.104V18.5875C99.6083%2018.7477%2099.1811%2018.8634%2098.7182%2018.9346C98.2553%2019.0237%2097.7391%2019.0682%2097.1694%2019.0682Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "flex-vertical", "center", "gap-2")}
        tag="div"
      >
        <Text
          content="Welcome to the Future of Recruiting"
          size="6"
          weight="bold"
          align=""
          highContrast=""
        />
        <Text
          content="Kickstart your hiring journey by choosing your best starting point"
          size="2"
          weight=""
          align=""
          highContrast=""
          color="neutral"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "onboarding-card-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "onboarding-card")}
          tag="div"
          {...onClickImportJob}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "onboarding-icon-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.5%208.25V10.5H22.5V8.25C22.4688%207.78125%2022.2188%207.53125%2021.75%207.5H14.25C13.7812%207.53125%2013.5312%207.78125%2013.5%208.25ZM12%2010.5V8.25C12.0312%207.625%2012.25%207.09375%2012.6562%206.65625C13.0938%206.25%2013.625%206.03125%2014.25%206H21.75C22.375%206.03125%2022.9062%206.25%2023.3438%206.65625C23.75%207.09375%2023.9688%207.625%2024%208.25V10.5H27C27.8438%2010.5312%2028.5469%2010.8281%2029.1094%2011.3906C29.6719%2011.9531%2029.9688%2012.6562%2030%2013.5V25.5C29.9688%2026.3438%2029.6719%2027.0469%2029.1094%2027.6094C28.5469%2028.1719%2027.8438%2028.4688%2027%2028.5H9C8.15625%2028.4688%207.45312%2028.1719%206.89062%2027.6094C6.32812%2027.0469%206.03125%2026.3438%206%2025.5V13.5C6.03125%2012.6562%206.32812%2011.9531%206.89062%2011.3906C7.45312%2010.8281%208.15625%2010.5312%209%2010.5H12ZM23.25%2012H12.75H9C8.5625%2012%208.20312%2012.1406%207.92188%2012.4219C7.64062%2012.7031%207.5%2013.0625%207.5%2013.5V18H14.25H15.75H20.25H21.75H28.5V13.5C28.5%2013.0625%2028.3594%2012.7031%2028.0781%2012.4219C27.7969%2012.1406%2027.4375%2012%2027%2012H23.25ZM28.5%2019.5H21.75V21.75C21.75%2022.1875%2021.6094%2022.5469%2021.3281%2022.8281C21.0469%2023.1094%2020.6875%2023.25%2020.25%2023.25H15.75C15.3125%2023.25%2014.9531%2023.1094%2014.6719%2022.8281C14.3906%2022.5469%2014.25%2022.1875%2014.25%2021.75V19.5H7.5V25.5C7.5%2025.9375%207.64062%2026.2969%207.92188%2026.5781C8.20312%2026.8594%208.5625%2027%209%2027H27C27.4375%2027%2027.7969%2026.8594%2028.0781%2026.5781C28.3594%2026.2969%2028.5%2025.9375%2028.5%2025.5V19.5ZM15.75%2019.5V21.75H20.25V19.5H15.75Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <Text
            content="Create or Import Your Job"
            size="4"
            weight="bold"
            align=""
            highContrast=""
          />
          <Text
            content="Effortlessly create new job from scratch or seamlessly import existing ones from popular ATS platforms like Greenhouse, Lever, and Ashby."
            size="2"
            weight=""
            align=""
            highContrast=""
            color="neutral"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "onboarding-arrow-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.3984%208.60156C12.6172%208.86719%2012.6172%209.13281%2012.3984%209.39844L7.89844%2013.8984C7.63281%2014.1172%207.36719%2014.1172%207.10156%2013.8984C6.88281%2013.6328%206.88281%2013.3672%207.10156%2013.1016L11.2031%209L7.10156%204.89844C6.88281%204.63281%206.88281%204.36719%207.10156%204.10156C7.36719%203.88281%207.63281%203.88281%207.89844%204.10156L12.3984%208.60156Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        {isSourcingVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "onboarding-card")}
            tag="div"
            {...onClickSourceCandidates}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "onboarding-icon-wrap")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M27%209.75C27%209.71875%2026.9062%209.60938%2026.7188%209.42188C26.375%209.14062%2025.7812%208.84375%2024.9375%208.53125C23.1562%207.875%2020.8438%207.53125%2018%207.5C15.1562%207.53125%2012.8438%207.875%2011.0625%208.53125C10.2188%208.84375%209.625%209.14062%209.28125%209.42188C9.09375%209.60938%209%209.71875%209%209.75V14.5312C9.6875%2015.0312%2010.7656%2015.4688%2012.2344%2015.8438C13.8906%2016.2812%2015.8125%2016.5%2018%2016.5C20.1875%2016.5%2022.1094%2016.2812%2023.7656%2015.8438C25.2344%2015.4688%2026.3125%2015.0312%2027%2014.5312V9.75ZM27%2016.3125C26.1875%2016.7188%2025.2344%2017.0625%2024.1406%2017.3438C22.3281%2017.7812%2020.2812%2018%2018%2018C15.7188%2018%2013.6719%2017.7656%2011.8594%2017.2969C10.7656%2017.0469%209.8125%2016.7188%209%2016.3125V20.5312C9.6875%2021.0625%2010.7656%2021.5%2012.2344%2021.8438C13.8906%2022.2812%2015.8125%2022.5%2018%2022.5C20.1875%2022.5%2022.1094%2022.2812%2023.7656%2021.8438C25.2344%2021.4688%2026.3125%2021.0312%2027%2020.5312V16.3125ZM9%2026.25C9%2026.2812%209.09375%2026.3906%209.28125%2026.5781C9.625%2026.8594%2010.2188%2027.1562%2011.0625%2027.4688C12.8438%2028.125%2015.1562%2028.4688%2018%2028.5C20.8438%2028.4688%2023.1562%2028.125%2024.9375%2027.4688C25.7812%2027.1562%2026.375%2026.8594%2026.7188%2026.5781C26.9062%2026.3906%2027%2026.2812%2027%2026.25V22.3125C26.1875%2022.7188%2025.2344%2023.0625%2024.1406%2023.3438C22.3281%2023.7812%2020.2812%2024%2018%2024C15.7188%2024%2013.6719%2023.7812%2011.8594%2023.3438C10.7656%2023.0625%209.8125%2022.7188%209%2022.3125V26.25ZM9%209.79688C9%209.76562%209%209.76562%209%209.79688V9.79688ZM28.5%2026.25C28.4375%2027.3125%2027.4062%2028.2031%2025.4062%2028.9219C23.4375%2029.6094%2020.9688%2029.9688%2018%2030C15.0312%2029.9688%2012.5625%2029.6094%2010.5938%2028.9219C8.59375%2028.2031%207.5625%2027.3125%207.5%2026.25V9.75C7.5625%208.6875%208.59375%207.79687%2010.5938%207.07812C12.5625%206.39062%2015.0312%206.03125%2018%206C20.9688%206.03125%2023.4375%206.39062%2025.4062%207.07812C27.4062%207.79687%2028.4375%208.6875%2028.5%209.75V26.25Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <Text
              content="Source Candidates"
              size="4"
              weight="bold"
              align=""
              highContrast=""
            />
            <Text
              content="Effortlessly explore diverse candidates, build custom lists, seamlessly reach out via email, and efficiently streamline your hiring process."
              size="2"
              weight=""
              align=""
              highContrast=""
              color="neutral"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "onboarding-arrow-wrap")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.3984%208.60156C12.6172%208.86719%2012.6172%209.13281%2012.3984%209.39844L7.89844%2013.8984C7.63281%2014.1172%207.36719%2014.1172%207.10156%2013.8984C6.88281%2013.6328%206.88281%2013.3672%207.10156%2013.1016L11.2031%209L7.10156%204.89844C6.88281%204.63281%206.88281%204.36719%207.10156%204.10156C7.36719%203.88281%207.63281%203.88281%207.89844%204.10156L12.3984%208.60156Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "onboarding-card")}
          tag="div"
          {...onClickScheduleInterview}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "onboarding-icon-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M27%209.75C27%209.71875%2026.9062%209.60938%2026.7188%209.42188C26.375%209.14062%2025.7812%208.84375%2024.9375%208.53125C23.1562%207.875%2020.8438%207.53125%2018%207.5C15.1562%207.53125%2012.8438%207.875%2011.0625%208.53125C10.2188%208.84375%209.625%209.14062%209.28125%209.42188C9.09375%209.60938%209%209.71875%209%209.75V14.5312C9.6875%2015.0312%2010.7656%2015.4688%2012.2344%2015.8438C13.8906%2016.2812%2015.8125%2016.5%2018%2016.5C20.1875%2016.5%2022.1094%2016.2812%2023.7656%2015.8438C25.2344%2015.4688%2026.3125%2015.0312%2027%2014.5312V9.75ZM27%2016.3125C26.1875%2016.7188%2025.2344%2017.0625%2024.1406%2017.3438C22.3281%2017.7812%2020.2812%2018%2018%2018C15.7188%2018%2013.6719%2017.7656%2011.8594%2017.2969C10.7656%2017.0469%209.8125%2016.7188%209%2016.3125V20.5312C9.6875%2021.0625%2010.7656%2021.5%2012.2344%2021.8438C13.8906%2022.2812%2015.8125%2022.5%2018%2022.5C20.1875%2022.5%2022.1094%2022.2812%2023.7656%2021.8438C25.2344%2021.4688%2026.3125%2021.0312%2027%2020.5312V16.3125ZM9%2026.25C9%2026.2812%209.09375%2026.3906%209.28125%2026.5781C9.625%2026.8594%2010.2188%2027.1562%2011.0625%2027.4688C12.8438%2028.125%2015.1562%2028.4688%2018%2028.5C20.8438%2028.4688%2023.1562%2028.125%2024.9375%2027.4688C25.7812%2027.1562%2026.375%2026.8594%2026.7188%2026.5781C26.9062%2026.3906%2027%2026.2812%2027%2026.25V22.3125C26.1875%2022.7188%2025.2344%2023.0625%2024.1406%2023.3438C22.3281%2023.7812%2020.2812%2024%2018%2024C15.7188%2024%2013.6719%2023.7812%2011.8594%2023.3438C10.7656%2023.0625%209.8125%2022.7188%209%2022.3125V26.25ZM9%209.79688C9%209.76562%209%209.76562%209%209.79688V9.79688ZM28.5%2026.25C28.4375%2027.3125%2027.4062%2028.2031%2025.4062%2028.9219C23.4375%2029.6094%2020.9688%2029.9688%2018%2030C15.0312%2029.9688%2012.5625%2029.6094%2010.5938%2028.9219C8.59375%2028.2031%207.5625%2027.3125%207.5%2026.25V9.75C7.5625%208.6875%208.59375%207.79687%2010.5938%207.07812C12.5625%206.39062%2015.0312%206.03125%2018%206C20.9688%206.03125%2023.4375%206.39062%2025.4062%207.07812C27.4062%207.79687%2028.4375%208.6875%2028.5%209.75V26.25Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <Text
            content="Schedule Interview"
            size="4"
            weight="bold"
            align=""
            highContrast=""
          />
          <Text
            content="Efficiently schedule candidate interviews by optimizing availability for all parties involved. Easily coordinate schedules in one centralized place."
            size="2"
            weight=""
            align=""
            highContrast=""
            color="neutral"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "onboarding-arrow-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.3984%208.60156C12.6172%208.86719%2012.6172%209.13281%2012.3984%209.39844L7.89844%2013.8984C7.63281%2014.1172%207.36719%2014.1172%207.10156%2013.8984C6.88281%2013.6328%206.88281%2013.3672%207.10156%2013.1016L11.2031%209L7.10156%204.89844C6.88281%204.63281%206.88281%204.36719%207.10156%204.10156C7.36719%203.88281%207.63281%203.88281%207.89844%204.10156L12.3984%208.60156Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
