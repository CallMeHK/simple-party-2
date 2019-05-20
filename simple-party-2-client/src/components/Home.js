import React from "react";

import { withRouter } from "react-router-dom";

const Home = ({ history }) => {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <p> Welcome to this dnd app!</p>
        <button onClick={() => {history.push('/login')}}>Login</button>
      </div>
    </div>
  );
};

export default withRouter(Home);
