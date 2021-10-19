import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { Provider } from "react-redux";

import "./styles/reset.scss";
import "./styles/main.scss";

import configureStore from "./store";
const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
