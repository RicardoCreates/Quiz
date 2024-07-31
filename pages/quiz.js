import styled from "styled-components";
import QuizPage from "./questions/[id]";

export default function Quiz({ questions }) {
  console.log("Questions:", questions);
  return (
    <>
      <StyledDiv>
        <SytledHeadline>Questions</SytledHeadline>
      </StyledDiv>
      <QuizPage questions={questions} />
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  width: 100vw;
`;

const SytledHeadline = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  margin-top: 40px;
  width: 80vw;
  border-radius: 10px;
  box-shadow: -1px -1px 10px #888888;
`;
