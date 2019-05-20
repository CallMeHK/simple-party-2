const updateCreds = (creds) => dispatch => {
    dispatch({
      type:"UPDATE_CREDS",
      payload:creds
    })
  }

export { updateCreds }