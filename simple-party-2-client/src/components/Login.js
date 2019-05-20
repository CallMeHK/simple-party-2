import React from "react";
import useLogin from "../hooks/useLogin";
import { withRouter } from "react-router-dom";

const Login = ({ history }) => {
  const [error, creds, changeCreds, submitCreds] = useLogin(history);
  const onEnter = e => {
    e.key === 'Enter' && submitCreds()
  }
  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          placeholder="Username"
          value={creds.username}
          onChange={e => {
            changeCreds({ ...creds, username: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          type="password"
          value={creds.password}
          onChange={e => {
            changeCreds({ ...creds, password: e.target.value });
          }}
          onKeyDown={onEnter}
        />
      </div>
      {error && <div style={{color:'red'}}>{error}</div>}
      <div>
        <button onClick={() => submitCreds()}>Submit</button>
      </div>
    </div>
  );
};

export default withRouter(Login);
