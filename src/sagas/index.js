import { fork, all } from 'redux-saga/effects';

import newsSagas from './newsSagas';
import clientSagas from './clientSagas';
import infoSagas from './infoSagas';
import socialSagas from './socialSagas';
import fileSagas from './fileSagas';

const sagas = [
  ...newsSagas,
  ...clientSagas,
  ...infoSagas,
  ...socialSagas,
  ...fileSagas
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
