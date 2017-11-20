export default function landing_page_reducer(state = {}, action) {
    switch (action.type) {
        case 'NEWS_STORIES_FETCHED':
            console.log('reducer')
            console.log(action.payload)
            return Object.assign({}, state, { news_stories: action.payload })
        default:
            return state
    }
}