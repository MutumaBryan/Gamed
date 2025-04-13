import "./App.css";
import React from "react";
import PasswordInput from "./Component/Input/PasswordInput";
import CreateAccount from "./Pages/CreateAccount";
import LoginPage from "./Pages/LoginPage";
import SuccessPage from "./Pages/SuccessPage";
import ErrorPage from "./Pages/ErrorPage";
import PasscodeVerification from "./Pages/PasscodeVerification";
import PasswordVerification from "./Pages/PasswordVerification";

function App() {
  return (
    <React.Fragment>
      {/* <PasswordInput></PasswordInput>
      <CreateAccount />
      <LoginPage /> */}
      {/* <SuccessPage /> */}
      <PasswordVerification />
      {/* <ErrorPage /> */}
    </React.Fragment>
  );
}

export default App;

