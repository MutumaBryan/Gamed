import "./App.css";
import React from "react";
import LoginPage from "./Pages/LoginPage";
import ForgotPassword from "./Pages/ForgotPassword";
import PasscodeVerification from "./Pages/PasscodeVerification";
import PasswordInput from "./Component/Input/PasswordInput";

function App() {
  return (
    <React.Fragment>
    {/* <LoginPage></LoginPage> */}
    {/* <PasswordInput></PasswordInput> */}
    <ForgotPassword></ForgotPassword>
    <PasscodeVerification></PasscodeVerification>
    </React.Fragment>
  );
}

export default App;
