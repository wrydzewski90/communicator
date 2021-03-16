import React, { useCallback, useEffect, useState } from "react";
import { API_URL } from "../../Api";
import MessagesInput from "./MessagesInput";
import style from "./messages.module.scss";

function Messages({ channelId, token, userId }) {
  const [messages, setMessages] = useState([]);

  const getMessages = useCallback(() => {
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
        setMessages(response.messages.reverse());
      });
  }, [channelId, token, userId]);
  useEffect(() => {
    getMessages();
  }, [channelId, getMessages, token, userId]);
  return (
    <>
      <div className={style.messagesField}>
        {messages
          ? messages.map((message) => (
              <div key={message._id}>
                {message.u.name} : {message.msg}
              </div>
            ))
          : null}
      </div>
      <div className={style.typeField}>
        <MessagesInput
          token={token}
          userId={userId}
          channelId={channelId}
          getMessages={getMessages}
        />
      </div>
    </>
  );
}

export default Messages;
