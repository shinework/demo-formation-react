import React, { useState } from "react";

const inputStyle = {
  borderRadius: 10,
  border: "none",
  fontSize: 16,
  padding: 10,
  marginRight: 10,
  flexGrow: 1,
};

const buttonStyle = {
  borderRadius: 10,
  cursor: "pointer",
  fontSize: 20,
  color: "#336E7B",
  fontWeight: "bold",
  padding: 10,
  flexGrow: 1,
  border: "3px solid #336E7B",
  backgroundColor: "transparent",
};

const MessageBar = ({ handleSendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <div style={{ display: "flex", padding: 10 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(message);
          setMessage("");
        }}
      >
        <input
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          style={inputStyle}
          placeholder="Votre message"
        />
        <button style={buttonStyle}>Envoyer</button>
      </form>
    </div>
  );
};

export default MessageBar;
