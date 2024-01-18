const DEFAULT_STATE = {
  user: null,
  isFetching: false
}

export default function authReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'AUTH_ON_INIT':
      return {user: null, isFetching: true}
    case 'AUTH_ON_SUCCESS':
      return {user: action.user, isFetching: false}
    case 'AUTH_ON_ERROR':
      return {user: null, isFetching: false}
    default:
      return state
  }
}
