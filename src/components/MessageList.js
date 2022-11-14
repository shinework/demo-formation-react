import React from "react";
import MessageItem from "./MessageItem";

const MessageList = () => {
  return (
    <ul style={{ borderColor: "grey", padding: 10, listStyle: "none" }}>
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </ul>
  );
};

export default MessageList;
