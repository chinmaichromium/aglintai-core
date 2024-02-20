import React from 'react';
import * as _Builtin from './_Builtin';
import * as _utils from './utils';
import _styles from './FilterDropdown.module.css';

export function FilterDropdown({
  as: _Component = _Builtin.Block,
  slotOption,
  onClickReset = {},
  onClickDelete = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, 'assessment-type-wrap')}
      tag='div'
    >
      <_Builtin.Block
        className={_utils.cx(_styles, 'assessment-type-sub-wrap')}
        tag='div'
      >
        <_Builtin.Block
          className={_utils.cx(_styles, 'div-block-924')}
          tag='div'
        >
          {slotOption}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, 'div-block-926')} tag='div'>
        <_Builtin.Block
          className={_utils.cx(_styles, 'div-block-925', 'cursor-pointer')}
          tag='div'
          {...onClickReset}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, 'icons')}
            value='%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.0625%208.25H10.6875C10.3438%208.21875%2010.1562%208.03125%2010.125%207.6875C10.1562%207.34375%2010.3438%207.15625%2010.6875%207.125H12.8203L12.1641%206.375V6.35156C11.7891%205.89844%2011.3281%205.53906%2010.7812%205.27344C10.2344%205.00781%209.64062%204.875%209%204.875C7.82812%204.90625%206.85938%205.3125%206.09375%206.09375C5.3125%206.85938%204.90625%207.82812%204.875%209C4.90625%2010.1719%205.3125%2011.1406%206.09375%2011.9062C6.85938%2012.6875%207.82812%2013.0938%209%2013.125C9.95312%2013.1094%2010.7812%2012.8359%2011.4844%2012.3047C11.7656%2012.1172%2012.0234%2012.1562%2012.2578%2012.4219C12.4453%2012.7031%2012.4062%2012.9609%2012.1406%2013.1953C11.25%2013.8828%2010.2031%2014.2344%209%2014.25C8.01562%2014.2344%207.13281%2013.9922%206.35156%2013.5234C5.55469%2013.0703%204.92969%2012.4453%204.47656%2011.6484C4.00781%2010.8672%203.76562%209.98438%203.75%209C3.76562%208.01562%204.00781%207.13281%204.47656%206.35156C4.92969%205.55469%205.55469%204.92969%206.35156%204.47656C7.13281%204.00781%208.01562%203.76563%209%203.75C9.8125%203.75%2010.5703%203.92187%2011.2734%204.26562C11.9609%204.59375%2012.5469%205.05469%2013.0312%205.64844L13.5%206.1875V4.3125C13.5312%203.96875%2013.7188%203.78125%2014.0625%203.75C14.4062%203.78125%2014.5938%203.96875%2014.625%204.3125V7.6875C14.5938%208.03125%2014.4062%208.21875%2014.0625%208.25Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E'
          />
          <_Builtin.Block
            className={_utils.cx(_styles, 'text-grey-600')}
            tag='div'
          >
            {'Reset'}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, 'icons', 'cursor-pointer')}
          value='%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.92188%203.75C7.78125%203.75%207.67188%203.8125%207.59375%203.9375L7.24219%204.5H10.7578L10.4062%203.9375C10.3281%203.8125%2010.2188%203.75%2010.0781%203.75H7.92188ZM11.6484%204.5H12.75H13.5H13.875C14.1094%204.51562%2014.2344%204.64062%2014.25%204.875C14.2344%205.10938%2014.1094%205.23438%2013.875%205.25H13.4531L12.8438%2013.6172C12.8125%2014.0078%2012.6562%2014.3359%2012.375%2014.6016C12.0938%2014.8516%2011.75%2014.9844%2011.3438%2015H6.65625C6.25%2014.9844%205.90625%2014.8516%205.625%2014.6016C5.34375%2014.3359%205.1875%2014.0078%205.15625%2013.6172L4.54688%205.25H4.125C3.89062%205.23438%203.76562%205.10938%203.75%204.875C3.76562%204.64062%203.89062%204.51562%204.125%204.5H4.5H5.25H6.35156L6.96094%203.53906C7.19531%203.19531%207.51562%203.01563%207.92188%203H10.0781C10.4844%203.01563%2010.8047%203.19531%2011.0391%203.53906L11.6484%204.5ZM12.7031%205.25H5.29688L5.90625%2013.5469C5.92188%2013.75%206%2013.9141%206.14062%2014.0391C6.28125%2014.1797%206.45312%2014.25%206.65625%2014.25H11.3438C11.5469%2014.25%2011.7188%2014.1797%2011.8594%2014.0391C12%2013.9141%2012.0781%2013.75%2012.0938%2013.5469L12.7031%205.25Z%22%20fill%3D%22%23E35B66%22%2F%3E%0A%3C%2Fsvg%3E'
          {...onClickDelete}
        />
      </_Builtin.Block>
    </_Component>
  );
}
