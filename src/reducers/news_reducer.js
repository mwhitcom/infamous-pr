import actionTypes from '../actions/actionTypes'

export default function newsReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.FETCHED_ALL_NEWS: {
          return action.payload.data
        }
        case actionTypes.UPDATE_NEWS_ARTICLE: {
            const newState = state;
            const index = newState.findIndex(i => i.id === action.payload.data.id);
            newState[index] = action.payload.data
            return newState
        }
        case actionTypes.CREATE_NEWS_ARTICLE: {
            const newState = [...state, action.payload.data]
            return newState;
        }
        case actionTypes.DELETE_NEWS_ARTICLE: {
            return state.filter(news => news.id !== action.payload.data)
        }
        default: return state
    }
}