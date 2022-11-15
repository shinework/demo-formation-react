import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "./core/store";
import { RouterProvider } from "react-router-dom";
import router from "./core/router";
import "./index.css";
import { AppProvider } from "./core/contexts/app-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ReduxProvider store={store}>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </ReduxProvider>
);
