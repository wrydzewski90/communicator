import "./MainPage.scss";

function MainPage() {
  return (
    <div className="container">
      <div className="leftSide">
        <div className="title">
          <h1>Communicator</h1>
          <br />
          <br />
          <h4>Channels</h4>
        </div>
        <div className="channels">
          <div className="channel_1">
            <p>test channel</p>
          </div>
          <div className="channel_2">
            <p>second test</p>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="header">
          <div className="top">
            document.getElementsByClassName("channel_1")
          </div>
          <div className="bottom"></div>
        </div>
        <div className="messagesField"></div>
        <div className="typeField">
          <input
            type="text"
            name="typeMessage"
            placeholder="Send message"
            className="typeMessage"
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
