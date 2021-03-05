import LoginPage from "./login-page/LoginPage.js";
import MainPage from "./main-page/MainPage.js";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  if (userData) {
    return (
      <div>
        <MainPage />
      </div>
    );
  } else {
    return <LoginPage onSucces={setUserData} />;
  }
}
export default App;
