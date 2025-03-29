import { useState, useEffect} from "react";

const ResendCode = ({onResend}) => {
    const [timer, setTimer] = useState(60);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        let countdown;
        if (timer > 0) {
            countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
        } else {
            setIsDisabled(false);
        }
        return () => clearTimeout(countdown);
    }, [timer]);

    const handleResend = () => {
         // to rest timer to 60 seconds
         setTimer(60); 
        // to disable the resend link again
        setIsDisabled(true);
        // to call the function to resend the code 
        onResend();
    };

    return (
        <div>
           <p>If you did not receive a code,{""} 
             <a href="#" onClick={isDisabled ? (e) => e.preventDefault() : handleResend}
             style={{pointerEvents: isDisabled ? "none" : "auto", color: isDisabled ? "grey" : "blue"}} >
                Click here
             </a>{""}
             {isDisabled && `in ${timer}s`}
            </p>
        </div>
    );

};

export default ResendCode;