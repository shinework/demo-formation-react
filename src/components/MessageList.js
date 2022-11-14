import React, { Component } from "react";
import MessageItem from "./MessageItem";

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageItems: [
        { id: 1, username: "Baptiste", body: "Hello" },
        { id: 2, username: "John", body: "There" },
        { id: 3, username: "Doe", body: "Hi there!" },
      ],
    };
  }

  render() {
    return (
      <ul style={{ borderColor: "grey", padding: 10, listStyle: "none" }}>
        {this.state.messageItems.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </ul>
    );
  }
}

export default MessageList;
