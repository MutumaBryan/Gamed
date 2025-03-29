import React, {useState} from "react";
import PasscodeInput from "../Component/Input/PasscodeInput";
import VerifyButton from "../Component/Button/VerifyButton";
import ResendCode from "../Component/Button/ResendCode"
import "../styles/ForgotPassword.css"


const PasscodeVerification = () => {
    const [passcode, setPasscode] =useState("");

    // to store the full passcode
    const handleComplete = (code) => {
        setPasscode(code);
    };

    // to handle resend code
    const handleResendCode = () => {
        console.log("Resending verification code....");
    };

    // to handle verification
    const handleVerify = () => {
        console.log("Verifying Passcode:", passcode);
    };

    return (
        <div className="container">
            <div className="card">
        <h2>Hey, your password reset is 80% set</h2>
        <p>We sent a verification code to your email, enter it below</p>
        <PasscodeInput length={5} onComplete={handleComplete}/>
        <ResendCode onResend={handleResendCode}/>
        <VerifyButton isDisabled={passcode?.length !== 5} onVerify={handleVerify} />
        </div>
        </div>
    );
};

export default PasscodeVerification;