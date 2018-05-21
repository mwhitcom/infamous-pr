import { call, put, takeEvery } from 'redux-saga/effects'
import uuidv1 from 'uuid/v1'

import fire from '../utils/fire'

import * as actionTypes from '../actions/actionTypes'
import * as fileActions from '../actions/fileActions'

export function * uploadImageHandler (action) {
  try {
    const { file, name } = action.payload
    const meta = {
      cacheControl: `max-age=${60 * 60 * 24 * 365}`,
      contentType: 'image/jpeg'
    }
    const ref = fire.storage().ref(`images/${name.replace(/ /g, '')}${uuidv1()}`)
    const snapshot = yield call([ref, ref.put], file, meta)
    yield put(fileActions.uploadImageSuccess(snapshot.downloadURL))
  } catch (e) {
    yield put(fileActions.uploadImageError(e))
  }
}

export function * uploadFileHandler (action) {
  try {
    const { file, name } = action.payload
    const meta = {
      cacheControl: `max-age=${60 * 60 * 24 * 365}`,
      contentType: 'application/zip'
    }
    const ref = fire.storage().ref(`pressKits/${name.replace(/ /g, '')}pressKit.zip${uuidv1()}`)
    const snapshot = yield call([ref, ref.put], file, meta)
    yield put(fileActions.uploadFileSuccess(snapshot.downloadURL))
  } catch (e) {
    yield put(fileActions.uploadFileError(e))
  }
}

export function * uploadImageSagas () {
  yield takeEvery(actionTypes.UPLOAD_IMAGE_TRIGGER, uploadImageHandler)
}

export function * uploadFileSagas () {
  yield takeEvery(actionTypes.UPLOAD_FILE_TRIGGER, uploadFileHandler)
}

export default [uploadImageSagas, uploadFileSagas]
