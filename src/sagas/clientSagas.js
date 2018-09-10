import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as clientActions from '../actions/clientActions';
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
    const endpoint = `${artistsEndpoint}/name/${action.payload}`;
    const { data } = yield call(axios.get, endpoint);
    yield put(clientActions.fetchSingleClientSuccess(data));
  } catch (e) {
    yield put(clientActions.fetchSingleClientError(e));
  }
}

export function* createClientHandler(action) {
  try {
    const { data } = yield call(axios.post, artistsEndpoint, action.payload);
    yield put(clientActions.createClientSuccess(data));
  } catch (e) {
    yield put(clientActions.createClientError(e));
  }
}

export function* updateClientHandler(action) {
  try {
    const id = action.payload.id;
    const endpoint = `${artistsEndpoint}/${id}`;
    const { data } = yield call(axios.patch, endpoint, action.payload);
    yield put(clientActions.updateClientSuccess({ id, data }));
  } catch (e) {
    yield put(clientActions.updateClientError(e));
  }
}

export function* deleteClientHandler(action) {
  try {
    const endpoint = `${artistsEndpoint}/${action.payload}`;
    const { data } = yield call(axios.delete, endpoint);
    yield put(clientActions.deleteClientSuccess(data.id));
  } catch (e) {
    yield put(clientActions.deleteClientError(e));
  }
}

export function* fetchSingleClientNewsHandler(action) {
  try {
    const endpoint = `${newsEndpoint}/name/${action.payload}`;
    const { data } = yield call(axios.get, endpoint);
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
