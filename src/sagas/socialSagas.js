import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as socialActions from '../actions/socialActions';
import * as apiEndpoints from '../utils/apiEndpoints'

export function* postTweetHandler(action) {
  try {
    const postData = JSON.stringify({ tweet: action.payload });
    const { data } = yield call(axios.post, apiEndpoints.postTweet, postData);
    yield put(socialActions.postTweetSuccess(data));
  } catch (e) {
    yield put(socialActions.postTweetError(e));
  }
}

export function* postTweetSagas() {
  yield takeEvery(actionTypes.POST_TWEET_TRIGGER, postTweetHandler);
}

export default [postTweetSagas];
