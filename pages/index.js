import React, {useState} from 'react';
import styled from "styled-components";
import db from "../db.json";
import { useRouter } from "next/router";
import Button from '../src/components/Button';
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

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
                name = event.target.value;
                router.push(`/quiz?name=${name}`);
              }}
            >
              <input placeholder="Digite seu nome" name="name" style={{width: "100%"}} onChange={(event) => {
                setName(event.target.value);
              }}></input>
              <Button type="submit" disabled={name.length === 0}>Jogar {name}</Button>
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
