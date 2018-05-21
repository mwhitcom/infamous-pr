import * as actionTypes from '../actions/actionTypes'

export default function clientReducer (state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_CLIENT_SUCCESS: {
      return action.payload
    }
    case actionTypes.CREATE_CLIENT_SUCCESS: {
      const newState = [...state, action.payload]
      return newState
    }
    case actionTypes.UPDATE_CLIENT_SUCCESS: {
      const newState = [...state]
      const index = newState.findIndex(client => client.id === action.payload.id)
      newState[index] = action.payload
      return newState
    }
    case actionTypes.DELETE_CLIENT_SUCCESS: {
      const temp = [...state]
      const newState = temp.filter(client => client.id !== action.payload)
      return newState
    }
    default: return state
  }
}
