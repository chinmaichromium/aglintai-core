import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CandidateListTopBar.module.css";

export function CandidateListTopBar({
  as: _Component = _Builtin.Block,
  onClickCheckbox = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "candidate-list-item")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-328")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "checkbox-wrappers-job")}
          tag="div"
          {...onClickCheckbox}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "add-icon")}
            value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20y%3D%220.5%22%20width%3D%2216%22%20height%3D%2216%22%20rx%3D%224%22%20fill%3D%22%231F73B7%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7%209.08579L10.2929%205.79289C10.6834%205.40237%2011.3166%205.40237%2011.7071%205.79289C12.0976%206.18342%2012.0976%206.81658%2011.7071%207.20711L7.70711%2011.2071C7.31658%2011.5976%206.68342%2011.5976%206.29289%2011.2071L4.29289%209.20711C3.90237%208.81658%203.90237%208.18342%204.29289%207.79289C4.68342%207.40237%205.31658%207.40237%205.70711%207.79289L7%209.08579Z%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%221.5%22%20y%3D%222%22%20width%3D%2213%22%20height%3D%2213%22%20rx%3D%223.5%22%20stroke%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "list-main-info")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate-resume-info", "top-bar")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "list-top-bar-description-block")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed")}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.99662%2010.4416C8.02889%2010.7158%207.83272%2010.9643%207.55847%2010.9966C7.28422%2011.0288%207.03574%2010.8327%207.00347%2010.5584C6.83287%209.10827%205.54418%208%204.00005%208C2.45592%208%201.16723%209.10827%200.996623%2010.5584C0.964359%2010.8327%200.715878%2011.0288%200.441627%2010.9966C0.167377%2010.9643%20-0.028792%2010.7158%200.0034728%2010.4416C0.234176%208.4806%201.95581%207%204.00005%207C6.04429%207%207.76592%208.4806%207.99662%2010.4416ZM8.00005%204C7.72391%204%207.50005%203.77614%207.50005%203.5C7.50005%203.22386%207.72391%203%208.00005%203H11.5C11.7762%203%2012%203.22386%2012%203.5C12%203.77614%2011.7762%204%2011.5%204H8.00005ZM8.50005%207C8.22391%207%208.00005%206.77614%208.00005%206.5C8.00005%206.22386%208.22391%206%208.50005%206H11.5C11.7762%206%2012%206.22386%2012%206.5C12%206.77614%2011.7762%207%2011.5%207H8.50005ZM10%2010C9.72391%2010%209.50005%209.77614%209.50005%209.5C9.50005%209.22386%209.72391%209%2010%209H11.5C11.7762%209%2012%209.22386%2012%209.5C12%209.77614%2011.7762%2010%2011.5%2010H10ZM4.00005%206C2.61934%206%201.50005%204.88071%201.50005%203.5C1.50005%202.11929%202.61934%201%204.00005%201C5.38076%201%206.50005%202.11929%206.50005%203.5C6.50005%204.88071%205.38076%206%204.00005%206ZM4.00005%205C4.82848%205%205.50005%204.32843%205.50005%203.5C5.50005%202.67157%204.82848%202%204.00005%202C3.17162%202%202.50005%202.67157%202.50005%203.5C2.50005%204.32843%203.17162%205%204.00005%205Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-600")}
              tag="div"
            >
              {"Candidate Info"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "list-top-bar-description-block")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed")}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7%201.001H2V11.001H10V4.001H8C7.44386%204.001%207%203.55714%207%203.001V1.001ZM11%203.52899V11.001C11%2011.5571%2010.5561%2012.001%2010%2012.001H2C1.44386%2012.001%201%2011.5571%201%2011.001V1.001C1%200.44486%201.44386%200.00100238%202%200.00100238H7.47202C7.49295%20-0.000325182%207.51402%20-0.000343044%207.53509%200.00100238H7.79C8.0626%200.00100238%208.32673%200.111057%208.49355%200.297449L10.6845%202.48936C10.8913%202.6755%2011%202.93092%2011%203.211V3.46591C11.0013%203.48698%2011.0013%203.50805%2011%203.52899ZM8%203.001H9.29289L8%201.70811V3.001ZM3.5%205.001H8.5C9.16667%205.001%209.16667%206.001%208.5%206.001H3.5C2.83333%206.001%202.83333%205.001%203.5%205.001ZM3.5%207.001H8.5C9.16667%207.001%209.16667%208.001%208.5%208.001H3.5C2.83333%208.001%202.83333%207.001%203.5%207.001ZM3.5%209.001H8.5C9.16667%209.001%209.16667%2010.001%208.5%2010.001H3.5C2.83333%2010.001%202.83333%209.001%203.5%209.001Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-600")}
              tag="div"
            >
              {"Resume Score"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "list-top-bar-description-block",
            "status"
          )}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon-embed")}
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.82706%203.2458C1.67474%203.47613%201.36454%203.53938%201.1342%203.38706C0.90387%203.23474%200.840625%202.92454%200.992943%202.6942C1.44005%202.01809%202.01809%201.44005%202.6942%200.992943C2.92454%200.840625%203.23474%200.90387%203.38706%201.1342C3.53938%201.36454%203.47613%201.67474%203.2458%201.82706C2.68191%202.19995%202.19995%202.68191%201.82706%203.2458ZM1.10081%207.01457C1.15351%207.28563%200.9765%207.5481%200.705435%207.60081C0.434369%207.65352%200.171899%207.4765%200.119192%207.20543C0.0406179%206.80134%200%206.40057%200%206C0%205.6015%200.040072%205.21147%200.119192%204.80457C0.171899%204.5335%200.434369%204.35649%200.705435%204.40919C0.9765%204.4619%201.15351%204.72437%201.10081%204.99543C1.03354%205.34139%201%205.66783%201%206C1%206.33476%201.03416%206.67181%201.10081%207.01457ZM3.23892%2010.175C3.4681%2010.3291%203.52902%2010.6397%203.37498%2010.8689C3.22093%2011.0981%202.91027%2011.159%202.68108%2011.005C2.01735%2010.5589%201.44114%209.98265%200.995024%209.31892C0.840982%209.08973%200.901897%208.77907%201.13108%208.62502C1.36027%208.47098%201.67093%208.5319%201.82498%208.76108C2.19886%209.31735%202.68265%209.80114%203.23892%2010.175ZM7.01456%2010.8992C7.28563%2010.8465%207.5481%2011.0235%207.60081%2011.2946C7.65351%2011.5656%207.4765%2011.8281%207.20543%2011.8808C6.80134%2011.9594%206.40057%2012%205.99873%2012C5.59696%2011.999%205.19625%2011.9589%204.80224%2011.8803C4.53142%2011.8264%204.35566%2011.563%204.40965%2011.2922C4.46364%2011.0214%204.72695%2010.8457%204.99776%2010.8997C5.32822%2010.9655%205.66431%2010.9991%206%2011C6.33476%2011%206.67181%2010.9658%207.01456%2010.8992ZM10.1729%208.7542C10.3253%208.52387%2010.6355%208.46063%2010.8658%208.61294C11.0961%208.76526%2011.1594%209.07546%2011.0071%209.3058C10.56%209.98191%209.98191%2010.56%209.3058%2011.0071C9.07546%2011.1594%208.76526%2011.0961%208.61294%2010.8658C8.46063%2010.6355%208.52387%2010.3253%208.7542%2010.1729C9.31809%209.80005%209.80005%209.31809%2010.1729%208.7542ZM10.8992%204.99543C10.8465%204.72437%2011.0235%204.4619%2011.2946%204.40919C11.5656%204.35649%2011.8281%204.5335%2011.8808%204.80457C11.9599%205.21147%2012%205.6015%2012%206C12%206.3985%2011.9599%206.78853%2011.8808%207.19544C11.8281%207.4665%2011.5656%207.64352%2011.2946%207.59081C11.0235%207.5381%2010.8465%207.27563%2010.8992%207.00457C10.9665%206.65861%2011%206.33217%2011%206C11%205.66783%2010.9665%205.34139%2010.8992%204.99543ZM8.7542%201.82706C8.52387%201.67474%208.46063%201.36454%208.61294%201.1342C8.76526%200.90387%209.07546%200.840625%209.3058%200.992943C9.98191%201.44005%2010.56%202.01809%2011.0071%202.6942C11.1594%202.92454%2011.0961%203.23474%2010.8658%203.38706C10.6355%203.53938%2010.3253%203.47613%2010.1729%203.2458C9.80005%202.68191%209.31809%202.19995%208.7542%201.82706ZM4.99543%201.10081C4.72437%201.15351%204.4619%200.9765%204.40919%200.705435C4.35649%200.434369%204.5335%200.171899%204.80457%200.119192C5.21147%200.040072%205.6015%200%206%200C6.3985%200%206.78853%200.040072%207.19544%200.119192C7.4665%200.171899%207.64352%200.434369%207.59081%200.705435C7.5381%200.9765%207.27563%201.15351%207.00457%201.10081C6.65861%201.03354%206.33217%201%206%201C5.66783%201%205.34139%201.03354%204.99543%201.10081Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-grey-600")}
            tag="div"
          >
            {"Status"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
