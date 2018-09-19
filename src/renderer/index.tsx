import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import store, {history} from './store';

import { Route } from 'react-router';

const styles: React.CSSProperties = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};

const Root = () => (
    <div style={styles}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
              <div>
                <Route path="/" component={Home} />
              </div>
            </ConnectedRouter>
        </Provider>
    </div>
);

ReactDOM.render(<Root />, document.getElementById('root'));
