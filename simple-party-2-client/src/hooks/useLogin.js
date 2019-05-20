import { useState } from "react";
import useCreds from './useCreds';

const useLogin = (history) => {
  const [ creds, changeCreds ] = useState({ username: "", password: "" });
  const [ error, changeError ] = useState(null)
  const [ _, changeReduxCreds ] = useCreds();

  const submitCreds = () => {
      if(creds.username ==="su" && creds.password === "123"){
          changeReduxCreds({username: "su", token:"123abcXKD"})
          history.push('/splash')
      } else {
        changeError("Credentials not correct")
      }
  }
  return [ error, creds, changeCreds, submitCreds ];
};

export default useLogin;
