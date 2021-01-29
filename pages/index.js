import React, { useState } from "react";
import db from "../db.json";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import Input from "../src/components/Input";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import Link from "../src/components/Link";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
          transition={{duration: 1}}
        >
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
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1, x: '0' },
            hidden: { opacity: 0, x: '-100%' },
          }}
          initial="hidden"
          animate="show"
          transition={{delay: 0.5, duration: 1}}
        
        >
          <Widget.Header>Quizes da Galera</Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((url) => {
                const hasName = name !== "";
                const prepareUrl = url
                  .replace(/\//g, "")
                  .replace("https:", "")
                  .replace(".vercel.app", "");

                const [repoName, user] = prepareUrl.split(".");
                let pointerEvents = "auto";
                if (!hasName) {
                  pointerEvents = "none";
                }
                return (
                  <li key={url}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${repoName}___${user}`}
                      style={{ pointerEvents: pointerEvents }}
                    >
                      {`${user}/${repoName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/campodegelo" />
    </QuizBackground>
  );
}
