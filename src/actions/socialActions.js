import * as actionTypes from './actionTypes';

// Post Tweet
export const postTweet = payload => ({
    type: actionTypes.POST_TWEET_TRIGGER,
    payload
})

export const postTweetSuccess = () => ({
    type: actionTypes.POST_TWEET_SUCCESS
})

export const postTweetError = payload => ({
    type: actionTypes.POST_TWEET_ERROR,
    payload
})
