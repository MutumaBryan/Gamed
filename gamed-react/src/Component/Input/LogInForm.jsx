import React from "react"
import UsernameInput from "../Input/UsernameInput"
import PasswordInput from "../Input/PasswordInput";
import LogIn from "../Button/LogIn";
import ForgotPasswordButton from "../Button/ForgotPasswordButton";

const LogInForm = () => {
    return (
    <div> 
    <UsernameInput/>
    <PasswordInput/>
    <LogIn/>
    <ForgotPasswordButton/>
    </div>
    );
};

export default LogInForm;