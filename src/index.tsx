import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import store from "./configureStore";
import { RootState } from "./modules";
import { AppState, fetchEmp, appActions } from "./modules/appModule";
import App from "./components/App";

const Root: React.FC = () => {
  const dispatch = useDispatch();
  const appState: AppState = useSelector((state: RootState) => state.app);
  const isInitializing = appState.isInitializing;
  useEffect(() => {
    dispatch(appActions.initilizingAction(true));
    dispatch(fetchEmp());
    dispatch(appActions.initilizingAction(false));
  }, []);
  const onClickSave = () => dispatch(fetchEmp());

  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);
