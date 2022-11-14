import MessageBar from "./MessageBar";
import MessageList from "./MessageList";

const chatStyle = {
  borderRadius: 10,
  fontFamily: "Montserrat",
  width: 400,
  backgroundColor: "#A2DED0",
  padding: 10,
  display: "flex",
  flexDirection: "column",
};

const Chat = () => {
  return (
    <div style={chatStyle}>
      <div
        style={{
          paddingLeft: 10,
          paddingTop: 10,
          fontSize: 30,
        }}
      >
        👅 <b>JoliChat</b>
      </div>
      <MessageList />
      <MessageBar />
    </div>
  );
};

export default Chat;
