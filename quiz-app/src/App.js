import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("Yohannes")
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButton = (isCorrect) => {
    if(isCorrect === true) {
      setScore(score + 5)
    } 

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true);
    }
  };

  const questions = [
    {
      questionText: "Which one is an intrinsic part of CSS frameworks?",
      answerOptions: [
        { answerText: "Version Control System", isCorrect: false },
        { answerText: "Bootstrap", isCorrect: true },
        { answerText: "MongoDB", isCorrect: false },
        { answerText: "React", isCorrect: false },
      ],
    },
    {
      questionText: "Who was the CEO of Sefaricom in 2010?",
      answerOptions: [
        { answerText: "Johannes", isCorrect: false },
        { answerText: "Joseph", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony", isCorrect: false },
      ],
    },

    {
      questionText: "Which company created iPhone?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },

    {
      questionText: "Which one of the following is used to build UI?",
      answerOptions: [
        { answerText: "Express", isCorrect: false },
        { answerText: "React", isCorrect: true },
        { answerText: "PHP", isCorrect: false },
        { answerText: "mongoDb", isCorrect: false },
      ],
    },

    {
      questionText: "One of the following is used to build a server.",
      answerOptions: [
        { answerText: "node.js & Express", isCorrect: true },
        { answerText: "React", isCorrect: false },
        { answerText: "DOM", isCorrect: false },
        { answerText: "HTML", isCorrect: false },
      ],
    }
  ];

  return (
    <div className="quiz-container">
      <h1 className="title">Quiz</h1>

      {showScore ? (
        <div className="score-section">
        Congratulations {firstName}! You scored {score} out of {questions.length * 5}.
        </div>
      ) : (
        <div className="questions-and-answers-container">
          <div className="question-section">
            <div className="question-count">
              <span> {currentQuestion}/ {questions.length} </span> 
            </div>

            <div className="question-tex"> {questions[currentQuestion].questionText} </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerButton(answerOption.isCorrect)}> {answerOption.answerText} </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
