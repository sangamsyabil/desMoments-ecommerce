import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppContextProvider } from './AppContextProvider';
import { LoadingScreen } from './components';
import { HomeScreen } from './LazyComponents';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <AppContextProvider>
      <Switch>
        <Suspense fallback={<LoadingScreen />}>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route exact to='/home' component={HomeScreen} />
        </Suspense>
      </Switch>
    </AppContextProvider>
  );
};

export { App };
