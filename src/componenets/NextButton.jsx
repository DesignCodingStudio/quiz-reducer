import React from "react";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return;
  if (index < numQuestions - 1)
    return (
      <div className=" w-4/5 mt-5 text-right">
        <button
          onClick={() =>
            dispatch({
              type: "nextQuestion",
            })
          }
          className="text-xl px-8 py-3 rounded-full border bg-blue-500 hover:bg-blue-600"
        >
          Next Question
        </button>
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div className=" w-4/5 mt-5 text-right">
        <button
          onClick={() =>
            dispatch({
              type: "finish",
            })
          }
          className="text-xl px-8 py-3 rounded-full border bg-blue-500 hover:bg-blue-600"
        >
          Finish
        </button>
      </div>
    );
};

export default NextButton;
