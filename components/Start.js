import styled from "styled-components";

export default function Start() {
  return (
    <>
      <StyledQuiz>
        <h1>What is the Quiz about ?</h1>
      </StyledQuiz>
      <StyledQuiz>
        <h1>How does the Quiz work ?</h1>
      </StyledQuiz>
      <StyledQuiz>
        <h1>Enjoy</h1>
      </StyledQuiz>
    </>
  );
}

const StyledQuiz = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  margin-top: 20px;
`;
