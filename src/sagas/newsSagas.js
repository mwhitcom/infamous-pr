import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as newsActions from '../actions/newsActions';
import * as api from '../utils/apiEndpoints'

export function* fetchNewsHandler() {
  try {
    const { data } = yield call(axios.get, api.fetchNews);
    yield put(newsActions.fetchNewsSuccess(data));
  } catch (e) {
    yield put(newsActions.fetchNewsError(e));
  }
}

export function* createNewsHandler() {
  try {
    const { data } = yield call(axios.get, api.createNews);
    yield put(newsActions.createNewsSuccess(data));
  } catch (e) {
    yield put(newsActions.createNewsError(e));
  }
}

export function* updateNewsHandler() {
  try {
    const { data } = yield call(axios.get, api.updateNews);
    yield put(newsActions.updateNewsSuccess(data));
  } catch (e) {
    yield put(newsActions.updateNewsError(e));
  }
}

export function* deleteNewsHandler() {
  try {
    const { data } = yield call(axios.get, api.deleteNews);
    yield put(newsActions.deleteNewsSuccess(data));
  } catch (e) {
    yield put(newsActions.deleteNewsError(e));
  }
}

export function* fetchNewsSagas() {
  yield takeEvery(actionTypes.FETCH_NEWS_TRIGGER, fetchNewsHandler);
}

export function* createNewsSagas() {
  yield takeEvery(actionTypes.CREATE_NEWS_TRIGGER, createNewsHandler);
}

export function* udpateNewsSagas() {
  yield takeEvery(actionTypes.UPDATE_NEWS_TRIGGER, updateNewsHandler);
}

export function* deleteNewsSagas() {
  yield takeEvery(actionTypes.DELETE_NEWS_TRIGGER, deleteNewsHandler);
}

export default [fetchNewsSagas, createNewsSagas, udpateNewsSagas, deleteNewsSagas];
