import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { Provider } from "react-redux";
import store from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById('root')
  );
  