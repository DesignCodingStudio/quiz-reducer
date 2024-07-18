import React from "react";

const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  console.log(question);
  return (
    <>
      {question.options.map((opt, index) => (
        <button
          disabled={hasAnswered}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
            })
          }
          className={`text-left text-xl font-bold bg-slate-600 hover:bg-slate-500 rounded-full border border-slate-300 p-4 w-full my-2 translate-x-0 transition-all delay-100 ease-in-out [&.active]:translate-x-4 ${
            index === answer ? "active" : ""
          } ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={opt}
        >
          {opt}
        </button>
      ))}
    </>
  );
};

export default Options;
