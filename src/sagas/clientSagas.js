import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as clientActions from '../actions/clientActions';
import * as api from '../utils/apiEndpoints'

export function* fetchClientHandler() {
  try {
    const { data } = yield call(axios.get, api.fetchClient);
    yield put(clientActions.fetchClientSuccess(data));
  } catch (e) {
    yield put(clientActions.fetchClientError(e));
  }
}

export function* createClientHandler(action) {
  try {
    const clientData = JSON.stringify({ client: action.payload });
    const { data } = yield call(axios.post, api.createClient, clientData);
    yield put(clientActions.createClientSuccess(data));
  } catch (e) {
    yield put(clientActions.createClientError(e));
  }
}

export function* updateClientHandler(action) {
  try {
    const clientData = JSON.stringify({ client: action.payload });
    const { data } = yield call(axios.post, api.updateClient, clientData);
    yield put(clientActions.updateClientSuccess(data));
  } catch (e) {
    yield put(clientActions.updateClientError(e));
  }
}

export function* deleteClientHandler(action) {
  try {
    const idData = JSON.stringify({ id: action.payload });
    const { data } = yield call(axios.post, api.deleteClient, idData);
    yield put(clientActions.deleteClientSuccess(data));
  } catch (e) {
    yield put(clientActions.deleteClientError(e));
  }
}

export function* updateClientStatusHandler(action) {
  try {
    const statusData = JSON.stringify({ statusData: action.payload });
    const { data } = yield call(axios.post, api.updateClientStatus, statusData);
    yield put(clientActions.updateClientStatusSuccess(data));
  } catch (e) {
    yield put(clientActions.updateClientStatusError(e));
  }
}

export function* fetchClientSagas() {
  yield takeEvery(actionTypes.FETCH_CLIENT_TRIGGER, fetchClientHandler);
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

export function* updateClientStatusSagas() {
  yield takeEvery(actionTypes.UPDATE_CLIENT_STATUS_TRIGGER, updateClientStatusHandler)
}

export default [fetchClientSagas, createClientSagas, udpateClientSagas, deleteClientSagas, updateClientStatusSagas];
