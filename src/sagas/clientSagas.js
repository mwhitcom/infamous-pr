import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as clientActions from '../actions/clientActions';
import api from '../utils/api';
import { artistsEndpoint, newsEndpoint } from '../utils/apiEndpoints';

const collection = 'artists';

export function* fetchClientHandler() {
  try {
    const { data } = yield call(axios.get, artistsEndpoint);
    yield put(clientActions.fetchClientSuccess(data));
  } catch (e) {
    yield put(clientActions.fetchClientError(e));
  }
}

export function* fetchSingleClientHandler(action) {
  try {
    const { data } = yield call(
      axios.get,
      `${artistsEndpoint}/${action.payload}`,
    );
    yield put(clientActions.fetchSingleClientSuccess(data));
  } catch (e) {
    yield put(clientActions.fetchSingleClientError(e));
  }
}

export function* createClientHandler(action) {
  try {
    const client = yield call(api.createOne, collection, action.payload);
    yield put(clientActions.createClientSuccess(client));
  } catch (e) {
    yield put(clientActions.createClientError(e));
  }
}

export function* updateClientHandler(action) {
  try {
    const client = yield call(
      api.updateOne,
      collection,
      action.payload.id,
      action.payload,
    );
    yield put(clientActions.updateClientSuccess(client));
  } catch (e) {
    yield put(clientActions.updateClientError(e));
  }
}

export function* deleteClientHandler(action) {
  try {
    const client = yield call(api.deleteOne, collection, action.payload);
    yield put(clientActions.deleteClientSuccess(client));
  } catch (e) {
    yield put(clientActions.deleteClientError(e));
  }
}

export function* fetchSingleClientNewsHandler(action) {
  try {
    const { data } = yield call(axios.get, `${newsEndpoint}/${action.payload}`);
    yield put(clientActions.fetchClientNewsSuccess(data));
  } catch (e) {
    yield put(clientActions.fetchClientNewsError(e));
  }
}

export function* fetchClientSagas() {
  yield takeEvery(actionTypes.FETCH_CLIENT_TRIGGER, fetchClientHandler);
}

export function* fetchSingleClientSagas() {
  yield takeEvery(
    actionTypes.FETCH_SINGLE_CLIENT_TRIGGER,
    fetchSingleClientHandler,
  );
}

export function* createClientSagas() {
  yield takeEvery(actionTypes.CREATE_CLIENT_TRIGGER, createClientHandler);
}

export function* udpateClientSagas() {
  yield takeEvery(actionTypes.UPDATE_CLIENT_TRIGGER, updateClientHandler);
}

export function* deleteClientSagas() {
  yield takeEvery(actionTypes.DELETE_CLIENT_TRIGGER, deleteClientHandler);
}

export function* fetchClientNewsSaga() {
  yield takeEvery(
    actionTypes.FETCH_CLIENT_NEWS_TRIGGER,
    fetchSingleClientNewsHandler,
  );
}

export default [
  fetchClientSagas,
  fetchSingleClientSagas,
  createClientSagas,
  udpateClientSagas,
  deleteClientSagas,
  fetchClientNewsSaga,
];
