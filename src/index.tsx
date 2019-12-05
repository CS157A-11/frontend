import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./configureStore";
import App from "./components/Layout/App";
import { BrowserRouter as Router } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Root />
    </Provider>
  </Router>,
  document.getElementById("app")
);
