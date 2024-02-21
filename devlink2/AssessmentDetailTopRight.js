import React from 'react';
import * as _Builtin from './_Builtin';
import { AssessmentTypeIcon } from './AssessmentTypeIcon';
import { AssessmentLevel } from './AssessmentLevel';
import { TemplateStatus } from './TemplateStatus';
import * as _utils from './utils';
import _styles from './AssessmentDetailTopRight.module.css';

export function AssessmentDetailTopRight({
  as: _Component = _Builtin.Block,
  slotAssessmentDetail,
  slotAssessmentLevel,
  slotAssessmentStatus,
  onClickEdit = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, 'assessmentdetaiiltop-right')}
      tag='div'
    >
      <_Builtin.Block
        className={_utils.cx(_styles, 'slot_assessment_type')}
        tag='div'
      >
        {slotAssessmentDetail ?? <AssessmentTypeIcon />}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, 'slot_assessmentlevl')}
        tag='div'
      >
        {slotAssessmentLevel ?? <AssessmentLevel />}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, 'slot_assmentstatus')}
        tag='div'
      >
        {slotAssessmentStatus ?? <TemplateStatus />}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, 'button_grey')}
        tag='div'
        {...onClickEdit}
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, 'embed_flex')}
          value='%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.6641%201.05469C10.5078%200.914062%2010.3281%200.84375%2010.125%200.84375C9.92188%200.84375%209.74219%200.914062%209.58594%201.05469L8.97656%201.6875L10.3125%203.02344L10.9453%202.41406C11.0859%202.25781%2011.1562%202.07813%2011.1562%201.875C11.1562%201.67187%2011.0859%201.49219%2010.9453%201.33594L10.6641%201.05469ZM4.42969%206.23438C4.33594%206.32812%204.27344%206.44531%204.24219%206.58594L3.86719%208.13281L5.41406%207.78125C5.55469%207.73438%205.67188%207.66406%205.76562%207.57031L9.77344%203.5625L8.4375%202.22656L4.42969%206.23438ZM9.07031%200.539062C9.38281%200.242187%209.73438%200.09375%2010.125%200.09375C10.5312%200.09375%2010.8828%200.242187%2011.1797%200.539062L11.4609%200.820312C11.7578%201.13281%2011.9062%201.48437%2011.9062%201.875C11.9062%202.28125%2011.7578%202.63281%2011.4609%202.92969L6.30469%208.10938C6.10156%208.3125%205.85938%208.44531%205.57812%208.50781L3.46875%209C3.32812%209.01562%203.21094%208.97656%203.11719%208.88281C3.02344%208.78906%202.98438%208.67969%203%208.55469L3.49219%206.42188C3.55469%206.14062%203.6875%205.89844%203.89062%205.69531L9.07031%200.539062ZM1.875%201.5H4.875C5.10938%201.51563%205.23438%201.64062%205.25%201.875C5.23438%202.10938%205.10938%202.23437%204.875%202.25H1.875C1.5625%202.26563%201.29688%202.375%201.07812%202.57812C0.875%202.79687%200.765625%203.0625%200.75%203.375V10.125C0.765625%2010.4375%200.875%2010.7031%201.07812%2010.9219C1.29688%2011.125%201.5625%2011.2344%201.875%2011.25H8.625C8.9375%2011.2344%209.20312%2011.125%209.42188%2010.9219C9.625%2010.7031%209.73438%2010.4375%209.75%2010.125V7.125C9.76562%206.89062%209.89062%206.76562%2010.125%206.75C10.3594%206.76562%2010.4844%206.89062%2010.5%207.125V10.125C10.4844%2010.6562%2010.3047%2011.1016%209.96094%2011.4609C9.60156%2011.8047%209.15625%2011.9844%208.625%2012H1.875C1.34375%2011.9844%200.898438%2011.8047%200.539062%2011.4609C0.195312%2011.1016%200.015625%2010.6562%200%2010.125V3.375C0.015625%202.84375%200.195312%202.39844%200.539062%202.03906C0.898438%201.69531%201.34375%201.51563%201.875%201.5Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E'
        />
        <_Builtin.Block tag='div'>{'Edit Assessment'}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
