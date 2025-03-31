import react from "react";
import "../../styles/CheckoutButton.css";

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
