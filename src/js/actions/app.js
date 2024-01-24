const onStatusChange = dispatch => () => {
  const isOnline = navigator.onLine;
  const action = isOnline ?
    {type: 'APP_IS_ONLINE', isOnline} :
    {type: 'APP_IS_OFFLINE', isOnline}

  dispatch(action);
}

export const listenToConnectionChanges = () => dispatch => {
  const connectionHandler = onStatusChange(dispatch)

  window.addEventListener('Online', connectionHandler)
  window.addEventListener('Offline', connectionHandler)

  return () => {
    window.removeEventListener('Online', connectionHandler)
    window.removeEventListener('Offline', connectionHandler)
  }

}
