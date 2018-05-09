import * as actionTypes from '../actions/actionTypes'

export default function newsReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_SUCCESS: {
            return action.payload.data
        }
        case actionTypes.UPDATE_NEWS_SUCCESS: {
            const newState = [...state];
            const index = newState.findIndex(i => i.id === action.payload.data.id);
            newState[index] = action.payload.data
            return newState;
        }
        case actionTypes.CREATE_NEWS_SUCCESS: {
            const newState = [...state, action.payload.data]
            return newState;
        }
        case actionTypes.DELETE_NEWS_SUCCESS: {
            const newState = [...state]
            return newState.filter(news => news.id !== action.payload.data)
        }
        default: return state
    }
}