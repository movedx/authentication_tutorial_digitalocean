import React from "react";
import styles from "./Login.css";

const Login = () => {
  return (
    <div className="login-wrapper" style={styles.wrapper}>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;