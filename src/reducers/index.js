import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import landingPageReducer from './landing_page_reducer';
import clientReducer from './client_reducer';

const rootReducer = combineReducers({
  clientReducer
});

export default rootReducer;
