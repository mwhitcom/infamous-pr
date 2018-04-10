import axios from 'axios'
import * as constants from '../utils/constants'
import actionTypes from './actionTypes';

export const postTweet = tweet => async dispatch => {
  try{
      let postData = JSON.stringify({ tweet });
      let {data} = await axios.post(constants.post_twitter_url, postData);
      dispatch({type: actionTypes.POST_TWEET, payload: data});
  }
  catch(e){
      console.error(e);
  }
}