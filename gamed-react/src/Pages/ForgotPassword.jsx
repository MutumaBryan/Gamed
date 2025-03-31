import React from "react";
import ForgotPasswordForm from "../Layouts/ForgotPasswordForm";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <ForgotPasswordForm />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
