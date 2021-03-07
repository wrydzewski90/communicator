import styles from "./MainPage.module.scss";

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <div className={styles.header}>
          <div className={styles.top}>
          </div>
          <div className={styles.bottom}></div>
        </div>
        <div className={styles.messagesField}></div>
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
