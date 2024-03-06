import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NoData.module.css";

export function NoData({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "empty")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "embed_flex")}
        value="%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_6160_95489)%22%3E%0A%3Cmask%20id%3D%22mask0_6160_95489%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%3Cpath%20d%3D%22M100%200H0V100H100V0Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_6160_95489)%22%3E%0A%3Cpath%20d%3D%22M47.4031%2080.0231C72.1187%2082.5244%2084.8564%2076.4446%2085.6168%2061.7836C86.757%2039.792%2067.548%2042.1677%2061.9539%2036.3717C56.3595%2030.5758%2062.6265%2038.8126%2051.8527%2026.802C44.6698%2018.7948%2035.0988%2018.7537%2023.1396%2026.6789C13.4932%2034.53%2012.4499%2044.8263%2020.0094%2057.5674C27.5689%2070.3082%2036.7%2077.7935%2047.4031%2080.0231Z%22%20fill%3D%22%23C6C6C6%22%2F%3E%0A%3Cpath%20d%3D%22M80.5042%2038.0887C79.427%2038.0887%2078.5547%2037.215%2078.5547%2036.1381C78.5547%2035.0612%2079.427%2034.1875%2080.5042%2034.1875C81.5814%2034.1875%2082.4537%2035.0612%2082.4537%2036.1381C82.4537%2037.215%2081.5814%2038.0887%2080.5042%2038.0887ZM80.5042%2036.977C80.9652%2036.977%2081.3397%2036.6019%2081.3397%2036.1381C81.3397%2035.6743%2080.9652%2035.2992%2080.5042%2035.2992C80.0429%2035.2992%2079.6684%2035.6743%2079.6684%2036.1381C79.6684%2036.6019%2080.0429%2036.977%2080.5042%2036.977Z%22%20fill%3D%22%23A5A5A5%22%2F%3E%0A%3Cmask%20id%3D%22mask1_6160_95489%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%2235%22%20y%3D%2225%22%20width%3D%2240%22%20height%3D%2212%22%3E%0A%3Cpath%20d%3D%22M74.5049%2025H35.6084L35.5859%2036.1221H74.4822L74.5049%2025Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask1_6160_95489)%22%3E%0A%3Cpath%20d%3D%22M36.1651%2025.5665C41.1495%2025.5665%2041.7726%2028.5126%2041.7726%2031.4534V34.6618C41.7726%2035.1702%2042.1592%2035.5833%2042.6349%2035.5833L72.004%2035.3278C72.4801%2035.3278%2072.8663%2034.9151%2072.8663%2034.4066V30.9478C72.8663%2027.7926%2070.4732%2025.2344%2067.5215%2025.2344C67.3215%2025.2344%2035.9564%2025.5665%2036.1651%2025.5665Z%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Cpath%20d%3D%22M36.1641%2026.1078C36.1641%2026.5888%2036.555%2026.9792%2037.0363%2026.9792C67.5276%2026.9792%2067.5332%2026.9789%2067.5388%2026.9792C69.537%2026.9826%2071.156%2028.6156%2071.1591%2030.6315V34.7648H72.0214C72.4971%2034.7648%2072.8834%2034.3754%2072.8834%2033.8954V30.6315C72.8962%2027.6505%2070.5111%2025.2237%2067.5563%2025.2109H67.5217H67.1999C67.1208%2025.2156%2067.0438%2025.2284%2066.9656%2025.2368H37.0351C36.5541%2025.2368%2036.1641%2025.6268%2036.1641%2026.1078Z%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3C%2Fg%3E%0A%3Cmask%20id%3D%22mask2_6160_95489%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%2223%22%20y%3D%2224%22%20width%3D%2249%22%20height%3D%2253%22%3E%0A%3Cpath%20d%3D%22M71.5269%2024.4688H23.6758V76.5716H71.5269V24.4688Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask2_6160_95489)%22%3E%0A%3Cpath%20d%3D%22M67.5254%2026.8855V25.25H36.4702C32.4011%2025.2562%2029.1039%2028.5812%2029.0977%2032.684V75.3715C29.0977%2075.8512%2029.4839%2076.2407%2029.9597%2076.2407H56.5494C60.6132%2076.2279%2063.9023%2072.9042%2063.9051%2068.8067V30.6388V30.598C63.9304%2028.5989%2065.5431%2026.8911%2067.5254%2026.8883C67.5335%2026.8883%2067.541%2026.8858%2067.5487%2026.8855H67.5254Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M36.4552%2025.2574C32.3858%2025.264%2029.0883%2028.5889%2029.082%2032.6917V57.683L47.6496%2025.2344L36.4552%2025.2574Z%22%20fill%3D%22%23EFEFEF%22%2F%3E%0A%3Cpath%20d%3D%22M29.1014%2042.7679V33.239C29.1079%2029.1358%2032.4051%2025.8112%2036.4746%2025.8047H67.5294M26.8945%2075.0626C28.749%2075.0626%2029.0846%2073.0922%2029.0846%2071.8471C29.0846%2061.6642%2029.1014%2054.4661%2029.1014%2051.8838M29.2637%2045.6791V46.824%22%20stroke%3D%22%23E5E5E5%22%20stroke-width%3D%221.1215%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M67.5286%2025.2266H67.2068C64.3881%2025.3982%2062.1878%2027.7518%2062.1841%2030.6007V30.682V68.7876C62.1788%2071.3842%2060.4395%2073.6509%2057.9492%2074.3069C57.6769%2074.3777%2057.3981%2074.4125%2057.1196%2074.4153V74.4163H57.0981H57.076H24.8398C26.1339%2075.5586%2027.8268%2076.253%2029.6813%2076.2546H29.6928H38.9872H56.5529C56.7423%2076.2546%2057.0352%2076.2546%2057.2252%2076.2256C57.5601%2076.1948%2057.8922%2076.1387%2058.219%2076.0577C61.5573%2075.2736%2063.9215%2072.2742%2063.9258%2068.8166V30.6297V30.5892C63.9504%2028.7153%2065.3741%2027.1643%2067.2236%2026.9948C67.3258%2026.9892%2067.5215%2026.9898%2067.623%2026.9948L67.5286%2025.2266Z%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3C%2Fg%3E%0A%3Cmask%20id%3D%22mask3_6160_95489%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%2221%22%20y%3D%2266%22%20width%3D%2237%22%20height%3D%2211%22%3E%0A%3Cpath%20d%3D%22M57.1508%2066.6016H21.8125V76.4009H57.1508V66.6016Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask3_6160_95489)%22%3E%0A%3Cpath%20d%3D%22M67.5287%2025.2344H67.2069C64.3882%2025.4063%2062.1888%2027.7596%2062.1848%2030.6085V30.6898V68.7954C62.1795%2071.392%2060.4403%2073.659%2057.9499%2074.3147C57.3845%2074.4621%2056.7907%2074.4621%2056.2256%2074.3147C53.7275%2073.6496%2051.9889%2071.3671%2051.9957%2068.7609V67.6014C51.9991%2067.1213%2051.616%2066.7288%2051.1399%2066.726H45.6761H41.2832H34.511H27.4203H23.1823C22.7066%2066.726%2022.3203%2067.1157%2022.3203%2067.5957V68.8247C22.3166%2072.9291%2025.6132%2076.259%2029.682%2076.2624H29.6929H38.9873H56.5527C56.7424%2076.2624%2057.0356%2076.2624%2057.2253%2076.2334C57.5605%2076.2026%2057.8929%2076.1468%2058.2197%2076.0655C61.558%2075.2817%2063.9219%2072.2824%2063.9259%2068.8247V30.6378V30.597C63.9505%2028.7235%2065.3745%2027.1718%2067.2244%2027.0029C67.3315%2026.997%2067.4387%2026.997%2067.5462%2027.0029C69.5443%2027.006%2071.1633%2028.6394%2071.1667%2030.6549V34.7886H72.0287C72.5047%2034.7886%2072.891%2034.3992%2072.891%2033.9191V30.6549C72.9035%2027.6739%2070.5184%2025.2475%2067.5636%2025.2344H67.5287Z%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3C%2Fg%3E%0A%3Cmask%20id%3D%22mask4_6160_95489%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%3Cpath%20d%3D%22M0%200H100V100H0V0Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask4_6160_95489)%22%3E%0A%3Cmask%20id%3D%22mask5_6160_95489%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%2229%22%20y%3D%2226%22%20width%3D%2236%22%20height%3D%2249%22%3E%0A%3Cpath%20d%3D%22M64.2555%2026.3906C62.2305%2026.3906%2036.0623%2026.3906%2036.0623%2026.3906L31.4673%2029.6617L29.7539%2039.5526V66.7333C29.7539%2066.7333%2050.6262%2066.7333%2051.2492%2066.7333C51.8723%2066.7333%2051.9502%2067.2785%2051.9502%2067.6679C51.9502%2068.0573%2052.3396%2074.5215%2056.9346%2074.5215C61.5296%2074.5215%2062.1527%2070.3159%2062.1527%2067.9794C62.1527%2065.643%2062.1527%2030.8299%2062.1527%2030.0511C62.1527%2029.2722%2063.0872%2026.9358%2064.2555%2026.3906Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask5_6160_95489)%22%3E%0A%3Cpath%20d%3D%22M69.0056%2061.7258C73.5815%2057.5328%2073.8986%2050.4318%2069.7142%2045.8652C65.5295%2041.2985%2058.4281%2040.9957%2053.8522%2045.1888C49.2762%2049.3818%2048.9585%2056.483%2053.1431%2061.0498C57.3276%2065.6163%2064.4296%2065.9189%2069.0056%2061.7258Z%22%20fill%3D%22%23D8D8D8%22%2F%3E%0A%3Cpath%20d%3D%22M69.0056%2061.7258C73.5815%2057.5328%2073.8986%2050.4318%2069.7142%2045.8652C65.5295%2041.2985%2058.4281%2040.9957%2053.8522%2045.1888C49.2762%2049.3818%2048.9585%2056.483%2053.1431%2061.0498C57.3276%2065.6163%2064.4296%2065.9189%2069.0056%2061.7258Z%22%20stroke%3D%22%23D8D8D8%22%20stroke-width%3D%221.1215%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M36.0391%2059.1328H44.4674%22%20stroke%3D%22%23969696%22%20stroke-width%3D%221.1215%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M36.0391%2051.2656H44.4674%22%20stroke%3D%22%23969696%22%20stroke-width%3D%221.1215%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M36.043%2043.4297H55.1473%22%20stroke%3D%22%23969696%22%20stroke-width%3D%221.1215%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M36.043%2035.0156H57.3548%22%20stroke%3D%22%23969696%22%20stroke-width%3D%221.1215%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M69.5769%2058.3057C70.1642%2057.7203%2071.1143%2057.7213%2071.7009%2058.307L79.1115%2065.7054C79.6962%2066.2892%2079.6969%2067.2366%2079.1131%2067.8216L79.1106%2067.8241C78.5233%2068.4091%2077.5732%2068.4088%2076.9863%2067.8228L69.5757%2060.4247C68.991%2059.8406%2068.9903%2058.8932%2069.5741%2058.3085L69.5769%2058.3057Z%22%20fill%3D%22%23969696%22%2F%3E%0A%3Cpath%20d%3D%22M71.154%2059.8352C75.73%2055.6422%2076.0471%2048.5411%2071.8626%2043.9746C67.678%2039.4079%2060.5766%2039.1051%2056.0006%2043.2981C51.4247%2047.4912%2051.1069%2054.5924%2055.2915%2059.1592C59.476%2063.7257%2066.5781%2064.0283%2071.154%2059.8352Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M71.154%2059.8352C75.73%2055.6422%2076.0471%2048.5411%2071.8626%2043.9746C67.678%2039.4079%2060.5766%2039.1051%2056.0006%2043.2981C51.4247%2047.4912%2051.1069%2054.5924%2055.2915%2059.1592C59.476%2063.7257%2066.5781%2064.0283%2071.154%2059.8352Z%22%20stroke%3D%22%23969696%22%20stroke-width%3D%221.1215%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M67.7248%2054.0883L66.6619%2055.1506L63.9261%2052.4148L61.2108%2055.1297L60.142%2054.0612L62.8572%2051.3456L60.1211%2048.6095L61.184%2047.5469L63.9198%2050.283L66.6351%2047.5678L67.704%2048.6366L64.9887%2051.3522L67.7248%2054.0883Z%22%20fill%3D%22%23969696%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_6160_95489%22%3E%0A%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block tag="div">{"No Data Available"}</_Builtin.Block>
    </_Component>
  );
}
