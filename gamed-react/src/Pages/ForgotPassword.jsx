import React from "react";
import ForgotPasswordForm from "../Layouts/ForgotPasswordForm";
import "../Styles/ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <>
      <div className="container">
        <div className="card" id="forgotpassowrd-card-wrapper">
          <ForgotPasswordForm />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
