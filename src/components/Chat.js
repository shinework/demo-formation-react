import MessageBar from "./MessageBar/MessageBar";
import MessageList from "./MessageList";
import chatStyles from "./Chat.module.css";
import { useSelector } from "react-redux";

const Chat = () => {
  const messages = useSelector((state) => state.app.messages);

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
      <MessageBar />
    </div>
  );
};

export default Chat;
