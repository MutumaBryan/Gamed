import React from "react";
import UsernameInput from "../Component/Input/UsernameInput";
import PasswordInput from "../Component/Input/PasswordInput";
import LogIn from "../Component/Button/LogIn";
import SignUpGoogle from "../Component/Button/SignUpGoogle";
import "../styles/CreateAccountForm.css";

const LogInForm = () => {
  return (
    <>
      <fieldset id="create-account-fieldset">
        <legend>Log In</legend>
        <form id="create-account-form">
          <UsernameInput />
          <PasswordInput />
          <div id="create-acc-button-wrapper">
            <LogIn />
            <p id="redirect-to-log-in">
              Forgot password? <a href="/forgot-password.html">Click here</a>{" "}
            </p>
          </div>
          <div id="or-wrapper">
            <p> or </p>
          </div>
          <SignUpGoogle />
        </form>
      </fieldset>
    </>
  );
};

export default LogInForm;
