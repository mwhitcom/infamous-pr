import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as infoActions from '../actions/infoActions';
import api from '../utils/api';
import { infoEndpoint } from '../utils/apiEndpoints';

const collection = 'infamous';
const doc = 'page_info';

export function* fetchInfoHandler() {
  try {
    const { data } = yield call(axios.get, infoEndpoint);
    yield put(infoActions.fetchInfoSuccess(data));
  } catch (e) {
    yield put(infoActions.fetchInfoError(e));
  }
}

export function* updateInfoHandler(action) {
  try {
    const info = yield call(api.updateOne, collection, doc, action.payload);
    yield put(infoActions.updateInfoSuccess(info));
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
