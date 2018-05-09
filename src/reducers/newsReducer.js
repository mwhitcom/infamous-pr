import * as actionTypes from '../actions/actionTypes'

export default function newsReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_SUCCESS: {
            return action.payload
        }
        case actionTypes.UPDATE_NEWS_SUCCESS: {
            const newState = [...state];
            const index = newState.findIndex(i => i.id === action.payload.id);
            newState[index] = action.payload
            return newState;
        }
        case actionTypes.CREATE_NEWS_SUCCESS: {
            const newState = [...state, action.payload]
            return newState;
        }
        case actionTypes.DELETE_NEWS_SUCCESS: {
            const newState = [...state]
            return newState.filter(news => news.id !== action.payload)
        }
        default: return state
    }
}