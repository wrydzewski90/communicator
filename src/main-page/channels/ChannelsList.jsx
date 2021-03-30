import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../Api";
import styles from "./ChannelsList.module.scss";

function ChannelsList({ currentChannel, setCurrentChannel }) {
  const [channelsList, setChannelsList] = useState([]);
  const userData = useSelector((state) => state.userData);
  const { token, userId, name } = userData;

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
        const channels = response.channels;
        setChannelsList(channels);
        if (channels[0]) {
          setCurrentChannel({
            id: channels[0]._id,
            name: channels[0].name,
          });
        }
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
