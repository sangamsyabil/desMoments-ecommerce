import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme/muiTheme';

export interface AppContextProviderProps {}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export { AppContextProvider };
