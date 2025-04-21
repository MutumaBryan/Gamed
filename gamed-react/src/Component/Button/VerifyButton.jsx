import React from "react";
import "../../Styles/CheckoutButton.css";

const VerifyButton = ({ isDisabled, onVerify }) => {
  return (
    <div className="container">
      <div className="button-wrapper">
        <button
          onClick={onVerify}
          disabled={isDisabled}
          className="checkout-button"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyButton;
