import React from "react";
import "../../styles/CheckoutButton.css";

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
