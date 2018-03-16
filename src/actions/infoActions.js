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