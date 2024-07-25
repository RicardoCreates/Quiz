import styled from "styled-components";

export default function Start() {
  return (
    <QuizContainer>
      <StyledQuiz>
        <h1>What is the Quiz about ?</h1>
      </StyledQuiz>
      <StyledQuiz>
        <h1>How does the Quiz work ?</h1>
      </StyledQuiz>
      <StyledQuiz>
        <h1>Enjoy</h1>
      </StyledQuiz>
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
  width: 100vw;
`;
