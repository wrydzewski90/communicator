import LoginPage from "./login-page/LoginPage.js";
import { useState } from "react";

function App() {
    const [userData, setUserData] = useState(null);
    if (userData) {
        return (
            <div>
                ekran {userData.me.name} {userData.authToken}
            </div>
        );
    } else {
        return <LoginPage onSucces={setUserData} />;
    }
}

export default App;
