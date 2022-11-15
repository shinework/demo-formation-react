import React from "react";
import MessageItem from "./MessageItem";

function MessageList({ messages }) {
  return (
    <ul style={{ borderColor: "grey", padding: 10, listStyle: "none" }}>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </ul>
  );
}

export default MessageList;
