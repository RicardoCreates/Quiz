import styled from "styled-components";
import FavoriteButton from "./Favorite/FavoriteButton";

export default function Questions({
  answerVisibility = {},
  onToggleAnswerVisibility = {},
  favorites = {},
  onToggleFavorite = {},
  questions = {},
}) {
  return (
    <StyledDiv>
      <CardContainer>
        {Object.keys(questions).map((key) => (
          <Question key={key}>
            <div>
              <h1>{questions[key].question}</h1>
              <p>{questions[key].text}</p>
            </div>
            <FavoriteButton
              favorite={favorites[key]}
              onToggleFavorite={() => onToggleFavorite(key)}
            />
            <Button onClick={() => onToggleAnswerVisibility(key)}>
              {answerVisibility[key] ? "Hide Answer" : "Show Answer"}
            </Button>
            {answerVisibility[key] && (
              <div>
                <h2>Antwort</h2>
                <p>{questions[key].answer}</p>
              </div>
            )}
          </Question>
        ))}
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
  margin-bottom: 120px;
  border-radius: 10px;
  margin-left: 0px;
  margin-right: 0px;
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

const Question = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  gap: 50px;
  box-shadow: -1px -1px 10px #888888;
  width: 60vw;
`;
