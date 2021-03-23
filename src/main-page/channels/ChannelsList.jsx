import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../Api";
import UserDataContext from "../../context";
import styles from "./ChannelsList.module.scss";

function ChannelsList({ currentChannel, setCurrentChannel }) {
  const [channelsList, setChannelsList] = useState([]);
  const userData = useContext(UserDataContext);
  const { authToken: token, userId, name = userData.me.name } = userData;

  useEffect(() => {
    fetch(API_URL + "/channels.list.joined", {
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
        setChannelsList(response.channels);
      });
  }, []);

  return (
    <div>
      <div className={styles.name}>{name}</div>
      <h3>Channels list:</h3>
      {channelsList.map((channel) => (
        <div
          className={`${styles.channel}  
            ${
              currentChannel && currentChannel.id === channel._id
                ? styles.light
                : ""
            }`}
          key={channel._id}
          onClick={() =>
            setCurrentChannel({
              id: channel._id,
              name: channel.name,
            })
          }
        >
          {channel.name}
        </div>
      ))}
    </div>
  );
}

export default ChannelsList;
