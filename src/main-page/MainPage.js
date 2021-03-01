import "./MainPage.scss";

function MainPage() {
  return (
    <div className="container">
      <div className="leftSide"></div>
      <div className="rightSide">
        <div className="header">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        <div className="messagesField"></div>
        <div className="typeField"></div>
      </div>
    </div>
  );
}

export default MainPage;
