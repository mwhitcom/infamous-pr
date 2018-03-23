import actionTypes from '../actions/actionTypes'

export default function clientReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.FETCHED_ALL_CLIENTS: {
            return action.payload.data
        }
        case actionTypes.CREATE_CLIENT_PROFILE: {
            const newState = [...state, action.payload.data]
            return newState;
        }
        case actionTypes.UPDATE_CLIENT_PROFILE: {
            const newState = [...state];
            const index = newState.findIndex(client => client.id === action.payload.data.id);
            newState[index] = action.payload.data
            return newState;
        }
        case actionTypes.UPDATE_CLIENT_STATUS: {
            const newState = [...state];
            const index = newState.findIndex(client => client.id === action.payload.data.id);
            newState[index].data.active = action.payload.data.status;
            return newState;
        }
        case actionTypes.DELETE_CLIENT_PROFILE: {
            const temp = [...state]
            const newState = temp.filter(client => client.id !== action.payload.data);
            return newState;
        }
        default: return state
    }
}