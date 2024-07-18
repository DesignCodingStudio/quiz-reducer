import React from "react";

const Welcome = ({ numQuestions, dispatch }) => {
  return (
    <div className=" w-4/5 mx-auto   py-4 text-center ">
      <h1 className=" text-5xl">Welcome To React Quiz</h1>
      <h3 className=" text-xl  my-4">
        {numQuestions} Question to test your React Mastery
      </h3>
      <button
        onClick={() =>
          dispatch({
            type: "start",
          })
        }
        className="text-xl px-8 py-3 rounded-full border border-white bg-slate-800 hover:bg-slate-700"
      >
        Let's Start!
      </button>
    </div>
  );
};

export default Welcome;
