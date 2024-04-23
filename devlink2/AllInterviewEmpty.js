"use client";
import React from "react";

import * as _Builtin from "./_Builtin";
import _styles from "./AllInterviewEmpty.module.css";
import * as _utils from "./utils";

export function AllInterviewEmpty({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "all-interview-empty")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-923")} tag="div">
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icons")}
          value="%3Csvg%20width%3D%2240%22%20height%3D%2239%22%20viewBox%3D%220%200%2040%2039%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.1997%206.79922C11.6997%206.83255%2011.9664%207.09922%2011.9997%207.59922V9.99922H21.5997V7.59922C21.633%207.09922%2021.8997%206.83255%2022.3997%206.79922C22.8997%206.83255%2023.1664%207.09922%2023.1997%207.59922V9.99922H24.7997C25.6997%2010.0326%2026.4497%2010.3492%2027.0497%2010.9492C27.6497%2011.5492%2027.9664%2012.2992%2027.9997%2013.1992V14.7992V16.3992V16.4492C27.733%2016.4159%2027.4664%2016.3992%2027.1997%2016.3992C26.933%2016.3992%2026.6664%2016.4159%2026.3997%2016.4492V16.3992H7.19971V29.1992C7.19971%2029.6659%207.34971%2030.0492%207.64971%2030.3492C7.94971%2030.6492%208.33304%2030.7992%208.79971%2030.7992H20.3997C20.8997%2031.3992%2021.483%2031.9326%2022.1497%2032.3992H8.79971C7.89971%2032.3659%207.14971%2032.0492%206.54971%2031.4492C5.94971%2030.8492%205.63304%2030.0992%205.59971%2029.1992V16.3992V14.7992V13.1992C5.63304%2012.2992%205.94971%2011.5492%206.54971%2010.9492C7.14971%2010.3492%207.89971%2010.0326%208.79971%209.99922H10.3997V7.59922C10.433%207.09922%2010.6997%206.83255%2011.1997%206.79922ZM24.7997%2011.5992H8.79971C8.33304%2011.5992%207.94971%2011.7492%207.64971%2012.0492C7.34971%2012.3492%207.19971%2012.7326%207.19971%2013.1992V14.7992H26.3997V13.1992C26.3997%2012.7326%2026.2497%2012.3492%2025.9497%2012.0492C25.6497%2011.7492%2025.2664%2011.5992%2024.7997%2011.5992ZM27.1997%2030.7992C28.1997%2030.7992%2029.133%2030.5492%2029.9997%2030.0492C30.8664%2029.5492%2031.5497%2028.8659%2032.0497%2027.9992C32.5497%2027.1326%2032.7997%2026.1992%2032.7997%2025.1992C32.7997%2024.1992%2032.5497%2023.2659%2032.0497%2022.3992C31.5497%2021.5326%2030.8664%2020.8492%2029.9997%2020.3492C29.133%2019.8492%2028.1997%2019.5992%2027.1997%2019.5992C26.1997%2019.5992%2025.2664%2019.8492%2024.3997%2020.3492C23.533%2020.8492%2022.8497%2021.5326%2022.3497%2022.3992C21.8497%2023.2659%2021.5997%2024.1992%2021.5997%2025.1992C21.5997%2026.1992%2021.8497%2027.1326%2022.3497%2027.9992C22.8497%2028.8659%2023.533%2029.5492%2024.3997%2030.0492C25.2664%2030.5492%2026.1997%2030.7992%2027.1997%2030.7992ZM27.1997%2017.9992C28.4997%2017.9992%2029.6997%2018.3159%2030.7997%2018.9492C31.8997%2019.5826%2032.783%2020.4659%2033.4497%2021.5992C34.083%2022.7326%2034.3997%2023.9326%2034.3997%2025.1992C34.3997%2026.4659%2034.083%2027.6659%2033.4497%2028.7992C32.783%2029.9326%2031.8997%2030.8159%2030.7997%2031.4492C29.6997%2032.0826%2028.4997%2032.3992%2027.1997%2032.3992C25.8997%2032.3992%2024.6997%2032.0826%2023.5997%2031.4492C22.4997%2030.8159%2021.6164%2029.9326%2020.9497%2028.7992C20.3164%2027.6659%2019.9997%2026.4659%2019.9997%2025.1992C19.9997%2023.9326%2020.3164%2022.7326%2020.9497%2021.5992C21.6164%2020.4659%2022.4997%2019.5826%2023.5997%2018.9492C24.6997%2018.3159%2025.8997%2017.9992%2027.1997%2017.9992ZM27.1997%2021.1992C27.6997%2021.2326%2027.9664%2021.4992%2027.9997%2021.9992V24.3992H29.5997C30.0997%2024.4326%2030.3664%2024.6992%2030.3997%2025.1992C30.3664%2025.6992%2030.0997%2025.9659%2029.5997%2025.9992H27.1997C26.6997%2025.9659%2026.433%2025.6992%2026.3997%2025.1992V21.9992C26.433%2021.4992%2026.6997%2021.2326%2027.1997%2021.1992Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"No Candidate found"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
