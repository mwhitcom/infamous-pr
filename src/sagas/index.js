import { fork, all } from 'redux-saga/effects';

import newsSagas from './newsSagas';

const sagas = [
  ...newsSagas
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
