import React from "react";
import errorimg from "../assets/images/error.svg";
import closeimg from "../assets/images/close.svg";
import CustomButton from "../Component/Button/CustomButton";
function ErrorPage() {
  return (
    <main className="success_container">
      <img src={closeimg} alt="close" className="success_close" />
      <img src={errorimg} alt="success" style={{ width: 279, height: 279 }} />
      <p className="error_text">OOps, you have been blocked from logging in</p>
      <p className="error_small_text">Try again after 10 minutes</p>
      <CustomButton text={"Log in"} />
    </main>
  );
}

export default ErrorPage;
