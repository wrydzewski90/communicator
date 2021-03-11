import { useState } from "react";
import styles from "./loginPage.module.scss";
import { API_URL } from "../api.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          setError(response.error);
        } else if (response.status === "success") {
          onSucces(response.data);
        }

        setLoading(false);
      });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      login();
    }
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
                onKeyDown={handleKeyDown}
              />
              <div
                onClick={() => login()}
                type="submit"
                name="login"
                className={styles.loginButton}
              >
                {loading ? (
                  <span className={styles.spinner}>
                    <FontAwesomeIcon icon="spinner" />
                  </span>
                ) : (
                  <span>login</span>
                )}
              </div>
            </div>
          </form>

          <div className={styles.rememberWrapper}>
            {error ? (
              <div className={styles.error}>incorrect username or password</div>
            ) : null}
            <span className={styles.forgot}>forgot </span>
            <span className={styles.userpass}>username / password?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
