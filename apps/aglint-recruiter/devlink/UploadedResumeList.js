"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./UploadedResumeList.module.css";

export function UploadedResumeList({
  as: _Component = _Builtin.Block,
  textName = "resume_name_of_candidate.Pdf",
  textSize = "360 kb",
  isPdfIconVisible = true,
  isDocVisible = false,
  onClickDelete = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "upload-resume-card")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-610")} tag="div">
        {isDocVisible ? (
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2229%22%20height%3D%2229%22%20viewbox%3D%220%200%2029%2029%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.500006%204C0.536464%203.01562%200.882818%202.19531%201.53907%201.53906C2.19532%200.882809%203.01563%200.536455%204.00001%200.499997H12.75V7.5C12.75%208.01041%2012.9141%208.42969%2013.2422%208.75781C13.5703%209.08594%2013.9896%209.25%2014.5%209.25H21.5V17.125H10.125C9.14063%2017.1615%208.32032%2017.5078%207.66407%2018.1641C7.00782%2018.8203%206.66146%2019.6406%206.62501%2020.625V28.5H4.00001C3.01563%2028.4635%202.19532%2028.1172%201.53907%2027.4609C0.882818%2026.8047%200.536464%2025.9844%200.500006%2025V4ZM21.5%207.5H14.5V0.499997L21.5%207.5ZM10.125%2019.75H11.875C12.6042%2019.7865%2013.224%2020.0417%2013.7344%2020.5156C14.2083%2021.026%2014.4635%2021.6458%2014.5%2022.375V25.875C14.4635%2026.6042%2014.2083%2027.224%2013.7344%2027.7344C13.224%2028.2083%2012.6042%2028.4635%2011.875%2028.5H10.125C9.57813%2028.4635%209.28647%2028.1719%209.25001%2027.625V20.625C9.28647%2020.0781%209.57813%2019.7865%2010.125%2019.75ZM11%2026.75H11.875C12.4219%2026.7135%2012.7135%2026.4219%2012.75%2025.875V22.375C12.7135%2021.8281%2012.4219%2021.5365%2011.875%2021.5H11V26.75ZM25.4375%2019.75H26.3125C26.9323%2019.75%2027.4427%2019.9687%2027.8438%2020.4062C28.2813%2020.8073%2028.5%2021.3177%2028.5%2021.9375V22.375C28.4636%2022.9219%2028.1719%2023.2135%2027.625%2023.25C27.0781%2023.2135%2026.7865%2022.9219%2026.75%2022.375V21.9375C26.7136%2021.6823%2026.5677%2021.5365%2026.3125%2021.5H25.4375C25.1823%2021.5365%2025.0365%2021.6823%2025%2021.9375V26.3125C25.0365%2026.5677%2025.1823%2026.7135%2025.4375%2026.75H26.3125C26.5677%2026.7135%2026.7136%2026.5677%2026.75%2026.3125V25.875C26.7865%2025.3281%2027.0781%2025.0365%2027.625%2025C28.1719%2025.0365%2028.4636%2025.3281%2028.5%2025.875V26.3125C28.5%2026.9323%2028.2813%2027.4427%2027.8438%2027.8438C27.4427%2028.2813%2026.9323%2028.5%2026.3125%2028.5H25.4375C24.8177%2028.5%2024.3073%2028.2813%2023.9063%2027.8438C23.4688%2027.4427%2023.25%2026.9323%2023.25%2026.3125V21.9375C23.25%2021.3177%2023.4688%2020.8073%2023.9063%2020.4062C24.3073%2019.9687%2024.8177%2019.75%2025.4375%2019.75ZM16.25%2021.9375C16.25%2021.3177%2016.4688%2020.8073%2016.9063%2020.4062C17.3073%2019.9687%2017.8177%2019.75%2018.4375%2019.75H19.3125C19.9323%2019.75%2020.4427%2019.9687%2020.8438%2020.4062C21.2813%2020.8073%2021.5%2021.3177%2021.5%2021.9375V26.3125C21.5%2026.9323%2021.2813%2027.4427%2020.8438%2027.8438C20.4427%2028.2813%2019.9323%2028.5%2019.3125%2028.5H18.4375C17.8177%2028.5%2017.3073%2028.2813%2016.9063%2027.8438C16.4688%2027.4427%2016.25%2026.9323%2016.25%2026.3125V21.9375ZM18.4375%2021.5C18.1823%2021.5365%2018.0365%2021.6823%2018%2021.9375V26.3125C18.0365%2026.5677%2018.1823%2026.7135%2018.4375%2026.75H19.3125C19.5677%2026.7135%2019.7136%2026.5677%2019.75%2026.3125V21.9375C19.7136%2021.6823%2019.5677%2021.5365%2019.3125%2021.5H18.4375Z%22%20fill%3D%22%231F73B7%22%20style%3D%22fill%3A%231F73B7%3Bfill%3Acolor(display-p3%200.1216%200.4510%200.7176)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        ) : null}
        {isPdfIconVisible ? (
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2228%22%20height%3D%2229%22%20viewbox%3D%220%200%2028%2029%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.500006%204C0.536464%203.01562%200.882818%202.19531%201.53907%201.53906C2.19532%200.882809%203.01563%200.536455%204.00001%200.499997H12.75V7.5C12.75%208.01041%2012.9141%208.42969%2013.2422%208.75781C13.5703%209.08594%2013.9896%209.25%2014.5%209.25H21.5V17.125H10.125C9.14063%2017.1615%208.32032%2017.5078%207.66407%2018.1641C7.00782%2018.8203%206.66146%2019.6406%206.62501%2020.625V28.5H4.00001C3.01563%2028.4635%202.19532%2028.1172%201.53907%2027.4609C0.882818%2026.8047%200.536464%2025.9844%200.500006%2025V4ZM21.5%207.5H14.5V0.499997L21.5%207.5ZM10.125%2019.75H11.875C12.75%2019.7865%2013.4792%2020.0781%2014.0625%2020.625C14.6094%2021.2083%2014.901%2021.9375%2014.9375%2022.8125C14.901%2023.6875%2014.6094%2024.4167%2014.0625%2025C13.4792%2025.5469%2012.75%2025.8385%2011.875%2025.875H11V27.625C10.9635%2028.1719%2010.6719%2028.4635%2010.125%2028.5C9.57813%2028.4635%209.28647%2028.1719%209.25001%2027.625V25V20.625C9.28647%2020.0781%209.57813%2019.7865%2010.125%2019.75ZM11.875%2024.125C12.6771%2024.0521%2013.1146%2023.6146%2013.1875%2022.8125C13.1146%2022.0104%2012.6771%2021.5729%2011.875%2021.5H11V24.125H11.875ZM17.125%2019.75H18.875C19.6042%2019.7865%2020.224%2020.0417%2020.7344%2020.5156C21.2083%2021.026%2021.4636%2021.6458%2021.5%2022.375V25.875C21.4636%2026.6042%2021.2083%2027.224%2020.7344%2027.7344C20.224%2028.2083%2019.6042%2028.4635%2018.875%2028.5H17.125C16.5781%2028.4635%2016.2865%2028.1719%2016.25%2027.625V20.625C16.2865%2020.0781%2016.5781%2019.7865%2017.125%2019.75ZM18.875%2026.75C19.4219%2026.7135%2019.7136%2026.4219%2019.75%2025.875V22.375C19.7136%2021.8281%2019.4219%2021.5365%2018.875%2021.5H18V26.75H18.875ZM23.25%2020.625C23.2865%2020.0781%2023.5781%2019.7865%2024.125%2019.75H26.75C27.2969%2019.7865%2027.5886%2020.0781%2027.625%2020.625C27.5886%2021.1719%2027.2969%2021.4635%2026.75%2021.5H25V23.25H26.75C27.2969%2023.2865%2027.5886%2023.5781%2027.625%2024.125C27.5886%2024.6719%2027.2969%2024.9635%2026.75%2025H25V27.625C24.9636%2028.1719%2024.6719%2028.4635%2024.125%2028.5C23.5781%2028.4635%2023.2865%2028.1719%2023.25%2027.625V24.125V20.625Z%22%20fill%3D%22%23CC6C5B%22%20style%3D%22fill%3A%23CC6C5B%3Bfill%3Acolor(display-p3%200.8000%200.4235%200.3569)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-609")}
          tag="div"
        >
          <_Builtin.Block tag="div">{textName}</_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "color-grey-600")}
            tag="div"
          >
            {textSize}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons", "cursor-pointer")}
        value="%3Csvg%20width%3D%2213%22%20height%3D%2215%22%20viewbox%3D%220%200%2013%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.24219%201.625C5.07812%201.625%204.95052%201.69792%204.85937%201.84375L4.44922%202.5H8.55078L8.14063%201.84375C8.04948%201.69792%207.92188%201.625%207.75781%201.625H5.24219ZM9.58984%202.5H10.875H11.75H12.1875C12.4609%202.51823%2012.6068%202.66406%2012.625%202.9375C12.6068%203.21094%2012.4609%203.35677%2012.1875%203.375H11.6953L10.9844%2013.1367C10.9479%2013.5924%2010.7656%2013.9753%2010.4375%2014.2852C10.1094%2014.5768%209.70833%2014.7318%209.23438%2014.75H3.76562C3.29167%2014.7318%202.89062%2014.5768%202.5625%2014.2852C2.23437%2013.9753%202.05208%2013.5924%202.01562%2013.1367L1.30469%203.375H0.812499C0.539062%203.35677%200.393228%203.21094%200.374999%202.9375C0.393228%202.66406%200.539062%202.51823%200.812499%202.5H1.25H2.125H3.41016L4.12109%201.3789C4.39453%200.977863%204.76823%200.768228%205.24219%200.749998H7.75781C8.23177%200.768228%208.60547%200.977863%208.87891%201.3789L9.58984%202.5ZM10.8203%203.375H2.17969L2.89062%2013.0547C2.90885%2013.2917%203%2013.4831%203.16406%2013.6289C3.32812%2013.793%203.52865%2013.875%203.76562%2013.875H9.23438C9.47135%2013.875%209.67188%2013.793%209.83594%2013.6289C10%2013.4831%2010.0911%2013.2917%2010.1094%2013.0547L10.8203%203.375Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
        {...onClickDelete}
      />
    </_Component>
  );
}
