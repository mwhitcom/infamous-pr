import { combineReducers } from 'redux';
import client_reducer from './client_reducer'

const rootReducer = combineReducers({
  state: (state = {client_reducer}) => state
});

export default rootReducer;
