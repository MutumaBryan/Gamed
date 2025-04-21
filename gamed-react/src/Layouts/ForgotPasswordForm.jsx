import React, { useState } from "react";
import EmailInput from "../Component/Input/EmailInput";
import Submit from "../Component/Button/Submit";
// import GoBackIcon from "../../assets/images/Go_back_icon.svg";
import "../Styles/CreateAccountForm.css";

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!"); // Temporary feedback
  };

  return (
    <>
      <fieldset id="forgotPassword-form-fieldset">
        <legend>Oops, you forgot your Password?</legend>
        <h2>Don't worry! You'll get it in a jiffy</h2>
        <form onSubmit={handleSubmit} id="password-layout-form">
          <div className="password-form-container">
            <EmailInput value={formData.email} onChange={handleChange} />
            <div id="submit-button-wrapper">
              <Submit /> Removed onClick since form handles submit
              <div id="redirect-to-checkout">
                {/* <img src={GoBackIcon} alt="Go Back"></img> */}
                <a href="/login">Go back to Log In</a>
              </div>
            </div>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default ForgotPasswordForm;
