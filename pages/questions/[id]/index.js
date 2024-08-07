import FavoriteButton from "@/components/Favorite/FavoriteButton";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

export default function QuizPage({ questions }) {
  console.log("Questions:", questions);

  const router = useRouter();
  const { id } = router.query;
  const [answerVisibility, setIsAnswerVisibility] = useState({
    answer1: false,
    answer2: false,
    answer3: false,
  });

  // const foundQuestion = questions.find((question) => question.id === id);
  // if (!foundQuestion) return null;

  useEffect(() => {
    // Handle the case where id is not yet available
    if (id) {
      console.log("ID is available:", id);
    } else {
      console.log("ID is not available yet");
    }
  }, [id]);

  const foundQuestion = questions.find((question) => question.id === id);

  if (!id) return <div>Loading...</div>; // Show a loading state if ID is not available yet

  if (!foundQuestion) return <div>No question found.</div>;

  const toggleAnswerVisibility = (answerKey) => {
    setIsAnswerVisibility((prevVisibility) => ({
      ...prevVisibility,
      [answerKey]: !prevVisibility[answerKey],
    }));
  };

  return (
    <StyledDiv>
      <CardContainer>
        <Question>
          <div>
            <h1>{foundQuestion.name}</h1>
            <p>{foundQuestion.question}</p>
          </div>
          <FavoriteButton />
          <Button onClick={() => toggleAnswerVisibility("answer1")}>
            {answerVisibility.answer1 ? "Hide Answer" : "Show Answer"}
          </Button>
          {answerVisibility.answer1 && (
            <div>
              <h2>Antwort</h2>
              <p>{foundQuestion.answer}</p>
            </div>
          )}
        </Question>
        <Question>
          <div>
            <h1>Frage 2</h1>
            <p>Was ist die Hauptstadt von NRW?</p>
          </div>
          <Button onClick={() => toggleAnswerVisibility("answer2")}>
            {answerVisibility.answer2 ? "Hide Answer" : "Show Answer"}
          </Button>
          {answerVisibility.answer2 && (
            <div>
              <h2>Antwort</h2>
              <p>Die Hauptstadt von NRW ist Düsseldorf.</p>
            </div>
          )}
        </Question>
        <Question>
          <div>
            <h1>Frage 3</h1>
            <p>Was ist die Hauptstadt von China?</p>
          </div>
          <Button onClick={() => toggleAnswerVisibility("answer3")}>
            {answerVisibility.answer3 ? "Hide Answer" : "Show Answer"}
          </Button>
          {answerVisibility.answer3 && (
            <div>
              <h2>Antwort</h2>
              <p>Die Hauptstadt von China ist Peking.</p>
            </div>
          )}
        </Question>
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
