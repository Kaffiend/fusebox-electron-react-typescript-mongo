import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from './containers/Root/Root';
import { LoginPage } from './containers/Login/LoginPage';
import { ServerSettingsPage } from './containers/ServerSettings/ServerSettingsPage';

// render react DOM
export const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/serversettings" component={ServerSettingsPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  </Root>
));
