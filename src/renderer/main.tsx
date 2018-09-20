import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { TodoModel, FormModel } from './models';
import { createStores } from './store';
import { App } from './app';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormProps } from 'react-jsonschema-form';
import { LoginForm } from './constants/forms';


// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true)
];

// default fixtures for FormStore
const loginForm: FormProps<LoginForm> = {
  schema: {
    title: 'Secure Login',
    type: 'object',
    required: [
      'username',
      'password'
    ],
    properties: {
      username: {type: 'string', title: 'Username'},
      password: {type: 'string', title: 'Password' },
      remember: {type: 'boolean', title: 'Remember me?'}
    }
  },
  uiSchema: {
    username: {
      'ui:autofocus': true
    },
    password: {
      'ui:widget': 'password'
    }
  }
}
const defaultForms = [
  new FormModel('Login', 'Secure Login', loginForm)
]

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history, defaultTodos, defaultForms);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
