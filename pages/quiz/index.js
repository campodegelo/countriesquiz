import React, { useState, useEffect } from "react";
import styled from "styled-components";
import db from "../../db.json";
import { useRouter } from "next/router";
import AlternativesForm from "../../src/components/AlternativesForm";
import Button from "../../src/components/Button";
import Footer from "../../src/components/Footer";
import Input from "../../src/components/Input";
import LoadingWidget from "../../src/components/LoadingWidget";
import GitHubCorner from "../../src/components/GitHubCorner";
import QuizBackground from "../../src/components/QuizBackground";
import QuizContainer from "../../src/components/QuizContainer";
import QuizLogo from "../../src/components/QuizLogo";
import Widget from "../../src/components/Widget";
import QuestionWidget from "../../src/components/QuestionWidget";
import ResultWidget from "../../src/components/ResultWidget";

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function Quiz({ dbExterno }) {
  let questions = db.questions;
  let bg = db.bg;
  if (dbExterno !== undefined) {
    questions = dbExterno.questions;
    bg = dbExterno.bg;
  }
  const [results, setResults] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = questions[questionIndex];
  const totalQuestions = questions.length;
  const [screenState, setScreenState] = useState(screenStates.LOADING);

  const addResult = (result) => {
    setResults([...results, result]);
  };

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 3000);
  }, []);

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreenState("RESULT");
    }
  };

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={currentQuestion}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex + 1}
            addResult={addResult}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.LOADING && (
          <LoadingWidget></LoadingWidget>
        )}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/campodegelo" />
    </QuizBackground>
  );
}
