import React from "react";
import EmailInput from "../Component/Input/EmailInput";
import Submit from "../Component/Button/Submit";
import GoBackButton from "../Component/Button/GoBackButton"
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
    return (
        <div className="container">
            <div className="card">
            <h2> Oops, you forgot your Password?</h2>
            <p>Don't worry! you'll get it in a jiffy</p>
            <EmailInput/>
            <Submit/>
            <GoBackButton/>
            </div>
        </div>
    );
};

export default ForgotPassword;