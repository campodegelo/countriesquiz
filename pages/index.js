import React, { useState } from "react";
import styled from "styled-components";
import db from "../db.json";
import { useRouter } from "next/router";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import Input from "../src/components/Input";
import GitHubCorner from "../src/components/GitHubCorner";
import LoadingWidget from "../src/components/LoadingWidget";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Teste seus conhecimentos sobre o mundo</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                placeholder="Digite seu nome"
                name={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              ></Input>
              <Button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content />
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/campodegelo" />
    </QuizBackground>
  );
}
