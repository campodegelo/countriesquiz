import React from "react";
import { ThemeProvider } from "styled-components";
import Quiz from "./index";
import db from "../../db.json";

function QuizDaGalera({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <Quiz dbExterno={dbExterno}></Quiz>
    </ThemeProvider>
  );
}

export default QuizDaGalera;

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split("___");
  const externalUrl = `https://${projectName}.${githubUser}.vercel.app/api/db`;

  const dbExterno = await fetch(externalUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Falha em obter os dados");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(dbExterno);

  return {
    props: { dbExterno }, // will be passed to the page component as props
  };
}
