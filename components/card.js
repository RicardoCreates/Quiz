import styled from "styled-components";
import { useState } from "react";

export default function Card() {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  return (
    <StyledDiv>
      <CardContainer>
        <div>
          <h1>Frage 1</h1>
          <p>Was ist die Hauptstadt von Deutschland?</p>
        </div>
        <Button onClick={toggleAnswer}>
          {isAnswerVisible ? "Hide Answer" : "Show Answer"}
        </Button>
        {isAnswerVisible && (
          <div>
            <h2>Antwort</h2>
            <p>Die Hauptstadt von Deutschland ist Berlin.</p>
          </div>
        )}
      </CardContainer>
    </StyledDiv>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: -1px -1px 10px #888888;
  gap: 20px;
  width: 80vw;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
