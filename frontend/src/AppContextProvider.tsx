import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux';
import { theme } from './theme/muiTheme';

export interface AppContextProviderProps {}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export { AppContextProvider };
