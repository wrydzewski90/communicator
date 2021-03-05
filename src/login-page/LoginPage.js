import "./loginPage.scss";
import { useState } from "react";

function LoginPage({ onSucces }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = () => {
        setLoading(true);
        fetch("https://open.rocket.chat/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: username,
                password: password,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                if (response.status === "error") {
                    console.log(response.error);
                    setError(response.error);
                }

                if (response.status === "success") {
                    onSucces(response.data);
                }

                setLoading(false);
            });
       
    };

    return (
        <div className="container">
            <div className="main">
                <div className="leftSide">
                    <div className="image"></div>
                </div>
                <div className="rightSide">
                    <form>
                        <p className="login-title">member login</p>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="login-email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="login-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <div
                                onClick={() => login()}
                                type="submit"
                                name="login"
                                className="login-button"
                            >
                                login
                            </div>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                        </div>
                    </form>
                    <div className="remember-wrapper">
                        <span className="forgot">forgot </span>
                        <span className="userpass">username / password?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
