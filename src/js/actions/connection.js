import * as api from '../api/connection'

export const checkUserConnection = uid => dispatch =>
  api.onConnectionChanged((isConnected) => {
      debugger
    api.setUserOnlineStatus(uid, isConnected)
    dispatch({type: 'CONNECTION_USER_STATUS_CHANGED'})
})
