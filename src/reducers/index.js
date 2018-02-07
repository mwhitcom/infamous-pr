import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import landingPageReducer from './landing_page_reducer.jsx';
import clientReducer from './client_reducer';

const rootReducer = combineReducers({
  landingPageReducer,
  clientReducer
});

export default rootReducer;
