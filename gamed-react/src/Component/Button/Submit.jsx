import React from "react";
import "../../Styles/CheckoutButton.css";

const Submit = () => {
  return (
    <div className="checkout-button-container">
      <div className="button-wrapper">
        <button type="submit" className="checkout-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Submit;
