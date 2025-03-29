import React from "react";
import "../../styles/FormInputStyles.css";

const EmailInput = () => {
    return (
        <div className="input-container">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" placeholder="Enter your email address" 
        required/>
        </div>
    );
};

export default EmailInput;