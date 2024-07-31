import Questions from "@/components/Questions";
import styled from "styled-components";

export default function Quiz({
  answerVisibility = {},
  onToggleAnswerVisibility = () => {},
  favorites = {},
  onToggleFavorite = () => {},
}) {
  const questions = {
    question1: {
      question: "Frage 1",
      text: "Was ist die Hauptstadt von Deutschland?",
      answer: "Die Hauptstadt von Deutschland ist Berlin.",
    },
    question2: {
      question: "Frage 2",
      text: "Was ist die Hauptstadt von NRW?",
      answer: "Die Hauptstadt von NRW ist Düsseldorf.",
    },
    question3: {
      question: "Frage 3",
      text: "Was ist die Hauptstadt von China?",
      answer: "Die Hauptstadt von China ist Peking.",
    },
  };

  return (
    <>
      <StyledHeader>
        <StyledHeadline>Questions</StyledHeadline>
      </StyledHeader>
      <Questions
        answerVisibility={answerVisibility}
        onToggleAnswerVisibility={onToggleAnswerVisibility}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        questions={questions}
      />
    </>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  width: 100vw;
`;

const StyledHeadline = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  margin-top: 40px;
  width: 80vw;
  border-radius: 10px;
  box-shadow: -1px -1px 10px #888888;
`;
