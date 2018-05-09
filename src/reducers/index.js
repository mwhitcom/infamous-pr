import { combineReducers } from 'redux';
import clients from './clientReducer';
import news from './newsReducer';
import upload from './fileReducer';
import info from './infoReducer';
import social from './socialReducer';

const rootReducer = combineReducers({
  news,
  clients,
  upload,
  info,
  social
});

export default rootReducer;
