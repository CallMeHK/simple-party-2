import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Splash from "./components/Splash"


function App() {
const [ showNav, changeNav ] = useState(true)
  return (
    <div>
      <button onClick={() => {changeNav(!showNav)}}>toggle nav</button>
        {showNav && <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login/">login</Link>
            </li>
            <li>
              <Link to="/splash/">splash</Link>
            </li>
          </ul>
        </nav>}

        <Route path="/" exact component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/splash/" component={Splash} />
      </div>
  );
}

export default App;
