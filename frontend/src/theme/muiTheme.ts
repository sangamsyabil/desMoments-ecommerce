import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core';
import { makeBorder } from './border';

const colors = {
  primaryColor: '#374794',
  secondaryColor: '#ff6347',
  brightColor: '#D4EDDA',
  white: '#ffffff',
  linkColor: '#ffffff',
  activeLinkColor: '#000000',
  bgLightColor: '#eeeeee',
  red: '#FF0000',
  green: '#008000',
};

export interface CustomTheme extends Theme {
  border: typeof makeBorder;
}

let muiTheme: Theme = createMuiTheme({
  palette: {
    background: {
      default: colors.white,
    },
    error: {
      main: colors.red,
    },
    primary: {
      main: colors.primaryColor,
      light: colors.bgLightColor,
      dark: colors.activeLinkColor,
    },
    secondary: {
      main: colors.secondaryColor,
      light: colors.white,
    },
    success: {
      main: colors.green,
    },
    text: {
      primary: colors.primaryColor,
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: colors.white,
      },
    },
  },
  typography: {
    fontFamily: "'Alegreya Sans', sans-serif",
    button: {
      textTransform: 'none',
      fontWeight: 'normal',
    },
    h6: {
      fontWeight: 'normal',
      fontSize: 16,
    },
    body1: {
      fontWeight: 'normal',
      fontSize: 14,
    },
    body2: {
      fontWeight: 'normal',
      fontSize: 12,
    },
    h1: {
      fontWeight: 'normal',
      fontSize: 24,
    },
    h2: {
      fontWeight: 'normal',
      fontSize: 20,
    },
    h5: {
      fontWeight: 'normal',
      fontSize: 18,
    },
  },
});

muiTheme.shadows[24] = '0px 3px 10px rgba(0, 0, 0, 0.08)';

const theme: CustomTheme = {
  ...responsiveFontSizes(muiTheme),
  border: makeBorder,
};

export { theme };
