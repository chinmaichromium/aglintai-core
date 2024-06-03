"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import * as _utils from "./utils";
import _styles from "./TeamEmpty.module.css";

export function TeamEmpty({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "tem_empty")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons")}
        value="%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewbox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10%2013C10.0417%2014.125%2010.5417%2015%2011.5%2015.625C12.5%2016.125%2013.5%2016.125%2014.5%2015.625C15.4583%2015%2015.9583%2014.125%2016%2013C15.9583%2011.875%2015.4583%2011%2014.5%2010.375C13.5%209.875%2012.5%209.875%2011.5%2010.375C10.5417%2011%2010.0417%2011.875%2010%2013ZM18%2013C17.9583%2014.875%2017.125%2016.3125%2015.5%2017.3125C13.8333%2018.2292%2012.1667%2018.2292%2010.5%2017.3125C8.875%2016.3125%208.04167%2014.875%208%2013C8.04167%2011.125%208.875%209.6875%2010.5%208.6875C12.1667%207.77083%2013.8333%207.77083%2015.5%208.6875C17.125%209.6875%2017.9583%2011.125%2018%2013ZM24%2018C22.5%2018.0417%2021.3542%2018.7083%2020.5625%2020C19.8125%2021.3333%2019.8125%2022.6667%2020.5625%2024C21.3542%2025.2917%2022.5%2025.9583%2024%2026C25.5%2025.9583%2026.6458%2025.2917%2027.4375%2024C28.1875%2022.6667%2028.1875%2021.3333%2027.4375%2020C26.6458%2018.7083%2025.5%2018.0417%2024%2018ZM24%2028C22.9167%2028%2021.9167%2027.7292%2021%2027.1875C20.0833%2026.6458%2019.3542%2025.9167%2018.8125%2025C18.2708%2024.0417%2018%2023.0417%2018%2022C18%2020.9583%2018.2708%2019.9583%2018.8125%2019C19.3542%2018.0833%2020.0833%2017.3542%2021%2016.8125C21.9167%2016.2708%2022.9167%2016%2024%2016C25.0833%2016%2026.0833%2016.2708%2027%2016.8125C27.9167%2017.3542%2028.6458%2018.0833%2029.1875%2019C29.7292%2019.9583%2030%2020.9583%2030%2022C30%2023.0417%2029.7292%2024.0417%2029.1875%2025C28.6458%2025.9167%2027.9167%2026.6458%2027%2027.1875C26.0833%2027.7292%2025.0833%2028%2024%2028ZM20.3125%2032C18.6042%2032.0417%2017.1458%2032.625%2015.9375%2033.75C14.7708%2034.875%2014.125%2036.2917%2014%2038H34C33.875%2036.2917%2033.2292%2034.875%2032.0625%2033.75C30.8542%2032.625%2029.3958%2032.0417%2027.6875%2032H20.3125ZM20.3125%2030H27.6875C30.0208%2030.0417%2031.9792%2030.8542%2033.5625%2032.4375C35.1458%2034.0208%2035.9583%2035.9792%2036%2038.3125C35.9167%2039.3542%2035.3542%2039.9167%2034.3125%2040H13.6875C12.6458%2039.9167%2012.0833%2039.3542%2012%2038.3125C12.0417%2035.9792%2012.8542%2034.0208%2014.4375%2032.4375C16.0208%2030.8542%2017.9792%2030.0417%2020.3125%2030ZM36%2010C34.875%2010.0417%2034%2010.5417%2033.375%2011.5C32.875%2012.5%2032.875%2013.5%2033.375%2014.5C34%2015.4583%2034.875%2015.9583%2036%2016C37.125%2015.9583%2038%2015.4583%2038.625%2014.5C39.125%2013.5%2039.125%2012.5%2038.625%2011.5C38%2010.5417%2037.125%2010.0417%2036%2010ZM36%2018C34.125%2017.9583%2032.6875%2017.125%2031.6875%2015.5C30.7708%2013.8333%2030.7708%2012.1667%2031.6875%2010.5C32.6875%208.875%2034.125%208.04167%2036%208C37.875%208.04167%2039.3125%208.875%2040.3125%2010.5C41.2292%2012.1667%2041.2292%2013.8333%2040.3125%2015.5C39.3125%2017.125%2037.875%2017.9583%2036%2018ZM37%2022H32C32%2021.2917%2031.9167%2020.625%2031.75%2020H37C39%2020.0417%2040.6458%2020.7292%2041.9375%2022.0625C43.2708%2023.3542%2043.9583%2025%2044%2027C43.9583%2027.625%2043.625%2027.9583%2043%2028C42.375%2027.9583%2042.0417%2027.625%2042%2027C41.9583%2025.5833%2041.4792%2024.3958%2040.5625%2023.4375C39.6042%2022.5208%2038.4167%2022.0417%2037%2022ZM16%2022H11C9.58333%2022.0417%208.39583%2022.5208%207.4375%2023.4375C6.52083%2024.3958%206.04167%2025.5833%206%2027C5.95833%2027.625%205.625%2027.9583%205%2028C4.375%2027.9583%204.04167%2027.625%204%2027C4.04167%2025%204.72917%2023.3542%206.0625%2022.0625C7.35417%2020.7292%209%2020.0417%2011%2020H16.25C16.0833%2020.625%2016%2021.2917%2016%2022Z%22%20fill%3D%22%234B5563%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      <Text weight="regular" content="No team member found" />
    </_Component>
  );
}
