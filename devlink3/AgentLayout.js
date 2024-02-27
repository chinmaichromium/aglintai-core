import React from "react";
import * as _Builtin from "./_Builtin";
import { NewTaskDropdown } from "./NewTaskDropdown";
import { NewChatButton } from "./NewChatButton";
import { AgentTask } from "./AgentTask";
import { NewChat } from "./NewChat";
import { SuggetionPill } from "./SuggetionPill";
import { TimelineBlock } from "./TimelineBlock";
import * as _utils from "./utils";
import _styles from "./AgentLayout.module.css";

export function AgentLayout({
  as: _Component = _Builtin.Block,
  slotAgentTask,
  textCurrentTaskName = "Untitled Task",
  onClickTaskActivity = {},
  slotChat,
  slotTimelineBlock,
  isSearch = true,
  slotSearchInput,
  onClickSend = {},
  isActivity = false,
  slotSuggetionPills,
  isSuggetionPills = false,
  slotNewChatButton,
}) {
  return (
    <_Component className={_utils.cx(_styles, "aglint_chatbot_wrap")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "task_list")} tag="div">
        <_Builtin.Block tag="div">
          {slotNewChatButton ?? (
            <>
              <NewTaskDropdown />
              <NewChatButton />
            </>
          )}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "slot_task_list", "drop_op")}
          tag="div"
        >
          {slotAgentTask ?? (
            <>
              <AgentTask isActive={true} />
              <AgentTask />
              <AgentTask />
            </>
          )}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "drop_op")} tag="div" />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "task_detail_panel")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "task_details")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "task_top_bar")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold", "capitalize")}
              tag="div"
            >
              {textCurrentTaskName}
            </_Builtin.Block>
            {isActivity ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "task_list_switch", "hide")}
                tag="div"
                {...onClickTaskActivity}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "embed_flex")}
                  value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.0625%202.89062C5.29688%203.14063%205.3125%203.40625%205.10938%203.6875L3.42188%205.5625C3.3125%205.6875%203.17969%205.75%203.02344%205.75C2.85156%205.75%202.71094%205.69531%202.60156%205.58594L1.66406%204.64844C1.44531%204.38281%201.44531%204.11719%201.66406%203.85156C1.92969%203.63281%202.19531%203.63281%202.46094%203.85156L2.97656%204.36719L4.26562%202.9375C4.51562%202.70312%204.78125%202.6875%205.0625%202.89062ZM5.0625%206.64062C5.29688%206.89062%205.3125%207.15625%205.10938%207.4375L3.42188%209.3125C3.3125%209.4375%203.17969%209.5%203.02344%209.5C2.85156%209.5%202.71094%209.44531%202.60156%209.33594L1.66406%208.39844C1.44531%208.13281%201.44531%207.86719%201.66406%207.60156C1.92969%207.38281%202.19531%207.38281%202.46094%207.60156L2.97656%208.11719L4.26562%206.6875C4.51562%206.45312%204.78125%206.4375%205.0625%206.64062ZM6.75%204.25C6.75%204.03125%206.82031%203.85156%206.96094%203.71094C7.10156%203.57031%207.28125%203.5%207.5%203.5H12.75C12.9688%203.5%2013.1484%203.57031%2013.2891%203.71094C13.4297%203.85156%2013.5%204.03125%2013.5%204.25C13.5%204.46875%2013.4297%204.64844%2013.2891%204.78906C13.1484%204.92969%2012.9688%205%2012.75%205H7.5C7.28125%205%207.10156%204.92969%206.96094%204.78906C6.82031%204.64844%206.75%204.46875%206.75%204.25ZM6.75%208C6.75%207.78125%206.82031%207.60156%206.96094%207.46094C7.10156%207.32031%207.28125%207.25%207.5%207.25H12.75C12.9688%207.25%2013.1484%207.32031%2013.2891%207.46094C13.4297%207.60156%2013.5%207.78125%2013.5%208C13.5%208.21875%2013.4297%208.39844%2013.2891%208.53906C13.1484%208.67969%2012.9688%208.75%2012.75%208.75H7.5C7.28125%208.75%207.10156%208.67969%206.96094%208.53906C6.82031%208.39844%206.75%208.21875%206.75%208ZM5.25%2011.75C5.25%2011.5312%205.32031%2011.3516%205.46094%2011.2109C5.60156%2011.0703%205.78125%2011%206%2011H12.75C12.9688%2011%2013.1484%2011.0703%2013.2891%2011.2109C13.4297%2011.3516%2013.5%2011.5312%2013.5%2011.75C13.5%2011.9688%2013.4297%2012.1484%2013.2891%2012.2891C13.1484%2012.4297%2012.9688%2012.5%2012.75%2012.5H6C5.78125%2012.5%205.60156%2012.4297%205.46094%2012.2891C5.32031%2012.1484%205.25%2011.9688%205.25%2011.75ZM2.625%2010.625C3.04688%2010.6406%203.375%2010.8281%203.60938%2011.1875C3.79688%2011.5625%203.79688%2011.9375%203.60938%2012.3125C3.375%2012.6719%203.04688%2012.8594%202.625%2012.875C2.20312%2012.8594%201.875%2012.6719%201.64062%2012.3125C1.45312%2011.9375%201.45312%2011.5625%201.64062%2011.1875C1.875%2010.8281%202.20312%2010.6406%202.625%2010.625Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block tag="div">{"Activity"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "task_chat_body")}
            tag="div"
            id="chat_scroll"
          >
            {slotChat ?? <NewChat />}
          </_Builtin.Block>
          {isSearch ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "task_search_box")}
              tag="div"
            >
              {isSuggetionPills ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "slot_suggetion_pills")}
                  tag="div"
                >
                  {slotSuggetionPills ?? (
                    <>
                      <SuggetionPill textSuggetion="Specific areas of expertise or technical skills that seem" />
                      <SuggetionPill textSuggetion="Specific areas of expertise or technical skills that seem" />
                      <SuggetionPill textSuggetion="Specific areas of expertise or technical skills that seem" />
                    </>
                  )}
                </_Builtin.Block>
              ) : null}
              <_Builtin.Block
                className={_utils.cx(_styles, "task_search_box-copy")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "chat_search")}
                  tag="div"
                >
                  {slotSearchInput}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "chat_send_button")}
                  tag="div"
                  {...onClickSend}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "embed_flex")}
                    value="%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20viewBox%3D%220%200%2025%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.3984%204.10156L19.6484%2010.3516C19.8828%2010.612%2020%2010.9115%2020%2011.25C20%2011.5885%2019.8828%2011.888%2019.6484%2012.1484C19.388%2012.3828%2019.0885%2012.5%2018.75%2012.5C18.4115%2012.5%2018.112%2012.3828%2017.8516%2012.1484L13.75%208.00781V20C13.75%2020.3646%2013.6328%2020.6641%2013.3984%2020.8984C13.1641%2021.1328%2012.8646%2021.25%2012.5%2021.25C12.1354%2021.25%2011.8359%2021.1328%2011.6016%2020.8984C11.3672%2020.6641%2011.25%2020.3646%2011.25%2020V8.00781L7.14844%2012.1484C6.88802%2012.3828%206.58854%2012.5%206.25%2012.5C5.91146%2012.5%205.61198%2012.3828%205.35156%2012.1484C5.11719%2011.888%205%2011.5885%205%2011.25C5%2010.9115%205.11719%2010.612%205.35156%2010.3516L11.6016%204.10156C11.862%203.86719%2012.1615%203.75%2012.5%203.75C12.8385%203.75%2013.138%203.86719%2013.3984%204.10156Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {isSearch ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "task_overlay_block")}
              tag="div"
            />
          ) : null}
        </_Builtin.Block>
        {isActivity ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "task_activity")}
            tag="div"
          >
            {slotTimelineBlock ?? <TimelineBlock />}
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "embed_css_block")}
        value="%3Cstyle%3E%0A.task_chat_body%7B%0Aheight%3A%20calc(100vh%20-%2060px)%20!important%3B%0A%7D%0A.chat_send_button%7B%0Abackground%3A%20linear-gradient(222deg%2C%20%23FF6224%200%25%2C%20rgba(255%2C%2098%2C%2036%2C%200.51)%20119.46%25)%3B%0A%7D%0A%0A%5Bclass*%3D%22AgentLayout_chat_send_button__%22%5D%7B%0Abackground%3A%20linear-gradient(222deg%2C%20%23FF6224%200%25%2C%20rgba(255%2C%2098%2C%2036%2C%200.51)%20119.46%25)%3B%0A%7D%0A%5Bclass*%3D%22AgentLayout_task_chat_body__%22%5D%7B%0Aheight%3A%20calc(100vh%20-%2060px)%20!important%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
