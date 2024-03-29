import React from "react";
import * as _Builtin from "./_Builtin";
import { SidedrawerBodySession } from "./SidedrawerBodySession";
import { SidedrawerBodyDebrief } from "./SidedrawerBodyDebrief";
import { SidedrawerBodyBreak } from "./SidedrawerBodyBreak";
import { DropdownList } from "./DropdownList";
import * as _utils from "./utils";
import _styles from "./SideDrawerBlock.module.css";

export function SideDrawerBlock({
  as: _Component = _Builtin.Block,
  textTitle = "Add/Edit Session",
  onClickClose = {},
  onClickPrimaryButton = {},
  textPrimaryButton = "Add/Done",
  slotSidedrawerBody,
}) {
  return (
    <_Component className={_utils.cx(_styles, "schedule_edit-add")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "sidedrawer_topbar")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-gray-600")}
          tag="div"
        >
          {textTitle}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "side_close")}
          tag="div"
          {...onClickClose}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16.7812%208.28125L13.0625%2012L16.7812%2015.7188C17.0729%2016.0729%2017.0729%2016.4271%2016.7812%2016.7812C16.4271%2017.0729%2016.0729%2017.0729%2015.7188%2016.7812L12%2013.0625L8.28125%2016.7812C7.92708%2017.0729%207.57292%2017.0729%207.21875%2016.7812C6.92708%2016.4271%206.92708%2016.0729%207.21875%2015.7188L10.9375%2012L7.21875%208.28125C6.92708%207.92708%206.92708%207.57292%207.21875%207.21875C7.57292%206.92708%207.92708%206.92708%208.28125%207.21875L12%2010.9375L15.7188%207.21875C16.0729%206.92708%2016.4271%206.92708%2016.7812%207.21875C17.0729%207.57292%2017.0729%207.92708%2016.7812%208.28125Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "sidedrawer_body")}
        tag="div"
      >
        {slotSidedrawerBody ?? (
          <>
            <SidedrawerBodySession />
            <SidedrawerBodyDebrief />
            <SidedrawerBodyBreak />
            <DropdownList />
          </>
        )}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "sidedrawer_bottom")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "button_new", "grey_button")}
          id={_utils.cx(
            _styles,
            "w-node-a59f45c7-8181-74b7-fd34-a71c746daf69-746daf5e"
          )}
          tag="div"
          {...onClickClose}
        >
          <_Builtin.Block tag="div">{"Cancel"}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "button_new", "blue_button")}
          id={_utils.cx(
            _styles,
            "w-node-a59f45c7-8181-74b7-fd34-a71c746daf6c-746daf5e"
          )}
          tag="div"
          {...onClickPrimaryButton}
        >
          <_Builtin.Block tag="div">{textPrimaryButton}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
