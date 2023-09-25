import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AnalysisSummaryBlock.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-796":{"id":"e-796","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-341","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-797"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b29e1af0-fca3-d7a7-31c9-a91ba047bb7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b29e1af0-fca3-d7a7-31c9-a91ba047bb7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694076524202},"e-948":{"id":"e-948","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-386","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-949"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"},"targets":[{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694910129600},"e-1090":{"id":"e-1090","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-400","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1091"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e93a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e93a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695130701564},"e-1092":{"id":"e-1092","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-401","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1093"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e942","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e942","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695131045596},"e-1094":{"id":"e-1094","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-402","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1095"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e94a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec4308900c6|31e952a1-bd32-e5da-aff4-c57eb453e94a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695131666635},"e-1176":{"id":"e-1176","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-405","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cf9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cf9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695157767363},"e-1178":{"id":"e-1178","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-406","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1179"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cfb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"13ea845c-e88a-fdda-8c07-af1cc4af7cfb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695158481480}},"actionLists":{"a-341":{"id":"a-341","title":"full-analysis-[open]","actionItemGroups":[{"actionItems":[{"id":"a-341-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}},{"id":"a-341-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}},{"id":"a-341-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-341-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-341-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-341-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}},{"id":"a-341-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}}]},{"actionItems":[{"id":"a-341-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694076539902},"a-386":{"id":"a-386","title":"email-temp-editor-[close]","actionItemGroups":[{"actionItems":[{"id":"a-386-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":0,"unit":""}},{"id":"a-386-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".rd-email-edit-wrapper","selectorGuids":["2295ead5-85e1-b9a6-3337-5728082f803c"]},"xValue":500,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-386-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694910134507},"a-400":{"id":"a-400","title":"cj-step-1-[open] indeed","actionItemGroups":[{"actionItems":[{"id":"a-400-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-400-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"block"}},{"id":"a-400-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-lever","selectorGuids":["37caf3bd-ff19-5511-9b5a-5d16bbee8879"]},"value":"none"}},{"id":"a-400-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","d4eea68b-5eca-9f3f-d669-02e95e837de9"]},"value":"none"}},{"id":"a-400-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"block"}},{"id":"a-400-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"none"}},{"id":"a-400-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.green-house","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","c50cfc6f-8a58-c40c-5dc8-9c85f0ec99d4"]},"value":"none"}},{"id":"a-400-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","ca6b01e2-05a8-a7a7-c34f-3d43ecd94e7a"]},"value":"block"}},{"id":"a-400-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-blue","selectorGuids":["3e1aeba0-2b84-3c1e-3b43-eb8840661784"]},"value":"flex"}},{"id":"a-400-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn","selectorGuids":["5c3789b4-d72c-76ed-a675-24ff4018589e"]},"value":"none"}},{"id":"a-400-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":0,"unit":""}},{"id":"a-400-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":"none"}}]},{"actionItems":[{"id":"a-400-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-401":{"id":"a-401","title":"cj-step-1-[open] lever","actionItemGroups":[{"actionItems":[{"id":"a-401-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-401-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"block"}},{"id":"a-401-n-14","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.lever-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","772c19c5-76ed-231a-26bd-d9c9d19d0855"]},"value":"block"}},{"id":"a-401-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"none"}},{"id":"a-401-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"none"}},{"id":"a-401-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-lever","selectorGuids":["37caf3bd-ff19-5511-9b5a-5d16bbee8879"]},"value":"flex"}},{"id":"a-401-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","d4eea68b-5eca-9f3f-d669-02e95e837de9"]},"value":"block"}},{"id":"a-401-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.green-house","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","c50cfc6f-8a58-c40c-5dc8-9c85f0ec99d4"]},"value":"none"}},{"id":"a-401-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","ca6b01e2-05a8-a7a7-c34f-3d43ecd94e7a"]},"value":"none"}},{"id":"a-401-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-blue","selectorGuids":["3e1aeba0-2b84-3c1e-3b43-eb8840661784"]},"value":"none"}},{"id":"a-401-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn","selectorGuids":["5c3789b4-d72c-76ed-a675-24ff4018589e"]},"value":"none"}},{"id":"a-401-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":0,"unit":""}},{"id":"a-401-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":"none"}}]},{"actionItems":[{"id":"a-401-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-402":{"id":"a-402","title":"cj-step-1-[open] workday","actionItemGroups":[{"actionItems":[{"id":"a-402-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-402-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"block"}},{"id":"a-402-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-workday","selectorGuids":["fcc37e3b-90ca-8032-90ea-bea8b65eda80"]},"value":"flex"}},{"id":"a-402-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.workday","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","3d67b3e6-f070-7294-cbb5-ec1ae975817b"]},"value":"block"}},{"id":"a-402-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-lever","selectorGuids":["37caf3bd-ff19-5511-9b5a-5d16bbee8879"]},"value":"none"}},{"id":"a-402-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","d4eea68b-5eca-9f3f-d669-02e95e837de9"]},"value":"none"}},{"id":"a-402-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.green-house","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","c50cfc6f-8a58-c40c-5dc8-9c85f0ec99d4"]},"value":"none"}},{"id":"a-402-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","ca6b01e2-05a8-a7a7-c34f-3d43ecd94e7a"]},"value":"none"}},{"id":"a-402-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn-blue","selectorGuids":["3e1aeba0-2b84-3c1e-3b43-eb8840661784"]},"value":"none"}},{"id":"a-402-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".connect-green-btn","selectorGuids":["5c3789b4-d72c-76ed-a675-24ff4018589e"]},"value":"none"}},{"id":"a-402-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":0,"unit":""}},{"id":"a-402-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".job-sidebar-main-block.options","selectorGuids":["3ac72955-7a42-ebf2-33ee-bf18571527b5","6c833a3a-b277-0e09-8f00-4f7417940d9d"]},"value":"none"}}]},{"actionItems":[{"id":"a-402-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-405":{"id":"a-405","title":"green-step-2 -indeed","actionItemGroups":[{"actionItems":[{"id":"a-405-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-405-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}},{"id":"a-405-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".cj-continue-btn.lever-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","772c19c5-76ed-231a-26bd-d9c9d19d0855"]},"value":"none"}},{"id":"a-405-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"none"}},{"id":"a-405-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"block"}},{"id":"a-405-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.greenhouse-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","56dcda8a-5520-6444-3c71-6fd13052a9d3"]},"value":"none"}},{"id":"a-405-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","9fa08fd1-fcff-b80f-16ca-4882cc86b26f"]},"value":"block"}},{"id":"a-405-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-405-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"none"}},{"id":"a-405-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":"none"}},{"id":"a-405-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":"block"}}]},{"actionItems":[{"id":"a-405-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373},"a-406":{"id":"a-406","title":"green-step-2 -lever","actionItemGroups":[{"actionItems":[{"id":"a-406-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-406-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":0,"unit":""}},{"id":"a-406-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.lever-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","772c19c5-76ed-231a-26bd-d9c9d19d0855"]},"value":"none"}},{"id":"a-406-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.lever-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","b72c1408-373d-a5c9-e343-c611d6303960"]},"value":"block"}},{"id":"a-406-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn.indeed-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535","55231887-f746-e1cb-3877-5a229201d9eb"]},"value":"none"}},{"id":"a-406-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cj-continue-btn","selectorGuids":["62ba9a8d-4649-ed80-b9a9-807ee418c535"]},"value":"block"}},{"id":"a-406-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.greenhouse-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","56dcda8a-5520-6444-3c71-6fd13052a9d3"]},"value":"none"}},{"id":"a-406-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".fw-semibold.indeed-text","selectorGuids":["69827f32-aeaa-fa9d-a591-6700658a8feb","9fa08fd1-fcff-b80f-16ca-4882cc86b26f"]},"value":"none"}},{"id":"a-406-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-406-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".green-house-step-1","selectorGuids":["6d80dd4c-c186-8cfb-2de9-263b5f12248d"]},"value":"none"}},{"id":"a-406-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-3","selectorGuids":["16e66835-5424-a2e8-e33e-a4b27075202c"]},"value":"none"}},{"id":"a-406-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":"block"}}]},{"actionItems":[{"id":"a-406-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".green-house-step-2","selectorGuids":["333e9022-8e84-0c50-a4a2-6278f461aae1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694899619373}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AnalysisSummaryBlock({
  as: _Component = _Builtin.Block,
  analysisHeader = "Woohoo. It looks great 😍",
  analysisSummary = "Your overall score is 92 out of 100. Make it 100 to get more better chance to get hired ",
  analysisScore,
  fullAnalysisBtnProps = {},
  isButtonVisible = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "analysis-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "analysis-summary-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "analysis-content-block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {analysisHeader}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-sm", "color-grey-600")}
            tag="div"
          >
            {analysisSummary}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "analysis-score-block")}
          tag="div"
        >
          {analysisScore ?? (
            <_Builtin.Image
              className={_utils.cx(_styles, "vectors-wrapper-13")}
              loading="lazy"
              width={60}
              height={60}
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/64e489956452e9c146095437_Vectors-Wrapper.svg"
            />
          )}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "analysis-main-block")}
        tag="div"
      >
        {isButtonVisible ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "", "rating-list-item")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "aui-button-wrap")}
              data-w-id="b29e1af0-fca3-d7a7-31c9-a91ba047bb7f"
              tag="div"
              tabIndex="0"
              {...fullAnalysisBtnProps}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "aui-button",
                  "is-button-outlined"
                )}
                tag="div"
                tabIndex="0"
              >
                <_Builtin.Block tag="div">
                  {"View Full Analysis"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
