import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PdfSelected.module.css";

export function PdfSelected({
  as: _Component = _Builtin.Block,
  textName = "This is some text inside of a div block.",
  onClickClose = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sender-sub-wrap", "withicon", "small")}
      tag="div"
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons")}
        value="%3Csvg%20width%3D%2221%22%20height%3D%2222%22%20viewBox%3D%220%200%2021%2022%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.125%2020.3125H4.4375V21.625H3.125C2.38672%2021.5977%201.77148%2021.3379%201.2793%2020.8457C0.787109%2020.3535%200.527344%2019.7383%200.5%2019V3.25C0.527344%202.51172%200.787109%201.89648%201.2793%201.4043C1.77148%200.912109%202.38672%200.652344%203.125%200.625H9.52344C10.0703%200.625%2010.5352%200.816406%2010.918%201.19922L15.6758%205.95703C16.0586%206.33984%2016.25%206.80469%2016.25%207.35156V12.4375H14.9375V8.5H10.3438C9.79688%208.47266%209.33203%208.28125%208.94922%207.92578C8.59375%207.54297%208.40234%207.07812%208.375%206.53125V1.9375H3.125C2.74219%201.9375%202.42773%202.06055%202.18164%202.30664C1.93555%202.55273%201.8125%202.86719%201.8125%203.25V19C1.8125%2019.3828%201.93555%2019.6973%202.18164%2019.9434C2.42773%2020.1895%202.74219%2020.3125%203.125%2020.3125ZM14.9375%207.1875C14.8828%207.07812%2014.8145%206.98242%2014.7324%206.90039L9.97461%202.14258C9.89258%202.06055%209.79688%202.00586%209.6875%201.97852V6.53125C9.71484%206.94141%209.93359%207.16016%2010.3438%207.1875H14.9375ZM7.71875%2015.0625H9.03125C9.6875%2015.0898%2010.2344%2015.3086%2010.6719%2015.7188C11.082%2016.1562%2011.3008%2016.7031%2011.3281%2017.3594C11.3008%2018.0156%2011.082%2018.5625%2010.6719%2019C10.2344%2019.4102%209.6875%2019.6289%209.03125%2019.6562H8.375V20.9688C8.34766%2021.3789%208.12891%2021.5977%207.71875%2021.625C7.30859%2021.5977%207.08984%2021.3789%207.0625%2020.9688V19V15.7188C7.08984%2015.3086%207.30859%2015.0898%207.71875%2015.0625ZM9.03125%2018.3438C9.63281%2018.2891%209.96094%2017.9609%2010.0156%2017.3594C9.96094%2016.7578%209.63281%2016.4297%209.03125%2016.375H8.375V18.3438H9.03125ZM12.9688%2015.0625H14.2812C14.8281%2015.0898%2015.293%2015.2812%2015.6758%2015.6367C16.0312%2016.0195%2016.2227%2016.4844%2016.25%2017.0312V19.6562C16.2227%2020.2031%2016.0312%2020.668%2015.6758%2021.0508C15.293%2021.4062%2014.8281%2021.5977%2014.2812%2021.625H12.9688C12.5586%2021.5977%2012.3398%2021.3789%2012.3125%2020.9688V15.7188C12.3398%2015.3086%2012.5586%2015.0898%2012.9688%2015.0625ZM14.2812%2020.3125C14.6914%2020.2852%2014.9102%2020.0664%2014.9375%2019.6562V17.0312C14.9102%2016.6211%2014.6914%2016.4023%2014.2812%2016.375H13.625V20.3125H14.2812ZM17.5625%2015.7188C17.5898%2015.3086%2017.8086%2015.0898%2018.2188%2015.0625H20.1875C20.5977%2015.0898%2020.8164%2015.3086%2020.8438%2015.7188C20.8164%2016.1289%2020.5977%2016.3477%2020.1875%2016.375H18.875V17.6875H20.1875C20.5977%2017.7148%2020.8164%2017.9336%2020.8438%2018.3438C20.8164%2018.7539%2020.5977%2018.9727%2020.1875%2019H18.875V20.9688C18.8477%2021.3789%2018.6289%2021.5977%2018.2188%2021.625C17.8086%2021.5977%2017.5898%2021.3789%2017.5625%2020.9688V18.3438V15.7188Z%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "fw-semibold", "one-line-clamp")}
        tag="div"
      >
        {textName}
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons", "ml-20", "pointer")}
        value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3Cmask%20id%3D%22mask0_5903_10049%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%222%22%20y%3D%222%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill%3Awhite%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_5903_10049)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
        {...onClickClose}
      />
    </_Component>
  );
}
