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

export const fetch_single_client = client => async dispatch => {
  try{
      let artistData = JSON.stringify({ artist: client });
      let {data} = await axios.post(constants.fetch_single_artist_url, artistData);
      dispatch({type: actionTypes.FETCHED_SINGLE_ARTIST, payload: data});
  }
  catch(e){
      console.error(e)
  }
}

export const create_client_profile = client => async dispatch => {
  try{
      let clientData = JSON.stringify({ client });
      let {client} = await axios.post(constants.create_client_profile_url, clientData);
      dispatch({type: actionTypes.CREATE_CLIENT_PROFILE, payload: client});
  }
  catch(e){
      console.error(e)
  }
}

export const update_client_profile = client => async dispatch => {
  try{
      let clientData = JSON.stringify({ client });
      let {data} = await axios.post(constants.update_client_profile_url, clientData);
      dispatch({type: actionTypes.UPDATE_CLIENT_PROFILE, payload: data});
  }
  catch(e){
      console.error(e);
  }
}

export const delete_client_profile = name => async dispatch => {
  try{
      let clientData = JSON.stringify({ name });
      let {data} = await axios.post(constants.delete_client_profile_url, clientData);
      dispatch({type: actionTypes.DELETE_CLIENT_PROFILE, payload: data});
  }
  catch(e){
      console.error(e);
  }
}