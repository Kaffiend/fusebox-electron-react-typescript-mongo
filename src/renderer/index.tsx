import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Home from './pages/home';
import store from './store';

const styles: React.CSSProperties = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Root = () => (
  <div style={styles}>
    <Provider store={store}>
      <Home />
    </Provider>
  </div>
);

ReactDOM.render(<Root />, document.getElementById('root'));
