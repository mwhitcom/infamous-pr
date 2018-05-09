import * as actionTypes from '../actions/actionTypes'

const initialState = {
    error: false,
    image: '', 
    file: ''
}

export default function fileReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPLOAD_IMAGE_TRIGGER: {
            return {
                ...state,
                error: false
            };
        }
        case actionTypes.UPLOAD_IMAGE_SUCCESS: {
            return {
                ...state,
                image: action.payload,
                error: false
            };
        }
        case actionTypes.UPLOAD_IMAGE_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        case actionTypes.UPLOAD_FILE_TRIGGER: {
            return {
                ...state,
                error: false
            };
        }
        case actionTypes.UPLOAD_FILE_SUCCESS: {
            return {
                ...state,
                file: action.payload,
                error: false
            }
        }
        case actionTypes.UPLOAD_FILE_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        case actionTypes.UNLOAD_FILE: {
            return initialState
        }
        default: return state
    }
}