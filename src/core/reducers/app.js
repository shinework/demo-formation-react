import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk("app/fetchMessages", async () => {
  const response = await axios.get(
    "https://my-json-server.typicode.com/shinework/demo-formation-react/messages"
  );

  return response.data;
});

export const postMessage = createAsyncThunk(
  "app/postMessage",
  async (message) => {
    const response = await axios.post(
      "https://my-json-server.typicode.com/shinework/demo-formation-react/messages",
      message
    );

    return response.data;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState: {
    messages: [],
    themeColor: "#a2ded0",
    hasMessagesFetching: false,
    hasMessageCreating: false,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    updateColor: (state, action) => {
      state.themeColor = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMessages.pending, (state) => {
      state.hasMessagesFetching = true;
    });

    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.hasMessagesFetching = false;
    });

    builder.addCase(fetchMessages.rejected, (state) => {
      state.hasMessagesFetching = false;
    });

    builder.addCase(postMessage.pending, (state) => {
      state.hasMessageCreating = true;
    });

    builder.addCase(postMessage.fulfilled, (state, action) => {
      state.hasMessageCreating = false;
      state.messages = [...state.messages, action.payload];
    });
  },
});

export const messagesSelector = (state) => state.app.messages;
export const { addMessage, updateColor } = appSlice.actions;
export default appSlice.reducer;
