"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Filter.module.css";

export function Filter({
  as: _Component = _Builtin.Block,
  onClickAddFilter = {},
  onClickApplyFilter = {},
  slotFilter,
  isApplyFilterDisable = true,
  isFilterEmpty = false,
}) {
  return (
    <_Component className={_utils.cx(_styles, "add-filter-wrap")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "relative")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "slot-add-filter")}
          tag="div"
        >
          {slotFilter}
        </_Builtin.Block>
        {isFilterEmpty ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "empty-filter-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-sm", "color-grey-600")}
              tag="div"
            >
              {"No filters have been added. Click 'add filter' to add one."}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "filter-wraps-add")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-621")}
          tag="div"
          {...onClickAddFilter}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%201C5.69318%201%205.44444%201.24873%205.44444%201.55556V5.44444H1.55556C1.24873%205.44444%201%205.69318%201%206C1%206.30683%201.24873%206.55556%201.55556%206.55556H5.44444V10.4444C5.44444%2010.7513%205.69318%2011%206%2011C6.30683%2011%206.55556%2010.7513%206.55556%2010.4444V6.55556H10.4444C10.7513%206.55556%2011%206.30683%2011%206C11%205.69318%2010.7513%205.44444%2010.4444%205.44444H6.55556V1.55556C6.55556%201.24873%206.30683%201%206%201Z%22%20fill%3D%22%231F73B7%22%20style%3D%22fill%3A%231F73B7%3Bfill%3Acolor(display-p3%200.1216%200.4510%200.7176)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-blue-600")}
            tag="div"
          >
            {"Add filter"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "relative")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-622")}
            tag="div"
            {...onClickApplyFilter}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-sm", "text-color-white")}
              tag="div"
            >
              {"Apply Filter"}
            </_Builtin.Block>
          </_Builtin.Block>
          {isApplyFilterDisable ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-622", "disable")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm")}
                tag="div"
              >
                {"Apply Filter"}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
