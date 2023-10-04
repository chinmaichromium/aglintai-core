import React from 'react';
import * as _Builtin from './_Builtin';
import * as _utils from './utils';
import _styles from './ToggleSelectDropdown.module.css';

export function ToggleSelectDropdown({
  as: _Component = _Builtin.Block,
  dropdownTitle = 'Skill based assessment',
  isSchedule = true,
  isNotSchedule = true,
  statusText = 'Interviewing is off.',
  slotToggleBtn,
  slotSelection,
  statusProps = {},
  isSourcing = false,
  isInterviewing = false,
}) {
  return (
    <_Component className={_utils.cx(_styles, 'toggle-dropdown')} tag='div'>
      <_Builtin.Block
        className={_utils.cx(_styles, 'toggle-dropdown-toggle-top')}
        tag='div'
      >
        <_Builtin.Block
          className={_utils.cx(_styles, 'div-block-338')}
          tag='div'
        >
          <_Builtin.Block tag='div'>
            {isSourcing ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, 'icon-embed')}
                value='%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2217%22%20height%3D%2217%22%20viewBox%3D%220%200%2017%2017%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.3707%209.29971C9.65827%209.29971%208.27006%207.91149%208.27006%206.19904C8.27006%204.48658%209.65827%203.09836%2011.3707%203.09836C13.0832%203.09836%2014.4714%204.48658%2014.4714%206.19904C14.4714%207.91149%2013.0832%209.29971%2011.3707%209.29971ZM11.3707%208.26615C12.5124%208.26615%2013.4378%207.34067%2013.4378%206.19904C13.4378%205.0574%2012.5124%204.13192%2011.3707%204.13192C10.2291%204.13192%209.30361%205.0574%209.30361%206.19904C9.30361%207.34067%2010.2291%208.26615%2011.3707%208.26615ZM4.65261%206.19904C3.22556%206.19904%202.06871%205.04219%202.06871%203.61514C2.06871%202.1881%203.22556%201.03125%204.65261%201.03125C6.07965%201.03125%207.2365%202.1881%207.2365%203.61514C7.2365%205.04219%206.07965%206.19904%204.65261%206.19904ZM4.65261%205.16548C5.50883%205.16548%206.20294%204.47137%206.20294%203.61514C6.20294%202.75892%205.50883%202.06481%204.65261%202.06481C3.79638%202.06481%203.10227%202.75892%203.10227%203.61514C3.10227%204.47137%203.79638%205.16548%204.65261%205.16548ZM16.5364%2014.9375C16.5623%2015.2217%2016.3528%2015.4731%2016.0686%2015.4989C15.7843%2015.5248%2015.533%2015.3153%2015.5071%2015.0311C15.324%2013.0174%2013.4743%2011.3668%2011.3708%2011.3668C9.26722%2011.3668%207.41747%2013.0174%207.23441%2015.0311C7.20857%2015.3153%206.9572%2015.5248%206.67297%2015.4989C6.38873%2015.4731%206.17926%2015.2217%206.2051%2014.9375C6.43703%2012.3862%208.73776%2010.3333%2011.3708%2010.3333C14.0038%2010.3333%2016.3045%2012.3862%2016.5364%2014.9375ZM8.24368%209.65307C8.33393%209.92383%208.1876%2010.2165%207.91684%2010.3067C7.64607%2010.397%207.35341%2010.2507%207.26316%209.97991C6.93363%208.99131%205.81998%208.26615%204.65275%208.26615C3.48551%208.26615%202.37187%208.99131%202.04233%209.97991C1.95208%2010.2507%201.65942%2010.397%201.38866%2010.3067C1.11789%2010.2165%200.971562%209.92383%201.06182%209.65307C1.53866%208.22252%203.05891%207.23259%204.65275%207.23259C6.24658%207.23259%207.76683%208.22252%208.24368%209.65307Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E'
              />
            ) : null}
            {isInterviewing ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, 'icon-embed')}
                value='%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.03%206H8.52L10.48%202.28C10.54%202.13%2010.47%202%2010.31%202H7.39C7.23%202%207.05%202.13%206.99%202.28L5.53%205.68C5.46%205.84%205.53%206%205.69%206H7L5.58%2010.07C5.47%2010.36%205.55%2010.61%205.92%2010.28L10.05%206.39C10.28%206.16%2010.27%206%2010.03%206ZM3.99995%2014.7929L7.79289%2011H15V1H1V11H4V11.5L3.99995%2014.7929ZM3%2012H1C0.443858%2012%200%2011.5561%200%2011V1C0%200.443858%200.443858%200%201%200H15C15.5561%200%2016%200.443858%2016%201V11C16%2011.5561%2015.5561%2012%2015%2012H8.20711L4.70005%2015.507C4.41435%2015.7871%203.98918%2015.87%203.6192%2015.7177C3.24922%2015.5653%203.00567%2015.2071%203%2014.8V12Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E'
              />
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              'text-lg',
              'fw-semibold',
              'text-color-black',
            )}
            tag='div'
          >
            {dropdownTitle}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, 'toggle-btn-block')}
          tag='div'
        >
          {slotToggleBtn}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, 'tsd-toggle-header-block')}
        tag='div'
      >
        <_Builtin.Block
          className={_utils.cx(_styles, 'tsd-status-block')}
          tag='div'
          {...statusProps}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, 'tsd-icon-block')}
            tag='div'
          >
            {isNotSchedule ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, 'icon-embed')}
                value='%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3DcurrentColor%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.1464%204.64645C10.3417%204.45118%2010.6583%204.45118%2010.8536%204.64645C11.0488%204.84171%2011.0488%205.15829%2010.8536%205.35355L4.35355%2011.8536C4.15829%2012.0488%203.84171%2012.0488%203.64645%2011.8536L1.14645%209.35355C0.951184%209.15829%200.951184%208.84171%201.14645%208.64645C1.34171%208.45118%201.65829%208.45118%201.85355%208.64645L4%2010.7929L10.1464%204.64645ZM8.35355%2011.8536C8.15829%2012.0488%207.84171%2012.0488%207.64645%2011.8536C7.45118%2011.6583%207.45118%2011.3417%207.64645%2011.1464L14.1464%204.64645C14.3417%204.45118%2014.6583%204.45118%2014.8536%204.64645C15.0488%204.84171%2015.0488%205.15829%2014.8536%205.35355L8.35355%2011.8536Z%22%20fill%3DcurrentColor%2F%3E%0A%3C%2Fsvg%3E'
              />
            ) : null}
            {isSchedule ? (
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, 'icon-embed')}
                value='%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3DcurrentColor%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%200C2.69%200%200%202.69%200%206C0%209.31%202.69%2012%206%2012C9.31%2012%2012%209.31%2012%206C12%202.69%209.31%200%206%200ZM8%207H5.5C5.22%207%205%206.78%205%206.5V3C5%202.72%205.22%202.5%205.5%202.5C5.78%202.5%206%202.72%206%203V6H8C8.28%206%208.5%206.22%208.5%206.5C8.5%206.78%208.28%207%208%207Z%22%20fill%3DcurrentColor%2F%3E%0A%3C%2Fsvg%3E'
              />
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block tag='div'>{statusText}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, 'toggle-dropdown-content')}
        tag='div'
      >
        {slotSelection}
      </_Builtin.Block>
    </_Component>
  );
}
