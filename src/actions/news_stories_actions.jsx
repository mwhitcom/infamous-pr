import axios from 'axios'

export const fetch_news_stories = ()=> async dispatch => {
    let news_stories = await fetch('https://us-central1-infamous-pr.cloudfunctions.net/fetch_news_stories',{
        
            method: 'GET',
            mode: 'no-cors'
          
     })
    dispatch({type:'NEWS_STORIES_FETCHED', payload: news_stories }) 
}