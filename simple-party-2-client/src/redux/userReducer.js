export default (
    state = {
      creds:{}
    },
    action
  ) => {
    switch (action.type) {
      case "UPDATE_CREDS":
        return {
          ...state,
          creds: action.payload
        };
      default:
        return state;
    }
  };