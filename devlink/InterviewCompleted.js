import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InterviewCompleted.module.css";

export function InterviewCompleted({
  as: _Component = _Builtin.Block,
  slotLottie,
  slotCompanyLogo,
  onClickSupport = {},
  textTitle = "Completed Interview Successfully.",
  textDescription = "Thank you for taking your time to take this interview. We will be in touch with you soon. If you have any questions please ",
  propsTextColor = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-499")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "int-completed-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "int-completed-block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "int-completed-logo-block")}
            tag="div"
          >
            {slotCompanyLogo}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "int-completed-main-block")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "int-completed-lottie-block")}
              tag="div"
            >
              {slotLottie}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "int-completed-main-content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-lg",
                  "fw-semibold",
                  "text-green-600"
                )}
                tag="div"
                {...propsTextColor}
              >
                {textTitle}
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-grey-600-3",
                    "inline-block"
                  )}
                  tag="div"
                >
                  {textDescription}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-blue-500-2",
                    "text-underline",
                    "inline-block"
                  )}
                  tag="div"
                  {...onClickSupport}
                >
                  {"contact support"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "int-completed-bottom",
              "fixed-bottom"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xsm-2", "text-grey-600")}
              tag="div"
            >
              {"Powered by"}
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-embed")}
                value="%3Csvg%20width%3D%2272%22%20height%3D%2218%22%20viewBox%3D%220%200%2072%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5203%207.9098C12.6063%207.43018%2011.647%207.19481%2010.9854%206.53312C10.3237%205.86699%2010.0883%204.9122%209.60867%202.99818L8.90257%200.178223L8.19646%202.99818C7.71684%204.9122%207.48148%205.87143%206.81978%206.53312C6.15364%207.19481%205.19885%207.43018%203.28482%207.9098L0.464844%208.6159L3.28482%209.322C5.19885%209.80161%206.15809%2010.037%206.81978%2010.6987C7.48148%2011.3648%207.71684%2012.3196%208.19646%2014.2336L8.90257%2017.0536L9.60867%2014.2336C10.0883%2012.3196%2010.3237%2011.3604%2010.9854%2010.6987C11.6515%2010.037%2012.6063%209.80161%2014.5203%209.322L17.3403%208.6159L14.5203%207.9098Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M23.1775%2013.7579C22.5819%2013.7579%2022.026%2013.652%2021.5098%2013.4403C21.0069%2013.2153%2020.5966%2012.891%2020.2789%2012.4674C19.9745%2012.0307%2019.8223%2011.488%2019.8223%2010.8395C19.8223%209.91298%2020.1465%209.17179%2020.7951%208.6159C21.4569%208.06%2022.4297%207.78206%2023.7135%207.78206H26.493V7.52396C26.493%206.9416%2026.3276%206.5313%2025.9967%206.29306C25.679%206.05482%2025.0305%205.9357%2024.0511%205.9357C22.979%205.9357%2021.9466%206.10114%2020.9539%206.43203V4.54596C21.3907%204.3739%2021.9201%204.23492%2022.5422%204.12904C23.1775%204.00992%2023.8658%203.95036%2024.607%203.95036C26.0232%203.95036%2027.1151%204.24154%2027.8828%204.82391C28.6637%205.39304%2029.0541%206.31291%2029.0541%207.58352V13.5594H26.7313L26.5923%2012.7057C26.2217%2013.0366%2025.7651%2013.2947%2025.2224%2013.48C24.6797%2013.6653%2023.9981%2013.7579%2023.1775%2013.7579ZM23.9121%2011.991C24.5077%2011.991%2025.0239%2011.8917%2025.4606%2011.6932C25.8974%2011.4946%2026.2416%2011.2432%2026.493%2010.9387V9.44974H23.7731C22.7275%209.44974%2022.2047%209.87989%2022.2047%2010.7402C22.2047%2011.574%2022.7738%2011.991%2023.9121%2011.991Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M35.3816%2017.0536C34.6802%2017.0536%2033.9588%2017.0072%2033.2176%2016.9146C32.4897%2016.822%2031.8742%2016.6896%2031.3712%2016.5175V14.5123C31.9007%2014.6844%2032.5227%2014.8168%2033.2375%2014.9094C33.9522%2015.0153%2034.6206%2015.0682%2035.2427%2015.0682C36.1559%2015.0682%2036.8177%2015.0153%2037.228%2014.9094C37.6383%2014.8168%2037.8435%2014.6447%2037.8435%2014.3932C37.8435%2014.1815%2037.7508%2014.0359%2037.5655%2013.9564C37.3935%2013.877%2037.0229%2013.8373%2036.4537%2013.8373H33.8926C32.2117%2013.8373%2031.3712%2013.2153%2031.3712%2011.9711C31.3712%2011.5873%2031.4771%2011.2365%2031.6889%2010.9189C31.9007%2010.6012%2032.2382%2010.3498%2032.7014%2010.1645C31.6293%209.6218%2031.0933%208.70855%2031.0933%207.4247C31.0933%206.20702%2031.4705%205.32686%2032.2249%204.7842C32.9794%204.22831%2034.0978%203.95036%2035.5802%203.95036C35.8846%203.95036%2036.2155%203.97683%2036.5728%204.02977C36.9434%204.06948%2037.2214%204.10919%2037.4067%204.14889H40.9406L40.8811%205.83643H39.392C39.8023%206.22026%2040.0075%206.7563%2040.0075%207.44455C40.0075%208.41075%2039.7031%209.18503%2039.0942%209.76739C38.4854%2010.3365%2037.5854%2010.6211%2036.3942%2010.6211C36.1824%2010.6211%2035.9772%2010.6145%2035.7787%2010.6012C35.5934%2010.5748%2035.4015%2010.5483%2035.203%2010.5218C34.8059%2010.5748%2034.4684%2010.6674%2034.1904%2010.7998C33.9257%2010.9321%2033.7934%2011.1108%2033.7934%2011.3358C33.7934%2011.6402%2034.0647%2011.7924%2034.6074%2011.7924H37.2677C38.2207%2011.7924%2038.9553%2012.0108%2039.4715%2012.4476C39.9876%2012.8711%2040.2457%2013.4932%2040.2457%2014.3138C40.2457%2015.2403%2039.8288%2015.9285%2038.995%2016.3786C38.1611%2016.8286%2036.9567%2017.0536%2035.3816%2017.0536ZM35.6%209.11223C36.3942%209.11223%2036.9434%208.97988%2037.2479%208.71516C37.5655%208.43722%2037.7244%207.97397%2037.7244%207.32543C37.7244%206.67689%2037.5655%206.20702%2037.2479%205.91584C36.9434%205.62466%2036.3942%205.47907%2035.6%205.47907C34.8456%205.47907%2034.3029%205.62466%2033.972%205.91584C33.6412%206.19379%2033.4757%206.66365%2033.4757%207.32543C33.4757%207.93427%2033.6279%208.38428%2033.9323%208.67546C34.25%208.96664%2034.8059%209.11223%2035.6%209.11223Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M45.3783%2013.7579C44.4651%2013.7579%2043.7967%2013.5461%2043.3731%2013.1226C42.9628%2012.6991%2042.7577%2012.0241%2042.7577%2011.0976V0.178223H45.4379V10.8792C45.4379%2011.2101%2045.5041%2011.4417%2045.6364%2011.574C45.7688%2011.6932%2045.9607%2011.7527%2046.2122%2011.7527C46.5563%2011.7527%2046.8673%2011.7064%2047.1453%2011.6138V13.4601C46.6423%2013.6586%2046.0533%2013.7579%2045.3783%2013.7579Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M48.8268%202.42165V0.317196H51.7452V2.42165H48.8268ZM49.0452%2013.5594V6.13423H47.6356L47.8738%204.14889H51.7254V13.5594H49.0452Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M54.206%2013.5594V4.14889H56.6877L56.7869%205.04229C57.1708%204.75111%2057.6539%204.49964%2058.2362%204.28787C58.8318%204.06286%2059.4539%203.95036%2060.1025%203.95036C61.3466%203.95036%2062.2533%204.24154%2062.8224%204.82391C63.3915%205.40627%2063.6761%206.30629%2063.6761%207.52396V13.5594H60.9959V7.66294C60.9959%207.02763%2060.8635%206.57762%2060.5988%206.31291C60.3473%206.0482%2059.8708%205.91584%2059.1693%205.91584C58.759%205.91584%2058.3421%206.00849%2057.9186%206.19379C57.5083%206.37909%2057.1641%206.61071%2056.8862%206.88866V13.5594H54.206Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M69.7892%2013.7579C68.7039%2013.7579%2067.8965%2013.4734%2067.3671%2012.9042C66.8509%2012.3351%2066.5928%2011.5608%2066.5928%2010.5814V6.21364H65.2627V4.14889H66.5928V2.12385L69.2731%201.32972V4.14889H71.6555L71.4966%206.21364H69.2731V10.4027C69.2731%2010.9189%2069.3922%2011.2762%2069.6304%2011.4748C69.8687%2011.6601%2070.2393%2011.7527%2070.7422%2011.7527C71.1128%2011.7527%2071.4966%2011.6865%2071.8937%2011.5542V13.4006C71.6025%2013.5197%2071.2849%2013.6057%2070.9407%2013.6586C70.5966%2013.7248%2070.2128%2013.7579%2069.7892%2013.7579Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xsm-2", "text-grey-600")}
              tag="div"
            >
              {"© 2024 Aglint Inc. All Rights Reserved"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
