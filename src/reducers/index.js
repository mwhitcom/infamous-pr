import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import landing_page_reducer from './landing_page_reducer.jsx'

const rootReducer = combineReducers({
  landing_page_reducer
});

export default rootReducer