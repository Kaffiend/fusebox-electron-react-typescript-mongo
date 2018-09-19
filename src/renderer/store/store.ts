import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connectRouter } from 'connected-react-router';
import { createHashHistory } from 'history';
import rootReducer from './reducer';


const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const history = createHashHistory();

function configureStore(initialState?: {}) {
  // configure middlewares
  const middlewares = [createEpicMiddleware()];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(connectRouter(history)(rootReducer), initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// this is for reloading the reducers should they change on HMR events.
if (typeof module.hot !== 'undefined') {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').rootReducer)
    );
}

// export store singleton instance
export default store;