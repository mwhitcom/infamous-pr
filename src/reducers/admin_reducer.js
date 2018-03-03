import * as constants from '../utils/constants'

export default function adminReducer(state = {}, action) {
    switch (action.type) {
        case constants.UPDATE_NEWS_ARTICLE:
            return Object.assign({}, state, { news_upload_status: action.payload })
        case constants.CREATE_NEWS_ARTICLE:
            return Object.assign({}, state, { news_create_status: action.payload })    
        case constants.DELETE_NEWS_ARTICLE:
            return Object.assign({}, state, { news_delete_status: action.payload })   
        default: return state
    }
}