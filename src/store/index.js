import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import createSagaMiddleware from 'redux-saga';

import { history } from '../components/App';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const loadingBarOptions = {
  promiseTypeSuffixes: ['TRIGGER', 'SUCCESS', 'ERROR'],
}

const middlewares = [
  routerMiddleware(history),
  loadingBarMiddleware(loadingBarOptions),
  sagaMiddleware,
];

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
