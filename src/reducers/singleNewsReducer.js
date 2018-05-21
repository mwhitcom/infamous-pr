import * as actionTypes from '../actions/actionTypes'

export default function singleNewsReducer (state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_SINGLE_NEWS_SUCCESS: {
      return action.payload
    }
    case actionTypes.CLEAR_SINGLE_NEWS: {
      return {}
    }
    default: return state
  }
}
