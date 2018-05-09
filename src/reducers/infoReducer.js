import * as actionTypes from '../actions/actionTypes'

const initialState = {
    error: false,
    data: {}
}

export default function infoReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_INFO_TRIGGER: {
            return {
                ...state,
                error: false
            }
        }
        case actionTypes.FETCH_INFO_SUCCESS: {
            return {
                data: action.payload.data,
                error: false
            }
        }
        case actionTypes.FETCH_INFO_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case actionTypes.UPDATE_INFO_TRIGGER: {
            return {
                ...state,
                error: false
            }
        }
        case actionTypes.UPDATE_INFO_SUCCESS: {
            return {
                data: action.payload.data,
                error: false
            }
        }
        case actionTypes.UPDATE_INFO_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: return state
    }
}