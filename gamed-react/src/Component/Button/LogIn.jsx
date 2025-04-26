import React from "react";
import "./../../Styles/CheckoutButton.css";

const LogIn = ({ onClick }) => {
  return (
    <div className="container">
      <div className="button-wrapper">
        <button type="submit" onClick={onClick} className="checkout-button">
          Log In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
