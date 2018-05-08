import * as actionTypes from './actionTypes';

// Post Tweet
export const postTweet = () => ({
    type: actionTypes.POST_TWEET_TRIGGER
})

export const postTweetSuccess = payload => ({
    type: actionTypes.POST_TWEET_SUCCESS,
    payload
})

export const postTweetError = payload => ({
    type: actionTypes.POST_TWEET_ERROR,
    payload
})

// export const postTweet = tweet => async dispatch => {
//   try{
//       let postData = JSON.stringify({ tweet });
//       let {data} = await axios.post(constants.post_twitter_url, postData);
//       dispatch({type: actionTypes.POST_TWEET, payload: data});
//   }
//   catch(e){
//       console.error(e);
//   }
// }