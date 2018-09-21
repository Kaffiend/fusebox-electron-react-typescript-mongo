import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { TodoModel } from './models';
import { createStores } from './store';
import { App } from './app';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultForms } from './constants/forms';


// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true)
];

// default fixtures for FormStore

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history, defaultTodos, DefaultForms);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
