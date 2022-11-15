import { useState } from "react";
import MessageBar from "./MessageBar/MessageBar";
import MessageList from "./MessageList";
import chatStyles from "./Chat.module.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (messageBody) => {
    const message = {
      id: messages.length + 1,
      username: "Baptiste",
      body: messageBody,
    };

    setMessages([...messages, message]);
  };

  return (
    <div className={chatStyles.container}>
      <div
        style={{
          paddingLeft: 10,
          paddingTop: 10,
          fontSize: 30,
        }}
      >
        👅 <b>JoliChat</b>
      </div>
      {messages.length > 0 ? (
        <MessageList messages={messages} />
      ) : (
        <div style={{ marginTop: 10, padding: 6, borderRadius: 5 }}>
          Aucun message
        </div>
      )}
      <MessageBar handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
