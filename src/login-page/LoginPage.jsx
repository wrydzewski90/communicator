import { useState } from "react";
import styles from"./loginPage.module.scss";
import {API_URL} from "../api.js";

function LoginPage({ onSucces }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = () => {
        setLoading(true);
        fetch(API_URL + "/login", {
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
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.leftSide}>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.rightSide}>
                    <form>
                        <p className={styles.loginTitle}>member login</p>
                        <div className={styles.inputWrapper}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={styles.loginEmail}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className={styles.loginPassword}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <div
                                onClick={() => login()}
                                type="submit"
                                name="login"
                                className={styles.loginButton}
                            >
                                login
                            </div>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                        </div>
                    </form>
                    <div className={styles.rememberWrapper}>
                        <span className={styles.forgot}>forgot </span>
                        <span className={styles.userpass}>username / password?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
