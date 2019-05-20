import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { updateCreds } from "../redux/userAction";

const useCreds = () => {
  const mapState = useCallback(state => state.userReducer, []);
  const state = useMappedState(mapState);
  const dispatch = useDispatch();
  const change = useCallback(e => dispatch(updateCreds(e)), []);

  return [state.creds, change]
};

export default useCreds;