import React from "react";
import LogInForm from "../Component/Input/LogInForm";
import SignUpGoogle from "../Component/Button/SignUpGoogle";
import 

const LoginPage = () => {
    return (
    <div> 
    <h2>Log In </h2>
    <LogInForm/>
    <p> or </p>
    <SignUpGoogle/>
    </div>
    );
};

export default LoginPage;