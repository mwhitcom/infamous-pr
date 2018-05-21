import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import clients from './clientReducer'
import singleClient from './singleClientReducer'
import news from './newsReducer'
import singleNews from './singleNewsReducer'
import upload from './fileReducer'
import info from './infoReducer'
import social from './socialReducer'
import singleClientNews from './singleClientNewsReducer'

const rootReducer = combineReducers({
  routerReducer,
  loadingBar: loadingBarReducer,
  news,
  singleNews,
  clients,
  singleClient,
  upload,
  info,
  social,
  singleClientNews
})

export default rootReducer
