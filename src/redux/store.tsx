/* global __DEV__ */
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import { rootReducer } from './index';

let composeEnhancers = compose;

if (__DEV__) {
  // eslint-disable-next-line
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
