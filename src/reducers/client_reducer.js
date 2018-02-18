export default function clientReducer(state = {}, action) {
    switch (action.type) {
        case 'FETCHED_ALL_NEWS':
            return Object.assign({}, state, { all_news: action.payload })
        case 'FETCHED_ALL_ARTISTS':
            return Object.assign({}, state, { all_artists: action.payload })
        case 'FETCHED_ARTIST_NEWS' :
            return Object.assign({}, state, { artist_news: action.payload })   
        case 'FETCHED_ARTIST_PROFILE' :
            return Object.assign({}, state, { artist_info: action.payload })   
        case 'FETCHED_DYNAMIC_INFO' :
            return Object.assign({}, state, { dynamic_info: action.payload })       
        default: return state
    }
}