import React, { useState } from "react";
import styled from "styled-components";
import db from "../db.json";
import { useRouter } from "next/router";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import Input from "../src/components/Input";
import LoadingWidget from '../src/components/LoadingWidget';
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import QuestionWidget from "../src/components/QuestionWidget";


export default function Quiz() {
    const questions = db.questions;
    const questionIndex = 0;
    const currentQuestion = questions[questionIndex];
    const totalQuestions = questions.length;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget question={currentQuestion} totalQuestions={totalQuestions} questionIndex={questionIndex+1}/>
        <LoadingWidget></LoadingWidget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/campodegelo" />
    </QuizBackground>
  );
}
