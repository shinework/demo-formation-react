import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postMessage } from "../../core/reducers/app";
import { Button, Input } from "./elements";

const MessageBar = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const hasMessageCreating = useSelector(
    (state) => state.app.hasMessageCreating
  );

  const handleSendMessage = (body) => {
    const message = {
      id: Math.floor(Math.random() * 1000000),
      username: "Baptiste",
      body: body,
    };

    dispatch(postMessage(message));
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
          <Button
            style={{ opacity: hasMessageCreating ? 0.5 : 1 }}
            disabled={hasMessageCreating}
          >
            Envoyer
          </Button>
        </form>
      </div>
    </>
  );
};

export default MessageBar;
