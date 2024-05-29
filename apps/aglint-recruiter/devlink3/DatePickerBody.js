"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DatePickerBody.module.css";

export function DatePickerBody({
  as: _Component = _Builtin.Block,
  slotMuiDatePicker,
  textDescription = "Pick date range and click continue to configure request availability settings",
  onClickButton = {},
  isEmailAgent = false,
  isPhoneAgent = false,
  isRequestAvailability = false,
  isSelfScheduling = true,
  isContinueButton = true,
  isLoading = false,
}) {
  return (
    <_Component className={_utils.cx(_styles, "date_picker")} tag="div">
      {isEmailAgent ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "flex_ve_center_10")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%22126%22%20height%3D%2228%22%20viewBox%3D%220%200%20126%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.5%22%20width%3D%22125%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23FFF7ED%22%2F%3E%0A%3Cpath%20d%3D%22M16.5%209C16.2083%209%2015.9688%209.09375%2015.7812%209.28125C15.5938%209.46875%2015.5%209.70833%2015.5%2010V11.25L21.625%2015.7188C22.2083%2016.1146%2022.7917%2016.1146%2023.375%2015.7188L29.5%2011.25V10C29.5%209.70833%2029.4062%209.46875%2029.2188%209.28125C29.0312%209.09375%2028.7917%209%2028.5%209H16.5ZM15.5%2012.5V18C15.5%2018.2917%2015.5938%2018.5312%2015.7812%2018.7188C15.9688%2018.9062%2016.2083%2019%2016.5%2019H28.5C28.7917%2019%2029.0312%2018.9062%2029.2188%2018.7188C29.4062%2018.5312%2029.5%2018.2917%2029.5%2018V12.5L23.9688%2016.5312C23.5312%2016.8646%2023.0417%2017.0312%2022.5%2017.0312C21.9583%2017.0312%2021.4688%2016.8646%2021.0312%2016.5312L15.5%2012.5ZM14.5%2010C14.5208%209.4375%2014.7188%208.96875%2015.0938%208.59375C15.4688%208.21875%2015.9375%208.02083%2016.5%208H28.5C29.0625%208.02083%2029.5312%208.21875%2029.9062%208.59375C30.2812%208.96875%2030.4792%209.4375%2030.5%2010V18C30.4792%2018.5625%2030.2812%2019.0312%2029.9062%2019.4062C29.5312%2019.7812%2029.0625%2019.9792%2028.5%2020H16.5C15.9375%2019.9792%2015.4688%2019.7812%2015.0938%2019.4062C14.7188%2019.0312%2014.5208%2018.5625%2014.5%2018V10Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M33.4395%2010.7184L33.4395%2010.7185L34.5639%2011L33.4395%2011.2815L33.4395%2011.2816L33.3975%2011.2921C32.7419%2011.4563%2032.232%2011.5841%2031.8283%2011.729C31.4111%2011.8788%2031.0895%2012.0528%2030.8208%2012.3197L30.8203%2012.3203C30.5529%2012.5877%2030.3788%2012.9097%2030.229%2013.3272C30.0847%2013.7295%2029.9574%2014.2376%2029.7941%2014.8892L29.7816%2014.9395L29.7815%2014.9395L29.5%2016.0639L29.2185%2014.9395L29.2184%2014.9395L29.2079%2014.8975C29.0437%2014.2419%2028.9159%2013.732%2028.771%2013.3283C28.6212%2012.9111%2028.4472%2012.5895%2028.1803%2012.3208L28.1797%2012.3203C27.9123%2012.0529%2027.5903%2011.8788%2027.1728%2011.729C26.7705%2011.5847%2026.2624%2011.4574%2025.6108%2011.2941L25.5605%2011.2816L25.5605%2011.2815L24.4361%2011L25.5605%2010.7185L25.5605%2010.7184L25.6025%2010.7079C26.2581%2010.5437%2026.768%2010.4159%2027.1717%2010.271C27.5889%2010.1212%2027.9105%209.94716%2028.1792%209.68026L28.1797%209.67972C28.4471%209.4123%2028.6212%209.09033%2028.771%208.67282C28.9153%208.2705%2029.0426%207.7624%2029.2059%207.11079L29.2184%207.06053L29.2185%207.06049L29.5%205.93608L29.7815%207.06049L29.7816%207.06053L29.7921%207.1025C29.9563%207.75813%2030.0841%208.26804%2030.229%208.6717C30.3788%209.08893%2030.5528%209.41049%2030.8197%209.67918L30.8203%209.67972C31.0877%209.94714%2031.4097%2010.1212%2031.8272%2010.271C32.2295%2010.4153%2032.7376%2010.5426%2033.3892%2010.7059L33.4395%2010.7184Z%22%20fill%3D%22%23FF6224%22%20stroke%3D%22white%22%20stroke-width%3D%220.454737%22%2F%3E%0A%3Cpath%20d%3D%22M40.0288%2019V9.13574H46.1401V10.2432H41.2593V13.4082H45.8872V14.502H41.2593V17.8926H46.1401V19H40.0288ZM48.0642%2019V11.6309H49.2537V12.752H49.3631C49.6912%2011.959%2050.3885%2011.501%2051.3523%2011.501C52.3504%2011.501%2053.0476%2012.0273%2053.3894%2012.793H53.4988C53.8953%2012.0137%2054.7361%2011.501%2055.7547%2011.501C57.2586%2011.501%2058.0994%2012.3623%2058.0994%2013.9072V19H56.9099V14.1807C56.9099%2013.0938%2056.4109%2012.5537%2055.3719%2012.5537C54.3465%2012.5537%2053.6697%2013.3262%2053.6697%2014.2627V19H52.4803V13.9961C52.4803%2013.1211%2051.8787%2012.5537%2050.949%2012.5537C49.9851%2012.5537%2049.2537%2013.3945%2049.2537%2014.4336V19H48.0642ZM62.1153%2019.1299C60.714%2019.1299%2059.6544%2018.2822%2059.6544%2016.9424V16.9287C59.6544%2015.6162%2060.6251%2014.8574%2062.3409%2014.7549L64.4532%2014.625V13.9551C64.4532%2013.0459%2063.8995%2012.5537%2062.7989%2012.5537C61.9171%2012.5537%2061.336%2012.8818%2061.1446%2013.4561L61.1378%2013.4766H59.9483L59.9552%2013.4355C60.1466%2012.2803%2061.2677%2011.501%2062.8399%2011.501C64.6378%2011.501%2065.6427%2012.4238%2065.6427%2013.9551V19H64.4532V17.9131H64.3438C63.879%2018.6992%2063.1065%2019.1299%2062.1153%2019.1299ZM60.8712%2016.915C60.8712%2017.6602%2061.5069%2018.0977%2062.3614%2018.0977C63.5714%2018.0977%2064.4532%2017.3047%2064.4532%2016.252V15.582L62.4845%2015.7051C61.3634%2015.7734%2060.8712%2016.1699%2060.8712%2016.9014V16.915ZM68.2914%2010.209C67.8402%2010.209%2067.4711%209.83984%2067.4711%209.38867C67.4711%208.9375%2067.8402%208.56836%2068.2914%208.56836C68.7426%208.56836%2069.1117%208.9375%2069.1117%209.38867C69.1117%209.83984%2068.7426%2010.209%2068.2914%2010.209ZM67.6898%2019V11.6309H68.8793V19H67.6898ZM71.0358%2019V8.70508H72.2253V19H71.0358ZM77.5023%2019L81.139%209.13574H82.3558L85.9925%2019H84.7005L83.7093%2016.1768H79.7855L78.7942%2019H77.5023ZM81.6927%2010.7285L80.1478%2015.1309H83.347L81.8021%2010.7285H81.6927ZM90.0426%2021.5977C88.2652%2021.5977%2087.1305%2020.7979%2086.9459%2019.5879L86.9596%2019.5811H88.19L88.1969%2019.5879C88.3268%2020.1484%2088.983%2020.5449%2090.0426%2020.5449C91.3619%2020.5449%2092.1481%2019.9229%2092.1481%2018.8359V17.3457H92.0387C91.5738%2018.1592%2090.7399%2018.6172%2089.7281%2018.6172C87.8209%2018.6172%2086.6383%2017.1406%2086.6383%2015.0762V15.0625C86.6383%2012.998%2087.8277%2011.501%2089.7555%2011.501C90.7945%2011.501%2091.6012%2012.0137%2092.0524%2012.8477H92.1344V11.6309H93.3238V18.8975C93.3238%2020.5449%2092.0524%2021.5977%2090.0426%2021.5977ZM89.9879%2017.5645C91.3551%2017.5645%2092.1754%2016.5391%2092.1754%2015.0762V15.0625C92.1754%2013.5996%2091.3483%2012.5537%2089.9879%2012.5537C88.6207%2012.5537%2087.8551%2013.5996%2087.8551%2015.0625V15.0762C87.8551%2016.5391%2088.6207%2017.5645%2089.9879%2017.5645ZM98.3925%2019.1299C96.287%2019.1299%2095.0155%2017.6533%2095.0155%2015.3428V15.3359C95.0155%2013.0596%2096.3144%2011.501%2098.3173%2011.501C100.32%2011.501%20101.537%2012.9912%20101.537%2015.1924V15.6572H96.2323C96.2665%2017.1816%2097.1073%2018.0703%2098.4198%2018.0703C99.4179%2018.0703%20100.033%2017.5986%20100.231%2017.1543L100.259%2017.0928H101.448L101.434%2017.1475C101.182%2018.1455%20100.129%2019.1299%2098.3925%2019.1299ZM98.3105%2012.5605C97.2167%2012.5605%2096.3827%2013.3057%2096.2528%2014.707H100.327C100.204%2013.251%2099.3974%2012.5605%2098.3105%2012.5605ZM103.229%2019V11.6309H104.418V12.7383H104.528C104.897%2011.959%20105.587%2011.501%20106.674%2011.501C108.328%2011.501%20109.251%2012.4785%20109.251%2014.2285V19H108.062V14.5156C108.062%2013.1895%20107.515%2012.5537%20106.339%2012.5537C105.163%2012.5537%20104.418%2013.3467%20104.418%2014.6387V19H103.229ZM113.869%2019.0547C112.351%2019.0547%20111.715%2018.4941%20111.715%2017.0859V12.6152H110.553V11.6309H111.715V9.72363H112.946V11.6309H114.559V12.6152H112.946V16.7852C112.946%2017.6533%20113.247%2018.002%20114.012%2018.002C114.224%2018.002%20114.34%2017.9951%20114.559%2017.9746V18.9863C114.327%2019.0273%20114.101%2019.0547%20113.869%2019.0547Z%22%20fill%3D%22%23703815%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">
            {
              "Pick date range in which you want to schedule interview using email agent."
            }
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isPhoneAgent ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "flex_ve_center_10")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%22132%22%20height%3D%2228%22%20viewBox%3D%220%200%20132%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.5%22%20width%3D%22131%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23FFF7ED%22%2F%3E%0A%3Cpath%20d%3D%22M26.25%2014.5938L29.75%2016.0938C30.0208%2016.2188%2030.2292%2016.4167%2030.375%2016.6875C30.5%2016.9375%2030.5312%2017.2083%2030.4688%2017.5L29.7188%2021C29.5521%2021.625%2029.1458%2021.9583%2028.5%2022C28.3125%2022%2028.125%2022%2027.9375%2022C27.7917%2021.9792%2027.6458%2021.9688%2027.5%2021.9688C25.0625%2021.7604%2022.8646%2021.0208%2020.9062%2019.75C18.9479%2018.4792%2017.3958%2016.8229%2016.25%2014.7812C15.1042%2012.7604%2014.5208%2010.5%2014.5%208C14.5417%207.35417%2014.875%206.94792%2015.5%206.78125L19%206.03125C19.2917%205.96875%2019.5625%206.01042%2019.8125%206.15625C20.0833%206.28125%2020.2812%206.47917%2020.4062%206.75L21.9062%2010.25C22.1146%2010.8125%2021.9896%2011.3021%2021.5312%2011.7188L20.2812%2012.75C21.1354%2014.2083%2022.2917%2015.3646%2023.75%2016.2188L24.7812%2014.9688C25.1979%2014.5104%2025.6875%2014.3854%2026.25%2014.5938ZM28.5%2021C28.625%2021%2028.7083%2020.9375%2028.75%2020.8125L29.5%2017.3125C29.5208%2017.1667%2029.4688%2017.0729%2029.3438%2017.0312L25.8438%2015.5312C25.7396%2015.4896%2025.6458%2015.5104%2025.5625%2015.5938L24.5312%2016.875C24.1562%2017.25%2023.7292%2017.3229%2023.25%2017.0938C21.625%2016.1562%2020.3438%2014.875%2019.4062%2013.25C19.1771%2012.7708%2019.25%2012.3438%2019.625%2011.9688L20.9062%2010.9375C20.9896%2010.8542%2021.0104%2010.7604%2020.9688%2010.6562L19.4688%207.15625C19.4062%207.03125%2019.3125%206.97917%2019.1875%207L15.6875%207.75C15.5625%207.79167%2015.5%207.875%2015.5%208C15.5208%2010.4167%2016.1146%2012.6042%2017.2812%2014.5625C18.4271%2016.5208%2019.9792%2018.0729%2021.9375%2019.2188C23.8958%2020.3854%2026.0833%2020.9792%2028.5%2021Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M30.7829%209.76537L30.7829%209.76538L31.7199%2010L30.7829%2010.2346L30.7829%2010.2346L30.7479%2010.2434C30.2016%2010.3803%2029.7766%2010.4868%2029.4402%2010.6075C29.0926%2010.7324%2028.8246%2010.8774%2028.6007%2011.0998L28.6002%2011.1002C28.3774%2011.3231%2028.2323%2011.5914%2028.1075%2011.9393C27.9872%2012.2746%2027.8812%2012.698%2027.7451%2013.241L27.7346%2013.2829L27.7346%2013.2829L27.5%2014.2199L27.2654%2013.2829L27.2654%2013.2829L27.2566%2013.2479C27.1197%2012.7016%2027.0133%2012.2766%2026.8925%2011.9402C26.7676%2011.5926%2026.6226%2011.3246%2026.4002%2011.1007L26.3998%2011.1002C26.1769%2010.8774%2025.9086%2010.7323%2025.5607%2010.6075C25.2254%2010.4872%2024.802%2010.3812%2024.259%2010.2451L24.2171%2010.2346L24.2171%2010.2346L23.2801%2010L24.2171%209.76538L24.2171%209.76537L24.2521%209.75661C24.7984%209.61972%2025.2234%209.51325%2025.5598%209.39247C25.9074%209.26764%2026.1754%209.12264%2026.3993%208.90022L26.3998%208.89977C26.6226%208.67692%2026.7677%208.40861%2026.8925%208.06068C27.0128%207.72541%2027.1188%207.302%2027.2549%206.75899L27.2654%206.71711L27.2654%206.71707L27.5%205.78006L27.7346%206.71708L27.7346%206.71711L27.7434%206.7521C27.8803%207.29845%2027.9868%207.72337%2028.1075%208.05975C28.2324%208.40744%2028.3774%208.6754%2028.5998%208.89932L28.6002%208.89977C28.8231%209.12261%2029.0914%209.26769%2029.4393%209.39249C29.7746%209.51275%2030.198%209.61883%2030.741%209.75488L30.7829%209.76537Z%22%20fill%3D%22%23FF6224%22%20stroke%3D%22white%22%20stroke-width%3D%220.378947%22%2F%3E%0A%3Cpath%20d%3D%22M39.8569%2019V9.13574H43.5757C45.4282%209.13574%2046.7407%2010.4141%2046.7407%2012.2871V12.3008C46.7407%2014.1738%2045.4282%2015.4795%2043.5757%2015.4795H41.0874V19H39.8569ZM43.2612%2010.2295H41.0874V14.3857H43.2612C44.6694%2014.3857%2045.4829%2013.6133%2045.4829%2012.3145V12.3008C45.4829%2011.002%2044.6694%2010.2295%2043.2612%2010.2295ZM48.5213%2019V8.70508H49.7107V12.7383H49.8201C50.1892%2011.959%2050.8797%2011.501%2051.9666%2011.501C53.6209%2011.501%2054.5437%2012.4785%2054.5437%2014.2285V19H53.3543V14.5156C53.3543%2013.1895%2052.8074%2012.5537%2051.6316%2012.5537C50.4558%2012.5537%2049.7107%2013.3467%2049.7107%2014.6387V19H48.5213ZM59.5714%2019.1299C57.4727%2019.1299%2056.1739%2017.6807%2056.1739%2015.3223V15.3086C56.1739%2012.9434%2057.4727%2011.501%2059.5714%2011.501C61.67%2011.501%2062.9688%2012.9434%2062.9688%2015.3086V15.3223C62.9688%2017.6807%2061.67%2019.1299%2059.5714%2019.1299ZM59.5714%2018.0771C60.9659%2018.0771%2061.752%2017.0586%2061.752%2015.3223V15.3086C61.752%2013.5654%2060.9659%2012.5537%2059.5714%2012.5537C58.1768%2012.5537%2057.3907%2013.5654%2057.3907%2015.3086V15.3223C57.3907%2017.0586%2058.1768%2018.0771%2059.5714%2018.0771ZM64.6605%2019V11.6309H65.85V12.7383H65.9594C66.3285%2011.959%2067.0189%2011.501%2068.1059%2011.501C69.7601%2011.501%2070.683%2012.4785%2070.683%2014.2285V19H69.4935V14.5156C69.4935%2013.1895%2068.9467%2012.5537%2067.7709%2012.5537C66.5951%2012.5537%2065.85%2013.3467%2065.85%2014.6387V19H64.6605ZM75.6901%2019.1299C73.5847%2019.1299%2072.3132%2017.6533%2072.3132%2015.3428V15.3359C72.3132%2013.0596%2073.612%2011.501%2075.6149%2011.501C77.6179%2011.501%2078.8347%2012.9912%2078.8347%2015.1924V15.6572H73.53C73.5642%2017.1816%2074.405%2018.0703%2075.7175%2018.0703C76.7155%2018.0703%2077.3308%2017.5986%2077.529%2017.1543L77.5563%2017.0928H78.7458L78.7321%2017.1475C78.4792%2018.1455%2077.4265%2019.1299%2075.6901%2019.1299ZM75.6081%2012.5605C74.5144%2012.5605%2073.6804%2013.3057%2073.5505%2014.707H77.6247C77.5017%2013.251%2076.695%2012.5605%2075.6081%2012.5605ZM83.6741%2019L87.3108%209.13574H88.5276L92.1644%2019H90.8724L89.8812%2016.1768H85.9573L84.9661%2019H83.6741ZM87.8646%2010.7285L86.3196%2015.1309H89.5189L87.9739%2010.7285H87.8646ZM96.2145%2021.5977C94.4371%2021.5977%2093.3024%2020.7979%2093.1178%2019.5879L93.1315%2019.5811H94.3619L94.3688%2019.5879C94.4986%2020.1484%2095.1549%2020.5449%2096.2145%2020.5449C97.5338%2020.5449%2098.3199%2019.9229%2098.3199%2018.8359V17.3457H98.2106C97.7457%2018.1592%2096.9117%2018.6172%2095.9%2018.6172C93.9928%2018.6172%2092.8102%2017.1406%2092.8102%2015.0762V15.0625C92.8102%2012.998%2093.9996%2011.501%2095.9274%2011.501C96.9664%2011.501%2097.7731%2012.0137%2098.2242%2012.8477H98.3063V11.6309H99.4957V18.8975C99.4957%2020.5449%2098.2242%2021.5977%2096.2145%2021.5977ZM96.1598%2017.5645C97.527%2017.5645%2098.3473%2016.5391%2098.3473%2015.0762V15.0625C98.3473%2013.5996%2097.5201%2012.5537%2096.1598%2012.5537C94.7926%2012.5537%2094.027%2013.5996%2094.027%2015.0625V15.0762C94.027%2016.5391%2094.7926%2017.5645%2096.1598%2017.5645ZM104.564%2019.1299C102.459%2019.1299%20101.187%2017.6533%20101.187%2015.3428V15.3359C101.187%2013.0596%20102.486%2011.501%20104.489%2011.501C106.492%2011.501%20107.709%2012.9912%20107.709%2015.1924V15.6572H102.404C102.438%2017.1816%20103.279%2018.0703%20104.592%2018.0703C105.59%2018.0703%20106.205%2017.5986%20106.403%2017.1543L106.431%2017.0928H107.62L107.606%2017.1475C107.353%2018.1455%20106.301%2019.1299%20104.564%2019.1299ZM104.482%2012.5605C103.389%2012.5605%20102.555%2013.3057%20102.425%2014.707H106.499C106.376%2013.251%20105.569%2012.5605%20104.482%2012.5605ZM109.401%2019V11.6309H110.59V12.7383H110.699C111.069%2011.959%20111.759%2011.501%20112.846%2011.501C114.5%2011.501%20115.423%2012.4785%20115.423%2014.2285V19H114.234V14.5156C114.234%2013.1895%20113.687%2012.5537%20112.511%2012.5537C111.335%2012.5537%20110.59%2013.3467%20110.59%2014.6387V19H109.401ZM120.041%2019.0547C118.523%2019.0547%20117.887%2018.4941%20117.887%2017.0859V12.6152H116.725V11.6309H117.887V9.72363H119.118V11.6309H120.731V12.6152H119.118V16.7852C119.118%2017.6533%20119.418%2018.002%20120.184%2018.002C120.396%2018.002%20120.512%2017.9951%20120.731%2017.9746V18.9863C120.499%2019.0273%20120.273%2019.0547%20120.041%2019.0547Z%22%20fill%3D%22%23703815%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">
            {
              "Pick date range in which you want to schedule interview using phone agent."
            }
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isRequestAvailability ? (
        <_Builtin.Block tag="div">
          {
            "Pick date range and click continue to configure request availability settings"
          }
        </_Builtin.Block>
      ) : null}
      {isSelfScheduling ? (
        <_Builtin.Block tag="div">
          {
            "Pick date range and click continue to get available options for the selected schedules"
          }
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "slot_mui_datepicker")}
        tag="div"
      >
        {slotMuiDatePicker ?? (
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/651125c25c47e8494b8e9eb8/664e02f968917e9a83533a35_image%2052.png"
          />
        )}
      </_Builtin.Block>
      {isPhoneAgent ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey_600")}
          tag="div"
        >
          {"A task will be created and assigned to phone agent."}
        </_Builtin.Block>
      ) : null}
      {isEmailAgent ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "text-grey_600")}
          tag="div"
        >
          {"A task will be created and assigned to email agent."}
        </_Builtin.Block>
      ) : null}
      {isPhoneAgent ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "button_primary", "large_btn-copy")}
          tag="div"
          {...onClickButton}
        >
          <_Builtin.Block tag="div">
            {"Schedule Via Phone Agent"}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isEmailAgent ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "button_primary", "large_btn-copy")}
          tag="div"
          {...onClickButton}
        >
          <_Builtin.Block tag="div">
            {"Schedule Via Email Agent"}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isContinueButton ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "button_primary", "large_btn-copy")}
          tag="div"
          {...onClickButton}
        >
          <_Builtin.Block tag="div">{"Continue"}</_Builtin.Block>
          {isLoading ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "isloading_continue")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Loading..."}</_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
