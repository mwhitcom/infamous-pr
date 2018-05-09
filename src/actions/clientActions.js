import * as actionTypes from './actionTypes';

// Fetch client profile
export const fetchClient = () => ({
    type: actionTypes.FETCH_CLIENT_TRIGGER
})

export const fetchClientSuccess = payload => ({
    type: actionTypes.FETCH_CLIENT_SUCCESS,
    payload
})

export const fetchClientError = payload => ({
    type: actionTypes.FETCH_CLIENT_ERROR,
    payload
})

// Create client profile
export const createClient = payload => ({
    type: actionTypes.CREATE_CLIENT_TRIGGER,
    payload
})

export const createClientSuccess = payload => ({
    type: actionTypes.CREATE_CLIENT_SUCCESS,
    payload
})

export const createClientError = payload => ({
    type: actionTypes.CREATE_CLIENT_ERROR,
    payload
})

// Update client profile
export const updateClient = payload => ({
    type: actionTypes.UPDATE_CLIENT_TRIGGER,
    payload
})

export const updateClientSuccess = payload => ({
    type: actionTypes.UPDATE_CLIENT_SUCCESS,
    payload
})

export const updateClientError = payload => ({
    type: actionTypes.UPDATE_CLIENT_ERROR,
    payload
})

// Delete client profile
export const deleteClient = payload => ({
    type: actionTypes.DELETE_CLIENT_TRIGGER,
    payload
})

export const deleteClientSuccess = payload => ({
    type: actionTypes.DELETE_CLIENT_SUCCESS,
    payload
})

export const deleteClientError = payload => ({
    type: actionTypes.DELETE_CLIENT_ERROR,
    payload
})

// Update client profile status (active or inactive)
export const updateClientStatus = payload => ({
    type: actionTypes.UPDATE_CLIENT_STATUS_TRIGGER,
    payload
})

export const updateClientStatusSuccess = payload => ({
    type: actionTypes.UPDATE_CLIENT_STATUS_SUCCESS,
    payload
})

export const updateClientStatusError = payload => ({
    type: actionTypes.UPDATE_CLIENT_STATUS_ERROR,
    payload
})
