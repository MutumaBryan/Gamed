import React from "react";
import PasscodeVerificationForm from "../Layouts/PasscodeVerificationForm";
import "../styles/ForgotPassword.css";

const PasscodeVerification = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <PasscodeVerificationForm />
        </div>
      </div>
    </>
  );
};

export default PasscodeVerification;
