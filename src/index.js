import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import { store } from "./store";
import { Global } from "./styles/global";
require("dotenv").config();

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById("root")
);
