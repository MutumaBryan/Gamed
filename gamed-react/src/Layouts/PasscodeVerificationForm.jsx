import React, { useState } from "react";
import PasscodeInput from "../Component/Input/PasscodeInput";
import VerifyButton from "../Component/Button/VerifyButton";
import ResendCode from "../Component/Button/ResendCode";
import "../Styles/ForgotPasswordForm.css";

const PasscodeVerificationForm = () => {
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("");

  // to store the full passcode
  const handleComplete = (code) => {
    setPasscode(code);
    setMessage("");
  };

  // to handle resend code
  const handleResendCode = () => {
    console.log("Resending verification code....");
    alert("A new code has been sent to your email!"); // Show alert instead of displaying a message
  };

  // to handle verification
  const handleVerify = () => {
    if (passcode.length === 5) {
      console.log("Verifying Passcode:", passcode);
      setMessage("Passcode verified successfully! ✅");
    } else {
      setMessage("Invalid passcode. Please check and try again.");
    }
  };
  return (
    <>
      <fieldset id="form-fieldset">
        <legend>Hey, your password reset is 80% set</legend>
        <h2>We sent a verification code to your email, enter it below</h2>
        <form id="password-layout-form">
          <div className="password-form-container">
            <PasscodeInput length={5} onComplete={handleComplete} />
            {message && <p className="message">{message}</p>}
            <div id="submit-button-wrapper">
              <div id="redirect-to-checkout">
                <ResendCode onResend={handleResendCode} />
              </div>
              <VerifyButton
                isDisabled={passcode?.length !== 5}
                onVerify={handleVerify}
              />
            </div>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default PasscodeVerificationForm;
