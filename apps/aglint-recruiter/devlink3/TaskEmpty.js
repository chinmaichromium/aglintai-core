"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Text } from "./Text";
import * as _utils from "./utils";
import _styles from "./TaskEmpty.module.css";

export function TaskEmpty({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-1558")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-1559")}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icons")}
          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.2499%204.875L5.2499%208.475C5.1499%208.625%205.0124%208.7%204.8374%208.7C4.6624%208.7%204.5124%208.6375%204.3874%208.5125L2.5874%206.7125C2.3374%206.4375%202.3374%206.1625%202.5874%205.8875C2.8624%205.6375%203.1374%205.6375%203.4124%205.8875L4.7624%207.2L7.3499%204.125C7.5999%203.85%207.8749%203.825%208.1749%204.05C8.4499%204.3%208.4749%204.575%208.2499%204.875ZM8.2499%2010.875L5.2499%2014.475C5.1499%2014.625%205.0124%2014.7%204.8374%2014.7C4.6624%2014.7%204.5124%2014.6375%204.3874%2014.5125L2.5874%2012.7125C2.3374%2012.4375%202.3374%2012.1625%202.5874%2011.8875C2.8624%2011.6375%203.1374%2011.6375%203.4124%2011.8875L4.7624%2013.2L7.3499%2010.125C7.5999%209.85%207.8749%209.825%208.1749%2010.05C8.4499%2010.3%208.4749%2010.575%208.2499%2010.875ZM9.5999%206.3C9.6249%205.925%209.8249%205.725%2010.1999%205.7H20.9999C21.3749%205.725%2021.5749%205.925%2021.5999%206.3C21.5749%206.675%2021.3749%206.875%2020.9999%206.9H10.1999C9.8249%206.875%209.6249%206.675%209.5999%206.3ZM9.5999%2012.3C9.6249%2011.925%209.8249%2011.725%2010.1999%2011.7H20.9999C21.3749%2011.725%2021.5749%2011.925%2021.5999%2012.3C21.5749%2012.675%2021.3749%2012.875%2020.9999%2012.9H10.1999C9.8249%2012.875%209.6249%2012.675%209.5999%2012.3ZM8.3999%2018.3C8.4249%2017.925%208.6249%2017.725%208.9999%2017.7H20.9999C21.3749%2017.725%2021.5749%2017.925%2021.5999%2018.3C21.5749%2018.675%2021.3749%2018.875%2020.9999%2018.9H8.9999C8.6249%2018.875%208.4249%2018.675%208.3999%2018.3ZM5.9999%2018.3C5.9999%2018.65%205.8874%2018.9375%205.6624%2019.1625C5.4374%2019.3875%205.1499%2019.5%204.7999%2019.5C4.4499%2019.5%204.1624%2019.3875%203.9374%2019.1625C3.7124%2018.9375%203.5999%2018.65%203.5999%2018.3C3.5999%2017.95%203.7124%2017.6625%203.9374%2017.4375C4.1624%2017.2125%204.4499%2017.1%204.7999%2017.1C5.1499%2017.1%205.4374%2017.2125%205.6624%2017.4375C5.8874%2017.6625%205.9999%2017.95%205.9999%2018.3Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <Text weight="" content="No tasks to show" />
      </_Builtin.Block>
    </_Component>
  );
}
