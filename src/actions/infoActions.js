import * as actionTypes from './actionTypes';

// Fetch page info
export const fetchInfo = () => ({
    type: actionTypes.FETCH_INFO_TRIGGER
})

export const fetchInfoSuccess = payload => ({
    type: actionTypes.FETCH_INFO_SUCCESS,
    payload
})

export const fetchInfoError = payload => ({
    type: actionTypes.FETCH_INFO_ERROR,
    payload
})

// Update page info
export const updateInfo = payload => ({
    type: actionTypes.UPDATE_INFO_TRIGGER,
    payload
})

export const updateInfoSuccess = payload => ({
    type: actionTypes.UPDATE_INFO_SUCCESS,
    payload
})

export const updateInfoError = payload => ({
    type: actionTypes.UPDATE_INFO_ERROR,
    payload
})
