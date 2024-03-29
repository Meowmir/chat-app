import { combineReducers } from "redux";
import { createErrorReducer, createIsFetchingReducer } from './common'

function createLoginReducer(){
  return combineReducers({
    isFetching: createIsFetchingReducer('AUTH_ON'),
    error: createErrorReducer('AUTH_LOGIN')
  })
}

function createRegisterReducer() {
  return combineReducers({
    isFetching: createIsFetchingReducer('AUTH_REGISTER'),
    error: createErrorReducer('AUTH_REGISTER')
  })
}

function createAuthReducer() {
  const user = (state = null, action) => {
    switch (action.type) {
      case 'AUTH_ON_INIT':
      case 'AUTH_ON_ERROR':
        return null
      case 'AUTH_REGISTER_SUCCESS':
      case 'AUTH_LOGIN_SUCCESS':
      case 'AUTH_ON_SUCCESS':
        return action.user
      default:
        return state
    }
  }

  return combineReducers({
    user,
    isFetching: createIsFetchingReducer('AUTH_ON'),
    login: createLoginReducer(),
    register: createRegisterReducer()
  })
}

export default createAuthReducer()
