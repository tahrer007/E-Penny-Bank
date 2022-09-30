import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import thunk from "redux-thunk";


/*const store = createStore(reducers, applyMiddleware(thunk));
store.getState();
store.subscribe(() => {
  console.log("store change ", store.getState());
});*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
