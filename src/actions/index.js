import axios from 'axios'
import $ from "jquery"

const fetch_artist_news_url = 'https://us-central1-infamous-pr.cloudfunctions.net/fetch_artist_news'
const fetch_all_news_url = 'https://us-central1-infamous-pr.cloudfunctions.net/fetch_all_news'
const fetch_all_artists_url = 'https://us-central1-infamous-pr.cloudfunctions.net/fetch_all_artists'
const fetch_dynamic_info_url = 'https://us-central1-infamous-pr.cloudfunctions.net/fetch_dynamic_info'
const fetch_single_artist_url = 'https://us-central1-infamous-pr.cloudfunctions.net/fetch_single_artist'
const update_news_article_url = 'https://us-central1-infamous-pr.cloudfunctions.net/update_news_article'

export const fetch_all_news = () => async dispatch => {
    try {
        let {data} = await axios.get(fetch_all_news_url)
        dispatch({type: 'FETCHED_ALL_NEWS', payload: data})
    }
    catch(e){
        console.error(e)
    }
}

export const fetch_all_artists =()=> async dispatch => {
    try {
        let {data} = await axios.get(fetch_all_artists_url)
        dispatch({type: 'FETCHED_ALL_ARTISTS', payload: data})
    }
    catch(e){
        console.error(e)
    }
}

export const fetch_artist_news = client => async dispatch => {
    try{
        let artistData = JSON.stringify({ artist: client });
        let {data} = await axios.post(fetch_artist_news_url, artistData);
        dispatch({type: 'FETCHED_ARTIST_NEWS', payload: data});
    }
    catch(e){
        console.error(e)
    }
}

export const fetch_single_artist = client => async dispatch => {
    try{
        let artistData = JSON.stringify({ artist: client });
        let {data} = await axios.post(fetch_single_artist_url, artistData);
        dispatch({type: 'FETCHED_ARTIST_PROFILE', payload: data});
    }
    catch(e){
        console.error(e)
    }
}

export const fetch_dynamic_info =()=> async dispatch => {
    try{
        let {data} = await axios.get(fetch_dynamic_info_url)
        dispatch({type: 'FETCHED_DYNAMIC_INFO'})
    }
    catch(e){
        console.error(e)
    }
}

export const update_news_article = story => async dispatch => {
    try{
        let newsData = JSON.stringify({ story });
        let {data} = await axios.post(update_news_article_url, newsData);
        dispatch({type: 'UPLOAD_NEWS_ARTICLE', payload: data});
    }
    catch(e){
        console.error(e);
    }
}
