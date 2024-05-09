"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { RoleList } from "./RoleList";
import * as _utils from "./utils";
import _styles from "./JobRole.module.css";

export function JobRole({
  as: _Component = _Builtin.Block,
  onClickEdit = {},
  slotRoleList,
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1710")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1711")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"Roles in this job"}
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icons", "cursor-pointer")}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.33106%201.64297C9.20606%201.53047%209.06231%201.47422%208.89981%201.47422C8.73731%201.47422%208.59355%201.53047%208.46855%201.64297L7.98105%202.14922L9.04981%203.21797L9.55606%202.73047C9.66856%202.60547%209.72481%202.46172%209.72481%202.29922C9.72481%202.13672%209.66856%201.99297%209.55606%201.86797L9.33106%201.64297ZM4.34355%205.78672C4.26855%205.86172%204.21855%205.95547%204.19355%206.06797L3.89355%207.30547L5.13105%207.02422C5.24355%206.98672%205.3373%206.93047%205.4123%206.85547L8.61855%203.64922L7.5498%202.58047L4.34355%205.78672ZM8.05605%201.23047C8.30605%200.992968%208.5873%200.874218%208.89981%200.874218C9.22481%200.874218%209.50606%200.992968%209.74356%201.23047L9.96856%201.45547C10.2061%201.70547%2010.3248%201.98672%2010.3248%202.29922C10.3248%202.62422%2010.2061%202.90547%209.96856%203.14297L5.84355%207.28672C5.68105%207.44922%205.4873%207.55547%205.2623%207.60547L3.5748%207.99922C3.4623%208.01172%203.36855%207.98047%203.29355%207.90547C3.21855%207.83047%203.1873%207.74297%203.1998%207.64297L3.59355%205.93672C3.64355%205.71172%203.7498%205.51797%203.9123%205.35547L8.05605%201.23047ZM2.2998%201.99922H4.6998C4.8873%202.01172%204.9873%202.11172%204.9998%202.29922C4.9873%202.48672%204.8873%202.58672%204.6998%202.59922H2.2998C2.0498%202.61172%201.8373%202.69922%201.6623%202.86172C1.4998%203.03672%201.4123%203.24922%201.3998%203.49922V8.89922C1.4123%209.14922%201.4998%209.36172%201.6623%209.53672C1.8373%209.69922%202.0498%209.78672%202.2998%209.79922H7.6998C7.9498%209.78672%208.1623%209.69922%208.3373%209.53672C8.4998%209.36172%208.5873%209.14922%208.5998%208.89922V6.49922C8.6123%206.31172%208.71231%206.21172%208.89981%206.19922C9.08731%206.21172%209.18731%206.31172%209.19981%206.49922V8.89922C9.18731%209.32422%209.04356%209.68047%208.76856%209.96797C8.48105%2010.243%208.1248%2010.3867%207.6998%2010.3992H2.2998C1.8748%2010.3867%201.51855%2010.243%201.23105%209.96797C0.956055%209.68047%200.812305%209.32422%200.799805%208.89922V3.49922C0.812305%203.07422%200.956055%202.71797%201.23105%202.43047C1.51855%202.15547%201.8748%202.01172%202.2998%201.99922Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          {...onClickEdit}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1712")}
        tag="div"
      >
        {slotRoleList ?? <RoleList />}
      </_Builtin.Block>
    </_Component>
  );
}
