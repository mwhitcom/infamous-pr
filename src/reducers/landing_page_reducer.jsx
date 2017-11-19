export default function landing_page_reducer(state= {}, action){
    switch(action.type){
        
        case 'NEWS_STORIES_FETCHED':
        console.log(action.playload)
            return Object.assign({},state,{news_stories: action.playload}) 
            break
        default:
         return state
    }
}