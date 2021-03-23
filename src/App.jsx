import LoginPage from "./login-page/LoginPage.jsx";
import MainPage from "./main-page/MainPage.jsx";
import { useState } from "react";
import "./login-page/fontawesome";
import UserDataContext from "./context";

function App() {
  const [userData, setUserData] = useState(null);

  if (userData) {
    return (
      <UserDataContext.Provider value={userData}>
        <MainPage />
      </UserDataContext.Provider>
    );
  } else {
    return <LoginPage onSucces={setUserData} />;
  }
}
export default App;
