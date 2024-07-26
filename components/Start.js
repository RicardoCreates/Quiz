import styled from "styled-components";
import { useState } from "react";

export default function Start() {
  const [answerVisibility, setIsAnswerVisibility] = useState({
    answer1: false,
    answer2: false,
    answer3: false,
  });

  const toggleAnswerVisibility = (answerKey) => {
    setIsAnswerVisibility((prevVisibility) => ({
      ...prevVisibility,
      [answerKey]: !prevVisibility[answerKey],
    }));
  };

  return (
    <QuizContainer>
      <StyledQuiz>
        <h1>What is the Quiz about ?</h1>
      </StyledQuiz>
      <Button onClick={() => toggleAnswerVisibility("answer1")}>
        {answerVisibility.answer1 ? "Hide Answer" : "Show Answer"}
      </Button>
      {answerVisibility.answer1 && (
        <Answer>
          <h2>
            The Quiz is about answering some generell knolege Questions, just
            for fun 😊
          </h2>
        </Answer>
      )}
      <StyledQuiz>
        <h1>How does the Quiz work ?</h1>
      </StyledQuiz>
      <Button onClick={() => toggleAnswerVisibility("answer2")}>
        {answerVisibility.answer2 ? "Hide Answer" : "Show Answer"}
      </Button>
      {answerVisibility.answer2 && (
        <Answer>
          <h2>
            Read the Question, if you dont know the answer or want to check,
            click on Show Answer
          </h2>
        </Answer>
      )}
      <StyledQuiz>
        <h1>Enjoy</h1>
      </StyledQuiz>
      <Button onClick={() => toggleAnswerVisibility("answer3")}>
        {answerVisibility.answer3 ? "Hide Answer" : "Show Answer"}
      </Button>
      {answerVisibility.answer3 && (
        <Answer>
          <h2>Enjoy the Quiz 😄</h2>
        </Answer>
      )}
    </QuizContainer>
  );
}

const StyledQuiz = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  margin-top: 40px;
  width: 80vw;
  border-radius: 10px;
  box-shadow: -1px -1px 10px #888888;
`;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100vw;
`;

const Button = styled.button`
  background-color: #303030;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  padding: 10px 20px;
  margin: 10px;
  box-shadow: -1px -1px 10px #888888;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;
