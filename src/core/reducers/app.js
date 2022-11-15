import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const messagesSelector = (state) => state.app.messages;
export const { addMessage } = appSlice.actions;
export default appSlice.reducer;
