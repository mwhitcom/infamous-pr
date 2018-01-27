<<<<<<< HEAD
import axios from 'axios'

const fetch_artist_news_url ='https://us-central1-infamous-pr.cloudfunctions.net/fetch_artist_news'
const fetch_all_news_url = 'https://us-central1-infamous-pr.cloudfunctions.net/fetch_all_news'
const fetch_all_artists_url = 'https://us-central1-infamous-pr.cloudfunctions.net/fetch_all_artists'
const fetch_dynamic_info_url = 'https://us-central1-infamous-pr.cloudfunctions.net/fetch_dynamic_info'
const fetch_single_artist_url = 'https://us-central1-infamous-pr.cloudfunctions.net/fetch_single_artist'

export const fetch_all_news =()=> async dispatch => {
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

export const fetch_artist_news = artist => async dispatch => {
    try{
        let {data} = await axios.post(fetch_artist_news_url, {artist: artist})
        dispatch({type: 'FETCHED_ARTIST_NEWS'})
    }
    catch(e){
        console.error(e)
    }
}

export const fetch_single_artist = artist => async dispatch => {
    try{
        let {data} = await axios.post(fetch_single_artist_url, {artist: artist})
        dispatch({type: 'FETCHED_ARTIST_PROFILE'})
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
=======
export * from './news_stories_actions.jsx'

>>>>>>> ce2299a072be086d14015624bba59da7ddd51a2f
