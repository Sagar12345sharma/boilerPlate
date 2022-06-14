import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

// Getting the root level element to inject our jsx code
const injectJsx = document.querySelector("#root");

ReactDOM.render(<App foo={213} />, injectJsx);
