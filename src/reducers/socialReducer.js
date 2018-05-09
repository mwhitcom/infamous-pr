import * as actionTypes from '../actions/actionTypes'

const initialState = {
    twitter: '',
    error: false
}

export default function socialReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.POST_TWEET_TRIGGER: {
          return {
              ...state,
              error: false
          }
        }
        case actionTypes.POST_TWEET_SUCCESS: {
            return {
                twitter: 'Complete',
                error: false
            }
          }
          case actionTypes.POST_TWEET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
          }
        default: return state
    }
}