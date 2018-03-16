import actionTypes from '../actions/actionTypes'

export default function infoReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.FETCHED_ALL_PAGE_INFO: {
            return action.payload.data
        }
        default: return state
    }
}