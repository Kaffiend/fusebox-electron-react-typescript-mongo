import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from './containers/Root/Root';
import { LoginPage } from './containers/Login/LoginPage';
import { ServerSettingsPage } from './containers/ServerSettings/ServerSettingsPage';
import { RootRoutes } from './constants/routes';

// render react DOM
export const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path={RootRoutes.ServerSettings} component={ServerSettingsPage} />
        <Route path={RootRoutes.Login} component={LoginPage} />
      </Switch>
    </Router>
  </Root>
));
