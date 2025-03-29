import react from "react";

const LogIn = ({onClick}) => {
    return (
        <button onClick={onClick} className="login-button">
            Log In
        </button>
    );
};

export default LogIn;