import React from "react";

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

const MessageBar = () => {
  return (
    <div style={{ display: "flex", padding: 10 }}>
      <input style={inputStyle} placeholder="Votre message" />
      <button style={buttonStyle}>Envoyer</button>
    </div>
  );
};

export default MessageBar;
