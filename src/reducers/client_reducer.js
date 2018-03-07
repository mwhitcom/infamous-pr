import actionTypes from '../actions/actionTypes'

export default function clientReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.FETCHED_ALL_CLIENTS: {
            return action.payload.data
        }
        case actionTypes.CREATE_CLIENT_PROFILE:
            return []   
        case actionTypes.UPDATE_CLIENT_PROFILE:
            return []  
        case actionTypes.DELETE_CLIENT_PROFILE:
            return []    
        default: return state
    }
}