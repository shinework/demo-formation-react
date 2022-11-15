import React from "react";
import ReactDOM from "react-dom/client";
import Chat from "./components/Chat";
import { Provider as ReduxProvider } from "react-redux";
import store from "./core/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ReduxProvider store={store}>
    <Chat />
  </ReduxProvider>
);
