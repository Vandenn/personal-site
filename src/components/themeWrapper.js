import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import colorConstants from 'constants/colors';

const FONT_MONTSERRAT = 'Montserrat, sans-serif';
const FONT_ROBOTO_MONO = 'Roboto Mono, Consolas, serif';
const FONT_SOURCE_SANS_PRO = 'Source Sans Pro, sans-serif';

const theme = createMuiTheme({
  palette: {
    background: {
      default: colorConstants.backgroundDefault,
      paper: colorConstants.backgroundPaper,
      paperSecondary: colorConstants.backgroundPaperSecondary,
    },
    primary: {
      main: colorConstants.primary,
    },
    secondary: {
      main: colorConstants.secondary,
    },
    text: {
      primary: colorConstants.text,
    },
  },
  typography: {
    fontFamily: FONT_SOURCE_SANS_PRO,
    h1: {
      fontFamily: FONT_MONTSERRAT,
    },
    h2: {
      fontFamily: FONT_MONTSERRAT,
    },
    h3: {
      fontFamily: FONT_MONTSERRAT,
    },
    h4: {
      fontFamily: FONT_ROBOTO_MONO,
    },
    h5: {
      fontFamily: FONT_ROBOTO_MONO,
    },
    h6: {
      fontFamily: FONT_ROBOTO_MONO,
    },
    subtitle2: {
      fontFamily: FONT_ROBOTO_MONO,
    },
    button: {
      fontFamily: FONT_ROBOTO_MONO,
      textTransform: 'none',
    },
  },
});

const Themewrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Themewrapper;
