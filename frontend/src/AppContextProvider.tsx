import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { i18n } from './i18n/i18n';
import { store } from './redux';
import { theme } from './theme/muiTheme';

export interface AppContextProviderProps {}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>{children}</BrowserRouter>
        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  );
};

export { AppContextProvider };
