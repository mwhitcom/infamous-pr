import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import clients from './client_reducer';
import news from './news_reducer';
import upload from './file_reducer';
import info from './info_reducer';

const rootReducer = combineReducers({
  news,
  clients,
  upload,
  info
});

export default rootReducer;
