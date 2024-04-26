"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TeamListItem } from "./TeamListItem";
import * as _utils from "./utils";
import _styles from "./TeamUsersList.module.css";

export function TeamUsersList({
  as: _Component = _Builtin.Block,
  slotTeamList,
  pendInvitesVisibility = true,
  slotPendingInviteBtn,
  slotInviteBtn,
  slotUsersRoleList,
  onClickViewPendingInvites = {},
  textPending = "You currently have two pending invites awaiting your response.",
  slotSearchAndFilter,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "cs-team-users-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "cs-team-users-list")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "tu-header-block", "plr-20")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "tu-header-content",
              "flex-team-header"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-825")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {"Manage Team Members"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-grey-600", "max-width-600")}
                tag="div"
              >
                {
                  "Add, manage, and organize your team's roles and permissions here."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-463")}
              tag="div"
            >
              <_Builtin.Block tag="div">{slotInviteBtn}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tu-header-button-wrapper")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "tu-list")} tag="div">
          {pendInvitesVisibility ? (
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "tu-pending-invites-block",
                "mlr-20"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-462")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-embed")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%208C16%203.58172%2012.4183%200%208%200C5.53028%200%203.48184%201.11748%202%203.11499V1.5L1.99194%201.41012C1.94961%201.17688%201.74546%201%201.5%201C1.22386%201%201%201.22386%201%201.5V4.5L1.00806%204.58988C1.05039%204.82312%201.25454%205%201.5%205H4.5L4.58988%204.99194C4.82312%204.94961%205%204.74546%205%204.5L4.99194%204.41012C4.94961%204.17688%204.74546%204%204.5%204H2.59764C3.91575%202.06249%205.74896%201%208%201C11.866%201%2015%204.13401%2015%208C15%2011.866%2011.866%2015%208%2015C4.13401%2015%201%2011.866%201%208C1%207.72386%200.776142%207.5%200.5%207.5C0.223858%207.5%200%207.72386%200%208C0%2012.4183%203.58172%2016%208%2016C12.4183%2016%2016%2012.4183%2016%208ZM7.5%204.5C7.74546%204.5%207.94961%204.67688%207.99194%204.91012L8%205V8.359L10.8123%2010.6096C11.004%2010.7629%2011.0529%2011.0286%2010.9403%2011.2371L10.8904%2011.3123C10.7371%2011.504%2010.4714%2011.5529%2010.2629%2011.4403L10.1877%2011.3904L7.18765%208.99043C7.09277%208.91453%207.0296%208.8074%207.00813%208.68982L7%208.6V5C7%204.72386%207.22386%204.5%207.5%204.5Z%22%20fill%3D%22%23703815%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-yellow-800")}
                  tag="div"
                >
                  {textPending}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-blue-500",
                    "text-underline",
                    "cursor-pointer"
                  )}
                  tag="div"
                  {...onClickViewPendingInvites}
                >
                  {"View pending invites"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "slot_search-filter",
              "mlr-20",
              "mt-10"
            )}
            tag="div"
          >
            {slotSearchAndFilter}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "tu-list-wrapper",
              "mlr-20",
              "radius-10"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "tu-list-block", "header-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "tu-list-header")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-embed")}
                    value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13%206C13%205.45833%2012.8646%204.95833%2012.5938%204.5C12.3229%204.04167%2011.9583%203.67708%2011.5%203.40625C11.0208%203.13542%2010.5208%203%2010%203C9.47917%203%208.97917%203.13542%208.5%203.40625C8.04167%203.67708%207.67708%204.04167%207.40625%204.5C7.13542%204.95833%207%205.45833%207%206C7%206.54167%207.13542%207.04167%207.40625%207.5C7.67708%207.95833%208.04167%208.32292%208.5%208.59375C8.97917%208.86458%209.47917%209%2010%209C10.5208%209%2011.0208%208.86458%2011.5%208.59375C11.9583%208.32292%2012.3229%207.95833%2012.5938%207.5C12.8646%207.04167%2013%206.54167%2013%206ZM6%206C6%205.27083%206.17708%204.60417%206.53125%204C6.88542%203.39583%207.375%202.90625%208%202.53125C8.625%202.17708%209.29167%202%2010%202C10.7083%202%2011.375%202.17708%2012%202.53125C12.625%202.90625%2013.1146%203.39583%2013.4688%204C13.8229%204.60417%2014%205.27083%2014%206C14%206.72917%2013.8229%207.39583%2013.4688%208C13.1146%208.60417%2012.625%209.09375%2012%209.46875C11.375%209.82292%2010.7083%2010%2010%2010C9.29167%2010%208.625%209.82292%208%209.46875C7.375%209.09375%206.88542%208.60417%206.53125%208C6.17708%207.39583%206%206.72917%206%206ZM4%2017H16C15.9583%2015.7292%2015.5%2014.6667%2014.625%2013.8125C13.7708%2012.9792%2012.7083%2012.5417%2011.4375%2012.5H8.5625C7.29167%2012.5417%206.22917%2012.9792%205.375%2013.8125C4.5%2014.6667%204.04167%2015.7292%204%2017ZM3%2017.0625C3.04167%2015.5%203.58333%2014.1875%204.625%2013.125C5.6875%2012.0833%207%2011.5417%208.5625%2011.5H11.4375C13%2011.5417%2014.3125%2012.0833%2015.375%2013.125C16.4167%2014.1875%2016.9583%2015.5%2017%2017.0625C17%2017.3333%2016.9062%2017.5521%2016.7188%2017.7188C16.5521%2017.9062%2016.3333%2018%2016.0625%2018H3.9375C3.66667%2018%203.44792%2017.9062%203.28125%2017.7188C3.09375%2017.5521%203%2017.3333%203%2017.0625Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block tag="div">{"User"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tu-list-header")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-embed")}
                    value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%203C5.70833%203%205.46875%203.09375%205.28125%203.28125C5.09375%203.46875%205%203.70833%205%204V16C5%2016.2917%205.09375%2016.5312%205.28125%2016.7188C5.46875%2016.9062%205.70833%2017%206%2017H14C14.2917%2017%2014.5312%2016.9062%2014.7188%2016.7188C14.9062%2016.5312%2015%2016.2917%2015%2016V4C15%203.70833%2014.9062%203.46875%2014.7188%203.28125C14.5312%203.09375%2014.2917%203%2014%203H6ZM4%204C4.02083%203.4375%204.21875%202.96875%204.59375%202.59375C4.96875%202.21875%205.4375%202.02083%206%202H14C14.5625%202.02083%2015.0312%202.21875%2015.4062%202.59375C15.7812%202.96875%2015.9792%203.4375%2016%204V16C15.9792%2016.5625%2015.7812%2017.0312%2015.4062%2017.4062C15.0312%2017.7812%2014.5625%2017.9792%2014%2018H6C5.4375%2017.9792%204.96875%2017.7812%204.59375%2017.4062C4.21875%2017.0312%204.02083%2016.5625%204%2016V4ZM11%209C11%208.70833%2010.9062%208.46875%2010.7188%208.28125C10.5312%208.09375%2010.2917%208%2010%208C9.70833%208%209.46875%208.09375%209.28125%208.28125C9.09375%208.46875%209%208.70833%209%209C9%209.29167%209.09375%209.53125%209.28125%209.71875C9.46875%209.90625%209.70833%2010%2010%2010C10.2917%2010%2010.5312%209.90625%2010.7188%209.71875C10.9062%209.53125%2011%209.29167%2011%209ZM8%209C8.02083%208.25%208.35417%207.67708%209%207.28125C9.66667%206.90625%2010.3333%206.90625%2011%207.28125C11.6458%207.67708%2011.9792%208.25%2012%209C11.9792%209.75%2011.6458%2010.3229%2011%2010.7188C10.3333%2011.0938%209.66667%2011.0938%209%2010.7188C8.35417%2010.3229%208.02083%209.75%208%209ZM8%204.5C8.02083%204.1875%208.1875%204.02083%208.5%204H11.5C11.8125%204.02083%2011.9792%204.1875%2012%204.5C11.9792%204.8125%2011.8125%204.97917%2011.5%205H8.5C8.1875%204.97917%208.02083%204.8125%208%204.5ZM7.5%2014.5C7.47917%2014.8125%207.3125%2014.9792%207%2015C6.6875%2014.9792%206.52083%2014.8125%206.5%2014.5C6.52083%2013.7917%206.76042%2013.1979%207.21875%2012.7188C7.69792%2012.2604%208.29167%2012.0208%209%2012H11C11.7083%2012.0208%2012.3021%2012.2604%2012.7812%2012.7188C13.2396%2013.1979%2013.4792%2013.7917%2013.5%2014.5C13.4792%2014.8125%2013.3125%2014.9792%2013%2015C12.6875%2014.9792%2012.5208%2014.8125%2012.5%2014.5C12.4792%2014.0833%2012.3333%2013.7292%2012.0625%2013.4375C11.7708%2013.1667%2011.4167%2013.0208%2011%2013H9C8.58333%2013.0208%208.22917%2013.1667%207.9375%2013.4375C7.66667%2013.7292%207.52083%2014.0833%207.5%2014.5Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block tag="div">{"Role"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tu-list-header")}
                id={_utils.cx(
                  _styles,
                  "w-node-_5da55308-9bad-28f7-b285-9c4a01bb6d99-01bb6d7a"
                )}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-embed")}
                    value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2%203C1.70833%203%201.46875%203.09375%201.28125%203.28125C1.09375%203.46875%201%203.70833%201%204V16C1%2016.2917%201.09375%2016.5312%201.28125%2016.7188C1.46875%2016.9062%201.70833%2017%202%2017H4V15C4.02083%2014.4375%204.21875%2013.9688%204.59375%2013.5938C4.96875%2013.2188%205.4375%2013.0208%206%2013C6.5625%2013.0208%207.03125%2013.2188%207.40625%2013.5938C7.78125%2013.9688%207.97917%2014.4375%208%2015V17H10C10.0208%2017.3542%2010.125%2017.6771%2010.3125%2017.9688C10.2083%2017.9896%2010.1042%2018%2010%2018H8H7H5H4H2C1.4375%2017.9792%200.96875%2017.7812%200.59375%2017.4062C0.21875%2017.0312%200.0208333%2016.5625%200%2016V4C0.0208333%203.4375%200.21875%202.96875%200.59375%202.59375C0.96875%202.21875%201.4375%202.02083%202%202H10C10.5625%202.02083%2011.0312%202.21875%2011.4062%202.59375C11.7812%202.96875%2011.9792%203.4375%2012%204V10.5V13.5C11.625%2013.7083%2011.2917%2013.9688%2011%2014.2812V4C11%203.70833%2010.9062%203.46875%2010.7188%203.28125C10.5312%203.09375%2010.2917%203%2010%203H2ZM7%2015C7%2014.7083%206.90625%2014.4688%206.71875%2014.2812C6.53125%2014.0938%206.29167%2014%206%2014C5.70833%2014%205.46875%2014.0938%205.28125%2014.2812C5.09375%2014.4688%205%2014.7083%205%2015V17H7V15ZM2%205.75C2.04167%205.29167%202.29167%205.04167%202.75%205H4.25C4.70833%205.04167%204.95833%205.29167%205%205.75V7.25C4.95833%207.70833%204.70833%207.95833%204.25%208H2.75C2.29167%207.95833%202.04167%207.70833%202%207.25V5.75ZM3%206V7H4V6H3ZM7.75%205H9.25C9.70833%205.04167%209.95833%205.29167%2010%205.75V7.25C9.95833%207.70833%209.70833%207.95833%209.25%208H7.75C7.29167%207.95833%207.04167%207.70833%207%207.25V5.75C7.04167%205.29167%207.29167%205.04167%207.75%205ZM8%207H9V6H8V7ZM2%209.75C2.04167%209.29167%202.29167%209.04167%202.75%209H4.25C4.70833%209.04167%204.95833%209.29167%205%209.75V11.25C4.95833%2011.7083%204.70833%2011.9583%204.25%2012H2.75C2.29167%2011.9583%202.04167%2011.7083%202%2011.25V9.75ZM3%2010V11H4V10H3ZM7.75%209H9.25C9.70833%209.04167%209.95833%209.29167%2010%209.75V11.25C9.95833%2011.7083%209.70833%2011.9583%209.25%2012H7.75C7.29167%2011.9583%207.04167%2011.7083%207%2011.25V9.75C7.04167%209.29167%207.29167%209.04167%207.75%209ZM8%2011H9V10H8V11ZM14%2010.5C14.0208%2011.0625%2014.2708%2011.5%2014.75%2011.8125C15.25%2012.0625%2015.75%2012.0625%2016.25%2011.8125C16.7292%2011.5%2016.9792%2011.0625%2017%2010.5C16.9792%209.9375%2016.7292%209.5%2016.25%209.1875C15.75%208.9375%2015.25%208.9375%2014.75%209.1875C14.2708%209.5%2014.0208%209.9375%2014%2010.5ZM18%2010.5C17.9792%2011.4375%2017.5625%2012.1562%2016.75%2012.6562C15.9167%2013.1146%2015.0833%2013.1146%2014.25%2012.6562C13.4375%2012.1562%2013.0208%2011.4375%2013%2010.5C13.0208%209.5625%2013.4375%208.84375%2014.25%208.34375C15.0833%207.88542%2015.9167%207.88542%2016.75%208.34375C17.5625%208.84375%2017.9792%209.5625%2018%2010.5ZM12%2016.9062C12%2016.9688%2012.0312%2017%2012.0938%2017H18.9062C18.9688%2017%2019%2016.9688%2019%2016.9062C18.9792%2016.3646%2018.7917%2015.9167%2018.4375%2015.5625C18.0833%2015.2083%2017.6354%2015.0208%2017.0938%2015H13.9062C13.3646%2015.0208%2012.9167%2015.2083%2012.5625%2015.5625C12.2083%2015.9167%2012.0208%2016.3646%2012%2016.9062ZM13.9062%2014H15.5H17.0938C17.9062%2014.0208%2018.5938%2014.3021%2019.1562%2014.8438C19.6979%2015.4062%2019.9792%2016.0938%2020%2016.9062C20%2017.2188%2019.8958%2017.4792%2019.6875%2017.6875C19.4792%2017.8958%2019.2188%2018%2018.9062%2018H12.0938C11.7812%2018%2011.5208%2017.8958%2011.3125%2017.6875C11.1042%2017.4792%2011%2017.2188%2011%2016.9062C11.0208%2016.0938%2011.3021%2015.4062%2011.8438%2014.8438C12.4062%2014.3021%2013.0938%2014.0208%2013.9062%2014Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block tag="div">{"Department"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tu-list-header", "color-add")}
                id={_utils.cx(
                  _styles,
                  "w-node-d87be396-79ed-efb9-84aa-e68a22a48a7a-01bb6d7a"
                )}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-embed")}
                    value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%209%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%204.4C7.97083%203.40833%207.62813%202.58437%206.97188%201.92812C6.31563%201.27187%205.49167%200.929166%204.5%200.899999C3.50833%200.929166%202.68437%201.27187%202.02812%201.92812C1.37187%202.58437%201.02917%203.40833%201%204.4C1%204.75%201.12396%205.20937%201.37187%205.77812C1.61979%206.36146%201.93333%206.96667%202.3125%207.59375C2.69167%208.20625%203.07812%208.775%203.47187%209.3C3.86562%209.83958%204.20833%2010.2917%204.5%2010.6563C4.79167%2010.2917%205.13438%209.83958%205.52813%209.3C5.92188%208.775%206.30833%208.20625%206.6875%207.59375C7.08125%206.96667%207.40208%206.36146%207.65%205.77812C7.88333%205.20937%208%204.75%208%204.4ZM8.7%204.4C8.67083%205.05625%208.4375%205.81458%208%206.675C7.54792%207.53542%207.0375%208.36667%206.46875%209.16875C5.9%209.98542%205.41875%2010.6344%205.025%2011.1156C4.87917%2011.2906%204.70417%2011.3781%204.5%2011.3781C4.29583%2011.3781%204.12083%2011.2906%203.975%2011.1156C3.58125%2010.6344%203.1%209.98542%202.53125%209.16875C1.9625%208.36667%201.45208%207.53542%201%206.675C0.5625%205.81458%200.329166%205.05625%200.3%204.4C0.329166%203.20417%200.7375%202.2125%201.525%201.425C2.3125%200.637499%203.30417%200.229166%204.5%200.199999C5.69583%200.229166%206.6875%200.637499%207.475%201.425C8.2625%202.2125%208.67083%203.20417%208.7%204.4ZM3.45%204.4C3.46458%204.79375%203.63958%205.1%203.975%205.31875C4.325%205.49375%204.675%205.49375%205.025%205.31875C5.36042%205.1%205.53542%204.79375%205.55%204.4C5.53542%204.00625%205.36042%203.7%205.025%203.48125C4.675%203.30625%204.325%203.30625%203.975%203.48125C3.63958%203.7%203.46458%204.00625%203.45%204.4ZM4.5%206.15C3.84375%206.13542%203.34062%205.84375%202.99062%205.275C2.66979%204.69167%202.66979%204.10833%202.99062%203.525C3.34062%202.95625%203.84375%202.66458%204.5%202.65C5.15625%202.66458%205.65938%202.95625%206.00938%203.525C6.33021%204.10833%206.33021%204.69167%206.00938%205.275C5.65938%205.84375%205.15625%206.13542%204.5%206.15Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block tag="div">{"Location"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tu-list-header")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-embed")}
                    value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.5%202C6.8125%202.02083%206.97917%202.1875%207%202.5V4H13V2.5C13.0208%202.1875%2013.1875%202.02083%2013.5%202C13.8125%202.02083%2013.9792%202.1875%2014%202.5V4H15C15.5625%204.02083%2016.0312%204.21875%2016.4062%204.59375C16.7812%204.96875%2016.9792%205.4375%2017%206V7V8V16C16.9792%2016.5625%2016.7812%2017.0312%2016.4062%2017.4062C16.0312%2017.7812%2015.5625%2017.9792%2015%2018H5C4.4375%2017.9792%203.96875%2017.7812%203.59375%2017.4062C3.21875%2017.0312%203.02083%2016.5625%203%2016V8V7V6C3.02083%205.4375%203.21875%204.96875%203.59375%204.59375C3.96875%204.21875%204.4375%204.02083%205%204H6V2.5C6.02083%202.1875%206.1875%202.02083%206.5%202ZM16%208H4V16C4%2016.2917%204.09375%2016.5312%204.28125%2016.7188C4.46875%2016.9062%204.70833%2017%205%2017H15C15.2917%2017%2015.5312%2016.9062%2015.7188%2016.7188C15.9062%2016.5312%2016%2016.2917%2016%2016V8ZM15%205H5C4.70833%205%204.46875%205.09375%204.28125%205.28125C4.09375%205.46875%204%205.70833%204%206V7H16V6C16%205.70833%2015.9062%205.46875%2015.7188%205.28125C15.5312%205.09375%2015.2917%205%2015%205Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block tag="div">{"Last Active"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tu-list-header")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-embed")}
                    value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.96875%203.1875L8.5625%204.65625C8.4375%205.05208%208.19792%205.33333%207.84375%205.5C7.61458%205.60417%207.39583%205.72917%207.1875%205.875C6.875%206.08333%206.52083%206.15625%206.125%206.09375L4.59375%205.71875C4.55208%205.69792%204.51042%205.69792%204.46875%205.71875C4.30208%205.92708%204.14583%206.15625%204%206.40625L3.875%206.625C3.75%206.85417%203.63542%207.09375%203.53125%207.34375C3.53125%207.38542%203.55208%207.42708%203.59375%207.46875L4.65625%208.59375C4.92708%208.88542%205.05208%209.22917%205.03125%209.625C5.01042%209.75%205%209.875%205%2010C5%2010.125%205.01042%2010.2604%205.03125%2010.4062C5.05208%2010.7812%204.92708%2011.1146%204.65625%2011.4062L3.59375%2012.5312C3.55208%2012.5521%203.52083%2012.5938%203.5%2012.6562C3.60417%2012.9062%203.72917%2013.1458%203.875%2013.375L4%2013.5938C4.14583%2013.8438%204.30208%2014.0729%204.46875%2014.2812C4.51042%2014.3021%204.55208%2014.3021%204.59375%2014.2812L6.09375%2013.9062C6.51042%2013.8438%206.86458%2013.9167%207.15625%2014.125C7.38542%2014.2708%207.61458%2014.3958%207.84375%2014.5C8.17708%2014.6667%208.41667%2014.9479%208.5625%2015.3438L8.96875%2016.8125C8.98958%2016.8542%209.02083%2016.8958%209.0625%2016.9375C9.375%2016.9792%209.6875%2017%2010%2017C10.3125%2017%2010.625%2016.9792%2010.9375%2016.9375C10.9792%2016.8958%2011.0104%2016.8542%2011.0312%2016.8125L11.4375%2015.3438C11.5625%2014.9479%2011.8021%2014.6667%2012.1562%2014.5C12.3854%2014.3958%2012.6146%2014.2708%2012.8438%2014.125C13.1562%2013.9167%2013.5%2013.8438%2013.875%2013.9062L15.4062%2014.2812C15.4479%2014.3021%2015.4896%2014.3021%2015.5312%2014.2812C15.6979%2014.0729%2015.8542%2013.8438%2016%2013.5938L16.125%2013.375C16.25%2013.1458%2016.3646%2012.9062%2016.4688%2012.6562C16.4688%2012.5938%2016.4479%2012.5521%2016.4062%2012.5312L15.3438%2011.4062C15.0729%2011.1146%2014.9583%2010.7812%2015%2010.4062C15%2010.2604%2015%2010.125%2015%2010C15%209.875%2015%209.75%2015%209.625C14.9583%209.22917%2015.0729%208.88542%2015.3438%208.59375L16.4062%207.46875C16.4479%207.44792%2016.4792%207.40625%2016.5%207.34375C16.3958%207.09375%2016.2708%206.85417%2016.125%206.625L16%206.40625C15.8542%206.15625%2015.6979%205.92708%2015.5312%205.71875C15.4896%205.69792%2015.4479%205.69792%2015.4062%205.71875L13.9062%206.09375C13.4896%206.15625%2013.1354%206.08333%2012.8438%205.875C12.6146%205.72917%2012.3854%205.60417%2012.1562%205.5C11.8229%205.33333%2011.5833%205.0625%2011.4375%204.6875L11.0312%203.1875C11.0104%203.14583%2010.9792%203.10417%2010.9375%203.0625C10.625%203.02083%2010.3125%203%2010%203C9.6875%203%209.375%203.02083%209.0625%203.0625C9.02083%203.10417%208.98958%203.14583%208.96875%203.1875ZM10%202C10.4167%202%2010.8125%202.03125%2011.1875%202.09375C11.25%202.09375%2011.3021%202.11458%2011.3438%202.15625C11.6562%202.30208%2011.8646%202.55208%2011.9688%202.90625L12.4062%204.40625C12.4271%204.46875%2012.4896%204.53125%2012.5938%204.59375C12.8646%204.71875%2013.1354%204.875%2013.4062%205.0625C13.4896%205.10417%2013.5729%205.125%2013.6562%205.125L15.1562%204.75C15.5104%204.66667%2015.8333%204.71875%2016.125%204.90625C16.1667%204.92708%2016.2083%204.95833%2016.25%205C16.4792%205.27083%2016.6875%205.5625%2016.875%205.875L17%206.125C17.1667%206.4375%2017.3125%206.76042%2017.4375%207.09375C17.4583%207.13542%2017.4792%207.1875%2017.5%207.25C17.5%207.60417%2017.375%207.91667%2017.125%208.1875L16.0625%209.28125C16%209.34375%2015.9688%209.42708%2015.9688%209.53125C15.9896%209.67708%2016%209.83333%2016%2010C16%2010.1667%2015.9896%2010.3229%2015.9688%2010.4688C15.9688%2010.5729%2016%2010.6562%2016.0625%2010.7188L17.125%2011.8438C17.375%2012.0938%2017.5%2012.3958%2017.5%2012.75C17.4792%2012.8125%2017.4583%2012.8646%2017.4375%2012.9062C17.3125%2013.2396%2017.1667%2013.5625%2017%2013.875L16.875%2014.125H16.8438C16.6771%2014.4375%2016.4792%2014.7292%2016.25%2015C16.2083%2015.0417%2016.1667%2015.0729%2016.125%2015.0938C15.8333%2015.2812%2015.5104%2015.3438%2015.1562%2015.2812L13.6562%2014.9062C13.5729%2014.8854%2013.4896%2014.8958%2013.4062%2014.9375C13.1354%2015.125%2012.8646%2015.2812%2012.5938%2015.4062C12.4896%2015.4688%2012.4271%2015.5312%2012.4062%2015.5938L11.9688%2017.0938C11.8646%2017.4479%2011.6562%2017.7083%2011.3438%2017.875C11.3021%2017.8958%2011.25%2017.9062%2011.1875%2017.9062C10.8125%2017.9688%2010.4167%2018%2010%2018C9.58333%2018%209.1875%2017.9688%208.8125%2017.9062C8.75%2017.9062%208.69792%2017.8958%208.65625%2017.875C8.34375%2017.7083%208.13542%2017.4479%208.03125%2017.0938L7.59375%2015.5938C7.57292%2015.5312%207.51042%2015.4688%207.40625%2015.4062C7.13542%2015.2812%206.86458%2015.125%206.59375%2014.9375C6.51042%2014.8958%206.42708%2014.8854%206.34375%2014.9062L4.84375%2015.2812C4.48958%2015.3438%204.16667%2015.2917%203.875%2015.125C3.83333%2015.0833%203.79167%2015.0417%203.75%2015C3.52083%2014.7292%203.32292%2014.4375%203.15625%2014.125H3.125L3%2013.875C2.83333%2013.5625%202.6875%2013.2396%202.5625%2012.9062C2.54167%2012.8646%202.53125%2012.8125%202.53125%2012.75C2.51042%2012.4167%202.625%2012.1146%202.875%2011.8438L3.9375%2010.7188C4%2010.6562%204.03125%2010.5729%204.03125%2010.4688C4.01042%2010.3229%204%2010.1667%204%2010C4%209.91667%204%209.84375%204%209.78125C4%209.69792%204.01042%209.61458%204.03125%209.53125C4.03125%209.42708%204%209.34375%203.9375%209.28125L2.875%208.1875C2.625%207.91667%202.5%207.60417%202.5%207.25C2.52083%207.1875%202.54167%207.13542%202.5625%207.09375C2.6875%206.76042%202.83333%206.4375%203%206.125L3.125%205.875H3.15625C3.32292%205.5625%203.52083%205.27083%203.75%205C3.79167%204.95833%203.83333%204.92708%203.875%204.90625C4.16667%204.71875%204.48958%204.66667%204.84375%204.75L6.34375%205.125C6.42708%205.125%206.51042%205.10417%206.59375%205.0625C6.86458%204.875%207.13542%204.71875%207.40625%204.59375C7.51042%204.53125%207.57292%204.46875%207.59375%204.40625L8.03125%202.90625C8.13542%202.55208%208.34375%202.30208%208.65625%202.15625C8.69792%202.11458%208.75%202.09375%208.8125%202.09375C9.1875%202.03125%209.58333%202%2010%202ZM8.25%2010C8.27083%2010.6667%208.5625%2011.1667%209.125%2011.5C9.70833%2011.8333%2010.2917%2011.8333%2010.875%2011.5C11.4375%2011.1667%2011.7292%2010.6667%2011.75%2010C11.7292%209.33333%2011.4375%208.83333%2010.875%208.5C10.2917%208.16667%209.70833%208.16667%209.125%208.5C8.5625%208.83333%208.27083%209.33333%208.25%2010ZM12.75%2010C12.7083%2011.0417%2012.25%2011.8333%2011.375%2012.375C10.4583%2012.875%209.54167%2012.875%208.625%2012.375C7.75%2011.8333%207.29167%2011.0417%207.25%2010C7.29167%208.95833%207.75%208.16667%208.625%207.625C9.54167%207.125%2010.4583%207.125%2011.375%207.625C12.25%208.16667%2012.7083%208.95833%2012.75%2010Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block tag="div">{"Actions"}</_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-464")}
              tag="div"
            >
              {slotTeamList ?? (
                <>
                  <TeamListItem />
                  <TeamListItem />
                  <TeamListItem />
                  <_Builtin.Block tag="div" />
                </>
              )}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "cs-team-users-roles", "hide")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "tu-header-block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tu-header-content", "max-width-500")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg", "fw-semibold")}
              tag="div"
            >
              {"Roles"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-600")}
              tag="div"
            >
              {
                "Each user group has distinct permissions tailored to their needs. You can customize these permissions for each group or create a new user group"
              }
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "tu-roles-wrapper")}
          tag="div"
        >
          {slotUsersRoleList}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
