import actionTypes from '../actions/actionTypes'

export default function fileReducer(state = {image: '', file: ''}, action) {
    switch (action.type) {
        case actionTypes.UPLOAD_IMAGE: {
            const newState = {...state}
            newState.image = action.payload;
            return newState;
        }
        case actionTypes.UPLOAD_FILE: {
            const newState = {...state}
            newState.file = action.payload;
            return newState;
        }
        case actionTypes.UNLOAD_FILE: {
            return {image: '', file: ''}
        }
        default: return state
    }
}