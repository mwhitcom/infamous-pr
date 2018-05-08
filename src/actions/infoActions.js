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
export const updateInfo = () => ({
    type: actionTypes.UPDATE_INFO_TRIGGER
})

export const updateInfoSuccess = payload => ({
    type: actionTypes.UPDATE_INFO_SUCCESS,
    payload
})

export const updateInfoError = payload => ({
    type: actionTypes.UPDATE_INFO_ERROR,
    payload
})

// export const fetchAllPageInfo = () => async dispatch => {
//   try{
//       let {data} = await axios.get(constants.fetch_all_page_info)
//       dispatch({type: actionTypes.FETCHED_ALL_PAGE_INFO, payload: data})
//   }
//   catch(e){
//       console.error(e)
//   }
// }

// export const updatePageInfo = info => async dispatch => {
//     try{
//         let infoData = JSON.stringify({ info });
//         let {data} = await axios.post(constants.update_page_info_url, infoData);
//         dispatch({type: actionTypes.UPDATE_PAGE_INFO, payload: data});
//     }
//     catch(e){
//         console.error(e);
//     }
// }