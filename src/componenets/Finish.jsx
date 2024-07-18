import React from "react";

const Finish = ({ points, maxPossialbePoints, dispatch }) => {
  const percentage = (points / maxPossialbePoints) * 100;
  return (
    <div className=" w-1/2 mx-auto text-center">
      <div className=" w-full bg-sky-500 border border-sky-700 py-4 text-center rounded-full text-white text-xl">
        Your Scored <strong> {points} </strong> out of {maxPossialbePoints} (
        {Math.ceil(percentage)} % )
      </div>

      <button
        onClick={() =>
          dispatch({
            type: "resetquiz",
          })
        }
        className=" mt-5 text-xl px-8 py-3 rounded-full border bg-blue-500 hover:bg-blue-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Finish;
