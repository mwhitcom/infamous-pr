import axios from 'axios'

export function fetch_news_stories(){
    return async function(dispatch){ 
        let news_stories = await axios.get('https://us-central1-infamous-pr.cloudfunctions.net/fetch_news_stories')
        return dispatch({type:'NEWS_STORIES_FETCHED', payload: news_stories.data }) 
    }
}