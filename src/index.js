import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./styles/css/custom.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux/store";

axios.defaults.baseURL = "http://localhost:8000/api/v1";
axios.defaults.headers["accept"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  </Provider>
);
