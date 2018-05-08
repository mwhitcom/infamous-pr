import * as actionTypes from './actionTypes';

// Upload Image
export const uploadImage = () => ({
    type: actionTypes.UPLOAD_IMAGE_TRIGGER
})

export const uploadImageSuccess = payload => ({
    type: actionTypes.UPLOAD_IMAGE_SUCCESS,
    payload
})

export const uploadImageError = payload => ({
    type: actionTypes.UPLOAD_IMAGE_ERROR,
    payload
})

// Upload file
export const uploadFile = () => ({
    type: actionTypes.UPLOAD_FILE_TRIGGER
})

export const uploadFileSuccess = payload => ({
    type: actionTypes.UPLOAD_FILE_SUCCESS,
    payload
})

export const uploadFileError = payload => ({
    type: actionTypes.UPLOAD_FILE_ERROR,
    payload
})

// Unload file/image
export const unloadFile = () => ({
    type: actionTypes.UNLOAD_FILE_TRIGGER
})

export const unloadFileSuccess = payload => ({
    type: actionTypes.UNLOAD_FILE_SUCCESS,
    payload
})

export const unloadFileError = payload => ({
    type: actionTypes.UNLOAD_FILE_ERROR,
    payload
})

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

// export const unloadFile = () => dispatch => {
//     dispatch({type: actionTypes.UNLOAD_FILE})
// }