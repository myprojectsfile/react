import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("app"));
