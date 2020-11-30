import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "reducers";
import Thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(Thunk));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
