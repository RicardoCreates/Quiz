import Navbar from "@/components/Navbar";
import GlobalStyle from "../styles";
import Footer from "@/components/Footer";
import { initialQuestions } from "@/lib/db";
// import { useState } from "react";

export default function App({ Component, pageProps }) {
  // const [questions, setQuestions] = useState(initialQuestions);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} questions={initialQuestions} />
      <Navbar />
      <Footer />
    </>
  );
}
