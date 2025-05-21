import React, { useState } from "react";
import SignUpGoogle from "../Component/Button/SignUpGoogle";
import CreateAccountButton from "../Component/Button/CreateAccountButton";
import UsernameInput from "../Component/Input/UsernameInput";
import PasswordInput from "../Component/Input/PasswordInput";
import "../Styles/CreateAccountForm.css";
import { Link, useNavigate } from "react-router-dom";

function CreateAccountForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const email = 'mutuma@gmai.com';
    if (password === confirmPassword) {
      setMessage("Passwords match! Proceeding...");
      const data = { email, username, password };
      fetch("http://35.170.178.248/api/docs#/Auth/AuthController_register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((responseData) => {
          console.log("Success:", responseData);
          setMessage("Password successfully sent, redirecting...");
          // Redirect to dashboard after successful submission
          navigate("/Dashboard", { state: { username: username } }); 
        })
        .catch((error) => {
          console.error("Error:", error);
          setMessage("Username is already in use, try again");
        });
    } else {
      setMessage("Passwords do not match. Please try again.");
    }
  };
  const styles = { 
    message: {
        marginRight: '45px',
        fontSize: '16px',
        color: 'red',
        textAlign: 'center',
    }
  }
  return (
    <React.Fragment>
      <fieldset id="create-account-fieldset">
        <legend>Create Account</legend>
        <form id="create-account-form" onSubmit={handleSubmit}>
          <UsernameInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Enter your password"
            required={true}
          />
          <PasswordInput
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword"
            placeholder="Confirm your password"
            required={true}
          />
          <p style={styles.message}>{message}</p>
          <div id="create-acc-button-wrapper">
            <CreateAccountButton />
            <p id="redirect-to-log-in">
              Have an account? <Link to={'/login'}><span>Login</span></Link>
            </p>
          </div>
          <div id="or-wrapper">
            <hr></hr>
            <p>or</p>
          </div>
          <SignUpGoogle />
        </form>
      </fieldset>
    </React.Fragment>
  );
}

export default CreateAccountForm;
