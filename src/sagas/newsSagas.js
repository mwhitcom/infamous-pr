import { call, put, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import * as newsActions from '../actions/newsActions';
import api from '../utils/api'

const collection = 'news_stories'

export function* fetchNewsHandler() {
  try {
    const news = yield call(api.getAll, collection)
    yield put(newsActions.fetchNewsSuccess(news));
  } catch (e) {
    yield put(newsActions.fetchNewsError(e));
  }
}

export function* createNewsHandler(action) {
  try {
    const news = yield call(api.createOne, collection, action.payload);
    yield put(newsActions.createNewsSuccess(news));
  } catch (e) {
    yield put(newsActions.createNewsError(e));
  }
}

export function* updateNewsHandler(action) {
  try {
    const news =  yield call(api.updateOne, collection, action.payload.id, action.payload)
    yield put(newsActions.updateNewsSuccess(news));
  } catch (e) {
    yield put(newsActions.updateNewsError(e));
  }
}

export function* deleteNewsHandler(action) {
  try {
    const news = yield call(api.deleteOne, collection, action.payload)
    yield put(newsActions.deleteNewsSuccess(news));
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
