import { put, takeEvery } from 'redux-saga/effects';
// import fire from '../utils/fire';
// import uuidv1 from 'uuid/v1';

import * as actionTypes from '../actions/actionTypes';
import * as fileActions from '../actions/fileActions';

export function* uploadImageHandler(action) {
  try {
    // Image upload goes here
    const data = ''
    yield put(fileActions.uploadImageSuccess(data));
  } catch (e) {
    yield put(fileActions.uploadImageError(e));
  }
}

export function* uploadFileHandler(action) {
  try {
    // File upload goes here
    const data = ''
    yield put(fileActions.uploadFileSuccess(data));
  } catch (e) {
    yield put(fileActions.uploadFileError(e));
  }
}

export function* uploadImageSagas() {
  yield takeEvery(actionTypes.UPLOAD_IMAGE_TRIGGER, uploadImageHandler);
}

export function* uploadFileSagas() {
  yield takeEvery(actionTypes.UPLOAD_FILE_TRIGGER, uploadFileHandler);
}

export default [uploadImageHandler, uploadFileHandler];

// import fire from '../utils/fire';
// import uuidv1 from 'uuid/v1';

// export const uploadFile = (file, name, type) => async dispatch => {
//     try {
//         const typeData = type === 'image' ? 'image/jpeg' : 'application/zip';
//         const nameData = type === 'image' ? name.replace(/ /g, '') : `${name.replace(/ /g, '')}pressKit.zip`
//         let meta = {
//             cacheControl: "max-age="+(60*60*24*365),
//             contentType: typeData
//         }
//         let storage_ref = fire.storage().ref(`${type}s/${nameData}${uuidv1()}`)
//         let task = storage_ref.put(file, meta)
//         await task.on('state_changed', snapshot => null, err => console.error(err), () => {
//             let meta = task.snapshot.metadata
//             let key = meta.md5Hash.replace(/\//g,":")
//             let file_record = {
//                 downloadUrl : task.snapshot.downloadURL,
//                 key: key,
//                 md5Hash: meta.md5Hash,
//                 name: meta.name
//             }
//         type === 'image'
//             ? dispatch({type: actionTypes.UPLOAD_IMAGE, payload: file_record.downloadUrl})
//             : dispatch({type: actionTypes.UPLOAD_FILE, payload: file_record.downloadUrl})
//         })
//     }
//     catch(e) {
//         console.error(e)
//     }
// }