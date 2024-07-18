import React from "react";

const Progress = ({
  index,
  numQuestions,
  points,
  maxPossialbePoints,
  answer,
}) => {
  return (
    <div className="w-3/5 mx-auto">
      <progress
        className="w-full   bg-yellow-400 rounded-full"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <div className="flex justify-between items-center">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {maxPossialbePoints} Points
        </p>
      </div>
    </div>
  );
};

export default Progress;
