import React, { useState, useEffect, createContext, useContext } from "react";

// Create the context
const QuizContext = createContext({
  question: "",
  options: [],
  selectedAnswer: null,
  setSelectedAnswer: () => {},
  timer: 0,
  nextQuestion: () => {},
  isAnswerSelected: false,
});

const PTCard = () => {
  const quizContext = useContext(QuizContext);
  const {
    question,
    options,
    selectedAnswer,
    setSelectedAnswer,
    timer,
    nextQuestion,
    isAnswerSelected,
  } = quizContext;

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  return (
    <div style={styles.card}>
      <p style={styles.question}>{question}</p>
      <div style={styles.options}>
        {options.map((option) => (
          <div
            key={option}
            style={{
              ...styles.option,
              backgroundColor:
                selectedAnswer === option
                  ? "#e0f7fa" // Light blue for selected
                  : "#ffffff", // White for not selected
              color: selectedAnswer === option ? "#0d47a1" : "#333", // Dark blue text
              border: `1px solid ${
                selectedAnswer === option ? "#64b5f6" : "#ccc"
              }`, // Blue border
            }}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div style={styles.timer}>{timer} seconds</div>
      <button
        style={{
          ...styles.nextButton,
          backgroundColor: isAnswerSelected ? "#4CAF50" : "#ccc",
          cursor: isAnswerSelected ? "pointer" : "not-allowed",
        }}
        onClick={isAnswerSelected ? nextQuestion : () => {}}
        disabled={!isAnswerSelected}
      >
        Next
      </button>
    </div>
  );
};

const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(60); // Initial timer value

  const questions = [
    {
      question: "What symbol is used for comments in JavaScript?",
      options: ["<!-- comment -->", "// comment", '" comment "'],
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      options: ["alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"],
    },
    {
      question: "Which keyword declares a variable in JavaScript?",
      options: ["var", "let", "Both var and let"],
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  // Timer logic using useEffect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup on unmount or timer expiry
    }
    if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer, currentQuestionIndex]); // Depend on timer and currentQuestionIndex so it resets on question change

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null); // Reset selected answer for next question
      setTimer(60); // Reset timer
    } else {
      // Handle end of quiz (e.g., show results)
      alert("Quiz Finished!");
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setTimer(60);
    }
  };

  const contextValue = {
    question: currentQuestion.question,
    options: currentQuestion.options,
    selectedAnswer,
    setSelectedAnswer,
    timer,
    nextQuestion: handleNextQuestion,
    isAnswerSelected: !!selectedAnswer,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
};

const ProficiencyTest = () => {
  return (
    <div style={styles.app}>
      <QuizProvider>
        <PTCard />
      </QuizProvider>
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
    backgroundImage: 'url(../src/assets/images/Create_Account_Bg.svg)', 
        backgroundSize: 'cover',
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  question: {
    fontSize: "20px",
    fontWeight: "400",
    color: "#323132",
    marginBottom: "10px",
    fontFamily: "Raleway",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  option: {
    background: "#D8BFFF",
    boxShadow: "20px 20px 40px -10px rgba(53, 54, 53, 0.1)",
    borderRadius: "16px",
    fontFamily: "Raleway",
    fontSize: "20px",
    fontWeight: "400",
    padding: "12px",
    border: "1px solid #ccc",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
    ":hover": {
      backgroundColor: "#e0f7fa", // Light blue on hover
      color: "#0d47a1", // Dark blue on hover
      borderColor: "#64b5f6",
    },
  },
  timer: {
    fontSize: "16px",
    textAlign: "center",
    /* timer */
    padding: "12px 23px",
    background: "#4DAA69",
    borderRadius: "32px",
    color: '#FEFDFF',
  },
  nextButton: {
    /* Quiz Button in progress */

    fontFamily: "Raleway",
    fontWeight: "800",
    fontSize: "20px",
    textTransform: "capitalize",

    color: "#FEFDFF",
    padding: "12px 24px",
    background: "#4DAA69",
    boxShadow:
      "inset 2px 2px 4px rgba(236, 237, 236, 0.1), inset 20px 20px 20px -10px rgba(43, 45, 43, 0.25)",
    borderRadius: "24px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    alignSelf: "flex-end",
    ":hover": {
      backgroundColor: "#45a049",
    },
  },
};

export default ProficiencyTest;
