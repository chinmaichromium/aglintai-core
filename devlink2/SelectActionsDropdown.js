import React from 'react';
import * as _Builtin from './_Builtin';
import * as _interactions from './interactions';
import * as _utils from './utils';
import _styles from './SelectActionsDropdown.module.css';

const _interactionsData = JSON.parse(
  '{"events":{"e-91":{"id":"e-91","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-92"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25c1b94f-ec29-f877-2c7c-942a68b9f2ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25c1b94f-ec29-f877-2c7c-942a68b9f2ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701334578830},"e-92":{"id":"e-92","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-91"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25c1b94f-ec29-f877-2c7c-942a68b9f2ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25c1b94f-ec29-f877-2c7c-942a68b9f2ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701334578831}},"actionLists":{"a-26":{"id":"a-26","title":"dropdown-[hover-in]","actionItemGroups":[{"actionItems":[{"id":"a-26-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-body","selectorGuids":["b89c86ff-2acf-76f2-26bb-713037de4d31"]},"value":"none"}}]},{"actionItems":[{"id":"a-26-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-body","selectorGuids":["b89c86ff-2acf-76f2-26bb-713037de4d31"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1698824193169},"a-27":{"id":"a-27","title":"dropdown-[hover-out]","actionItemGroups":[{"actionItems":[{"id":"a-27-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-body","selectorGuids":["b89c86ff-2acf-76f2-26bb-713037de4d31"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1698824250229}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}',
);

