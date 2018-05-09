import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as infoActions from '../actions/infoActions';
import * as api from '../utils/apiEndpoints'

export function* fetchInfoHandler() {
  try {
    const { data } = yield call(axios.get, api.fetchInfo);
    yield put(infoActions.fetchInfoSuccess(data));
  } catch (e) {
    yield put(infoActions.fetchInfoError(e));
  }
}

export function* updateInfoHandler(action) {
  try {
    const infoData = JSON.stringify({ info: action.payload });
    const { data } = yield call(axios.post, api.updateInfo, infoData);
    yield put(infoActions.updateInfoSuccess(data));
  } catch (e) {
    yield put(infoActions.updateInfoError(e));
  }
}

export function* fetchInfoSagas() {
  yield takeEvery(actionTypes.FETCH_INFO_TRIGGER, fetchInfoHandler);
}

export function* udpateInfoSagas() {
  yield takeEvery(actionTypes.UPDATE_INFO_TRIGGER, updateInfoHandler);
}

export default [fetchInfoSagas, udpateInfoSagas];
