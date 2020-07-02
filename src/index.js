import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import './global.css';
import App from "./sections/app";

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById("root")
);