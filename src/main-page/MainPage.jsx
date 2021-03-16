import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import ChannelsList from "./channels/ChannelsList";
import Messages from "./messages/Messages";
import Header from "./Header";
import MessagesInput from "./messages/MessagesInput";

function MainPage({ userData }) {
  const [currentChannel, setCurrentChannel] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.channelsList}>
        <ChannelsList
          token={userData.authToken}
          userId={userData.userId}
          name={userData.me.name}
          setCurrentChannel={setCurrentChannel}
          currentChannel={currentChannel}
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.header}>
          <div className={styles.top}>
            {currentChannel ? (
              <Header channelName={currentChannel.name} />
            ) : null}
          </div>
          <div className={styles.bottom}></div>
        </div>
        {currentChannel ? (
          <Messages
            channelId={currentChannel.id}
            token={userData.authToken}
            userId={userData.userId}
          />
        ) : null}
      </div>
    </div>
  );
}

export default MainPage;
