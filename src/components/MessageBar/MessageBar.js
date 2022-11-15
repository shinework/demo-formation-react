import React, { useState } from "react";
import { Button, Input } from "./elements";

const MessageBar = ({ handleSendMessage }) => {
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

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
