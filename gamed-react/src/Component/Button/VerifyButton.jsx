import React from "react";

const VerifyButton = ({isDisabled, onVerify }) => {
    return (
        <button onClick={onVerify}
        disabled={isDisabled}> 
             Verify
        </button>
    );
};

export default VerifyButton;