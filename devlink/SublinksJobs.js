import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SublinksJobs.module.css";

export function SublinksJobs({
  as: _Component = _Builtin.Block,
  isSearchJobs = true,
  isJobTracker = true,
  isEmailFollowups = true,
  isReminder = true,
  isContacts = true,
  isOrganisation = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "nav_sublinks")} tag="div">
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_sublink")}
        button={false}
        id="search-job"
        block="inline"
        options={{
          href: "/jobs",
        }}
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed_flex")}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%204.69565C0%207.28899%202.10231%209.3913%204.69565%209.3913C5.80435%209.3913%206.82331%209.00706%207.62662%208.36447L11.1093%2011.8472C11.3131%2012.0509%2011.6434%2012.0509%2011.8472%2011.8472C12.0509%2011.6434%2012.0509%2011.3131%2011.8472%2011.1093L8.36447%207.62662C9.00706%206.82331%209.3913%205.80435%209.3913%204.69565C9.3913%202.10231%207.28899%200%204.69565%200C2.10231%200%200%202.10231%200%204.69565ZM4.69565%208.34783C6.71269%208.34783%208.34783%206.71269%208.34783%204.69565C8.34783%202.67861%206.71269%201.04348%204.69565%201.04348C2.67861%201.04348%201.04348%202.67861%201.04348%204.69565C1.04348%206.71269%202.67861%208.34783%204.69565%208.34783Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cmask%20id%3D%22mask0_6432_58052%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%204.69565C0%207.28899%202.10231%209.3913%204.69565%209.3913C5.80435%209.3913%206.82331%209.00706%207.62662%208.36447L11.1093%2011.8472C11.3131%2012.0509%2011.6434%2012.0509%2011.8472%2011.8472C12.0509%2011.6434%2012.0509%2011.3131%2011.8472%2011.1093L8.36447%207.62662C9.00706%206.82331%209.3913%205.80435%209.3913%204.69565C9.3913%202.10231%207.28899%200%204.69565%200C2.10231%200%200%202.10231%200%204.69565ZM4.69565%208.34783C6.71269%208.34783%208.34783%206.71269%208.34783%204.69565C8.34783%202.67861%206.71269%201.04348%204.69565%201.04348C2.67861%201.04348%201.04348%202.67861%201.04348%204.69565C1.04348%206.71269%202.67861%208.34783%204.69565%208.34783Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_6432_58052)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{"Search Jobs"}</_Builtin.Block>
        {isSearchJobs ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "aui_nav_sublink_active")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%204.69565C0%207.28899%202.10231%209.3913%204.69565%209.3913C5.80435%209.3913%206.82331%209.00706%207.62662%208.36447L11.1093%2011.8472C11.3131%2012.0509%2011.6434%2012.0509%2011.8472%2011.8472C12.0509%2011.6434%2012.0509%2011.3131%2011.8472%2011.1093L8.36447%207.62662C9.00706%206.82331%209.3913%205.80435%209.3913%204.69565C9.3913%202.10231%207.28899%200%204.69565%200C2.10231%200%200%202.10231%200%204.69565ZM4.69565%208.34783C6.71269%208.34783%208.34783%206.71269%208.34783%204.69565C8.34783%202.67861%206.71269%201.04348%204.69565%201.04348C2.67861%201.04348%201.04348%202.67861%201.04348%204.69565C1.04348%206.71269%202.67861%208.34783%204.69565%208.34783Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cmask%20id%3D%22mask0_6432_58052%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%204.69565C0%207.28899%202.10231%209.3913%204.69565%209.3913C5.80435%209.3913%206.82331%209.00706%207.62662%208.36447L11.1093%2011.8472C11.3131%2012.0509%2011.6434%2012.0509%2011.8472%2011.8472C12.0509%2011.6434%2012.0509%2011.3131%2011.8472%2011.1093L8.36447%207.62662C9.00706%206.82331%209.3913%205.80435%209.3913%204.69565C9.3913%202.10231%207.28899%200%204.69565%200C2.10231%200%200%202.10231%200%204.69565ZM4.69565%208.34783C6.71269%208.34783%208.34783%206.71269%208.34783%204.69565C8.34783%202.67861%206.71269%201.04348%204.69565%201.04348C2.67861%201.04348%201.04348%202.67861%201.04348%204.69565C1.04348%206.71269%202.67861%208.34783%204.69565%208.34783Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_6432_58052)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Search Jobs"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_sublink")}
        button={false}
        id="job-tracker"
        block="inline"
        options={{
          href: "/jobs/tracker",
        }}
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed_flex")}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.50013%200H10C10.5761%200%2011%200.423858%2011%201V3.49948C11%203.49983%2011%203.50017%2011%203.50052V11C11%2011.5761%2010.5761%2012%2010%2012H5.50052H5.49948H2C1.42386%2012%201%2011.5761%201%2011V8.50013V8.49987V1C1%200.423858%201.42386%200%202%200H5.49987H5.50013ZM10%203V1H6V3H10ZM6%204H10V11H6V4ZM5%203.50026C5%203.50009%205%203.49991%205%203.49974V1H2V8H5V3.50026ZM2%2011V9H5V11H2Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{"Job Tracker"}</_Builtin.Block>
        {isJobTracker ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "aui_nav_sublink_active")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.50013%200H10C10.5761%200%2011%200.423858%2011%201V3.49948C11%203.49983%2011%203.50017%2011%203.50052V11C11%2011.5761%2010.5761%2012%2010%2012H5.50052H5.49948H2C1.42386%2012%201%2011.5761%201%2011V8.50013V8.49987V1C1%200.423858%201.42386%200%202%200H5.49987H5.50013ZM10%203V1H6V3H10ZM6%204H10V11H6V4ZM5%203.50026C5%203.50009%205%203.49991%205%203.49974V1H2V8H5V3.50026ZM2%2011V9H5V11H2Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Job Tracker"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_sublink")}
        button={false}
        id="email-follow"
        block="inline"
        options={{
          href: "/jobs/email-followup",
        }}
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed_flex")}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11%201H1C0.447715%201%200%201.44772%200%202V10C0%2010.5523%200.447715%2011%201%2011H11C11.5523%2011%2012%2010.5523%2012%2010V2C12%201.44772%2011.5523%201%2011%201ZM1%209.29289V2.70711L5.29645%207.00355C5.48277%207.19141%205.73836%207.2979%206.005%207.2979C6.27164%207.2979%206.52723%207.19141%206.715%207.0021L11%202.70787V9.29289L8.85355%207.14645C8.65829%206.95118%208.34171%206.95118%208.14645%207.14645C7.95118%207.34171%207.95118%207.65829%208.14645%207.85355L10.2929%2010H1.70711L3.85355%207.85355C4.04882%207.65829%204.04882%207.34171%203.85355%207.14645C3.65829%206.95118%203.34171%206.95118%203.14645%207.14645L1%209.29289ZM10.2937%202H1.70711L6.005%206.2979L10.2937%202Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{"Email Followups"}</_Builtin.Block>
        {isEmailFollowups ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "aui_nav_sublink_active")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11%201H1C0.447715%201%200%201.44772%200%202V10C0%2010.5523%200.447715%2011%201%2011H11C11.5523%2011%2012%2010.5523%2012%2010V2C12%201.44772%2011.5523%201%2011%201ZM1%209.29289V2.70711L5.29645%207.00355C5.48277%207.19141%205.73836%207.2979%206.005%207.2979C6.27164%207.2979%206.52723%207.19141%206.715%207.0021L11%202.70787V9.29289L8.85355%207.14645C8.65829%206.95118%208.34171%206.95118%208.14645%207.14645C7.95118%207.34171%207.95118%207.65829%208.14645%207.85355L10.2929%2010H1.70711L3.85355%207.85355C4.04882%207.65829%204.04882%207.34171%203.85355%207.14645C3.65829%206.95118%203.34171%206.95118%203.14645%207.14645L1%209.29289ZM10.2937%202H1.70711L6.005%206.2979L10.2937%202Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Email Followups"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_sublink")}
        button={false}
        id="reminder"
        block="inline"
        options={{
          href: "/jobs/reminder",
        }}
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed_flex")}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%206H8C8.27614%206%208.5%206.22386%208.5%206.5C8.5%206.77614%208.27614%207%208%207H5.5C5.22386%207%205%206.77614%205%206.5V3C5%202.72386%205.22386%202.5%205.5%202.5C5.77614%202.5%206%202.72386%206%203V6ZM6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM6%2011C8.76142%2011%2011%208.76142%2011%206C11%203.23858%208.76142%201%206%201C3.23858%201%201%203.23858%201%206C1%208.76142%203.23858%2011%206%2011Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cmask%20id%3D%22mask0_6432_58158%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%206H8C8.27614%206%208.5%206.22386%208.5%206.5C8.5%206.77614%208.27614%207%208%207H5.5C5.22386%207%205%206.77614%205%206.5V3C5%202.72386%205.22386%202.5%205.5%202.5C5.77614%202.5%206%202.72386%206%203V6ZM6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM6%2011C8.76142%2011%2011%208.76142%2011%206C11%203.23858%208.76142%201%206%201C3.23858%201%201%203.23858%201%206C1%208.76142%203.23858%2011%206%2011Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_6432_58158)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{"Reminder"}</_Builtin.Block>
        {isReminder ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "aui_nav_sublink_active")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%206H8C8.27614%206%208.5%206.22386%208.5%206.5C8.5%206.77614%208.27614%207%208%207H5.5C5.22386%207%205%206.77614%205%206.5V3C5%202.72386%205.22386%202.5%205.5%202.5C5.77614%202.5%206%202.72386%206%203V6ZM6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM6%2011C8.76142%2011%2011%208.76142%2011%206C11%203.23858%208.76142%201%206%201C3.23858%201%201%203.23858%201%206C1%208.76142%203.23858%2011%206%2011Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cmask%20id%3D%22mask0_6432_58158%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%206H8C8.27614%206%208.5%206.22386%208.5%206.5C8.5%206.77614%208.27614%207%208%207H5.5C5.22386%207%205%206.77614%205%206.5V3C5%202.72386%205.22386%202.5%205.5%202.5C5.77614%202.5%206%202.72386%206%203V6ZM6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM6%2011C8.76142%2011%2011%208.76142%2011%206C11%203.23858%208.76142%201%206%201C3.23858%201%201%203.23858%201%206C1%208.76142%203.23858%2011%206%2011Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_6432_58158)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Reminder"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_sublink")}
        button={false}
        id="contacts"
        block="inline"
        options={{
          href: "/jobs/contacts",
        }}
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed_flex")}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.9966%2011.4416C12.0289%2011.7158%2011.8327%2011.9643%2011.5584%2011.9966C11.2842%2012.0288%2011.0357%2011.8327%2011.0035%2011.5584C10.8328%2010.1083%209.54416%209%208.00003%209C6.45589%209%205.16721%2010.1083%204.9966%2011.5584C4.96434%2011.8327%204.71586%2012.0288%204.44161%2011.9966C4.16735%2011.9643%203.97119%2011.7158%204.00345%2011.4416C4.23415%209.4806%205.95579%208%208.00003%208C10.0443%208%2011.7659%209.4806%2011.9966%2011.4416ZM0.991961%207.58944C0.942563%207.86113%200.682271%208.04133%200.410583%207.99194C0.138895%207.94254%20-0.0413072%207.68225%200.0080907%207.41056C0.253464%206.061%201.57057%205%203.00003%205C4.42948%205%205.74659%206.061%205.99196%207.41056C6.04136%207.68225%205.86116%207.94254%205.58947%207.99194C5.31778%208.04133%205.05749%207.86113%205.00809%207.58944C4.85051%206.72272%203.95333%206%203.00003%206C2.04672%206%201.14955%206.72272%200.991961%207.58944ZM3.00003%204C1.89546%204%201.00003%203.10457%201.00003%202C1.00003%200.89543%201.89546%200%203.00003%200C4.1046%200%205.00003%200.89543%205.00003%202C5.00003%203.10457%204.1046%204%203.00003%204ZM3.00003%203C3.55231%203%204.00003%202.55228%204.00003%202C4.00003%201.44772%203.55231%201%203.00003%201C2.44774%201%202.00003%201.44772%202.00003%202C2.00003%202.55228%202.44774%203%203.00003%203ZM8.00003%207C6.61931%207%205.50003%205.88071%205.50003%204.5C5.50003%203.11929%206.61931%202%208.00003%202C9.38074%202%2010.5%203.11929%2010.5%204.5C10.5%205.88071%209.38074%207%208.00003%207ZM8.00003%206C8.82845%206%209.50003%205.32843%209.50003%204.5C9.50003%203.67157%208.82845%203%208.00003%203C7.1716%203%206.50003%203.67157%206.50003%204.5C6.50003%205.32843%207.1716%206%208.00003%206Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{"Contacts"}</_Builtin.Block>
        {isContacts ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "aui_nav_sublink_active")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.9966%2011.4416C12.0289%2011.7158%2011.8327%2011.9643%2011.5584%2011.9966C11.2842%2012.0288%2011.0357%2011.8327%2011.0035%2011.5584C10.8328%2010.1083%209.54416%209%208.00003%209C6.45589%209%205.16721%2010.1083%204.9966%2011.5584C4.96434%2011.8327%204.71586%2012.0288%204.44161%2011.9966C4.16735%2011.9643%203.97119%2011.7158%204.00345%2011.4416C4.23415%209.4806%205.95579%208%208.00003%208C10.0443%208%2011.7659%209.4806%2011.9966%2011.4416ZM0.991961%207.58944C0.942563%207.86113%200.682271%208.04133%200.410583%207.99194C0.138895%207.94254%20-0.0413072%207.68225%200.0080907%207.41056C0.253464%206.061%201.57057%205%203.00003%205C4.42948%205%205.74659%206.061%205.99196%207.41056C6.04136%207.68225%205.86116%207.94254%205.58947%207.99194C5.31778%208.04133%205.05749%207.86113%205.00809%207.58944C4.85051%206.72272%203.95333%206%203.00003%206C2.04672%206%201.14955%206.72272%200.991961%207.58944ZM3.00003%204C1.89546%204%201.00003%203.10457%201.00003%202C1.00003%200.89543%201.89546%200%203.00003%200C4.1046%200%205.00003%200.89543%205.00003%202C5.00003%203.10457%204.1046%204%203.00003%204ZM3.00003%203C3.55231%203%204.00003%202.55228%204.00003%202C4.00003%201.44772%203.55231%201%203.00003%201C2.44774%201%202.00003%201.44772%202.00003%202C2.00003%202.55228%202.44774%203%203.00003%203ZM8.00003%207C6.61931%207%205.50003%205.88071%205.50003%204.5C5.50003%203.11929%206.61931%202%208.00003%202C9.38074%202%2010.5%203.11929%2010.5%204.5C10.5%205.88071%209.38074%207%208.00003%207ZM8.00003%206C8.82845%206%209.50003%205.32843%209.50003%204.5C9.50003%203.67157%208.82845%203%208.00003%203C7.1716%203%206.50003%203.67157%206.50003%204.5C6.50003%205.32843%207.1716%206%208.00003%206Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Contacts"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_sublink")}
        button={false}
        id="organisation"
        block="inline"
        options={{
          href: "/jobs/organisation",
        }}
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed_flex")}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10%200C10.5761%200%2011%200.423858%2011%201V11C11%2011.5761%2010.5761%2012%2010%2012H8C7.42386%2012%207%2011.5761%207%2011V9H5V11C5%2011.5761%204.57614%2012%204%2012H2C1.42386%2012%201%2011.5761%201%2011V1C1%200.423858%201.42386%200%202%200H10ZM2%201V11H4V9C4%208.42386%204.42386%208%205%208H7C7.57614%208%208%208.42386%208%209V11H10V1H2ZM3%205H5V7H3V5ZM7%205H9V7H7V5ZM3%202H5V4H3V2ZM7%202H9V4H7V2Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{"Organisation"}</_Builtin.Block>
        {isOrganisation ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "aui_nav_sublink_active")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed_flex")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10%200C10.5761%200%2011%200.423858%2011%201V11C11%2011.5761%2010.5761%2012%2010%2012H8C7.42386%2012%207%2011.5761%207%2011V9H5V11C5%2011.5761%204.57614%2012%204%2012H2C1.42386%2012%201%2011.5761%201%2011V1C1%200.423858%201.42386%200%202%200H10ZM2%201V11H4V9C4%208.42386%204.42386%208%205%208H7C7.57614%208%208%208.42386%208%209V11H10V1H2ZM3%205H5V7H3V5ZM7%205H9V7H7V5ZM3%202H5V4H3V2ZM7%202H9V4H7V2Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{"Organisation"}</_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Link>
    </_Component>
  );
}
