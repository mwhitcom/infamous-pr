import axios from 'axios'
import * as constants from '../utils/constants'
import actionTypes from './actionTypes';

export const fetchAllNews = () => async dispatch => {
  try {
      let {data} = await axios.get(constants.fetch_all_news_url)
      dispatch({type: actionTypes.FETCHED_ALL_NEWS, payload: data})
  }
  catch(e){
      console.error(e)
  }
}

export const fetchArtistNews = artist => async dispatch => {
  try{
      let clientData = JSON.stringify({ artist });
      let {data} = await axios.post(constants.fetch_artist_news_url, clientData);
      dispatch({type: actionTypes.FETCHED_ARTIST_NEWS, payload: data});
  }
  catch(e){
      console.error(e)
  }
}

export const createNewsArticle = story => async dispatch => {
  try{
      let newsData = JSON.stringify({ story });
      let {data} = await axios.post(constants.create_news_article_url, newsData);
      dispatch({type: actionTypes.CREATE_NEWS_ARTICLE, payload: data});
  }
  catch(e){
      console.error(e);
  }
}

export const updateNewsArticle = story => async dispatch => {
  try{
      let newsData = JSON.stringify({ story });
      let {data} = await axios.post(constants.update_news_article_url, newsData);
      dispatch({type: actionTypes.UPDATE_NEWS_ARTICLE, payload: data});
  }
  catch(e){
      console.error(e);
  }
}

export const deleteNewsArticle = id => async dispatch => {
  try{
      let idData = JSON.stringify({ id });
      let {data} = await axios.post(constants.delete_news_article_url, idData);
      dispatch({type: actionTypes.DELETE_NEWS_ARTICLE, payload: data});
  }
  catch(e){
      console.error(e)
  }
}