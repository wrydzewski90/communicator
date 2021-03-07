import LoginPage from "./login-page/LoginPage.jsx";
import MainPage from "./main-page/MainPage.jsx";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  if (userData) {
    return <MainPage userData={userData}/>;   
  } else {
    return <LoginPage onSucces={setUserData} />;
  }
}
export default App;
