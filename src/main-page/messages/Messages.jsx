import React, { useCallback, useEffect, useState } from "react";
import { API_URL } from "../../Api";
import MessagesInput from "./MessagesInput";
import style from "./messages.module.scss";
import { useSelector } from "react-redux";

function Messages({ channelId }) {
  const [messages, setMessages] = useState([]);
  const userData = useSelector((state) => state.userData);
  const { token, userId } = userData;

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
        response &&
          response.messages &&
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
        <MessagesInput channelId={channelId} getMessages={getMessages} />
      </div>
    </>
  );
}

export default Messages;
