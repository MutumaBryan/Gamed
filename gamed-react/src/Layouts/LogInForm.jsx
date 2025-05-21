import React, { useState } from "react";
import UsernameInput from "../Component/Input/UsernameInput";
import PasswordInput from "../Component/Input/PasswordInput";
import LogIn from "../Component/Button/LogIn";
import SignUpGoogle from "../Component/Button/SignUpGoogle";
import "../Styles/LoginForm.css";
import { loginUser } from "../API/Auth";
import { useNavigate } from "react-router-dom";


const LogInForm = () => {
  const [username, setUsername] = useState(null); // UsernameInput needs to update this
  const [password, setPassword] = useState(""); // PasswordInput needs to update this
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginUser(username, password);
      navigate("/Dashboard", { state: { username: username } });
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
            value={JSON.stringify(username)}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
          />
          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Enter your password"
            required={true}
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
