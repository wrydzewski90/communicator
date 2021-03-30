import React, { useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../Api";
import style from "./messagesInput.module.scss";

function MessagesInput({ channelId, getMessages }) {
  const [message, setMessage] = useState("");
  const userData = useSelector((state) => state.userData);
  const { token, userId } = userData;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      message && sendMessage();
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
    <textarea
      placeholder="Type a message"
      className={style.test}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default MessagesInput;
