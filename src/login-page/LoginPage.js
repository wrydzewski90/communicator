import "./loginPage.scss";
import { useState } from "react";

function LoginPage() {
    const [message, setMessage] = useState("login");
    const firstclick = () => {
        setMessage("login succes!");
    };
    return (
        <div className="container">
            <div className="main">
                <div className="leftSide">
                    <div className="image"></div>
                </div>
                <div className="rightSide">
                    <form action="/">
                        <p className="login-title">member login</p>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="login-email"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="login-password"
                                required
                            />

                            <button
                                onClick={firstclick}
                                type="submit"
                                name="login"
                                className="login-button"
                            >
                                {message}
                            </button>
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
