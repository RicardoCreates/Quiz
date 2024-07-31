import Navbar from "@/components/Navbar";
import GlobalStyle from "../styles";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [answerVisibility, setIsAnswerVisibility] = useState({
    answer1: false,
    answer2: false,
    answer3: false,
  });

  const [favorites, setFavorites] = useState({
    question1: false,
    question2: false,
    question3: false,
  });

  const onToggleAnswerVisibility = (answerKey) => {
    setIsAnswerVisibility((prevVisibility) => ({
      ...prevVisibility,
      [answerKey]: !prevVisibility[answerKey],
    }));
  };

  const toggleFavorite = (questionKey) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [questionKey]: !prevFavorites[questionKey],
    }));
  };

  console.log("Favorites state:", favorites);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component
        {...pageProps}
        answerVisibility={answerVisibility}
        onToggleAnswerVisibility={onToggleAnswerVisibility}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
      <Footer />
    </>
  );
}
