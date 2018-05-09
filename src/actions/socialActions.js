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
