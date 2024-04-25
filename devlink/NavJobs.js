"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavJobs.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1504":{"id":"e-1504","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-558","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1505"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776697393},"e-1505":{"id":"e-1505","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-559","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1504"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776697395},"e-1506":{"id":"e-1506","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-560","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1507"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776842585},"e-1507":{"id":"e-1507","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-561","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1506"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776842585},"e-1508":{"id":"e-1508","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-562","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1509"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704777049435},"e-1509":{"id":"e-1509","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-563","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1508"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704777049435},"e-1510":{"id":"e-1510","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-564","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1511"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704779879412},"e-1511":{"id":"e-1511","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-565","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1510"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704779879412},"e-1522":{"id":"e-1522","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-571","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1523"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e3105b71-3cb7-aa56-0a17-4a6bc2b3c51f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e3105b71-3cb7-aa56-0a17-4a6bc2b3c51f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705732365348},"e-1523":{"id":"e-1523","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-572","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1522"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e3105b71-3cb7-aa56-0a17-4a6bc2b3c51f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e3105b71-3cb7-aa56-0a17-4a6bc2b3c51f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705732365348},"e-1524":{"id":"e-1524","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-573","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1525"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"72e1dd1e-9eed-4875-e38b-c426d4251d31","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"72e1dd1e-9eed-4875-e38b-c426d4251d31","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705732596007},"e-1525":{"id":"e-1525","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-574","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1524"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"72e1dd1e-9eed-4875-e38b-c426d4251d31","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"72e1dd1e-9eed-4875-e38b-c426d4251d31","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705732596007},"e-1540":{"id":"e-1540","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-581","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1541"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"831c9783-a7f5-44f5-8884-8b7d64ee13aa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"831c9783-a7f5-44f5-8884-8b7d64ee13aa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707387189373},"e-1541":{"id":"e-1541","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-582","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1540"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"831c9783-a7f5-44f5-8884-8b7d64ee13aa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"831c9783-a7f5-44f5-8884-8b7d64ee13aa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707387189373},"e-1542":{"id":"e-1542","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-583","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1543"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"32cd43bb-7884-8845-68c3-cf1e5cf0b591","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"32cd43bb-7884-8845-68c3-cf1e5cf0b591","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707734038389},"e-1543":{"id":"e-1543","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-584","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1542"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"32cd43bb-7884-8845-68c3-cf1e5cf0b591","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"32cd43bb-7884-8845-68c3-cf1e5cf0b591","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707734038389},"e-1544":{"id":"e-1544","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-585","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1545"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a9572d1-1729-0084-906c-b0b97ffd3547","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a9572d1-1729-0084-906c-b0b97ffd3547","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708409254187},"e-1545":{"id":"e-1545","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-586","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1544"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a9572d1-1729-0084-906c-b0b97ffd3547","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a9572d1-1729-0084-906c-b0b97ffd3547","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708409254187},"e-1548":{"id":"e-1548","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-589","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1549"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710774247328},"e-1549":{"id":"e-1549","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-590","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1548"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"efa31c44-0d18-ce6e-2b02-4f94c6fc743b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710774247328},"e-1550":{"id":"e-1550","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-591","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1551"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690b1747-cbac-2c08-0572-09aeef512263","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690b1747-cbac-2c08-0572-09aeef512263","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712156852464},"e-1551":{"id":"e-1551","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-592","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1550"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690b1747-cbac-2c08-0572-09aeef512263","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690b1747-cbac-2c08-0572-09aeef512263","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712156852464}},"actionLists":{"a-558":{"id":"a-558","title":"Nav Icon Hover In","actionItemGroups":[{"actionItems":[{"id":"a-558-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-558-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-558-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-558-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-559":{"id":"a-559","title":"Nav Icon Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-559-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-559-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-560":{"id":"a-560","title":"Nav Icon Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-560-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-560-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-560-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-560-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-561":{"id":"a-561","title":"Nav Icon Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-561-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-561-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-562":{"id":"a-562","title":"Nav Icon Hover In 3","actionItemGroups":[{"actionItems":[{"id":"a-562-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-562-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-562-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-562-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-563":{"id":"a-563","title":"Nav Icon Hover Out 3","actionItemGroups":[{"actionItems":[{"id":"a-563-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-563-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-564":{"id":"a-564","title":"Nav Icon Hover In 4","actionItemGroups":[{"actionItems":[{"id":"a-564-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-564-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-564-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-564-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-565":{"id":"a-565","title":"Nav Icon Hover Out 4","actionItemGroups":[{"actionItems":[{"id":"a-565-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-565-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-571":{"id":"a-571","title":"Nav Icon Hover In 5","actionItemGroups":[{"actionItems":[{"id":"a-571-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-571-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-571-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-571-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-572":{"id":"a-572","title":"Nav Icon Hover Out 5","actionItemGroups":[{"actionItems":[{"id":"a-572-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-572-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-573":{"id":"a-573","title":"Nav Icon Hover In 6","actionItemGroups":[{"actionItems":[{"id":"a-573-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-573-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-573-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-573-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-574":{"id":"a-574","title":"Nav Icon Hover Out 6","actionItemGroups":[{"actionItems":[{"id":"a-574-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-574-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-581":{"id":"a-581","title":"Nav Icon Hover In 7","actionItemGroups":[{"actionItems":[{"id":"a-581-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-581-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-581-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-581-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-582":{"id":"a-582","title":"Nav Icon Hover Out 7","actionItemGroups":[{"actionItems":[{"id":"a-582-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-582-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-583":{"id":"a-583","title":"Nav Icon Hover In 8","actionItemGroups":[{"actionItems":[{"id":"a-583-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover.schedule-copy","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93","cc7002db-ac3e-0ca3-8049-7956b6949879"]},"value":"none"}},{"id":"a-583-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover.schedule-copy","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93","cc7002db-ac3e-0ca3-8049-7956b6949879"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-583-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover.schedule-copy","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93","cc7002db-ac3e-0ca3-8049-7956b6949879"]},"value":"flex"}},{"id":"a-583-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover.schedule-copy","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93","cc7002db-ac3e-0ca3-8049-7956b6949879"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-584":{"id":"a-584","title":"Nav Icon Hover Out 8","actionItemGroups":[{"actionItems":[{"id":"a-584-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-584-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-585":{"id":"a-585","title":"Nav Icon Hover In 9","actionItemGroups":[{"actionItems":[{"id":"a-585-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-585-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-585-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-585-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-586":{"id":"a-586","title":"Nav Icon Hover Out 9","actionItemGroups":[{"actionItems":[{"id":"a-586-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-586-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-589":{"id":"a-589","title":"Nav Icon Hover In 10","actionItemGroups":[{"actionItems":[{"id":"a-589-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-589-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-589-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-589-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-590":{"id":"a-590","title":"Nav Icon Hover Out 10","actionItemGroups":[{"actionItems":[{"id":"a-590-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-590-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-591":{"id":"a-591","title":"Nav Icon Hover In 11","actionItemGroups":[{"actionItems":[{"id":"a-591-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-591-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-591-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-591-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-592":{"id":"a-592","title":"Nav Icon Hover Out 11","actionItemGroups":[{"actionItems":[{"id":"a-592-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-592-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavJobs({
  as: _Component = _Builtin.Block,
  isActive = true,
  onClickNav = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "nav-bar-icon")}
      data-w-id="2e895115-0d8d-0d09-9391-23dba15f2db0"
      tag="div"
      {...onClickNav}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons", "relative-1")}
        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.40002%204.5V6.3H15.6V4.5C15.575%204.125%2015.375%203.925%2015%203.9H9.00002C8.62502%203.925%208.42502%204.125%208.40002%204.5ZM7.20002%206.3V4.5C7.22502%204%207.40002%203.575%207.72502%203.225C8.07502%202.9%208.50002%202.725%209.00002%202.7H15C15.5%202.725%2015.925%202.9%2016.275%203.225C16.6%203.575%2016.775%204%2016.8%204.5V6.3H19.2C19.875%206.325%2020.4375%206.5625%2020.8875%207.0125C21.3375%207.4625%2021.575%208.025%2021.6%208.7V18.3C21.575%2018.975%2021.3375%2019.5375%2020.8875%2019.9875C20.4375%2020.4375%2019.875%2020.675%2019.2%2020.7H4.80002C4.12502%2020.675%203.56252%2020.4375%203.11252%2019.9875C2.66252%2019.5375%202.42502%2018.975%202.40002%2018.3V8.7C2.42502%208.025%202.66252%207.4625%203.11252%207.0125C3.56252%206.5625%204.12502%206.325%204.80002%206.3H7.20002ZM16.2%207.5H7.80002H4.80002C4.45002%207.5%204.16252%207.6125%203.93752%207.8375C3.71252%208.0625%203.60002%208.35%203.60002%208.7V12.3H9.00002H10.2H13.8H15H20.4V8.7C20.4%208.35%2020.2875%208.0625%2020.0625%207.8375C19.8375%207.6125%2019.55%207.5%2019.2%207.5H16.2ZM20.4%2013.5H15V15.3C15%2015.65%2014.8875%2015.9375%2014.6625%2016.1625C14.4375%2016.3875%2014.15%2016.5%2013.8%2016.5H10.2C9.85002%2016.5%209.56252%2016.3875%209.33752%2016.1625C9.11252%2015.9375%209.00002%2015.65%209.00002%2015.3V13.5H3.60002V18.3C3.60002%2018.65%203.71252%2018.9375%203.93752%2019.1625C4.16252%2019.3875%204.45002%2019.5%204.80002%2019.5H19.2C19.55%2019.5%2019.8375%2019.3875%2020.0625%2019.1625C20.2875%2018.9375%2020.4%2018.65%2020.4%2018.3V13.5ZM10.2%2013.5V15.3H13.8V13.5H10.2Z%22%20fill%3D%22%232F3941%22%20style%3D%22fill%3A%232F3941%3Bfill%3Acolor(display-p3%200.1843%200.2235%200.2549)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-bar-icon-active")}
          tag="div"
        />
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-bar-icon-hover")}
        tag="div"
      >
        <_Builtin.Block tag="div">{"Jobs"}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
