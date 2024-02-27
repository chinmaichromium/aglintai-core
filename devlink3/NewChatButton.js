import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewChatButton.module.css";

export function NewChatButton({
  as: _Component = _Builtin.Block,
  onClickChat = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "task_card", "is_new_with_dropdown")}
      tag="div"
      {...onClickChat}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "embed_flex", "drop_op")}
        value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.5%209.5H27.5C28.3438%209.53125%2029.0469%209.82812%2029.6094%2010.3906C30.1719%2010.9531%2030.4688%2011.6562%2030.5%2012.5V27.5C30.4688%2028.3438%2030.1719%2029.0469%2029.6094%2029.6094C29.0469%2030.1719%2028.3438%2030.4688%2027.5%2030.5H12.5C11.6562%2030.4688%2010.9531%2030.1719%2010.3906%2029.6094C9.82812%2029.0469%209.53125%2028.3438%209.5%2027.5V12.5C9.53125%2011.6562%209.82812%2010.9531%2010.3906%2010.3906C10.9531%209.82812%2011.6562%209.53125%2012.5%209.5ZM18.875%2024.125C18.9375%2024.8125%2019.3125%2025.1875%2020%2025.25C20.6875%2025.1875%2021.0625%2024.8125%2021.125%2024.125V21.125H24.125C24.8125%2021.0625%2025.1875%2020.6875%2025.25%2020C25.1875%2019.3125%2024.8125%2018.9375%2024.125%2018.875H21.125V15.875C21.0625%2015.1875%2020.6875%2014.8125%2020%2014.75C19.3125%2014.8125%2018.9375%2015.1875%2018.875%2015.875V18.875H15.875C15.1875%2018.9375%2014.8125%2019.3125%2014.75%2020C14.8125%2020.6875%2015.1875%2021.0625%2015.875%2021.125H18.875V24.125Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "fw-semibold", "drop_op")}
        tag="div"
      >
        {"New "}
      </_Builtin.Block>
    </_Component>
  );
}
