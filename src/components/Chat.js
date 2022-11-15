import MessageBar from "./MessageBar/MessageBar";
import MessageList from "./MessageList";
import chatStyles from "./Chat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GithubPicker } from "react-color";
import { fetchMessages, updateColor } from "../core/reducers/app";
import { useEffect } from "react";

const Chat = () => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.app.messages);
  const themeColor = useSelector((state) => state.app.themeColor);
  const hasMessagesFetching = useSelector(
    (state) => state.app.hasMessagesFetching
  );

  useEffect(() => {
    console.log("on mount");
    dispatch(fetchMessages());
  }, []);

  return (
    <div
      className={chatStyles.container}
      style={{
        backgroundColor: themeColor,
        opacity: hasMessagesFetching ? 0.5 : 1,
      }}
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

      {hasMessagesFetching ? (
        <div style={{ marginTop: 10, padding: 6, borderRadius: 5 }}>
          Chargement...
        </div>
      ) : (
        <>
          {messages.length > 0 ? (
            <MessageList messages={messages} />
          ) : (
            <div style={{ marginTop: 10, padding: 6, borderRadius: 5 }}>
              Aucun message
            </div>
          )}
        </>
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
