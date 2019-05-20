import React from "react";
import useCreds from "../hooks/useCreds";
import { Redirect } from "react-router-dom";

const Splash = () => {
  const [ creds ] =  useCreds();
  return !creds.username ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <h2>Splash</h2>
      <div>
        <p>
          Hello {creds.username}! Your token is {creds.token}.
        </p>
      </div>
    </div>
  );
};

export default Splash;
