import React, { useState } from "react";
import "../../Styles/FormInputStyles.css";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const isLabelActive = email.length > 0;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className={"flex-floating-label"}>
      <label htmlFor="email" className={isLabelActive ? "active" : ""}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
        required
      />
    </div>
  );
};

export default EmailInput;
