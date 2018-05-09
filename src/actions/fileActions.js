import * as actionTypes from './actionTypes';

// Upload Image
export const uploadImage = payload => ({
    type: actionTypes.UPLOAD_IMAGE_TRIGGER,
    payload
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
export const uploadFile = payload => ({
    type: actionTypes.UPLOAD_FILE_TRIGGER,
    payload
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
    type: actionTypes.UNLOAD_FILE
})
