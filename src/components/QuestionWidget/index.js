import React, { useState } from "react";
import Button from "../Button";
import Widget from "../Widget";
import AlternativesForm from '../AlternativesForm';

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit, addResult }) {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const isCorrect = selectedAlternative === question.answer;
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const hasAlternativeSelected = selectedAlternative !== undefined;

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
      <AlternativesForm
        onSubmit={(event) => {
          event.preventDefault();
          setIsQuestionSubmited(true);
          addResult(isCorrect);
          setTimeout(() => {
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 2000);
        }}
      >
        {question.alternatives.map((alternative, index) => {
          const alternativeId = `alternative__${index}`;
          const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
          const isSelected = selectedAlternative === index;

          return (
            <Widget.Topic
              as="label"
              htmlFor={alternativeId}
              key={alternativeId}
              data-selected={isSelected}
              data-status={isQuestionSubmited && alternativeStatus}
            >
              <input
                id={alternativeId}
                type="radio"
                name={questionId}
                style={{ display: "none" }}
                onChange={() => {setSelectedAlternative(index)}}
              />
              {alternative}
            </Widget.Topic>
          );
        })}
        <Button type="submit" disabled={!hasAlternativeSelected}>Confirmar</Button>

      </AlternativesForm>
    </Widget>
  );
}

export default QuestionWidget;
