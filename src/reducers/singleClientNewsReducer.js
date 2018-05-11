import * as actionTypes from '../actions/actionTypes'

export default function singleClientNewsReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.FETCH_CLIENT_NEWS_SUCCESS: {
            return action.payload
        }
        case actionTypes.CLEAR_CLIENT_NEWS: {
            return []
        }
        default: return state
    }
}