import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as newsActions from '../actions/newsActions';
import { newsEndpoint } from '../utils/apiEndpoints';

const collection = 'news_stories';

export function* fetchNewsHandler() {
  try {
    const { data } = yield call(axios.get, newsEndpoint);
    yield put(newsActions.fetchNewsSuccess(data));
  } catch (e) {
    yield put(newsActions.fetchNewsError(e));
  }
}

export function* fetchSingleNewsHandler(action) {
  try {
    const id = action.payload;
    const endpoint = `${newsEndpoint}/${id}`;
    const { data } = yield call(axios.get, endpoint);
    yield put(newsActions.fetchSingleNewsSuccess({ id, data }));
  } catch (e) {
    yield put(newsActions.fetchSingleNewsError(e));
  }
}

export function* createNewsHandler(action) {
  try {
    const { data } = yield call(axios.post, newsEndpoint, action.payload);
    yield put(newsActions.createNewsSuccess(data));
  } catch (e) {
    yield put(newsActions.createNewsError(e));
  }
}

export function* updateNewsHandler(action) {
  try {
    const { id } = action.payload;
    const endpoint = `${newsEndpoint}/${id}`;
    const { data } = yield call(axios.patch, endpoint, action.payload);
    yield put(newsActions.updateNewsSuccess({ id, data }));
  } catch (e) {
    yield put(newsActions.updateNewsError(e));
  }
}

export function* deleteNewsHandler(action) {
  try {
    const endpoint = `${newsEndpoint}/${action.payload}`;
    const { data } = yield call(axios.delete, endpoint);
    yield put(newsActions.deleteNewsSuccess(data.id));
  } catch (e) {
    yield put(newsActions.deleteNewsError(e));
  }
}

export function* fetchNewsSagas() {
  yield takeEvery(actionTypes.FETCH_NEWS_TRIGGER, fetchNewsHandler);
}

export function* fetchSingleNewsSagas() {
  yield takeEvery(
    actionTypes.FETCH_SINGLE_NEWS_TRIGGER,
    fetchSingleNewsHandler,
  );
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

export default [
  fetchNewsSagas,
  fetchSingleNewsSagas,
  createNewsSagas,
  udpateNewsSagas,
  deleteNewsSagas,
];
