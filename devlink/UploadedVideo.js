import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./UploadedVideo.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1448":{"id":"e-1448","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-522","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1449"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0138b409-f95e-8d7a-2bc8-5d7f10556b28","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0138b409-f95e-8d7a-2bc8-5d7f10556b28","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699513251784},"e-1449":{"id":"e-1449","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-523","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1448"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0138b409-f95e-8d7a-2bc8-5d7f10556b28","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0138b409-f95e-8d7a-2bc8-5d7f10556b28","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699513251787}},"actionLists":{"a-522":{"id":"a-522","title":"hover in Uploaded Video","actionItemGroups":[{"actionItems":[{"id":"a-522-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".generate-overlay-upload","selectorGuids":["1b869298-00a3-458b-ab1c-eb776c2f6a48"]},"value":0,"unit":""}},{"id":"a-522-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".generate-overlay-upload","selectorGuids":["1b869298-00a3-458b-ab1c-eb776c2f6a48"]},"value":"none"}}]},{"actionItems":[{"id":"a-522-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".generate-overlay-upload","selectorGuids":["1b869298-00a3-458b-ab1c-eb776c2f6a48"]},"value":1,"unit":""}},{"id":"a-522-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".generate-overlay-upload","selectorGuids":["1b869298-00a3-458b-ab1c-eb776c2f6a48"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1699513255310},"a-523":{"id":"a-523","title":"hover Out Uploaded Video","actionItemGroups":[{"actionItems":[{"id":"a-523-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".generate-overlay-upload","selectorGuids":["1b869298-00a3-458b-ab1c-eb776c2f6a48"]},"value":0,"unit":""}},{"id":"a-523-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".generate-overlay-upload","selectorGuids":["1b869298-00a3-458b-ab1c-eb776c2f6a48"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699513255310}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UploadedVideo({
  as: _Component = _Builtin.Block,
  slotVideo,
  onClickReupload = {},
  onClickClear = {},
  slotButton,
  isPlayIconVisible = true,
  isPauseIconVisible = false,
  onClickPlayPause = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-574")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "relative", "upload-video-wrap")}
        data-w-id="0138b409-f95e-8d7a-2bc8-5d7f10556b28"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "video-slot-edit-assessment")}
          tag="div"
        >
          {slotVideo}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "generate-overlay-upload")}
          tag="div"
        >
          <_Builtin.Block tag="div" {...onClickPlayPause}>
            {isPlayIconVisible ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons", "cursor-pointer")}
                value="%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_b_3600_33703)%22%3E%0A%3Ccircle%20cx%3D%2215%22%20cy%3D%2215%22%20r%3D%2215%22%20fill%3D%22white%22%20fill-opacity%3D%220.8%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M20.8569%2014.076C21.523%2014.4618%2021.5216%2015.4241%2020.8544%2015.8081L12.7138%2020.4927C12.0465%2020.8766%2011.2139%2020.3943%2011.215%2019.6245L11.2283%2010.2322C11.2294%209.46236%2012.0634%208.98242%2012.7296%209.36827L20.8569%2014.076Z%22%20fill%3D%22black%22%20fill-opacity%3D%220.38%22%2F%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_b_3600_33703%22%20x%3D%22-1.23711%22%20y%3D%22-1.23711%22%20width%3D%2232.4742%22%20height%3D%2232.4742%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeGaussianBlur%20in%3D%22BackgroundImageFix%22%20stdDeviation%3D%220.618557%22%2F%3E%0A%3CfeComposite%20in2%3D%22SourceAlpha%22%20operator%3D%22in%22%20result%3D%22effect1_backgroundBlur_3600_33703%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_backgroundBlur_3600_33703%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
            {isPauseIconVisible ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons", "cursor-pointer")}
                value="%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_b_3600_33734)%22%3E%0A%3Ccircle%20cx%3D%2215%22%20cy%3D%2215%22%20r%3D%2215%22%20fill%3D%22white%22%20fill-opacity%3D%220.8%22%2F%3E%0A%3C%2Fg%3E%0A%3Crect%20x%3D%2211%22%20y%3D%2210%22%20width%3D%223%22%20height%3D%2211%22%20rx%3D%221%22%20fill%3D%22black%22%20fill-opacity%3D%220.38%22%2F%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2210%22%20width%3D%223%22%20height%3D%2211%22%20rx%3D%221%22%20fill%3D%22black%22%20fill-opacity%3D%220.38%22%2F%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_b_3600_33734%22%20x%3D%22-1.23711%22%20y%3D%22-1.23711%22%20width%3D%2232.4742%22%20height%3D%2232.4742%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeGaussianBlur%20in%3D%22BackgroundImageFix%22%20stdDeviation%3D%220.618557%22%2F%3E%0A%3CfeComposite%20in2%3D%22SourceAlpha%22%20operator%3D%22in%22%20result%3D%22effect1_backgroundBlur_3600_33734%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_backgroundBlur_3600_33734%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-567")} tag="div">
        <_Builtin.Block tag="div">{slotButton}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-568")}
          tag="div"
          {...onClickClear}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.33333%202.66667V1.33333C5.33333%200.565144%205.89848%200%206.66667%200H9.33333C10.1015%200%2010.6667%200.565144%2010.6667%201.33333V2.66667H13.3333C13.7015%202.66667%2014%202.96514%2014%203.33333C14%203.70152%2013.7015%204%2013.3333%204H10H6H2.66667C2.29848%204%202%203.70152%202%203.33333C2%202.96514%202.29848%202.66667%202.66667%202.66667H5.33333ZM9.33333%202.66667V1.33333H6.66667V2.66667H9.33333ZM6.66667%2012.6667C6.66667%2013.0349%206.36819%2013.3333%206%2013.3333C5.63181%2013.3333%205.33333%2013.0349%205.33333%2012.6667V6.66667C5.33333%206.29848%205.63181%206%206%206C6.36819%206%206.66667%206.29848%206.66667%206.66667V12.6667ZM10.6667%2012.6667C10.6667%2013.0349%2010.3682%2013.3333%2010%2013.3333C9.63181%2013.3333%209.33333%2013.0349%209.33333%2012.6667V6.66667C9.33333%206.29848%209.63181%206%2010%206C10.3682%206%2010.6667%206.29848%2010.6667%206.66667V12.6667ZM2.66667%206C2.66667%205.63181%202.96514%205.33333%203.33333%205.33333C3.70152%205.33333%204%205.63181%204%206V14.6667H12V6C12%205.63181%2012.2985%205.33333%2012.6667%205.33333C13.0349%205.33333%2013.3333%205.63181%2013.3333%206V14.6667C13.3333%2015.4349%2012.7682%2016%2012%2016H4C3.23181%2016%202.66667%2015.4349%202.66667%2014.6667V6Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Clear"}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
