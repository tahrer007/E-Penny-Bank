import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
const store = createStore(reducers,applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store ={store}>
    <App />
  </Provider>
);
