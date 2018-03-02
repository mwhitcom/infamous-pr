export default function adminReducer(state = {}, action) {
  switch (action.type) {
      case 'UPLOAD_NEWS_ARTICLE':
          return Object.assign({}, state, { news_upload_status: action.payload })      
      default: return state
  }
}