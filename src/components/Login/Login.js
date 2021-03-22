import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  // In a full application, you’ll need to handle situations where the component unmounts before a Promise resolves.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper" style={styles.wrapper}>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
