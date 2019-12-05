import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./configureStore";
import App from "./components/Layout/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("app")
);
