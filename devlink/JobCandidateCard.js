import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./JobCandidateCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-958":{"id":"e-958","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-387","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-959"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".checkbox-4.clickable","originalId":"650c129b14ba3ec430890088|357c3017-0ddf-0e97-5411-2b2c7e739b2d","appliesTo":"CLASS"},"targets":[{"selector":".checkbox-4.clickable","originalId":"650c129b14ba3ec430890088|357c3017-0ddf-0e97-5411-2b2c7e739b2d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694975855745},"e-959":{"id":"e-959","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-388","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-958"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".checkbox-4.clickable","originalId":"650c129b14ba3ec430890088|357c3017-0ddf-0e97-5411-2b2c7e739b2d","appliesTo":"CLASS"},"targets":[{"selector":".checkbox-4.clickable","originalId":"650c129b14ba3ec430890088|357c3017-0ddf-0e97-5411-2b2c7e739b2d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694975855754},"e-1092":{"id":"e-1092","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-401","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1093"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e942","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e942","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695131045596},"e-1094":{"id":"e-1094","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-402","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1095"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e94a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e94a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695131666635},"e-1176":{"id":"e-1176","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-405","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cf9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cf9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695157767363},"e-1178":{"id":"e-1178","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-406","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1179"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cfb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cfb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695158481480}},"actionLists":{"a-387":{"id":"a-387","title":"applicants-[on-select]","actionItemGroups":[{"actionItems":[{"id":"a-387-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"PARENT","selector":".candidate-list-item","selectorGuids":["44f30e05-337c-7b2f-f34d-5872c4ccb34b"]},"globalSwatchId":"d2a1a159","rValue":237,"bValue":255,"gValue":247,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694975862563},"a-388":{"id":"a-388","title":"applicants-[on-deselect]","actionItemGroups":[{"actionItems":[{"id":"a-388-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"PARENT","selector":".candidate-list-item","selectorGuids":["44f30e05-337c-7b2f-f34d-5872c4ccb34b"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694975862563},"a-401":{"id":"a-401","title":"cj-step-1-[open] lever","actionItemGroups":[{"actionItems":[{"id":"a-401-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-401-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"block"}},{"id":"a-401-n-14","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.lever-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","772c19c5-76ed-231a-26bd-d9c9d19d0855"]},"value":"block"}},{"id":"a-401-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"none"}},{"id":"a-401-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"none"}},{"id":"a-401-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-lever","selectorGuids":["37caf3bd-ff19-5511-9b5a-5d16bbee8879"]},"value":"flex"}},{"id":"a-401-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","d4eea68b-5eca-9f3f-d669-02e95e837de9"]},"value":"block"}},{"id":"a-401-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.green-house","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","c50cfc6f-8a58-c40c-5dc8-9c85f0ec99d4"]},"value":"none"}},{"id":"a-401-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","ca6b01e2-05a8-a7a7-c34f-3d43ecd94e7a"]},"value":"none"}},{"id":"a-401-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-blue","selectorGuids":["3e1aeba0-2b84-3c1e-3b43-eb8840661784"]},"value":"none"}},{"id":"a-401-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn","selectorGuids":["5c3789b4-d72c-76ed-a675-24ff4018589e"]},"value":"none"}},{"id":"a-401-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":0,"unit":""}},{"id":"a-401-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":"none"}}]},{"actionItems":[{"id":"a-401-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-402":{"id":"a-402","title":"cj-step-1-[open] workday","actionItemGroups":[{"actionItems":[{"id":"a-402-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-402-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"block"}},{"id":"a-402-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-workday","selectorGuids":["fcc37e3b-90ca-8032-90ea-bea8b65eda80"]},"value":"flex"}},{"id":"a-402-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.workday","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","3d67b3e6-f070-7294-cbb5-ec1ae975817b"]},"value":"block"}},{"id":"a-402-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-lever","selectorGuids":["37caf3bd-ff19-5511-9b5a-5d16bbee8879"]},"value":"none"}},{"id":"a-402-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","d4eea68b-5eca-9f3f-d669-02e95e837de9"]},"value":"none"}},{"id":"a-402-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.green-house","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","c50cfc6f-8a58-c40c-5dc8-9c85f0ec99d4"]},"value":"none"}},{"id":"a-402-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","ca6b01e2-05a8-a7a7-c34f-3d43ecd94e7a"]},"value":"none"}},{"id":"a-402-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-blue","selectorGuids":["3e1aeba0-2b84-3c1e-3b43-eb8840661784"]},"value":"none"}},{"id":"a-402-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn","selectorGuids":["5c3789b4-d72c-76ed-a675-24ff4018589e"]},"value":"none"}},{"id":"a-402-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":0,"unit":""}},{"id":"a-402-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":"none"}}]},{"actionItems":[{"id":"a-402-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-405":{"id":"a-405","title":"green-step-2 -indeed","actionItemGroups":[{"actionItems":[{"id":"a-405-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-405-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}},{"id":"a-405-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".cj-continue-btn.lever-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","772c19c5-76ed-231a-26bd-d9c9d19d0855"]},"value":"none"}},{"id":"a-405-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"none"}},{"id":"a-405-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"block"}},{"id":"a-405-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.greenhouse-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","56dcda8a-5520-6444-3c71-6fd13052a9d3"]},"value":"none"}},{"id":"a-405-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","9fa08fd1-fcff-b80f-16ca-4882cc86b26f"]},"value":"block"}},{"id":"a-405-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-405-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"none"}},{"id":"a-405-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":"none"}},{"id":"a-405-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":"block"}}]},{"actionItems":[{"id":"a-405-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-406":{"id":"a-406","title":"green-step-2 -lever","actionItemGroups":[{"actionItems":[{"id":"a-406-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-406-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}},{"id":"a-406-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.lever-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","772c19c5-76ed-231a-26bd-d9c9d19d0855"]},"value":"none"}},{"id":"a-406-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","b72c1408-373d-a5c9-e343-c611d6303960"]},"value":"block"}},{"id":"a-406-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"none"}},{"id":"a-406-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"block"}},{"id":"a-406-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.greenhouse-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","56dcda8a-5520-6444-3c71-6fd13052a9d3"]},"value":"none"}},{"id":"a-406-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","9fa08fd1-fcff-b80f-16ca-4882cc86b26f"]},"value":"none"}},{"id":"a-406-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-406-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"none"}},{"id":"a-406-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":"none"}},{"id":"a-406-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":"block"}}]},{"actionItems":[{"id":"a-406-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function JobCandidateCard({
  as: _Component = _Builtin.Block,
  isChecked = false,
  textOrder = "1.",
  slotProfilePic,
  textName = "Mariana Diaz",
  textRole = "Design Engineer",
  textMail = "nathan.roberts@example.com",
  textPhone = "(303) 555-0105",
  slotScore,
  textScore = "0",
  textStatus = "In Progress",
  statusTextColor = {},
  scoreTextColor = {},
  statusBgColor = {},
  textAppliedOn = "Applied on 17 Aug 2023 11:30PM",
  onClickCard = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "candidate-list-item")}
      tag="div"
      {...onClickCard}
    >
      <_Builtin.Block className={_utils.cx(_styles, "frame-1022")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate-resume-info")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "checkbox-wrappers-job")}
            tag="div"
          >
            {isChecked ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "add-icon")}
                value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20y%3D%220.5%22%20width%3D%2216%22%20height%3D%2216%22%20rx%3D%224%22%20fill%3D%22%231F73B7%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7%209.08579L10.2929%205.79289C10.6834%205.40237%2011.3166%205.40237%2011.7071%205.79289C12.0976%206.18342%2012.0976%206.81658%2011.7071%207.20711L7.70711%2011.2071C7.31658%2011.5976%206.68342%2011.5976%206.29289%2011.2071L4.29289%209.20711C3.90237%208.81658%203.90237%208.18342%204.29289%207.79289C4.68342%207.40237%205.31658%207.40237%205.70711%207.79289L7%209.08579Z%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%221.5%22%20y%3D%222%22%20width%3D%2213%22%20height%3D%2213%22%20rx%3D%223.5%22%20stroke%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "cdd-list-number")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-sm")}
              dyn={{
                bind: {},
              }}
              tag="div"
            >
              {textOrder}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "frame-1023")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-profile-info")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slot-profile")}
                tag="div"
              >
                {slotProfilePic}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "frame-1020")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "fw-semibold")}
                  dyn={{
                    bind: {},
                  }}
                  tag="div"
                >
                  {textName}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-sm", "color-grey-600")}
                  dyn={{
                    bind: {},
                  }}
                  tag="div"
                >
                  {textRole}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "frame-1018")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "vectors-wrapper-46")}
                    width={11.999947547912598}
                    height={11.999947547912598}
                    loading="lazy"
                    src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/6504bb624dfe721c77c1cf3f_Vectors-Wrapper.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "",
                      "text-sm",
                      "color-grey-600"
                    )}
                    dyn={{
                      bind: {},
                    }}
                    tag="div"
                  >
                    {textMail}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "frame-1018")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "vectors-wrapper-43")}
                    width={12}
                    height={12}
                    loading="lazy"
                    src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/6504bb634328f76be652b614_Vectors-Wrapper.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "",
                      "text-sm",
                      "color-grey-600"
                    )}
                    dyn={{
                      bind: {},
                    }}
                    tag="div"
                  >
                    {textPhone}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "cdd-resume-match-score")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "vectors-wrapper-44")}
                tag="div"
              >
                {slotScore}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-lg",
                  "fw-semibold",
                  "text-green-800",
                  "hide"
                )}
                dyn={{
                  bind: {},
                }}
                tag="div"
              >
                {"This is some text inside of a div block."}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "resume-match-score", "hide")}
                tag="div"
              >
                {"Resume Match"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "frame-1019")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "speedometer")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "vectors-wrapper-47")}
                  width={10}
                  height={8.676880836486816}
                  loading="lazy"
                  src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/6504bb65d61e8c06f83171d1_Vectors-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-288")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-sm",
                    "fw-semibold",
                    "text-yellow-600"
                  )}
                  dyn={{
                    bind: {},
                  }}
                  tag="div"
                  {...scoreTextColor}
                >
                  {textScore}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-sm",
                    "fw-semibold",
                    "text-yellow-600"
                  )}
                  tag="div"
                  {...scoreTextColor}
                >
                  {"/100"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-10")}
                tag="div"
              >
                {"Interview Score"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "frame-1024")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "frame-1096")}
            tag="div"
            {...statusBgColor}
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-sm",
                "fw-semibold",
                "text-blue-500"
              )}
              dyn={{
                bind: {},
              }}
              tag="div"
              {...statusTextColor}
            >
              {textStatus}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-sm", "color-grey-600")}
            tag="div"
          >
            {textAppliedOn}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      {isChecked ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "checked-bg")}
          tag="div"
        />
      ) : null}
    </_Component>
  );
}
