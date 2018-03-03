import axios from 'axios'
import * as constants from '../utils/constants'

export const fetch_all_news = () => async dispatch => {
    try {
        let {data} = await axios.get(constants.fetch_all_news_url)
        dispatch({type: constants.FETCHED_ALL_NEWS, payload: data})
    }
    catch(e){
        console.error(e)
    }
}

export const fetch_all_artists =()=> async dispatch => {
    try {
        let {data} = await axios.get(constants.fetch_all_artists_url)
        dispatch({type: constants.FETCHED_ALL_ARTISTS, payload: data})
    }
    catch(e){
        console.error(e)
    }
}

export const fetch_single_artist = client => async dispatch => {
    try{
        let artistData = JSON.stringify({ artist: client });
        let {data} = await axios.post(constants.fetch_single_artist_url, artistData);
        dispatch({type: constants.FETCHED_SINGLE_ARTIST, payload: data});
    }
    catch(e){
        console.error(e)
    }
}

export const update_news_article = story => async dispatch => {
    try{
        let newsData = JSON.stringify({ story });
        let {data} = await axios.post(constants.update_news_article_url, newsData);
        dispatch({type: constants.UPDATE_NEWS_ARTICLE, payload: data});
    }
    catch(e){
        console.error(e);
    }
}

export const create_news_article = story => async dispatch => {
    try{
        let newsData = JSON.stringify({ story });
        let {data} = await axios.post(constants.create_news_article_url, newsData);
        dispatch({type: constants.CREATE_NEWS_ARTICLE, payload: data});
    }
    catch(e){
        console.error(e);
    }
}

export const update_artist_profile = client => async dispatch => {
    try{
        let clientData = JSON.stringify({ client });
        let {data} = await axios.post(constants.update_artist_profile_url, clientData);
        dispatch({type: constants.UPLOAD_ARTIST_PROFILE, payload: data});
    }
    catch(e){
        console.error(e);
    }
}

export const fetch_artist_news = client => async dispatch => {
    try{
        let artistData = JSON.stringify({ artist: client });
        let {data} = await axios.post(constants.fetch_artist_news_url, artistData);
        dispatch({type: constants.FETCHED_ARTIST_NEWS, payload: data});
    }
    catch(e){
        console.error(e)
    }
}

export const delete_news_article = id => async dispatch => {
    try{
        let idData = JSON.stringify({ id });
        let {data} = await axios.post(constants.delete_news_article_url, idData);
        dispatch({type: constants.DELETE_NEWS_ARTICLE, payload: data});
    }
    catch(e){
        console.error(e)
    }
}

// export const fetch_dynamic_info =()=> async dispatch => {
//     try{
//         let {data} = await axios.get(fetch_dynamic_info_url)
//         dispatch({type: 'FETCHED_DYNAMIC_INFO'})
//     }
//     catch(e){
//         console.error(e)
//     }
// }