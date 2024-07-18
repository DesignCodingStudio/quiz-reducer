import React from "react";
import Options from "./Options";

const QuestionsCom = ({ questions, dispatch, answer }) => {
  const { question, options } = questions;
  console.log(questions);
  return (
    <div className="text-center w-3/5 mx-auto">
      <h2 className="text-2xl text-center font-medium">{question}</h2>
      <Options options={options} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default QuestionsCom;
