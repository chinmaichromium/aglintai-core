"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import * as _utils from "./utils";
import _styles from "./PwResetConfirm.module.css";

export function PwResetConfirm({
  as: _Component = _Builtin.Block,
  onclickBack = {},
  onclickReset = {},

  contactLink = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "sl-main-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "sl-login-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sl-login-main-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "sl-logo-block")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "svg-icon")}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22120%22%20height%3D%2229%22%20viewbox%3D%220%200%20120%2029%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M22.6863%2012.4792C19.5969%2011.7051%2018.0487%2011.3252%2016.9807%2010.2572C15.9126%209.18202%2015.5327%207.64093%2014.7586%204.55159L13.6189%200L12.4792%204.55159C11.7051%207.64093%2011.3252%209.18919%2010.2572%2010.2572C9.18202%2011.3252%207.64093%2011.7051%204.55159%2012.4792L0%2013.6189L4.55159%2014.7586C7.64093%2015.5327%209.18919%2015.9126%2010.2572%2016.9806C11.3252%2018.0558%2011.7051%2019.5969%2012.4792%2022.6863L13.6189%2027.2378L14.7586%2022.6863C15.5327%2019.5969%2015.9126%2018.0487%2016.9807%2016.9806C18.0558%2015.9126%2019.5969%2015.5327%2022.6863%2014.7586L27.2379%2013.6189L22.6863%2012.4792Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M41.3695%2022.8818C40.4082%2022.8818%2039.5109%2022.7109%2038.6777%2022.3691C37.866%2022.0059%2037.2037%2021.4825%2036.691%2020.7989C36.1996%2020.0939%2035.954%2019.218%2035.954%2018.1712C35.954%2016.6758%2036.4774%2015.4795%2037.5241%2014.5823C38.5923%2013.685%2040.1625%2013.2364%2042.2347%2013.2364H46.7209V12.8198C46.7209%2011.8798%2046.4539%2011.2176%2045.9198%2010.833C45.4071%2010.4485%2044.3603%2010.2562%2042.7794%2010.2562C41.049%2010.2562%2039.3827%2010.5233%2037.7805%2011.0574V8.01313C38.4855%207.73541%2039.34%207.5111%2040.3441%207.3402C41.3695%207.14793%2042.4804%207.05179%2043.6767%207.05179C45.9625%207.05179%2047.725%207.52178%2048.964%208.46175C50.2245%209.38036%2050.8547%2010.8651%2050.8547%2012.9159V22.5613H47.1055L46.8811%2021.1834C46.283%2021.7175%2045.546%2022.1341%2044.6701%2022.4332C43.7942%2022.7323%2042.694%2022.8818%2041.3695%2022.8818ZM42.5551%2020.0298C43.5165%2020.0298%2044.3496%2019.8696%2045.0546%2019.5492C45.7596%2019.2287%2046.315%2018.8228%2046.7209%2018.3315V15.9281H42.3308C40.6432%2015.9281%2039.7993%2016.6224%2039.7993%2018.011C39.7993%2019.3569%2040.7179%2020.0298%2042.5551%2020.0298Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M61.0676%2028.2012C59.9354%2028.2012%2058.7711%2028.1264%2057.5748%2027.9769C56.3998%2027.8273%2055.4064%2027.6137%2054.5946%2027.336V24.0995C55.4491%2024.3772%2056.4532%2024.5908%2057.6068%2024.7404C58.7604%2024.9113%2059.8392%2024.9967%2060.8433%2024.9967C62.3173%2024.9967%2063.3855%2024.9113%2064.0478%2024.7404C64.71%2024.5908%2065.0411%2024.3131%2065.0411%2023.9072C65.0411%2023.5654%2064.8916%2023.3304%2064.5925%2023.2022C64.3148%2023.0741%2063.7166%2023.01%2062.798%2023.01H58.6643C55.9512%2023.01%2054.5946%2022.0059%2054.5946%2019.9978C54.5946%2019.3783%2054.7655%2018.8121%2055.1073%2018.2994C55.4491%2017.7867%2055.9939%2017.3808%2056.7416%2017.0817C55.0112%2016.2059%2054.146%2014.7318%2054.146%2012.6596C54.146%2010.6942%2054.7548%209.27355%2055.9725%208.39767C57.1902%207.50042%2058.9954%207.05179%2061.3881%207.05179C61.8794%207.05179%2062.4135%207.09452%2062.9903%207.17997C63.5884%207.24406%2064.0371%207.30815%2064.3362%207.37224H70.0401L69.944%2010.096H67.5406C68.2029%2010.7156%2068.534%2011.5808%2068.534%2012.6916C68.534%2014.2511%2068.0426%2015.5009%2067.0599%2016.4408C66.0772%2017.3595%2064.6246%2017.8188%2062.7019%2017.8188C62.3601%2017.8188%2062.0289%2017.8081%2061.7085%2017.7867C61.4094%2017.744%2061.0997%2017.7013%2060.7792%2017.6585C60.1383%2017.744%2059.5936%2017.8935%2059.1449%2018.1072C58.7177%2018.3208%2058.504%2018.6092%2058.504%2018.9724C58.504%2019.4637%2058.942%2019.7094%2059.8179%2019.7094H64.1118C65.65%2019.7094%2066.8356%2020.0619%2067.6688%2020.7669C68.5019%2021.4505%2068.9185%2022.4545%2068.9185%2023.779C68.9185%2025.2745%2068.2456%2026.3853%2066.8997%2027.1117C65.5538%2027.838%2063.6098%2028.2012%2061.0676%2028.2012ZM61.4201%2015.3834C62.7019%2015.3834%2063.5884%2015.1697%2064.0798%2014.7425C64.5925%2014.2939%2064.8489%2013.5462%2064.8489%2012.4994C64.8489%2011.4526%2064.5925%2010.6942%2064.0798%2010.2242C63.5884%209.75422%2062.7019%209.51922%2061.4201%209.51922C60.2024%209.51922%2059.3265%209.75422%2058.7925%2010.2242C58.2584%2010.6728%2057.9913%2011.4312%2057.9913%2012.4994C57.9913%2013.4821%2058.237%2014.2084%2058.7284%2014.6784C59.2411%2015.1484%2060.1383%2015.3834%2061.4201%2015.3834Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M77.2028%2022.8818C75.7287%2022.8818%2074.6499%2022.54%2073.9663%2021.8564C73.304%2021.1728%2072.9729%2020.0832%2072.9729%2018.5878V0.963335H77.2989V18.2353C77.2989%2018.7694%2077.4057%2019.1433%2077.6194%2019.3569C77.833%2019.5492%2078.1428%2019.6453%2078.5487%2019.6453C79.1041%2019.6453%2079.6061%2019.5705%2080.0547%2019.421V22.4011C79.243%2022.7216%2078.2923%2022.8818%2077.2028%2022.8818Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M82.7688%204.58437V1.18765H87.4793V4.58437H82.7688ZM83.1213%2022.5613V10.5767H80.8461L81.2306%207.37224H87.4473V22.5613H83.1213Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M91.4511%2022.5613V7.37224H95.4567L95.6169%208.81424C96.2364%208.34426%2097.0162%207.93836%2097.9561%207.59655C98.9175%207.23338%2099.9215%207.05179%20100.968%207.05179C102.976%207.05179%20104.44%207.52178%20105.358%208.46175C106.277%209.40173%20106.736%2010.8544%20106.736%2012.8198V22.5613H102.41V13.0441C102.41%2012.0187%20102.197%2011.2924%20101.769%2010.8651C101.364%2010.4378%20100.594%2010.2242%2099.4622%2010.2242C98.8%2010.2242%2098.127%2010.3737%2097.4434%2010.6728C96.7812%2010.9719%2096.2257%2011.3458%2095.7771%2011.7944V22.5613H91.4511Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M116.603%2022.8818C114.852%2022.8818%20113.548%2022.4225%20112.694%2021.5039C111.861%2020.5853%20111.444%2019.3355%20111.444%2017.7547V10.7049H109.297V7.37224H111.444V4.1037L115.77%202.82192V7.37224H119.615L119.359%2010.7049H115.77V17.4663C115.77%2018.2994%20115.962%2018.8762%20116.347%2019.1967C116.731%2019.4958%20117.33%2019.6453%20118.141%2019.6453C118.74%2019.6453%20119.359%2019.5385%20120%2019.3249V22.305C119.53%2022.4973%20119.017%2022.6361%20118.462%2022.7216C117.906%2022.8284%20117.287%2022.8818%20116.603%2022.8818Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sl-login-header-block", "gap-12")}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "svg-icon")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2294%22%20height%3D%2284%22%20viewbox%3D%220%200%2094%2084%22%20fill%3D%22none%22%3E%0A%20%20%3Cg%20clip-path%3D%22url(%23clip0_4954_14303)%22%3E%0A%20%20%20%20%3Cmask%20id%3D%22mask0_4954_14303%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M100%200H0V100H100V0Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%3C%2Fmask%3E%0A%20%20%20%20%3Cg%20mask%3D%22url(%23mask0_4954_14303)%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M79.1921%2023.9036L82.6094%2062.9633C82.8457%2065.6641%2080.7261%2068.0556%2077.8756%2068.305L21.1891%2073.2644C18.3383%2073.5138%2015.8357%2071.5267%2015.5994%2068.8259L12.1821%2029.7662L40.1551%202.73234C42.1495%201.05363%2045.0551%200.799425%2047.3105%202.10632L79.1921%2023.9036Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M79.1921%2023.9036L82.6094%2062.9633C82.8457%2065.6641%2080.7261%2068.0556%2077.8756%2068.305L21.1891%2073.2644C18.3383%2073.5138%2015.8357%2071.5267%2015.5994%2068.8259L12.1821%2029.7662L40.1551%202.73234C42.1495%201.05363%2045.0551%200.799425%2047.3105%202.10633L79.1921%2023.9036Z%22%20stroke%3D%22%23221F1F%22%20stroke-width%3D%221.0274%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M70.8045%2050.0787L24.6571%2054.1161C21.8445%2054.3621%2019.3544%2052.1617%2019.0954%2049.201L16.6741%2022.0625C16.4151%2019.1017%2018.4852%2016.5022%2021.2979%2016.2561L67.4452%2012.2187C70.2579%2011.9727%2072.7481%2014.1732%2073.0071%2017.134L75.4284%2044.2725C75.6874%2047.2332%2073.6171%2049.8326%2070.8045%2050.0787Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M70.8045%2050.0787L24.6571%2054.1161C21.8445%2054.3621%2019.3544%2052.1617%2019.0954%2049.201L16.6741%2022.0625C16.4151%2019.1017%2018.4852%2016.5022%2021.2979%2016.2561L67.4452%2012.2187C70.2579%2011.9727%2072.7481%2014.1732%2073.0071%2017.134L75.4284%2044.2725C75.6874%2047.2332%2073.6171%2049.8326%2070.8045%2050.0787Z%22%20stroke%3D%22%23221F1F%22%20stroke-width%3D%221.08298%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M21.1593%2073.1275L21.8135%2073.0702L46.956%2052.3086L12.8879%2029.4057C12.5529%2029.2036%2012.1434%2029.4787%2012.1787%2029.882L15.5223%2068.1457C15.7848%2071.1465%2018.3086%2073.3769%2021.1593%2073.1275Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M21.1593%2073.1275L21.8135%2073.0702L46.956%2052.3086L12.8879%2029.4057C12.5529%2029.2036%2012.1434%2029.4787%2012.1787%2029.882L15.5223%2068.1457C15.7848%2071.1465%2018.3086%2073.3769%2021.1593%2073.1275Z%22%20stroke%3D%22%23221F1F%22%20stroke-width%3D%221.08298%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M77.8459%2068.1681L77.1915%2068.2254L48.8256%2052.1451L78.4105%2023.7466C78.7054%2023.4893%2079.1566%2023.6891%2079.1918%2024.0924L82.5322%2062.2832C82.7948%2065.284%2080.6966%2067.9187%2077.8459%2068.1681Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M77.8459%2068.1681L77.1915%2068.2254L48.8256%2052.1451L78.4105%2023.7466C78.7054%2023.4893%2079.1566%2023.6891%2079.1918%2024.0924L82.5322%2062.2832C82.7948%2065.284%2080.6966%2067.9187%2077.8459%2068.1681Z%22%20stroke%3D%22%23221F1F%22%20stroke-width%3D%221.08298%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M20.0342%2072.878C19.9458%2072.9603%2019.9951%2073.114%2020.1131%2073.1265C20.4251%2073.1598%2020.7441%2073.1641%2021.0674%2073.1358L77.7539%2068.1763C78.0773%2068.148%2078.3905%2068.0885%2078.6919%2068.0015C78.806%2067.9687%2078.8278%2067.8088%2078.7267%2067.7431L51.4206%2045.9567C48.929%2043.9689%2045.4291%2044.2693%2043.3134%2046.6526L20.0342%2072.878Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M20.0342%2072.878C19.9458%2072.9603%2019.9951%2073.114%2020.1131%2073.1265C20.4251%2073.1598%2020.7441%2073.1641%2021.0674%2073.1358L77.7539%2068.1763C78.0773%2068.148%2078.3905%2068.0885%2078.6919%2068.0015C78.806%2067.9687%2078.8278%2067.8088%2078.7267%2067.7431L51.4206%2045.9567C48.929%2043.9689%2045.4291%2044.2693%2043.3134%2046.6526L20.0342%2072.878Z%22%20stroke%3D%22%23221F1F%22%20stroke-width%3D%221.08298%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3Cclippath%20id%3D%22clip0_4954_14303%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%2294%22%20height%3D%2284%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%3C%2Fclippath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <Text
              size="6"
              weight="medium"
              color=""
              content="Forgot Password"
              align="center"
            />
            <Text
              size="2"
              weight=""
              color=""
              content="We have sent an password reset link to your email."
              align="center"
              highContrast=""
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sl-login-form")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sl-buttons-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "sl-button")}
                tag="div"
                {...onclickBack}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-color-white")}
                  tag="div"
                >
                  {"Back to login"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-385")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-gray-600")}
          tag="div"
        >
          {"Need help? "}
          <_Builtin.Link
            className={_utils.cx(_styles, "sl-link")}
            button={false}
            block=""
            options={contactLink}
          >
            {"Contact Support"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
