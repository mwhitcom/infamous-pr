<<<<<<< HEAD
import { combineReducers } from 'redux';
import client_reducer from './client_reducer'

const rootReducer = combineReducers({
  state: (state = {client_reducer}) => state
=======
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import landing_page_reducer from './landing_page_reducer.jsx'

const rootReducer = combineReducers({
  landing_page_reducer
>>>>>>> 9c0b72b52c72da3efbab7ac837e7ca71bb435a47
});

export default rootReducer