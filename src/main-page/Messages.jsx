import React, { useEffect, useState } from "react";
import { API_URL } from "../api";

function Messages({ channelId, token, userId }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch(API_URL + `/channels.messages?roomId=${channelId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
        "X-User-Id": userId,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMessages(response.messages);
      });
  }, [channelId, token, userId]);
  return (
    <div>
      {messages
        ? messages.map((message) => (
            <div key={message.msg}>
              {message.u.name} : {message.msg}
            </div>
          ))
        : null}
    </div>
  );
}

export default Messages;
