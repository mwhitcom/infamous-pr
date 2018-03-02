import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import adminReducer from './admin_reducer';
import clientReducer from './client_reducer';

const rootReducer = combineReducers({
  clientReducer,
  adminReducer
});

export default rootReducer;
