import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import ChannelsList from "./ChannelsList";


function MainPage({userData}) {
    const [currentChannelId, setCurrentChannelId] = useState(null)
  
  return (
    <div className={styles.container}>
      <div className={styles.channelsList}>
        <ChannelsList 
        token={userData.authToken} 
        userId={userData.userId} 
        name={userData.me.name}
        setCurrentChannelId={setCurrentChannelId}
        currentChannelId={currentChannelId}
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.header}>
          <div className={styles.top}>
          </div>
          <div className={styles.bottom}></div>
        </div>
        <div className={styles.messagesField}>
          Current channel: 
          {currentChannelId}
        </div>
        <div className={styles.typeField}>
          <input
            type="text"
            name="typeMessage"
            placeholder="Send message"
            className={styles.typeMessage}
          />
        </div>
      </div>
      </div>



  );
}

export default MainPage;
