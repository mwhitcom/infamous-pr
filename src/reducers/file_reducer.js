import actionTypes from '../actions/actionTypes'

export default function fileReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.UPLOAD_FILE:{
            return action.payload
        }
        default: return state
    }
}