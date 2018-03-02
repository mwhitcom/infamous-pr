import * as constants from '../utils/constants'

export default function clientReducer(state = {}, action) {
    switch (action.type) {
        case constants.FETCHED_ALL_NEWS:
            return Object.assign({}, state, { all_news: action.payload })
        case constants.FETCHED_ALL_ARTISTS:
            return Object.assign({}, state, { all_artists: action.payload }) 
        case constants.FETCHED_SINGLE_ARTIST:
            return Object.assign({}, state, { artist_info: action.payload })  
        case constants.FETCHED_ARTIST_NEWS:
            return Object.assign({}, state, { artist_news: action.payload })       
        default: return state
    }
}