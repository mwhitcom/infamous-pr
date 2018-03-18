import axios from 'axios'
import * as constants from '../utils/constants'
import actionTypes from './actionTypes';

export const fetchAllPageInfo = () => async dispatch => {
  try{
      let {data} = await axios.get(constants.fetch_all_page_info)
      dispatch({type: actionTypes.FETCHED_ALL_PAGE_INFO, payload: data})
  }
  catch(e){
      console.error(e)
  }
}

export const updatePageInfo = info => async dispatch => {
    try{
        let infoData = JSON.stringify({ info });
        let {data} = await axios.post(constants.update_page_info_url, infoData);
        dispatch({type: actionTypes.UPDATE_PAGE_INFO, payload: data});
    }
    catch(e){
        console.error(e);
    }
  }