import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./store";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import { JournalApp } from "./JournalApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
