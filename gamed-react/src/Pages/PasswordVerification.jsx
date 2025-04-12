import React from "react";
import CustomButton from "../Component/Button/CustomButton";

function PasswordVerification() {
  return (
    <div className="container">
      <div className="passwordverification__card">
        <h2 className="passwordverification__heading">And we’re almost set!</h2>
        <p className="passwordverification__text">
          Input your new password details below
        </p>
        <div className="passwordverification__formgroup">
          <label className="passwordverification__label">Password</label>
          <input
            type="password"
            className="passwordverification__password"
            placeholder="Input your password"
          />
        </div>
        <div className="passwordverification__formgroup">
          <label className="passwordverification__label">
            Confirm Password
          </label>
          <input
            type="password"
            className="passwordverification__password"
            placeholder="Re-enter password"
          />
        </div>
        <CustomButton text={"Submit"} />
      </div>
    </div>
  );
}

export default PasswordVerification;
