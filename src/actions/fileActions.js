import axios from 'axios'
import * as constants from '../utils/constants'
import actionTypes from './actionTypes';
import fire from '../utils/fire'

export const uploadFile = (file, name, type) => async dispatch => {
    try {
        const typeData = type === 'image' ? 'image/jpeg' : 'application/zip';
        const nameData = type === 'image' ? name.replace(' ', '') : `${name.replace(' ', '')}pressKit.zip`
        console.log(typeData)
        console.log(file)
        let meta = {
            cacheControl: "max-age="+(60*60*24*365),
            contentType: typeData
        }
        let storage_ref = fire.storage().ref(`${type}s/${nameData}`)
        let task = storage_ref.put(file, meta)
        await task.on('state_changed', snapshot => null, err => console.error(err), () => {
            let meta = task.snapshot.metadata
            let key = meta.md5Hash.replace(/\//g,":")
            let file_record = {
                downloadUrl : task.snapshot.downloadURL,
                key: key,
                md5Hash: meta.md5Hash,
                name: meta.name
            }
        type === 'image'
            ? dispatch({type: actionTypes.UPLOAD_IMAGE, payload: file_record.downloadUrl})
            : dispatch({type: actionTypes.UPLOAD_FILE, payload: file_record.downloadUrl})
        })
    }
    catch(e) {
        console.error(e)
    }
}

export const unloadFile = () => dispatch => {
    dispatch({type: actionTypes.UNLOAD_FILE})
}