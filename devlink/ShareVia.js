import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ShareVia.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1090":{"id":"e-1090","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-400","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1091"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e93a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e93a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695130701564},"e-1092":{"id":"e-1092","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-401","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1093"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e942","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e942","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695131045596},"e-1094":{"id":"e-1094","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-402","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1095"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e94a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e94a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695131666635},"e-1176":{"id":"e-1176","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-405","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cf9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cf9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695157767363},"e-1178":{"id":"e-1178","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-406","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1179"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cfb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cfb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695158481480}},"actionLists":{"a-400":{"id":"a-400","title":"cj-step-1-[open] indeed","actionItemGroups":[{"actionItems":[{"id":"a-400-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-400-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"block"}},{"id":"a-400-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-lever","selectorGuids":["37caf3bd-ff19-5511-9b5a-5d16bbee8879"]},"value":"none"}},{"id":"a-400-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","d4eea68b-5eca-9f3f-d669-02e95e837de9"]},"value":"none"}},{"id":"a-400-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"block"}},{"id":"a-400-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"none"}},{"id":"a-400-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.green-house","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","c50cfc6f-8a58-c40c-5dc8-9c85f0ec99d4"]},"value":"none"}},{"id":"a-400-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","ca6b01e2-05a8-a7a7-c34f-3d43ecd94e7a"]},"value":"block"}},{"id":"a-400-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-blue","selectorGuids":["3e1aeba0-2b84-3c1e-3b43-eb8840661784"]},"value":"flex"}},{"id":"a-400-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn","selectorGuids":["5c3789b4-d72c-76ed-a675-24ff4018589e"]},"value":"none"}},{"id":"a-400-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":0,"unit":""}},{"id":"a-400-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":"none"}}]},{"actionItems":[{"id":"a-400-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-401":{"id":"a-401","title":"cj-step-1-[open] lever","actionItemGroups":[{"actionItems":[{"id":"a-401-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-401-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"block"}},{"id":"a-401-n-14","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.lever-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","772c19c5-76ed-231a-26bd-d9c9d19d0855"]},"value":"block"}},{"id":"a-401-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"none"}},{"id":"a-401-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"none"}},{"id":"a-401-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-lever","selectorGuids":["37caf3bd-ff19-5511-9b5a-5d16bbee8879"]},"value":"flex"}},{"id":"a-401-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","d4eea68b-5eca-9f3f-d669-02e95e837de9"]},"value":"block"}},{"id":"a-401-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.green-house","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","c50cfc6f-8a58-c40c-5dc8-9c85f0ec99d4"]},"value":"none"}},{"id":"a-401-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","ca6b01e2-05a8-a7a7-c34f-3d43ecd94e7a"]},"value":"none"}},{"id":"a-401-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-blue","selectorGuids":["3e1aeba0-2b84-3c1e-3b43-eb8840661784"]},"value":"none"}},{"id":"a-401-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn","selectorGuids":["5c3789b4-d72c-76ed-a675-24ff4018589e"]},"value":"none"}},{"id":"a-401-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":0,"unit":""}},{"id":"a-401-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":"none"}}]},{"actionItems":[{"id":"a-401-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-402":{"id":"a-402","title":"cj-step-1-[open] workday","actionItemGroups":[{"actionItems":[{"id":"a-402-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-402-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"block"}},{"id":"a-402-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-workday","selectorGuids":["fcc37e3b-90ca-8032-90ea-bea8b65eda80"]},"value":"flex"}},{"id":"a-402-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.workday","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","3d67b3e6-f070-7294-cbb5-ec1ae975817b"]},"value":"block"}},{"id":"a-402-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-lever","selectorGuids":["37caf3bd-ff19-5511-9b5a-5d16bbee8879"]},"value":"none"}},{"id":"a-402-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","d4eea68b-5eca-9f3f-d669-02e95e837de9"]},"value":"none"}},{"id":"a-402-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.green-house","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","c50cfc6f-8a58-c40c-5dc8-9c85f0ec99d4"]},"value":"none"}},{"id":"a-402-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","ca6b01e2-05a8-a7a7-c34f-3d43ecd94e7a"]},"value":"none"}},{"id":"a-402-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-blue","selectorGuids":["3e1aeba0-2b84-3c1e-3b43-eb8840661784"]},"value":"none"}},{"id":"a-402-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn","selectorGuids":["5c3789b4-d72c-76ed-a675-24ff4018589e"]},"value":"none"}},{"id":"a-402-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":0,"unit":""}},{"id":"a-402-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":"none"}}]},{"actionItems":[{"id":"a-402-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-405":{"id":"a-405","title":"green-step-2 -indeed","actionItemGroups":[{"actionItems":[{"id":"a-405-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-405-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}},{"id":"a-405-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".cj-continue-btn.lever-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","772c19c5-76ed-231a-26bd-d9c9d19d0855"]},"value":"none"}},{"id":"a-405-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"none"}},{"id":"a-405-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"block"}},{"id":"a-405-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.greenhouse-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","56dcda8a-5520-6444-3c71-6fd13052a9d3"]},"value":"none"}},{"id":"a-405-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","9fa08fd1-fcff-b80f-16ca-4882cc86b26f"]},"value":"block"}},{"id":"a-405-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-405-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"none"}},{"id":"a-405-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":"none"}},{"id":"a-405-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":"block"}}]},{"actionItems":[{"id":"a-405-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-406":{"id":"a-406","title":"green-step-2 -lever","actionItemGroups":[{"actionItems":[{"id":"a-406-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-406-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}},{"id":"a-406-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.lever-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","772c19c5-76ed-231a-26bd-d9c9d19d0855"]},"value":"none"}},{"id":"a-406-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","b72c1408-373d-a5c9-e343-c611d6303960"]},"value":"block"}},{"id":"a-406-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"none"}},{"id":"a-406-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"block"}},{"id":"a-406-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.greenhouse-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","56dcda8a-5520-6444-3c71-6fd13052a9d3"]},"value":"none"}},{"id":"a-406-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","9fa08fd1-fcff-b80f-16ca-4882cc86b26f"]},"value":"none"}},{"id":"a-406-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-406-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"none"}},{"id":"a-406-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":"none"}},{"id":"a-406-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":"block"}}]},{"actionItems":[{"id":"a-406-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ShareVia({
  as: _Component = _Builtin.Block,
  onClickCopy = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "cj-share-block")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "cj-share-header-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cj-share-icon-block")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon")}
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213%22%20height%3D%2213%22%20viewbox%3D%220%200%2013%2013%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3.32843%205.17645L4.001%205.849L3.3%206.564L2.97487%206.23834L1.57843%207.63355C0.807191%208.40479%200.807191%209.65521%201.57843%2010.4264L1.68648%2010.5268C2.46235%2011.1961%203.63514%2011.1626%204.37132%2010.4264L5.76724%209.03071L5.422%208.685L6.122%207.97L6.82843%208.67645C7.02369%208.87171%207.02369%209.18829%206.82843%209.38355L5.07843%2011.1336C3.91667%2012.2953%202.03308%2012.2953%200.87132%2011.1336C-0.29044%209.97179%20-0.29044%208.08821%200.87132%206.92645L2.62132%205.17645C2.81658%204.98118%203.13316%204.98118%203.32843%205.17645ZM8.21984%203.08575C8.41606%202.95272%208.68528%202.97472%208.85709%203.15002C9.0289%203.32532%209.04548%203.59492%208.90853%203.78843L8.84998%203.85709L6.32486%206.33196L3.85709%208.84998L3.78843%208.90853C3.59492%209.04548%203.32532%209.0289%203.15002%208.85709C2.97472%208.68528%202.95272%208.41606%203.08575%208.21984L3.14291%208.15002L5.61778%205.62489L8.15002%203.14291L8.21984%203.08575ZM11.1336%200.87132C12.2953%202.03308%2012.2953%203.91667%2011.1336%205.07843L9.38355%206.82843C9.18829%207.02369%208.87171%207.02369%208.67645%206.82843L7.971%206.123L8.686%205.422L9.03%205.76653L10.4264%204.37132C11.1977%203.60008%2011.1977%202.34966%2010.4264%201.57843L10.3184%201.47804C9.54253%200.808784%208.36973%200.842247%207.63355%201.57843L6.23764%202.97417L6.564%203.301L5.849%204.001L5.17645%203.32843C4.98118%203.13316%204.98118%202.81658%205.17645%202.62132L6.92645%200.87132C8.08821%20-0.29044%209.97179%20-0.29044%2011.1336%200.87132Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "fw-semibold")} tag="div">
          {"Shareable Job Link"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "cj-share-via-main")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cj-share-copy-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cj-share-copy-block")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "cj-copy-link-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm", "fw-semibold")}
                tag="div"
              >
                {
                  "https://www.aglinthq.com/job/l/u/0/#inbox/dwendjdjhbhjkecsd.."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "cj-copy-icon")}
              tag="div"
              {...onClickCopy}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3.5%2010C3.77614%2010%204%2010.2239%204%2010.5C4%2010.7761%203.77614%2011%203.5%2011H1C0.447715%2011%200%2010.5523%200%2010V1C0%200.447715%200.447715%200%201%200H10C10.5523%200%2011%200.447715%2011%201V3.5C11%203.77614%2010.7761%204%2010.5%204C10.2239%204%2010%203.77614%2010%203.5V1H1V10H3.5ZM6%206V15H15V6H6ZM6%205H15C15.5523%205%2016%205.44772%2016%206V15C16%2015.5523%2015.5523%2016%2015%2016H6C5.44772%2016%205%2015.5523%205%2015V6C5%205.44772%205.44772%205%206%205Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "cj-share-posted-block")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-xxsm",
                "fw-semibold",
                "text-grey-400"
              )}
              tag="div"
            >
              {"Posted via"}
            </_Builtin.Block>
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec43089020f_Frame%201092.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "cj-share-via")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cj-share-via-header")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "cj-share-icon")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3.14645%202.61242C3.34171%202.80834%203.65829%202.80834%203.85355%202.61242L5%201.46207V7.27468C5%207.55176%205.22386%207.77638%205.5%207.77638C5.77614%207.77638%206%207.55176%206%207.27468V1.56241L7.04645%202.61242C7.24171%202.80834%207.55829%202.80834%207.75355%202.61242C7.94882%202.41649%207.94882%202.09883%207.75355%201.9029L6.15355%200.297456C5.75829%20-0.0991519%205.14171%20-0.0991519%204.74645%200.297456L3.14645%201.9029C2.95118%202.09883%202.95118%202.41649%203.14645%202.61242ZM7.5%204.76617C7.22386%204.76617%207%204.54155%207%204.26447C7%203.98739%207.22386%203.76277%207.5%203.76277H10C10.5761%203.76277%2011%204.18807%2011%204.76617V10.7866C11%2011.3647%2010.5761%2011.79%2010%2011.79H1C0.423858%2011.79%200%2011.3647%200%2010.7866V4.76617C0%204.18807%200.423858%203.76277%201%203.76277H3.5C3.77614%203.76277%204%203.98739%204%204.26447C4%204.54155%203.77614%204.76617%203.5%204.76617H1V10.7866H10V4.76617H7.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-sm",
                "fw-semibold",
                "color-grey-500"
              )}
              tag="div"
            >
              {"Share via"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "cj-share-via-options")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "share-via-option-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "share-via-option")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "share-via-option-icon-block")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "share-via-option-icon")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="__wf_reserved_inherit"
                    src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec430890206_LinkedIn%20-%20png%20-%2012px.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-sm", "fw-semibold")}
                  tag="div"
                >
                  {"Linkedin"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "share-via-option")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "share-via-option-icon-block")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "share-via-option-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="__wf_reserved_inherit"
                  src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec4308901c0_64dcae8d0156e8d54cb108e9_google%20logo.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm", "fw-semibold")}
                tag="div"
              >
                {"Mail"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "linked-wrappers")}
            tag="div"
          >
            <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.5%205C6.05228%205%206.5%204.55228%206.5%204C6.5%203.44772%206.05228%203%205.5%203C4.94772%203%204.5%203.44772%204.5%204C4.5%204.55228%204.94772%205%205.5%205ZM5.5%2010C5.77614%2010%206%209.77614%206%209.5V6.5C6%206.22386%205.77614%206%205.5%206C5.22386%206%205%206.22386%205%206.5V9.5C5%209.77614%205.22386%2010%205.5%2010ZM5.5%2012C2.46243%2012%200%209.53757%200%206.5C0%203.46243%202.46243%201%205.5%201C8.53757%201%2011%203.46243%2011%206.5C11%209.53757%208.53757%2012%205.5%2012ZM5.5%2011C7.98528%2011%2010%208.98528%2010%206.5C10%204.01472%207.98528%202%205.5%202C3.01472%202%201%204.01472%201%206.5C1%208.98528%203.01472%2011%205.5%2011Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E" />
            <_Builtin.Block tag="div">
              {"How to share via linkedin?"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "share-guide-wrapper")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
