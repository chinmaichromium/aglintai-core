"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Text } from "./Text";
import * as _utils from "./utils";
import _styles from "./TeamListItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1546":{"id":"e-1546","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-587","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1547"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"734bebfa-3d4c-48c0-8642-09598032cc59","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"734bebfa-3d4c-48c0-8642-09598032cc59","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710312098777},"e-1547":{"id":"e-1547","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-588","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1546"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"734bebfa-3d4c-48c0-8642-09598032cc59","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"734bebfa-3d4c-48c0-8642-09598032cc59","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710312098781},"e-1576":{"id":"e-1576","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1577"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972142},"e-1577":{"id":"e-1577","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1576"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"627f9dba-f186-82c1-a71f-5a95f8ccc427","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718275972144},"e-1578":{"id":"e-1578","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-613","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1579"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624481},"e-1579":{"id":"e-1579","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-614","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1578"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bae7064-a4ab-5c07-f32d-92c0deb12e6f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718276624482}},"actionLists":{"a-587":{"id":"a-587","title":"Team Actions Hover In","actionItemGroups":[{"actionItems":[{"id":"a-587-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".team-action-list-wrap","selectorGuids":["1314adde-fa10-5262-b802-853b4c29d792"]},"value":0,"unit":""}},{"id":"a-587-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".team-action-list-wrap","selectorGuids":["1314adde-fa10-5262-b802-853b4c29d792"]},"value":"none"}}]},{"actionItems":[{"id":"a-587-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".team-action-list-wrap","selectorGuids":["1314adde-fa10-5262-b802-853b4c29d792"]},"value":1,"unit":""}},{"id":"a-587-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".team-action-list-wrap","selectorGuids":["1314adde-fa10-5262-b802-853b4c29d792"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1710312103325},"a-588":{"id":"a-588","title":"Team Actions Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-588-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".team-action-list-wrap","selectorGuids":["1314adde-fa10-5262-b802-853b4c29d792"]},"value":0,"unit":""}},{"id":"a-588-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".team-action-list-wrap","selectorGuids":["1314adde-fa10-5262-b802-853b4c29d792"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1710312103325},"a-613":{"id":"a-613","title":"score pill hover in","actionItemGroups":[{"actionItems":[{"id":"a-613-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-613-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718275975402},"a-614":{"id":"a-614","title":"score pill hover out","actionItemGroups":[{"actionItems":[{"id":"a-614-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icons","selectorGuids":["c637f5c7-9613-2c22-7371-c11bf4042351"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718275975402}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TeamListItem({
  as: _Component = _Builtin.Block,
  slotUserRole,
  userStatusProps = {},
  userStatusText = "Active",
  dateText = "29 Aug 2023",
  onClickRemove = {},
  userName = "Roberto Carlos",
  userEmail = "roberto@sample.com",
  slotProfileImage,
  isDeleteVisible = true,
  onClickCancelInvite = {},
  isCancelInviteVisible = true,
  onClickEditInvite = {},
  isEditInviteVisible = true,
  textDepartment = "Sales",
  textDesignation = "DesignEngineer",
  textLocation = "29 Aug 2023",
  isActiveVisible = true,
  onClickActive = {},
  isSuspendVisible = true,
  onClickSuspend = {},
  onClickResetPassword = {},
  isResetPasswordVisible = false,
  textLastActive = "29 Aug 2023",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "team-table-list")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "tu-list-item")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "team-name-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "team-user-image-wrap")}
            tag="div"
          >
            {slotProfileImage ?? (
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/650c129b14ba3ec43088ffdd/6544ea9f949aaadda8d5c97d_michael-turner.jpeg"
              />
            )}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "one-line-clamp")}
            tag="div"
          >
            <Text content={userName} weight="medium" />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "user-status-wrap")}
            tag="div"
            {...userStatusProps}
          >
            <Text content={userStatusText} size="1" />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "user-detail-wrap")}
          tag="div"
        >
          <Text content={textDesignation} color="neutral" />
          <Text content={userEmail} color="neutral" />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "tu-list-item")}
        id={_utils.cx(
          _styles,
          "w-node-a60860aa-9493-87fc-f445-b3f1087efc93-087efc8b"
        )}
        tag="div"
      >
        {slotUserRole}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "tu-list-item")} tag="div">
        <Text content={textDepartment} />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "tu-list-item")} tag="div">
        <Text content={textLocation} />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "tu-list-item")}
        id={_utils.cx(
          _styles,
          "w-node-a60860aa-9493-87fc-f445-b3f1087efc98-087efc8b"
        )}
        tag="div"
      >
        <Text content={textLastActive} />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "three-dot-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "actions-team-card")}
          data-w-id="734bebfa-3d4c-48c0-8642-09598032cc59"
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icons")}
            value="%3Csvg%20width%3D%2214%22%20height%3D%2216%22%20viewbox%3D%220%200%2014%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.25%208C0.270833%207.33333%200.5625%206.83333%201.125%206.5C1.70833%206.16667%202.29167%206.16667%202.875%206.5C3.4375%206.83333%203.72917%207.33333%203.75%208C3.72917%208.66667%203.4375%209.16667%202.875%209.5C2.29167%209.83333%201.70833%209.83333%201.125%209.5C0.5625%209.16667%200.270833%208.66667%200.25%208ZM5.25%208C5.27083%207.33333%205.5625%206.83333%206.125%206.5C6.70833%206.16667%207.29167%206.16667%207.875%206.5C8.4375%206.83333%208.72917%207.33333%208.75%208C8.72917%208.66667%208.4375%209.16667%207.875%209.5C7.29167%209.83333%206.70833%209.83333%206.125%209.5C5.5625%209.16667%205.27083%208.66667%205.25%208ZM12%206.25C12.6667%206.27083%2013.1667%206.5625%2013.5%207.125C13.8333%207.70833%2013.8333%208.29167%2013.5%208.875C13.1667%209.4375%2012.6667%209.72917%2012%209.75C11.3333%209.72917%2010.8333%209.4375%2010.5%208.875C10.1667%208.29167%2010.1667%207.70833%2010.5%207.125C10.8333%206.5625%2011.3333%206.27083%2012%206.25Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "team-action-list-wrap")}
            tag="div"
          >
            {isEditInviteVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "team-action-item")}
                tag="div"
                {...onClickEditInvite}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2216%22%20height%3D%2217%22%20viewbox%3D%220%200%2016%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.2188%201.90625C14.0104%201.71875%2013.7708%201.625%2013.5%201.625C13.2292%201.625%2012.9896%201.71875%2012.7812%201.90625L11.9688%202.75L13.75%204.53125L14.5938%203.71875C14.7812%203.51042%2014.875%203.27083%2014.875%203C14.875%202.72917%2014.7812%202.48958%2014.5938%202.28125L14.2188%201.90625ZM5.90625%208.8125C5.78125%208.9375%205.69792%209.09375%205.65625%209.28125L5.15625%2011.3438L7.21875%2010.875C7.40625%2010.8125%207.5625%2010.7188%207.6875%2010.5938L13.0312%205.25L11.25%203.46875L5.90625%208.8125ZM12.0938%201.21875C12.5104%200.822917%2012.9792%200.625%2013.5%200.625C14.0417%200.625%2014.5104%200.822917%2014.9062%201.21875L15.2812%201.59375C15.6771%202.01042%2015.875%202.47917%2015.875%203C15.875%203.54167%2015.6771%204.01042%2015.2812%204.40625L8.40625%2011.3125C8.13542%2011.5833%207.8125%2011.7604%207.4375%2011.8438L4.625%2012.5C4.4375%2012.5208%204.28125%2012.4688%204.15625%2012.3438C4.03125%2012.2188%203.97917%2012.0729%204%2011.9062L4.65625%209.0625C4.73958%208.6875%204.91667%208.36458%205.1875%208.09375L12.0938%201.21875ZM2.5%202.5H6.5C6.8125%202.52083%206.97917%202.6875%207%203C6.97917%203.3125%206.8125%203.47917%206.5%203.5H2.5C2.08333%203.52083%201.72917%203.66667%201.4375%203.9375C1.16667%204.22917%201.02083%204.58333%201%205V14C1.02083%2014.4167%201.16667%2014.7708%201.4375%2015.0625C1.72917%2015.3333%202.08333%2015.4792%202.5%2015.5H11.5C11.9167%2015.4792%2012.2708%2015.3333%2012.5625%2015.0625C12.8333%2014.7708%2012.9792%2014.4167%2013%2014V10C13.0208%209.6875%2013.1875%209.52083%2013.5%209.5C13.8125%209.52083%2013.9792%209.6875%2014%2010V14C13.9792%2014.7083%2013.7396%2015.3021%2013.2812%2015.7812C12.8021%2016.2396%2012.2083%2016.4792%2011.5%2016.5H2.5C1.79167%2016.4792%201.19792%2016.2396%200.71875%2015.7812C0.260417%2015.3021%200.0208333%2014.7083%200%2014V5C0.0208333%204.29167%200.260417%203.69792%200.71875%203.21875C1.19792%202.76042%201.79167%202.52083%202.5%202.5Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Text content="Edit" />
              </_Builtin.Block>
            ) : null}
            {isCancelInviteVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "team-action-item")}
                tag="div"
                {...onClickCancelInvite}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewbox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5938%2015.2812L4.71875%205.40625C3.61458%206.67708%203.04167%208.20833%203%2010C3.02083%2011.3125%203.34375%2012.4896%203.96875%2013.5312C4.57292%2014.5938%205.40625%2015.4271%206.46875%2016.0312C7.51042%2016.6562%208.6875%2016.9792%2010%2017C11.7917%2016.9583%2013.3229%2016.3854%2014.5938%2015.2812ZM15.2812%2014.5938C16.3854%2013.3229%2016.9583%2011.7917%2017%2010C16.9792%208.6875%2016.6562%207.51042%2016.0312%206.46875C15.4271%205.40625%2014.5938%204.57292%2013.5312%203.96875C12.4896%203.34375%2011.3125%203.02083%2010%203C8.20833%203.04167%206.67708%203.61458%205.40625%204.71875L15.2812%2014.5938ZM2%2010C2.02083%208.54167%202.375%207.20833%203.0625%206C3.77083%204.79167%204.75%203.8125%206%203.0625C7.27083%202.35417%208.60417%202%2010%202C11.3958%202%2012.7292%202.35417%2014%203.0625C15.25%203.8125%2016.2292%204.79167%2016.9375%206C17.625%207.20833%2017.9792%208.54167%2018%2010C17.9792%2011.4583%2017.625%2012.7917%2016.9375%2014C16.2292%2015.2083%2015.25%2016.1875%2014%2016.9375C12.7292%2017.6458%2011.3958%2018%2010%2018C8.60417%2018%207.27083%2017.6458%206%2016.9375C4.75%2016.1875%203.77083%2015.2083%203.0625%2014C2.375%2012.7917%202.02083%2011.4583%202%2010Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Text content="Cancel Invite" color="error" />
              </_Builtin.Block>
            ) : null}
            {isResetPasswordVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "team-action-item")}
                tag="div"
                {...onClickResetPassword}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.875%204.5H7.875C7.64062%204.48438%207.51562%204.35938%207.5%204.125C7.51562%203.89062%207.64062%203.76563%207.875%203.75H9.89062C9.5%203.0625%208.96094%202.51562%208.27344%202.10938C7.60156%201.71875%206.84375%201.51563%206%201.5C4.71875%201.53125%203.65625%201.96875%202.8125%202.8125C1.96875%203.65625%201.53125%204.71875%201.5%206C1.53125%207.28125%201.96875%208.34375%202.8125%209.1875C3.65625%2010.0312%204.71875%2010.4688%206%2010.5C6.79688%2010.4844%207.52344%2010.2969%208.17969%209.9375C8.83594%209.5625%209.36719%209.0625%209.77344%208.4375C9.86719%208.3125%209.98438%208.25%2010.125%208.25C10.2812%208.25%2010.3906%208.3125%2010.4531%208.4375C10.5156%208.54688%2010.5156%208.66406%2010.4531%208.78906C9.96875%209.53906%209.34375%2010.1328%208.57812%2010.5703C7.8125%2011.0078%206.95312%2011.2344%206%2011.25C5.01562%2011.2344%204.13281%2010.9922%203.35156%2010.5234C2.55469%2010.0703%201.92969%209.44531%201.47656%208.64844C1.00781%207.86719%200.765625%206.98438%200.75%206C0.765625%205.01562%201.00781%204.13281%201.47656%203.35156C1.92969%202.55469%202.55469%201.92969%203.35156%201.47656C4.13281%201.00781%205.01562%200.765625%206%200.75C6.96875%200.765625%207.84375%201%208.625%201.45312C9.40625%201.90625%2010.0312%202.52344%2010.5%203.30469V1.125C10.5156%200.890625%2010.6406%200.765625%2010.875%200.75C11.1094%200.765625%2011.2344%200.890625%2011.25%201.125V4.125C11.2344%204.35938%2011.1094%204.48438%2010.875%204.5Z%22%20fill%3D%22%231F2A37%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Text content="Reset Password" />
              </_Builtin.Block>
            ) : null}
            {isSuspendVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "team-action-item")}
                tag="div"
                {...onClickSuspend}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewbox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4%206C4%206.54167%204.13542%207.04167%204.40625%207.5C4.67708%207.95833%205.04167%208.32292%205.5%208.59375C5.97917%208.86458%206.47917%209%207%209C7.52083%209%208.02083%208.86458%208.5%208.59375C8.95833%208.32292%209.32292%207.95833%209.59375%207.5C9.86458%207.04167%2010%206.54167%2010%206C10%205.45833%209.86458%204.95833%209.59375%204.5C9.32292%204.04167%208.95833%203.67708%208.5%203.40625C8.02083%203.13542%207.52083%203%207%203C6.47917%203%205.97917%203.13542%205.5%203.40625C5.04167%203.67708%204.67708%204.04167%204.40625%204.5C4.13542%204.95833%204%205.45833%204%206ZM8.4375%2012.5H5.5625C4.29167%2012.5417%203.22917%2012.9792%202.375%2013.8125C1.5%2014.6667%201.04167%2015.7292%201%2017H13C12.9583%2015.7292%2012.5%2014.6667%2011.625%2013.8125C10.7708%2012.9792%209.70833%2012.5417%208.4375%2012.5ZM7%2010C6.27083%2010%205.60417%209.82292%205%209.46875C4.39583%209.11458%203.90625%208.625%203.53125%208C3.17708%207.375%203%206.70833%203%206C3%205.29167%203.17708%204.625%203.53125%204C3.90625%203.375%204.39583%202.88542%205%202.53125C5.60417%202.17708%206.27083%202%207%202C7.72917%202%208.39583%202.17708%209%202.53125C9.60417%202.88542%2010.0938%203.375%2010.4688%204C10.8229%204.625%2011%205.29167%2011%206C11%206.70833%2010.8229%207.375%2010.4688%208C10.0938%208.625%209.60417%209.11458%209%209.46875C8.39583%209.82292%207.72917%2010%207%2010ZM5.5625%2011.5H8.4375C10%2011.5417%2011.3125%2012.0833%2012.375%2013.125C13.4167%2014.1875%2013.9583%2015.5%2014%2017.0625C14%2017.3333%2013.9062%2017.5521%2013.7188%2017.7188C13.5521%2017.9062%2013.3333%2018%2013.0625%2018H0.9375C0.666667%2018%200.447917%2017.9062%200.28125%2017.7188C0.09375%2017.5521%200%2017.3333%200%2017.0625C0.0416667%2015.5%200.583333%2014.1875%201.625%2013.125C2.6875%2012.0833%204%2011.5417%205.5625%2011.5ZM14.6562%206.65625C14.8854%206.44792%2015.1146%206.44792%2015.3438%206.65625L17%208.28125L18.6562%206.65625C18.8854%206.44792%2019.1146%206.44792%2019.3438%206.65625C19.5521%206.88542%2019.5521%207.11458%2019.3438%207.34375L17.7188%209L19.3438%2010.6562C19.5521%2010.8854%2019.5521%2011.1146%2019.3438%2011.3438C19.1146%2011.5521%2018.8854%2011.5521%2018.6562%2011.3438L17%209.71875L15.3438%2011.3438C15.1146%2011.5521%2014.8854%2011.5521%2014.6562%2011.3438C14.4479%2011.1146%2014.4479%2010.8854%2014.6562%2010.6562L16.2812%209L14.6562%207.34375C14.4479%207.11458%2014.4479%206.88542%2014.6562%206.65625Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Text content="Suspend" />
              </_Builtin.Block>
            ) : null}
            {isActiveVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "team-action-item")}
                tag="div"
                {...onClickActive}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons")}
                  value="%3Csvg%20width%3D%2221%22%20height%3D%2220%22%20viewbox%3D%220%200%2021%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4%206C4%206.54167%204.13542%207.04167%204.40625%207.5C4.67708%207.95833%205.04167%208.32292%205.5%208.59375C5.97917%208.86458%206.47917%209%207%209C7.52083%209%208.02083%208.86458%208.5%208.59375C8.95833%208.32292%209.32292%207.95833%209.59375%207.5C9.86458%207.04167%2010%206.54167%2010%206C10%205.45833%209.86458%204.95833%209.59375%204.5C9.32292%204.04167%208.95833%203.67708%208.5%203.40625C8.02083%203.13542%207.52083%203%207%203C6.47917%203%205.97917%203.13542%205.5%203.40625C5.04167%203.67708%204.67708%204.04167%204.40625%204.5C4.13542%204.95833%204%205.45833%204%206ZM8.4375%2012.5H5.5625C4.29167%2012.5417%203.22917%2012.9792%202.375%2013.8125C1.5%2014.6667%201.04167%2015.7292%201%2017H13C12.9583%2015.7292%2012.5%2014.6667%2011.625%2013.8125C10.7708%2012.9792%209.70833%2012.5417%208.4375%2012.5ZM7%2010C6.27083%2010%205.60417%209.82292%205%209.46875C4.39583%209.11458%203.90625%208.625%203.53125%208C3.17708%207.375%203%206.70833%203%206C3%205.29167%203.17708%204.625%203.53125%204C3.90625%203.375%204.39583%202.88542%205%202.53125C5.60417%202.17708%206.27083%202%207%202C7.72917%202%208.39583%202.17708%209%202.53125C9.60417%202.88542%2010.0938%203.375%2010.4688%204C10.8229%204.625%2011%205.29167%2011%206C11%206.70833%2010.8229%207.375%2010.4688%208C10.0938%208.625%209.60417%209.11458%209%209.46875C8.39583%209.82292%207.72917%2010%207%2010ZM5.5625%2011.5H8.4375C10%2011.5417%2011.3125%2012.0833%2012.375%2013.125C13.4167%2014.1875%2013.9583%2015.5%2014%2017.0625C14%2017.3333%2013.9062%2017.5521%2013.7188%2017.7188C13.5521%2017.9062%2013.3333%2018%2013.0625%2018H0.9375C0.666667%2018%200.447917%2017.9062%200.28125%2017.7188C0.09375%2017.5521%200%2017.3333%200%2017.0625C0.0416667%2015.5%200.583333%2014.1875%201.625%2013.125C2.6875%2012.0833%204%2011.5417%205.5625%2011.5ZM19.8438%207.84375L15.8438%2011.8438C15.6146%2012.0521%2015.3854%2012.0521%2015.1562%2011.8438L13.1562%209.84375C12.9479%209.61458%2012.9479%209.38542%2013.1562%209.15625C13.3854%208.94792%2013.6146%208.94792%2013.8438%209.15625L15.5%2010.7812L19.1562%207.15625C19.3854%206.94792%2019.6146%206.94792%2019.8438%207.15625C20.0521%207.38542%2020.0521%207.61458%2019.8438%207.84375Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Text content="Make Active" />
              </_Builtin.Block>
            ) : null}
            {isDeleteVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "team-action-item")}
                tag="div"
                {...onClickRemove}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icons", "start")}
                  value="%3Csvg%20width%3D%2220%22%20height%3D%2217%22%20viewbox%3D%220%200%2020%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.5625%201.5C5.375%201.5%205.22917%201.58333%205.125%201.75L4.65625%202.5H9.34375L8.875%201.75C8.77083%201.58333%208.625%201.5%208.4375%201.5H5.5625ZM10.5312%202.5H12H13H13.5C13.8125%202.52083%2013.9792%202.6875%2014%203C13.9792%203.3125%2013.8125%203.47917%2013.5%203.5H12.9375L12.125%2014.6562C12.0833%2015.1771%2011.875%2015.6146%2011.5%2015.9688C11.125%2016.3021%2010.6667%2016.4792%2010.125%2016.5H3.875C3.33333%2016.4792%202.875%2016.3021%202.5%2015.9688C2.125%2015.6146%201.91667%2015.1771%201.875%2014.6562L1.0625%203.5H0.5C0.1875%203.47917%200.0208333%203.3125%200%203C0.0208333%202.6875%200.1875%202.52083%200.5%202.5H1H2H3.46875L4.28125%201.21875C4.59375%200.760417%205.02083%200.520833%205.5625%200.5H8.4375C8.97917%200.520833%209.40625%200.760417%209.71875%201.21875L10.5312%202.5ZM11.9375%203.5H2.0625L2.875%2014.5625C2.89583%2014.8333%203%2015.0521%203.1875%2015.2188C3.375%2015.4062%203.60417%2015.5%203.875%2015.5H10.125C10.3958%2015.5%2010.625%2015.4062%2010.8125%2015.2188C11%2015.0521%2011.1042%2014.8333%2011.125%2014.5625L11.9375%203.5Z%22%20fill%3D%22%23D93F4C%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Text content="Delete" />
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
