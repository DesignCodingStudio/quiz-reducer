import React from "react";

const Options = ({ options }) => {
  return (
    <>
      {options.map((opt) => (
        <button
          className=" text-left text-xl font-bold bg-slate-600 hover:bg-slate-500 [&.active]:bg-yellow-500 rounded-full border border-slate-300 p-4 w-full my-2"
          key={opt}
        >
          {opt}
        </button>
      ))}
    </>
  );
};

export default Options;
