import axios from 'axios'
import * as constants from '../utils/constants'
import actionTypes from './actionTypes';

export const fetchAllClients = () => async dispatch => {
  try {
      let {data} = await axios.get(constants.fetch_all_clients_url)
      dispatch({type: actionTypes.FETCHED_ALL_CLIENTS, payload: data})
  }
  catch(e){
      console.error(e)
  }
}

export const createClientProfile = client => async dispatch => {
    try{
        let clientData = JSON.stringify({ client });
        let {data} = await axios.post(constants.create_client_profile_url, clientData);
        dispatch({type: actionTypes.CREATE_CLIENT_PROFILE, payload: data});
    }
    catch(e){
        console.error(e)
    }
    }

export const updateClientProfile = client => async dispatch => {
  try{
      let clientData = JSON.stringify({ client });
      let {data} = await axios.post(constants.update_client_profile_url, clientData);
      dispatch({type: actionTypes.UPDATE_CLIENT_PROFILE, payload: data});
  }
  catch(e){
      console.error(e);
  }
}

export const deleteClientProfile = id => async dispatch => {
  try{
      let idData = JSON.stringify({ id });
      let {data} = await axios.post(constants.delete_client_profile_url, idData);
      dispatch({type: actionTypes.DELETE_CLIENT_PROFILE, payload: data});
  }
  catch(e){
      console.error(e);
  }
}