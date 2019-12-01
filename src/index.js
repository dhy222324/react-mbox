import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "mobx-react";
import rootStore from "./store";

// console.log(rootStore);
ReactDOM.render(
  <Provider {...rootStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
