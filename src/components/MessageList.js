import React, { useState } from "react";
import MessageItem from "./MessageItem";

function MessageList() {
  const [messageItems] = useState([
    { id: 1, username: "Baptiste", body: "Hello" },
    { id: 2, username: "John", body: "There" },
    { id: 3, username: "Doe", body: "Hi there!" },
  ]);

  return (
    <ul style={{ borderColor: "grey", padding: 10, listStyle: "none" }}>
      {messageItems.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </ul>
  );
}

export default MessageList;
