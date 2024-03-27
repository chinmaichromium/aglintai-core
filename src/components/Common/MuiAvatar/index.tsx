import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';

interface MuiAvatarProps {
  level: string;
  width?: string;
  height?: string;
  variant: 'circular' | 'rounded' | 'square';
  src?: string;
  fontSize?: string;
  dynamicSizing?: boolean;
}

export default function MuiAvatar({
  level,
  width,
  height,
  variant,
  src,
  fontSize,
  dynamicSizing,
}: MuiAvatarProps): React.JSX.Element {
  function stringToColor(string: string): string {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color + 'cc';
  }

  function stringAvatar(value: string): {
    sx: { width: string; height: string; bgcolor: string };
    children: React.JSX.Element;
  } {
    return {
      sx: {
        ...(dynamicSizing
          ? { width: '100%', height: '100%' }
          : {
              width: width ? width : '40px',
              height: height ? height : '40px',
            }),
        bgcolor: value && stringToColor(value),
      },
      children: (
        <Typography
          position={'relative'}
          color={'white.700'}
          fontSize={fontSize}
        >
          {value ? value[0].toUpperCase() : '0'}
        </Typography>
      ),
    };
  }

  return (
    <Avatar src={src ? src : '/'} variant={variant} {...stringAvatar(level)} />
  );
}
