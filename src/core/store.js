import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
