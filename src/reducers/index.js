import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import clients from './clientReducer';
import news from './newsReducer';
import upload from './fileReducer';
import info from './infoReducer';
import social from './socialReducer';

const rootReducer = combineReducers({
  routerReducer,
  loadingBar: loadingBarReducer,
  news,
  clients,
  upload,
  info,
  social
});

export default rootReducer;
