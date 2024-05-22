import React from 'react';

import { _Builtin } from '@/devlink/_Builtin';

import _styles from './IconReLoad.module.css';
import * as _utils from './utils';

export function IconReLoad({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, 'icons')}
      value='%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.5%200C13.2239%200%2013%200.223858%2013%200.5V3.093C11.6801%201.77492%209.9077%201%208%201C4.12386%201%201%204.12386%201%208C1%2011.8761%204.12386%2015%208%2015C10.1703%2015%2012.1394%2014.0012%2013.4904%2012.3123C13.6629%2012.0967%2013.628%2011.7821%2013.4123%2011.6096C13.1967%2011.4371%2012.8821%2011.472%2012.7096%2011.6877C11.5436%2013.1451%209.85829%2014%208%2014C4.67614%2014%202%2011.3239%202%208C2%204.67614%204.67614%202%208%202C9.72818%202%2011.3296%202.74298%2012.4847%204H9.5C9.22386%204%209%204.22386%209%204.5C9%204.77614%209.22386%205%209.5%205H13C13.5761%205%2014%204.57614%2014%204V0.5C14%200.223858%2013.7761%200%2013.5%200Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E'
    />
  );
}
