import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppProvider } from "./core/contexts/app-context";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
