import { combineReducers } from 'redux'

const INITIAL_NEWS_STATE = ""
function content(state = INITIAL_NEWS_STATE, action) {
  switch (action.type) {
    case "RECEIVE_CONTENT":
      return action.content
    default:
      return state
  }
}

const LOADING = false
function loading(state = LOADING, action) {
  switch (action.type) {
    case "REQUEST_DATA":
      return true
    case "RECEIVE_NEWS":
      return false
    case "SHOW_ERROR":
      return false
    default:
      return state
  }
}

export default combineReducers({
  content,
  loading
})