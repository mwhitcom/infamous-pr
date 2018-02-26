export default function landing_page_reducer(state = {}, action) {
    switch (action.type) {
        case 'FETCHED_ALL_NEWS':
            return Object.assign({}, state, { news_stories: action.payload })
        default:
            return state
    }
}