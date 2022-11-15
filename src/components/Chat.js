import MessageBar from "./MessageBar/MessageBar";
import MessageList from "./MessageList";
import chatStyles from "./Chat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GithubPicker } from "react-color";
import { updateColor } from "../core/reducers/app";

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.app.messages);
  const themeColor = useSelector((state) => state.app.themeColor);

  return (
    <div
      className={chatStyles.container}
      style={{ backgroundColor: themeColor }}
    >
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
      <GithubPicker
        onChangeComplete={({ hex }) => {
          dispatch(updateColor(hex));
        }}
      />
    </div>
  );
};

export default Chat;
