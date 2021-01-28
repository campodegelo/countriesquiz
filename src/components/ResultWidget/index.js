import React, { useState, useEffect } from "react";
import Widget from "../Widget";
import db from "../../../db.json";

function ResultWidget({ results }) {
    const correctOnes = results.filter((result) => result).length;
  return (
    <Widget>
      <Widget.Header>Resultados</Widget.Header>
      <Widget.Content>
        <h3>
          Você acertou{" "}
          {/* {results.reduce((actualSum, actualResult) => {
            if (actualResult === true) {
                return actualSum + 1;
            }
            return actualSum;
          }, 0)}{" "} */}
          {correctOnes}
          {" "}pergunta{correctOnes > 1 ? 's' : ''}
        </h3>
        <ul>
          {results.map((result, index) => {
            return (
              <li key={index}>
                Pergunta {index} : {result === true ? "Acerto" : "Erro"}
              </li>
            );
          })}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
