import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    messages: [],
    themeColor: "#a2ded0",
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    updateColor: (state, action) => {
      state.themeColor = action.payload;
    },
  },
});

export const messagesSelector = (state) => state.app.messages;
export const { addMessage, updateColor } = appSlice.actions;
export default appSlice.reducer;
