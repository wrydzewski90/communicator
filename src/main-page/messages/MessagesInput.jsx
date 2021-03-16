import React, { useState } from "react";
import { API_URL } from "../../Api";
import style from "./messagesInput.module.scss";

function MessagesInput({ token, userId, channelId, getMessages }) {
  const [message, setMessage] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    fetch(API_URL + `/chat.postMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
        "X-User-Id": userId,
      },
      body: JSON.stringify({
        text: message,
        roomId: channelId,
      }),
    }).then(() => {
      setMessage("");
      getMessages();
    });
  };
  return (
    <div>
      <textarea
        className={style.test}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default MessagesInput;
