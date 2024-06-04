"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { PhoneScreeningQ } from "./PhoneScreeningQ";
import * as _utils from "./utils";
import _styles from "./PhoneScreenings.module.css";

export function PhoneScreenings({
  as: _Component = _Builtin.Block,
  isPrevDisable = false,
  onClickPrev = {},
  onClickNext = {},
  slotStep,
  isPreviewEnable = false,
}) {
  return (
    <_Component className={_utils.cx(_styles, "candidate-mail-wrap")} tag="div">
      <_Builtin.Block tag="div">
        {slotStep ?? <PhoneScreeningQ />}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "powered-aglint-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-sm", "text-grey-600")}
          tag="div"
        >
          {"Powered By"}
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icons")}
          value="%3Csvg%20width%3D%2260%22%20height%3D%2215%22%20viewbox%3D%220%200%2060%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.8066%207.31923C10.1988%206.91635%209.39305%206.71864%208.83723%206.16282C8.2814%205.60327%208.08369%204.80125%207.68081%203.19347L7.08769%200.824707L6.49456%203.19347C6.09168%204.80125%205.89397%205.607%205.33815%206.16282C4.77859%206.71864%203.97657%206.91635%202.36878%207.31923L0%207.91235L2.36878%208.50548C3.97657%208.90835%204.78232%209.10606%205.33815%209.66188C5.89397%2010.2214%206.09168%2011.0235%206.49456%2012.6312L7.08769%2015L7.68081%2012.6312C8.08369%2011.0235%208.2814%2010.2177%208.83723%209.66188C9.39678%209.10606%2010.1988%208.90835%2011.8066%208.50548L14.1754%207.91235L11.8066%207.31923Z%22%20fill%3D%22%23FF6224%22%20style%3D%22fill%3A%23FF6224%3Bfill%3Acolor(display-p3%201.0000%200.3843%200.1412)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M19.0782%2012.2316C18.5779%2012.2316%2018.1109%2012.1427%2017.6773%2011.9648C17.2548%2011.7758%2016.9102%2011.5034%2016.6433%2011.1477C16.3876%2010.7808%2016.2598%2010.3249%2016.2598%209.78016C16.2598%209.00191%2016.5322%208.3793%2017.0769%207.91235C17.6328%207.4454%2018.45%207.21193%2019.5284%207.21193H21.8632V6.99513C21.8632%206.50594%2021.7242%206.16129%2021.4463%205.96117C21.1795%205.76104%2020.6347%205.66098%2019.8119%205.66098C18.9114%205.66098%2018.0442%205.79996%2017.2103%206.0779V4.49361C17.5772%204.34907%2018.022%204.23234%2018.5445%204.14339C19.0782%204.04333%2019.6563%203.9933%2020.2789%203.9933C21.4685%203.9933%2022.3858%204.2379%2023.0306%204.72708C23.6865%205.20515%2024.0145%205.97784%2024.0145%207.04516V12.0649H22.0633L21.9466%2011.3478C21.6353%2011.6257%2021.2517%2011.8425%2020.7959%2011.9982C20.34%2012.1538%2019.7675%2012.2316%2019.0782%2012.2316ZM19.6952%2010.7474C20.1955%2010.7474%2020.6291%2010.664%2020.996%2010.4973C21.3629%2010.3305%2021.652%2010.1193%2021.8632%209.86354V8.61278H19.5785C18.7002%208.61278%2018.261%208.97411%2018.261%209.69677C18.261%2010.3972%2018.7391%2010.7474%2019.6952%2010.7474Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M29.3296%2015C28.7404%2015%2028.1345%2014.9611%2027.5119%2014.8833C26.9004%2014.8054%2026.3834%2014.6943%2025.9609%2014.5497V12.8654C26.4056%2013.0099%2026.9282%2013.1211%2027.5285%2013.1989C28.1289%2013.2878%2028.6904%2013.3323%2029.2129%2013.3323C29.98%2013.3323%2030.5359%2013.2878%2030.8806%2013.1989C31.2253%2013.1211%2031.3976%2012.9765%2031.3976%2012.7653C31.3976%2012.5874%2031.3198%2012.4651%2031.1641%2012.3984C31.0196%2012.3317%2030.7083%2012.2984%2030.2302%2012.2984H28.0789C26.6669%2012.2984%2025.9609%2011.7758%2025.9609%2010.7307C25.9609%2010.4083%2026.0498%2010.1137%2026.2277%209.84686C26.4056%209.58004%2026.6891%209.3688%2027.0783%209.21315C26.1777%208.75731%2025.7274%207.99018%2025.7274%206.91175C25.7274%205.8889%2026.0443%205.14956%2026.678%204.69373C27.3117%204.22678%2028.2512%203.9933%2029.4964%203.9933C29.7521%203.9933%2030.0301%204.01554%2030.3303%204.06001C30.6416%204.09336%2030.875%204.12672%2031.0307%204.16007H33.9992L33.9491%205.5776H32.6984C33.043%205.90002%2033.2154%206.35029%2033.2154%206.92842C33.2154%207.74003%2032.9596%208.39042%2032.4482%208.87961C31.9368%209.35768%2031.1808%209.59671%2030.1802%209.59671C30.0023%209.59671%2029.8299%209.59115%2029.6632%209.58004C29.5075%209.5578%2029.3463%209.53556%2029.1795%209.51333C28.846%209.5578%2028.5625%209.63562%2028.329%209.7468C28.1067%209.85798%2027.9955%2010.0081%2027.9955%2010.1971C27.9955%2010.4528%2028.2234%2010.5806%2028.6792%2010.5806H30.9139C31.7144%2010.5806%2032.3315%2010.7641%2032.7651%2011.131C33.1987%2011.4868%2033.4155%2012.0093%2033.4155%2012.6986C33.4155%2013.4769%2033.0653%2014.055%2032.3648%2014.433C31.6644%2014.811%2030.6527%2015%2029.3296%2015ZM29.5131%208.32927C30.1802%208.32927%2030.6416%208.2181%2030.8973%207.99574C31.1641%207.76226%2031.2975%207.37314%2031.2975%206.82836C31.2975%206.28359%2031.1641%205.8889%2030.8973%205.64431C30.6416%205.39971%2030.1802%205.27742%2029.5131%205.27742C28.8794%205.27742%2028.4235%205.39971%2028.1456%205.64431C27.8676%205.87778%2027.7287%206.27247%2027.7287%206.82836C27.7287%207.33978%2027.8565%207.71779%2028.1122%207.96238C28.3791%208.20698%2028.846%208.32927%2029.5131%208.32927Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M37.7269%2012.2316C36.9597%2012.2316%2036.3983%2012.0538%2036.0425%2011.698C35.6978%2011.3422%2035.5255%2010.7752%2035.5255%209.99696V0.824707H37.7769V9.81351C37.7769%2010.0915%2037.8325%2010.286%2037.9437%2010.3972C38.0548%2010.4973%2038.216%2010.5473%2038.4273%2010.5473C38.7164%2010.5473%2038.9776%2010.5084%2039.2111%2010.4306V11.9815C38.7886%2012.1483%2038.2939%2012.2316%2037.7269%2012.2316Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M40.6236%202.70919V0.941444H43.0751V2.70919H40.6236ZM40.807%2012.0649V5.82775H39.6229L39.8231%204.16007H43.0584V12.0649H40.807Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M45.1421%2012.0649V4.16007H47.2267L47.3101%204.91053C47.6325%204.66593%2048.0383%204.45469%2048.5275%204.27681C49.0278%204.0878%2049.5504%203.9933%2050.0951%203.9933C51.1402%203.9933%2051.9018%204.2379%2052.3799%204.72708C52.8579%205.21627%2053.097%205.97228%2053.097%206.99513V12.0649H50.8456V7.11187C50.8456%206.57821%2050.7344%206.2002%2050.5121%205.97784C50.3008%205.75549%2049.9006%205.64431%2049.3113%205.64431C48.9667%205.64431%2048.6164%205.72213%2048.2607%205.87778C47.916%206.03343%2047.6269%206.228%2047.3935%206.46147V12.0649H45.1421Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cpath%20d%3D%22M58.232%2012.2316C57.3204%2012.2316%2056.6422%2011.9926%2056.1974%2011.5145C55.7638%2011.0365%2055.547%2010.3861%2055.547%209.56336V5.89446H54.4297V4.16007H55.547V2.45903L57.7984%201.79196V4.16007H59.7997L59.6662%205.89446H57.7984V9.41327C57.7984%209.84686%2057.8985%2010.147%2058.0986%2010.3138C58.2987%2010.4695%2058.61%2010.5473%2059.0325%2010.5473C59.3438%2010.5473%2059.6662%2010.4917%2059.9998%2010.3805V11.9315C59.7552%2012.0315%2059.4884%2012.1038%2059.1993%2012.1483C58.9102%2012.2039%2058.5878%2012.2316%2058.232%2012.2316Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text-sm", "text-grey-600")}
          tag="div"
        >
          {"© 2024 Aglint Inc. All Rights Reserved"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "next-wrap-cand", "hide")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "next-sub-wrap-cand")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "prev-btn-cand")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "prev-sub-active")}
              tag="div"
              {...onClickPrev}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.96094%207.46094L8.46094%202.96094C8.61719%202.82031%208.79688%202.75%209%202.75C9.20312%202.75%209.38281%202.82031%209.53906%202.96094C9.67969%203.11719%209.75%203.29687%209.75%203.5C9.75%203.70313%209.67969%203.88281%209.53906%204.03906L5.55469%208L9.53906%2011.9609C9.67969%2012.1172%209.75%2012.2969%209.75%2012.5C9.75%2012.7031%209.67969%2012.8828%209.53906%2013.0391C9.38281%2013.1797%209.20312%2013.25%209%2013.25C8.79688%2013.25%208.61719%2013.1797%208.46094%2013.0391L3.96094%208.53906C3.82031%208.38281%203.75%208.20312%203.75%208C3.75%207.79688%203.82031%207.61719%203.96094%207.46094Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Previous"}</_Builtin.Block>
            </_Builtin.Block>
            {isPrevDisable ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "prev-sub-notactive")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.96094%207.46094L8.46094%202.96094C8.61719%202.82031%208.79688%202.75%209%202.75C9.20312%202.75%209.38281%202.82031%209.53906%202.96094C9.67969%203.11719%209.75%203.29687%209.75%203.5C9.75%203.70313%209.67969%203.88281%209.53906%204.03906L5.55469%208L9.53906%2011.9609C9.67969%2012.1172%209.75%2012.2969%209.75%2012.5C9.75%2012.7031%209.67969%2012.8828%209.53906%2013.0391C9.38281%2013.1797%209.20312%2013.25%209%2013.25C8.79688%2013.25%208.61719%2013.1797%208.46094%2013.0391L3.96094%208.53906C3.82031%208.38281%203.75%208.20312%203.75%208C3.75%207.79688%203.82031%207.61719%203.96094%207.46094Z%22%20fill%3D%22%23C2C8CC%22%20style%3D%22fill%3A%23C2C8CC%3Bfill%3Acolor(display-p3%200.7600%200.7827%200.8000)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block tag="div">{"Previous"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "prev-btn-cand")}
            tag="div"
            {...onClickNext}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "prev-sub-active")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Next"}</_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.0391%207.46094C11.1797%207.61719%2011.25%207.79688%2011.25%208C11.25%208.20312%2011.1797%208.38281%2011.0391%208.53906L6.53906%2013.0391C6.38281%2013.1797%206.20312%2013.25%206%2013.25C5.79688%2013.25%205.61719%2013.1797%205.46094%2013.0391C5.32031%2012.8828%205.25%2012.7031%205.25%2012.5C5.25%2012.2969%205.32031%2012.1172%205.46094%2011.9609L9.44531%208L5.46094%204.03906C5.32031%203.88281%205.25%203.70313%205.25%203.5C5.25%203.29687%205.32031%203.11719%205.46094%202.96094C5.61719%202.82031%205.79688%202.75%206%202.75C6.20312%202.75%206.38281%202.82031%206.53906%202.96094L11.0391%207.46094Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      {isPreviewEnable ? (
        <_Builtin.Block className={_utils.cx(_styles, "preview-ph")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "preview-ps")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%202.75C8.45312%202.76563%209.30469%202.95313%2010.0547%203.3125C10.8047%203.67187%2011.4609%204.11719%2012.0234%204.64844C12.5703%205.16406%2013.0234%205.69531%2013.3828%206.24219C13.7422%206.78906%2014.0156%207.28125%2014.2031%207.71875C14.2812%207.90625%2014.2812%208.09375%2014.2031%208.28125C14.0156%208.71875%2013.7422%209.21094%2013.3828%209.75781C13.0234%2010.3047%2012.5703%2010.8359%2012.0234%2011.3516C11.4609%2011.8828%2010.8047%2012.3281%2010.0547%2012.6875C9.30469%2013.0469%208.45312%2013.2344%207.5%2013.25C6.54688%2013.2344%205.69531%2013.0469%204.94531%2012.6875C4.19531%2012.3281%203.53906%2011.8828%202.97656%2011.3516C2.42969%2010.8359%201.97656%2010.3047%201.61719%209.75781C1.25781%209.21094%200.992188%208.71875%200.820312%208.28125C0.742188%208.09375%200.742188%207.90625%200.820312%207.71875C0.992188%207.28125%201.25781%206.78906%201.61719%206.24219C1.97656%205.69531%202.42969%205.16406%202.97656%204.64844C3.53906%204.11719%204.19531%203.67187%204.94531%203.3125C5.69531%202.95313%206.54688%202.76563%207.5%202.75ZM4.125%208C4.125%208.60938%204.27344%209.17188%204.57031%209.6875C4.86719%2010.2031%205.28125%2010.6172%205.8125%2010.9297C6.34375%2011.2266%206.90625%2011.375%207.5%2011.375C8.09375%2011.375%208.65625%2011.2266%209.1875%2010.9297C9.71875%2010.6172%2010.1328%2010.2031%2010.4297%209.6875C10.7266%209.17188%2010.875%208.60938%2010.875%208C10.875%207.39062%2010.7266%206.82812%2010.4297%206.3125C10.1328%205.79688%209.71875%205.38281%209.1875%205.07031C8.65625%204.77344%208.09375%204.625%207.5%204.625C6.90625%204.625%206.34375%204.77344%205.8125%205.07031C5.28125%205.38281%204.86719%205.79688%204.57031%206.3125C4.27344%206.82812%204.125%207.39062%204.125%208ZM7.5%206.5C7.5%206.32812%207.47656%206.17188%207.42969%206.03125C7.39844%205.875%207.45312%205.78125%207.59375%205.75C8.07812%205.78125%208.51562%205.94531%208.90625%206.24219C9.28125%206.53906%209.53906%206.92969%209.67969%207.41406C9.82031%208.03906%209.74219%208.60938%209.44531%209.125C9.14844%209.64062%208.69531%209.99219%208.08594%2010.1797C7.46094%2010.3203%206.89062%2010.2422%206.375%209.94531C5.85938%209.64844%205.50781%209.19531%205.32031%208.58594C5.27344%208.41406%205.25%208.25%205.25%208.09375C5.28125%207.95312%205.375%207.89844%205.53125%207.92969C5.67188%207.97656%205.82812%208%206%208C6.42188%207.98438%206.77344%207.83594%207.05469%207.55469C7.33594%207.27344%207.48438%206.92188%207.5%206.5Z%22%20fill%3D%22%23703815%22%20style%3D%22fill%3A%23703815%3Bfill%3Acolor(display-p3%200.4392%200.2196%200.0824)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-yellow-800")}
              tag="div"
            >
              {"Preview Mode"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
