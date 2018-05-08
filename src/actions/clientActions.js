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
export const createClient = () => ({
    type: actionTypes.CREATE_CLIENT_TRIGGER
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
export const updateClient = () => ({
    type: actionTypes.UPDATE_CLIENT_TRIGGER
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
export const deleteClient = () => ({
    type: actionTypes.DELETE_CLIENT_TRIGGER
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
export const updateClientStatus = () => ({
    type: actionTypes.UPDATE_CLIENT_STATUS_TRIGGER
})

export const updateClientStatusSuccess = payload => ({
    type: actionTypes.UPDATE_CLIENT_STATUS_SUCCESS,
    payload
})

export const updateClientStatusError = payload => ({
    type: actionTypes.UPDATE_CLIENT_STATUS_ERROR,
    payload
})

// export const fetchAllClients = () => async dispatch => {
//   try {
//       let {data} = await axios.get(constants.fetch_all_clients_url)
//       dispatch({type: actionTypes.FETCHED_ALL_CLIENTS, payload: data})
//   }
//   catch(e){
//       console.error(e)
//   }
// }

// export const createClientProfile = client => async dispatch => {
//     try{
//         let clientData = JSON.stringify({ client });
//         let {data} = await axios.post(constants.create_client_profile_url, clientData);
//         dispatch({type: actionTypes.CREATE_CLIENT_PROFILE, payload: data});
//     }
//     catch(e){
//         console.error(e)
//     }
//     }

// export const updateClientProfile = client => async dispatch => {
//   try{
//       let clientData = JSON.stringify({ client });
//       let {data} = await axios.post(constants.update_client_profile_url, clientData);
//       dispatch({type: actionTypes.UPDATE_CLIENT_PROFILE, payload: data});
//   }
//   catch(e){
//       console.error(e);
//   }
// }

// export const deleteClientProfile = id => async dispatch => {
//   try{
//       let idData = JSON.stringify({ id });
//       let {data} = await axios.post(constants.delete_client_profile_url, idData);
//       dispatch({type: actionTypes.DELETE_CLIENT_PROFILE, payload: data});
//   }
//   catch(e){
//       console.error(e);
//   }
// }

// export const updateClientStatus = statusData => async dispatch => {
//     try {
//         let inputData = JSON.stringify({ statusData });
//         let {data} = await axios.post(constants.update_client_status_url, inputData);
//         dispatch({type: actionTypes.UPDATE_CLIENT_STATUS, payload: data});
//     }
//     catch(e) {
//         console.error(e);
//     }
// }
