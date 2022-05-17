import { initHelpers } from "common/dali/Dali";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./style/index.css";

initHelpers();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
