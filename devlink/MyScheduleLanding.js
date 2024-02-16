import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MyScheduleLanding.module.css";

export function MyScheduleLanding({
  as: _Component = _Builtin.Block,
  onClickConnectCalender = {},
  isConnectCalenderVisible = true,
  isConnectedVisible = false,
  textConnectedTo = "Connected to raimonrts@gmail.com",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "tema-landing-body-inner")}
      tag="div"
    >
      {isConnectCalenderVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-882", "width-373")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2261%22%20height%3D%2262%22%20viewBox%3D%220%200%2061%2062%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M33.3%2025.7964L35.0334%2028.263L37.7001%2026.3297V40.3297H40.5667V21.9297H38.1667L33.3%2025.7964Z%22%20fill%3D%22%231E88E5%22%2F%3E%0A%3Cpath%20d%3D%22M28.7002%2030.5982C29.7668%2029.6648%2030.4335%2028.2648%2030.4335%2026.7982C30.4335%2023.8648%2027.8335%2021.4648%2024.7002%2021.4648C22.0335%2021.4648%2019.7002%2023.1315%2019.1002%2025.5982L21.9002%2026.3315C22.1668%2025.1982%2023.3668%2024.3982%2024.7002%2024.3982C26.3002%2024.3982%2027.5668%2025.4648%2027.5668%2026.7982C27.5668%2028.1315%2026.3002%2029.1982%2024.7002%2029.1982H23.0335V32.1315H24.7002C26.5002%2032.1315%2028.0335%2033.3982%2028.0335%2034.8648C28.0335%2036.3982%2026.5668%2037.5982%2024.7668%2037.5982C23.1668%2037.5982%2021.7668%2036.5982%2021.5668%2035.1982L18.7668%2035.6648C19.2335%2038.3982%2021.8335%2040.4648%2024.8335%2040.4648C28.2335%2040.4648%2030.9668%2037.9315%2030.9668%2034.7982C30.9002%2033.1315%2030.0335%2031.5982%2028.7002%2030.5982Z%22%20fill%3D%22%231E88E5%22%2F%3E%0A%3Cpath%20d%3D%22M47.2999%2061.1969H13.7V47.7969H47.2999V61.1969Z%22%20fill%3D%22%23FBC02D%22%2F%3E%0A%3Cpath%20d%3D%22M60.7001%2047.7992V14.1992H47.3V47.7992H60.7001Z%22%20fill%3D%22%234CAF50%22%2F%3E%0A%3Cpath%20d%3D%22M47.3001%2014.1969V0.796875H5.30007C2.50007%200.796875%200.233398%203.06354%200.233398%205.86354V47.8635H13.6334V14.1969H47.3001Z%22%20fill%3D%22%231E88E5%22%2F%3E%0A%3Cpath%20d%3D%22M47.3%2047.7969V61.1969L60.7001%2047.7969H47.3Z%22%20fill%3D%22%23E53935%22%2F%3E%0A%3Cpath%20d%3D%22M55.7001%200.796875H47.3V14.1969H60.7001V5.79687C60.7001%202.99688%2058.5001%200.796875%2055.7001%200.796875Z%22%20fill%3D%22%231565C0%22%2F%3E%0A%3Cpath%20d%3D%22M5.30005%2061.1969H13.7V47.7969H0.300049V56.1969C0.300049%2058.9969%202.50005%2061.1969%205.30005%2061.1969Z%22%20fill%3D%22%231565C0%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold", "mt-20")}
            tag="div"
          >
            {
              "You haven’t connected your calender year. Connect your calender to get access to your scheduled events."
            }
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-primary-schedule")}
            tag="div"
            {...onClickConnectCalender}
          >
            <_Builtin.Block tag="div">{"Connect Calender"}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isConnectedVisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-882")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.8%204.4C11.55%204.45%2011.95%204.85%2012%205.6V9.2H26.4001V5.6C26.4501%204.85%2026.8501%204.45%2027.6001%204.4C28.3501%204.45%2028.7501%204.85%2028.8001%205.6V9.2H31.2001C32.5501%209.25%2033.6751%209.725%2034.5751%2010.625C35.4751%2011.525%2035.9501%2012.65%2036.0001%2014V16.4V18.8V18.875C35.6001%2018.825%2035.2001%2018.8%2034.8001%2018.8C34.4001%2018.8%2034.0001%2018.825%2033.6001%2018.875V18.8H4.80005V38C4.80005%2038.7%205.02505%2039.275%205.47505%2039.725C5.92505%2040.175%206.50005%2040.4%207.20005%2040.4H24.6001C25.3501%2041.3%2026.2251%2042.1%2027.2251%2042.8H7.20005C5.85005%2042.75%204.72505%2042.275%203.82505%2041.375C2.92505%2040.475%202.45005%2039.35%202.40005%2038V18.8V16.4V14C2.45005%2012.65%202.92505%2011.525%203.82505%2010.625C4.72505%209.725%205.85005%209.25%207.20005%209.2H9.60005V5.6C9.65005%204.85%2010.05%204.45%2010.8%204.4ZM31.2001%2011.6H7.20005C6.50005%2011.6%205.92505%2011.825%205.47505%2012.275C5.02505%2012.725%204.80005%2013.3%204.80005%2014V16.4H33.6001V14C33.6001%2013.3%2033.3751%2012.725%2032.9251%2012.275C32.4751%2011.825%2031.9001%2011.6%2031.2001%2011.6ZM34.8001%2040.4C36.3001%2040.4%2037.7001%2040.025%2039.0001%2039.275C40.3001%2038.525%2041.3251%2037.5%2042.0751%2036.2C42.8251%2034.9%2043.2001%2033.5%2043.2001%2032C43.2001%2030.5%2042.8251%2029.1%2042.0751%2027.8C41.3251%2026.5%2040.3001%2025.475%2039.0001%2024.725C37.7001%2023.975%2036.3001%2023.6%2034.8001%2023.6C33.3001%2023.6%2031.9001%2023.975%2030.6001%2024.725C29.3001%2025.475%2028.2751%2026.5%2027.5251%2027.8C26.7751%2029.1%2026.4001%2030.5%2026.4001%2032C26.4001%2033.5%2026.7751%2034.9%2027.5251%2036.2C28.2751%2037.5%2029.3001%2038.525%2030.6001%2039.275C31.9001%2040.025%2033.3001%2040.4%2034.8001%2040.4ZM34.8001%2021.2C36.7501%2021.2%2038.5501%2021.675%2040.2001%2022.625C41.8501%2023.575%2043.1751%2024.9%2044.1751%2026.6C45.1251%2028.3%2045.6001%2030.1%2045.6001%2032C45.6001%2033.9%2045.1251%2035.7%2044.1751%2037.4C43.1751%2039.1%2041.8501%2040.425%2040.2001%2041.375C38.5501%2042.325%2036.7501%2042.8%2034.8001%2042.8C32.8501%2042.8%2031.0501%2042.325%2029.4001%2041.375C27.7501%2040.425%2026.4251%2039.1%2025.4251%2037.4C24.4751%2035.7%2024.0001%2033.9%2024.0001%2032C24.0001%2030.1%2024.4751%2028.3%2025.4251%2026.6C26.4251%2024.9%2027.7501%2023.575%2029.4001%2022.625C31.0501%2021.675%2032.8501%2021.2%2034.8001%2021.2ZM34.8001%2026C35.5501%2026.05%2035.9501%2026.45%2036.0001%2027.2V30.8H38.4001C39.1501%2030.85%2039.5501%2031.25%2039.6001%2032C39.5501%2032.75%2039.1501%2033.15%2038.4001%2033.2H34.8001C34.0501%2033.15%2033.6501%2032.75%2033.6001%2032V27.2C33.6501%2026.45%2034.0501%2026.05%2034.8001%2026Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold")}
              tag="div"
            >
              {"No interviews are scheduled at the moment."}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-600")}
              tag="div"
            >
              {
                "Once an interview is scheduled with your name, it will appear here."
              }
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-884")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.8403%208.44516L11.3603%209.18516L12.1603%208.60516V12.8052H13.0203V7.28516H12.3003L10.8403%208.44516Z%22%20fill%3D%22%231E88E5%22%2F%3E%0A%3Cpath%20d%3D%22M9.46022%209.88453C9.78022%209.60453%209.98022%209.18453%209.98022%208.74453C9.98022%207.86453%209.20022%207.14453%208.26022%207.14453C7.46022%207.14453%206.76022%207.64453%206.58022%208.38453L7.42022%208.60453C7.50022%208.26453%207.86022%208.02453%208.26022%208.02453C8.74022%208.02453%209.12022%208.34453%209.12022%208.74453C9.12022%209.14453%208.74022%209.46453%208.26022%209.46453H7.76022V10.3445H8.26022C8.80022%2010.3445%209.26022%2010.7245%209.26022%2011.1645C9.26022%2011.6245%208.82022%2011.9845%208.28022%2011.9845C7.80022%2011.9845%207.38022%2011.6845%207.32022%2011.2645L6.48022%2011.4045C6.62022%2012.2245%207.40022%2012.8445%208.30022%2012.8445C9.32022%2012.8445%2010.1402%2012.0845%2010.1402%2011.1445C10.1202%2010.6445%209.86022%2010.1845%209.46022%209.88453Z%22%20fill%3D%22%231E88E5%22%2F%3E%0A%3Cpath%20d%3D%22M15.0404%2019.063H4.96045V15.043H15.0404V19.063Z%22%20fill%3D%22%23FBC02D%22%2F%3E%0A%3Cpath%20d%3D%22M19.0605%2015.0448V4.96484H15.0405V15.0448H19.0605Z%22%20fill%3D%22%234CAF50%22%2F%3E%0A%3Cpath%20d%3D%22M15.0404%204.96531V0.945312H2.44041C1.60041%200.945312%200.92041%201.62531%200.92041%202.46531V15.0653H4.94041V4.96531H15.0404Z%22%20fill%3D%22%231E88E5%22%2F%3E%0A%3Cpath%20d%3D%22M15.0405%2015.043V19.063L19.0605%2015.043H15.0405Z%22%20fill%3D%22%23E53935%22%2F%3E%0A%3Cpath%20d%3D%22M17.5605%200.945312H15.0405V4.96531H19.0605V2.44531C19.0605%201.60531%2018.4005%200.945312%2017.5605%200.945312Z%22%20fill%3D%22%231565C0%22%2F%3E%0A%3Cpath%20d%3D%22M2.44019%2019.063H4.96019V15.043H0.940186V17.563C0.940186%2018.403%201.60019%2019.063%202.44019%2019.063Z%22%20fill%3D%22%231565C0%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{textConnectedTo}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
