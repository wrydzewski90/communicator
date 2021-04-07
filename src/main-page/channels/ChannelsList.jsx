import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../Api";
import styles from "./ChannelsList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChannelsList({ currentChannel, setCurrentChannel }) {
  const [channelsList, setChannelsList] = useState([]);
  const [addChannelInputValue, setAddChannelInputValue] = useState("");

   

  const userData = useSelector((state) => state.userData);
  const { token, userId, name } = userData;

 

  const addChannel = () => {
    fetch(API_URL + "/channels.create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
        "X-User-Id": userId,
      },
      body: JSON.stringify({
        name: addChannelInputValue,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.status === "error") {
          console.log("error");
        } else {
          fetchChannels();
          setAddChannelInputValue("");
        }
      });
  };

   const handleKeyDown = (event) => {
     if (event.key === "Enter") {
       addChannel();
     }
   };
  

  const deleteChannel = (roomName) => {
    fetch(API_URL + "/channels.delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
        "X-User-Id": userId,
      },
      body: JSON.stringify({
        roomName,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.status === "error") {
          console.log("error");
        } else {
          fetchChannels();
        }
      });
  };

  const fetchChannels = () => {
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
  };

  useEffect(() => {
    fetchChannels();
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
          {channel.name}{" "}
          <button className={styles.cross} onClick={() => deleteChannel(channel.name)}>
            {" "}
            
              <FontAwesomeIcon icon="times" />
           
          </button>
          
        </div>
      ))}
      <button onClick={addChannel} className={styles.addNewChannelButton}>
        +Add a channel
      </button>
      <br />
      <input
        className={styles.channelInput}
        type="text"
        placeholder="channel name"
        value={addChannelInputValue}
        onChange={(e) => setAddChannelInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default ChannelsList;
