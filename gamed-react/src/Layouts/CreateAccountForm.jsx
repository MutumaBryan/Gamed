import React from "react";
import SignUpGoogle from "../Component/Button/SignUpGoogle";
import CreateAccountButton from "../Component/Button/CreateAccountButton";
import UsernameInput from "../Component/Input/UsernameInput";
import PasswordInput from "../Component/Input/PasswordInput";
import "../Styles/CreateAccountForm.css";

function CreateAccountForm() {
  return (
    <React.Fragment>
      <fieldset id="create-account-fieldset">
        <legend>Create Account</legend>
        <form id="create-account-form">
          <UsernameInput />
          <PasswordInput />
          <PasswordInput />
          <div id="create-acc-button-wrapper">
            <CreateAccountButton />
            <p id="redirect-to-log-in">
              Have an account? <span>Login</span>
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
