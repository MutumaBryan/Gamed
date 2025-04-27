import React, { useState } from "react";
import UsernameInput from "../Component/Input/UsernameInput";
import PasswordInput from "../Component/Input/PasswordInput";
import LogIn from "../Component/Button/LogIn";
import SignUpGoogle from "../Component/Button/SignUpGoogle";
import "../Styles/LoginForm.css";
import { loginUser } from "../API/Auth";

const LogInForm = () => {
  const [username, setUsername] = useState(""); // UsernameInput needs to update this
  const [password, setPassword] = useState(""); // PasswordInput needs to update this
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await loginUser(username, password);
      console.log(result);
      // Handle success (example: navigate to dashboard)
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <fieldset id="login-fieldset">
        <legend>Log In</legend>
        <form id="login-form" onSubmit={handleSubmit}>
          <UsernameInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div id="login-button-wrapper">
            <LogIn loading={loading} />
            <p id="redirect-to-log-in">
              Forgot password? <a href="/forgot-password.html">Click here</a>{" "}
            </p>
          </div>
          <div id="or-wrapper">
            <hr />
            <p> or </p>
            <hr />
          </div>
          <SignUpGoogle />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </fieldset>
    </>
  );
};

export default LogInForm;
