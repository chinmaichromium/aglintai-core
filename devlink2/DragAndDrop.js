import React from 'react';
import * as _Builtin from './_Builtin';
import * as _utils from './utils';
import _styles from './DragAndDrop.module.css';

export function DragAndDrop({
  as: _Component = _Builtin.Block,
  isDropping = false,
}) {
  return (
    <_Component className={_utils.cx(_styles, 'drag_state')} tag='div'>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, 'embed_flex', 'relative_3')}
        value='%3Csvg%20width%3D%2249%22%20height%3D%2248%22%20viewBox%3D%220%200%2049%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M24.5%203C20.6875%203.0625%2017.1875%204%2014%205.8125C10.8125%207.6875%208.25%2010.25%206.3125%2013.5C4.4375%2016.8125%203.5%2020.3125%203.5%2024C3.5%2027.6875%204.4375%2031.1875%206.3125%2034.5C8.25%2037.75%2010.8125%2040.3125%2014%2042.1875C17.1875%2044%2020.6875%2044.9375%2024.5%2045C28.3125%2044.9375%2031.8125%2044%2035%2042.1875C38.1875%2040.3125%2040.75%2037.75%2042.6875%2034.5C44.5625%2031.1875%2045.5%2027.6875%2045.5%2024C45.5%2020.3125%2044.5625%2016.8125%2042.6875%2013.5C40.75%2010.25%2038.1875%207.6875%2035%205.8125C31.8125%204%2028.3125%203.0625%2024.5%203ZM24.5%2048C20.125%2047.9375%2016.125%2046.875%2012.5%2044.8125C8.875%2042.6875%205.9375%2039.75%203.6875%2036C1.5625%2032.1875%200.5%2028.1875%200.5%2024C0.5%2019.8125%201.5625%2015.8125%203.6875%2012C5.9375%208.25%208.875%205.3125%2012.5%203.1875C16.125%201.125%2020.125%200.0625%2024.5%200C28.875%200.0625%2032.875%201.125%2036.5%203.1875C40.125%205.3125%2043.0625%208.25%2045.3125%2012C47.4375%2015.8125%2048.5%2019.8125%2048.5%2024C48.5%2028.1875%2047.4375%2032.1875%2045.3125%2036C43.0625%2039.75%2040.125%2042.6875%2036.5%2044.8125C32.875%2046.875%2028.875%2047.9375%2024.5%2048ZM24.5%2037.5C23.625%2037.5%2022.8438%2037.1875%2022.1562%2036.5625L13.625%2028.6875C12.875%2028%2012.5%2027.125%2012.5%2026.0625C12.5%2025.0625%2012.8438%2024.2188%2013.5312%2023.5312C14.2188%2022.8438%2015.0625%2022.5%2016.0625%2022.5H18.5V15C18.5625%2013.75%2019%2012.6875%2019.8125%2011.8125C20.6875%2011%2021.75%2010.5625%2023%2010.5H26C27.25%2010.5625%2028.3125%2011%2029.1875%2011.8125C30%2012.6875%2030.4375%2013.75%2030.5%2015V22.5H32.9375C33.9375%2022.5%2034.7812%2022.8438%2035.4688%2023.5312C36.1562%2024.2188%2036.5%2025.0625%2036.5%2026.0625C36.5%2027.125%2036.125%2028%2035.375%2028.6875L26.8438%2036.5625C26.1562%2037.1875%2025.375%2037.5%2024.5%2037.5ZM24.2188%2034.4062C24.2812%2034.4688%2024.375%2034.5%2024.5%2034.5C24.625%2034.5%2024.7188%2034.4688%2024.7812%2034.4062L33.3125%2026.5312C33.4375%2026.4062%2033.5%2026.25%2033.5%2026.0625C33.4375%2025.6875%2033.25%2025.5%2032.9375%2025.5H29C28.0625%2025.375%2027.5625%2024.875%2027.5%2024V15C27.4375%2014.0625%2026.9375%2013.5625%2026%2013.5H23C22.0625%2013.5625%2021.5625%2014.0625%2021.5%2015V24C21.4375%2024.9375%2020.9375%2025.4375%2020%2025.5H16.0625C15.75%2025.5625%2015.5625%2025.75%2015.5%2026.0625C15.5%2026.25%2015.5625%2026.4062%2015.6875%2026.5312L24.2188%2034.4062Z%22%20fill%3D%22%23C2C8CC%22%2F%3E%0A%3C%2Fsvg%3E'
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          'fw-semibold',
          'text-gray-500',
          'max_width_custom',
        )}
        tag='div'
      >
        {
          'Drop the question here, or reorder the list as desired to indicate the preferred sequence of questions.'
        }
      </_Builtin.Block>
      {isDropping ? (
        <_Builtin.Block
          className={_utils.cx(_styles, 'isdropping', 'noboder')}
          tag='div'
        />
      ) : null}
    </_Component>
  );
}
