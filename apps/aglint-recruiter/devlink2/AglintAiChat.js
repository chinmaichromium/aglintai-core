"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonSoft } from "./ButtonSoft";
import { AglintAiWelcome } from "./AglintAiWelcome";
import * as _utils from "./utils";
import _styles from "./AglintAiChat.module.css";

export function AglintAiChat({
  as: _Component = _Builtin.Block,
  slotAiBody,
  slotAiInput,
  onClickMemory = {},
  onClickClear = {},
  isClearVisible = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "request-right-wrap")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "req-right-headers")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "aglint-ai-wrappers")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "ai-header")} tag="div">
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons", "hide")}
              value="%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.2695%2010.3372C13.4737%209.88717%2012.5737%209.66634%2011.9529%209.04551C11.332%208.42051%2011.1112%207.52467%2010.6612%205.72884L9.9987%203.08301L9.3362%205.72884C8.8862%207.52467%208.66536%208.42467%208.04453%209.04551C7.41953%209.66634%206.5237%209.88717%204.72786%2010.3372L2.08203%2010.9997L4.72786%2011.6622C6.5237%2012.1122%207.4237%2012.333%208.04453%2012.9538C8.66536%2013.5788%208.8862%2014.4747%209.3362%2016.2705L9.9987%2018.9163L10.6612%2016.2705C11.1112%2014.4747%2011.332%2013.5747%2011.9529%2012.9538C12.5779%2012.333%2013.4737%2012.1122%2015.2695%2011.6622L17.9154%2010.9997L15.2695%2010.3372Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M15.2695%2010.3372C13.4737%209.88717%2012.5737%209.66634%2011.9529%209.04551C11.332%208.42051%2011.1112%207.52467%2010.6612%205.72884L9.9987%203.08301L9.3362%205.72884C8.8862%207.52467%208.66536%208.42467%208.04453%209.04551C7.41953%209.66634%206.5237%209.88717%204.72786%2010.3372L2.08203%2010.9997L4.72786%2011.6622C6.5237%2012.1122%207.4237%2012.333%208.04453%2012.9538C8.66536%2013.5788%208.8862%2014.4747%209.3362%2016.2705L9.9987%2018.9163L10.6612%2016.2705C11.1112%2014.4747%2011.332%2013.5747%2011.9529%2012.9538C12.5779%2012.333%2013.4737%2012.1122%2015.2695%2011.6622L17.9154%2010.9997L15.2695%2010.3372Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_5362_65473)%22%3E%0A%3Cpath%20d%3D%22M16.4232%203.4454C15.8246%203.2954%2015.5246%203.22179%2015.3176%203.01484C15.1107%202.80651%2015.0371%202.5079%2014.8871%201.90929L14.6662%201.02734L14.4454%201.90929C14.2954%202.5079%2014.2218%202.8079%2014.0148%203.01484C13.8065%203.22179%2013.5079%203.2954%2012.9093%203.4454L12.0273%203.66623L12.9093%203.88707C13.5079%204.03707%2013.8079%204.11068%2014.0148%204.31762C14.2218%204.52595%2014.2954%204.82457%2014.4454%205.42318L14.6662%206.30512L14.8871%205.42318C15.0371%204.82457%2015.1107%204.52457%2015.3176%204.31762C15.526%204.11068%2015.8246%204.03707%2016.4232%203.88707L17.3051%203.66623L16.4232%203.4454Z%22%20fill%3D%22%233353E2%22%2F%3E%0A%3Cpath%20d%3D%22M16.4232%203.4454C15.8246%203.2954%2015.5246%203.22179%2015.3176%203.01484C15.1107%202.80651%2015.0371%202.5079%2014.8871%201.90929L14.6662%201.02734L14.4454%201.90929C14.2954%202.5079%2014.2218%202.8079%2014.0148%203.01484C13.8065%203.22179%2013.5079%203.2954%2012.9093%203.4454L12.0273%203.66623L12.9093%203.88707C13.5079%204.03707%2013.8079%204.11068%2014.0148%204.31762C14.2218%204.52595%2014.2954%204.82457%2014.4454%205.42318L14.6662%206.30512L14.8871%205.42318C15.0371%204.82457%2015.1107%204.52457%2015.3176%204.31762C15.526%204.11068%2015.8246%204.03707%2016.4232%203.88707L17.3051%203.66623L16.4232%203.4454Z%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_5362_65473%22%3E%0A%3Crect%20width%3D%226.66667%22%20height%3D%226.66667%22%20fill%3D%22white%22%20transform%3D%22translate(11.332%200.333008)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-group")}
            tag="div"
          >
            {isClearVisible ? (
              <_Builtin.Block tag="div">
                <ButtonSoft
                  onClickButton={onClickClear}
                  size="1"
                  textButton="Clear"
                  color="neutral"
                />
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "aac-top-grad")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "req-right-body")}
        tag="div"
      >
        {slotAiBody ?? (
          <>
            <AglintAiWelcome textAiHeader="Good morning, Sara!" />
            <AglintAiWelcome textAiHeader="Good morning, Sara!" />
            <AglintAiWelcome textAiHeader="Good morning, Sara!" />
          </>
        )}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "aac-grad-support")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "req-right-footer")}
          tag="div"
        >
          {slotAiInput}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "aac-grad-wrap")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
