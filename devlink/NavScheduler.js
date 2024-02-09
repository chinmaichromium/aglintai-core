import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavScheduler.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1504":{"id":"e-1504","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-558","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1505"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776697393},"e-1505":{"id":"e-1505","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-559","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1504"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2e895115-0d8d-0d09-9391-23dba15f2db0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776697395},"e-1506":{"id":"e-1506","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-560","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1507"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776842585},"e-1507":{"id":"e-1507","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-561","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1506"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a329651-0370-279d-0141-b830868d2807","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704776842585},"e-1508":{"id":"e-1508","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-562","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1509"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704777049435},"e-1509":{"id":"e-1509","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-563","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1508"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d5a756d2-4880-7758-86a6-463fc555b724","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704777049435},"e-1510":{"id":"e-1510","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-564","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1511"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704779879412},"e-1511":{"id":"e-1511","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-565","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1510"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"772edd58-ac64-2026-b437-f8ffbe1670d0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1704779879412},"e-1522":{"id":"e-1522","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-571","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1523"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e3105b71-3cb7-aa56-0a17-4a6bc2b3c51f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e3105b71-3cb7-aa56-0a17-4a6bc2b3c51f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705732365348},"e-1523":{"id":"e-1523","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-572","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1522"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e3105b71-3cb7-aa56-0a17-4a6bc2b3c51f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e3105b71-3cb7-aa56-0a17-4a6bc2b3c51f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705732365348},"e-1524":{"id":"e-1524","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-573","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1525"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"72e1dd1e-9eed-4875-e38b-c426d4251d31","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"72e1dd1e-9eed-4875-e38b-c426d4251d31","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705732596007},"e-1525":{"id":"e-1525","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-574","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1524"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"72e1dd1e-9eed-4875-e38b-c426d4251d31","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"72e1dd1e-9eed-4875-e38b-c426d4251d31","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705732596007},"e-1540":{"id":"e-1540","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-581","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1541"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"831c9783-a7f5-44f5-8884-8b7d64ee13aa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707387189373},"e-1541":{"id":"e-1541","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-582","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1540"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"831c9783-a7f5-44f5-8884-8b7d64ee13aa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707387189373}},"actionLists":{"a-558":{"id":"a-558","title":"Nav Icon Hover In","actionItemGroups":[{"actionItems":[{"id":"a-558-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-558-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-558-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-558-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-559":{"id":"a-559","title":"Nav Icon Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-559-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-559-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-560":{"id":"a-560","title":"Nav Icon Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-560-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-560-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-560-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-560-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-561":{"id":"a-561","title":"Nav Icon Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-561-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-561-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-562":{"id":"a-562","title":"Nav Icon Hover In 3","actionItemGroups":[{"actionItems":[{"id":"a-562-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-562-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-562-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-562-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-563":{"id":"a-563","title":"Nav Icon Hover Out 3","actionItemGroups":[{"actionItems":[{"id":"a-563-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-563-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-564":{"id":"a-564","title":"Nav Icon Hover In 4","actionItemGroups":[{"actionItems":[{"id":"a-564-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-564-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-564-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-564-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-565":{"id":"a-565","title":"Nav Icon Hover Out 4","actionItemGroups":[{"actionItems":[{"id":"a-565-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-565-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-571":{"id":"a-571","title":"Nav Icon Hover In 5","actionItemGroups":[{"actionItems":[{"id":"a-571-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-571-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-571-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-571-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-572":{"id":"a-572","title":"Nav Icon Hover Out 5","actionItemGroups":[{"actionItems":[{"id":"a-572-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-572-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-573":{"id":"a-573","title":"Nav Icon Hover In 6","actionItemGroups":[{"actionItems":[{"id":"a-573-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-573-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-573-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-573-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-574":{"id":"a-574","title":"Nav Icon Hover Out 6","actionItemGroups":[{"actionItems":[{"id":"a-574-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-574-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071},"a-581":{"id":"a-581","title":"Nav Icon Hover In 7","actionItemGroups":[{"actionItems":[{"id":"a-581-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}},{"id":"a-581-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-581-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"flex"}},{"id":"a-581-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1704776701071},"a-582":{"id":"a-582","title":"Nav Icon Hover Out 7","actionItemGroups":[{"actionItems":[{"id":"a-582-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":0,"unit":""}},{"id":"a-582-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bar-icon-hover","selectorGuids":["211c1e77-4ab6-8444-6815-d698d015bd93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1704776701071}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavScheduler({
  as: _Component = _Builtin.Block,
  isActive = true,
  onClickNav = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "nav-bar-icon")}
      data-w-id="831c9783-a7f5-44f5-8884-8b7d64ee13aa"
      tag="div"
      {...onClickNav}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icons", "relative-1")}
        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.40002%202.7C5.77502%202.725%205.97502%202.925%206.00002%203.3V5.1H13.2V3.3C13.225%202.925%2013.425%202.725%2013.8%202.7C14.175%202.725%2014.375%202.925%2014.4%203.3V5.1H15.6C16.275%205.125%2016.8375%205.3625%2017.2875%205.8125C17.7375%206.2625%2017.975%206.825%2018%207.5V8.7V9.9V9.9375C17.8%209.9125%2017.6%209.9%2017.4%209.9C17.2%209.9%2017%209.9125%2016.8%209.9375V9.9H2.40002V19.5C2.40002%2019.85%202.51252%2020.1375%202.73752%2020.3625C2.96252%2020.5875%203.25002%2020.7%203.60002%2020.7H12.3C12.675%2021.15%2013.1125%2021.55%2013.6125%2021.9H3.60002C2.92502%2021.875%202.36252%2021.6375%201.91252%2021.1875C1.46252%2020.7375%201.22502%2020.175%201.20002%2019.5V9.9V8.7V7.5C1.22502%206.825%201.46252%206.2625%201.91252%205.8125C2.36252%205.3625%202.92502%205.125%203.60002%205.1H4.80002V3.3C4.82502%202.925%205.02502%202.725%205.40002%202.7ZM15.6%206.3H3.60002C3.25002%206.3%202.96252%206.4125%202.73752%206.6375C2.51252%206.8625%202.40002%207.15%202.40002%207.5V8.7H16.8V7.5C16.8%207.15%2016.6875%206.8625%2016.4625%206.6375C16.2375%206.4125%2015.95%206.3%2015.6%206.3ZM17.4%2020.7C18.15%2020.7%2018.85%2020.5125%2019.5%2020.1375C20.15%2019.7625%2020.6625%2019.25%2021.0375%2018.6C21.4125%2017.95%2021.6%2017.25%2021.6%2016.5C21.6%2015.75%2021.4125%2015.05%2021.0375%2014.4C20.6625%2013.75%2020.15%2013.2375%2019.5%2012.8625C18.85%2012.4875%2018.15%2012.3%2017.4%2012.3C16.65%2012.3%2015.95%2012.4875%2015.3%2012.8625C14.65%2013.2375%2014.1375%2013.75%2013.7625%2014.4C13.3875%2015.05%2013.2%2015.75%2013.2%2016.5C13.2%2017.25%2013.3875%2017.95%2013.7625%2018.6C14.1375%2019.25%2014.65%2019.7625%2015.3%2020.1375C15.95%2020.5125%2016.65%2020.7%2017.4%2020.7ZM17.4%2011.1C18.375%2011.1%2019.275%2011.3375%2020.1%2011.8125C20.925%2012.2875%2021.5875%2012.95%2022.0875%2013.8C22.5625%2014.65%2022.8%2015.55%2022.8%2016.5C22.8%2017.45%2022.5625%2018.35%2022.0875%2019.2C21.5875%2020.05%2020.925%2020.7125%2020.1%2021.1875C19.275%2021.6625%2018.375%2021.9%2017.4%2021.9C16.425%2021.9%2015.525%2021.6625%2014.7%2021.1875C13.875%2020.7125%2013.2125%2020.05%2012.7125%2019.2C12.2375%2018.35%2012%2017.45%2012%2016.5C12%2015.55%2012.2375%2014.65%2012.7125%2013.8C13.2125%2012.95%2013.875%2012.2875%2014.7%2011.8125C15.525%2011.3375%2016.425%2011.1%2017.4%2011.1ZM17.4%2013.5C17.775%2013.525%2017.975%2013.725%2018%2014.1V15.9H19.2C19.575%2015.925%2019.775%2016.125%2019.8%2016.5C19.775%2016.875%2019.575%2017.075%2019.2%2017.1H17.4C17.025%2017.075%2016.825%2016.875%2016.8%2016.5V14.1C16.825%2013.725%2017.025%2013.525%2017.4%2013.5Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-bar-icon-active")}
          tag="div"
        />
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-bar-icon-hover", "schedule")}
        tag="div"
      >
        <_Builtin.Block tag="div">{"Scheduler"}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
