import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* Russian Doll => app is outermost layer*/}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
 