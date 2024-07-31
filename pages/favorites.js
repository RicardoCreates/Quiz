import styled from "styled-components";

export default function Favorites({
  favorites,
  questions,
  onToggleAnswerVisibility,
  answerVisibility,
}) {
  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Favorites</h1>
      </StyledHeader>
      {Object.keys(favorites)
        .filter((key) => favorites[key])
        .map((key) => {
          const question = questions[key];
          return (
            <QuestionCard key={key}>
              <div>
                <h1>{question.question}</h1>
                <p>{question.text}</p>
              </div>
              <Button onClick={() => onToggleAnswerVisibility(key)}>
                {answerVisibility[key] ? "Hide Answer" : "Show Answer"}
              </Button>
              {answerVisibility[key] && (
                <Answer>
                  <h2>Antwort</h2>
                  <p>{question.answer}</p>
                </Answer>
              )}
            </QuestionCard>
          );
        })}
    </StyledContainer>
  );
}

const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  gap: 20px;
  box-shadow: -1px -1px 10px #888888;
  width: 60vw;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  margin-top: 40px;
  width: 80vw;
  border-radius: 10px;
  box-shadow: -1px -1px 10px #888888;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Button = styled.button`
  background-color: #303030;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  box-shadow: -1px -1px 10px #888888;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
`;
