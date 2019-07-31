import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./Pages/HomePage";
import RequirementPage from "./Pages/RequirementPage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
const routing = (
  <Router>
    <div>
      <Route path="/home" component={HomePage} />
      <Route path="/bookaflight" component={RequirementPage} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
