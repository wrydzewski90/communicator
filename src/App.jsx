import LoginPage from "./login-page/LoginPage.jsx";
import MainPage from "./main-page/MainPage.jsx";
import "./login-page/fontawesome";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.userData.token);

  if (token) {
    return <MainPage />;
  } else {
    return <LoginPage />;
  }
}
export default App;
