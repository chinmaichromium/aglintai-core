import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonSetting.module.css";

export function ButtonSetting({
  as: _Component = _Builtin.Block,
  text = "Module Settings",
  onClickButton = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button-setting", "cursor-pointer")}
      tag="div"
      {...onClickButton}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons")}
        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.22656%200.890625L4.92188%201.99219C4.82812%202.28906%204.64844%202.5%204.38281%202.625C4.21094%202.70312%204.04688%202.79687%203.89062%202.90625C3.65625%203.0625%203.39062%203.11719%203.09375%203.07031L1.94531%202.78906C1.91406%202.77344%201.88281%202.77344%201.85156%202.78906C1.72656%202.94531%201.60938%203.11719%201.5%203.30469L1.40625%203.46875C1.3125%203.64062%201.22656%203.82031%201.14844%204.00781C1.14844%204.03906%201.16406%204.07031%201.19531%204.10156L1.99219%204.94531C2.19531%205.16406%202.28906%205.42188%202.27344%205.71875C2.25781%205.8125%202.25%205.90625%202.25%206C2.25%206.09375%202.25781%206.19531%202.27344%206.30469C2.28906%206.58594%202.19531%206.83594%201.99219%207.05469L1.19531%207.89844C1.16406%207.91406%201.14062%207.94531%201.125%207.99219C1.20312%208.17969%201.29688%208.35938%201.40625%208.53125L1.5%208.69531C1.60938%208.88281%201.72656%209.05469%201.85156%209.21094C1.88281%209.22656%201.91406%209.22656%201.94531%209.21094L3.07031%208.92969C3.38281%208.88281%203.64844%208.9375%203.86719%209.09375C4.03906%209.20312%204.21094%209.29688%204.38281%209.375C4.63281%209.5%204.8125%209.71094%204.92188%2010.0078L5.22656%2011.1094C5.24219%2011.1406%205.26562%2011.1719%205.29688%2011.2031C5.53125%2011.2344%205.76562%2011.25%206%2011.25C6.23438%2011.25%206.46875%2011.2344%206.70312%2011.2031C6.73438%2011.1719%206.75781%2011.1406%206.77344%2011.1094L7.07812%2010.0078C7.17188%209.71094%207.35156%209.5%207.61719%209.375C7.78906%209.29688%207.96094%209.20312%208.13281%209.09375C8.36719%208.9375%208.625%208.88281%208.90625%208.92969L10.0547%209.21094C10.0859%209.22656%2010.1172%209.22656%2010.1484%209.21094C10.2734%209.05469%2010.3906%208.88281%2010.5%208.69531L10.5938%208.53125C10.6875%208.35938%2010.7734%208.17969%2010.8516%207.99219C10.8516%207.94531%2010.8359%207.91406%2010.8047%207.89844L10.0078%207.05469C9.80469%206.83594%209.71875%206.58594%209.75%206.30469C9.75%206.19531%209.75%206.09375%209.75%206C9.75%205.90625%209.75%205.8125%209.75%205.71875C9.71875%205.42188%209.80469%205.16406%2010.0078%204.94531L10.8047%204.10156C10.8359%204.08594%2010.8594%204.05469%2010.875%204.00781C10.7969%203.82031%2010.7031%203.64062%2010.5938%203.46875L10.5%203.30469C10.3906%203.11719%2010.2734%202.94531%2010.1484%202.78906C10.1172%202.77344%2010.0859%202.77344%2010.0547%202.78906L8.92969%203.07031C8.61719%203.11719%208.35156%203.0625%208.13281%202.90625C7.96094%202.79687%207.78906%202.70312%207.61719%202.625C7.36719%202.5%207.1875%202.29688%207.07812%202.01562L6.77344%200.890625C6.75781%200.859375%206.73438%200.828125%206.70312%200.796875C6.46875%200.765625%206.23438%200.75%206%200.75C5.76562%200.75%205.53125%200.765625%205.29688%200.796875C5.26562%200.828125%205.24219%200.859375%205.22656%200.890625ZM6%200C6.3125%200%206.60938%200.0234375%206.89062%200.0703125C6.9375%200.0703125%206.97656%200.0859375%207.00781%200.117188C7.24219%200.226563%207.39844%200.414063%207.47656%200.679688L7.80469%201.80469C7.82031%201.85156%207.86719%201.89844%207.94531%201.94531C8.14844%202.03906%208.35156%202.15625%208.55469%202.29688C8.61719%202.32812%208.67969%202.34375%208.74219%202.34375L9.86719%202.0625C10.1328%202%2010.375%202.03906%2010.5938%202.17969C10.625%202.19531%2010.6562%202.21875%2010.6875%202.25C10.8594%202.45313%2011.0156%202.67188%2011.1562%202.90625L11.25%203.09375C11.375%203.32812%2011.4844%203.57031%2011.5781%203.82031C11.5938%203.85156%2011.6094%203.89062%2011.625%203.9375C11.625%204.20312%2011.5312%204.4375%2011.3438%204.64062L10.5469%205.46094C10.5%205.50781%2010.4766%205.57031%2010.4766%205.64844C10.4922%205.75781%2010.5%205.875%2010.5%206C10.5%206.125%2010.4922%206.24219%2010.4766%206.35156C10.4766%206.42969%2010.5%206.49219%2010.5469%206.53906L11.3438%207.38281C11.5312%207.57031%2011.625%207.79688%2011.625%208.0625C11.6094%208.10938%2011.5938%208.14844%2011.5781%208.17969C11.4844%208.42969%2011.375%208.67188%2011.25%208.90625L11.1562%209.09375H11.1328C11.0078%209.32812%2010.8594%209.54688%2010.6875%209.75C10.6562%209.78125%2010.625%209.80469%2010.5938%209.82031C10.375%209.96094%2010.1328%2010.0078%209.86719%209.96094L8.74219%209.67969C8.67969%209.66406%208.61719%209.67188%208.55469%209.70312C8.35156%209.84375%208.14844%209.96094%207.94531%2010.0547C7.86719%2010.1016%207.82031%2010.1484%207.80469%2010.1953L7.47656%2011.3203C7.39844%2011.5859%207.24219%2011.7812%207.00781%2011.9062C6.97656%2011.9219%206.9375%2011.9297%206.89062%2011.9297C6.60938%2011.9766%206.3125%2012%206%2012C5.6875%2012%205.39062%2011.9766%205.10938%2011.9297C5.0625%2011.9297%205.02344%2011.9219%204.99219%2011.9062C4.75781%2011.7812%204.60156%2011.5859%204.52344%2011.3203L4.19531%2010.1953C4.17969%2010.1484%204.13281%2010.1016%204.05469%2010.0547C3.85156%209.96094%203.64844%209.84375%203.44531%209.70312C3.38281%209.67188%203.32031%209.66406%203.25781%209.67969L2.13281%209.96094C1.86719%2010.0078%201.625%209.96875%201.40625%209.84375C1.375%209.8125%201.34375%209.78125%201.3125%209.75C1.14062%209.54688%200.992188%209.32812%200.867188%209.09375H0.84375L0.75%208.90625C0.625%208.67188%200.515625%208.42969%200.421875%208.17969C0.40625%208.14844%200.398438%208.10938%200.398438%208.0625C0.382812%207.8125%200.46875%207.58594%200.65625%207.38281L1.45312%206.53906C1.5%206.49219%201.52344%206.42969%201.52344%206.35156C1.50781%206.24219%201.5%206.125%201.5%206C1.5%205.9375%201.5%205.88281%201.5%205.83594C1.5%205.77344%201.50781%205.71094%201.52344%205.64844C1.52344%205.57031%201.5%205.50781%201.45312%205.46094L0.65625%204.64062C0.46875%204.4375%200.375%204.20312%200.375%203.9375C0.390625%203.89062%200.40625%203.85156%200.421875%203.82031C0.515625%203.57031%200.625%203.32812%200.75%203.09375L0.84375%202.90625H0.867188C0.992188%202.67188%201.14062%202.45313%201.3125%202.25C1.34375%202.21875%201.375%202.19531%201.40625%202.17969C1.625%202.03906%201.86719%202%202.13281%202.0625L3.25781%202.34375C3.32031%202.34375%203.38281%202.32812%203.44531%202.29688C3.64844%202.15625%203.85156%202.03906%204.05469%201.94531C4.13281%201.89844%204.17969%201.85156%204.19531%201.80469L4.52344%200.679688C4.60156%200.414063%204.75781%200.226563%204.99219%200.117188C5.02344%200.0859375%205.0625%200.0703125%205.10938%200.0703125C5.39062%200.0234375%205.6875%200%206%200ZM4.6875%206C4.70312%206.5%204.92188%206.875%205.34375%207.125C5.78125%207.375%206.21875%207.375%206.65625%207.125C7.07812%206.875%207.29688%206.5%207.3125%206C7.29688%205.5%207.07812%205.125%206.65625%204.875C6.21875%204.625%205.78125%204.625%205.34375%204.875C4.92188%205.125%204.70312%205.5%204.6875%206ZM8.0625%206C8.03125%206.78125%207.6875%207.375%207.03125%207.78125C6.34375%208.15625%205.65625%208.15625%204.96875%207.78125C4.3125%207.375%203.96875%206.78125%203.9375%206C3.96875%205.21875%204.3125%204.625%204.96875%204.21875C5.65625%203.84375%206.34375%203.84375%207.03125%204.21875C7.6875%204.625%208.03125%205.21875%208.0625%206Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
