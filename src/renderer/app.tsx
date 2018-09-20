import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from './containers/Root';
import { LoginPage } from './containers/Login';

// render react DOM
export const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  </Root>
));
