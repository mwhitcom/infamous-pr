import * as actionTypes from '../actions/actionTypes'

export default function singleClientReducer (state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_SINGLE_CLIENT_SUCCESS: {
      return action.payload
    }
    case actionTypes.CLEAR_SINGLE_CLIENT: {
      return {}
    }
    default: return state
  }
}
