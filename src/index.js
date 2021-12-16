import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
