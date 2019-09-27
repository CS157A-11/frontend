import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import store from "./configureStore";
import { RootState } from "./modules";
import { AppState, fetchEmp } from "./modules/appModule";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const appState: AppState = useSelector((state: RootState) => state.app);
  const isInitializing = appState.isInitializing;
  const onClickSave = () => dispatch(fetchEmp());

  return (
    <>
      <Provider store={store}>
        {appState.emp.length ? (
          appState.emp.map(test => (
            <div key={test.id}>
              <div>{test.name}</div>
              <div>{test.id}</div>
              <div>{test.age}</div>
            </div>
          ))
        ) : (
          <button onClick={onClickSave}>getEmp</button>
        )}
      </Provider>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
