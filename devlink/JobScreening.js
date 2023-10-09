import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonOutlinedDangerSmall } from "./ButtonOutlinedDangerSmall";
import { ButtonPrimaryRegular } from "./ButtonPrimaryRegular";
import { JobCandidateCard } from "./JobCandidateCard";
import { JobDetail } from "./JobDetail";
import { JobsScreening } from "./JobsScreening";
import * as _utils from "./utils";
import _styles from "./JobScreening.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-848":{"id":"e-848","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-352","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-849"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0a2d041d-80d2-9d7a-1e15-a2a860a52db7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0a2d041d-80d2-9d7a-1e15-a2a860a52db7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694777157161},"e-849":{"id":"e-849","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-353","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-848"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0a2d041d-80d2-9d7a-1e15-a2a860a52db7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0a2d041d-80d2-9d7a-1e15-a2a860a52db7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694777157165},"e-868":{"id":"e-868","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-354","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-869"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d806ff5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d806ff5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694859038332},"e-869":{"id":"e-869","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-355","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-868"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d806ff5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d806ff5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694859038332},"e-870":{"id":"e-870","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-354","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-871"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807006","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807006","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694859038332},"e-871":{"id":"e-871","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-355","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-870"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807006","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807006","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694859038332},"e-872":{"id":"e-872","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-354","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-873"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807013","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807013","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694859038332},"e-873":{"id":"e-873","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-355","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-872"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807013","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807013","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694859038332},"e-874":{"id":"e-874","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-354","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-875"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807026","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807026","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694859038332},"e-875":{"id":"e-875","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-355","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-874"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807026","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807026","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694859038332},"e-928":{"id":"e-928","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-378","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-929"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807030","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|80fad331-d6cd-481e-117a-545d3d807030","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694908197175},"e-936":{"id":"e-936","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-381","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-937"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650c129b14ba3ec430890088|002821df-9a23-91c6-11fa-4b56cedb1947","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650c129b14ba3ec430890088|002821df-9a23-91c6-11fa-4b56cedb1947","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694909163681},"e-948":{"id":"e-948","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-386","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-949"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"},"targets":[{"selector":".aui-button-wrap.email","originalId":"650c129b14ba3ec43089005f|f3340951-3b1b-ee78-4e07-92dd67f04da8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694910129600},"e-960":{"id":"e-960","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-361","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-961"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2ac61d84-789c-0790-a1a3-295d95fd7ba0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2ac61d84-789c-0790-a1a3-295d95fd7ba0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694976399087},"e-961":{"id":"e-961","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-362","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-960"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2ac61d84-789c-0790-a1a3-295d95fd7ba0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2ac61d84-789c-0790-a1a3-295d95fd7ba0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694976399087},"e-1168":{"id":"e-1168","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-403","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1169"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b741affb-9d81-6ba8-073e-30d4df6ffcd0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b741affb-9d81-6ba8-073e-30d4df6ffcd0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695149041058},"e-1170":{"id":"e-1170","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-404","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1171"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b741affb-9d81-6ba8-073e-30d4df6ffcc8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b741affb-9d81-6ba8-073e-30d4df6ffcc8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695149165934},"e-1172":{"id":"e-1172","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-386","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b741affb-9d81-6ba8-073e-30d4df6fff01","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b741affb-9d81-6ba8-073e-30d4df6fff01","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695149517159},"e-1174":{"id":"e-1174","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-361","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1175"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b741affb-9d81-6ba8-073e-30d4df6fff66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b741affb-9d81-6ba8-073e-30d4df6fff66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695149517159},"e-1175":{"id":"e-1175","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-362","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b741affb-9d81-6ba8-073e-30d4df6fff66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b741affb-9d81-6ba8-073e-30d4df6fff66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695149517159},"e-1224":{"id":"e-1224","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-354","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39dede","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39dede","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695622849869},"e-1225":{"id":"e-1225","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-355","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1253"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39dede","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39dede","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695622849869},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-352","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1254"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf4d9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf4d9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695147094109},"e-1254":{"id":"e-1254","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-353","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1258"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf4d9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf4d9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695147094109},"e-1248":{"id":"e-1248","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-352","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1249"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf43d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf43d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695147113132},"e-1249":{"id":"e-1249","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-353","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1248"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf43d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf43d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695147113132},"e-1263":{"id":"e-1263","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-432","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf3b8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf3b8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694909535263},"e-1266":{"id":"e-1266","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-433","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1260"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf510","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf510","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695147074691},"e-1257":{"id":"e-1257","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-431","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf317","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf317","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694909803219},"e-1256":{"id":"e-1256","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-433","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1265"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695147094109},"e-1264":{"id":"e-1264","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-433","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1255"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf3dc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf3dc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695147113132},"e-1251":{"id":"e-1251","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-431","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1253"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf322","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf322","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694909682829},"e-1262":{"id":"e-1262","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-352","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf575","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf575","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695147074691},"e-1259":{"id":"e-1259","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-353","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1262"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf575","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"690c5ee4-d401-eca9-addf-13eb4b5bf575","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695147074691},"e-1267":{"id":"e-1267","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-354","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1268"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a68efcc0-5329-e289-d305-0833b41efeca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a68efcc0-5329-e289-d305-0833b41efeca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695804611980},"e-1268":{"id":"e-1268","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-355","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1267"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a68efcc0-5329-e289-d305-0833b41efeca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a68efcc0-5329-e289-d305-0833b41efeca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695804611983},"e-1269":{"id":"e-1269","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-354","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695804646481},"e-1270":{"id":"e-1270","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-355","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1269"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695804646484},"e-1271":{"id":"e-1271","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-354","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df0a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df0a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695804677365},"e-1272":{"id":"e-1272","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-355","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1271"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df0a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df0a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695804677368},"e-1273":{"id":"e-1273","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-354","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695804706922},"e-1274":{"id":"e-1274","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-355","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1273"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fc10a2b6-404d-f88a-976a-2a9bbe39df1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695804706925},"e-1283":{"id":"e-1283","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-381","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1284"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"59642c18-096f-1528-6295-a791c8c9a815","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"59642c18-096f-1528-6295-a791c8c9a815","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695820203394},"e-1294":{"id":"e-1294","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-353","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1295"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9797771a-2c98-c750-fa23-c5d924bbba19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9797771a-2c98-c750-fa23-c5d924bbba19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695823374481},"e-1295":{"id":"e-1295","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-352","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1294"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9797771a-2c98-c750-fa23-c5d924bbba19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9797771a-2c98-c750-fa23-c5d924bbba19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695823374485},"e-1296":{"id":"e-1296","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-352","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"59f30a20-74c8-9caf-b0bc-682f040d0d68","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"59f30a20-74c8-9caf-b0bc-682f040d0d68","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695825197517},"e-1297":{"id":"e-1297","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-353","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"59f30a20-74c8-9caf-b0bc-682f040d0d68","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"59f30a20-74c8-9caf-b0bc-682f040d0d68","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695825197521}},"actionLists":{"a-352":{"id":"a-352","title":"toggle-dropdown-[open]","actionItemGroups":[{"actionItems":[{"id":"a-352-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-btn-lottie","selectorGuids":["ffb83741-a361-cbef-4c81-3aacd1fe0460"]},"value":0}},{"id":"a-352-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".toggle-dropdown-content","selectorGuids":["b9e35d25-4d8c-9390-3169-71cc41432144"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-352-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-btn-lottie","selectorGuids":["ffb83741-a361-cbef-4c81-3aacd1fe0460"]},"value":50}},{"id":"a-352-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".toggle-dropdown-content","selectorGuids":["b9e35d25-4d8c-9390-3169-71cc41432144"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694777161859},"a-353":{"id":"a-353","title":"toggle-dropdown-[close]","actionItemGroups":[{"actionItems":[{"id":"a-353-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-btn-lottie","selectorGuids":["ffb83741-a361-cbef-4c81-3aacd1fe0460"]},"value":0}},{"id":"a-353-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".toggle-dropdown-content","selectorGuids":["b9e35d25-4d8c-9390-3169-71cc41432144"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694777161859},"a-354":{"id":"a-354","title":"toggle-dropdown-[open] 2","actionItemGroups":[{"actionItems":[{"id":"a-354-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-btn-lottie","selectorGuids":["ffb83741-a361-cbef-4c81-3aacd1fe0460"]},"value":0}},{"id":"a-354-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".toggle-dropdown-content","selectorGuids":["b9e35d25-4d8c-9390-3169-71cc41432144"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-354-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-btn-lottie","selectorGuids":["ffb83741-a361-cbef-4c81-3aacd1fe0460"]},"value":50}},{"id":"a-354-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".toggle-dropdown-content","selectorGuids":["b9e35d25-4d8c-9390-3169-71cc41432144"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694777161859},"a-355":{"id":"a-355","title":"toggle-dropdown-[close] 2","actionItemGroups":[{"actionItems":[{"id":"a-355-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-btn-lottie","selectorGuids":["ffb83741-a361-cbef-4c81-3aacd1fe0460"]},"value":0}},{"id":"a-355-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".toggle-dropdown-content","selectorGuids":["b9e35d25-4d8c-9390-3169-71cc41432144"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694777161859},"a-378":{"id":"a-378","title":"screening-sidebar-[close]","actionItemGroups":[{"actionItems":[{"id":"a-378-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-378-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".screening-sidebar","selectorGuids":["9c18f576-777f-0c22-82c0-ab8821e1e97d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-378-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".screening-sidebar","selectorGuids":["9c18f576-777f-0c22-82c0-ab8821e1e97d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694898960131},"a-381":{"id":"a-381","title":"detailed-feedback-[open]","actionItemGroups":[{"actionItems":[{"id":"a-381-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper.overview","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8","103615c0-baf5-f2ba-a55e-2e2680195094"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-381-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper.overview","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8","103615c0-baf5-f2ba-a55e-2e2680195094"]},"value":"none"}},{"id":"a-381-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-wrapper.detailed","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8","176d92f4-5f7b-45cf-12df-142b9dea7515"]},"value":"flex"}}]},{"actionItems":[{"id":"a-381-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".sidebar-wrapper.detailed","selectorGuids":["50c8527d-1dec-19c2-cbe5-f014eeac13f8","176d92f4-5f7b-45cf-12df-142b9dea7515"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694909170941},"a-386":{"id":"a-386","title":"email-temp-editor-[close]","actionItemGroups":[{"actionItems":[{"id":"a-386-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":0,"unit":""}},{"id":"a-386-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".rd-email-edit-wrapper","selectorGuids":["2295ead5-85e1-b9a6-3337-5728082f803c"]},"xValue":500,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-386-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694910134507},"a-361":{"id":"a-361","title":"toggle-dropdown-[open] 3","actionItemGroups":[{"actionItems":[{"id":"a-361-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-btn-lottie","selectorGuids":["ffb83741-a361-cbef-4c81-3aacd1fe0460"]},"value":0}},{"id":"a-361-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".toggle-dropdown-content","selectorGuids":["b9e35d25-4d8c-9390-3169-71cc41432144"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-361-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-btn-lottie","selectorGuids":["ffb83741-a361-cbef-4c81-3aacd1fe0460"]},"value":50}},{"id":"a-361-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".toggle-dropdown-content","selectorGuids":["b9e35d25-4d8c-9390-3169-71cc41432144"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694777161859},"a-362":{"id":"a-362","title":"toggle-dropdown-[close] 3","actionItemGroups":[{"actionItems":[{"id":"a-362-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-btn-lottie","selectorGuids":["ffb83741-a361-cbef-4c81-3aacd1fe0460"]},"value":0}},{"id":"a-362-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".toggle-dropdown-content","selectorGuids":["b9e35d25-4d8c-9390-3169-71cc41432144"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694777161859},"a-403":{"id":"a-403","title":"close submission","actionItemGroups":[{"actionItems":[{"id":"a-403-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".stop-wrapper","selectorGuids":["43ddec0a-7b29-3084-0b1b-aca6c029683d"]},"value":0,"unit":""}},{"id":"a-403-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"selector":".stop-wrapper","selectorGuids":["43ddec0a-7b29-3084-0b1b-aca6c029683d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1695149048147},"a-404":{"id":"a-404","title":"submission open","actionItemGroups":[{"actionItems":[{"id":"a-404-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".stop-wrapper","selectorGuids":["43ddec0a-7b29-3084-0b1b-aca6c029683d"]},"value":0,"unit":""}},{"id":"a-404-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".stop-wrapper","selectorGuids":["43ddec0a-7b29-3084-0b1b-aca6c029683d"]},"value":"none"}}]},{"actionItems":[{"id":"a-404-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".stop-wrapper","selectorGuids":["43ddec0a-7b29-3084-0b1b-aca6c029683d"]},"value":1,"unit":""}},{"id":"a-404-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".stop-wrapper","selectorGuids":["43ddec0a-7b29-3084-0b1b-aca6c029683d"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1695149048147},"a-432":{"id":"a-432","title":"com-detail-editor-[open] 2","actionItemGroups":[{"actionItems":[{"id":"a-432-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".rd-company-sidebar.detail-edit","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7","55f5d5d9-a090-1d1e-0e51-a7d386127739"]},"value":"none"}},{"id":"a-432-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".rd-email-edit-wrapper-2.full-height","selectorGuids":["55f5d5d9-a090-1d1e-0e51-a7d3861276f3","55f5d5d9-a090-1d1e-0e51-a7d386127740"]},"xValue":500,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-432-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".rd-company-sidebar.detail-edit","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7","55f5d5d9-a090-1d1e-0e51-a7d386127739"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-432-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".rd-company-sidebar.detail-edit","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7","55f5d5d9-a090-1d1e-0e51-a7d386127739"]},"value":"flex"}},{"id":"a-432-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".rd-email-edit-wrapper-2.full-height","selectorGuids":["55f5d5d9-a090-1d1e-0e51-a7d3861276f3","55f5d5d9-a090-1d1e-0e51-a7d386127740"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-432-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".rd-company-sidebar.detail-edit","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7","55f5d5d9-a090-1d1e-0e51-a7d386127739"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694909543686},"a-433":{"id":"a-433","title":"email-temp-editor-[close] 2","actionItemGroups":[{"actionItems":[{"id":"a-433-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":0,"unit":""}},{"id":"a-433-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".rd-email-edit-wrapper-2","selectorGuids":["55f5d5d9-a090-1d1e-0e51-a7d3861276f3"]},"xValue":500,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-433-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694910134507},"a-431":{"id":"a-431","title":"com-detail-editor-[close] 2","actionItemGroups":[{"actionItems":[{"id":"a-431-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar.detail-edit","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7","55f5d5d9-a090-1d1e-0e51-a7d386127739"]},"value":0,"unit":""}},{"id":"a-431-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"useEventTarget":"PARENT","selector":".rd-email-edit-wrapper-2.full-height","selectorGuids":["55f5d5d9-a090-1d1e-0e51-a7d3861276f3","55f5d5d9-a090-1d1e-0e51-a7d386127740"]},"xValue":500,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-431-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rd-company-sidebar.detail-edit","selectorGuids":["5acd8927-8dc5-556d-8bbb-b45e8eb0ffa7","55f5d5d9-a090-1d1e-0e51-a7d386127739"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694909687598}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function JobScreening({
  as: _Component = _Builtin.Block,
  slotCandidateJobCard,
  onClickAllApplicant = {},
  onClickViewJobPost = {},
  onClickScreening = {},
  onClickShortlisted = {},
  onClickSelected = {},
  countAllApplicant = "19 Applicants",
  textpostedDates = "Posted 3 days ago",
  countScreening = "Applicants",
  countShortlisted = "Applicants",
  countSelected = "1 Applicant",
  slotProfileImage,
  textRole = "This is some text inside of a div block.",
  textCompanyLocation = "This is some text inside of a div block.",
  statusBgColor = {},
  textStatus = "Interviewing",
  onClickImportCandidate = {},
  slotSmallProfileImage,
  onClickSortBy = {},
  onClickResumeMatchAsc = {},
  onClickFilter = {},
  textShowResults = "Showing 19 out of 19 Candidates",
  slotSearchInput,
  onClickStopSubmission = {},
  onClickExportCsv = {},
  slotViewJobPost,
  slotScreening,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "rd-main-wrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-271")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "rd-jobs-header-wrapper-jobs")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-281")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "link-block")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg", "fw-semibold")}
                tag="div"
              >
                {"Jobs"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-283")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3.29289%2010.7071C2.93241%2010.3466%202.90468%209.77939%203.2097%209.3871L3.29289%209.29289L6.585%206L3.29289%202.70711C2.93241%202.34662%202.90468%201.77939%203.2097%201.3871L3.29289%201.29289C3.65338%200.932409%204.22061%200.904679%204.6129%201.2097L4.70711%201.29289L8.70711%205.29289C9.06759%205.65338%209.09532%206.22061%208.7903%206.6129L8.70711%206.70711L4.70711%2010.7071C4.31658%2011.0976%203.68342%2011.0976%203.29289%2010.7071Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-282")}
              tag="div"
            >
              {slotSmallProfileImage}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-lg",
                "text-grey-700",
                "letter-spacing-small"
              )}
              dyn={{
                bind: {},
              }}
              tag="div"
            >
              {textRole}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "submission-controls")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-290")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-sm",
                  "fw-semibold",
                  "color-grey-500"
                )}
                tag="div"
              >
                {"Status"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "cdd-submission-status")}
                tag="div"
                {...statusBgColor}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-sm",
                    "fw-semibold",
                    "text-kale-800"
                  )}
                  tag="div"
                >
                  {textStatus}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              data-w-id="b741affb-9d81-6ba8-073e-30d4df6ffcc8"
              tag="div"
              {...onClickStopSubmission}
            >
              <ButtonOutlinedDangerSmall buttonText="Stop Submissions" />
              <_Builtin.Block
                className={_utils.cx(_styles, "stop-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "stop-bg")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "stop-card")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg", "fw-semibold")}
                    tag="div"
                  >
                    {"Are you sure want to stop the submission?"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-323")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cancel-text")}
                      data-w-id="b741affb-9d81-6ba8-073e-30d4df6ffcd0"
                      tag="div"
                    >
                      {"Cancel "}
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link-block-3")}
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      <ButtonPrimaryRegular textLabel="Continue" />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "rd-jobs-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "rd-job-info-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "rd-company-info-block")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "rd-company-icon-block")}
              tag="div"
            >
              {slotProfileImage}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "job-details")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                dyn={{
                  bind: {},
                }}
                tag="div"
              >
                {textRole}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tittle-company-location")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "company-location")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-sm",
                      "fw-semibold",
                      "text-grey-600"
                    )}
                    dyn={{
                      bind: {},
                    }}
                    tag="div"
                  >
                    {textCompanyLocation}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "rd-job-list-wrapper")}
          tag="div"
        >
          <_Builtin.TabsWrapper
            className={_utils.cx(_styles, "cdd-job-list-tab")}
            current="Tab 1"
            easing="ease"
            fadeIn={300}
            fadeOut={100}
          >
            <_Builtin.TabsMenu
              className={_utils.cx(_styles, "rd-job-list-tab-menu")}
              tag="div"
            >
              <_Builtin.TabsLink
                className={_utils.cx(_styles, "cdd-tab-link", "all")}
                data-w-tab="Tab 1"
                {...onClickAllApplicant}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-tab-link-title")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "cdd-tab-link-icon-block",
                      "kale-700"
                    )}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.9999%209C9.34304%209%207.99989%207.65685%207.99989%206C7.99989%204.34315%209.34304%203%2010.9999%203C12.6567%203%2013.9999%204.34315%2013.9999%206C13.9999%207.65685%2012.6567%209%2010.9999%209ZM10.9999%208C12.1045%208%2012.9999%207.10457%2012.9999%206C12.9999%204.89543%2012.1045%204%2010.9999%204C9.89532%204%208.99989%204.89543%208.99989%206C8.99989%207.10457%209.89532%208%2010.9999%208ZM4.49989%206C3.11918%206%201.99989%204.88071%201.99989%203.5C1.99989%202.11929%203.11918%201%204.49989%201C5.8806%201%206.99989%202.11929%206.99989%203.5C6.99989%204.88071%205.8806%206%204.49989%206ZM4.49989%205C5.32832%205%205.99989%204.32843%205.99989%203.5C5.99989%202.67157%205.32832%202%204.49989%202C3.67146%202%202.99989%202.67157%202.99989%203.5C2.99989%204.32843%203.67146%205%204.49989%205ZM15.9978%2014.4547C16.0228%2014.7297%2015.8202%2014.9729%2015.5452%2014.9979C15.2702%2015.0229%2015.0269%2014.8203%2015.0019%2014.5453C14.8248%2012.597%2013.0351%2011%2010.9999%2011C8.96465%2011%207.17496%2012.597%206.99784%2014.5453C6.97284%2014.8203%206.72963%2015.0229%206.45462%2014.9979C6.17962%2014.9729%205.97694%2014.7297%206.00195%2014.4547C6.22635%2011.9863%208.45237%2010%2010.9999%2010C13.5474%2010%2015.7734%2011.9863%2015.9978%2014.4547ZM7.97423%209.34189C8.06156%209.60386%207.91998%209.88702%207.65801%209.97434C7.39603%2010.0617%207.11287%209.92009%207.02555%209.65811C6.70672%208.70162%205.62923%208%204.49989%208C3.37055%208%202.29307%208.70162%201.97423%209.65811C1.88691%209.92009%201.60375%2010.0617%201.34178%209.97434C1.07981%209.88702%200.938226%209.60386%201.02555%209.34189C1.48692%207.95779%202.9578%207%204.49989%207C6.04198%207%207.51287%207.95779%207.97423%209.34189Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "fw-semibold",
                      "text-kale-800"
                    )}
                    tag="div"
                  >
                    {"All Applicants"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-xsm", "text-kale-600")}
                  tag="div"
                >
                  {countAllApplicant}
                </_Builtin.Block>
              </_Builtin.TabsLink>
              <_Builtin.TabsLink
                className={_utils.cx(_styles, "cdd-tab-link", "job-post")}
                data-w-tab="Tab 2"
                {...onClickViewJobPost}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "cdd-tab-link-title",
                    "height-mesa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "cdd-tab-link-icon-block",
                      "yellow-700"
                    )}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M4.08317%202.91732V1.16732C4.08317%200.845154%204.34434%200.583984%204.6665%200.583984H9.33317C9.65534%200.583984%209.9165%200.845154%209.9165%201.16732V2.91732H12.2498C12.572%202.91732%2012.8332%203.17849%2012.8332%203.50065V11.6673C12.8332%2011.9895%2012.572%2012.2507%2012.2498%2012.2507H1.74984C1.42767%2012.2507%201.1665%2011.9895%201.1665%2011.6673V3.50065C1.1665%203.17849%201.42767%202.91732%201.74984%202.91732H4.08317ZM2.33317%209.33398V11.084H11.6665V9.33398H2.33317ZM2.33317%208.16732H11.6665V4.08398H2.33317V8.16732ZM5.24984%201.75065V2.91732H8.74984V1.75065H5.24984ZM6.4165%206.41732H7.58317V7.58398H6.4165V6.41732Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "fw-semibold",
                      "text-yellow-800"
                    )}
                    tag="div"
                  >
                    {"View Job Post"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-xsm", "text-yellow-700")}
                  tag="div"
                >
                  {textpostedDates}
                </_Builtin.Block>
              </_Builtin.TabsLink>
              <_Builtin.TabsLink
                className={_utils.cx(_styles, "cdd-tab-link", "screening")}
                data-w-tab="Tab 3"
                {...onClickScreening}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "cdd-tab-link-title",
                    "height-mesa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "cdd-tab-link-icon-block",
                      "blue-700"
                    )}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.03%206H8.52L10.48%202.28C10.54%202.13%2010.47%202%2010.31%202H7.39C7.23%202%207.05%202.13%206.99%202.28L5.53%205.68C5.46%205.84%205.53%206%205.69%206H7L5.58%2010.07C5.47%2010.36%205.55%2010.61%205.92%2010.28L10.05%206.39C10.28%206.16%2010.27%206%2010.03%206ZM3.99995%2014.7929L7.79289%2011H15V1H1V11H4V11.5L3.99995%2014.7929ZM3%2012H1C0.443858%2012%200%2011.5561%200%2011V1C0%200.443858%200.443858%200%201%200H15C15.5561%200%2016%200.443858%2016%201V11C16%2011.5561%2015.5561%2012%2015%2012H8.20711L4.70005%2015.507C4.41435%2015.7871%203.98918%2015.87%203.6192%2015.7177C3.24922%2015.5653%203.00567%2015.2071%203%2014.8V12Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "fw-semibold",
                      "color-blue-800"
                    )}
                    tag="div"
                  >
                    {"Screening"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-327")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xsm", "text-blue-800")}
                    tag="div"
                  >
                    {countScreening}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.TabsLink>
              <_Builtin.TabsLink
                className={_utils.cx(_styles, "cdd-tab-link", "shortlisted")}
                data-w-tab="Tab 4"
                {...onClickShortlisted}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "cdd-tab-link-title",
                    "height-mesa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "cdd-tab-link-icon-block",
                      "purple-700"
                    )}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.5%204C3.32843%204%204%203.32843%204%202.5C4%201.67157%203.32843%201%202.5%201C1.67157%201%201%201.67157%201%202.5C1%203.32843%201.67157%204%202.5%204ZM5%202.5C5%202.77614%205.22386%203%205.5%203H14.5C14.7761%203%2015%202.77614%2015%202.5C15%202.22386%2014.7761%202%2014.5%202H5.5C5.22386%202%205%202.22386%205%202.5ZM5%207.5C5%207.77614%205.22386%208%205.5%208H14.5C14.7761%208%2015%207.77614%2015%207.5C15%207.22386%2014.7761%207%2014.5%207H5.5C5.22386%207%205%207.22386%205%207.5ZM5%2012.5C5%2012.7761%205.22386%2013%205.5%2013H14.5C14.7761%2013%2015%2012.7761%2015%2012.5C15%2012.2239%2014.7761%2012%2014.5%2012H5.5C5.22386%2012%205%2012.2239%205%2012.5ZM4%207.5C4%208.32843%203.32843%209%202.5%209C1.67157%209%201%208.32843%201%207.5C1%206.67157%201.67157%206%202.5%206C3.32843%206%204%206.67157%204%207.5ZM2.5%2014C3.32843%2014%204%2013.3284%204%2012.5C4%2011.6716%203.32843%2011%202.5%2011C1.67157%2011%201%2011.6716%201%2012.5C1%2013.3284%201.67157%2014%202.5%2014Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "fw-semibold", "pink-800")}
                    tag="div"
                  >
                    {"Shortlisted"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-327")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xsm", "text-blue-800")}
                    tag="div"
                  >
                    {countShortlisted}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.TabsLink>
              <_Builtin.TabsLink
                className={_utils.cx(_styles, "cdd-tab-link", "selected")}
                data-w-tab="Tab 5"
                {...onClickSelected}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "cdd-tab-link-title",
                    "height-mesa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "cdd-tab-link-icon-block",
                      "green-700"
                    )}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.1464%204.64645C10.3417%204.45118%2010.6583%204.45118%2010.8536%204.64645C11.0488%204.84171%2011.0488%205.15829%2010.8536%205.35355L4.35355%2011.8536C4.15829%2012.0488%203.84171%2012.0488%203.64645%2011.8536L1.14645%209.35355C0.951184%209.15829%200.951184%208.84171%201.14645%208.64645C1.34171%208.45118%201.65829%208.45118%201.85355%208.64645L4%2010.7929L10.1464%204.64645ZM8.35355%2011.8536C8.15829%2012.0488%207.84171%2012.0488%207.64645%2011.8536C7.45118%2011.6583%207.45118%2011.3417%207.64645%2011.1464L14.1464%204.64645C14.3417%204.45118%2014.6583%204.45118%2014.8536%204.64645C15.0488%204.84171%2015.0488%205.15829%2014.8536%205.35355L8.35355%2011.8536Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "fw-semibold",
                      "text-green-800"
                    )}
                    tag="div"
                  >
                    {"Selected"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-xsm", "text-green-700")}
                  tag="div"
                >
                  {countSelected}
                </_Builtin.Block>
              </_Builtin.TabsLink>
            </_Builtin.TabsMenu>
            <_Builtin.TabsContent
              className={_utils.cx(_styles, "rd-job-list-tab-content", "mt-60")}
              tag="div"
            >
              <_Builtin.TabsPane
                className={_utils.cx(_styles, "rd-job-list-tab-pane")}
                tag="div"
                data-w-tab="Tab 1"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-tab-content-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cdd-tab-content-top")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-285")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-lg", "fw-semibold")}
                        tag="div"
                      >
                        {"All Applicants"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "content-6", "clickable")}
                        tag="div"
                        {...onClickImportCandidate}
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "vectors-wrapper-40")}
                          width={12}
                          height={12}
                          loading="lazy"
                          src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65046d076826d94d7da6abcc_Vectors-Wrapper.svg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "label-7")}
                          tag="div"
                        >
                          {"Import Candidates"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cdd-search-filter")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cdd-filter-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "rd-filter-block")}
                          tag="div"
                          {...onClickSortBy}
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "rd-filter-icon")}
                            width={12}
                            height={12}
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65030d085ea1a69e3594c991_Vectors-Wrapper.svg"
                          />
                          <_Builtin.Block tag="div">{"Sort by"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cdd-filter-resume-match"
                          )}
                          tag="div"
                          {...onClickResumeMatchAsc}
                        >
                          {"Resume Match Asc"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "", "rd-filter-block")}
                          tag="div"
                          {...onClickFilter}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "filter-token")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "vectors-wrapper-18"
                              )}
                              width={10.939278602600098}
                              height={10.930898666381836}
                              loading="lazy"
                              src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65030d090b86d460a1805107_Vectors-Wrapper.svg"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "")}
                            tag="div"
                          >
                            {"Filter"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-284")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-sm",
                            "color-grey-600"
                          )}
                          tag="div"
                        >
                          {textShowResults}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "input")}
                          tag="div"
                        >
                          {slotSearchInput}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "slot-job-candidate-card")}
                      tag="div"
                    >
                      {slotCandidateJobCard ?? (
                        <>
                          <JobCandidateCard />
                          <JobCandidateCard />
                        </>
                      )}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.TabsPane>
              <_Builtin.TabsPane
                className={_utils.cx(_styles, "rd-job-list-tab-pane")}
                tag="div"
                data-w-tab="Tab 2"
              >
                <_Builtin.Block tag="div">
                  {slotViewJobPost ?? <JobDetail />}
                </_Builtin.Block>
              </_Builtin.TabsPane>
              <_Builtin.TabsPane
                className={_utils.cx(_styles, "rd-job-list-tab-pane")}
                tag="div"
                data-w-tab="Tab 3"
              >
                <_Builtin.Block tag="div">
                  {slotScreening ?? <JobsScreening />}
                </_Builtin.Block>
              </_Builtin.TabsPane>
              <_Builtin.TabsPane
                className={_utils.cx(_styles, "rd-job-list-tab-pane")}
                tag="div"
                data-w-tab="Tab 4"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-tab-content-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cdd-tab-content-top")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-285")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-lg", "fw-semibold")}
                        tag="div"
                      >
                        {"Shortlisted"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cdd-import-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "content-7",
                            "clickable"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "vectors-wrapper-41")}
                            width={12}
                            height={12}
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65047121f55e98229ef58e02_Vectors-Wrapper.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label-8")}
                            tag="div"
                          >
                            {"Export CSV"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "content-6",
                            "clickable"
                          )}
                          data-w-id="b741affb-9d81-6ba8-073e-30d4df6ffea3"
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "vectors-wrapper-40")}
                            width={12}
                            height={12}
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65046d076826d94d7da6abcc_Vectors-Wrapper.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label-7")}
                            tag="div"
                          >
                            {"Import Candidates"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cdd-search-filter")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cdd-filter-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "rd-filter-block")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "rd-filter-icon")}
                            width={12}
                            height={12}
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65030d085ea1a69e3594c991_Vectors-Wrapper.svg"
                          />
                          <_Builtin.Block tag="div">{"Sort by"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cdd-filter-resume-match"
                          )}
                          tag="div"
                        >
                          {"Resume Match Asc"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "", "rd-filter-block")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "filter-token")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "vectors-wrapper-18"
                              )}
                              width={10.939278602600098}
                              height={10.930898666381836}
                              loading="lazy"
                              src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65030d090b86d460a1805107_Vectors-Wrapper.svg"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "")}
                            tag="div"
                          >
                            {"Filter"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-284")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-sm",
                            "color-grey-600"
                          )}
                          tag="div"
                        >
                          {"Showing 1 out of 19 Candidates"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "input")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "rd-search-icon-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "icon")}
                              width={15.5}
                              height={15.5}
                              loading="lazy"
                              src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65030d0ada1b1e8bdf3f48e1_Vectors-Wrapper.svg"
                            />
                          </_Builtin.Block>
                          <_Builtin.FormWrapper
                            className={_utils.cx(_styles, "form-block-3")}
                          >
                            <_Builtin.FormForm
                              className={_utils.cx(_styles, "form-3")}
                              name="email-form"
                              data-name="Email Form"
                              method="get"
                              id="email-form"
                            >
                              <_Builtin.FormTextInput
                                className={_utils.cx(_styles, "text-field-3")}
                                name="email-3"
                                maxLength={256}
                                data-name="Email 3"
                                placeholder="Search"
                                disabled={false}
                                type="email"
                                required={true}
                                autoFocus={false}
                                id="email-3"
                              />
                            </_Builtin.FormForm>
                            <_Builtin.FormSuccessMessage
                              className={_utils.cx(_styles, "hide")}
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Thank you! Your submission has been received!"
                                }
                              </_Builtin.Block>
                            </_Builtin.FormSuccessMessage>
                            <_Builtin.FormErrorMessage
                              className={_utils.cx(_styles, "hide")}
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Oops! Something went wrong while submitting the form."
                                }
                              </_Builtin.Block>
                            </_Builtin.FormErrorMessage>
                          </_Builtin.FormWrapper>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "slot-job-candidate-card")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.TabsPane>
              <_Builtin.TabsPane
                className={_utils.cx(_styles, "rd-job-list-tab-pane")}
                tag="div"
                data-w-tab="Tab 5"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cdd-tab-content-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cdd-tab-content-top")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-285")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-lg", "fw-semibold")}
                        tag="div"
                      >
                        {"Selected"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cdd-import-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "content-7",
                            "clickable"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "vectors-wrapper-41")}
                            width={12}
                            height={12}
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65047121f55e98229ef58e02_Vectors-Wrapper.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label-8")}
                            tag="div"
                          >
                            {"Export CSV"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "content-6",
                            "clickable"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "vectors-wrapper-40")}
                            width={12}
                            height={12}
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65046d076826d94d7da6abcc_Vectors-Wrapper.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "label-7")}
                            tag="div"
                          >
                            {"Import Candidates"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cdd-search-filter")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "cdd-filter-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "rd-filter-block")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "rd-filter-icon")}
                            width={12}
                            height={12}
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65030d085ea1a69e3594c991_Vectors-Wrapper.svg"
                          />
                          <_Builtin.Block tag="div">{"Sort by"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "cdd-filter-resume-match"
                          )}
                          tag="div"
                        >
                          {"Resume Match Asc"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "", "rd-filter-block")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "filter-token")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "vectors-wrapper-18"
                              )}
                              width={10.939278602600098}
                              height={10.930898666381836}
                              loading="lazy"
                              src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65030d090b86d460a1805107_Vectors-Wrapper.svg"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "")}
                            tag="div"
                          >
                            {"Filter"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-284")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-sm",
                            "color-grey-600"
                          )}
                          tag="div"
                        >
                          {"Showing 1 out of 19 Candidates"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "input")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "rd-search-icon-block"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "icon")}
                              width={15.5}
                              height={15.5}
                              loading="lazy"
                              src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65030d0ada1b1e8bdf3f48e1_Vectors-Wrapper.svg"
                            />
                          </_Builtin.Block>
                          <_Builtin.FormWrapper
                            className={_utils.cx(_styles, "form-block-3")}
                          >
                            <_Builtin.FormForm
                              className={_utils.cx(_styles, "form-3")}
                              name="email-form"
                              data-name="Email Form"
                              method="get"
                              id="email-form"
                            >
                              <_Builtin.FormTextInput
                                className={_utils.cx(_styles, "text-field-3")}
                                name="email-2"
                                maxLength={256}
                                data-name="Email 2"
                                placeholder="Search"
                                disabled={false}
                                type="email"
                                required={true}
                                autoFocus={false}
                                id="email-2"
                              />
                            </_Builtin.FormForm>
                            <_Builtin.FormSuccessMessage
                              className={_utils.cx(_styles, "hide")}
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Thank you! Your submission has been received!"
                                }
                              </_Builtin.Block>
                            </_Builtin.FormSuccessMessage>
                            <_Builtin.FormErrorMessage
                              className={_utils.cx(_styles, "hide")}
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Oops! Something went wrong while submitting the form."
                                }
                              </_Builtin.Block>
                            </_Builtin.FormErrorMessage>
                          </_Builtin.FormWrapper>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cdd-content-main")}
                    tag="div"
                  >
                    <_Builtin.Block
                      id={_utils.cx(
                        _styles,
                        "w-node-b741affb-9d81-6ba8-073e-30d4df6ffef0-df6ffcb4"
                      )}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cdd-content-side")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "cdd-template-block",
                          "jobs-templ"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "div-block-292")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "fw-semibold",
                              "color-grey-500"
                            )}
                            tag="div"
                          >
                            {"Selected Email"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "rd-email-edit-btn",
                              "clickable"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "label-8")}
                              tag="div"
                            >
                              {"Edit"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "rd-company-sidebar")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "rd-email-edit-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.HtmlEmbed
                                className={_utils.cx(_styles, "hide")}
                                value="%3Cstyle%3E%0A.rd-email-edit-wrapper%3A%3A-webkit-scrollbar%20%7B%0A%20%20display%3A%20none%3B%0A%7D%0A%0A.rd-email-edit-wrapper%20%7B%0A%20%20-ms-overflow-style%3A%20none%3B%0A%20%20scrollbar-width%3A%20none%3B%0A%7D%0A%3C%2Fstyle%3E"
                              />
                              <_Builtin.Block
                                className={_utils.cx(_styles, "div-block-307")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "text-lg",
                                    "fw-semibold",
                                    "text-grey-500"
                                  )}
                                  tag="div"
                                >
                                  {"Interview Email"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "rd-company-edit-btns"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "aui-button-wrap",
                                      "email"
                                    )}
                                    tag="div"
                                    tabIndex="0"
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "aui-button",
                                        "is-small",
                                        "is-button-outlined"
                                      )}
                                      data-w-id="b741affb-9d81-6ba8-073e-30d4df6fff01"
                                      tag="div"
                                      tabIndex="0"
                                    >
                                      <_Builtin.Block tag="div">
                                        {"Save Changes"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "aui-button-wrap",
                                      "email"
                                    )}
                                    tag="div"
                                    tabIndex="0"
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "aui-button",
                                        "is-small",
                                        "is-button-outlined",
                                        "danger"
                                      )}
                                      tag="div"
                                      tabIndex="0"
                                    >
                                      <_Builtin.Block tag="div">
                                        {"Close"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(_styles, "div-block-308")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "sidebar-wrapper",
                                    "rd-company"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "sidebar-block"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "rd-email-edit-block"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "text-sm",
                                          "fw-semibold",
                                          "color-black"
                                        )}
                                        tag="div"
                                      >
                                        {"Title"}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "input",
                                          "para"
                                        )}
                                        tag="div"
                                      >
                                        <_Builtin.FormWrapper
                                          className={_utils.cx(
                                            _styles,
                                            "form-block-3"
                                          )}
                                        >
                                          <_Builtin.FormForm
                                            className={_utils.cx(
                                              _styles,
                                              "form-3"
                                            )}
                                            name="email-form"
                                            data-name="Email Form"
                                            method="get"
                                            id="email-form"
                                          >
                                            <_Builtin.Block tag="div">
                                              {
                                                "Congratulations! You've Been Shortlisted for the Next Round of Interviews at Nike 🎉"
                                              }
                                            </_Builtin.Block>
                                          </_Builtin.FormForm>
                                          <_Builtin.FormSuccessMessage
                                            className={_utils.cx(
                                              _styles,
                                              "hide"
                                            )}
                                          >
                                            <_Builtin.Block tag="div">
                                              {
                                                "Thank you! Your submission has been received!"
                                              }
                                            </_Builtin.Block>
                                          </_Builtin.FormSuccessMessage>
                                          <_Builtin.FormErrorMessage
                                            className={_utils.cx(
                                              _styles,
                                              "hide"
                                            )}
                                          >
                                            <_Builtin.Block tag="div">
                                              {
                                                "Oops! Something went wrong while submitting the form."
                                              }
                                            </_Builtin.Block>
                                          </_Builtin.FormErrorMessage>
                                        </_Builtin.FormWrapper>
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "rd-email-edit-block"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "text-sm",
                                          "fw-semibold",
                                          "color-black"
                                        )}
                                        tag="div"
                                      >
                                        {"Body Content"}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "cj-richtext-editor-wrapper"
                                        )}
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "cj-richtext-cotrols"
                                          )}
                                          tag="div"
                                        >
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "cj-rt-paragraph"
                                            )}
                                            tag="div"
                                          >
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "medium-default-11"
                                              )}
                                              tag="div"
                                            >
                                              {"Paragraph"}
                                            </_Builtin.Block>
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "chevron-down---16px-icon"
                                              )}
                                              tag="div"
                                            >
                                              <_Builtin.Image
                                                className={_utils.cx(
                                                  _styles,
                                                  "vectors-wrapper-31"
                                                )}
                                                width={11.00003719329834}
                                                height={5.00001859664917}
                                                loading="lazy"
                                                src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/6504043394863d835c0a86cc_Vectors-Wrapper.svg"
                                              />
                                            </_Builtin.Block>
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "cj-rt-controls-block"
                                            )}
                                            tag="div"
                                          >
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "cj-rt-control-icon"
                                              )}
                                              tag="div"
                                            >
                                              <_Builtin.HtmlEmbed
                                                className={_utils.cx(
                                                  _styles,
                                                  "icon"
                                                )}
                                                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3%201.5C3%201.22386%203.22386%201%203.5%201H7C9.17614%201%2011%202.82386%2011%205C11%206.31462%2010.3344%207.50068%209.32761%208.23374C10.87%208.79245%2012%2010.2871%2012%2012C12%2014.1761%2010.1761%2016%208%2016H3.5C3.22386%2016%203%2015.7761%203%2015.5V8.5V1.5ZM4%208H7C8.62386%208%2010%206.62386%2010%205C10%203.37614%208.62386%202%207%202H4V8ZM4%209V15H8C9.62386%2015%2011%2013.6239%2011%2012C11%2010.3761%209.62386%209%208%209H7H4Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                                              />
                                            </_Builtin.Block>
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "cj-rt-control-icon"
                                              )}
                                              tag="div"
                                            >
                                              <_Builtin.HtmlEmbed
                                                className={_utils.cx(
                                                  _styles,
                                                  "icon"
                                                )}
                                                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.5%202.0001H8.38151L5.59579%2015.0001H4.5C4.22386%2015.0001%204%2015.224%204%2015.5001C4%2015.7762%204.22386%2016.0001%204.5%2016.0001H5.99031C5.99712%2016.0002%206.0039%2016.0002%206.01067%2016.0001H7.5C7.77614%2016.0001%208%2015.7762%208%2015.5001C8%2015.224%207.77614%2015.0001%207.5%2015.0001H6.61849L9.40421%202.0001H10.5C10.7761%202.0001%2011%201.77625%2011%201.5001C11%201.22396%2010.7761%201.0001%2010.5%201.0001H9.00965C9.00287%200.999965%208.99611%200.999966%208.98937%201.0001H7.5C7.22386%201.0001%207%201.22396%207%201.5001C7%201.77625%207.22386%202.0001%207.5%202.0001Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                                              />
                                            </_Builtin.Block>
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "cj-rt-control-icon"
                                              )}
                                              tag="div"
                                            >
                                              <_Builtin.HtmlEmbed
                                                className={_utils.cx(
                                                  _styles,
                                                  "icon"
                                                )}
                                                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.5%2016C2.22386%2016%202%2015.7761%202%2015.5C2%2015.2239%202.22386%2015%202.5%2015H12.5C12.7761%2015%2013%2015.2239%2013%2015.5C13%2015.7761%2012.7761%2016%2012.5%2016H2.5ZM3%201.5C3%201.22386%203.22386%201%203.5%201C3.77614%201%204%201.22386%204%201.5V9.5C4%2011.4239%205.57614%2013%207.5%2013C9.42386%2013%2011%2011.4239%2011%209.5V1.5C11%201.22386%2011.2239%201%2011.5%201C11.7761%201%2012%201.22386%2012%201.5V9.5C12%2011.9761%209.97614%2014%207.5%2014C5.02386%2014%203%2011.9761%203%209.5V1.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                                              />
                                            </_Builtin.Block>
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "cj-rt-control-icon"
                                              )}
                                              tag="div"
                                            >
                                              <_Builtin.HtmlEmbed
                                                className={_utils.cx(
                                                  _styles,
                                                  "icon"
                                                )}
                                                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.6464%205.85369C11.4512%205.65842%2011.4512%205.34184%2011.6464%205.14658C11.8417%204.95132%2012.1583%204.95132%2012.3536%205.14658L14.4536%207.24658C14.8488%207.64184%2014.8488%208.25842%2014.4617%208.64537L12.3617%2010.8454C12.171%2011.0451%2011.8545%2011.0525%2011.6548%2010.8618C11.455%2010.6711%2011.4477%2010.3546%2011.6383%2010.1549L13.743%207.95022L11.6464%205.85369ZM4.36168%2010.1549C4.55235%2010.3546%204.54499%2010.6711%204.34524%2010.8618C4.14549%2011.0525%203.82899%2011.0451%203.63832%2010.8454L1.54645%208.65369C1.15118%208.25842%201.15118%207.64184%201.54645%207.24658L3.64645%205.14658C3.84171%204.95132%204.15829%204.95132%204.35355%205.14658C4.54882%205.34184%204.54882%205.65842%204.35355%205.85369L2.25651%207.95073C2.25794%207.95151%204.36168%2010.1549%204.36168%2010.1549ZM9.53576%202.81444C9.63832%202.55805%209.9293%202.43334%2010.1857%202.53589C10.4421%202.63845%2010.5668%202.92944%2010.4642%203.18583L6.46424%2013.1858C6.36168%2013.4422%206.0707%2013.5669%205.8143%2013.4644C5.55791%2013.3618%205.43321%2013.0708%205.53576%2012.8144L9.53576%202.81444Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                                              />
                                            </_Builtin.Block>
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "cj-rt-controls-block"
                                            )}
                                            tag="div"
                                          >
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "cj-rt-control-icon"
                                              )}
                                              tag="div"
                                            >
                                              <_Builtin.Image
                                                className={_utils.cx(
                                                  _styles,
                                                  "vectors-wrapper-33"
                                                )}
                                                width={14}
                                                height={13}
                                                loading="lazy"
                                                src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/650406032fb689392940aa9d_Vectors-Wrapper.svg"
                                              />
                                            </_Builtin.Block>
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "",
                                                "cj-rt-control-icon"
                                              )}
                                              tag="div"
                                            >
                                              <_Builtin.Image
                                                className={_utils.cx(
                                                  _styles,
                                                  "vectors-wrapper-34"
                                                )}
                                                width={13.769068717956543}
                                                height={13.850000381469727}
                                                loading="lazy"
                                                src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65040604bc4e5ef14157a09d_Vectors-Wrapper.svg"
                                              />
                                            </_Builtin.Block>
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "",
                                                "cj-rt-control-icon"
                                              )}
                                              tag="div"
                                            >
                                              <_Builtin.Image
                                                className={_utils.cx(
                                                  _styles,
                                                  "",
                                                  "vectors-wrapper-33"
                                                )}
                                                width={14}
                                                height={13}
                                                loading="lazy"
                                                src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/65040605c8b96fcc667a74b1_Vectors-Wrapper.svg"
                                              />
                                            </_Builtin.Block>
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "",
                                                "cj-rt-control-icon"
                                              )}
                                              tag="div"
                                            >
                                              <_Builtin.Image
                                                className={_utils.cx(
                                                  _styles,
                                                  "vectors-wrapper-32"
                                                )}
                                                width={14.25}
                                                height={13}
                                                loading="lazy"
                                                src="https://uploads-ssl.webflow.com/64688200899246757fda7a37/6504060655c5313f7f217aa2_Vectors-Wrapper.svg"
                                              />
                                            </_Builtin.Block>
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "cj-rt-input-block"
                                          )}
                                          tag="div"
                                        >
                                          <_Builtin.FormWrapper
                                            className={_utils.cx(
                                              _styles,
                                              "form-block-4"
                                            )}
                                          >
                                            <_Builtin.FormForm
                                              className={_utils.cx(
                                                _styles,
                                                "form-4"
                                              )}
                                              name="email-form-2"
                                              data-name="Email Form 2"
                                              method="get"
                                              id="email-form-2"
                                            >
                                              <_Builtin.FormButton
                                                className={_utils.cx(
                                                  _styles,
                                                  "hide"
                                                )}
                                                type="submit"
                                                value="Submit"
                                                data-wait="Please wait..."
                                              />
                                              <_Builtin.Paragraph
                                                className={_utils.cx(
                                                  _styles,
                                                  "paragraph-2"
                                                )}
                                              >
                                                {"Dear [Candidate's Name],"}
                                                <br />
                                                {
                                                  "We hope this message finds you well. We were impressed by your application and are excited to inform you that your resume has been shortlisted for the next round of our interview process."
                                                }
                                                <br />
                                                {
                                                  "The next stage involves an AI-based interview that will give us an opportunity to know you better and for you to showcase your skills and qualifications in greater detail."
                                                }
                                              </_Builtin.Paragraph>
                                            </_Builtin.FormForm>
                                            <_Builtin.FormSuccessMessage
                                              className={_utils.cx(
                                                _styles,
                                                "hide"
                                              )}
                                            >
                                              <_Builtin.Block tag="div">
                                                {
                                                  "Thank you! Your submission has been received!"
                                                }
                                              </_Builtin.Block>
                                            </_Builtin.FormSuccessMessage>
                                            <_Builtin.FormErrorMessage
                                              className={_utils.cx(
                                                _styles,
                                                "hide"
                                              )}
                                            >
                                              <_Builtin.Block tag="div">
                                                {
                                                  "Oops! Something went wrong while submitting the form."
                                                }
                                              </_Builtin.Block>
                                            </_Builtin.FormErrorMessage>
                                          </_Builtin.FormWrapper>
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "rd-email-edit-block"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "text-sm",
                                          "fw-semibold",
                                          "color-black"
                                        )}
                                        tag="div"
                                      >
                                        {"CTA text"}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(_styles, "input")}
                                        tag="div"
                                      >
                                        <_Builtin.FormWrapper
                                          className={_utils.cx(
                                            _styles,
                                            "form-block-3"
                                          )}
                                        >
                                          <_Builtin.FormForm
                                            className={_utils.cx(
                                              _styles,
                                              "form-3"
                                            )}
                                            name="email-form"
                                            data-name="Email Form"
                                            method="get"
                                            id="email-form"
                                          >
                                            <_Builtin.FormTextInput
                                              className={_utils.cx(
                                                _styles,
                                                "text-field-3"
                                              )}
                                              name="email-2"
                                              maxLength={256}
                                              data-name="Email 2"
                                              placeholder="Take Interview"
                                              disabled={false}
                                              type="email"
                                              required={false}
                                              autoFocus={false}
                                              id="email-2"
                                            />
                                          </_Builtin.FormForm>
                                          <_Builtin.FormSuccessMessage
                                            className={_utils.cx(
                                              _styles,
                                              "hide"
                                            )}
                                          >
                                            <_Builtin.Block tag="div">
                                              {
                                                "Thank you! Your submission has been received!"
                                              }
                                            </_Builtin.Block>
                                          </_Builtin.FormSuccessMessage>
                                          <_Builtin.FormErrorMessage
                                            className={_utils.cx(
                                              _styles,
                                              "hide"
                                            )}
                                          >
                                            <_Builtin.Block tag="div">
                                              {
                                                "Oops! Something went wrong while submitting the form."
                                              }
                                            </_Builtin.Block>
                                          </_Builtin.FormErrorMessage>
                                        </_Builtin.FormWrapper>
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "rd-email-edit-block"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "text-sm",
                                          "fw-semibold",
                                          "color-black"
                                        )}
                                        tag="div"
                                      >
                                        {"Interview Link"}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "text-sm",
                                          "color-grey-600"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          "The interview link will be automatically generated by aglint. no action required"
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "toggle-dropdown"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "toggle-dropdown-toggle",
                                          "company"
                                        )}
                                        data-w-id="b741affb-9d81-6ba8-073e-30d4df6fff66"
                                        tag="div"
                                      >
                                        <_Builtin.Block tag="div">
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "fw-semibold",
                                              "color-black"
                                            )}
                                            tag="div"
                                          >
                                            {
                                              "Automatically send inerview emails"
                                            }
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "text-grey-600",
                                              "mt-5"
                                            )}
                                            tag="div"
                                          >
                                            {
                                              "Automate the process of sending emails for taking interview to the candidates those who have marked interviewing."
                                            }
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "toggle-btn-block"
                                          )}
                                          tag="div"
                                        >
                                          <_Builtin.NotSupported _atom="Animation" />
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "sidebar-wrapper",
                                    "rd-company",
                                    "max-width-300"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "sidebar-block"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "rd-email-edit-block"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "text-sm",
                                          "fw-semibold",
                                          "color-black"
                                        )}
                                        tag="div"
                                      >
                                        {"Preview"}
                                      </_Builtin.Block>
                                      <_Builtin.Image
                                        width="auto"
                                        height="auto"
                                        alt="__wf_reserved_inherit"
                                        loading="eager"
                                        src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec43089022b_Rectangle%20349.png"
                                      />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "rd-email-edit-block"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "text-sm",
                                          "fw-semibold",
                                          "color-black"
                                        )}
                                        tag="div"
                                      >
                                        {"Switch template"}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "div-block-310"
                                        )}
                                        tag="div"
                                      >
                                        <_Builtin.Image
                                          width="auto"
                                          height="auto"
                                          alt="__wf_reserved_inherit"
                                          loading="lazy"
                                          src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec430890212_36413fdbae77050b8f006cb7b0099e1c.png"
                                        />
                                        <_Builtin.Image
                                          width="auto"
                                          height="auto"
                                          alt="__wf_reserved_inherit"
                                          loading="lazy"
                                          src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec43089021a_8d2be2254997c1696ce7b0e9f2ccdbbd.png"
                                        />
                                        <_Builtin.Image
                                          width="auto"
                                          height="auto"
                                          alt="__wf_reserved_inherit"
                                          loading="lazy"
                                          src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec430890213_abc7bfd9cfc0e34b54dcccc1b45fada9.png"
                                        />
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "rd-email-edit-block"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "email-note-block"
                                        )}
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "text-sm",
                                            "fw-semibold",
                                            "text-yellow-800"
                                          )}
                                          tag="div"
                                        >
                                          {"Note"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "text-sm",
                                            "color-grey-600"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "The company details, including the name, logo, and social media links..etc mentioned in the template, are sourced from the company settings. To make adjustments to this information, you can edit the company settings accordingly."
                                          }
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "aui-button-wrap"
                                          )}
                                          tag="div"
                                          tabIndex=""
                                        >
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "aui-button",
                                              "is-small"
                                            )}
                                            tag="div"
                                            tabIndex=""
                                          >
                                            <_Builtin.Block
                                              className={_utils.cx(
                                                _styles,
                                                "text-blue-500"
                                              )}
                                              tag="div"
                                            >
                                              {"Got it"}
                                            </_Builtin.Block>
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "div-block-293")}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            alt="__wf_reserved_inherit"
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/650c129b14ba3ec430890213_abc7bfd9cfc0e34b54dcccc1b45fada9.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.TabsPane>
            </_Builtin.TabsContent>
          </_Builtin.TabsWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
