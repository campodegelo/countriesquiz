import React from "react";
import Button from "../Button";
import Widget from "../Widget";

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget key={questionIndex}>
      <Widget.Header>
        <h3>
          Pergunta {questionIndex} de {totalQuestions}
        </h3>
      </Widget.Header>
      <img
        alt="descriçao"
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
      </Widget.Content>
      <form onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}>
        {question.alternatives.map((alternative, index) => {
          const alternativeId = `alternative__${index}`;
          return (
            <Widget.Topic as="label" htmlFor={alternativeId} key={alternativeId}>
              <input id={alternativeId} type="radio" name={questionId} style={{display: 'none'}}/>
              {alternative}
            </Widget.Topic>
          );
        })}
        <Button type="submit">Confirmar</Button>
      </form>
    </Widget>
  );
}

export default QuestionWidget;
