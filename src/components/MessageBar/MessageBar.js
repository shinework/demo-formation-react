import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../core/reducers/app";
import { Button, Input } from "./elements";

const MessageBar = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSendMessage = (body) => {
    const message = {
      id: Math.floor(Math.random() * 1000000),
      username: "Baptiste",
      body: body,
    };

    dispatch(addMessage(message));
  };

  return (
    <>
      <div style={{ display: "flex", padding: 10 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (!message) {
              setHasError(true);
            } else {
              handleSendMessage(message);
              setMessage("");
            }
          }}
        >
          <Input
            value={message}
            hasError={hasError}
            onChange={(event) => {
              setHasError(false);
              setMessage(event.target.value);
            }}
            placeholder="Votre message"
          />
          <Button>Envoyer</Button>
        </form>
      </div>
    </>
  );
};

export default MessageBar;
