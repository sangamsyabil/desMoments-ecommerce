import React from 'react';
import { AppContextProvider } from './AppContextProvider';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <AppContextProvider>hello</AppContextProvider>;
};

export { App };
