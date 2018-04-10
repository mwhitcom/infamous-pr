import actionTypes from '../actions/actionTypes'

export default function socialReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.POST_TWEET: {
          const newState = [...state];
          newState.twitter = 'Complete';
          return newState;
        }
        default: return state
    }
}