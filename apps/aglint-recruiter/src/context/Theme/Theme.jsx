import { createTheme, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import * as radixColors from '@radix-ui/colors';
import React, { useState } from 'react';

import AppContext from './context';

function Theme({ children }) {
  const [color, setColor] = useState('#1976d2');

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        ss: 400,
        sm: 600,
        mm: 750,
        md: 960,
        lg: 1280,
        xl: 1536,
        xxl: 1920,
      },
    },
    palette: {
      primary: {
        main: radixColors.orange.orange9,
        light: radixColors.orange.orange6,
        dark: radixColors.orange.orange11,
        contrastText: radixColors.whiteA.whiteA12,
      },
      secondary: {
        main: radixColors.sand.sand9,
        light: radixColors.sand.sand6,
        dark: radixColors.sand.sand11,
        contrastText: radixColors.blackA.blackA12,
      },
      error: {
        main: radixColors.tomato.tomato9,
        contrastText: radixColors.whiteA.whiteA12,
      },
      warning: {
        main: radixColors.yellow.yellow9,
        contrastText: radixColors.whiteA.whiteA12,
      },
      info: {
        light: radixColors.sky.sky6,
        main: radixColors.sky.sky9,
        dark: radixColors.sky.sky11,
        contrastText: radixColors.whiteA.whiteA12,
      },
      success: {
        main: radixColors.jade.jade9,
        contrastText: radixColors.whiteA.whiteA12,
      },
      background: {
        primary: radixColors.sand.sand1,
        secondary: radixColors.sand.sand3,
        default: radixColors.sand.sand2,
        paper: radixColors.sand.sand2,
        kale: radixColors.sand.sand12,
      },
      text: {
        primary: radixColors.sand.sand12,
        secondary: radixColors.sand.sand11,
        disabled: radixColors.sand.sand8,
        hint: radixColors.sand.sand9,
      },
      border: {
        main: radixColors.sand.sand7,
      },
      bordercolor: {
        main: radixColors.sand.sand8,
      },
    },
    
    typography: {
      fontFamily: 'var(--text)',
      h1: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-8)',
        lineHeight: 'var(--line-height-8)',
        letterSpacing: 'var(--letter-spacing-3)',
        color: 'var(--neutral-12)',
      },
      h2: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-7)',
        lineHeight: 'var(--line-height-7)',
        letterSpacing: 'var(--letter-spacing-3)',
        color: 'var(--neutral-12)',
      },
      h3: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-6)',
        lineHeight: 'var(--line-height-6)',
        letterSpacing: 'var(--letter-spacing-3)',
        color: 'var(--neutral-12)',
      },
      h4: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-5)',
        lineHeight: 'var(--line-height-5)',
        letterSpacing: 'var(--letter-spacing-3)',
        color: 'var(--neutral-12)',
      },
      h5: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-4)',
        lineHeight: 'var(--line-height-4)',
        letterSpacing: 'var(--letter-spacing-3)',
        color: 'var(--neutral-12)',
      },
      h6: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-3)',
        lineHeight: 'var(--line-height-3)',
        letterSpacing: 'var(--letter-spacing-3)',
        color: 'var(--neutral-12)',
      },
      subtitle1: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-normal)',
        fontSize: 'var(--font-size-4)',
        lineHeight: 'var(--line-height-4)',
        letterSpacing: 'var(--letter-spacing-3)',
        color: 'var(--neutral-11)',
      },
      subtitle2: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-3)',
        lineHeight: 'var(--line-height-3)',
        letterSpacing: 'var(--letter-spacing-3)',
        color: 'var(--neutral-11)',
      },
      body1: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-normal)',
        fontSize: 'var(--font-size-2)',
        lineHeight: 'var(--line-height-2)',
        letterSpacing: 'var(--letter-spacing-2)',
        color: 'var(--neutral-11)',
      },
      body2: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-normal)',
        fontSize: 'var(--font-size-1)',
        lineHeight: 'var(--line-height-1)',
        letterSpacing: 'var(--letter-spacing-1)',
        color: 'var(--neutral-11)',
      },
      button: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-3)',
        lineHeight: 'var(--line-height-3)',
        letterSpacing: 'var(--letter-spacing-1)',
        textTransform: 'uppercase',
        color: 'var(--neutral-12)',
      },
      caption: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-normal)',
        fontSize: 'var(--font-size-2)',
        lineHeight: 'var(--line-height-2)',
        letterSpacing: 'var(--letter-spacing-1)',
        color: 'var(--neutral-11)',
      },
      overline: {
        fontFamily: 'var(--text)',
        fontWeight: 'var(--font-weight-normal)',
        fontSize: 'var(--font-size-2)',
        lineHeight: 'var(--line-height-2)',
        letterSpacing: 'var(--letter-spacing-1)',
        textTransform: 'uppercase',
        color: 'var(--neutral-11)',
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true, // Disable elevation (box shadow) for all buttons
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            padding: 'var(--space-2) var(--space-3)',
            fontSize: 'var(--font-size-2)',
            lineHeight: 'var(--line-height-2)',
            letterSpacing: 'var(--letter-spacing-2)',
            borderRadius: 'var(--radius-2)',
            fontFamily: 'var(--text)', // Use --text for font
            fontWeight: '500',
          },
          contained: {
            boxShadow: 'var(--shadow-1)', // Level 1 shadow
          },
          outlined: {
            padding: 'var(--space-2) var(--space-3)',
          },
          text: {
            padding: 'var(--space-2) var(--space-3)',
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true, // Disable ripple effect globally for all components
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },

      MuiDialog: {
        defaultProps: {
          // You can set default props here if needed
        },
        styleOverrides: {
          paper: {
            borderRadius: '4px',
            marginTop: '4px',
            // padding: 'var(--space-4)',
            boxShadow: 'var(--shadow-4)', // Level 4 shadow
            fontFamily: 'var(--text)', // Use --text for font
          },
          paperFullScreen: {
            borderRadius: '0',
            // padding: 'var(--space-4)',
            boxShadow: 'var(--shadow-4)', // Level 4 shadow
            fontFamily: 'var(--text)', // Use --text for font
          },
          paperFullWidth: {
            // padding: 'var(--space-4)',
            boxShadow: 'var(--shadow-4)', // Level 4 shadow
            fontFamily: 'var(--text)', // Use --text for font
          },
          paperScrollBody: {
            borderRadius: '4px',
            marginTop: '4px',
            // padding: 'var(--space-4)',
            boxShadow: 'var(--shadow-4)', // Level 4 shadow
            fontFamily: 'var(--text)', // Use --text for font
          },
          paperScrollPaper: {
            borderRadius: '4px',
            marginTop: '4px',
            // padding: 'var(--space-4)',
            boxShadow: 'var(--shadow-4)', // Level 4 shadow
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      
      MuiCard: {
        styleOverrides: {
          root: {
            padding: 'var(--space-4)',
            borderRadius: 'var(--radius-4)',
            boxShadow: 'var(--shadow-2)', // Level 2 shadow
          },
        },
      },

      MuiContainer: {
        styleOverrides: {
          root: {
            padding: 'var(--space-5)',
          },
        },
      },

      // MuiGrid: {
      //   styleOverrides: {
      //     container: {
      //       gap: 'var(--space-3)',
      //     },
      //   },
      // },

      // MuiPaper: {
      //   styleOverrides: {
      //     root: {
      //       padding: 'var(--space-4)',
      //       borderRadius: 'var(--radius-3)',
      //       boxShadow: 'var(--shadow-3)', // Level 3 shadow
      //     },
      //   },
      // },

      MuiInputBase: {
        defaultProps: {
          size: 'small',
          variant: 'outlined',
          disableRipple: true, // Disable ripple effect globally for all components
        },
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
          input: {
            fontSize: 'var(--font-size-2)',
            lineHeight: 'var(--line-height-2)',
            letterSpacing: 'var(--letter-spacing-3)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },

      MuiTextField: {
        defaultProps: {
          size: 'small',
          variant: 'outlined',
        },
        styleOverrides: {
          root: {
            '& .MuiInputBase-root': {
              padding: 'var(--space-1)',
              fontSize: 'var(--font-size-2)',
              lineHeight: 'var(--line-height-2)',
              letterSpacing: 'var(--letter-spacing-3)',
              fontFamily: 'var(--text)', // Use --text for font
              borderRadius: 'var(--radius-2)',
              '&.Mui-focused': {
                boxShadow: 'var(--shadow-4)', // Level 4 shadow
              },
            },
            '& .MuiInputBase-input': {
              padding: 'var(--space-1)',
              fontSize: 'var(--font-size-2)',
              lineHeight: 'var(--line-height-2)',
              letterSpacing: 'var(--letter-spacing-3)',
              fontFamily: 'var(--text)', // Use --text for font
            },
          },
        },
      },

      MuiAutocomplete: {
        defaultProps: {
          renderInput: (params) => <TextField {...params} />,
        },
        styleOverrides: {
          // root: {
          //   padding: 'var(--space-2)',
          //   fontFamily: 'var(--text)', // Use --text for font
          // },
          // inputRoot: {
          //   '&[class*="MuiInput-root"] .MuiAutocomplete-input': {
          //     padding: 'var(--space-2) !important',
          //     fontSize: 'var(--font-size-2)',
          //     lineHeight: 'var(--line-height-2)',
          //     letterSpacing: 'var(--letter-spacing-2)',
          //     fontFamily: 'var(--text)', // Use --text for font
          //   },
          //   '& .MuiOutlinedInput-root': {
          //     padding: 'var(--space-2)',
          //     '& fieldset': {
          //       borderColor: 'var(--color-border)',
          //     },
          //     '&:hover fieldset': {
          //       borderColor: 'var(--color-border-hover)',
          //     },
          //     '&.Mui-focused fieldset': {
          //       borderColor: 'var(--color-border-focus)',
          //       boxShadow: 'var(--shadow-1)', // Level 1 shadow
          //     },
          //   },
          // },
          input: {
            padding: 'var(--space-1) !important',
            // fontSize: 'var(--font-size-2)',
            // lineHeight: 'var(--line-height-2)',
            // letterSpacing: 'var(--letter-spacing-2)',
            // fontFamily: 'var(--text)', // Use --text for font
          },
          // paper: {
          //   boxShadow: 'var(--shadow-3)', // Level 3 shadow
          //   borderRadius: 'var(--radius-3)',
          //   fontFamily: 'var(--text)', // Use --text for font
          // },
          // option: {
          //   padding: 'var(--space-2) var(--space-3)',
          //   fontSize: 'var(--font-size-2)',
          //   lineHeight: 'var(--line-height-2)',
          //   letterSpacing: 'var(--letter-spacing-2)',
          //   fontFamily: 'var(--text)', // Use --text for font
          //   '&[aria-selected="true"]': {
          //     backgroundColor: 'var(--color-background-selected)',
          //   },
          //   '&[data-focus="true"]': {
          //     backgroundColor: 'var(--color-background-focus)',
          //   },
          // },
          // clearIndicator: {
          //   color: 'var(--color-icon)',
          //   '&:hover': {
          //     color: 'var(--color-icon-hover)',
          //   },
          // },
          // popupIndicator: {
          //   color: 'var(--color-icon)',
          //   '&:hover': {
          //     color: 'var(--color-icon-hover)',
          //   },
          // },
          // endAdornment: {
          //   right: 'var(--space-1)',
          // },
          // groupLabel: {
          //   backgroundColor: 'var(--neutral-2)',
          //   padding: 'var(--space-1) var(--space-2)',
          //   fontFamily: 'var(--text)', // Use --text for font
          // },
        },
      },

      MuiAlert: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-2)',
            boxShadow: 'var(--shadow-2)', // Level 2 shadow
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            width: 'var(--space-7)',
            height: 'var(--space-7)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiAvatarGroup: {
        styleOverrides: {
          root: {
            gap: 'var(--space-2)',
          },
        },
      },
      MuiBox: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 'var(--radius-2)',
            padding: 'var(--space-1)',
            fontFamily: 'var(--text)', // Use --text for font
          },
          label: {
            fontSize: 'var(--font-size-2)',
          },
        },
      },
      MuiCircularProgress: {
        styleOverrides: {
          root: {
            color: 'var(--accent-9)',
          },
        },
      },
      MuiCollapse: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
          },
        },
      },
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiDatePicker: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiDateRangeCalendar: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiDesktopDatePicker: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiDesktopDateTimePicker: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiDesktopTimePicker: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            margin: 'var(--space-3) 0',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            padding: 'var(--space-4)',
            // borderRadius: 'var(--radius-3)',
            border: 'none',
            boxShadow: 'var(--shadow-3)', // Level 3 shadow
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            // margin: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
          label: {
            fontSize: 'var(--font-size-2)',
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true, // Disable ripple effect globally for all components
        },
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            padding: 'var(--space-1)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            padding: 'var(--space-3)',
            borderRadius: 'var(--radius-2)',
            boxShadow: 'var(--shadow-3)', // Level 3 shadow
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiPopover: {
        // styleOverrides: {
        //   paper: {
        //     padding: 'var(--space-3)',
        //     borderRadius: 'var(--radius-2)',
        //     boxShadow: 'var(--shadow-3)', // Level 3 shadow
        //   },
        // },
      },
      MuiCheckbox: {
        defaultProps: {
          disableRipple: true, // No more ripple, on the whole application
        },
      },

      MuiRadio: {
        defaultProps: {
          disableRipple: true, // No more ripple, on the whole application
        },
        styleOverrides: {
          root: {
            padding: 'var(--space-1)',
          },
        },
      },
      MuiRadioGroup: {
        defaultProps: {
          disableRipple: true, // No more ripple, on the whole application
        },
        styleOverrides: {
          root: {
            gap: 'var(--space-2)',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
          select: {
            padding: 'var(--space-1)',
            fontSize: 'var(--font-size-2)',
            lineHeight: 'var(--line-height-2)',
            letterSpacing: 'var(--letter-spacing-3)',
            fontFamily: 'var(--text)', // Use --text for font
          },
          icon: {
            right: 'var(--space-1)',
          },
        },
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--neutral-2)',
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            height: 'var(--slider-height)',
            padding: 'var(--space-2) 0',
          },
          thumb: {
            width: 'var(--slider-thumb-size)',
            height: 'var(--slider-thumb-size)',
            marginTop: 'var(--space-1)',
            marginLeft: '-var(--space-1)',
          },
          track: {
            height: 'var(--slider-track-height)',
          },
          rail: {
            height: 'var(--slider-track-height)',
          },
        },
      },
      // MuiStack: {
      //   styleOverrides: {
      //     root: {
      //       gap: 'var(--space-2)',
      //     },
      //   },
      // },
      MuiStaticDateTimePicker: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: '40px', // adjusted width
            height: '24px', // adjusted height
            padding: '2px', // adjusted padding
          },
          switchBase: {
            padding: '2px', // adjusted padding
            '&.Mui-checked': {
              transform: 'translateX(16px)', // adjust the position when checked
            },
          },
          thumb: {
            width: '20px', // adjusted width
            height: '20px', // adjusted height
          },
          track: {
            borderRadius: '12px', // adjusted borderRadius
          },
        },
      },
      MuiTimePicker: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: 'var(--neutral-2)',
            color: 'var(--color-text)',
            fontSize: 'var(--font-size-2)',
            borderRadius: 'var(--radius-2)',
            boxShadow: 'var(--shadow-3)', // Level 3 shadow
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            borderCollapse: 'separate',
            borderSpacing: '0 var(--space-1)',
          },
        },
      },
      MuiTableBody: {
        styleOverrides: {
          root: {
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
            borderBottom: 'none',
            fontFamily: 'var(--text)', // Use --text for font
          },
          head: {
            fontWeight: 'bold',
            backgroundColor: 'var(--neutral-2)',
          },
          body: {
            backgroundColor: 'var(--neutral-2)',
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            padding: 'var(--space-2)',
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            fontFamily: 'var(--text)', // Use --text for font
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&:last-child td, &:last-child th': {
              borderBottom: 0,
            },
            '&:nth-of-type(odd)': {
              backgroundColor: 'var(--color-background-alternate)',
            },
          },
        },
      },
    }
    
  });

  return (
    <AppContext.Provider value={{ color, setColor }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}
export default Theme;


// Create a theme instance.

export const palette = {
  white: {
    100: 'var(--whiteA6)',
    200: 'var(--whiteA3)',
    300: 'var(--whiteA1)',
    700: 'var(--white)',
  },
  grey: {
    100: 'var(--sand1)',
    400: 'var(--sand6)',
    500: 'var(--sand8)',
    600: 'var(--sand10)',
    700: 'var(--sand11)',
    800: 'var(--sand12)',
  },
  blue: {
    400: 'var(--sky8)',
    600: 'var(--sky9)',
  },
  green: {
    800: 'var(--jade12)',
  },
  red: {
    400: 'var(--tomato8)',
    500: 'var(--tomato9)',
    800: 'var(--tomato12)',
  },
  yellow: {
    600: 'var(--yellow8)',
    700: 'var(--yellow9)',
    800: 'var(--yellow10)',
  },
  kale: {
    600: 'var(--jade8)',
  },
};
