import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AssessmentError.module.css";

export function AssessmentError({
  as: _Component = _Builtin.Block,
  onClickRetry = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "assessment_empty")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "embed_flex")}
        value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14%206V23.375L11.9375%2026.75C11.9792%2026.5%2012%2026.25%2012%2026V16H4V26C4.04167%2027.125%204.4375%2028.0625%205.1875%2028.8125C5.9375%2029.5625%206.875%2029.9583%208%2030C9%2030%209.85417%2029.6875%2010.5625%2029.0625C10.1875%2029.8958%2010%2030.7708%2010%2031.6875C9.375%2031.8958%208.70833%2032%208%2032C6.29167%2031.9583%204.875%2031.375%203.75%2030.25C2.625%2029.125%202.04167%2027.7083%202%2026V6H1C0.375%205.95833%200.0416667%205.625%200%205C0.0416667%204.375%200.375%204.04167%201%204H2H4H12H14H15C15.625%204.04167%2015.9583%204.375%2016%205C15.9583%205.625%2015.625%205.95833%2015%206H14ZM4%206V14H12V6H4ZM19%204H33C33.625%204.04167%2033.9583%204.375%2034%205C33.9583%205.625%2033.625%205.95833%2033%206H32V17.75L39.375%2029.75C39.7917%2030.4167%2040%2031.125%2040%2031.875C39.9583%2033.0417%2039.5625%2034.0208%2038.8125%2034.8125C38.0208%2035.5625%2037.0417%2035.9583%2035.875%2036H16.125C14.9583%2035.9583%2013.9792%2035.5625%2013.1875%2034.8125C12.4375%2034.0208%2012.0417%2033.0417%2012%2031.875C12%2031.125%2012.2083%2030.4167%2012.625%2029.75L20%2017.75V6H19C18.375%205.95833%2018.0417%205.625%2018%205C18.0417%204.375%2018.375%204.04167%2019%204ZM30%206H22V18C22%2018.2083%2021.9583%2018.375%2021.875%2018.5L18.5%2024H33.5L30.125%2018.5C30.0417%2018.375%2030%2018.2083%2030%2018V6ZM14.3125%2030.75C14.1042%2031.125%2014%2031.5%2014%2031.875C14%2032.5%2014.2083%2033%2014.625%2033.375C15.0417%2033.7917%2015.5417%2034%2016.125%2034H35.875C36.4583%2034%2036.9583%2033.7917%2037.375%2033.375C37.7917%2033%2038%2032.5%2038%2031.875C38%2031.5%2037.8958%2031.125%2037.6875%2030.75L34.75%2026H17.25L14.3125%2030.75Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "assessment_empty_text")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "error_message")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed_flex")}
            value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10%2018C8.54167%2017.9792%207.20833%2017.625%206%2016.9375C4.79167%2016.2292%203.8125%2015.25%203.0625%2014C2.35417%2012.7292%202%2011.3958%202%2010C2%208.60417%202.35417%207.27083%203.0625%206C3.8125%204.75%204.79167%203.77083%206%203.0625C7.20833%202.375%208.54167%202.02083%2010%202C11.4583%202.02083%2012.7917%202.375%2014%203.0625C15.2083%203.77083%2016.1875%204.75%2016.9375%206C17.6458%207.27083%2018%208.60417%2018%2010C18%2011.3958%2017.6458%2012.7292%2016.9375%2014C16.1875%2015.25%2015.2083%2016.2292%2014%2016.9375C12.7917%2017.625%2011.4583%2017.9792%2010%2018ZM8.75%2012.5C8.29167%2012.5417%208.04167%2012.7917%208%2013.25C8.04167%2013.7083%208.29167%2013.9583%208.75%2014H11.25C11.7083%2013.9583%2011.9583%2013.7083%2012%2013.25C11.9583%2012.7917%2011.7083%2012.5417%2011.25%2012.5H11V9.75C10.9583%209.29167%2010.7083%209.04167%2010.25%209H8.75C8.29167%209.04167%208.04167%209.29167%208%209.75C8.04167%2010.2083%208.29167%2010.4583%208.75%2010.5H9.5V12.5H8.75ZM10%206C9.70833%206%209.46875%206.09375%209.28125%206.28125C9.09375%206.46875%209%206.70833%209%207C9%207.29167%209.09375%207.53125%209.28125%207.71875C9.46875%207.90625%209.70833%208%2010%208C10.2917%208%2010.5312%207.90625%2010.7188%207.71875C10.9062%207.53125%2011%207.29167%2011%207C11%206.70833%2010.9062%206.46875%2010.7188%206.28125C10.5312%206.09375%2010.2917%206%2010%206Z%22%20fill%3D%22%23F79A3E%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Oops..something went wrong."}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-underline", "text-blue-500")}
          tag="div"
          {...onClickRetry}
        >
          {"Retry"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%2F*%20Default%20styles%20for%20all%20screen%20sizes%20*%2F%0A%5Bclass*%3D%22AssessmentError_assessment_empty__%22%5D%20%7B%0A%20%20grid-column-start%3A%201%3B%0A%20%20grid-row-start%3A%203%3B%0A%20%20grid-row-end%3A%204%3B%0A%7D%0A%0A%2F*%20Media%20query%20for%20screen%20width%20%3E%3D%20992px%20*%2F%0A%40media%20(min-width%3A%20992px)%20%7B%0A%20%20%5Bclass*%3D%22AssessmentError_assessment_empty__%22%5D%20%7B%0A%20%20%20%20grid-column-end%3A%205%20!important%3B%0A%20%20%7D%0A%7D%0A%0A%2F*%20Media%20query%20for%20screen%20width%20%3E%3D%201440px%20*%2F%0A%40media%20(min-width%3A%201440px)%20%7B%0A%20%20%5Bclass*%3D%22AssessmentError_assessment_empty__%22%5D%20%7B%0A%20%20%20%20grid-column-end%3A%205%20!important%3B%0A%20%20%7D%0A%7D%0A%0A%2F*%20Media%20query%20for%20screen%20width%20%3E%3D%201920px%20*%2F%0A%40media%20(min-width%3A%201920px)%20%7B%0A%20%20%5Bclass*%3D%22AssessmentError_assessment_empty__%22%5D%20%7B%0A%20%20%20%20grid-column-end%3A%206%20!important%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E" />
    </_Component>
  );
}