export function SelectActionsDropdown({
  as: _Component = _Builtin.Block,
  isInterview = true,
  onClickInterview = {},
  isQualified = true,
  onClickQualified = {},
  isDisqualified = true,
  onClickDisqualified = {},
  isMoveNew = true,
  onClickMoveNew = {},
  isScreening = true,
  onClickScreening = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, 'select-actions-dropdown')}
      data-w-id='25c1b94f-ec29-f877-2c7c-942a68b9f2ee'
      tag='div'
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          'select-actions-dropdown-trigger',
          'text-color-white',
        )}
        tag='div'
      >
        <_Builtin.Block tag='div'>{'Actions'}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, 'icon-block', '_12x12')}
          tag='div'
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, 'svg-icon')}
            value='%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3DcurrentColor%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.64645%203.64645C1.82001%203.47288%202.08944%203.4536%202.28431%203.58859L2.35355%203.64645L6%207.293L9.64645%203.64645C9.82001%203.47288%2010.0894%203.4536%2010.2843%203.58859L10.3536%203.64645C10.5271%203.82001%2010.5464%204.08944%2010.4114%204.28431L10.3536%204.35355L6.35355%208.35355C6.17999%208.52712%205.91056%208.5464%205.71569%208.41141L5.64645%208.35355L1.64645%204.35355C1.45118%204.15829%201.45118%203.84171%201.64645%203.64645Z%22%2F%3E%0A%3C%2Fsvg%3E'
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          'select-actions-dropdown-content',
          'dropdown-body',
        )}
        tag='div'
      >
        <_Builtin.Block
          className={_utils.cx(_styles, 'select-actions-wrapper')}
          tag='div'
        >
          {isScreening ? (
            <_Builtin.Block
              className={_utils.cx(_styles, 'select-action-btn')}
              tag='div'
              {...onClickScreening}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, 'icon-block')}
                tag='div'
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, 'svg-icon', 'text-blue-500')}
                  value='%3Csvg%20width%3D%2218%22%20height%3D%2215%22%20viewBox%3D%220%200%2018%2015%22%20fill%3DcurrentColor%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.875%201.125H2.625C2.36979%201.125%202.16016%201.20703%201.99609%201.37109C1.83203%201.53516%201.75%201.74479%201.75%202V6.53906C1.42188%206.64844%201.13021%206.82161%200.875%207.05859V2C0.893229%201.50781%201.06641%201.09766%201.39453%200.769531C1.72266%200.441406%202.13281%200.268229%202.625%200.25H14.875C15.3672%200.268229%2015.7773%200.441406%2016.1055%200.769531C16.4336%201.09766%2016.6068%201.50781%2016.625%202V7.03125C16.3698%206.8125%2016.0781%206.63932%2015.75%206.51172V2C15.75%201.74479%2015.668%201.53516%2015.5039%201.37109C15.3398%201.20703%2015.1302%201.125%2014.875%201.125ZM2.625%209.875C2.88021%209.875%203.08984%209.79297%203.25391%209.62891C3.41797%209.46484%203.5%209.25521%203.5%209C3.5%208.74479%203.41797%208.53516%203.25391%208.37109C3.08984%208.20703%202.88021%208.125%202.625%208.125C2.36979%208.125%202.16016%208.20703%201.99609%208.37109C1.83203%208.53516%201.75%208.74479%201.75%209C1.75%209.25521%201.83203%209.46484%201.99609%209.62891C2.16016%209.79297%202.36979%209.875%202.625%209.875ZM2.625%207.25C3.28125%207.26823%203.78255%207.5599%204.12891%208.125C4.45703%208.70833%204.45703%209.29167%204.12891%209.875C3.78255%2010.4401%203.28125%2010.7318%202.625%2010.75C1.96875%2010.7318%201.46745%2010.4401%201.12109%209.875C0.792969%209.29167%200.792969%208.70833%201.12109%208.125C1.46745%207.5599%201.96875%207.26823%202.625%207.25ZM8.75%209.875C9.00521%209.875%209.21484%209.79297%209.37891%209.62891C9.54297%209.46484%209.625%209.25521%209.625%209C9.625%208.74479%209.54297%208.53516%209.37891%208.37109C9.21484%208.20703%209.00521%208.125%208.75%208.125C8.49479%208.125%208.28516%208.20703%208.12109%208.37109C7.95703%208.53516%207.875%208.74479%207.875%209C7.875%209.25521%207.95703%209.46484%208.12109%209.62891C8.28516%209.79297%208.49479%209.875%208.75%209.875ZM8.75%207.25C9.40625%207.26823%209.90755%207.5599%2010.2539%208.125C10.582%208.70833%2010.582%209.29167%2010.2539%209.875C9.90755%2010.4401%209.40625%2010.7318%208.75%2010.75C8.09375%2010.7318%207.59245%2010.4401%207.24609%209.875C6.91797%209.29167%206.91797%208.70833%207.24609%208.125C7.59245%207.5599%208.09375%207.26823%208.75%207.25ZM15.75%209C15.75%208.74479%2015.668%208.53516%2015.5039%208.37109C15.3398%208.20703%2015.1302%208.125%2014.875%208.125C14.6198%208.125%2014.4102%208.20703%2014.2461%208.37109C14.082%208.53516%2014%208.74479%2014%209C14%209.25521%2014.082%209.46484%2014.2461%209.62891C14.4102%209.79297%2014.6198%209.875%2014.875%209.875C15.1302%209.875%2015.3398%209.79297%2015.5039%209.62891C15.668%209.46484%2015.75%209.25521%2015.75%209ZM13.125%209C13.1432%208.34375%2013.4349%207.84245%2014%207.49609C14.5833%207.16797%2015.1667%207.16797%2015.75%207.49609C16.3151%207.84245%2016.6068%208.34375%2016.625%209C16.6068%209.65625%2016.3151%2010.1576%2015.75%2010.5039C15.1667%2010.832%2014.5833%2010.832%2014%2010.5039C13.4349%2010.1576%2013.1432%209.65625%2013.125%209ZM0.875%2013.375V13.8125C0.856771%2014.0859%200.710938%2014.2318%200.4375%2014.25C0.164062%2014.2318%200.0182292%2014.0859%200%2013.8125V13.375C0.0182292%2012.8828%200.191406%2012.4727%200.519531%2012.1445C0.847656%2011.8164%201.25781%2011.6432%201.75%2011.625H3.5C3.99219%2011.6432%204.40234%2011.8164%204.73047%2012.1445C5.05859%2012.4727%205.23177%2012.8828%205.25%2013.375V13.8125C5.23177%2014.0859%205.08594%2014.2318%204.8125%2014.25C4.53906%2014.2318%204.39323%2014.0859%204.375%2013.8125V13.375C4.375%2013.1198%204.29297%2012.9102%204.12891%2012.7461C3.96484%2012.582%203.75521%2012.5%203.5%2012.5H1.75C1.49479%2012.5%201.28516%2012.582%201.12109%2012.7461C0.957031%2012.9102%200.875%2013.1198%200.875%2013.375ZM7.875%2012.5C7.61979%2012.5%207.41016%2012.582%207.24609%2012.7461C7.08203%2012.9102%207%2013.1198%207%2013.375V13.8125C6.98177%2014.0859%206.83594%2014.2318%206.5625%2014.25C6.28906%2014.2318%206.14323%2014.0859%206.125%2013.8125V13.375C6.14323%2012.8828%206.31641%2012.4727%206.64453%2012.1445C6.97266%2011.8164%207.38281%2011.6432%207.875%2011.625H9.625C10.1172%2011.6432%2010.5273%2011.8164%2010.8555%2012.1445C11.1836%2012.4727%2011.3568%2012.8828%2011.375%2013.375V13.8125C11.3568%2014.0859%2011.2109%2014.2318%2010.9375%2014.25C10.6641%2014.2318%2010.5182%2014.0859%2010.5%2013.8125V13.375C10.5%2013.1198%2010.418%2012.9102%2010.2539%2012.7461C10.0898%2012.582%209.88021%2012.5%209.625%2012.5H7.875ZM13.125%2013.375V13.8125C13.1068%2014.0859%2012.9609%2014.2318%2012.6875%2014.25C12.4141%2014.2318%2012.2682%2014.0859%2012.25%2013.8125V13.375C12.2682%2012.8828%2012.4414%2012.4727%2012.7695%2012.1445C13.0977%2011.8164%2013.5078%2011.6432%2014%2011.625H15.75C16.2422%2011.6432%2016.6523%2011.8164%2016.9805%2012.1445C17.3086%2012.4727%2017.4818%2012.8828%2017.5%2013.375V13.8125C17.4818%2014.0859%2017.3359%2014.2318%2017.0625%2014.25C16.7891%2014.2318%2016.6432%2014.0859%2016.625%2013.8125V13.375C16.625%2013.1198%2016.543%2012.9102%2016.3789%2012.7461C16.2148%2012.582%2016.0052%2012.5%2015.75%2012.5H14C13.7448%2012.5%2013.5352%2012.582%2013.3711%2012.7461C13.207%2012.9102%2013.125%2013.1198%2013.125%2013.375Z%22%2F%3E%0A%3C%2Fsvg%3E'
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, 'fw-semibold', 'text-blue-500')}
                tag='div'
              >
                {'Send Screening'}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {isInterview ? (
            <_Builtin.Block
              className={_utils.cx(_styles, 'select-action-btn')}
              tag='div'
              {...onClickInterview}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, 'icon-block')}
                tag='div'
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, 'svg-icon', 'text-fuschia-600')}
                  value='%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.74253%205.28348H7.44824L9.12824%202.09491C9.17967%201.96634%209.11967%201.85491%208.98253%201.85491H6.47967C6.34253%201.85491%206.18824%201.96634%206.13681%202.09491L4.88538%205.0092C4.82538%205.14634%204.88538%205.28348%205.02253%205.28348H6.14538L4.92824%208.77205C4.83396%209.02062%204.90253%209.23491%205.21967%208.95205L8.75967%205.61777C8.95681%205.42062%208.94824%205.28348%208.74253%205.28348ZM3.57306%2012.8203L6.82415%209.5692H13.0017V0.997768H1.00167V9.5692H3.5731V9.99777L3.57306%2012.8203ZM2.71596%2010.4263H1.00167C0.524981%2010.4263%200.144531%2010.0459%200.144531%209.5692V0.997768C0.144531%200.521074%200.524981%200.140625%201.00167%200.140625H13.0017C13.4784%200.140625%2013.8588%200.521074%2013.8588%200.997768V9.5692C13.8588%2010.0459%2013.4784%2010.4263%2013.0017%2010.4263H7.17919L4.17314%2013.4324C3.92826%2013.6725%203.56383%2013.7435%203.2467%2013.6129C2.92958%2013.4823%202.72082%2013.1753%202.71596%2012.8263V10.4263Z%22%20fill%3D%22currentColor%2F%22%3E%0A%3C%2Fpath%3E%3C%2Fsvg%3E'
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  'fw-semibold',
                  'text-fuschia-600',
                )}
                tag='div'
              >
                {'Start Assessment'}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {isQualified ? (
            <_Builtin.Block
              className={_utils.cx(_styles, 'select-action-btn')}
              tag='div'
              {...onClickQualified}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, 'icon-block')}
                tag='div'
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, 'svg-icon', 'text-green-500')}
                  value='%3Csvg%20width%3D%2217%22%20height%3D%2214%22%20viewbox%3D%220%200%2017%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.97422%204.125C3.97422%204.55156%204.08086%204.94531%204.29414%205.30625C4.50742%205.66719%204.79453%205.9543%205.15547%206.16758C5.53281%206.38086%205.92656%206.4875%206.33672%206.4875C6.74688%206.4875%207.14063%206.38086%207.51797%206.16758C7.87891%205.9543%208.16602%205.66719%208.3793%205.30625C8.59258%204.94531%208.69922%204.55156%208.69922%204.125C8.69922%203.69844%208.59258%203.30469%208.3793%202.94375C8.16602%202.58281%207.87891%202.2957%207.51797%202.08242C7.14063%201.86914%206.74688%201.7625%206.33672%201.7625C5.92656%201.7625%205.53281%201.86914%205.15547%202.08242C4.79453%202.2957%204.50742%202.58281%204.29414%202.94375C4.08086%203.30469%203.97422%203.69844%203.97422%204.125ZM7.46875%209.24375H5.20469C4.20391%209.27656%203.36719%209.62109%202.69453%2010.2773C2.00547%2010.95%201.64453%2011.7867%201.61172%2012.7875H11.0617C11.0289%2011.7867%2010.668%2010.95%209.97891%2010.2773C9.30625%209.62109%208.46953%209.27656%207.46875%209.24375ZM6.33672%207.275C5.7625%207.275%205.2375%207.13555%204.76172%206.85664C4.28594%206.57773%203.90039%206.19219%203.60508%205.7C3.32617%205.20781%203.18672%204.68281%203.18672%204.125C3.18672%203.56719%203.32617%203.04219%203.60508%202.55C3.90039%202.05781%204.28594%201.67227%204.76172%201.39336C5.2375%201.11445%205.7625%200.975001%206.33672%200.975001C6.91094%200.975001%207.43594%201.11445%207.91172%201.39336C8.3875%201.67227%208.77305%202.05781%209.06836%202.55C9.34727%203.04219%209.48672%203.56719%209.48672%204.125C9.48672%204.68281%209.34727%205.20781%209.06836%205.7C8.77305%206.19219%208.3875%206.57773%207.91172%206.85664C7.43594%207.13555%206.91094%207.275%206.33672%207.275ZM5.20469%208.45625H7.46875C8.69922%208.48906%209.73281%208.91563%2010.5695%209.73594C11.3898%2010.5727%2011.8164%2011.6063%2011.8492%2012.8367C11.8492%2013.05%2011.7754%2013.2223%2011.6277%2013.3535C11.4965%2013.5012%2011.3242%2013.575%2011.1109%2013.575H1.5625C1.34922%2013.575%201.17695%2013.5012%201.0457%2013.3535C0.898047%2013.2223%200.824219%2013.05%200.824219%2012.8367C0.857032%2011.6063%201.28359%2010.5727%202.10391%209.73594C2.94063%208.91563%203.97422%208.48906%205.20469%208.45625ZM16.4512%205.57695L13.3012%208.72695C13.1207%208.89102%2012.9402%208.89102%2012.7598%208.72695L11.1848%207.15195C11.0207%206.97148%2011.0207%206.79102%2011.1848%206.61055C11.3652%206.44648%2011.5457%206.44648%2011.7262%206.61055L13.0305%207.89023L15.9098%205.03555C16.0902%204.87148%2016.2707%204.87148%2016.4512%205.03555C16.6152%205.21602%2016.6152%205.39648%2016.4512%205.57695Z%22%20fill%3D%22currentColor%3B%22%20fill-opacity%3A1%3B%22%3D%22%22%2F%3E%0A%3C%2Fsvg%3E'
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, 'fw-semibold', 'text-green-500')}
                tag='div'
              >
                {'Move to Qualified'}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {isDisqualified ? (
            <_Builtin.Block
              className={_utils.cx(_styles, 'select-action-btn')}
              tag='div'
              {...onClickDisqualified}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, 'icon-block')}
                tag='div'
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, 'svg-icon', 'text-red-500')}
                  value='%3Csvg%20width%3D%2217%22%20height%3D%2214%22%20viewbox%3D%220%200%2017%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.97422%204.125C3.97422%204.55156%204.08086%204.94531%204.29414%205.30625C4.50742%205.66719%204.79453%205.9543%205.15547%206.16758C5.53281%206.38086%205.92656%206.4875%206.33672%206.4875C6.74688%206.4875%207.14063%206.38086%207.51797%206.16758C7.87891%205.9543%208.16602%205.66719%208.3793%205.30625C8.59258%204.94531%208.69922%204.55156%208.69922%204.125C8.69922%203.69844%208.59258%203.30469%208.3793%202.94375C8.16602%202.58281%207.87891%202.2957%207.51797%202.08242C7.14063%201.86914%206.74688%201.7625%206.33672%201.7625C5.92656%201.7625%205.53281%201.86914%205.15547%202.08242C4.79453%202.2957%204.50742%202.58281%204.29414%202.94375C4.08086%203.30469%203.97422%203.69844%203.97422%204.125ZM7.46875%209.24375H5.20469C4.20391%209.27656%203.36719%209.62109%202.69453%2010.2773C2.00547%2010.95%201.64453%2011.7867%201.61172%2012.7875H11.0617C11.0289%2011.7867%2010.668%2010.95%209.97891%2010.2773C9.30625%209.62109%208.46953%209.27656%207.46875%209.24375ZM6.33672%207.275C5.7625%207.275%205.2375%207.13555%204.76172%206.85664C4.28594%206.57773%203.90039%206.19219%203.60508%205.7C3.32617%205.20781%203.18672%204.68281%203.18672%204.125C3.18672%203.56719%203.32617%203.04219%203.60508%202.55C3.90039%202.05781%204.28594%201.67227%204.76172%201.39336C5.2375%201.11445%205.7625%200.975001%206.33672%200.975001C6.91094%200.975001%207.43594%201.11445%207.91172%201.39336C8.3875%201.67227%208.77305%202.05781%209.06836%202.55C9.34727%203.04219%209.48672%203.56719%209.48672%204.125C9.48672%204.68281%209.34727%205.20781%209.06836%205.7C8.77305%206.19219%208.3875%206.57773%207.91172%206.85664C7.43594%207.13555%206.91094%207.275%206.33672%207.275ZM5.20469%208.45625H7.46875C8.69922%208.48906%209.73281%208.91563%2010.5695%209.73594C11.3898%2010.5727%2011.8164%2011.6063%2011.8492%2012.8367C11.8492%2013.05%2011.7754%2013.2223%2011.6277%2013.3535C11.4965%2013.5012%2011.3242%2013.575%2011.1109%2013.575H1.5625C1.34922%2013.575%201.17695%2013.5012%201.0457%2013.3535C0.898047%2013.2223%200.824219%2013.05%200.824219%2012.8367C0.857032%2011.6063%201.28359%2010.5727%202.10391%209.73594C2.94063%208.91563%203.97422%208.48906%205.20469%208.45625ZM12.366%204.6418C12.5465%204.47773%2012.727%204.47773%2012.9074%204.6418L14.2117%205.92148L15.516%204.6418C15.6965%204.47773%2015.877%204.47773%2016.0574%204.6418C16.2215%204.82227%2016.2215%205.00273%2016.0574%205.1832L14.7777%206.4875L16.0574%207.7918C16.2215%207.97227%2016.2215%208.15273%2016.0574%208.3332C15.877%208.49727%2015.6965%208.49727%2015.516%208.3332L14.2117%207.05352L12.9074%208.3332C12.727%208.49727%2012.5465%208.49727%2012.366%208.3332C12.202%208.15273%2012.202%207.97227%2012.366%207.7918L13.6457%206.4875L12.366%205.1832C12.202%205.00273%2012.202%204.82227%2012.366%204.6418Z%22%20fill%3D%22currentColor%3B%22%20fill-opacity%3A1%3B%22%3D%22%22%2F%3E%0A%3C%2Fsvg%3E'
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, 'fw-semibold', 'text-red-500')}
                tag='div'
              >
                {'Mark Disqualified'}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {isMoveNew ? (
            <_Builtin.Block
              className={_utils.cx(_styles, 'select-action-btn')}
              tag='div'
              {...onClickMoveNew}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, 'icon-block')}
                tag='div'
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, 'svg-icon')}
                  value='%3Csvg%20width%3D%2218%22%20height%3D%2215%22%20viewBox%3D%220%200%2018%2015%22%20fill%3DcurrentColor%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.5%203.75C3.5%204.22396%203.61849%204.66146%203.85547%205.0625C4.09245%205.46354%204.41146%205.78255%204.8125%206.01953C5.23177%206.25651%205.66927%206.375%206.125%206.375C6.58073%206.375%207.01823%206.25651%207.4375%206.01953C7.83854%205.78255%208.15755%205.46354%208.39453%205.0625C8.63151%204.66146%208.75%204.22396%208.75%203.75C8.75%203.27604%208.63151%202.83854%208.39453%202.4375C8.15755%202.03646%207.83854%201.71745%207.4375%201.48047C7.01823%201.24349%206.58073%201.125%206.125%201.125C5.66927%201.125%205.23177%201.24349%204.8125%201.48047C4.41146%201.71745%204.09245%202.03646%203.85547%202.4375C3.61849%202.83854%203.5%203.27604%203.5%203.75ZM7.38281%209.4375H4.86719C3.75521%209.47396%202.82552%209.85677%202.07812%2010.5859C1.3125%2011.3333%200.911458%2012.263%200.875%2013.375H11.375C11.3385%2012.263%2010.9375%2011.3333%2010.1719%2010.5859C9.42448%209.85677%208.49479%209.47396%207.38281%209.4375ZM6.125%207.25C5.48698%207.25%204.90365%207.09505%204.375%206.78516C3.84635%206.47526%203.41797%206.04688%203.08984%205.5C2.77995%204.95312%202.625%204.36979%202.625%203.75C2.625%203.13021%202.77995%202.54688%203.08984%202C3.41797%201.45312%203.84635%201.02474%204.375%200.714844C4.90365%200.404948%205.48698%200.25%206.125%200.25C6.76302%200.25%207.34635%200.404948%207.875%200.714844C8.40365%201.02474%208.83203%201.45312%209.16016%202C9.47005%202.54688%209.625%203.13021%209.625%203.75C9.625%204.36979%209.47005%204.95312%209.16016%205.5C8.83203%206.04688%208.40365%206.47526%207.875%206.78516C7.34635%207.09505%206.76302%207.25%206.125%207.25ZM4.86719%208.5625H7.38281C8.75%208.59896%209.89844%209.07292%2010.8281%209.98438C11.7396%2010.9141%2012.2135%2012.0625%2012.25%2013.4297C12.25%2013.6667%2012.168%2013.8581%2012.0039%2014.0039C11.8581%2014.168%2011.6667%2014.25%2011.4297%2014.25H0.820312C0.583333%2014.25%200.391927%2014.168%200.246094%2014.0039C0.0820312%2013.8581%200%2013.6667%200%2013.4297C0.0364583%2012.0625%200.510417%2010.9141%201.42188%209.98438C2.35156%209.07292%203.5%208.59896%204.86719%208.5625ZM16.6523%2014.25H12.9062C13.0521%2014.013%2013.125%2013.7396%2013.125%2013.4297C13.125%2013.4297%2013.125%2013.4206%2013.125%2013.4023C13.125%2013.4023%2013.125%2013.3932%2013.125%2013.375H16.625C16.5885%2012.3906%2016.2422%2011.5612%2015.5859%2010.8867C14.9115%2010.2305%2014.082%209.89323%2013.0977%209.875H11.8945C11.6393%209.5651%2011.3568%209.28255%2011.0469%209.02734C11.1745%209.00911%2011.293%209%2011.4023%209H13.0977C14.3372%209.03646%2015.3763%209.46484%2016.2148%2010.2852C17.0352%2011.1237%2017.4635%2012.1628%2017.5%2013.4023C17.5%2013.6393%2017.418%2013.8398%2017.2539%2014.0039C17.0898%2014.168%2016.8893%2014.25%2016.6523%2014.25ZM11.8125%207.25C10.9375%207.23177%2010.2174%206.93099%209.65234%206.34766C9.83464%206.11068%209.98958%205.84635%2010.1172%205.55469C10.5365%206.08333%2011.1016%206.35677%2011.8125%206.375C12.4323%206.35677%2012.9518%206.14714%2013.3711%205.74609C13.7721%205.32682%2013.9818%204.80729%2014%204.1875C13.9818%203.56771%2013.7721%203.04818%2013.3711%202.62891C12.9518%202.22786%2012.4323%202.01823%2011.8125%202C11.2292%202.01823%2010.737%202.20964%2010.3359%202.57422C10.2448%202.26432%2010.1354%201.98177%2010.0078%201.72656C10.5182%201.34375%2011.1198%201.14323%2011.8125%201.125C12.6875%201.14323%2013.4076%201.44401%2013.9727%202.02734C14.556%202.59245%2014.8568%203.3125%2014.875%204.1875C14.8568%205.0625%2014.556%205.78255%2013.9727%206.34766C13.4076%206.93099%2012.6875%207.23177%2011.8125%207.25Z%22%2F%3E%0A%3C%2Fsvg%3E'
                />
              </_Builtin.Block>
              <_Builtin.Block tag='div'>{'Move to New'}</_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
