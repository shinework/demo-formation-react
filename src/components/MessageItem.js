import React from "react";
import PropTypes from "prop-types";
import { Twemoji } from "react-emoji-render";

const MessageItem = ({ message }) => {
  return (
    <li
      style={{
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
      }}
    >
      <small>{message.username}</small>
      <div>
        <Twemoji text={message.body} />
      </div>
    </li>
  );
};

MessageItem.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default MessageItem;
