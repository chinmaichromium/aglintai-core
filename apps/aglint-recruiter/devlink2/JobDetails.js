"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Breadcrum } from "./Breadcrum";
import { RefreshButton } from "./RefreshButton";
import { ShowFilterButton } from "./ShowFilterButton";
import { SelectActionBar } from "./SelectActionBar";
import { JobDetailsFilterBlock } from "./JobDetailsFilterBlock";
import { ApplicantsTable } from "./ApplicantsTable";
import { AllApplicantsTable } from "./AllApplicantsTable";
import { CandidatesListPagination } from "./CandidatesListPagination";
import { SidebarScreening } from "./SidebarScreening";
import * as _utils from "./utils";
import _styles from "./JobDetails.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-41":{"id":"e-41","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e250e4a-68d7-8f39-2620-4fb80934db07","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e250e4a-68d7-8f39-2620-4fb80934db07","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697536528611},"e-43":{"id":"e-43","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e250e4a-68d7-8f39-2620-4fb80934db3a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e250e4a-68d7-8f39-2620-4fb80934db3a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697536528611},"e-45":{"id":"e-45","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e250e4a-68d7-8f39-2620-4fb80934dbea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e250e4a-68d7-8f39-2620-4fb80934dbea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697536528611},"e-103":{"id":"e-103","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-104"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba1546b6-69d3-cf1c-4ab5-1a9589db7541","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba1546b6-69d3-cf1c-4ab5-1a9589db7541","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704344326765},"e-104":{"id":"e-104","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-103"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba1546b6-69d3-cf1c-4ab5-1a9589db7541","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba1546b6-69d3-cf1c-4ab5-1a9589db7541","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704344326769},"e-141":{"id":"e-141","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-89","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-142"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711116560091},"e-142":{"id":"e-142","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-141"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711116560092},"e-143":{"id":"e-143","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-144"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"060ed27d-d611-fc60-5986-c253a6e2933e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711117013504},"e-157":{"id":"e-157","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282313},"e-158":{"id":"e-158","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4667897-cb8f-9265-5bac-ed224495c8eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715600282314},"e-159":{"id":"e-159","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6c057f1c-2c58-8c58-ef8c-03c55399aa7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6c057f1c-2c58-8c58-ef8c-03c55399aa7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715940666353},"e-160":{"id":"e-160","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-159"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6c057f1c-2c58-8c58-ef8c-03c55399aa7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6c057f1c-2c58-8c58-ef8c-03c55399aa7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715940666354}},"actionLists":{"a-19":{"id":"a-19","title":"cv-sidebar-[close]","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"selector":".candidates-view-sidebar","selectorGuids":["9fe62391-7b37-03f4-4bdf-c39a91950395"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697457373169},"a-16":{"id":"a-16","title":"cvs-details-[open]","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cv-sidebar-details-wrapper","selectorGuids":["1ad5af18-c008-2aab-a5bf-430b3c53bc9c"]},"value":"none"}},{"id":"a-16-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cv-sidebar-details-block","selectorGuids":["ffb99878-2924-1151-7e76-bb598762069f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cv-sidebar-details-wrapper","selectorGuids":["1ad5af18-c008-2aab-a5bf-430b3c53bc9c"]},"value":"block"}}]},{"actionItems":[{"id":"a-16-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".cv-sidebar-details-block","selectorGuids":["ffb99878-2924-1151-7e76-bb598762069f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697456726613},"a-20":{"id":"a-20","title":"cvs-details-[close]","actionItemGroups":[{"actionItems":[{"id":"a-20-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".cv-sidebar-details-block","selectorGuids":["ffb99878-2924-1151-7e76-bb598762069f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-20-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cv-sidebar-details-wrapper","selectorGuids":["1ad5af18-c008-2aab-a5bf-430b3c53bc9c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697456726613},"a-50":{"id":"a-50","title":"job-warn-hover in","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".job-desc-warn-wrap","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443348"]},"value":"none"}},{"id":"a-50-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".job-desc-warn-wrap","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443348"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-50-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".job-desc-warn-wrap","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443348"]},"value":"flex"}},{"id":"a-50-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".job-desc-warn-wrap","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443348"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704344343923},"a-51":{"id":"a-51","title":"job-warn-hover out","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".job-desc-warn-wrap","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443348"]},"value":0,"unit":""}},{"id":"a-51-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".job-desc-warn-wrap","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443348"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704344343923},"a-89":{"id":"a-89","title":"copy-hover in invitation schedular","actionItemGroups":[{"actionItems":[{"id":"a-89-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":"none"}},{"id":"a-89-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.copy","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","d5f9b086-8c8b-d31e-a39f-a50695a82c6a"]},"value":"block"}},{"id":"a-89-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-89-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":"flex"}},{"id":"a-89-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.copy","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","d5f9b086-8c8b-d31e-a39f-a50695a82c6a"]},"value":"block"}},{"id":"a-89-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm.copied","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","9252ac6e-77b5-8e17-c28a-254683bcd6bd"]},"value":"none"}},{"id":"a-89-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711116769518},"a-90":{"id":"a-90","title":"copy-hover out invitation schedular","actionItemGroups":[{"actionItems":[{"id":"a-90-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":0,"unit":""}},{"id":"a-90-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".div-block-1279","selectorGuids":["f3b9e718-5093-2bff-65a2-730e873c8f84"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1711116769518},"a-91":{"id":"a-91","title":"CLick Copied Invitation Link","actionItemGroups":[{"actionItems":[{"id":"a-91-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-sm.copy","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","d5f9b086-8c8b-d31e-a39f-a50695a82c6a"]},"value":"block"}},{"id":"a-91-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-sm.copied","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","9252ac6e-77b5-8e17-c28a-254683bcd6bd"]},"value":"none"}}]},{"actionItems":[{"id":"a-91-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-sm.copied","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","9252ac6e-77b5-8e17-c28a-254683bcd6bd"]},"value":"block"}},{"id":"a-91-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-sm.copy","selectorGuids":["2c8defbe-35b9-4599-ee14-45d94f9fe130","d5f9b086-8c8b-d31e-a39f-a50695a82c6a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711117027368},"a-102":{"id":"a-102","title":"DayoffList Hover in","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-102-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]},{"actionItems":[{"id":"a-102-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":1,"unit":""}},{"id":"a-102-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715600286589},"a-103":{"id":"a-103","title":"DayoffList Hover out","actionItemGroups":[{"actionItems":[{"id":"a-103-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-103-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715600286589},"a-104":{"id":"a-104","title":"Department Hover in","actionItemGroups":[{"actionItems":[{"id":"a-104-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-104-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]},{"actionItems":[{"id":"a-104-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":1,"unit":""}},{"id":"a-104-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715940670206},"a-105":{"id":"a-105","title":"Department Hover out","actionItemGroups":[{"actionItems":[{"id":"a-105-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":0,"unit":""}},{"id":"a-105-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icons.cursor-pointer","selectorGuids":["5c1ff90f-c25e-3e90-5136-413a42443347","8e4a5d52-1f4a-3e53-b493-ac8867e2388c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715940670206}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function JobDetails({
  as: _Component = _Builtin.Block,
  slotSidebar,
  slotTabs,
  slotFilters,
  onclickAddCandidates = {},
  slotTable,
  slotRefresh,
  slotPagination,
  isFetchingPillVisible = false,
  textStatus = "This is some text inside of a div block.",
  isTextStatusVisible = false,
  slotLoadingLottie,
  isEmptyTextVisible = false,
  isWarningVisible = false,
  isImportCandidates = true,
  slotBreadcrumb,
  isEditJob = true,
  onClickEditJob = {},
  slotShowFilterButton,
  isFilterVisible = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "job-details-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "job-details-header")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "job-details-header-block")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "jdet-main")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "slot_breadcrum")}
              tag="div"
            >
              {slotBreadcrumb ?? <Breadcrum />}
            </_Builtin.Block>
            {isEmptyTextVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "max-width-320")}
                tag="div"
              >
                {
                  "Job description is empty. Please add a job description to initiate the scoring process."
                }
              </_Builtin.Block>
            ) : null}
            {isFetchingPillVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "fetching-pill")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-410")}
                  tag="div"
                >
                  {slotLoadingLottie}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-sm", "text-kale-800")}
                  tag="div"
                >
                  {"Syncing Candidates"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "jdet-main-action-menu")}
            tag="div"
          >
            {isTextStatusVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "text-gray-500", "hide")}
                tag="div"
              >
                {textStatus}
              </_Builtin.Block>
            ) : null}
            <_Builtin.Block tag="div">
              {slotRefresh ?? <RefreshButton />}
            </_Builtin.Block>
            {isImportCandidates ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "bu", "clickable")}
                tag="div"
                {...onclickAddCandidates}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "rounded-icon", "grey-100")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "icon-block", "_30x30")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "svg-icon")}
                      value="%3Csvg%20width%3D%2217%22%20height%3D%2214%22%20viewBox%3D%220%200%2017%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.96171%203.46409C3.96171%203.90159%204.07108%204.30544%204.28983%204.67563C4.50858%205.04582%204.80305%205.34029%205.17325%205.55904C5.56027%205.77779%205.96411%205.88717%206.38478%205.88717C6.80546%205.88717%207.2093%205.77779%207.59632%205.55904C7.96652%205.34029%208.26099%205.04582%208.47974%204.67563C8.69849%204.30544%208.80786%203.90159%208.80786%203.46409C8.80786%203.02659%208.69849%202.62275%208.47974%202.25255C8.26099%201.88236%207.96652%201.58789%207.59632%201.36914C7.2093%201.15039%206.80546%201.04102%206.38478%201.04102C5.96411%201.04102%205.56027%201.15039%205.17325%201.36914C4.80305%201.58789%204.50858%201.88236%204.28983%202.25255C4.07108%202.62275%203.96171%203.02659%203.96171%203.46409ZM7.54584%208.71409H5.22373C4.19728%208.74775%203.33911%209.10111%202.64921%209.77419C1.94248%2010.4641%201.57228%2011.3223%201.53863%2012.3487H11.2309C11.1973%2011.3223%2010.8271%2010.4641%2010.1204%209.77419C9.43046%209.10111%208.57228%208.74775%207.54584%208.71409ZM6.38478%206.69486C5.79584%206.69486%205.25738%206.55183%204.7694%206.26577C4.28142%205.97972%203.88599%205.58428%203.5831%205.07948C3.29704%204.57467%203.15402%204.03621%203.15402%203.46409C3.15402%202.89198%203.29704%202.35352%203.5831%201.84871C3.88599%201.3439%204.28142%200.948467%204.7694%200.662409C5.25738%200.376352%205.79584%200.233323%206.38478%200.233323C6.97373%200.233323%207.51219%200.376352%208.00017%200.662409C8.48815%200.948467%208.88358%201.3439%209.18647%201.84871C9.47252%202.35352%209.61555%202.89198%209.61555%203.46409C9.61555%204.03621%209.47252%204.57467%209.18647%205.07948C8.88358%205.58428%208.48815%205.97972%208.00017%206.26577C7.51219%206.55183%206.97373%206.69486%206.38478%206.69486ZM5.22373%207.9064H7.54584C8.80786%207.94005%209.86796%208.37755%2010.7261%209.2189C11.5675%2010.0771%2012.005%2011.1372%2012.0386%2012.3992C12.0386%2012.6179%2011.9629%2012.7946%2011.8115%2012.9292C11.6769%2013.0807%2011.5002%2013.1564%2011.2814%2013.1564H1.48815C1.2694%2013.1564%201.09272%2013.0807%200.958101%2012.9292C0.806659%2012.7946%200.730938%2012.6179%200.730938%2012.3992C0.764592%2011.1372%201.20209%2010.0771%202.04344%209.2189C2.90161%208.37755%203.96171%207.94005%205.22373%207.9064ZM13.654%207.9064V5.88717H11.6348C11.3824%205.87034%2011.2478%205.73573%2011.2309%205.48332C11.2478%205.23092%2011.3824%205.0963%2011.6348%205.07948H13.654V3.06025C13.6708%202.80784%2013.8055%202.67323%2014.0579%202.6564C14.3103%202.67323%2014.4449%202.80784%2014.4617%203.06025V5.07948H16.4809C16.7333%205.0963%2016.868%205.23092%2016.8848%205.48332C16.868%205.73573%2016.7333%205.87034%2016.4809%205.88717H14.4617V7.9064C14.4449%208.1588%2014.3103%208.29342%2014.0579%208.31025C13.8055%208.29342%2013.6708%208.1588%2013.654%207.9064Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "fw-semibold")}
                  tag="div"
                >
                  {"Add Candidates"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isWarningVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "warning-job-wrap")}
                data-w-id="ba1546b6-69d3-cf1c-4ab5-1a9589db7541"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.64062%2019.6875C1.54688%2019.8438%201.5%2020%201.5%2020.1562C1.5625%2020.6875%201.84375%2020.9688%202.34375%2021H21.6562C22.1562%2020.9688%2022.4375%2020.6875%2022.5%2020.1562C22.5%2020%2022.4688%2019.8438%2022.4062%2019.6875L12.9844%203.5625C12.7344%203.1875%2012.4062%203%2012%203C11.5938%203%2011.2812%203.1875%2011.0625%203.5625L1.64062%2019.6875ZM0.328125%2018.9375L9.75%202.8125C10.2812%201.96875%2011.0312%201.53125%2012%201.5C12.9688%201.53125%2013.7188%201.96875%2014.25%202.8125L23.6719%2018.9375C23.8906%2019.3125%2024%2019.7188%2024%2020.1562C23.9688%2020.8125%2023.7344%2021.3594%2023.2969%2021.7969C22.8594%2022.2344%2022.3125%2022.4688%2021.6562%2022.5H2.34375C1.6875%2022.4688%201.14062%2022.2344%200.703125%2021.7969C0.265625%2021.3594%200.03125%2020.8125%200%2020.1562C0%2019.7188%200.109375%2019.3125%200.328125%2018.9375ZM12%207.5C12.4688%207.53125%2012.7188%207.78125%2012.75%208.25V14.25C12.7188%2014.7188%2012.4688%2014.9688%2012%2015C11.5312%2014.9688%2011.2812%2014.7188%2011.25%2014.25V8.25C11.2812%207.78125%2011.5312%207.53125%2012%207.5ZM10.875%2018C10.9375%2017.3125%2011.3125%2016.9375%2012%2016.875C12.6875%2016.9375%2013.0625%2017.3125%2013.125%2018C13.0625%2018.6875%2012.6875%2019.0625%2012%2019.125C11.3125%2019.0625%2010.9375%2018.6875%2010.875%2018Z%22%20fill%3D%22%23D93F4C%22%20style%3D%22fill%3A%23D93F4C%3Bfill%3Acolor(display-p3%200.8510%200.2471%200.2980)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "job-desc-warn-wrap",
                    "detals-jd"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-sm-2")}
                    tag="div"
                  >
                    {"Missing Job Description"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isEditJob ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "bu", "clickable")}
                tag="div"
                {...onClickEditJob}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "rounded-icon", "grey-100")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "icon-block", "_30x30")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "svg-icon")}
                      value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.8314%204.36719C14.6632%204.21574%2014.4697%204.14002%2014.2509%204.14002C14.0322%204.14002%2013.8386%204.21574%2013.6704%204.36719L13.0141%205.04868L14.4528%206.48738L15.1343%205.83113C15.2858%205.66286%2015.3615%205.46935%2015.3615%205.2506C15.3615%205.03185%2015.2858%204.83834%2015.1343%204.67007L14.8314%204.36719ZM8.11749%209.94531C8.01653%2010.0463%207.94922%2010.1725%207.91556%2010.3239L7.51172%2011.9898L9.17758%2011.6112C9.32903%2011.5607%209.45523%2011.485%209.55619%2011.384L13.8723%207.06791L12.4336%205.62921L8.11749%209.94531ZM13.1151%203.8119C13.4516%203.49219%2013.8302%203.33233%2014.2509%203.33233C14.6884%203.33233%2015.067%203.49219%2015.3867%203.8119L15.6896%204.11478C16.0093%204.45132%2016.1692%204.82993%2016.1692%205.2506C16.1692%205.6881%2016.0093%206.06671%2015.6896%206.38642L10.1367%2011.9645C9.91797%2012.1833%209.65715%2012.3263%209.35427%2012.3936L7.08263%2012.9237C6.93119%2012.9405%206.80499%2012.8984%206.70403%2012.7975C6.60306%2012.6965%206.561%2012.5787%206.57782%2012.4441L7.10787%2010.1472C7.17518%209.84435%207.31821%209.58353%207.53696%209.36478L13.1151%203.8119ZM5.36629%204.84675H8.59706C8.84946%204.86358%208.98407%204.9982%209.0009%205.2506C8.98407%205.503%208.84946%205.63762%208.59706%205.65445H5.36629C5.02975%205.67127%204.74369%205.78906%204.50811%206.00781C4.28936%206.24339%204.17157%206.52945%204.15475%206.86599V14.1352C4.17157%2014.4718%204.28936%2014.7578%204.50811%2014.9934C4.74369%2015.2121%205.02975%2015.3299%205.36629%2015.3468H12.6355C12.9721%2015.3299%2013.2581%2015.2121%2013.4937%2014.9934C13.7124%2014.7578%2013.8302%2014.4718%2013.8471%2014.1352V10.9044C13.8639%2010.652%2013.9985%2010.5174%2014.2509%2010.5006C14.5033%2010.5174%2014.6379%2010.652%2014.6547%2010.9044V14.1352C14.6379%2014.7073%2014.4444%2015.1869%2014.0742%2015.5739C13.6872%2015.9441%2013.2076%2016.1376%2012.6355%2016.1544H5.36629C4.79417%2016.1376%204.3146%2015.9441%203.92758%2015.5739C3.55739%2015.1869%203.36388%2014.7073%203.34705%2014.1352V6.86599C3.36388%206.29387%203.55739%205.8143%203.92758%205.42728C4.3146%205.05709%204.79417%204.86358%205.36629%204.84675Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "fw-semibold")}
                  tag="div"
                >
                  {"Edit Job"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "candidates-view-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-426")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "jdet-tabs")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1713")}
              tag="div"
            >
              {slotTabs}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1694")}
              tag="div"
            >
              {slotShowFilterButton ?? <ShowFilterButton />}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "candidates-view-main")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "cv-tab-content-wrapper")}
              tag="div"
            >
              {isFilterVisible ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "jdet-actions-bar")}
                  tag="div"
                >
                  {slotFilters ?? (
                    <>
                      <SelectActionBar />
                      <JobDetailsFilterBlock
                        isAllApplicants={true}
                        isTopApplicants={false}
                      />
                    </>
                  )}
                </_Builtin.Block>
              ) : null}
              <_Builtin.Block
                className={_utils.cx(_styles, "jdet-table")}
                tag="div"
              >
                {slotTable ?? (
                  <>
                    <ApplicantsTable />
                    <AllApplicantsTable />
                  </>
                )}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "job-page-nav-bar")}
                tag="div"
              >
                {slotPagination ?? <CandidatesListPagination />}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "candidates-view-sidebar", "hide")}
          tag="div"
        >
          {slotSidebar ?? (
            <_Builtin.Block
              className={_utils.cx(_styles, "candidates-view-sidebar-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "cv-sidebar-block")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cv-sidebar-header-block")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-1702")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-1701")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "fw-semibold")}
                      tag="div"
                    >
                      {"Dianne Russell"}
                    </_Builtin.Block>
                    <_Builtin.Block tag="div">
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icons")}
                        value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2218%22%20height%3D%2218%22%20rx%3D%222.45455%22%20fill%3D%22%23347FBC%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_10328_41000)%22%3E%0A%3Crect%20x%3D%221.38379%22%20y%3D%221.38477%22%20width%3D%2215.2308%22%20height%3D%2215.2308%22%20rx%3D%221.38462%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M15.5257%201.38477H2.46732C1.86897%201.38477%201.38281%201.87773%201.38281%202.48288V15.5174C1.38281%2016.1226%201.86897%2016.6155%202.46732%2016.6155H15.5257C16.124%2016.6155%2016.6136%2016.1226%2016.6136%2015.5174V2.48288C16.6136%201.87773%2016.124%201.38477%2015.5257%201.38477ZM5.98604%2014.4397H3.72862V7.1711H5.98944V14.4397H5.98604ZM4.85733%206.17838C4.13319%206.17838%203.54844%205.59023%203.54844%204.86948C3.54844%204.14874%204.13319%203.56059%204.85733%203.56059C5.57807%203.56059%206.16623%204.14874%206.16623%204.86948C6.16623%205.59363%205.58147%206.17838%204.85733%206.17838ZM14.448%2014.4397H12.1905V10.904C12.1905%2010.0609%2012.1735%208.97635%2011.0176%208.97635C9.84133%208.97635%209.66114%209.89428%209.66114%2010.8428V14.4397H7.40373V7.1711H9.56935V8.16382H9.59995C9.90252%207.59266%2010.6403%206.99091%2011.7384%206.99091C14.023%206.99091%2014.448%208.49699%2014.448%2010.4552V14.4397Z%22%20fill%3D%22%23347FBC%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_10328_41000%22%3E%0A%3Crect%20x%3D%221.38379%22%20y%3D%221.38477%22%20width%3D%2215.2308%22%20height%3D%2215.2308%22%20rx%3D%221.38462%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cvs-header-nav-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cvs-header-nav-icon",
                        "clickable"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "svg-icon")}
                        value="%3Csvg%20width%3D%227%22%20height%3D%2213%22%20viewbox%3D%220%200%207%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.242188%206.41406C0.169271%206.30469%200.169271%206.19531%200.242188%206.08594L6.14844%200.179688C6.25781%200.106771%206.36719%200.106771%206.47656%200.179688C6.54948%200.289062%206.54948%200.398438%206.47656%200.507812L0.707031%206.25L6.47656%2011.9922C6.54948%2012.1016%206.54948%2012.2109%206.47656%2012.3203C6.36719%2012.3932%206.25781%2012.3932%206.14844%2012.3203L0.242188%206.41406Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cvs-header-nav-icon",
                        "clickable"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "svg-icon")}
                        value="%3Csvg%20width%3D%227%22%20height%3D%2213%22%20viewbox%3D%220%200%207%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.75781%206.58594C6.83073%206.69531%206.83073%206.80469%206.75781%206.91406L0.851562%2012.8203C0.742188%2012.8932%200.632812%2012.8932%200.523438%2012.8203C0.450521%2012.7109%200.450521%2012.6016%200.523438%2012.4922L6.29297%206.75L0.523438%201.00781C0.450521%200.898438%200.450521%200.789062%200.523438%200.679688C0.632812%200.606771%200.742188%200.606771%200.851562%200.679688L6.75781%206.58594Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "cvs-header-copy-block",
                      "clickable"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Copy Profile"}</_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-header-copy-icon")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "svg-icon")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3%207.5C3%207.22386%202.77614%207%202.5%207H1V1H7V2.5C7%202.77614%207.22386%203%207.5%203C7.77614%203%208%202.77614%208%202.5V1C8%200.447715%207.55228%200%207%200H1C0.447715%200%200%200.447715%200%201V7C0%207.55228%200.447715%208%201%208H2.5C2.77614%208%203%207.77614%203%207.5ZM12%205C12%204.44772%2011.5523%204%2011%204H5C4.44772%204%204%204.44772%204%205V11C4%2011.5523%204.44772%2012%205%2012H11C11.5523%2012%2012%2011.5523%2012%2011V5ZM5%2011V5H11V11H5Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%20%20%3Cmask%20id%3D%22mask0_3341_29946%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3%207.5C3%207.22386%202.77614%207%202.5%207H1V1H7V2.5C7%202.77614%207.22386%203%207.5%203C7.77614%203%208%202.77614%208%202.5V1C8%200.447715%207.55228%200%207%200H1C0.447715%200%200%200.447715%200%201V7C0%207.55228%200.447715%208%201%208H2.5C2.77614%208%203%207.77614%203%207.5ZM12%205C12%204.44772%2011.5523%204%2011%204H5C4.44772%204%204%204.44772%204%205V11C4%2011.5523%204.44772%2012%205%2012H11C11.5523%2012%2012%2011.5523%2012%2011V5ZM5%2011V5H11V11H5Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3C%2Fmask%3E%0A%20%20%3Cg%20mask%3D%22url(%23mask0_3341_29946)%22%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "cvs-header-close-button",
                      "clickable"
                    )}
                    data-w-id="8e250e4a-68d7-8f39-2620-4fb80934db07"
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "svg-icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%20%20%3Cmask%20id%3D%22mask0_3498_23410%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%222%22%20y%3D%222%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3C%2Fmask%3E%0A%20%20%3Cg%20mask%3D%22url(%23mask0_3498_23410)%22%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "cv-sidebar-intro-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cvs-intro-profile-block")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-intro-profile-image")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-intro-profile-info")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-347")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "fw-semibold")}
                          tag="div"
                        >
                          {"Dianne Russell"}
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "svg-icon")}
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2214%22%20viewbox%3D%220%200%2012%2014%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.1429%201H0.854464C0.383036%201%200%201.3884%200%201.86519V12.1349C0%2012.6117%200.383036%2013.0001%200.854464%2013.0001H11.1429C11.6143%2013.0001%2012%2012.6117%2012%2012.1349V1.86519C12%201.3884%2011.6143%201%2011.1429%201ZM3.62679%2011.2858H1.84821V5.55897H3.62946V11.2858H3.62679ZM2.7375%204.77682C2.16696%204.77682%201.70625%204.31342%201.70625%203.74556C1.70625%203.1777%202.16696%202.7143%202.7375%202.7143C3.30536%202.7143%203.76875%203.1777%203.76875%203.74556C3.76875%204.3161%203.30804%204.77682%202.7375%204.77682ZM10.2937%2011.2858H8.51518V8.50007C8.51518%207.83578%208.50179%206.98131%207.59107%206.98131C6.66429%206.98131%206.52232%207.70453%206.52232%208.45186V11.2858H4.74375V5.55897H6.45V6.34112H6.47411C6.7125%205.89112%207.29375%205.41701%208.15893%205.41701C9.95893%205.41701%2010.2937%206.60362%2010.2937%208.1465V11.2858Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-gray-600")}
                        tag="div"
                      >
                        {"dianerussel@example.com"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-gray-600")}
                        tag="div"
                      >
                        {"(704) 555-0127"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cvs-intro-overview-block")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-intro-header")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-block")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "svg-icon")}
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cg%20clip-path%3D%22url(%23clip0_3341_29934)%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12.667%206.00008L13.5003%204.16675L15.3337%203.33341L13.5003%202.50008L12.667%200.666748L11.8337%202.50008L10.0003%203.33341L11.8337%204.16675L12.667%206.00008ZM7.66699%206.33342L6.00033%202.66675L4.33366%206.33342L0.666992%208.00008L4.33366%209.66675L6.00033%2013.3334L7.66699%209.66675L11.3337%208.00008L7.66699%206.33342ZM12.667%2010.0001L11.8337%2011.8334L10.0003%2012.6667L11.8337%2013.5001L12.667%2015.3334L13.5003%2013.5001L15.3337%2012.6667L13.5003%2011.8334L12.667%2010.0001Z%22%20fill%3D%22%2317494D%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3Cclippath%20id%3D%22clip0_3341_29934%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%3C%2Fclippath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-kale-800")}
                        tag="div"
                      >
                        {"Overview"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-kale-600")}
                    >
                      {
                        "Eike led software as a Senior System Software Engineer at NVIDIA Corporation, specializing in autonomous vehicles."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <SidebarScreening />
                <_Builtin.Block
                  className={_utils.cx(_styles, "cv-sidebar-info-wrapper")}
                  tag="div"
                >
                  <_Builtin.NavbarWrapper
                    className={_utils.cx(_styles, "cvs-info-navbar")}
                    tag="div"
                    config={{
                      animation: "default",
                      collapse: "medium",
                      docHeight: false,
                      duration: 400,
                      easing: "ease",
                      easing2: "ease",
                      noScroll: false,
                    }}
                  >
                    <_Builtin.NavbarMenu
                      className={_utils.cx(_styles, "cvs-info-nav-menu")}
                      tag="nav"
                      role="navigation"
                    >
                      <_Builtin.NavbarLink
                        className={_utils.cx(_styles, "cvs-nav-link")}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Score"}
                      </_Builtin.NavbarLink>
                      <_Builtin.NavbarLink
                        className={_utils.cx(_styles, "cvs-nav-link")}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Education"}
                      </_Builtin.NavbarLink>
                      <_Builtin.NavbarLink
                        className={_utils.cx(_styles, "cvs-nav-link")}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Experience"}
                      </_Builtin.NavbarLink>
                      <_Builtin.NavbarLink
                        className={_utils.cx(_styles, "cvs-nav-link")}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Skills"}
                      </_Builtin.NavbarLink>
                    </_Builtin.NavbarMenu>
                    <_Builtin.NavbarButton
                      className={_utils.cx(_styles, "hide")}
                      tag="div"
                    >
                      <_Builtin.Icon
                        widget={{
                          type: "icon",
                          icon: "nav-menu",
                        }}
                      />
                    </_Builtin.NavbarButton>
                  </_Builtin.NavbarWrapper>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cvs-info-content-main")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-info-block")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "fw-semibold")}
                        tag="div"
                      >
                        {"Interview Score"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cvs-score-block")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cvs-score-overview-block"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-count-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              <_Builtin.HtmlEmbed
                                className={_utils.cx(_styles, "svg-icon")}
                                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2219%22%20viewbox%3D%220%200%2018%2019%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M9.00067%2012.4245C8.41848%2012.4245%207.86015%2012.1933%207.44848%2011.7816C7.03682%2011.3699%206.80554%2010.8116%206.80554%2010.2294C6.80554%209.40991%207.25189%208.69284%207.90311%208.31967L15.008%204.20748L10.9616%2011.2172C10.5958%2011.9343%209.85676%2012.4245%209.00067%2012.4245ZM9.00067%202.91235C10.3251%202.91235%2011.5616%203.27821%2012.6373%203.87821L11.1007%204.76357C10.4641%204.51479%209.73237%204.37577%209.00067%204.37577C7.44818%204.37577%205.95928%204.99249%204.86151%206.09027C3.76373%207.18804%203.14701%208.67694%203.14701%2010.2294C3.14701%2011.8465%203.79823%2013.3099%204.8592%2014.3636H4.86652C5.15189%2014.6489%205.15189%2015.1099%204.86652%2015.3953C4.58115%2015.6806%204.11286%2015.6806%203.8275%2015.4026C2.50311%2014.0782%201.68359%2012.2489%201.68359%2010.2294C1.68359%208.28882%202.4545%206.42769%203.82671%205.05547C5.19893%203.68326%207.06006%202.91235%209.00067%202.91235ZM16.3177%2010.2294C16.3177%2012.2489%2015.4982%2014.0782%2014.1738%2015.4026C13.8885%2015.6806%2013.4275%2015.6806%2013.1421%2015.3953C12.8568%2015.1099%2012.8568%2014.6489%2013.1421%2014.3636C14.2031%2013.3026%2014.8543%2011.8465%2014.8543%2010.2294C14.8543%209.49772%2014.7153%208.76601%2014.4592%208.10748L15.3446%206.57089C15.9519%207.66845%2016.3177%208.89772%2016.3177%2010.2294Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {"78/100"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-info-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "ps-analysis-text")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "fw-semibold",
                                  "text-yellow-700"
                                )}
                                tag="div"
                              >
                                {"Average"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-btn",
                                "clickable"
                              )}
                              data-w-id="8e250e4a-68d7-8f39-2620-4fb80934db3a"
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "text-blue-600")}
                                tag="div"
                              >
                                {"Detailed feedback"}
                              </_Builtin.Block>
                              <_Builtin.Block tag="div">
                                <_Builtin.HtmlEmbed
                                  className={_utils.cx(_styles, "svg-icon")}
                                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2213%22%20viewbox%3D%220%200%2012%2013%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.625%202.7478C11.8091%202.7478%2011.9622%202.88046%2011.994%203.0554L12%203.1228V6.1228C12%206.32991%2011.8321%206.4978%2011.625%206.4978C11.4409%206.4978%2011.2878%206.36515%2011.256%206.19021L11.25%206.1228V4.0273L7.39017%207.88797C7.25999%208.01814%207.05792%208.03261%206.91177%207.93136L6.85983%207.88797L4.875%205.90305L0.640165%2010.138C0.50999%2010.2681%200.307922%2010.2826%200.161771%2010.1814L0.109835%2010.138C-0.0203398%2010.0078%20-0.0348037%209.80572%200.0664434%209.65957L0.109835%209.60764L4.60984%205.10764C4.74001%204.97746%204.94208%204.963%205.08823%205.06425L5.14016%205.10764L7.125%207.09255L10.719%203.4978H8.625C8.4409%203.4978%208.28779%203.36515%208.25604%203.19021L8.25%203.1228C8.25%202.93871%208.38266%202.7856%208.55759%202.75384L8.625%202.7478H11.625Z%22%20fill%3D%22%231F73B7%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cvs-score-details-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Language quality"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "cvs-score-detail-icon"
                                )}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"50%"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Cultural fit"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "cvs-score-detail-icon"
                                )}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"50%"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Skill based assessment"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "cvs-score-detail-icon"
                                )}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"50%"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Personality fit"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "cvs-score-detail-icon"
                                )}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"50%"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-info-block")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "fw-semibold")}
                        tag="div"
                      >
                        {"Resume Score"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cvs-score-block")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cvs-score-overview-block"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-res-score-block"
                            )}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-info-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "ps-analysis-text")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "fw-semibold",
                                  "text-yellow-700"
                                )}
                                tag="div"
                              >
                                {"Excellent"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-download-res-btn",
                                "clickable"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                <_Builtin.HtmlEmbed
                                  className={_utils.cx(_styles, "svg-icon")}
                                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2213%22%20viewbox%3D%220%200%2012%2013%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.5%208.19509L9.04645%205.64864C9.24171%205.45338%209.55829%205.45338%209.75355%205.64864C9.94882%205.84391%209.94882%206.16049%209.75355%206.35575L6.65355%209.45575C6.25829%209.85101%205.64171%209.85101%205.24645%209.45575L2.14645%206.35575C1.95118%206.16049%201.95118%205.84391%202.14645%205.64864C2.34171%205.45338%202.65829%205.45338%202.85355%205.64864L5.5%208.29509V1.0022C5.5%200.726055%205.72386%200.502197%206%200.502197C6.27614%200.502197%206.5%200.726055%206.5%201.0022V8.19509ZM1.5%2012.5022C1.22386%2012.5022%201%2012.2783%201%2012.0022C1%2011.7261%201.22386%2011.5022%201.5%2011.5022H10.5C10.7761%2011.5022%2011%2011.7261%2011%2012.0022C11%2012.2783%2010.7761%2012.5022%2010.5%2012.5022H1.5Z%22%20fill%3D%22%231F73B7%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(_styles, "text-blue-600")}
                                tag="div"
                              >
                                {"Download Resume"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-view-res-btn",
                                "clickable"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                <_Builtin.HtmlEmbed
                                  className={_utils.cx(_styles, "svg-icon")}
                                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2213%22%20viewbox%3D%220%200%2012%2013%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.99986%2010.5022C3.49288%2010.5022%201.5331%209.05872%200.209412%207.16773C-0.0709987%206.76464%20-0.0709987%206.23204%200.208768%205.84759C1.51713%203.95774%203.48959%202.5022%205.99986%202.5022C8.50685%202.5022%2010.4666%203.94567%2011.7903%205.83666C12.0695%206.23794%2012.0707%206.76756%2011.7881%207.16095C10.4797%209.04879%208.5083%2010.5022%205.99986%2010.5022ZM10.9688%206.58759C11.009%206.53204%2011.009%206.46464%2010.9702%206.40893C9.81544%204.7592%208.10883%203.5022%205.99986%203.5022C3.88855%203.5022%202.17163%204.76916%201.02423%206.42628C0.990728%206.47235%200.990728%206.53976%201.02948%206.59547C2.18429%208.2452%203.89089%209.5022%205.99986%209.5022C8.11118%209.5022%209.8281%208.23523%2010.9688%206.58759ZM5.99986%208.5022C4.8953%208.5022%203.99986%207.60677%203.99986%206.5022C3.99986%205.39763%204.8953%204.5022%205.99986%204.5022C7.10443%204.5022%207.99986%205.39763%207.99986%206.5022C7.99986%207.60677%207.10443%208.5022%205.99986%208.5022ZM5.99986%207.5022C6.55215%207.5022%206.99986%207.05448%206.99986%206.5022C6.99986%205.94991%206.55215%205.5022%205.99986%205.5022C5.44758%205.5022%204.99986%205.94991%204.99986%206.5022C4.99986%207.05448%205.44758%207.5022%205.99986%207.5022Z%22%20fill%3D%22%231F73B7%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(_styles, "text-blue-600")}
                                tag="div"
                              >
                                {"View Resume"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cvs-score-details-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Summary"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"Good"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Experience"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"Less"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Education"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"More"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Projects"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"Not present"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Certifications"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"Less"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-score-details-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"Skills"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "cvs-score-detail-count-block"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "fw-semibold")}
                                tag="div"
                              >
                                {"0"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-info-block")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "fw-semibold")}
                        tag="div"
                      >
                        {"Education"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cvs-education-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-education-block")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "cvs-school-logo")}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-school-info-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {"University Of Waterloo"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "fw-semibold",
                                "text-gray-500"
                              )}
                              tag="div"
                            >
                              {"May 2015"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-education-block")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "cvs-school-logo")}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-school-info-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {"Turner Fenton Secondary Scholl"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "fw-semibold",
                                "text-gray-500"
                              )}
                              tag="div"
                            >
                              {"May 2006 - May 2010"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-education-block")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "cvs-school-logo")}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-school-info-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {
                                "Thompson Rivers UniversityCompany NameDateLocation"
                              }
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-info-block")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "fw-semibold")}
                        tag="div"
                      >
                        {"Experiences"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "cvs-experiences-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cvs-experiences-block"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "cvs-company-logo")}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-company-info-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {"Senior Software Engineer"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {"Google"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "fw-semibold",
                                "text-gray-500"
                              )}
                              tag="div"
                            >
                              {"May 2017"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "fw-semibold",
                                "text-gray-500"
                              )}
                              tag="div"
                            >
                              {"New York, New York, United States"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cvs-experiences-block"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "cvs-company-logo")}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-company-info-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {"Chief Technology Officer & Co-Founder"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {"Kira Talent"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "fw-semibold",
                                "text-gray-500"
                              )}
                              tag="div"
                            >
                              {"Apr 2012 - May 2016"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "fw-semibold",
                                "text-gray-500"
                              )}
                              tag="div"
                            >
                              {"Lotoronto, Ontario, Canada"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cvs-experiences-block"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "cvs-company-logo")}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "cvs-company-info-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {"Software Engineering Intern"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "fw-semibold")}
                              tag="div"
                            >
                              {"Microsoft"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "fw-semibold",
                                "text-gray-500"
                              )}
                              tag="div"
                            >
                              {"Jan 2012 - Apr 2012"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "fw-semibold",
                                "text-gray-500"
                              )}
                              tag="div"
                            >
                              {"San Fransisco"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-info-block")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "fw-semibold")}
                        tag="div"
                      >
                        {"Skills"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cvs-skills-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-skills-block")}
                          tag="div"
                        >
                          {"Entry to Senior-Level Professionals"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-skills-block")}
                          tag="div"
                        >
                          {"Business HR"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-skills-block")}
                          tag="div"
                        >
                          {"Business Operations"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-skills-block")}
                          tag="div"
                        >
                          {"Business Management"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-skills-block")}
                          tag="div"
                        >
                          {"Customer Service"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-skills-block")}
                          tag="div"
                        >
                          {"PR/Communications"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-skills-block")}
                          tag="div"
                        >
                          {"Healthcare"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "cvs-skills-block")}
                          tag="div"
                        >
                          {"Education"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "cv-sidebar-details-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cv-sidebar-details-block")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cvs-details-header")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "fw-semibold")}
                      tag="div"
                    >
                      {"Interview Detailed feedback"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cvs-details-close-btn",
                        "clickable"
                      )}
                      data-w-id="8e250e4a-68d7-8f39-2620-4fb80934dbea"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "svg-icon")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%20%20%3Cmask%20id%3D%22mask0_3498_21624%22%20style%3D%22mask-type%3Aluminance%22%20maskunits%3D%22userSpaceOnUse%22%20x%3D%222%22%20y%3D%222%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3C%2Fmask%3E%0A%20%20%3Cg%20mask%3D%22url(%23mask0_3498_21624)%22%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cvs-details-main")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cvs-intro-profile-block")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "cvs-intro-profile-image"
                        )}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cvs-intro-profile-info")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "div-block-347")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "fw-semibold")}
                            tag="div"
                          >
                            {"Dianne Russell"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "svg-icon")}
                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2214%22%20viewbox%3D%220%200%2012%2014%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.1429%201H0.854464C0.383036%201%200%201.3884%200%201.86519V12.1349C0%2012.6117%200.383036%2013.0001%200.854464%2013.0001H11.1429C11.6143%2013.0001%2012%2012.6117%2012%2012.1349V1.86519C12%201.3884%2011.6143%201%2011.1429%201ZM3.62679%2011.2858H1.84821V5.55897H3.62946V11.2858H3.62679ZM2.7375%204.77682C2.16696%204.77682%201.70625%204.31342%201.70625%203.74556C1.70625%203.1777%202.16696%202.7143%202.7375%202.7143C3.30536%202.7143%203.76875%203.1777%203.76875%203.74556C3.76875%204.3161%203.30804%204.77682%202.7375%204.77682ZM10.2937%2011.2858H8.51518V8.50007C8.51518%207.83578%208.50179%206.98131%207.59107%206.98131C6.66429%206.98131%206.52232%207.70453%206.52232%208.45186V11.2858H4.74375V5.55897H6.45V6.34112H6.47411C6.7125%205.89112%207.29375%205.41701%208.15893%205.41701C9.95893%205.41701%2010.2937%206.60362%2010.2937%208.1465V11.2858Z%22%20fill%3D%22%23337FBD%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-gray-600")}
                          tag="div"
                        >
                          {"dianerussel@example.com"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-gray-600")}
                          tag="div"
                        >
                          {"(704) 555-0127"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block tag="div" />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-353")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "fw-semibold",
                          "text-grey-600"
                        )}
                        tag="div"
                      >
                        {"Transcript"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-354")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
