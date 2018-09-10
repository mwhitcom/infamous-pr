import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as socialActions from '../actions/socialActions';
import { postTweet } from '../utils/apiEndpoints';

export function* postTweetHandler(action) {
  try {
    yield call(axios.post, postTweet, { tweet: action.payload });
    yield put(socialActions.postTweetSuccess());
  } catch (e) {
    yield put(socialActions.postTweetError(e));
  }
}

export function* postTweetSagas() {
  yield takeEvery(actionTypes.POST_TWEET_TRIGGER, postTweetHandler);
}

export default [postTweetSagas];
