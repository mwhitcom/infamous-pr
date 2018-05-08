import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import thunk from 'redux-thunk';

import { history } from '../components/App';
import rootReducer from '../reducers';

const loadingBarOptions = {
  promiseTypeSuffixes: ['TRIGGER', 'SUCCESS', 'ERROR'],
}

const middlewares = [
  routerMiddleware(history),
  loadingBarMiddleware(loadingBarOptions),
  thunk,
];

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
