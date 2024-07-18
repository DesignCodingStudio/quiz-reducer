import React from "react";
import Options from "./Options";

const Question = ({ question, dispatch, answer }) => {
  return (
    <div className="text-center w-3/5 mx-auto">
      <h2 className="text-2xl text-center font-medium">{question.question}</h2>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
