import * as actionTypes from './actionTypes';

// Fetch news stories
export const fetchNews = () => ({
    type: actionTypes.FETCH_NEWS_TRIGGER
})

export const fetchNewsSuccess = payload => ({
    type: actionTypes.FETCH_NEWS_SUCCESS,
    payload
})

export const fetchNewsError = payload => ({
    type: actionTypes.FETCH_NEWS_ERROR,
    payload
})

// Create news story
export const createNews = () => ({
    type: actionTypes.CREATE_NEWS_TRIGGER
})

export const createNewsSuccess = payload => ({
    type: actionTypes.CREATE_NEWS_SUCCESS,
    payload
})

export const createNewsError = payload => ({
    type: actionTypes.CREATE_NEWS_ERROR,
    payload
})

// Update news story
export const updateNews = () => ({
    type: actionTypes.UPDATE_NEWS_TRIGGER
})

export const updateNewsSuccess = payload => ({
    type: actionTypes.UPDATE_NEWS_SUCCESS,
    payload
})

export const updateNewsError = payload => ({
    type: actionTypes.UPDATE_NEWS_ERROR,
    payload
})

// Delete news story
export const deleteNews = () => ({
    type: actionTypes.DELETE_NEWS_TRIGGER
})

export const deleteNewsSuccess = payload => ({
    type: actionTypes.DELETE_NEWS_SUCCESS,
    payload
})

export const deleteNewsError = payload => ({
    type: actionTypes.DELETE_NEWS_ERROR,
    payload
})


// export const fetchAllNews = () => async dispatch => {
//   try {
//       let {data} = await axios.get(constants.fetch_all_news_url)
//       dispatch({type: actionTypes.FETCHED_ALL_NEWS, payload: data})
//   }
//   catch(e){
//       console.error(e)
//   }
// }

// export const createNewsArticle = story => async dispatch => {
//   try{
//       let newsData = JSON.stringify({ story });
//       let {data} = await axios.post(constants.create_news_article_url, newsData);
//       dispatch({type: actionTypes.CREATE_NEWS_ARTICLE, payload: data});
//   }
//   catch(e){
//       console.error(e);
//   }
// }

// export const updateNewsArticle = story => async dispatch => {
//   try{
//       let newsData = JSON.stringify({ story });
//       let {data} = await axios.post(constants.update_news_article_url, newsData);
//       dispatch({type: actionTypes.UPDATE_NEWS_ARTICLE, payload: data});
//   }
//   catch(e){
//       console.error(e);
//   }
// }

// export const deleteNewsArticle = id => async dispatch => {
//   try{
//       let idData = JSON.stringify({ id });
//       let {data} = await axios.post(constants.delete_news_article_url, idData);
//       dispatch({type: actionTypes.DELETE_NEWS_ARTICLE, payload: data});
//   }
//   catch(e){
//       console.error(e)
//   }
// }
